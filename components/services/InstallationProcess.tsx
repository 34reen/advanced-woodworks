import { ClipboardCheck, Hammer, Ruler, Sparkles } from "lucide-react";
import { installationProcess } from "./service-data";

const icons = [Ruler, Hammer, ClipboardCheck, Sparkles];

export default function InstallationProcess() {
  return (
    <section className="bg-stone-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="font-medium uppercase tracking-[3px] text-amber-700">
              Installation Process
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">
              Planned In The Workshop, Finished On Site
            </h2>
            <p className="mt-5 leading-relaxed text-stone-600">
              A polished installation depends on what happens before the team
              arrives. We prepare measurements, parts, hardware, and site notes
              so fitting feels calm and exact.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {installationProcess.map((step, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={step.title}
                  className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-md bg-amber-700 text-white">
                      <Icon size={22} />
                    </span>
                    <span className="text-sm font-bold uppercase tracking-[2px] text-stone-400">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-stone-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
