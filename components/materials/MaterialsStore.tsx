"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import MaterialCard from "./MaterialCard";

type Material = {
  id: number;
  name: string;
  slug: string;
  image?: string | null;
};

function matchesQuery(
  material: Material,
  query: string
) {
  return material.name
    .toLowerCase()
    .includes(query.toLowerCase());
}

export default function MaterialsStore() {
  const [materials, setMaterials] =
    useState<Material[]>([]);

  const [query, setQuery] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

 useEffect(() => {
  async function fetchMaterials() {
    try {
      const res = await fetch("/api/materials", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch materials");
      }

      const data: Material[] = await res.json();

      setMaterials(data);
    } catch (error) {
      console.error(error);
      setError("Unable to load materials.");
    } finally {
      setLoading(false);
    }
  }

  void fetchMaterials();
}, []);

  const filteredMaterials = useMemo(
    () =>
      materials.filter(
        (material) =>
          query.trim() === "" ||
          matchesQuery(material, query)
      ),
    [materials, query]
  );

  return (
    <section
      id="materials-store"
      className="bg-stone-100 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="font-medium uppercase tracking-[3px] text-amber-700">
              Store
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">
              Browse Workshop-Ready Materials
            </h2>
          </div>

          <div className="w-full max-w-md">
            <label className="relative block">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
              />

              <input
                value={query}
                onChange={(event) =>
                  setQuery(
                    event.target.value
                  )
                }
                placeholder="Search materials..."
                className="w-full rounded-md border border-stone-300 bg-white py-3 pl-11 pr-4 text-stone-900 outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
              />
            </label>
          </div>
        </div>

        {loading && (
          <div className="py-12 text-center text-stone-500">
            Loading materials...
          </div>
        )}

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
            <p className="font-medium text-red-600">
              {error}
            </p>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredMaterials.map(
                (material) => (
                  <MaterialCard
                    key={material.id}
                    material={material}
                  />
                )
              )}
            </div>

            {filteredMaterials.length ===
              0 && (
              <div className="rounded-lg border border-stone-200 bg-white p-8 text-center">
                <p className="text-lg font-semibold text-stone-900">
                  No materials found.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}