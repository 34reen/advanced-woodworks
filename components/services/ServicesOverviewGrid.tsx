import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "./service-data";

export default function ServicesOverviewGrid() {
  return (
    <section id="services-overview" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="font-medium uppercase tracking-[3px] text-amber-700">
            Service Menu
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">
            Built-In Quality, From One Room To Full Interiors
          </h2>
          <p className="mt-5 leading-relaxed text-stone-600">
            Each service is structured for clear briefs, accurate measurements,
            durable materials, and a clean handover process.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group overflow-hidden rounded-lg border border-stone-200 bg-stone-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-700 hover:bg-white hover:shadow-xl"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-950/20" />
              </div>

              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[2px] text-amber-700">
                      {service.eyebrow}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold text-stone-950">
                      {service.title}
                    </h3>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-stone-950 text-white transition group-hover:bg-amber-700">
                    <ArrowUpRight size={20} />
                  </span>
                </div>

                <p className="mt-4 leading-relaxed text-stone-600">
                  {service.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {service.idealFor.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-stone-200 bg-white px-3 py-1 text-sm font-semibold text-stone-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
