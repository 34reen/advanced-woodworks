import Link from "next/link";
import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="bg-white text-stone-900">
      <ProductGrid products={products} />

      <section className="bg-stone-950 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-amber-400 uppercase tracking-[3px] font-medium">
                Bespoke Orders
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                Need A Piece Built Around Your Measurements?
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-300">
                Send your room size, reference style, preferred wood tone, and
                installation location. We will help turn it into a quote-ready
                furniture plan.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-md bg-amber-700 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-amber-800"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
