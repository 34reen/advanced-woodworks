import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="p-6 space-y-10">

      {/* Hero */}
      <section className="text-center py-20 bg-[#d6ccc2] rounded-lg">
        <h1 className="text-4xl font-bold">
          Crafted Woodwork, Built to Last
        </h1>
        <p className="mt-4">Custom furniture tailored for your space.</p>
      </section>

      {/* Categories */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["Living Room", "Kitchen", "Bedroom", "Office"].map((cat) => (
          <CategoryCard key={cat} title={cat} />
        ))}
      </section>

      {/* Featured Products */}
      <section className="grid md:grid-cols-3 gap-6">
        {products.slice(0, 3).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </div>
  );
}