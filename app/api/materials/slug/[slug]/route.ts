import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import type { RowDataPacket } from "mysql2";

type MaterialRow = {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image?: string | null;
} & RowDataPacket;

export async function GET(
  _: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const [rows] = await db.query<MaterialRow[]>(
      "SELECT * FROM materials WHERE slug = ? LIMIT 1",
      [slug]
    );

    const material = rows[0];

    if (!material) {
      return NextResponse.json(
        { message: "Material not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(material);
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message: "Failed to fetch material",
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}