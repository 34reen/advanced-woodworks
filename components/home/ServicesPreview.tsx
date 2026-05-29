import Image from "next/image";
import Link from "next/link";

const services = [
  "Custom cabinets and wardrobes",
  "Office desks and fitted shelving",
  "Kitchen, bedroom, and living room furniture",
  "Repairs, refinishing, and upgrades",
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1 group overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/images/product3.jpg"
              alt="Custom office furniture and woodwork service"
              width={900}
              height={680}
              className="h-[430px] w-full object-cover sm:h-[560px] group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/15" />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-amber-700 uppercase tracking-[3px] font-medium">
              Our Services
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-stone-950">
              Complete Woodwork Solutions For Refined Interiors
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              Whether you need one signature piece or a full interior fit-out,
              we handle design guidance, material selection, fabrication, and
              installation with a careful eye for proportion and finish.
            </p>

            <div className="mt-8 space-y-4">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex gap-4 rounded-lg border border-stone-200 bg-stone-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-600 hover:bg-white hover:shadow-lg"
                >
                  <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-amber-700" />
                  <p className="text-lg font-semibold text-stone-900">
                    {service}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-amber-700 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-amber-800"
              >
                Request Quote
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md border border-stone-300 px-7 py-4 font-semibold text-stone-950 transition duration-300 hover:-translate-y-0.5 hover:border-amber-700 hover:bg-stone-50"
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
