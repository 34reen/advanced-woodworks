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
        {/* Text content - centered at top */}
        <div className="max-w-3xl mx-auto text-center mb-12">
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
        </div>

        {/* Services grid - cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service}
              className="group rounded-lg border border-stone-200 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:border-amber-600 hover:shadow-xl"
            >
              {/* Decorative amber bar */}
              <div className="mb-4 h-1 w-12 rounded-full bg-amber-700" />
              <p className="text-lg font-semibold text-stone-900 leading-relaxed">
                {service}
              </p>
            </div>
          ))}
        </div>

        {/* Link to services page */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md border border-amber-700 bg-transparent px-6 py-3 font-semibold text-amber-800 transition duration-300 hover:bg-amber-700 hover:text-white"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}