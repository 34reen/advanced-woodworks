import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hashPassword } from "@/lib/auth";

export async function GET() {
  try {
    const password_hash = await hashPassword("admin123");

    await db.query(
      "INSERT INTO admins (name, email, password_hash) VALUES (?, ?, ?)",
      ["Admin", "admin@woodworks.com", password_hash]
    );

    return NextResponse.json({ message: "Admin created" });
  } catch (error: unknown) {
    return NextResponse.json(
      { message: "Failed", error: String(error) },
      { status: 500 }
    );
  }
}