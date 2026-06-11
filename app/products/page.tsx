import ProductGrid from "@/components/products/ProductGrid";
import type { ApiProduct, Product } from "@/types";

async function getProducts(): Promise<ApiProduct[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
function normalizeImage(path: string): string {
  if (!path) return "/placeholder.jpg";

  if (path.startsWith("http")) return path;

  if (path.startsWith("/")) return path;

  return `/${path}`;
}

/**
 * Converts DB product → UI product
 */
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

export default async function ProductsPage() {
  const rawProducts = await getProducts();

  const products: Product[] = rawProducts.map(mapToUIProduct);

  return (
    <main className="bg-white text-stone-900">
      <ProductGrid products={products} />
    </main>
  );
}