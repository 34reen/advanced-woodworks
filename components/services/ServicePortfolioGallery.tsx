import Image from "next/image";
import { ServiceProject } from "./service-data";

export default function ServicePortfolioGallery({
  projects,
}: {
  projects: ServiceProject[];
}) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="font-medium uppercase tracking-[3px] text-amber-700">
            Portfolio Gallery
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">
            Selected Work In This Service
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <figure
              key={project.title}
              className="overflow-hidden rounded-lg border border-stone-200 bg-stone-50 shadow-sm"
            >
              <div className="relative h-80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="p-5">
                <h3 className="text-xl font-bold text-stone-950">
                  {project.title}
                </h3>
                <p className="mt-1 text-stone-600">{project.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
