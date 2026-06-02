import Link from "next/link";
import { notFound } from "next/navigation";
import MaterialDetailInfo from "@/components/materials/MaterialDetailInfo";
import MaterialDetailSections from "@/components/materials/MaterialDetailSections";
import MaterialGallery from "@/components/materials/MaterialGallery";
import { getMaterialBySlug, materials } from "@/components/materials/material-data";

export function generateStaticParams() {
  return materials.map((material) => ({
    slug: material.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const material = getMaterialBySlug(slug);

  if (!material) {
    return {
      title: "Material Not Found",
    };
  }

  return {
    title: `${material.name} | Materials Store | Advanced Woodworks`,
    description: material.summary,
  };
}

export default async function MaterialDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const material = getMaterialBySlug(slug);

  if (!material) {
    notFound();
  }

  return (
    <main className="bg-stone-100 text-stone-900">
      <section className="bg-stone-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Link
            href="/materials"
            className="text-sm font-semibold uppercase tracking-[2px] text-amber-300 transition hover:text-amber-200"
          >
            Back To Materials
          </Link>
          <div className="mt-8 max-w-4xl">
            <p className="font-medium uppercase tracking-[3px] text-amber-400">
              Material Detail
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              {material.name}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <MaterialGallery images={material.gallery} name={material.name} />
          <MaterialDetailInfo material={material} />
        </div>
      </section>

      <MaterialDetailSections material={material} />

      <section className="bg-[#2f241b] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-3xl">
            <p className="font-medium uppercase tracking-[3px] text-amber-300">
              Materials Inquiry
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Need This Material In Project Quantities?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone-200">
              Request a quote for standard stock or prepare a bulk order with
              material, quantity, delivery, and use-case details.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-amber-700 px-8 py-4 font-semibold text-white transition hover:bg-amber-800"
            >
              Request Quote
            </Link>
            <Link
              href="/bulk-orders"
              className="inline-flex items-center justify-center rounded-md border border-white/60 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-stone-950"
            >
              Bulk Order Inquiry
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
