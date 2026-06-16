import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import type { RowDataPacket } from "mysql2";

type CountRow = RowDataPacket & {
  count: number;
};

type DashboardStats = {
  totalProducts: number;
  featuredProducts: number;
  totalCategories: number;
};

export async function GET() {
  try {
    const [productsRows] = await db.query<CountRow[]>(
      `
      SELECT COUNT(*) AS count
      FROM products
      `
    );

    const [featuredRows] = await db.query<CountRow[]>(
      `
      SELECT COUNT(*) AS count
      FROM products
      WHERE featured = 1
      `
    );

    const [categoriesRows] = await db.query<CountRow[]>(
      `
      SELECT COUNT(*) AS count
      FROM categories
      `
    );

    const stats: DashboardStats = {
      totalProducts: productsRows[0].count,
      featuredProducts: featuredRows[0].count,
      totalCategories: categoriesRows[0].count,
    };

    return NextResponse.json(stats);
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message: "Failed to fetch dashboard stats",
        error: String(error),
      },
      { status: 500 }
    );
  }
}