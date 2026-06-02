import Image from "next/image";
import { materialCategories } from "./material-data";

export default function MaterialCategoriesGrid() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="font-medium uppercase tracking-[3px] text-amber-700">
            Categories
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">
            Material Families For Every Woodwork Scope
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {materialCategories.map((category) => (
            <div
              key={category.title}
              className="group overflow-hidden rounded-lg border border-stone-200 bg-stone-50 shadow-sm"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-950/20" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-stone-950">
                  {category.title}
                </h3>
                <p className="mt-3 leading-relaxed text-stone-600">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
