import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "The cabinets changed the entire feel of our kitchen. The finish is beautiful and every measurement was exact.",
    name: "Grace M.",
    project: "Kitchen cabinetry",
    image: "/images/client1.jpg", // placeholder – replace with actual client photo
  },
  {
    quote:
      "Our office desks and shelves feel solid, elegant, and made for the way our team works every day.",
    name: "Daniel K.",
    project: "Office furniture",
    image: "/images/client2.jpg",
  },
  {
    quote:
      "The custom bed frame transformed our bedroom. Incredible craftsmanship and attention to detail.",
    name: "Julia S.",
    project: "Bedroom joinery",
    image: "/images/client3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Blurred background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bedframe.jpg"
          alt="Background"
          fill
          className="object-cover blur-md scale-105"
          priority
        />
        <div className="absolute inset-0 bg-stone-950/70" /> {/* Dark overlay for readability */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-amber-400 uppercase tracking-[3px] font-medium">
            Client Stories
          </p>
          <p className="mt-6 text-lg leading-relaxed text-stone-200">
            Our clients come to us for custom pieces that feel considered,
            polished, and built with care from the first consultation to the
            final installation.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition hover:-translate-y-1 hover:bg-white/15"
            >
              {/* Client image */}
              <div className="flex justify-center mb-4">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-amber-400">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Quote */}
              <blockquote className="text-center text-white text-lg leading-relaxed">
                “{testimonial.quote}”
              </blockquote>
              {/* Name and project */}
              <figcaption className="mt-5 text-center">
                <p className="font-semibold text-white text-lg">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm uppercase tracking-[2px] text-amber-300">
                  {testimonial.project}
                </p>
              </figcaption>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}