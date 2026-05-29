import CustomOrderForm from "@/components/custom-orders/CustomOrderForm";
import CustomOrdersHero from "@/components/custom-orders/CustomOrdersHero";
import CustomProcessSection from "@/components/custom-orders/CustomProcessSection";
import CustomProjectsGallery from "@/components/custom-orders/CustomProjectsGallery";

export default function CustomOrdersPage() {
  return (
    <>
      <CustomOrdersHero />
      <CustomProcessSection />
      <CustomOrderForm />
      <CustomProjectsGallery />
    </>
  );
}
