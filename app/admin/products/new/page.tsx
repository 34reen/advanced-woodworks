"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Category = {
  id: number;
  name: string;
};

type Material = {
  id: number;
  name: string;
};

export default function NewProductPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

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
  });

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

  useEffect(() => {
    async function loadData() {
      const [catRes, matRes] = await Promise.all([
        fetch("/api/categories"),
        fetch("/api/materials"),
      ]);

      const cats = await catRes.json();
      const mats = await matRes.json();

      setCategories(cats);
      setMaterials(mats);
    }

    loadData();
  }, []);

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      if (!form.name.trim()) {
        alert("Product name required");
        return;
      }

      if (!form.description.trim()) {
        alert("Description required");
        return;
      }

      if (!form.category_id) {
        alert("Select category");
        return;
      }

      if (!form.material_id) {
        alert("Select material");
        return;
      }

      if (!form.price || Number(form.price) <= 0) {
        alert("Enter valid price");
        return;
      }

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

      const res = await fetch("/api/products", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();

        throw new Error(
          data.message || "Failed to create product"
        );
      }

      router.push("/admin/products");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Add New Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          name="name"
          placeholder="Product name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2"
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full border p-2"
          required
        />

        <select
          name="category_id"
          value={form.category_id}
          onChange={handleChange}
          className="w-full border p-2"
        >
          <option value="">
            Select category
          </option>

          {categories.map((cat) => (
            <option
              key={cat.id}
              value={cat.id}
            >
              {cat.name}
            </option>
          ))}
        </select>

        <select
          name="material_id"
          value={form.material_id}
          onChange={handleChange}
          className="w-full border p-2"
        >
          <option value="">
            Select material
          </option>

          {materials.map((mat) => (
            <option
              key={mat.id}
              value={mat.id}
            >
              {mat.name}
            </option>
          ))}
        </select>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="featured"
            checked={form.featured}
            onChange={handleChange}
          />
          Featured Product
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file =
              e.target.files?.[0] || null;

            setImage(file);

            if (file) {
              const objectUrl =
                URL.createObjectURL(file);

              setPreview(objectUrl);
            }
          }}
          className="w-full"
        />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-40 h-40 object-cover rounded border"
          />
        )}

        <button
          type="submit"
          disabled={loading}
          className={`px-4 py-2 text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black"
          }`}
        >
          {loading
            ? "Creating..."
            : "Create Product"}
        </button>
      </form>
    </div>
  );
}