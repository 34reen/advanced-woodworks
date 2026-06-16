import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const [rows] = await db.query("SELECT * FROM categories ORDER BY id DESC");
  return NextResponse.json(rows);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name } = body;

    if (!name) {
      return NextResponse.json(
        { message: "Name is required" },
        { status: 400 }
      );
    }

    await db.query(
      "INSERT INTO categories (name) VALUES (?)",
      [name]
    );

    return NextResponse.json({ message: "Category created" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create category" },
      { status: 500 }
    );
  }
}