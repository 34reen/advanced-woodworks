import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "The cabinets changed the entire feel of our kitchen. The finish is beautiful and every measurement was exact.",
    name: "Grace M.",
    project: "Kitchen cabinetry",
  },
  {
    quote:
      "Our office desks and shelves feel solid, elegant, and made for the way our team works every day.",
    name: "Daniel K.",
    project: "Office furniture",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-stone-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-amber-400 uppercase tracking-[3px] font-medium">
              Client Stories
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Trusted For Furniture That Feels Personal And Lasts
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-300">
              Our clients come to us for custom pieces that feel considered,
              polished, and built with care from the first consultation to the
              final installation.
            </p>

            <div className="mt-8 space-y-5">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-500/60 hover:bg-amber-500/10"
                >
                  <blockquote className="text-lg leading-relaxed text-stone-200">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-5">
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-sm uppercase tracking-[2px] text-amber-300">
                      {testimonial.project}
                    </p>
                  </figcaption>
                </figure>
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
                href="/products"
                className="inline-flex items-center justify-center rounded-md border border-white/25 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:bg-white hover:text-stone-950"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/images/bedframe.jpg"
              alt="Luxury custom bedroom furniture"
              width={900}
              height={680}
              className="h-[430px] w-full object-cover sm:h-[600px] group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/15 bg-black/45 p-5 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[3px] text-amber-300">
                Built Around You
              </p>
              <p className="mt-2 text-2xl font-semibold">
                Premium furniture made to suit the room and the routine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
