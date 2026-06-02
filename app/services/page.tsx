import BookSiteVisitCta from "@/components/services/BookSiteVisitCta";
import InstallationProcess from "@/components/services/InstallationProcess";
import ServicesOverviewGrid from "@/components/services/ServicesOverviewGrid";
import ServicesPortfolioPreview from "@/components/services/ServicesPortfolioPreview";

export const metadata = {
  title: "Services | Advanced Woodworks",
  description:
    "Explore Advanced Woodworks services for custom cabinetry, bespoke furniture, interior fit-outs, repairs, refinishing, and site installation.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesOverviewGrid />
      <InstallationProcess />
      <ServicesPortfolioPreview />
      <BookSiteVisitCta />
    </>
  );
}
