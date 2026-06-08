import Image from "next/image";
import { Testimonial } from "@/components/about/about-data";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  const imageSrc = testimonial.image || "/images/client-placeholder.jpg"; // fallback

  return (
    <figure className="rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 p-5 transition hover:-translate-y-1 hover:bg-white/15">
      {/* Client image - circular, smaller */}
      <div className="flex justify-center mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400">
          <Image
            src={imageSrc}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
      {/* Quote - smaller font */}
      <blockquote className="text-center text-white text-base leading-relaxed">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-4 text-center">
        <p className="font-semibold text-white text-base">
          {testimonial.name}
        </p>
        <p className="mt-1 text-xs uppercase tracking-[2px] text-amber-300">
          {testimonial.project}
        </p>
        {testimonial.location && (
          <p className="mt-1 text-xs text-stone-300">{testimonial.location}</p>
        )}
      </figcaption>
    </figure>
  );
}