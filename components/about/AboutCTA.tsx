import Image from "next/image";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-white">
      <Image
        src="/images/hero.png"
        alt="Advanced Woodworks custom furniture interior"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-stone-950/75" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-medium uppercase tracking-[3px] text-amber-300">
              Start Your Project
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              Work With A Team That Understands The Room And The Material
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-stone-200">
              Browse finished products, request custom furniture, or contact us
              with your measurements and project goals.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md bg-amber-700 px-7 py-4 font-semibold text-white transition hover:bg-amber-800"
              >
                Browse Products
              </Link>
              <Link
                href="/custom-orders"
                className="inline-flex items-center justify-center rounded-md border border-white/35 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-stone-950"
              >
                Custom Furniture
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white/35 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-stone-950"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
