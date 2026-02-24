import { describe, it, expect, beforeEach } from "vitest";
import { authService } from "./auth.service";

describe("authService", () => {
  beforeEach(() => {
    authService.clearAll();
  });

  it("registers a user and creates a session", async () => {
    const res = await authService.register({
      name: "Jose Manuel",
      email: "jose@example.com",
      password: "12345678",
    });

    expect(res.ok).toBe(true);
    if (res.ok) {
      expect(res.user.email).toBe("jose@example.com");
      expect(authService.getSession()).not.toBeNull();
      expect(authService.getSession()?.email).toBe("jose@example.com");
    }
  });

  it("rejects register when email already exists", async () => {
    await authService.register({
      name: "Jose Manuel",
      email: "jose@example.com",
      password: "12345678",
    });

    const res2 = await authService.register({
      name: "Otro",
      email: "JOSE@example.com",
      password: "12345678",
    });

    expect(res2.ok).toBe(false);
    if (!res2.ok) {
      expect(res2.errors.email).toContain("ya está registrado");
    }
  });

  it("rejects register with invalid data", async () => {
    const res = await authService.register({
      name: "Jo",
      email: "a@.com",
      password: "123",
    });

    expect(res.ok).toBe(false);
    if (!res.ok) {
      expect(res.errors.name).toBeTruthy();
      expect(res.errors.email).toBeTruthy();
      expect(res.errors.password).toBeTruthy();
    }
  });

  it("logs in an existing user with correct credentials", async () => {
    await authService.register({
      name: "Jose Manuel",
      email: "jose@example.com",
      password: "12345678",
    });
    authService.logout();

    const res = await authService.login("jose@example.com", "12345678");
    expect(res.ok).toBe(true);
    expect(authService.getSession()).not.toBeNull();
  });

  it("fails login with wrong password", async () => {
    await authService.register({
      name: "Jose Manuel",
      email: "jose@example.com",
      password: "12345678",
    });
    authService.logout();

    const res = await authService.login("jose@example.com", "wrong");
    expect(res.ok).toBe(false);
    if (!res.ok) expect(res.error).toBeTruthy();
    expect(authService.getSession()).toBeNull();
  });
});
