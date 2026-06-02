import Image from "next/image";
import Link from "next/link";
import { Material } from "./material-data";
import StrengthMeter from "./StrengthMeter";

export default function MaterialCard({ material }: { material: Material }) {
  return (
    <Link
      href={`/materials/${material.slug}`}
      className="group block overflow-hidden rounded-lg border border-stone-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:border-amber-700 hover:shadow-2xl"
    >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={material.image}
          alt={material.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm font-medium uppercase tracking-[2px] text-amber-700">
            {material.category}
          </p>
          <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-bold text-stone-700">
            {material.availability}
          </span>
        </div>

        <h3 className="mt-3 text-2xl font-semibold text-stone-950">
          {material.name}
        </h3>
        <p className="mt-3 line-clamp-2 leading-relaxed text-stone-600">
          {material.summary}
        </p>

        <div className="mt-5">
          <StrengthMeter rating={material.strengthRating} compact />
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="text-xl font-bold text-amber-700">
            KES {material.priceFrom.toLocaleString()}
          </p>
          <span className="rounded-md border border-stone-300 px-4 py-2 font-semibold text-stone-900 transition group-hover:border-amber-700 group-hover:bg-amber-700 group-hover:text-white">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
}
