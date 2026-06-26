import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Material = {
  id: number;
  name: string;
  slug: string;
  description?: string | null;
  image?: string | null;
};

async function getMaterial(
  slug: string
): Promise<Material | null> {
  const res = await fetch(
    `http://localhost:3000/api/materials/slug/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function MaterialDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const material =
    await getMaterial(slug);

  if (!material) {
    notFound();
  }

  const imageSrc =
    material.image ||
    "/images/workshop.jpg";

  return (
    <main className="bg-stone-100 text-stone-900 min-h-screen">
      {/* HERO */}
      <section className="bg-stone-950 text-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href="/materials"
            className="text-sm text-amber-300 hover:text-amber-200"
          >
            ← Back to Materials
          </Link>

          <h1 className="mt-6 text-4xl font-bold">
            {material.name}
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
            <Image
              src={imageSrc}
              alt={material.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              Material Details
            </h2>

            <p className="leading-relaxed text-stone-700">
              {material.description ||
                "No description available."}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}