import Image from "next/image";
import Link from "next/link";
import { Service } from "./service-data";

export default function ServiceDetailHero({ service }: { service: Service }) {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-white">
      <Image
        src={service.image}
        alt={service.title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-stone-950/70" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Link
          href="/services"
          className="text-sm font-semibold uppercase tracking-[2px] text-amber-300 transition hover:text-amber-200"
        >
          Back To Services
        </Link>

        <div className="mt-10 max-w-4xl">
          <p className="font-medium uppercase tracking-[3px] text-amber-300">
            {service.eyebrow}
          </p>
          <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-100 md:text-xl">
            {service.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
