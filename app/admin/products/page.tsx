import Link from "next/link";
import DeleteProductButton from "@/components/admin/DeleteProductButton";
import { db } from "@/lib/db";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category_name: string | null;
  material_id: number | null;
  featured?: number;
};

async function getProducts(): Promise<Product[]> {
  const [rows] = await db.query(`
    SELECT
      p.*,
      c.name AS category_name,
      m.name AS material_name
    FROM products p
    LEFT JOIN categories c
      ON p.category_id = c.id
    LEFT JOIN materials m
      ON p.material_id = m.id
    ORDER BY p.created_at DESC
  `);

  return rows as Product[];
}

export default async function AdminProductsPage() {
  const products = await getProducts();

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Products</h1>

        <Link
          href="/admin/products/new"
          className="bg-black px-4 py-2 text-white"
        >
          Add Product
        </Link>
      </div>

      <div className="grid gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-4 rounded border p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-20 w-20 rounded object-cover"
            />

            <div className="flex-1">
              <h2 className="font-semibold">{product.name}</h2>

              <p className="text-sm text-gray-600">
                {product.category_name ?? "Uncategorized"}
              </p>

              <p className="text-sm">
                KSh {Number(product.price).toLocaleString()}
              </p>
            </div>

            <div className="flex gap-2">
              <Link
                href={`/admin/products/${product.id}/edit`}
                className="border px-3 py-1"
              >
                Edit
              </Link>

              <DeleteProductButton id={product.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}