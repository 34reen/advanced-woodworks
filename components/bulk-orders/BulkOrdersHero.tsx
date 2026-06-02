import Image from "next/image";

export default function BulkOrdersHero() {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-white">
      <Image
        src="/images/cabinets.jpg"
        alt="Bulk wood materials prepared for cabinetry projects"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-stone-950/75" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="font-medium uppercase tracking-[3px] text-amber-300">
            Bulk Orders
          </p>
          <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
            Material Supply For Larger Woodwork Projects
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-100 md:text-xl">
            Prepare a structured material inquiry for contractor, commercial,
            and multi-room project quantities.
          </p>
        </div>
      </div>
    </section>
  );
}
