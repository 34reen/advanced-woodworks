import Image from "next/image";
import Link from "next/link";
import { featuredServiceProjects } from "./service-data";

export default function ServicesPortfolioPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-medium uppercase tracking-[3px] text-amber-700">
              Portfolio Preview
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">
              Recent Work With A Made-To-Fit Standard
            </h2>
          </div>
          <Link
            href="/products"
            className="font-semibold text-amber-700 transition hover:text-amber-800"
          >
            View product portfolio
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {featuredServiceProjects.map((project, index) => (
            <Link
              key={`${project.serviceSlug}-${project.title}`}
              href={`/services/${project.serviceSlug}`}
              className={`group relative min-h-[360px] overflow-hidden rounded-lg ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 25vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[2px] text-amber-200">
                  {project.serviceTitle}
                </p>
                <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
                <p className="mt-1 text-stone-200">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
