import SiteVisitBookingForm from "@/components/site-visit/SiteVisitBookingForm";
import SiteVisitHero from "@/components/site-visit/SiteVisitHero";

export const metadata = {
  title: "Book A Site Visit | Advanced Woodworks",
  description:
    "Book a site visit with Advanced Woodworks for custom cabinetry, furniture, fit-outs, repairs, and interior woodwork measurements.",
};

export default function SiteVisitPage() {
  return (
    <>
      <SiteVisitHero />
      <SiteVisitBookingForm />
    </>
  );
}
