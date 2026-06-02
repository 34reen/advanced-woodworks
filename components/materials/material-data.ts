export type MaterialCategory =
  | "Hardwood"
  | "Softwood"
  | "Engineered Board"
  | "Finishing Material";

export type StrengthRating = 1 | 2 | 3 | 4 | 5;

export type Material = {
  slug: string;
  name: string;
  category: MaterialCategory;
  summary: string;
  description: string;
  image: string;
  gallery: string[];
  priceFrom: number;
  unit: string;
  availability: "In Stock" | "Limited Stock" | "Pre-Order";
  specifications: {
    origin: string;
    grain: string;
    finishCompatibility: string;
    moistureContent: string;
    thicknessRange: string;
  };
  sizes: string[];
  strengthRating: StrengthRating;
  usageRecommendations: string[];
  usageExamples: {
    title: string;
    description: string;
    image: string;
  }[];
  tags: string[];
};

export const materialCategories: {
  title: MaterialCategory;
  description: string;
  image: string;
}[] = [
  {
    title: "Hardwood",
    description:
      "Premium timber for heirloom furniture, doors, counters, and visible architectural details.",
    image: "/images/product5.jpg",
  },
  {
    title: "Softwood",
    description:
      "Workable timber for frames, shelving, panel accents, and cost-sensitive interior builds.",
    image: "/images/workshop.jpg",
  },
  {
    title: "Engineered Board",
    description:
      "Stable boards for cabinetry, wardrobes, partitions, and refined painted or laminated finishes.",
    image: "/images/cabinets.jpg",
  },
  {
    title: "Finishing Material",
    description:
      "Stains, sealers, edge treatments, and surface products selected for durable woodcraft finishes.",
    image: "/images/product6.jpg",
  },
];

