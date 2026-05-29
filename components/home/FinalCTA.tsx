import Image from "next/image";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-white">
      <Image
        src="/images/hero.png"
        alt="Premium custom woodwork interior"
        width={1600}
        height={900}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-amber-300 uppercase tracking-[3px] font-medium">
              Start Your Project
            </p>

            <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
              Let&apos;s Build Furniture Worth Keeping
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-stone-200">
              Share your dimensions, preferred wood tone, and the room you want
              to transform. We will help shape the idea into a durable,
              polished piece made for your space.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-amber-700 px-7 py-4 font-semibold text-white shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-800"
              >
                Request Quote
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md border border-white/35 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-stone-950"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
