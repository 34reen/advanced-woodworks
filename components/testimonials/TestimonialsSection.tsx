import Image from "next/image";
import { Testimonial } from "@/components/about/about-data";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      {/* Blurred background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bedframe.jpg"
          alt="Background"
          fill
          className="object-cover blur-md scale-105"
          priority
        />
        <div className="absolute inset-0 bg-stone-950/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section heading - centered, reduced margins */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-amber-400 uppercase tracking-[3px] font-medium text-sm">
            Client Stories
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight text-white">
            Trusted For Woodwork That Feels Personal And Lasts
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-200">
            Our clients come to us for custom pieces that feel considered,
            polished, and built with care from the first consultation to the
            final installation.
          </p>
        </div>

        {/* Testimonials grid - 3 columns, smaller cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={`${testimonial.name}-${testimonial.project}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}