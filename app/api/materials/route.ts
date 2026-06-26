import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import type { RowDataPacket } from "mysql2";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { writeFile } from "fs/promises";

type MaterialRow = {
  id: number;
  name: string;
  slug: string;
  description?: string | null;
  price?: number | null;
  unit?: string | null;
  stock_status?: string | null;
  image?: string | null;
} & RowDataPacket;

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

/**
 * GET ALL MATERIALS
 */
export async function GET() {
  try {
    const [rows] = await db.query<MaterialRow[]>(
      "SELECT * FROM materials ORDER BY id DESC"
    );

    return NextResponse.json(rows);
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message: "Failed to fetch materials",
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}

/**
 * CREATE MATERIAL
 */
export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;

    const description =
      (formData.get("description") as string) || "";

    const price =
      Number(formData.get("price")) || 0;

    const unit =
      (formData.get("unit") as string) || "";

    const stockStatus =
      (formData.get("stock_status") as string) ||
      "in_stock";

    const imageFile =
      formData.get("image") as File | null;

    if (!name || !name.trim()) {
      return NextResponse.json(
        { message: "Name is required" },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const slug = slugify(cleanName);

    let imagePath: string | null = null;

    if (imageFile && imageFile.size > 0) {
      const bytes =
        await imageFile.arrayBuffer();

      const buffer = Buffer.from(bytes);

      const filename = `${uuidv4()}-${imageFile.name}`;

      const uploadPath = path.join(
        process.cwd(),
        "public/uploads/materials",
        filename
      );

      await writeFile(uploadPath, buffer);

      imagePath = `/uploads/materials/${filename}`;
    }

    await db.query(
      `
      INSERT INTO materials
      (
        name,
        slug,
        description,
        price,
        unit,
        stock_status,
        image
      )
      VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
      [
        cleanName,
        slug,
        description,
        price,
        unit,
        stockStatus,
        imagePath,
      ]
    );

    return NextResponse.json({
      message: "Material created successfully",
      slug,
    });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message: "Failed to create material",
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}