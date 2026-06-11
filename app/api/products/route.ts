import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await db.query(`
      SELECT
        p.*,
        c.name AS category_name
      FROM products p
      LEFT JOIN categories c
      ON p.category_id = c.id
      ORDER BY p.created_at DESC
    `);

    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 500 }
    );
  }
}