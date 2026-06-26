import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import type { RowDataPacket } from "mysql2";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { writeFile } from "fs/promises";

type Context = {
  params: Promise<{ id: string }>;
};

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
 * GET SINGLE MATERIAL
 */
export async function GET(
  _: Request,
  context: Context
) {
  try {
    const { id } = await context.params;

    const [rows] = await db.query<
      MaterialRow[]
    >(
      `
      SELECT
        id,
        name,
        slug,
        description,
        price,
        unit,
        stock_status,
        image
      FROM materials
      WHERE id = ?
      LIMIT 1
      `,
      [id]
    );

    if (!rows.length) {
      return NextResponse.json(
        { message: "Material not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      rows[0]
    );
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message:
          "Failed to fetch material",
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
 * UPDATE MATERIAL
 */
export async function PUT(
  req: Request,
  context: Context
) {
  try {
    const { id } = await context.params;

    const formData =
      await req.formData();

    const name = formData.get(
      "name"
    ) as string;

    const description =
      formData.get(
        "description"
      ) as string;

    const price = formData.get(
      "price"
    ) as string;

    const unit = formData.get(
      "unit"
    ) as string;

    const stockStatus =
      formData.get(
        "stock_status"
      ) as string;

    const imageFile =
      formData.get(
        "image"
      ) as File | null;

    if (!name || !name.trim()) {
      return NextResponse.json(
        {
          message:
            "Name is required",
        },
        { status: 400 }
      );
    }

    const cleanName =
      name.trim();

    const slug =
      slugify(cleanName);

    const [rows] =
      await db.query<
        MaterialRow[]
      >(
        `
        SELECT image
        FROM materials
        WHERE id = ?
        LIMIT 1
        `,
        [id]
      );

    if (!rows.length) {
      return NextResponse.json(
        {
          message:
            "Material not found",
        },
        { status: 404 }
      );
    }

    let imagePath =
      rows[0].image ?? null;

    // Replace image if uploaded
    if (
      imageFile &&
      imageFile.size > 0
    ) {
      const bytes =
        await imageFile.arrayBuffer();

      const buffer =
        Buffer.from(bytes);

      const filename = `${uuidv4()}-${imageFile.name}`;

      const uploadPath =
        path.join(
          process.cwd(),
          "public/uploads/materials",
          filename
        );

      await writeFile(
        uploadPath,
        buffer
      );

      imagePath = `/uploads/materials/${filename}`;
    }

    await db.query(
      `
      UPDATE materials
      SET
        name = ?,
        slug = ?,
        description = ?,
        price = ?,
        unit = ?,
        stock_status = ?,
        image = ?
      WHERE id = ?
      `,
      [
        cleanName,
        slug,
        description || null,
        price
          ? Number(price)
          : null,
        unit || null,
        stockStatus ||
          "in_stock",
        imagePath,
        id,
      ]
    );

    return NextResponse.json({
      message:
        "Material updated successfully",
    });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message:
          "Failed to update material",
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
 * DELETE MATERIAL
 */
export async function DELETE(
  _: Request,
  context: Context
) {
  try {
    const { id } = await context.params;

    await db.query(
      "DELETE FROM materials WHERE id = ?",
      [id]
    );

    return NextResponse.json({
      message:
        "Deleted successfully",
    });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message:
          "Failed to delete material",
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}