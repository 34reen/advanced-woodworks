import bcrypt from "bcryptjs";
import crypto from "crypto";
export type Admin = {
  id: number;
  name: string;
  email: string;
  password_hash?: string;
};
export function generateSessionToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

/**
 * Hash a plain password before saving to DB
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

/**
 * Compare login password with stored hash
 */
export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

/**
 * Remove sensitive fields before sending admin data to client
 */
export function sanitizeAdmin(admin: Admin): Omit<Admin, "password_hash"> {
  return {
    id: admin.id,
    name: admin.name,
    email: admin.email,
  };
}