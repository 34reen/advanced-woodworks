import { FormField, inputClasses } from "./FormField";
import { StepProps } from "./types";

export default function MeasurementsStep({ data, updateData }: StepProps) {
  const updateDimensions = (
    key: keyof typeof data.dimensions,
    value: string
  ) => {
    updateData({
      dimensions: {
        ...data.dimensions,
        [key]: value,
      },
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-stone-950">
        Share the measurements
      </h2>
      <p className="mt-3 leading-relaxed text-stone-600">
        Approximate dimensions are enough for the first quote. We can refine
        everything during site measurement.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        <FormField label="Width">
          <input
            value={data.dimensions.width}
            onChange={(event) => updateDimensions("width", event.target.value)}
            placeholder="e.g. 240 cm"
            className={inputClasses}
          />
        </FormField>

        <FormField label="Height">
          <input
            value={data.dimensions.height}
            onChange={(event) => updateDimensions("height", event.target.value)}
            placeholder="e.g. 220 cm"
            className={inputClasses}
          />
        </FormField>

        <FormField label="Depth">
          <input
            value={data.dimensions.depth}
            onChange={(event) => updateDimensions("depth", event.target.value)}
            placeholder="e.g. 60 cm"
            className={inputClasses}
          />
        </FormField>
      </div>

      <div className="mt-5">
        <FormField label="Measurement Notes">
          <textarea
            value={data.dimensions.notes}
            onChange={(event) => updateDimensions("notes", event.target.value)}
            placeholder="Mention wall angles, ceiling height, existing fittings, or installation constraints."
            rows={5}
            className={inputClasses}
          />
        </FormField>
      </div>
    </div>
  );
}
