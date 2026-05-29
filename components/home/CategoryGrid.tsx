import Image from "next/image";
import Link from "next/link";

const roomCategories = [
  {
    name: "Kitchen",
    description: "Cabinets, counters, storage units, and fitted kitchen woodwork.",
    image: "/images/cabinets.jpg",
  },
  {
    name: "Office",
    description: "Desks, shelving, workstations, and boardroom furniture.",
    image: "/images/product3.jpg",
  },
  {
    name: "Bedroom",
    description: "Wardrobes, bed frames, side tables, and storage solutions.",
    image: "/images/bedframe.jpg",
  },
];

const woodCategories = [
  "Mahogany",
  "Cypress",
  "MDF",
  "Pine",
];

export default function CategoryGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <p className="text-amber-700 uppercase tracking-[3px] font-medium">
            Shop By Category
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Find Furniture By Space Or Wood Type
          </h2>

          <p className="text-gray-600 mt-5 leading-relaxed">
            Choose pieces based on where they belong in your home or business,
            or start with the wood finish and material that suits your style.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8">
          <div>
            <div className="flex items-center justify-between gap-4 mb-5">
              <h3 className="text-2xl font-semibold">
                By Room
              </h3>

              <Link
                href="/products"
                className="text-amber-700 font-medium hover:text-amber-800"
              >
                View all
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {roomCategories.map((category) => (
                <Link
                  key={category.name}
                  href="/products"
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={category.image}
                      alt={`${category.name} furniture`}
                      width={600}
                      height={420}
                      className="h-56 w-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-5">
                    <h4 className="text-xl font-semibold">
                      {category.name}
                    </h4>

                    <p className="text-gray-600 mt-2 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-7 shadow-md">
            <p className="text-sm text-amber-700 uppercase tracking-[3px] font-medium">
              By Wood Type
            </p>

            <h3 className="text-2xl font-semibold mt-3">
              Pick The Material First
            </h3>

            <p className="text-gray-600 mt-3 leading-relaxed">
              Browse furniture by the material and finish you prefer, from rich
              hardwood character to clean engineered surfaces.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-7">
              {woodCategories.map((wood) => (
                <Link
                  key={wood}
                  href="/products"
                  className="border border-gray-200 rounded-md px-4 py-4 text-center font-semibold hover:border-amber-700 hover:bg-amber-50 transition"
                >
                  {wood}
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              className="block mt-7 bg-amber-700 hover:bg-amber-800 text-white text-center py-3 rounded-md transition"
            >
              Request Custom Material
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
