import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import type { RowDataPacket } from "mysql2";

type CountRow = RowDataPacket & {
  count: number;
};

export async function GET() {
  try {
    const [products] = await db.query<CountRow[]>(
      "SELECT COUNT(*) AS count FROM products"
    );

    const [categories] = await db.query<CountRow[]>(
      "SELECT COUNT(*) AS count FROM categories"
    );

    const [featured] = await db.query<CountRow[]>(
      "SELECT COUNT(*) AS count FROM products WHERE featured = 1"
    );

    return NextResponse.json({
      products: products[0].count,
      categories: categories[0].count,
      featured: featured[0].count,
    });
  } catch {
    return NextResponse.json(
      { message: "Failed to load stats" },
      { status: 500 }
    );
  }
}