import { Testimonial } from "@/components/about/about-data";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <section className="bg-stone-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="font-medium uppercase tracking-[3px] text-amber-700">
            Client Stories
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">
            Trusted For Woodwork That Feels Personal And Lasts
          </h2>
          <p className="mt-5 leading-relaxed text-stone-600">
            These testimonials are data-driven so future CMS or API content can
            replace the local list cleanly.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
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
