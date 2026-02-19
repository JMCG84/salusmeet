export function isValidEmail(email: string): boolean {
  const value = email.trim();
  //regla mínima no vacio, contiene @ y tiene algo antes y después del @
  const parts = value.split("@");
  if (parts.length !== 2) {
    return false;
  }
  const [local, domain] = parts;
  if (!local) return false;
  if (!domain) return false;
  //regla mínima el dominio debe contener al menos un punto
  if (!domain.includes(".")) {
    return false;
  }
  if (domain.startsWith(".") || domain.endsWith(".")) {
    return false;
  }
  return true;
}
