import { describe, it, expect } from "vitest";
import { validateRegister, hasRegisterErrors } from "./registerValidator";

describe("validateRegister", () => {
  it("returns no errors for a valid form", () => {
    const errors = validateRegister({
      name: "Jose Manuel",
      email: "josemanuel@example.com",
      password: "password123",
    });
    expect(hasRegisterErrors(errors)).toBe(false);
    expect(errors).toEqual({
      name: "",
      email: "",
      password: "",
    });
  });

  it("returns field errors for an invalid form", () => {
    const errors = validateRegister({
      name: "Jo",
      email: "a@.com",
      password: "123",
    });

    expect(hasRegisterErrors(errors)).toBe(true);
    expect(errors.name).toBeTruthy();
    expect(errors.email).toBeTruthy();
    expect(errors.password).toBeTruthy();
  });
});
