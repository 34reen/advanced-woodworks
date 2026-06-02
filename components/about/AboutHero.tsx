import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-stone-950 text-white">
      <Image
        src="/images/hero.png"
        alt="Advanced Woodworks premium interior woodcraft"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-stone-950/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/75 to-transparent" />

      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-amber-300">
            About Advanced Woodworks
          </p>
          <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">
            Furniture And Woodwork Built With Purpose
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-100 md:text-xl">
            We craft custom furniture, cabinetry, interior fittings, and wood
            materials for clients who value precision, durability, and a refined
            finish.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-md bg-amber-700 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-amber-800"
            >
              Browse Products
            </Link>
            <Link
              href="/custom-orders"
              className="inline-flex items-center justify-center rounded-md border border-white/70 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-stone-950"
            >
              Request Custom Furniture
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
