import { Check } from "lucide-react";
import { Material } from "./material-data";

export default function MaterialDetailSections({
  material,
}: {
  material: Material;
}) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
        <div className="rounded-lg border border-stone-200 bg-stone-50 p-6 md:p-8">
          <p className="font-medium uppercase tracking-[3px] text-amber-700">
            Sizes Available
          </p>
          <h2 className="mt-3 text-3xl font-bold text-stone-950">
            Stocked And Cut-List Options
          </h2>
          <div className="mt-6 grid gap-3">
            {material.sizes.map((size) => (
              <div
                key={size}
                className="rounded-md border border-stone-200 bg-white px-4 py-3 font-semibold text-stone-900"
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-stone-200 bg-stone-50 p-6 md:p-8">
          <p className="font-medium uppercase tracking-[3px] text-amber-700">
            Recommendations
          </p>
          <h2 className="mt-3 text-3xl font-bold text-stone-950">
            Best Use Cases
          </h2>
          <div className="mt-6 grid gap-3">
            {material.usageRecommendations.map((use) => (
              <div key={use} className="flex gap-3 rounded-md bg-white p-4">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-amber-700 text-white">
                  <Check size={16} />
                </span>
                <p className="font-semibold text-stone-900">{use}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
