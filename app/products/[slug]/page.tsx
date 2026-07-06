import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import type { RowDataPacket } from "mysql2";

import ProductCard from "@/components/products/ProductCard";
import ProductGallery from "@/components/products/ProductGallery";
import ProductInfo from "@/components/products/ProductInfo";

import type { ApiProduct, Product } from "@/types";

type ProductRow = ApiProduct & RowDataPacket;

async function getProduct(
  slug: string
): Promise<ApiProduct | null> {
  const [rows] = await db.query<ProductRow[]>(
    `
    SELECT
      p.*,
      c.name AS category_name
    FROM products p
    LEFT JOIN categories c
      ON p.category_id = c.id
    WHERE p.slug = ?
    LIMIT 1
    `,
    [slug]
  );

  return rows[0] ?? null;
}

async function getAllProducts(): Promise<ApiProduct[]> {
  const [rows] = await db.query<ProductRow[]>(
    `
    SELECT
      p.*,
      c.name AS category_name
    FROM products p
    LEFT JOIN categories c
      ON p.category_id = c.id
    ORDER BY p.created_at DESC
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

function mapToUIProduct(p: ApiProduct): Product {
  return {
    id: p.id,
    slug: p.slug,
    name: p.name,
    category: p.category_name ?? "Uncategorized",
    price: Number(p.price),
    description: p.description,
    image: normalizeImage(p.image),
    gallery: [normalizeImage(p.image)],
    dimensions: "Not specified",
    woodType: "MDF",
    woodTypes: ["MDF"],
    finishType: "Standard Finish",
    deliveryEstimate: "2–4 weeks",
    availability: "Made To Order",
    featured: Boolean(p.featured),
    tags: ["Handcrafted"],
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const rawProduct = await getProduct(slug);

  if (!rawProduct) {
    notFound();
  }

  const product = mapToUIProduct(rawProduct);

  const allProducts = await getAllProducts();

  const relatedProducts = allProducts
    .map(mapToUIProduct)
    .filter((p) => p.category === product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="bg-stone-100 text-stone-900">
      <section className="bg-stone-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="uppercase tracking-[3px] text-amber-400">
            Product Detail
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            {product.name}
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.08fr_0.92fr]">
          <ProductGallery
            images={product.gallery}
            name={product.name}
          />

          <ProductInfo product={product} />
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-10 text-4xl font-bold">
              Related Products
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {relatedProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}