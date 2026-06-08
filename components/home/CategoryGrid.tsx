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
  { name: "Mahogany", icon: "🪵" },
  { name: "Cypress", icon: "🌲" },
  { name: "MDF", icon: "📄" },
  { name: "Pine", icon: "🌳" },
];

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-gray-50">   {/* reduced vertical padding */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-8">
          <h2 className="text-amber-700 uppercase tracking-[3px] font-medium text-sm">
            Shop By Category
          </h2>
        </div>

        {/* By Room section - full width, stacked above */}
        <div className="mb-16">
          <div className="flex items-center justify-between gap-4 mb-5">
            <h3 className="text-xl font-semibold">   {/* smaller heading */}
              By Room
            </h3>
            <Link
              href="/products"
              className="text-amber-700 font-medium hover:text-amber-800 text-sm"
            >
              View all
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                    className="h-40 w-full object-cover group-hover:scale-105 transition duration-500"   // smaller image
                  />
                </div>
                <div className="p-3">   {/* reduced padding */}
                  <h4 className="text-lg font-semibold">   {/* smaller title */}
                    {category.name}
                  </h4>
                  <p className="text-gray-600 mt-1 text-sm leading-relaxed">   {/* smaller text */}
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* By Wood Type section - full width, stacked below */}
        <div className="bg-white rounded-lg p-5 shadow-md">   {/* reduced padding */}
          <h2 className="text-xs text-amber-700 uppercase tracking-[3px] font-medium">
            By Wood Type
          </h2>
          

          <div className="flex items-center gap-50 ml-20 mt-5">
            <div className="flex flex-wrap justify-between gap-30"> 
            {woodCategories.map((wood) => (
              <Link
                key={wood.name}
                href="/products"
                className="flex flex-col items-center gap-1 w-20 group"
              >
                <div className="w-20 h-20 rounded-full border-2 border-gray-200 flex items-center justify-center bg-gray-50 group-hover: border-amber-700 group-hover:bg-amber-50 transition">   {/* circular icons */}
                {/* Generic placeholder icon */}
                <span className="text-3xl" aria-hidden="true">
                  {wood.icon}
                </span>
                </div>
                <span className="text-sm font-medium text-center">{wood.name}</span>
              </Link>
            ))}
      </div>

          <Link
            href="/contact"
            className="bg-amber-700 hover:bg-amber-800 text-white text-center py-1.5 px-4 rounded-md transition text-sm whitespace-nowrap"
          >
            Request Custom Material
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}