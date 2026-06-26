"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type Material = {
  name: string;
  description?: string;
  price?: number;
  unit?: string;
  stock_status?: string;
  image?: string;
};

export default function EditMaterialPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;

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
  const [currentImage, setCurrentImage] =
    useState("");
  const [image, setImage] =
    useState<File | null>(null);
  const [preview, setPreview] =
    useState<string | null>(null);
  const [loading, setLoading] =
    useState(true);
  const [saving, setSaving] =
    useState(false);

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  useEffect(() => {
    async function loadMaterial() {
      try {
        const res = await fetch(
          `/api/materials/${id}`
        );

        if (!res.ok) {
          throw new Error(
            "Failed to load material"
          );
        }

        const data: Material =
          await res.json();

        setName(data.name || "");

        setDescription(
          data.description || ""
        );

        setPrice(
          data.price
            ? String(data.price)
            : ""
        );

        setUnit(data.unit || "");

        setStockStatus(
          data.stock_status ||
            "in_stock"
        );

        setCurrentImage(
          data.image || ""
        );
      } catch (error) {
        console.error(error);

        alert(
          "Failed to load material"
        );
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadMaterial();
    }
  }, [id]);

  function handleImageChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file =
      e.target.files?.[0] || null;

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setImage(file);

    if (file) {
      const objectUrl =
        URL.createObjectURL(file);

      setPreview(objectUrl);
    } else {
      setPreview(null);
    }
  }

  async function handleUpdate(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (!name.trim()) {
      alert("Name required");
      return;
    }

    setSaving(true);

    try {
      const formData =
        new FormData();

      formData.append(
        "name",
        name.trim()
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
        `/api/materials/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      const data =
        await res.json();

      if (!res.ok) {
        throw new Error(
          data.message ||
            "Update failed"
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
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="p-6">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Edit Material
      </h1>

      <form
        onSubmit={handleUpdate}
        className="space-y-4"
      >
        <input
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          className="w-full border p-2"
          placeholder="Material name"
        />

        <textarea
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          rows={4}
          placeholder="Description"
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
          placeholder="Unit"
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

        {currentImage &&
          !preview && (
            <div>
              <p className="text-sm text-gray-500 mb-2">
                Current Image
              </p>

              <img
                src={currentImage}
                alt={name}
                className="w-40 h-40 object-cover border rounded"
              />
            </div>
          )}

        <input
          type="file"
          accept="image/*"
          onChange={
            handleImageChange
          }
        />

        {preview && (
          <div>
            <p className="text-sm text-gray-500 mb-2">
              New Image Preview
            </p>

            <img
              src={preview}
              alt="Preview"
              className="w-40 h-40 object-cover border rounded"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={
            saving ||
            !name.trim()
          }
          className={`px-4 py-2 text-white ${
            saving
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black"
          }`}
        >
          {saving
            ? "Saving..."
            : "Update Material"}
        </button>
      </form>
    </div>
  );
}