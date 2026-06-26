import MaterialCategoriesGrid from "@/components/materials/MaterialCategoriesGrid";
import MaterialsStore from "@/components/materials/MaterialsStore";
import UsageExamples from "@/components/materials/UsageExamples";

export const metadata = {
  title: "Materials Store | Advanced Woodworks",
  description:
    "Browse premium wood materials and workshop-ready inventory from Advanced Woodworks.",
};

export default function MaterialsPage() {
  return (
    <>
      <MaterialCategoriesGrid />
      <MaterialsStore />
      <UsageExamples />
    </>
  );
}