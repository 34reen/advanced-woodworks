import Link from "next/link";

export default function BookSiteVisitCta({
  title = "Ready For A Site Visit?",
  description = "Share the project type, location, preferred date, and references so our team can prepare a focused measurement visit.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-[#2f241b] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-3xl">
            <p className="font-medium uppercase tracking-[3px] text-amber-300">
              Site Visit
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              {title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone-200">
              {description}
            </p>
          </div>

          <Link
            href="/site-visit"
            className="inline-flex items-center justify-center rounded-md bg-amber-700 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-amber-800"
          >
            Book Site Visit
          </Link>
        </div>
      </div>
    </section>
  );
}
