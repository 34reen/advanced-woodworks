import Image from "next/image";
import { materials } from "./material-data";

const examples = materials.flatMap((material) =>
  material.usageExamples.slice(0, 1).map((example) => ({
    ...example,
    materialName: material.name,
  }))
);

export default function UsageExamples() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="font-medium uppercase tracking-[3px] text-amber-700">
            Usage Examples
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">
            Materials Chosen For Real Workshop Outcomes
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {examples.map((example) => (
            <article
              key={`${example.materialName}-${example.title}`}
              className="overflow-hidden rounded-lg border border-stone-200 bg-stone-50 shadow-sm"
            >
              <div className="relative h-64">
                <Image
                  src={example.image}
                  alt={example.title}
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold uppercase tracking-[2px] text-amber-700">
                  {example.materialName}
                </p>
                <h3 className="mt-2 text-xl font-bold text-stone-950">
                  {example.title}
                </h3>
                <p className="mt-3 leading-relaxed text-stone-600">
                  {example.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
