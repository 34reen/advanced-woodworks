import Image from "next/image";
import { workshopImages } from "./about-data";

export default function WorkshopShowcase() {
  return (
    <section className="bg-stone-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Centered heading and description */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="font-medium uppercase tracking-[3px] text-amber-700">
            Workshop Showcase
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">
            Where Materials Become Finished Interiors
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Our workshop process supports each stage of a project: material
            selection, cutting, assembly, sanding, finishing, and site-ready
            preparation.
          </p>
        </div>

        {/* Image grid - 4 equal cards (assumes workshopImages now has 4 items) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {workshopImages.map((image) => (
            <figure
              key={image.title}
              className="group overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-64 overflow-hidden md:h-72">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-4">
                <p className="text-lg font-bold text-stone-950">
                  {image.title}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}