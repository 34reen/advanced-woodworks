import { values } from "./about-data";

export default function MissionValues() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="font-medium uppercase tracking-[3px] text-amber-700">
            Mission And Values
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">
            Our Standard Is Simple: Build Well, Communicate Clearly
          </h2>
          <p className="mt-5 leading-relaxed text-stone-600">
            We exist to make dependable, refined woodwork easier to plan,
            easier to install, and easier to keep using with pride.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-lg border border-stone-200 bg-stone-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-700 hover:bg-white hover:shadow-lg"
              >
                <span className="grid h-12 w-12 place-items-center rounded-md bg-amber-700 text-white">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-xl font-bold text-stone-950">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-stone-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
