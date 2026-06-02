import Image from "next/image";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-stone-950 text-white">
      <Image
        src="/images/hero.png"
        alt="Premium fitted woodwork interior by Advanced Woodworks"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-stone-950/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/70 to-transparent" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-amber-300">
            Advanced Woodworks Services
          </p>
          <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">
            Complete Woodwork For Distinctive Interiors
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-100 md:text-xl">
            From first site visit to final handover, we design, fabricate, and
            install cabinetry, furniture, and interior woodwork with a refined
            workshop standard.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/site-visit"
              className="inline-flex items-center justify-center rounded-md bg-amber-700 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-amber-800"
            >
              Book Site Visit
            </Link>
            <Link
              href="#services-overview"
              className="inline-flex items-center justify-center rounded-md border border-white/70 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-stone-950"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
