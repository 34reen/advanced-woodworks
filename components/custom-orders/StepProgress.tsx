export default function StepProgress({
  steps,
  currentStep,
}: {
  steps: string[];
  currentStep: number;
}) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold uppercase tracking-[2px] text-amber-700">
          Custom Request
        </p>
        <p className="text-sm text-stone-500">
          Step {currentStep + 1} of {steps.length}
        </p>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-stone-200">
        <div
          className="h-full rounded-full bg-amber-700 transition-all duration-500"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`rounded-lg border px-3 py-3 text-sm font-semibold transition ${
              index === currentStep
                ? "border-amber-700 bg-amber-50 text-amber-800"
                : index < currentStep
                  ? "border-stone-300 bg-stone-100 text-stone-700"
                  : "border-stone-200 text-stone-400"
            }`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}
