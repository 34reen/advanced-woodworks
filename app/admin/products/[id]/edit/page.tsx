"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category_id: number;
  featured: number;
};

export default function EditProductPage() {
  const params = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category_id: "",
    featured: false,
     image: ""
  });

  const [image, setImage] = useState<File | null>(null);
  const [categories, setCategories] = useState<
  { id: number; name: string }[]
>([]);

  // Load existing product
  useEffect(() => {
  async function loadData() {
    const [productRes, catRes] = await Promise.all([
      fetch(`/api/products/${params.id}`),
      fetch(`/api/categories`)
    ]);

    const product = await productRes.json();
    const cats = await catRes.json();

    setCategories(cats);

    setForm({
      name: product.name ?? "",
      description: product.description ?? "",
      price: String(product.price ?? ""),
      category_id: String(product.category_id ?? ""),
      featured: Boolean(product.featured),
       image: product.image ?? ""
    });

    setLoading(false);
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

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();
    setSaving(true);

    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("description", form.description);
    formData.append("price", form.price);
    formData.append("category_id", form.category_id);
    formData.append("featured", String(form.featured));

    if (image) {
      formData.append("image", image);
    }

    const res = await fetch(
      `/api/products/${params.id}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    if (res.ok) {
      router.push("/admin/products");
    } else {
      alert("Failed to update product");
    }

    setSaving(false);
  }

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Edit Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2"
        />

        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          className="w-full border p-2"
        />
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

        <label className="flex gap-2">
          <input
            type="checkbox"
            name="featured"
            checked={form.featured}
            onChange={handleChange}
          />
          Featured
        </label>
        {form.image && !image && (
  <div className="mb-4">
    <p className="text-sm text-gray-500 mb-2">
      Current Image
    </p>

    <img
      src={form.image}
      alt={form.name}
      className="w-40 h-40 object-cover border rounded"
    />
  </div>
)}

        <input
          type="file"
          onChange={(e) =>
            setImage(
              e.target.files?.[0] || null
            )
          }
        />
        {image && (
  <div className="mt-3">
    <p className="text-sm text-gray-500 mb-2">
      New Image Preview
    </p>

    <img
      src={URL.createObjectURL(image)}
      alt="Preview"
      className="w-40 h-40 object-cover border rounded"
    />
  </div>
)}

        <button
          type="submit"
          disabled={saving}
          className="bg-black text-white px-4 py-2"
        >
          {saving
            ? "Saving..."
            : "Update Product"}
        </button>
      </form>
    </div>
  );
}