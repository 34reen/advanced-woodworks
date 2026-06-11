import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import type { RowDataPacket } from "mysql2";

type Params = {
  params: {
    slug: string;
  };
};

export async function GET(req: Request, { params }: Params) {
  try {
    const [rows] = await db.query<RowDataPacket[]>(
      `
      SELECT 
        p.*,
        c.name AS category_name
      FROM products p
      LEFT JOIN categories c
      ON p.category_id = c.id
      WHERE p.slug = ?
      LIMIT 1
      `,
      [params.slug]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch product" },
      { status: 500 }
    );
  }
}