import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    console.log("DELETE ID:", id);

    if (!id) {
      return NextResponse.json(
        { message: "Missing id" },
        { status: 400 }
      );
    }

    await db.query("DELETE FROM categories WHERE id = ?", [
      id,
    ]);

    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await req.json();

    const { name } = body;

    if (!name) {
      return NextResponse.json(
        { message: "Name is required" },
        { status: 400 }
      );
    }

    await db.query(
      "UPDATE categories SET name = ? WHERE id = ?",
      [name, id]
    );

    return NextResponse.json({
      message: "Updated",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update" },
      { status: 500 }
    );
  }
}