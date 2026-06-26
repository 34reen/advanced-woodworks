"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Stats = {
  products: number;
  categories: number;
  materials: number;
  featured: number;
};

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    async function loadStats() {
      const res = await fetch("/api/admin/stats");
      const data = await res.json();
      setStats(data);
    }

    loadStats();
  }, []);

  if (!stats) {
    return <div>Loading dashboard...</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      {/* STATS GRID */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 border rounded">
          <p className="text-sm text-gray-500">Products</p>
          <p className="text-2xl font-bold">{stats.products}</p>
        </div>

        <div className="p-4 border rounded">
          <p className="text-sm text-gray-500">Categories</p>
          <p className="text-2xl font-bold">{stats.categories}</p>
        </div>

        <div className="p-4 border rounded">
          <p className="text-sm text-gray-500">Materials</p>
          <p className="text-2xl font-bold">{stats.materials}</p>
        </div>

        <div className="p-4 border rounded">
          <p className="text-sm text-gray-500">Featured</p>
          <p className="text-2xl font-bold">{stats.featured}</p>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Quick Actions</h2>

        <div className="flex gap-3">
          <Link
            href="/admin/products"
            className="px-4 py-2 border"
          >
            Manage Products
          </Link>

          <Link
            href="/admin/categories"
            className="px-4 py-2 border"
          >
            Manage Categories
          </Link>

          <Link
            href="/admin/products/new"
            className="px-4 py-2 border"
          >
            Add Product
          </Link>
        </div>
      </div>
    </div>
  );
}