import { CustomOrderData, StepProps } from "./types";

function reviewRows(data: CustomOrderData) {
  return [
    ["Product Type", data.productType || "Not selected"],
    ["Room", data.room || "Not selected"],
    [
      "Measurements",
      [data.dimensions.width, data.dimensions.height, data.dimensions.depth]
        .filter(Boolean)
        .join(" x ") || "Not provided",
    ],
    ["Wood Type", data.woodType || "Not selected"],
    ["Finish Type", data.finishType || "Not selected"],
    ["Style", data.style || "Not selected"],
    ["Features", data.features.join(", ") || "None selected"],
    ["Budget", data.budget || "Not selected"],
    ["Timeline", data.timeline || "Not selected"],
    ["Contact", data.contact.name || data.contact.phone || "Not provided"],
  ];
}

export default function ReviewSubmitStep({ data }: StepProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-stone-950">
        Review your custom request
      </h2>
      <p className="mt-3 leading-relaxed text-stone-600">
        This summary is ready to validate, submit to an API, or turn into a
        WhatsApp inquiry for faster follow-up.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {reviewRows(data).map(([label, value]) => (
          <div
            key={label}
            className="rounded-lg border border-stone-200 bg-stone-50 p-5"
          >
            <p className="text-sm uppercase tracking-[2px] text-stone-500">
              {label}
            </p>
            <p className="mt-2 font-semibold text-stone-950">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
