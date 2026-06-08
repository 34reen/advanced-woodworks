import Image from "next/image";
import Link from "next/link";

const serviceImages = [
  {
    src: "/images/cabinets.jpg",
    alt: "Custom cabinetry installation with warm timber finishes",
    title: "Custom Cabinetry",
    className: "h-72 md:h-80",
  },
  {
    src: "/images/workshop.jpg",
    alt: "Advanced Woodworks workshop preparation for fitted interiors",
    title: "Workshop Fit-Outs",
    className: "mt-10 h-56 md:h-64",
  },
  {
    src: "/images/product5.jpg",
    alt: "Premium wood surface prepared for refinishing work",
    title: "Refinishing",
    className: "h-56 md:h-64",
  },
  {
    src: "/images/bedframe.jpg",
    alt: "Bespoke wood furniture crafted for a refined interior",
    title: "Bespoke Furniture",
    className: "-mt-6 h-72 md:h-80",
  },
];

export default function ServicesHero() {
  return (
    <section className="overflow-hidden bg-stone-100 py-24 text-stone-950 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-amber-800">
            Services / Advanced Woodworks
          </p>
          <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
            Complete Woodwork For Distinctive Interiors.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-700 md:text-xl">
            From first site visit to final handover, we design, fabricate, and
            install cabinetry, furniture, and interior woodwork with a refined
            workshop standard.
          </p>

          <Link
            href="/site-visit"
            className="mt-9 inline-flex items-center justify-center rounded-md bg-amber-800 px-7 py-4 font-semibold text-white shadow-lg shadow-amber-900/15 transition duration-300 hover:-translate-y-0.5 hover:bg-stone-950 hover:shadow-xl"
          >
            Book Site Visit
          </Link>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {serviceImages.map((image) => (
              <div
                key={image.title}
                className={`group relative overflow-hidden rounded-lg bg-stone-200 shadow-lg shadow-stone-950/10 transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-950/20 ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={image.src === "/images/cabinets.jpg"}
                  sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/65 via-stone-950/10 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold uppercase tracking-[2px] text-white">
                  {image.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
