import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { deleteImage, uploadImage } from "@/lib/cloudinary";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

/* ---------------- GET SINGLE PRODUCT ---------------- */

export async function GET(
  req: Request,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    const [rows] = await db.query(
      "SELECT * FROM products WHERE id = ? LIMIT 1",
      [id]
    );

    const productRows = rows as Array<{
      id: number;
      name: string;
      slug: string;
      description: string;
      price: number;
      image: string;
      featured: number;
      category_id: number;
    }>;

    if (productRows.length === 0) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(productRows[0]);
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message: "Failed to fetch product",
        error: String(error),
      },
      { status: 500 }
    );
  }
}

/* ---------------- UPDATE PRODUCT ---------------- */

export async function PUT(
  req: Request,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    const formData = await req.formData();

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = Number(formData.get("price"));
    const category_id = Number(formData.get("category_id"));
    const material_id = Number(formData.get("material_id"));
    const featured = formData.get("featured") === "true";
    const imageFile = formData.get("image") as File | null;

    let imagePath: string | null = null;
    let previousImagePath: string | null = null;

    // Only upload if new image selected
    if (imageFile && imageFile.size > 0) {
      const [rows] = await db.query(
        "SELECT image FROM products WHERE id = ? LIMIT 1",
        [id]
      );

      const productRows = rows as Array<{
        image: string | null;
      }>;

      previousImagePath =
        productRows[0]?.image ?? null;

      imagePath = await uploadImage(
        imageFile,
        "advanced-woodworks/products"
      );

      await deleteImage(previousImagePath);
    }

    if (imagePath) {
      await db.query(
        `
        UPDATE products
        SET name=?, description=?, price=?, category_id=?, material_id=?, featured=?, image=?
        WHERE id=?
        `,
        [
          name,
          description,
          price,
          category_id,
          material_id,
          featured,
          imagePath,
          id,
        ]
      );
    } else {
      await db.query(
        `
        UPDATE products
        SET name=?, description=?, price=?, category_id=?, featured=?
        WHERE id=?
        `,
        [
          name,
          description,
          price,
          category_id,
          featured,
          id,
        ]
      );
    }

    return NextResponse.json({
      message: "Product updated successfully",
    });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message: "Failed to update product",
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}

/* ---------------- DELETE PRODUCT ---------------- */

export async function DELETE(
  req: Request,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        { message: "Product ID is required" },
        { status: 400 }
      );
    }

    const [rows] = await db.query(
      "SELECT image FROM products WHERE id = ? LIMIT 1",
      [id]
    );

    const productRows = rows as Array<{
      image: string | null;
    }>;

    if (productRows.length) {
      await deleteImage(productRows[0].image);
    }

    await db.query(
      "DELETE FROM products WHERE id = ?",
      [id]
    );

    return NextResponse.json({
      message: "Product deleted successfully",
    });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message: "Failed to delete product",
        error: String(error),
      },
      { status: 500 }
    );
  }
}