export const materials: Material[] = [
  {
    slug: "mahogany-board",
    name: "Mahogany Board",
    category: "Hardwood",
    summary:
      "Rich, stable hardwood boards for premium furniture, executive desks, doors, and feature cabinetry.",
    description:
      "Mahogany is selected for refined visible surfaces where tone, density, and finish depth matter. It machines cleanly, holds detail well, and brings a warm luxury presence to statement pieces.",
    image: "/images/product3.jpg",
    gallery: ["/images/product3.jpg", "/images/product5.jpg", "/images/bedframe.jpg"],
    priceFrom: 6800,
    unit: "per running foot",
    availability: "Limited Stock",
    specifications: {
      origin: "East African supplier lots",
      grain: "Fine to medium, generally straight",
      finishCompatibility: "Oil, stain, satin seal, and clear lacquer",
      moistureContent: "Kiln dried, target 10-12%",
      thicknessRange: "25mm to 50mm",
    },
    sizes: ["25mm x 250mm", "32mm x 300mm", "50mm x 250mm", "Custom cut list"],
    strengthRating: 5,
    usageRecommendations: [
      "Executive desks and boardroom tables",
      "Premium bed frames and headboards",
      "Doors, trims, and visible cabinet faces",
      "Statement shelving and display units",
    ],
    usageExamples: [
      {
        title: "Executive desk surface",
        description: "A dense board with deep tone for high-touch office pieces.",
        image: "/images/product3.jpg",
      },
      {
        title: "Solid bed frame",
        description: "Strong rails and refined exposed timber grain.",
        image: "/images/bedframe.jpg",
      },
    ],
    tags: ["Premium", "Dense", "Furniture Grade"],
  },
  {
    slug: "cypress-plank",
    name: "Cypress Plank",
    category: "Softwood",
    summary:
      "Reliable softwood planks for frames, shelves, interior structures, and lighter furniture builds.",
    description:
      "Cypress offers a practical balance of workability, weight, and cost. It is a useful choice for internal framing, shelving, and painted or stained pieces where durability and budget both matter.",
    image: "/images/workshop.jpg",
    gallery: ["/images/workshop.jpg", "/images/product4.jpg", "/images/product6.jpg"],
    priceFrom: 2400,
    unit: "per running foot",
    availability: "In Stock",
    specifications: {
      origin: "Local supplier stock",
      grain: "Straight, light, and consistent",
      finishCompatibility: "Paint, stain, sealer, and clear coat",
      moistureContent: "Seasoned, target 12-14%",
      thicknessRange: "20mm to 45mm",
    },
    sizes: ["20mm x 200mm", "25mm x 250mm", "45mm x 200mm", "Custom cut list"],
    strengthRating: 3,
    usageRecommendations: [
      "Internal shelves and light-duty storage",
      "Furniture frames and support rails",
      "Painted interior features",
      "Workshop templates and prototypes",
    ],
    usageExamples: [
      {
        title: "Workshop-built shelving",
        description: "A stable choice for clean utility and display storage.",
        image: "/images/product6.jpg",
      },
      {
        title: "Internal cabinet framing",
        description: "Lightweight stock for support structures.",
        image: "/images/workshop.jpg",
      },
    ],
    tags: ["Workable", "Cost Efficient", "Interior Use"],
  },
  {
    slug: "walnut-laminate-mdf",
    name: "Walnut Laminate MDF",
    category: "Engineered Board",
    summary:
      "Smooth engineered board with walnut finish for wardrobes, cabinet fronts, media walls, and storage systems.",
    description:
      "Walnut laminate MDF is ideal for clean built-ins that need visual warmth with board stability. It supports repeatable cabinetry layouts and keeps finish consistency across larger installations.",
    image: "/images/product2.jpg",
    gallery: ["/images/product2.jpg", "/images/cabinets.jpg", "/images/product4.jpg"],
    priceFrom: 5200,
    unit: "per sheet",
    availability: "In Stock",
    specifications: {
      origin: "Commercial board supplier",
      grain: "Walnut laminate surface",
      finishCompatibility: "Matching edge band, clear wipe-clean surface",
      moistureContent: "Factory-stable engineered core",
      thicknessRange: "9mm to 18mm",
    },
    sizes: ["2440mm x 1220mm x 9mm", "2440mm x 1220mm x 18mm", "Cut to size"],
    strengthRating: 4,
    usageRecommendations: [
      "Sliding wardrobes and closets",
      "Kitchen and pantry cabinet carcasses",
      "TV walls and floating storage",
      "Office storage and partitions",
    ],
    usageExamples: [
      {
        title: "Sliding wardrobe system",
        description: "Stable board and consistent walnut tone for a full bedroom wall.",
        image: "/images/product2.jpg",
      },
      {
        title: "Kitchen cabinetry",
        description: "Clean cabinet runs with predictable sheet sizing.",
        image: "/images/cabinets.jpg",
      },
    ],
    tags: ["Stable", "Cabinetry", "Walnut Finish"],
  },
  {
    slug: "matte-clear-sealer",
    name: "Matte Clear Sealer",
    category: "Finishing Material",
    summary:
      "Low-sheen protective finish for natural wood surfaces, cabinet faces, tables, and display pieces.",
    description:
      "Matte clear sealer protects timber while keeping the visual tone restrained. It suits clients who want a natural wood feel without a glossy surface.",
    image: "/images/product6.jpg",
    gallery: ["/images/product6.jpg", "/images/product5.jpg", "/images/product3.jpg"],
    priceFrom: 3800,
    unit: "per litre",
    availability: "Pre-Order",
    specifications: {
      origin: "Professional finishing supplier",
      grain: "Preserves natural grain visibility",
      finishCompatibility: "Hardwood, softwood, veneer, and selected boards",
      moistureContent: "Not applicable",
      thicknessRange: "Applied in 2-3 coats",
    },
    sizes: ["1 litre", "4 litres", "20 litre workshop pack"],
    strengthRating: 4,
    usageRecommendations: [
      "Dining and coffee tables",
      "Cabinet doors and panels",
      "Shelving and display surfaces",
      "Furniture maintenance programs",
    ],
    usageExamples: [
      {
        title: "Refinished cabinet face",
        description: "A quiet protective layer for surfaces that need daily cleaning.",
        image: "/images/product6.jpg",
      },
      {
        title: "Natural table surface",
        description: "Keeps timber warm without adding high gloss.",
        image: "/images/product5.jpg",
      },
    ],
    tags: ["Matte", "Protective", "Low Sheen"],
  },
];

export function getMaterialBySlug(slug: string) {
  return materials.find((material) => material.slug === slug);
}
