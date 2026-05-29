import { Category, WoodType } from "@/types";

interface FilterPanelProps {
  selectedCategory: Category | null;
  setCategory: (category: Category | null) => void;
  selectedWood: WoodType | null;
  setWood: (wood: WoodType | null) => void;
}

export default function FilterPanel({
  selectedCategory,
  setCategory,
  selectedWood,
  setWood,
}: FilterPanelProps) {
  const categories: Category[] = [
    "Living Room",
    "Kitchen",
    "Bedroom",
    "Office",
  ];

  const woodTypes: WoodType[] = ["Mahogany", "Cypress", "MDF", "Pine"];

  return (
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold">Category</h4>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(selectedCategory === cat ? null : cat)}
            className={selectedCategory === cat ? "font-bold" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      <div>
        <h4 className="font-semibold">Wood Type</h4>
        {woodTypes.map((wood) => (
          <button
            key={wood}
            onClick={() => setWood(selectedWood === wood ? null : wood)}
            className={selectedWood === wood ? "font-bold" : ""}
          >
            {wood}
          </button>
        ))}
      </div>
    </div>
  );
}