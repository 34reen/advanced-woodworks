import { Testimonial } from "@/components/about/about-data";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <figure className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-700 hover:shadow-lg">
      <blockquote className="text-lg leading-relaxed text-stone-700">
        &quot;{testimonial.quote}&quot;
      </blockquote>
      <figcaption className="mt-6 border-t border-stone-200 pt-5">
        <p className="font-bold text-stone-950">{testimonial.name}</p>
        <p className="mt-1 text-sm font-semibold uppercase tracking-[2px] text-amber-700">
          {testimonial.project}
        </p>
        <p className="mt-1 text-stone-500">{testimonial.location}</p>
      </figcaption>
    </figure>
  );
}
