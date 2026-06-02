import { StrengthRating } from "./material-data";

export default function StrengthMeter({
  rating,
  compact = false,
}: {
  rating: StrengthRating;
  compact?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold uppercase tracking-[2px] text-stone-500">
          Strength
        </p>
        <p className="text-sm font-bold text-stone-900">{rating}/5</p>
      </div>
      <div className="mt-2 grid grid-cols-5 gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={`${compact ? "h-2" : "h-3"} rounded-full ${
              index < rating ? "bg-amber-700" : "bg-stone-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
