import { isValidEmail } from "./validators";

export type RegisterForm = {
  name: string;
  email: string;
  password: string;
};

export type RegisterErrors = {
  name: string;
  email: string;
  password: string;
};

export function validateRegister(form: RegisterForm): RegisterErrors {
  const errors: RegisterErrors = {
    name: "",
    email: "",
    password: "",
  };

  if (form.name.trim().length < 3) {
    errors.name = "El nombre debe tener al menos 3 caracteres.";
  }
  if (!isValidEmail(form.email)) {
    errors.email = "Por favor ingresa un email válido.";
  }
  if (form.password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres.";
  }

  return errors;
}

export function hasRegisterErrors(errors: RegisterErrors): boolean {
  return Boolean(errors.name || errors.email || errors.password);
}
