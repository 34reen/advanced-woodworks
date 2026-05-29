import Link from "next/link";
import { Product } from "@/types";
import AvailabilityBadge from "./AvailabilityBadge";

const whatsappNumber = "254700000000";

export default function ProductInfo({ product }: { product: Product }) {
  const whatsappText = encodeURIComponent(
    `Hello Advanced Woodworks, I would like to inquire about ${product.name}.`
  );
  const specs = [
    ["Dimensions", product.dimensions],
    ["Wood Type", product.woodType],
    ["Finish Type", product.finishType],
    ["Delivery Estimate", product.deliveryEstimate],
  ];

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-xl md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <AvailabilityBadge availability={product.availability} />
        <p className="text-sm font-medium uppercase tracking-[2px] text-amber-700">
          {product.category}
        </p>
      </div>

      <h1 className="mt-5 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">
        {product.name}
      </h1>

      <p className="mt-5 text-lg leading-relaxed text-stone-700">
        {product.description}
      </p>

      <p className="mt-7 text-3xl font-bold text-amber-700">
        KES {product.price.toLocaleString()}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {specs.map(([label, value]) => (
          <div
            key={label}
            className="rounded-lg border border-stone-200 bg-stone-50 p-4"
          >
            <p className="text-sm uppercase tracking-[2px] text-stone-500">
              {label}
            </p>
            <p className="mt-2 font-semibold text-stone-950">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-7">
        <p className="font-semibold text-stone-950">Available Wood Options</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.woodTypes.map((wood) => (
            <span
              key={wood}
              className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800"
            >
              {wood}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/contact"
          className="inline-flex flex-1 items-center justify-center rounded-md bg-amber-700 px-6 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-amber-800"
        >
          Request Quote
        </Link>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-md border border-emerald-600 px-6 py-4 font-semibold text-emerald-700 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:text-white"
        >
          WhatsApp Inquiry
        </a>
      </div>
    </div>
  );
}
