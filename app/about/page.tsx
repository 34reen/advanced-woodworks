import AboutCTA from "@/components/about/AboutCTA";
import BrandStory from "@/components/about/BrandStory";
import DeliveryPromise from "@/components/about/DeliveryPromise";
import LocationContact from "@/components/about/LocationContact";
import MissionValues from "@/components/about/MissionValues";
import TeamSection from "@/components/about/TeamSection";
import WorkshopShowcase from "@/components/about/WorkshopShowcase";
import { testimonials } from "@/components/about/about-data";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";

export const metadata = {
  title: "About Us | Advanced Woodworks",
  description:
    "Learn about Advanced Woodworks, our workshop, craftsmanship values, nationwide delivery, team structure, and client stories.",
};

export default function AboutPage() {
  return (
    <>
      <BrandStory />
      <WorkshopShowcase />
      <MissionValues />
      <TeamSection />
      <DeliveryPromise />
      <LocationContact />
      <TestimonialsSection testimonials={testimonials} />
      <AboutCTA />
    </>
  );
}
