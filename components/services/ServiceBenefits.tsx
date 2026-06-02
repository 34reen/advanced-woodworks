import { Check } from "lucide-react";

export default function ServiceBenefits({
  description,
  benefits,
}: {
  description: string;
  benefits: string[];
}) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="font-medium uppercase tracking-[3px] text-amber-700">
            Service Detail
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">
            Crafted Around The Room, Not A Template
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            {description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-lg border border-stone-200 bg-stone-50 p-5"
            >
              <span className="mb-4 grid h-10 w-10 place-items-center rounded-md bg-amber-700 text-white">
                <Check size={20} />
              </span>
              <p className="text-lg font-semibold leading-snug text-stone-950">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
