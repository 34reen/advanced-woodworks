"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type Category = {
  id: number;
  name: string;
};

type Material = {
  id: number;
  name: string;
};

export default function EditProductPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [categories, setCategories] = useState<Category[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category_id: "",
    material_id: "",
    featured: false,
    image: ""
  });

  // Cleanup preview URL
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  // Load product + dropdown data
  useEffect(() => {
    async function loadData() {
      try {
        const [productRes, catRes, matRes] = await Promise.all([
          fetch(`/api/products/${params.id}`),
          fetch(`/api/categories`),
          fetch(`/api/materials`)
        ]);

        const product = await productRes.json();
        const cats = await catRes.json();
        const mats = await matRes.json();

        setCategories(cats);
        setMaterials(mats);

        setForm({
          name: product.name ?? "",
          description: product.description ?? "",
          price: String(product.price ?? ""),
          category_id: String(product.category_id ?? ""),
          material_id: String(product.material_id ?? ""),
          featured: Boolean(product.featured),
          image: product.image ?? ""
        });
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [params.id]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("description", form.description);
      formData.append("price", form.price);
      formData.append("category_id", form.category_id);
      formData.append("material_id", form.material_id);
      formData.append("featured", String(form.featured));

      if (image) {
        formData.append("image", image);
      }

      const res = await fetch(`/api/products/${params.id}`, {
        method: "PUT",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to update product");
      }

      router.push("/admin/products");
    } catch (err) {
      alert("Failed to update product");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="p-6 text-gray-500">
        Loading product data...
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Edit Product
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2"
          placeholder="Product name"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2"
          placeholder="Description"
        />

        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          className="w-full border p-2"
          placeholder="Price"
        />

        {/* CATEGORY */}
        <select
          name="category_id"
          value={form.category_id}
          onChange={handleChange}
          className="w-full border p-2"
        >
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        {/* MATERIAL */}
        <select
          name="material_id"
          value={form.material_id}
          onChange={handleChange}
          className="w-full border p-2"
        >
          <option value="">Select material</option>
          {materials.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </select>

        {/* FEATURED */}
        <label className="flex gap-2 items-center">
          <input
            type="checkbox"
            name="featured"
            checked={form.featured}
            onChange={handleChange}
          />
          Featured
        </label>

        {/* CURRENT IMAGE */}
        {form.image && !image && (
          <div>
            <p className="text-sm text-gray-500 mb-2">
              Current Image
            </p>
            <img
              src={form.image}
              className="w-40 h-40 object-cover border rounded"
              alt={form.name}
            />
          </div>
        )}

        {/* NEW IMAGE */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0] || null;
            setImage(file);

            if (file) {
              setPreview(URL.createObjectURL(file));
            }
          }}
        />

        {preview && (
          <div>
            <p className="text-sm text-gray-500 mb-2">
              New Image Preview
            </p>
            <img
              src={preview}
              className="w-40 h-40 object-cover border rounded"
              alt="Preview"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={saving}
          className="bg-black text-white px-4 py-2"
        >
          {saving ? "Saving..." : "Update Product"}
        </button>
      </form>
    </div>
  );
}