import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CustomFurniture from "@/components/home/CustomFurniture";
import MaterialsShowcase from "@/components/home/MaterialsShowcase";
import ServicesPreview from "@/components/home/ServicesPreview";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <CustomFurniture />
      <MaterialsShowcase />
      <ServicesPreview />
      <AboutPreview />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
