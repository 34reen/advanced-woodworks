const processSteps = [
  {
    title: "Consultation",
    detail:
      "Share your idea, measurements, room photos, preferred finish, and budget direction.",
    timeline: "Day 1",
  },
  {
    title: "Design And Quote",
    detail:
      "We confirm materials, sizing, production details, and provide a clear quote.",
    timeline: "2-3 days",
  },
  {
    title: "Workshop Build",
    detail:
      "Your furniture is crafted, assembled, finished, and checked for quality.",
    timeline: "7-21 days",
  },
  {
    title: "Delivery And Fit",
    detail:
      "We coordinate delivery, installation, final adjustments, and care guidance.",
    timeline: "Final day",
  },
];

export default function CustomProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-amber-700 uppercase tracking-[3px] font-medium">
              How It Works
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">
              A Clear Production Timeline From Idea To Installation
            </h2>
            <p className="mt-5 leading-relaxed text-stone-600">
              Custom furniture should feel exciting, not vague. Our process is
              structured so you always know what information is needed and what
              happens next.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-xl border border-stone-200 bg-stone-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-600 hover:bg-white hover:shadow-xl"
              >
                <p className="text-sm font-semibold uppercase tracking-[2px] text-amber-700">
                  {step.timeline}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-stone-950">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-stone-600">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
