import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import AvailabilityBadge from "./AvailabilityBadge";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block overflow-hidden rounded-xl border border-stone-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={650}
          height={480}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm font-medium uppercase tracking-[2px] text-amber-700">
            {product.category}
          </p>
          <AvailabilityBadge availability={product.availability} />
        </div>

        <h2 className="mt-3 text-2xl font-semibold text-stone-950">
          {product.name}
        </h2>

        <p className="mt-3 line-clamp-2 leading-relaxed text-stone-600">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="text-xl font-bold text-amber-700">
            KES {product.price.toLocaleString()}
          </p>

          <span className="rounded-md border border-stone-300 px-4 py-2 font-semibold text-stone-900 transition group-hover:border-amber-700 group-hover:bg-amber-700 group-hover:text-white">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
}
