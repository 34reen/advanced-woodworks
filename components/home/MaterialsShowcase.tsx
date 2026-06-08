import Image from "next/image";
import Link from "next/link";

const materials = [
  {
    name: "Mahogany",
    tone: "Rich, warm, and refined",
    image: "/images/materials/mahogany.jpg", // placeholder – replace with actual image
  },
  {
    name: "Cypress",
    tone: "Clean grain with natural strength",
    image: "/images/materials/cypress.jpg",
  },
  {
    name: "Pine",
    tone: "Light, versatile, and welcoming",
    image: "/images/materials/pine.jpg",
  },
  {
    name: "MDF",
    tone: "Smooth modern painted finishes",
    image: "/images/materials/mdf.jpg",
  },
];

export default function MaterialsShowcase() {
  return (
    <section className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Text content - full width */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-amber-700 uppercase tracking-[3px] font-medium">
            Material Showcase
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-stone-950">
            Choose The Wood Character That Defines Your Space
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-700">
            From deep hardwood warmth to crisp contemporary surfaces, every
            piece begins with a material selected for beauty, durability, and
            the way it will live inside your home or office.
          </p>
        </div>

        {/* Materials grid - 4 cards horizontally */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((material) => (
            <div
              key={material.name}
              className="group rounded-lg border border-stone-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:border-amber-600 hover:shadow-xl"
            >
              {/* Material image */}
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src={material.image}
                  alt={`${material.name} plywood material`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              {/* Content */}
              <div className="p-5">
                <div className="mb-4 h-1 w-12 rounded-full bg-amber-700" />
                <h3 className="text-xl font-semibold text-stone-950">
                  {material.name}
                </h3>
                <p className="mt-2 text-stone-600">{material.tone}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Link to materials page */}
        <div className="mt-12 text-center">
          <Link
            href="/materials"
            className="inline-flex items-center justify-center rounded-md border border-amber-700 bg-transparent px-6 py-3 font-semibold text-amber-800 transition duration-300 hover:bg-amber-700 hover:text-white"
          >
            View All Materials →
          </Link>
        </div>
      </div>
    </section>
  );
}