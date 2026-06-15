"use client";

import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
type ParamsContext = {
  params?: {
    id?: string;
  };
};

export async function DELETE(req: Request, context: ParamsContext) {
  console.log("PARAMS:", context.params);

  const id = context.params?.id;

  console.log("ID:", id);

  return NextResponse.json({ debug: true });
}

export default function DeleteProductButton({ id }: { id: number }) {
  const router = useRouter();

  async function handleDelete() {
    const confirmDelete = confirm("Delete this product?");
    if (!confirmDelete) return;

    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      router.refresh();
    } else {
      alert("Failed to delete product");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="px-3 py-1 border text-red-600"
    >
      Delete
    </button>
  );
}