import { describe, it, expect } from "vitest";
import { isValidEmail } from "./validators";

describe("isValidEmail", () => {
  it("returns true for valid email", () => {
    expect(isValidEmail("user@example.com")).toBe(true);
    expect(isValidEmail("jose.m@salusmeet.es")).toBe(true);
    expect(isValidEmail(" a@b.co ")).toBe(true);
  });

  it("returns false for invalid email", () => {
    expect(isValidEmail("")).toBe(false);
    expect(isValidEmail("   ")).toBe(false);
    expect(isValidEmail("no-at-symbol.com")).toBe(false);
    expect(isValidEmail("@domain.com")).toBe(false);
    expect(isValidEmail("user@")).toBe(false);
    expect(isValidEmail("user@domain")).toBe(false);
    expect(isValidEmail("a@@b.com")).toBe(false);
  });
});
