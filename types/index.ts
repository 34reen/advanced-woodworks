export type Category =
  | "Living Room"
  | "Kitchen"
  | "Bedroom"
  | "Office"
  | "Outdoor";

export type WoodType =
  | "Mahogany"
  | "Cypress"
  | "MDF"
  | "Pine";

export type Availability =
  | "In Stock"
  | "Made To Order"
  | "Limited Stock";

/**
 * RAW DATABASE MODEL (MySQL)
 */
export interface ApiProduct {
  id: number;
  slug: string;
  name: string;
  category_id: number;
  category_name?: string;
  price: number;
  description: string;
  image: string;
  featured: number;
  created_at?: string;
}

/**
 * FRONTEND/UI MODEL (used in components)
 */
export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
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