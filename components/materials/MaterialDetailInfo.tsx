import Link from "next/link";
import { Material } from "./material-data";
import StrengthMeter from "./StrengthMeter";

export default function MaterialDetailInfo({
  material,
}: {
  material: Material;
}) {
  const specs = Object.entries(material.specifications);

  return (
    <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-xl md:p-8">
      <p className="font-medium uppercase tracking-[3px] text-amber-700">
        {material.category}
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">
        {material.name}
      </h1>
      <p className="mt-5 leading-relaxed text-stone-600">
        {material.description}
      </p>

      <div className="mt-7">
        <StrengthMeter rating={material.strengthRating} />
      </div>

      <div className="mt-8 rounded-lg bg-stone-50 p-5">
        <h2 className="text-xl font-bold text-stone-950">Pricing</h2>
        <p className="mt-3 text-3xl font-bold text-amber-700">
          KES {material.priceFrom.toLocaleString()}
        </p>
        <p className="mt-1 text-stone-600">{material.unit}</p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-800"
        >
          Request Quote
        </Link>
        <Link
          href="/bulk-orders"
          className="inline-flex items-center justify-center rounded-md border border-stone-300 px-6 py-3 font-semibold text-stone-950 transition hover:border-amber-700 hover:bg-amber-50"
        >
          Bulk Order Inquiry
        </Link>
      </div>

      <div className="mt-8 border-t border-stone-200 pt-6">
        <h2 className="text-xl font-bold text-stone-950">
          Material Specifications
        </h2>
        <dl className="mt-5 grid gap-4">
          {specs.map(([key, value]) => (
            <div
              key={key}
              className="grid gap-1 rounded-md bg-stone-50 p-4 sm:grid-cols-[0.45fr_0.55fr]"
            >
              <dt className="font-semibold capitalize text-stone-500">
                {key.replace(/([A-Z])/g, " $1")}
              </dt>
              <dd className="font-semibold text-stone-900">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
