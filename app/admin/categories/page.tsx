"use client";

import { useEffect, useState } from "react";

type Category = {
  id: number;
  name: string;
};


export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<number | null>(null);
const [editName, setEditName] = useState("");

function startEdit(cat: Category) {
  setEditingId(cat.id);
  setEditName(cat.name);
}

function cancelEdit() {
  setEditingId(null);
  setEditName("");
}

async function saveEdit(id: number) {
  const res = await fetch(`/api/categories/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: editName }),
  });

  if (res.ok) {
    setEditingId(null);
    setEditName("");
    loadCategories();
  } else {
    alert("Failed to update category");
  }
}

  async function loadCategories() {
    try {
      const res = await fetch("/api/categories");
      const data = await res.json();
      setCategories(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCategories();
  }, []);

  async function addCategory(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim()) return;

    const res = await fetch("/api/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    if (res.ok) {
      setName("");
      loadCategories();
    } else {
      alert("Failed to add category");
    }
  }

  async function deleteCategory(id: number) {
    const confirmDelete = confirm("Delete this category?");
    if (!confirmDelete) return;

    const res = await fetch(`/api/categories/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      loadCategories();
    } else {
      alert("Failed to delete category");
    }
  }

  if (loading) {
    return <div>Loading categories...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Categories</h1>

      {/* CREATE FORM */}
      <form onSubmit={addCategory} className="flex gap-2 mb-6">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New category name"
          className="border p-2 flex-1"
        />

        <button type="submit" className="bg-black text-white px-4">
          Add
        </button>
      </form>

      {/* LIST */}
     <div className="space-y-3">
  {categories.map((cat) => (
    <div
      key={cat.id}
      className="flex justify-between items-center border p-3 rounded"
    >
      {editingId === cat.id ? (
        <input
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          className="border p-1 flex-1 mr-2"
        />
      ) : (
        <span>{cat.name}</span>
      )}

      <div className="flex gap-2">
        {editingId === cat.id ? (
          <>
            <button
              onClick={() => saveEdit(cat.id)}
              className="text-green-600"
            >
              Save
            </button>
            <button
              onClick={cancelEdit}
              className="text-gray-500"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => startEdit(cat)}
              className="text-blue-600"
            >
              Edit
            </button>

            <button
              onClick={() => deleteCategory(cat.id)}
              className="text-red-600"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  ))}
</div>
    </div>
  );
}
