import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Modern Sofa Set",
    category: "Living Room",
    price: 85000,
    description: "Elegant handcrafted sofa with premium cushioning.",
    image: "https://via.placeholder.com/400x300",
    woodTypes: ["Mahogany", "Pine"]
  },
  {
    id: "2",
    name: "Kitchen Cabinets",
    category: "Kitchen",
    description: "Custom-built cabinets tailored to your space.",
    image: "https://via.placeholder.com/400x300",
    woodTypes: ["Cypress", "MDF"]
  },
  {
    id: "3",
    name: "Wardrobe",
    category: "Bedroom",
    price: 65000,
    description: "Spacious wardrobe with sliding doors.",
    image: "https://via.placeholder.com/400x300",
    woodTypes: ["Mahogany", "MDF"]
  },
];