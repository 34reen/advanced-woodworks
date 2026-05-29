import { StepProps } from "./types";

const styles = [
  "Modern Minimal",
  "Classic Luxury",
  "Warm Rustic",
  "Contemporary Office",
  "Hotel-Inspired",
];

const features = [
  "Soft-close drawers",
  "Hidden storage",
  "LED lighting",
  "Glass panels",
  "Open shelving",
  "Cable management",
];

export default function StylePreferencesStep({ data, updateData }: StepProps) {
  const toggleFeature = (feature: string) => {
    const selected = data.features.includes(feature)
      ? data.features.filter((item) => item !== feature)
      : [...data.features, feature];

    updateData({ features: selected });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-stone-950">
        Define the style and details
      </h2>
      <p className="mt-3 leading-relaxed text-stone-600">
        Pick the design language and useful features that will make the final
        piece feel made for your daily routine.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {styles.map((style) => (
          <button
            key={style}
            type="button"
            onClick={() => updateData({ style })}
            className={`rounded-lg border p-5 text-left text-lg font-semibold transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
              data.style === style
                ? "border-amber-700 bg-amber-50 text-amber-800"
                : "border-stone-200 bg-white text-stone-900"
            }`}
          >
            {style}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-[2px] text-stone-500">
          Preferred Features
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <button
              key={feature}
              type="button"
              onClick={() => toggleFeature(feature)}
              className={`rounded-md border px-4 py-3 text-left font-semibold transition ${
                data.features.includes(feature)
                  ? "border-amber-700 bg-amber-700 text-white"
                  : "border-stone-300 hover:border-amber-700"
              }`}
            >
              {feature}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
