"use client";

import { useMemo, useState } from "react";
import { Filter, Search } from "lucide-react";
import MaterialCard from "./MaterialCard";
import { Material, MaterialCategory, materials } from "./material-data";

const categories: ("All" | MaterialCategory)[] = [
  "All",
  "Hardwood",
  "Softwood",
  "Engineered Board",
  "Finishing Material",
];

function matchesQuery(material: Material, query: string) {
  const target = [
    material.name,
    material.category,
    material.summary,
    material.tags.join(" "),
    material.usageRecommendations.join(" "),
  ]
    .join(" ")
    .toLowerCase();

  return target.includes(query.toLowerCase());
}

export default function MaterialsStore() {
  const [category, setCategory] = useState<"All" | MaterialCategory>("All");
  const [query, setQuery] = useState("");

  const filteredMaterials = useMemo(
    () =>
      materials.filter((material) => {
        const categoryMatch = category === "All" || material.category === category;
        const queryMatch = query.trim() === "" || matchesQuery(material, query);

        return categoryMatch && queryMatch;
      }),
    [category, query]
  );

  return (
    <section id="materials-store" className="bg-stone-100 py-24">
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

          <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label className="relative block min-w-72">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
              />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search material or use..."
                className="w-full rounded-md border border-stone-300 bg-white py-3 pl-11 pr-4 text-stone-900 outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
              />
            </label>
            <div className="flex items-center gap-2 rounded-md border border-stone-300 bg-white px-3">
              <Filter size={18} className="text-amber-700" />
              <select
                value={category}
                onChange={(event) =>
                  setCategory(event.target.value as "All" | MaterialCategory)
                }
                className="bg-transparent py-3 font-semibold text-stone-900 outline-none"
              >
                {categories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredMaterials.map((material) => (
            <MaterialCard key={material.slug} material={material} />
          ))}
        </div>

        {filteredMaterials.length === 0 && (
          <div className="rounded-lg border border-stone-200 bg-white p-8 text-center">
            <p className="text-lg font-semibold text-stone-900">
              No materials match those filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
