"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import FilterPanel from "@/components/FilterPanel";
import SearchBar from "@/components/SearchBar";
import { Category, WoodType } from "@/types";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | null>(null);
  const [wood, setWood] = useState<WoodType | null>(null);

  const filtered = products.filter((p) => {
    return (
      (!category || p.category === category) &&
      (!wood || p.woodTypes.includes(wood)) &&
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="p-6 grid md:grid-cols-4 gap-6">
      <FilterPanel
        selectedCategory={category}
        setCategory={setCategory}
        selectedWood={wood}
        setWood={setWood}
      />

      <div className="md:col-span-3 space-y-4">
        <SearchBar search={search} setSearch={setSearch} />

        <div className="grid md:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}