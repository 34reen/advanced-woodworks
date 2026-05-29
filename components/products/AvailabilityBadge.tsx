import { Availability } from "@/types";

const badgeStyles: Record<Availability, string> = {
  "In Stock": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Made To Order": "bg-amber-50 text-amber-800 border-amber-200",
  "Limited Stock": "bg-stone-100 text-stone-800 border-stone-300",
};

export default function AvailabilityBadge({
  availability,
}: {
  availability: Availability;
}) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-sm font-semibold ${badgeStyles[availability]}`}
    >
      {availability}
    </span>
  );
}
