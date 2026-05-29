"use client";

import { useMemo, useState } from "react";
import { Category, Product, WoodType } from "@/types";
import ProductCard from "./ProductCard";

type SortOption = "featured" | "price-low" | "price-high";

const categories: Array<Category | "All"> = [
  "All",
  "Living Room",
  "Kitchen",
  "Bedroom",
  "Office",
];

const woodTypes: Array<WoodType | "All"> = [
  "All",
  "Mahogany",
  "Cypress",
  "MDF",
  "Pine",
];

export default function ProductGrid({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "All">("All");
  const [woodType, setWoodType] = useState<WoodType | "All">("All");
  const [sort, setSort] = useState<SortOption>("featured");

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesSearch =
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase());
        const matchesCategory =
          category === "All" || product.category === category;
        const matchesWood =
          woodType === "All" || product.woodTypes.includes(woodType);

        return matchesSearch && matchesCategory && matchesWood;
      })
      .sort((a, b) => {
        if (sort === "price-low") {
          return a.price - b.price;
        }

        if (sort === "price-high") {
          return b.price - a.price;
        }

        return Number(b.featured) - Number(a.featured);
      });
  }, [category, products, search, sort, woodType]);

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 grid gap-5 rounded-xl border border-stone-200 bg-stone-50 p-5 shadow-sm lg:grid-cols-[1fr_auto_auto] lg:items-center">
          <input
            type="text"
            placeholder="Search furniture..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="h-12 rounded-md border border-stone-300 bg-white px-4 outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20"
          />

          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value as Category | "All")
            }
            className="h-12 rounded-md border border-stone-300 bg-white px-4 outline-none transition focus:border-amber-700"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item === "All" ? "All Categories" : item}
              </option>
            ))}
          </select>

          <select
            value={woodType}
            onChange={(event) =>
              setWoodType(event.target.value as WoodType | "All")
            }
            className="h-12 rounded-md border border-stone-300 bg-white px-4 outline-none transition focus:border-amber-700"
          >
            {woodTypes.map((item) => (
              <option key={item} value={item}>
                {item === "All" ? "All Wood Types" : item}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-amber-700 uppercase tracking-[3px] font-medium">
              Shop Collection
            </p>
            <h2 className="mt-3 text-4xl font-bold text-stone-950">
              Furniture Ready For Your Space
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-stone-500">
              {filteredProducts.length} pieces
            </p>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as SortOption)}
              className="h-11 rounded-md border border-stone-300 bg-white px-3 outline-none transition focus:border-amber-700"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="rounded-xl border border-dashed border-stone-300 bg-stone-50 p-10 text-center">
            <h3 className="text-2xl font-semibold text-stone-950">
              No matching furniture found
            </h3>
            <p className="mt-3 text-stone-600">
              Try a different category, wood type, or search phrase.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
