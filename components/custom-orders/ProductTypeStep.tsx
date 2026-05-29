import { StepProps } from "./types";

const productTypes = [
  "Kitchen Cabinets",
  "Wardrobe",
  "Office Desk",
  "TV Unit",
  "Bed Frame",
  "Dining Set",
];

const rooms = ["Kitchen", "Bedroom", "Office", "Living Room", "Dining Area"];

export default function ProductTypeStep({ data, updateData }: StepProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-stone-950">
        What would you like us to build?
      </h2>
      <p className="mt-3 leading-relaxed text-stone-600">
        Choose the closest product type and the room it belongs in. This gives
        the workshop a clear starting point for materials and joinery.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {productTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => updateData({ productType: type })}
            className={`rounded-lg border p-5 text-left font-semibold transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
              data.productType === type
                ? "border-amber-700 bg-amber-50 text-amber-800"
                : "border-stone-200 bg-white text-stone-900"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-[2px] text-stone-500">
          Room
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          {rooms.map((room) => (
            <button
              key={room}
              type="button"
              onClick={() => updateData({ room })}
              className={`rounded-full border px-4 py-2 font-semibold transition ${
                data.room === room
                  ? "border-amber-700 bg-amber-700 text-white"
                  : "border-stone-300 hover:border-amber-700"
              }`}
            >
              {room}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
