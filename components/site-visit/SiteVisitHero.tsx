import Image from "next/image";

export default function SiteVisitHero() {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-white">
      <Image
        src="/images/workshop.jpg"
        alt="Advanced Woodworks team preparing custom woodwork"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-stone-950/75" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="font-medium uppercase tracking-[3px] text-amber-300">
            Book A Site Visit
          </p>
          <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
            Let Us Measure The Space Before We Build
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-100 md:text-xl">
            Tell us what you are planning, where the project is, and when you
            prefer a visit. The form prepares a structured inquiry for
            WhatsApp now and future API submission later.
          </p>
        </div>
      </div>
    </section>
  );
}
