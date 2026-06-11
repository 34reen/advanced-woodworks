import { notFound } from "next/navigation";
import ProductCard from "@/components/products/ProductCard";
import ProductGallery from "@/components/products/ProductGallery";
import ProductInfo from "@/components/products/ProductInfo";

import type { ApiProduct, Product } from "@/types";

async function getProduct(slug: string): Promise<ApiProduct | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/slug/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  return res.json();
}

async function getAllProducts(): Promise<ApiProduct[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
    { cache: "no-store" }
  );

  if (!res.ok) return [];

  return res.json();
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
    price: p.price,
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
  params: { slug: string };
}) {
  const rawProduct = await getProduct(params.slug);

  if (!rawProduct) notFound();

  const product = mapToUIProduct(rawProduct);

  // 🔥 fetch all products for related section
  const allProducts = await getAllProducts();

  const relatedProducts = allProducts
    .map(mapToUIProduct)
    .filter((p) => p.category === product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="bg-stone-100 text-stone-900">
      <section className="bg-stone-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-amber-400 uppercase tracking-[3px]">
            Product Detail
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            {product.name}
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <ProductGallery
            images={product.gallery}
            name={product.name}
          />

          <ProductInfo product={product} />
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-10">
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