import { FormField, inputClasses } from "./FormField";
import { StepProps } from "./types";

const budgetRanges = [
  "KES 30,000 - 60,000",
  "KES 60,000 - 100,000",
  "KES 100,000 - 180,000",
  "KES 180,000+",
];

const timelines = [
  "As soon as possible",
  "Within 2 weeks",
  "Within 1 month",
  "Flexible timeline",
];

export default function BudgetStep({ data, updateData }: StepProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-stone-950">
        Budget, timing, and contact
      </h2>
      <p className="mt-3 leading-relaxed text-stone-600">
        These details help us recommend the right material grade, finish, and
        production path before preparing a quote.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {budgetRanges.map((budget) => (
          <button
            key={budget}
            type="button"
            onClick={() => updateData({ budget })}
            className={`rounded-lg border p-4 text-left font-semibold transition ${
              data.budget === budget
                ? "border-amber-700 bg-amber-50 text-amber-800"
                : "border-stone-200 hover:border-amber-700"
            }`}
          >
            {budget}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-[2px] text-stone-500">
          Timeline
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          {timelines.map((timeline) => (
            <button
              key={timeline}
              type="button"
              onClick={() => updateData({ timeline })}
              className={`rounded-full border px-4 py-2 font-semibold transition ${
                data.timeline === timeline
                  ? "border-amber-700 bg-amber-700 text-white"
                  : "border-stone-300 hover:border-amber-700"
              }`}
            >
              {timeline}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        <FormField label="Name">
          <input
            value={data.contact.name}
            onChange={(event) =>
              updateData({
                contact: { ...data.contact, name: event.target.value },
              })
            }
            placeholder="Your name"
            className={inputClasses}
          />
        </FormField>

        <FormField label="Phone">
          <input
            value={data.contact.phone}
            onChange={(event) =>
              updateData({
                contact: { ...data.contact, phone: event.target.value },
              })
            }
            placeholder="+254..."
            className={inputClasses}
          />
        </FormField>

        <FormField label="Email">
          <input
            type="email"
            value={data.contact.email}
            onChange={(event) =>
              updateData({
                contact: { ...data.contact, email: event.target.value },
              })
            }
            placeholder="name@example.com"
            className={inputClasses}
          />
        </FormField>
      </div>
    </div>
  );
}
