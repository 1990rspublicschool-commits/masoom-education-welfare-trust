export const ROLES = ["SUPER_ADMIN", "ADMIN", "STAFF", "CONTENT_MANAGER", "FINANCE_MANAGER", "PROJECT_MANAGER"] as const;
export type Role = (typeof ROLES)[number];

/** Authorization must be checked on trusted server code and in Firestore/Storage rules. */
export function hasRole(userRoles: readonly string[], allowed: readonly Role[]): boolean {
  return userRoles.some((role) => allowed.includes(role as Role));
}
