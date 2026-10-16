import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ServicesHero from "@/components/services-page/ServicesHero";
import ServicePanels from "@/components/services-page/ServicePanels";
import WhyWorkWithMe from "@/components/services-page/WhyWorkWithMe";
import { ProcessFive, TechCapabilities } from "@/components/services-page/ProcessAndTech";
import {
  JourneySection,
  ProjectsBanner,
  ServicesFaq,
  ServicesCta,
  servicesFaqs,
} from "@/components/services-page/JourneyAndClosing";
import { services } from "@/lib/data/services";
import { site } from "@/lib/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Full Stack Dev & n8n Automation Services",
  description:
    "Full-stack development, n8n automation, GoHighLevel lead generation, SaaS, copywriting and SEO content from one growth engineer, built for US businesses.",
  path: "/services",
  socialTitle: "SaniForge Services: Digital Solutions That Help Businesses Grow",
  socialDescription:
    "Websites, SaaS platforms, automation workflows and SEO-driven content built with thoughtful engineering.",
});

export default function ServicesPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "SaniForge services",
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.label,
        url: `${site.url}/services/${s.slug}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: servicesFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <div data-light-page className="bg-white font-sans text-sv-navy">
      <JsonLd data={[...jsonLd, breadcrumbSchema([{ name: "Services", path: "/services" }])]} />
      <ServicesHero />
      <ServicePanels />
      <WhyWorkWithMe />
      <ProcessFive />
      <TechCapabilities />
      <JourneySection />
      <ProjectsBanner />
      <ServicesFaq />
      <ServicesCta />
    </div>
  );
}
