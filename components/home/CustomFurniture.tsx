import Image from "next/image";
import Link from "next/link";

const craftDetails = [
  "Bespoke sizing",
  "Premium wood finishes",
  "Built for daily use",
];

export default function CustomFurniture() {
  return (
    <section className="py-24 bg-stone-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 rounded-2xl bg-amber-700/20 blur-2xl opacity-70 group-hover:opacity-100 transition duration-500" />

            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/images/workshop.jpg"
                alt="Custom furniture workshop"
                width={900}
                height={680}
                className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[620px] group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/15 bg-black/45 p-5 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[3px] text-amber-300">
                  Made To Order
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  Furniture shaped around your space.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-amber-400 uppercase tracking-[3px] font-medium">
              Custom Furniture
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Signature Wood Pieces Crafted With Intention
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-300">
              Bring your exact vision to life with handcrafted tables, cabinets,
              wardrobes, shelving, and statement pieces designed to fit your
              room, finish preference, and daily routine.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {craftDetails.map((detail) => (
                <div
                  key={detail}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-4 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-amber-500/60 hover:bg-amber-500/10"
                >
                  <div className="mb-4 h-1 w-12 rounded-full bg-amber-600" />
                  <p className="font-semibold text-stone-100">
                    {detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-amber-700 px-7 py-4 font-semibold text-white shadow-lg shadow-amber-950/30 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-800"
              >
                Request Quote
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-md border border-white/25 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:bg-white hover:text-stone-950"
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
