import SiteVisitBookingForm from "@/components/site-visit/SiteVisitBookingForm";

export const metadata = {
  title: "Book A Site Visit | Advanced Woodworks",
  description:
    "Book a site visit with Advanced Woodworks for custom cabinetry, furniture, fit-outs, repairs, and interior woodwork measurements.",
};

export default function SiteVisitPage() {
  return (
    <>
      <SiteVisitBookingForm />
    </>
  );
}
