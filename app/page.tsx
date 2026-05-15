import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <FeaturedProducts />
    </main>
  );
}