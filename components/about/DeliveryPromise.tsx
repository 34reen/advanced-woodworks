import { Truck } from "lucide-react";

export default function DeliveryPromise() {
  return (
    <section className="bg-[#2f241b] py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-[auto_1fr] md:items-center">
        <span className="grid h-20 w-20 place-items-center rounded-lg bg-amber-700">
          <Truck size={34} />
        </span>
        <div>
          <p className="font-medium uppercase tracking-[3px] text-amber-300">
            Nationwide Delivery
          </p>
          <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
            From Workshop To Your Site, Across Kenya
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-stone-200">
            Advanced Woodworks supports delivery planning for finished
            furniture, cabinetry, materials, and bulk orders nationwide. We
            coordinate packaging, access notes, and delivery timing around the
            project requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
