import CustomOrderForm from "@/components/custom-orders/CustomOrderForm";
import CustomProcessSection from "@/components/custom-orders/CustomProcessSection";
import CustomProjectsGallery from "@/components/custom-orders/CustomProjectsGallery";

export default function CustomOrdersPage() {
  return (
    <>
      <CustomProcessSection />
      <CustomOrderForm />
      <CustomProjectsGallery />
    </>
  );
}
