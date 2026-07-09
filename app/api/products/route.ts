import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { uploadImage } from "@/lib/cloudinary";

// GET PRODUCTS
export async function GET() {
  try {
    const [rows] = await db.query(`
      SELECT 
        p.*, 
        c.name AS category_name,
        m.name AS material_name
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      LEFT JOIN materials m ON p.material_id = m.id
      ORDER BY p.created_at DESC
    `);

    return NextResponse.json(rows);
  } catch {
    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// CREATE PRODUCT
export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = Number(formData.get("price"));
    const category_id = Number(formData.get("category_id"));
    const material_id = Number(formData.get("material_id"));
    const featured = formData.get("featured") === "true";
    const imageFile = formData.get("image") as File;

    if (
      !name ||
      !description ||
      !price ||
      !category_id ||
      !material_id ||
      !imageFile
    ) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const imagePath = await uploadImage(
      imageFile,
      "advanced-woodworks/products"
    );

    // SLUG
    const slug = name.toLowerCase().replace(/\s+/g, "-");

    await db.query(
      `
      INSERT INTO products 
      (name, slug, description, price, category_id, material_id, image, featured)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        name,
        slug,
        description,
        price,
        category_id,
        material_id,
        imagePath,
        featured,
      ]
    );

    return NextResponse.json({
      message: "Product created successfully",
    });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message: "Failed to create product",
        error: String(error),
      },
      { status: 500 }
    );
  }
}
