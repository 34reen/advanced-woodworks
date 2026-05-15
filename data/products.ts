import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Modern Sofa Set",
    category: "Living Room",
    price: 85000,
    description: "Elegant handcrafted sofa with premium cushioning.",
    image: "/images/blueberry sofa.jpg",
    woodTypes: ["Mahogany", "Pine"]
  },
  {
    id: "2",
    name: "Kitchen Cabinets",
    category: "Kitchen",
    price: 75000,
    description: "Custom-built cabinets tailored to your space.",
    image: "/images/kitchen1.jpg",
    woodTypes: ["Cypress", "MDF"]
  },
  {
    id: "3",
    name: "Wardrobe",
    category: "Bedroom",
    price: 65000,
    description: "Spacious wardrobe with sliding doors.",
    image: "/images/wardrobes2.jpg",
    woodTypes: ["Mahogany", "MDF"]
  },
];