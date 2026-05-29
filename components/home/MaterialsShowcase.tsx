import Image from "next/image";
import Link from "next/link";

const materials = [
  {
    name: "Mahogany",
    tone: "Rich, warm, and refined",
  },
  {
    name: "Cypress",
    tone: "Clean grain with natural strength",
  },
  {
    name: "Pine",
    tone: "Light, versatile, and welcoming",
  },
  {
    name: "MDF",
    tone: "Smooth modern painted finishes",
  },
];

export default function MaterialsShowcase() {
  return (
    <section className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
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

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {materials.map((material) => (
                <div
                  key={material.name}
                  className="rounded-lg border border-stone-200 bg-white p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:border-amber-600 hover:shadow-xl"
                >
                  <div className="mb-4 h-1 w-12 rounded-full bg-amber-700" />
                  <h3 className="text-xl font-semibold text-stone-950">
                    {material.name}
                  </h3>
                  <p className="mt-2 text-stone-600">
                    {material.tone}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-amber-700 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-amber-800"
              >
                Request Quote
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md border border-stone-300 px-7 py-4 font-semibold text-stone-950 transition duration-300 hover:-translate-y-0.5 hover:border-amber-700 hover:bg-white"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/images/cabinets.jpg"
              alt="Premium wood cabinet material finish"
              width={900}
              height={680}
              className="h-[430px] w-full object-cover sm:h-[560px] group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/15 bg-black/45 p-5 text-white backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[3px] text-amber-300">
                Finish First
              </p>
              <p className="mt-2 text-2xl font-semibold">
                Grain, tone, and texture selected before the first cut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
