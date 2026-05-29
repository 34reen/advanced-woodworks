import { StepProps } from "./types";

const woodOptions = [
  ["Mahogany", "Rich, premium hardwood character"],
  ["Cypress", "Clean grain and reliable strength"],
  ["MDF", "Smooth painted or laminated finishes"],
  ["Pine", "Warm, light, and versatile"],
];

const finishes = [
  "Natural satin",
  "Dark walnut stain",
  "Matte painted finish",
  "Textured laminate",
  "High-gloss lacquer",
];

export default function WoodTypeStep({ data, updateData }: StepProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-stone-950">
        Select wood and finish direction
      </h2>
      <p className="mt-3 leading-relaxed text-stone-600">
        Material and finish shape the mood of the piece, from warm traditional
        woodcraft to sleek contemporary cabinetry.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {woodOptions.map(([wood, description]) => (
          <button
            key={wood}
            type="button"
            onClick={() => updateData({ woodType: wood })}
            className={`rounded-lg border p-5 text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
              data.woodType === wood
                ? "border-amber-700 bg-amber-50"
                : "border-stone-200 bg-white"
            }`}
          >
            <h3 className="text-xl font-semibold text-stone-950">
              {wood}
            </h3>
            <p className="mt-2 text-stone-600">
              {description}
            </p>
          </button>
        ))}
      </div>

      <div className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-[2px] text-stone-500">
          Finish Preference
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          {finishes.map((finish) => (
            <button
              key={finish}
              type="button"
              onClick={() => updateData({ finishType: finish })}
              className={`rounded-full border px-4 py-2 font-semibold transition ${
                data.finishType === finish
                  ? "border-amber-700 bg-amber-700 text-white"
                  : "border-stone-300 hover:border-amber-700"
              }`}
            >
              {finish}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
