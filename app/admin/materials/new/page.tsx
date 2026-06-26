"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewMaterialPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [unit, setUnit] =
    useState("");

  const [stockStatus, setStockStatus] =
    useState("in_stock");

  const [image, setImage] =
    useState<File | null>(null);

  const [preview, setPreview] =
    useState<string | null>(null);

  const [loading, setLoading] =
    useState(false);

  function handleImageChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file =
      e.target.files?.[0] || null;

    setImage(file);

    if (file) {
      const objectUrl =
        URL.createObjectURL(file);

      setPreview(objectUrl);
    } else {
      setPreview(null);
    }
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (!name.trim()) {
      alert("Name is required");
      return;
    }

    setLoading(true);

    try {
      const formData =
        new FormData();

      formData.append(
        "name",
        name
      );

      formData.append(
        "description",
        description
      );

      formData.append(
        "price",
        price
      );

      formData.append(
        "unit",
        unit
      );

      formData.append(
        "stock_status",
        stockStatus
      );

      if (image) {
        formData.append(
          "image",
          image
        );
      }

      const res = await fetch(
        "/api/materials",
        {
          method: "POST",
          body: formData,
        }
      );

      const data =
        await res.json();

      if (!res.ok) {
        throw new Error(
          data.message ||
            "Failed to create material"
        );
      }

      router.push(
        "/admin/materials"
      );
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert(
          "Something went wrong"
        );
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Add Material
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          placeholder="Material name"
          className="w-full border p-2"
        />

        <textarea
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          placeholder="Material description"
          rows={4}
          className="w-full border p-2"
        />

        <input
          type="number"
          value={price}
          onChange={(e) =>
            setPrice(
              e.target.value
            )
          }
          placeholder="Price"
          className="w-full border p-2"
        />

        <input
          value={unit}
          onChange={(e) =>
            setUnit(
              e.target.value
            )
          }
          placeholder="Unit (per sheet, per meter...)"
          className="w-full border p-2"
        />

        <select
          value={stockStatus}
          onChange={(e) =>
            setStockStatus(
              e.target.value
            )
          }
          className="w-full border p-2"
        >
          <option value="in_stock">
            In Stock
          </option>

          <option value="out_of_stock">
            Out of Stock
          </option>

          <option value="pre_order">
            Pre Order
          </option>
        </select>

        <input
          type="file"
          accept="image/*"
          onChange={
            handleImageChange
          }
          className="w-full"
        />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-40 h-40 object-cover border rounded"
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
            : "Create Material"}
        </button>
      </form>
    </div>
  );
}