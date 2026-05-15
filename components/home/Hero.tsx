import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[url('/images/hero.png')] bg-cover bg-center h-screen flex items-center">
      <div className="bg-black/50 w-full h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-white">
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Quality Woodwork Crafted With Precision
          </h1>

          <p className="mt-4 text-lg max-w-xl">
            Custom furniture, cabinets, wardrobes, and interior wood solutions
            designed to transform your space.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              href="/products"
              className="bg-amber-700 hover:bg-amber-800 px-6 py-3 rounded-md"
            >
              View Products
            </Link>

            <Link
              href="/contact"
              className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}