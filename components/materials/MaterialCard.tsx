import Image from "next/image";
import Link from "next/link";

type Material = {
  id: number;
  name: string;
  slug: string;
  image?: string | null;
};

export default function MaterialCard({
  material,
}: {
  material: Material;
}) {
  const imageSrc =
    material.image || "/images/workshop.jpg";

  return (
    <Link
      href={`/materials/${material.slug}`}
      className="group block overflow-hidden rounded-lg border border-stone-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:border-amber-700 hover:shadow-2xl"
    >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={imageSrc}
          alt={material.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <p className="text-sm font-medium uppercase tracking-[2px] text-amber-700">
          Premium Material
        </p>

        <h3 className="mt-3 text-2xl font-semibold text-stone-950">
          {material.name}
        </h3>

        <p className="mt-3 leading-relaxed text-stone-600">
          Quality wood material available for custom
          furniture, cabinetry, interior finishing,
          and workshop projects.
        </p>

        <div className="mt-6 flex items-center justify-between gap-4">
          <span className="text-lg font-semibold text-stone-700">
            Available Now
          </span>

          <span className="rounded-md border border-stone-300 px-4 py-2 font-semibold text-stone-900 transition group-hover:border-amber-700 group-hover:bg-amber-700 group-hover:text-white">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
}