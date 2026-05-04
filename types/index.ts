export type Category = "Living Room" | "Kitchen" | "Bedroom" | "Office";

export type WoodType = "Mahogany" | "Cypress" | "MDF" | "Pine";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price?: number;
  description: string;
  image: string;
  woodTypes: WoodType[];
}