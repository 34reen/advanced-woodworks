import BulkOrderForm from "@/components/bulk-orders/BulkOrderForm";
import BulkOrdersHero from "@/components/bulk-orders/BulkOrdersHero";

export const metadata = {
  title: "Bulk Material Orders | Advanced Woodworks",
  description:
    "Prepare a bulk order inquiry for timber, boards, finishing materials, delivery location, quantity, and project use case.",
};

export default function BulkOrdersPage() {
  return (
    <>
      <BulkOrdersHero />
      <BulkOrderForm />
    </>
  );
}
