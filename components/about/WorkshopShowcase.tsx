import Image from "next/image";
import { workshopImages } from "./about-data";

export default function WorkshopShowcase() {
  return (
    <section className="bg-stone-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="font-medium uppercase tracking-[3px] text-amber-700">
              Workshop Showcase
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">
              Where Materials Become Finished Interiors
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-stone-600">
            Our workshop process supports each stage of a project: material
            selection, cutting, assembly, sanding, finishing, and site-ready
            preparation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {workshopImages.map((image, index) => (
            <figure
              key={image.title}
              className={`group overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="relative h-80 overflow-hidden md:h-96">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-5">
                <p className="text-xl font-bold text-stone-950">
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
