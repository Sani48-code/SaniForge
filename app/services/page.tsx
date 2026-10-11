import type { Metadata } from "next";
import ServicesHero from "@/components/services-page/ServicesHero";
import ServiceCards from "@/components/services-page/ServiceCards";
import FeaturedProducts from "@/components/services-page/FeaturedProducts";
import AppsShowcase from "@/components/services-page/AppsShowcase";
import ServiceSpotlights from "@/components/services-page/ServiceSpotlights";
import {
  WorkProcess,
  IndustriesSupport,
  ToolsGrid,
  Principles,
  ServicesFaq,
  ServicesCta,
  servicesFaqs,
} from "@/components/services-page/LowerSections";
import { services } from "@/lib/data/services";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Services: Copywriting, Web Development, Automation and SaaS",
  description:
    "Copywriting, blog writing, full-stack web development, n8n automation, GoHighLevel lead generation and SaaS development from one specialist who writes, builds and automates.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "SaniForge Services: Digital Solutions That Help Businesses Grow",
    description:
      "Copywriting, blog writing, full-stack web development, n8n automation, GHL lead generation and SaaS development.",
    url: `${site.url}/services`,
    type: "website",
    images: [{ url: "/images/projects/hero-visual-v2.png", width: 901, height: 940 }],
  },
};

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
    <div className="bg-white font-sans text-sv-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesHero />
      <ServiceCards />
      <FeaturedProducts />
      <AppsShowcase />
      <ServiceSpotlights />
      <WorkProcess />
      <IndustriesSupport />
      <ToolsGrid />
      <Principles />
      <ServicesFaq />
      <ServicesCta />
    </div>
  );
}
