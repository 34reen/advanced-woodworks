import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/products/ProductCard";
import ProductGallery from "@/components/products/ProductGallery";
import ProductInfo from "@/components/products/ProductInfo";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Advanced Woodworks`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug);

  return (
    <main className="bg-stone-100 text-stone-900">
      <section className="bg-stone-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <Link
            href="/products"
            className="text-sm font-semibold uppercase tracking-[2px] text-amber-300 transition hover:text-amber-200"
          >
            Back To Shop
          </Link>

          <div className="mt-8 max-w-4xl">
            <p className="text-amber-400 uppercase tracking-[3px] font-medium">
              Product Detail
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              {product.name}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <ProductGallery images={product.gallery} name={product.name} />
            <ProductInfo product={product} />
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-xl bg-white p-6 shadow-md md:p-8">
            <p className="text-amber-700 uppercase tracking-[3px] font-medium">
              Craft Notes
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {product.tags.map((tag) => (
                <div
                  key={tag}
                  className="rounded-lg border border-stone-200 bg-stone-50 p-5"
                >
                  <div className="mb-4 h-1 w-12 rounded-full bg-amber-700" />
                  <p className="text-lg font-semibold text-stone-950">
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-amber-700 uppercase tracking-[3px] font-medium">
                  Related Pieces
                </p>
                <h2 className="mt-3 text-4xl font-bold text-stone-950">
                  More From {product.category}
                </h2>
              </div>

              <Link
                href="/products"
                className="font-semibold text-amber-700 transition hover:text-amber-800"
              >
                View all products
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
