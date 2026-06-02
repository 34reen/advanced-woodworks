import Image from "next/image";

export default function BrandStory() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative overflow-hidden rounded-lg shadow-2xl">
          <Image
            src="/images/workshop.jpg"
            alt="Advanced Woodworks workshop"
            width={900}
            height={680}
            className="h-[430px] w-full object-cover md:h-[560px]"
          />
          <div className="absolute inset-0 bg-stone-950/10" />
        </div>

        <div>
          <p className="font-medium uppercase tracking-[3px] text-amber-700">
            Brand Story
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">
            A Workshop Built Around Careful, Lasting Woodcraft
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-stone-600">
            <p>
              Advanced Woodworks specializes in custom-made furniture,
              cabinetry, interior fittings, repairs, refinishing, and premium
              material supply for homes, offices, and commercial interiors.
            </p>
            <p>
              Our experience comes from practical workshop discipline:
              understanding how timber behaves, how cabinetry meets real walls,
              and how a finished piece should serve the room for years.
            </p>
            <p>
              We are committed to craftsmanship that feels refined without
              becoming fragile. Every project is guided by proportion, joinery,
              finish quality, installation planning, and clear client
              communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
