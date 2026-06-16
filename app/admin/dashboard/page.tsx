import { db } from "@/lib/db";
import type { RowDataPacket } from "mysql2";

type CountRow = RowDataPacket & {
  count: number;
};

async function getStats() {
  const [productsRows] = await db.query<CountRow[]>(
    `SELECT COUNT(*) AS count FROM products`
  );

  const [featuredRows] = await db.query<CountRow[]>(
    `SELECT COUNT(*) AS count FROM products WHERE featured = 1`
  );

  const [categoriesRows] = await db.query<CountRow[]>(
    `SELECT COUNT(*) AS count FROM categories`
  );

  return {
    totalProducts: productsRows[0].count,
    featuredProducts: featuredRows[0].count,
    totalCategories: categoriesRows[0].count,
  };
}

export default async function AdminDashboardPage() {
  const stats = await getStats();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Products */}
        <div className="p-4 border rounded">
          <p className="text-gray-500">Total Products</p>
          <p className="text-3xl font-bold">
            {stats.totalProducts}
          </p>
        </div>

        {/* Featured Products */}
        <div className="p-4 border rounded">
          <p className="text-gray-500">Featured Products</p>
          <p className="text-3xl font-bold">
            {stats.featuredProducts}
          </p>
        </div>

        {/* Categories */}
        <div className="p-4 border rounded">
          <p className="text-gray-500">Categories</p>
          <p className="text-3xl font-bold">
            {stats.totalCategories}
          </p>
        </div>
      </div>
    </div>
  );
}