import Image from "next/image";
import Link from "next/link";

const benefits = [
  "Built to exact room dimensions",
  "Material and finish selected with you",
  "Designed around storage and daily use",
];

export default function CustomOrdersHero() {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-white">
      <Image
        src="/images/workshop.jpg"
        alt="Advanced Woodworks custom furniture workshop"
        width={1600}
        height={900}
        priority
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-amber-300 uppercase tracking-[4px] font-medium">
              Custom Furniture Orders
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
              Furniture Designed Around Your Space, Style, And Routine
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-200">
              Work with Advanced Woodworks to create cabinets, wardrobes,
              desks, beds, and statement pieces that fit your measurements,
              material preference, budget, and delivery timeline.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#custom-request"
                className="inline-flex items-center justify-center rounded-md bg-amber-700 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-amber-800"
              >
                Start Custom Request
              </a>

              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md border border-white/35 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-stone-950"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-white/15 bg-black/40 p-6 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[3px] text-amber-300">
              Why Custom
            </p>
            <div className="mt-5 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-amber-400" />
                  <p className="text-stone-100">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
