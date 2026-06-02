import { ServiceProcessStep } from "./service-data";

export default function ServiceProcessTimeline({
  steps,
}: {
  steps: ServiceProcessStep[];
}) {
  return (
    <section className="bg-stone-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="font-medium uppercase tracking-[3px] text-amber-700">
            Process Timeline
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">
            From Brief To Handover
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-lg border border-stone-200 bg-white p-6 shadow-sm"
            >
              <span className="text-sm font-bold uppercase tracking-[2px] text-amber-700">
                Step 0{index + 1}
              </span>
              <h3 className="mt-4 text-xl font-bold text-stone-950">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-stone-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
