import ProductGrid from "@/components/products/ProductGrid";
import type { Product } from "@/types";
import { db } from "@/lib/db";
import type { RowDataPacket } from "mysql2";

type ProductRow = RowDataPacket & {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: string | number;
  image: string;
  featured: number;
  category_name: string | null;
};

async function getProducts(): Promise<ProductRow[]> {
  const [rows] = await db.query<ProductRow[]>(
    `
    SELECT
      p.*,
      c.name AS category_name
    FROM products p
    LEFT JOIN categories c
      ON p.category_id = c.id
    ORDER BY p.id DESC
    `
  );

  return rows;
}

function normalizeImage(path: string): string {
  if (!path) return "/placeholder.jpg";
  if (path.startsWith("http")) return path;
  if (path.startsWith("/")) return path;
  return `/${path}`;
}

function mapToUIProduct(
  p: ProductRow
): Product {
  return {
    id: p.id,
    slug: p.slug,
    name: p.name,
    category:
      p.category_name ??
      "Uncategorized",
    price: Number(p.price),
    description: p.description,
    image: normalizeImage(p.image),
    gallery: [
      normalizeImage(p.image),
    ],
    dimensions: "Not specified",
    woodType: "MDF",
    woodTypes: ["MDF"],
    finishType:
      "Standard Finish",
    deliveryEstimate:
      "2–4 weeks",
    availability:
      "Made To Order",
    featured: Boolean(
      p.featured
    ),
    tags: ["Handcrafted"],
  };
}

export default async function ProductsPage() {
  const rawProducts =
    await getProducts();

  const products =
    rawProducts.map(
      mapToUIProduct
    );

  return (
    <main className="bg-white text-stone-900">
      <ProductGrid
        products={products}
      />
    </main>
  );
}