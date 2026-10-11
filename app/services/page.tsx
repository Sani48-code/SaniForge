import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Services: Web Development, Automation, SaaS, Copywriting and SEO Content",
  description:
    "Copywriting, blog writing, full-stack web development, n8n automation, GoHighLevel lead generation and SaaS development, built with an engineering mindset and a business-first approach.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "SaniForge Services: Digital Solutions That Help Businesses Grow",
    description:
      "Websites, SaaS platforms, automation workflows and SEO-driven content built with thoughtful engineering.",
    url: `${site.url}/services`,
    type: "website",
    images: [{ url: "/images/mesani.jpeg", width: 1254, height: 1254 }],
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
    <div data-light-page className="bg-white font-sans text-sv-navy">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
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
