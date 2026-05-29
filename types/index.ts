export type Category = "Living Room" | "Kitchen" | "Bedroom" | "Office";

export type WoodType = "Mahogany" | "Cypress" | "MDF" | "Pine";

export type Availability = "In Stock" | "Made To Order" | "Limited Stock";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  image: string;
  gallery: string[];
  dimensions: string;
  woodType: WoodType;
  woodTypes: WoodType[];
  finishType: string;
  deliveryEstimate: string;
  availability: Availability;
  featured?: boolean;
  tags: string[];
}
