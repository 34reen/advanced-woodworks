import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import type { RowDataPacket } from "mysql2";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { writeFile } from "fs/promises";

// ✅ GET PRODUCTS (you already had this)
export async function GET() {
  try {
    const [rows] = await db.query(`
      SELECT p.*, c.name AS category_name
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
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

// 🟢 CREATE PRODUCT (NEW)
export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = Number(formData.get("price"));
    const category_id = Number(formData.get("category_id"));
    const featured = formData.get("featured") === "true";
    const imageFile = formData.get("image") as File;

    if (!name || !description || !price || !category_id || !imageFile) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // 🖼️ HANDLE IMAGE UPLOAD
    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filename = `${uuidv4()}-${imageFile.name}`;
    const uploadPath = path.join(
      process.cwd(),
      "public/uploads/products",
      filename
    );

    await writeFile(uploadPath, buffer);

    const imagePath = `/uploads/products/${filename}`;

    // 🔗 SLUG GENERATION
    const slug = name.toLowerCase().replace(/\s+/g, "-");

    await db.query(
      `
      INSERT INTO products 
      (name, slug, description, price, category_id, image, featured)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
      [name, slug, description, price, category_id, imagePath, featured]
    );

    return NextResponse.json({ message: "Product created successfully" });
  } catch (error: unknown) {
    return NextResponse.json(
      { message: "Failed to create product", error: String(error) },
      { status: 500 }
    );
  }
}