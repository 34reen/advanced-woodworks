// components/home/FeaturedProducts.tsx

import Link from "next/link";

const featuredProducts = [
  {
    id: 1,
    name: "Kitchen Cabinets",
    description:
      "Functional and stylish cabinets tailored to your kitchen space.",
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "Wardrobes",
    description:
      "Modern storage solutions designed to maximize your bedroom space.",
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    name: "Office Furniture",
    description:
      "Elegant desks, shelves, and office fittings for productive spaces.",
    image: "/images/product3.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center mb-14">
          <p className="text-amber-700 uppercase tracking-[3px] font-medium">
            Featured Collection
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Crafted For Modern Living
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Explore premium handcrafted furniture and custom wood solutions
            designed for comfort, elegance, and durability.
          </p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-2xl font-semibold">
                  {product.name}
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-6 flex gap-3">

                  <Link
                    href="/products"
                    className="flex-1 bg-amber-700 hover:bg-amber-800 text-white text-center py-3 rounded-md transition"
                  >
                    View Products
                  </Link>

                  <Link
                    href="/contact"
                    className="flex-1 border border-gray-300 hover:bg-gray-100 text-center py-3 rounded-md transition"
                  >
                    Inquire
                  </Link>

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* BOTTOM CTA */}
        <div className="text-center mt-14">

          <Link
            href="/products"
            className="inline-block bg-black text-white px-8 py-4 rounded-md hover:bg-gray-900 transition"
          >
            Browse Full Collection
          </Link>

        </div>

      </div>
    </section>
  );
}