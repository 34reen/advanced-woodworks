"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Material = {
  id: number;
  name: string;
  slug: string;
  image?: string | null;
};

export default function MaterialsPage() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadMaterials() {
    try {
      const res = await fetch("/api/materials", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch materials");
      }

      const data = await res.json();
      setMaterials(data);
    } catch (error) {
      console.error(error);
      alert("Failed to load materials");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await loadMaterials();
    };

    fetchData();
  }, []);

  async function deleteMaterial(id: number) {
    const confirmed = confirm(
      "Are you sure you want to delete this material?"
    );

    if (!confirmed) return;

    try {
      const res = await fetch(
        `/api/materials/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error(
          "Failed to delete material"
        );
      }

      await loadMaterials();
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  }

  if (loading) {
    return (
      <div className="p-6">
        Loading materials...
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Materials
        </h1>

        <Link
          href="/admin/materials/new"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add Material
        </Link>
      </div>

      {/* Materials List */}
      <div className="space-y-4">
        {materials.length === 0 ? (
          <p className="text-gray-500">
            No materials found.
          </p>
        ) : (
          materials.map((material) => (
            <div
              key={material.id}
              className="border rounded p-4 flex justify-between items-center"
            >
              {/* Left */}
              <div className="flex items-center gap-4">
                {material.image ? (
                  <img
                    src={material.image}
                    alt={material.name}
                    className="w-16 h-16 object-cover rounded border"
                  />
                ) : (
                  <div className="w-16 h-16 border rounded flex items-center justify-center text-xs text-gray-400">
                    No Image
                  </div>
                )}

                <div>
                  <h2 className="font-medium">
                    {material.name}
                  </h2>

                  <p className="text-sm text-gray-500">
                    {material.slug}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Link
                  href={`/admin/materials/${material.id}/edit`}
                  className="text-blue-600"
                >
                  Edit
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    deleteMaterial(
                      material.id
                    )
                  }
                  className="text-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}