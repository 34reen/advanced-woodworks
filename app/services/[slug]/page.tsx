import { notFound } from "next/navigation";
import BookSiteVisitCta from "@/components/services/BookSiteVisitCta";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceDetailHero from "@/components/services/ServiceDetailHero";
import ServicePortfolioGallery from "@/components/services/ServicePortfolioGallery";
import ServiceProcessTimeline from "@/components/services/ServiceProcessTimeline";
import { getServiceBySlug, services } from "@/components/services/service-data";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Advanced Woodworks`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceDetailHero service={service} />
      <ServiceBenefits
        description={service.description}
        benefits={service.benefits}
      />
      <ServiceProcessTimeline steps={service.process} />
      <ServicePortfolioGallery projects={service.gallery} />
      <BookSiteVisitCta
        title={`Plan Your ${service.title} Site Visit`}
        description="A measured site visit helps us confirm dimensions, access, materials, installation sequence, and the best way to price the work accurately."
      />
    </>
  );
}
