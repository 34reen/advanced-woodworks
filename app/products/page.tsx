// app/products/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  featured?: number | boolean;
};
const categories: string[] = [
  "All",
  "Living Room",
  "Bedroom",
  "Office",
  "Kitchen",
  "Outdoor",
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  // Products from API
 const [products, setProducts] = useState<Product[]>([]);

  // Optional loading state
  const [loading, setLoading] = useState(true);

  // FETCH PRODUCTS FROM PHP API
  useEffect(() => {
    fetch("http://localhost/advanced-woodworks-api/products/get-products.php")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const featuredProducts = products.filter(
    (item) => item.featured == 1 || item.featured === true
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading products...
      </div>
    );
  }

  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="relative h-[70vh] bg-[url('/images/products-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/55 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <p className="uppercase tracking-[4px] text-sm text-amber-400 mb-3">
              Premium Woodcraft Collection
            </p>

            <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
              Elegant Furniture Designed For Modern Living
            </h1>

            <p className="mt-5 max-w-2xl text-gray-200 text-lg">
              Discover handcrafted furniture pieces, custom cabinetry,
              wardrobes, and interior wood solutions tailored for homes
              and businesses.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#products"
                className="bg-amber-700 hover:bg-amber-800 px-6 py-3 rounded-md font-medium"
              >
                Browse Products
              </a>

              <Link
                href="/contact"
                className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition"
              >
                Request Custom Order
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="border-b bg-white sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">

          <input
            type="text"
            placeholder="Search products..."
            className="border rounded-md px-4 py-3 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-amber-600"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md border transition ${
                  selectedCategory === category
                    ? "bg-amber-700 text-white border-amber-700"
                    : "hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURED */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-12 text-center">
            <p className="text-amber-700 font-medium uppercase tracking-[3px]">
              Signature Collection
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Featured Premium Products
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img
  src={`http://localhost/advanced-woodworks-api/uploads/${item.image}`}
  alt={item.name}
/>

                <div className="p-6">
                  <p className="text-sm text-amber-700 mb-2">
                    {item.category}
                  </p>

                  <h3 className="text-2xl font-semibold">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-xl font-bold">
                    KES {Number(item.price).toLocaleString()}
                  </p>

                  <div className="mt-5 flex gap-3">
                    <button className="bg-amber-700 text-white px-4 py-2 rounded-md hover:bg-amber-800">
                      Inquire
                    </button>

                    <button className="border px-4 py-2 rounded-md hover:bg-gray-100">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">
            <h2 className="text-4xl font-bold">
              Our Products
            </h2>

            <p className="text-gray-500">
              {filteredProducts.length} items found
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group border rounded-xl overflow-hidden hover:shadow-lg transition"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-72 w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {product.category}
                  </p>

                  <h3 className="text-xl font-semibold">
                    {product.name}
                  </h3>

                  <p className="mt-3 text-lg font-bold text-amber-700">
                    KES {Number(product.price).toLocaleString()}
                  </p>

                  <div className="mt-5 flex gap-3">
                    <button className="flex-1 bg-amber-700 text-white py-2 rounded-md hover:bg-amber-800">
                      Inquire
                    </button>

                    <button className="flex-1 border py-2 rounded-md hover:bg-gray-100">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-700 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Need A Custom Furniture Piece?
          </h2>

          <p className="mt-4 text-lg text-amber-100">
            We build wardrobes, cabinets, office desks, TV units,
            and personalized wood solutions made to fit your space.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-white text-amber-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-100"
          >
            Request Quote
          </Link>
        </div>
      </section>

    </main>
  );
}