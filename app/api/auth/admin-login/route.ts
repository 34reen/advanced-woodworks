import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sanitizeAdmin, Admin, verifyPassword, generateSessionToken } from "@/lib/auth";
import type { RowDataPacket } from "mysql2";

type LoginRequest = {
  email: string;
  password: string;
};

export async function POST(req: Request) {
  try {
    const body: LoginRequest = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const [rows] = await db.query<RowDataPacket[]>(
      "SELECT * FROM admins WHERE email = ? LIMIT 1",
      [email]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const admin = rows[0] as Admin;

    // ✅ VERIFY PASSWORD (THIS WAS MISSING)
    const isValid = await verifyPassword(password, admin.password_hash!);

    if (!isValid) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // ✅ Generate session token
    const token = generateSessionToken();

    await db.query(
      "UPDATE admins SET session_token = ? WHERE id = ?",
      [token, admin.id]
    );

    const response = NextResponse.json({
      message: "Login successful",
      admin: sanitizeAdmin(admin),
    });

    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    });

    return response;
  } catch (error: unknown) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}