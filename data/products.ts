import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    slug: "modern-blueberry-sofa-set",
    name: "Modern Blueberry Sofa Set",
    category: "Living Room",
    price: 85000,
    description:
      "A tailored lounge centerpiece with a solid timber frame, refined proportions, and deep cushioning for relaxed modern living.",
    image: "/images/blueberry sofa.jpg",
    gallery: [
      "/images/blueberry sofa.jpg",
      "/images/product5.jpg",
      "/images/product6.jpg",
    ],
    dimensions: "240cm W x 92cm D x 86cm H",
    woodType: "Mahogany",
    woodTypes: ["Mahogany", "Pine"],
    finishType: "Satin natural wood frame",
    deliveryEstimate: "7-10 working days",
    availability: "Limited Stock",
    featured: true,
    tags: ["Lounge", "Premium Upholstery", "Statement Piece"],
  },
  {
    id: "2",
    slug: "bespoke-kitchen-cabinets",
    name: "Kitchen Cabinets",
    category: "Kitchen",
    price: 75000,
    description:
      "Custom-built kitchen cabinetry planned around storage, workflow, and a polished architectural finish.",
    image: "/images/cabinets.jpg",
    gallery: [
      "/images/cabinets.jpg",
      "/images/product4.jpg",
      "/images/workshop.jpg",
    ],
    dimensions: "Priced per layout after site measure",
    woodType: "Cypress",
    woodTypes: ["Cypress", "MDF"],
    finishType: "Matte lacquer with hardwood trims",
    deliveryEstimate: "14-21 working days",
    availability: "Made To Order",
    featured: true,
    tags: ["Cabinetry", "Storage", "Custom Fit"],
  },
  {
    id: "3",
    slug: "sliding-bedroom-wardrobe",
    name: "Sliding Bedroom Wardrobe",
    category: "Bedroom",
    price: 65000,
    description:
      "A spacious wardrobe system with smooth sliding doors, practical compartments, and a quiet luxury presence.",
    image: "/images/product2.jpg",
    gallery: [
      "/images/product2.jpg",
      "/images/bedframe.jpg",
      "/images/product6.jpg",
    ],
    dimensions: "210cm W x 62cm D x 240cm H",
    woodType: "MDF",
    woodTypes: ["Mahogany", "MDF"],
    finishType: "Textured walnut laminate",
    deliveryEstimate: "10-14 working days",
    availability: "Made To Order",
    featured: true,
    tags: ["Wardrobe", "Bedroom", "Sliding Doors"],
  },
  {
    id: "4",
    slug: "executive-office-desk",
    name: "Executive Office Desk",
    category: "Office",
    price: 58000,
    description:
      "A commanding work desk with generous surface space, integrated storage, and a refined wood finish for focused work.",
    image: "/images/product3.jpg",
    gallery: [
      "/images/product3.jpg",
      "/images/workshop.jpg",
      "/images/product4.jpg",
    ],
    dimensions: "180cm W x 80cm D x 76cm H",
    woodType: "Mahogany",
    woodTypes: ["Mahogany", "Cypress"],
    finishType: "Dark walnut stain with satin seal",
    deliveryEstimate: "7-12 working days",
    availability: "In Stock",
    featured: false,
    tags: ["Office", "Desk", "Storage"],
  },
  {
    id: "5",
    slug: "solid-wood-bed-frame",
    name: "Solid Wood Bed Frame",
    category: "Bedroom",
    price: 72000,
    description:
      "A grounded, elegant bed frame crafted with clean lines, durable joinery, and a warm timber finish.",
    image: "/images/bedframe.jpg",
    gallery: [
      "/images/bedframe.jpg",
      "/images/product5.jpg",
      "/images/product2.jpg",
    ],
    dimensions: "Queen size, 160cm W x 200cm L",
    woodType: "Pine",
    woodTypes: ["Pine", "Mahogany"],
    finishType: "Honey oak stain",
    deliveryEstimate: "8-12 working days",
    availability: "Limited Stock",
    featured: false,
    tags: ["Bed Frame", "Bedroom", "Solid Wood"],
  },
];

export const productCategories = [
  "Living Room",
  "Kitchen",
  "Bedroom",
  "Office",
] as const;

export const woodTypes = ["Mahogany", "Cypress", "MDF", "Pine"] as const;

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string) {
  const currentProduct = getProductBySlug(slug);

  if (!currentProduct) {
    return [];
  }

  return products
    .filter(
      (product) =>
        product.slug !== slug && product.category === currentProduct.category
    )
    .slice(0, 3);
}
