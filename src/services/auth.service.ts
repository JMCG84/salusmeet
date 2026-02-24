import {
  validateRegister,
  hasRegisterErrors,
  type RegisterForm,
} from "../utils/registerValidator";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
};

export type Session = {
  userId: string;
  email: string;
  createdAt: string;
};

const USERS_KEY = "salusmeet_users_v1";
const SESSION_KEY = "salusmeet_sessions_v1";

function readUsers(): User[] {
  const raw = localStorage.getItem(USERS_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as User[];
  } catch {
    return [];
  }
}

function writeUsers(users: User[]): void {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function writeSessions(sessions: Session): void {
  localStorage.setItem(SESSION_KEY, JSON.stringify(sessions));
}

function readSessions(): Session | null {
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Session;
  } catch {
    return null;
  }
}

function writeSession(session: Session): void {
  writeSessions(session);
}

function removeSession(): void {
  localStorage.removeItem(SESSION_KEY);
}

function makeId(): string {
  return `u_${Math.random().toString(16).slice(2)}_${Date.now()}`;
}

//api publica del servicio de autenticacion
export const authService = {
  async register(
    form: RegisterForm,
  ): Promise<
    | { ok: true; user: User }
    | { ok: false; errors: ReturnType<typeof validateRegister> }
  > {
    const errors = validateRegister(form);
    if (hasRegisterErrors(errors)) {
      return { ok: false, errors };
    }
    const users = readUsers();
    const emailNormalized = form.email.trim().toLowerCase();

    const emailExists = users.some(
      (u) => u.email.toLowerCase() === emailNormalized,
    );
    if (emailExists) {
      return {
        ok: false,
        errors: {
          name: "",
          email: "Este email ya está registrado",
          password: "",
        },
      };
    }

    const newUser: User = {
      id: makeId(),
      name: form.name.trim(),
      email: emailNormalized,
      password: form.password,
      createdAt: new Date().toISOString(),
    };
    users.push(newUser);
    writeUsers(users);

    writeSession({
      userId: newUser.id,
      email: newUser.email,
      createdAt: new Date().toISOString(),
    });
    return { ok: true, user: newUser };
  },

  login(
    email: string,
    password: string,
  ): { ok: true; user: User } | { ok: false; error: string } {
    const users = readUsers();
    const emailNormalized = email.trim().toLowerCase();
    const user = users.find((u) => u.email.toLowerCase() === emailNormalized);
    if (!user) {
      return { ok: false, error: "Credenciales incorrectas" };
    }
    if (user.password !== password) {
      return { ok: false, error: "Credenciales incorrectas" };
    }
    writeSession({
      userId: user.id,
      email: user.email,
      createdAt: new Date().toISOString(),
    });
    return { ok: true, user };
  },

  logout(): void {
    removeSession();
  },

  getSession(): Session | null {
    return readSessions();
  },
  //util para reset manual en dev
  clearAll(): void {
    localStorage.removeItem(USERS_KEY);
    localStorage.removeItem(SESSION_KEY);
  },
};
