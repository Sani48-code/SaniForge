import type { Metadata } from "next";
import { safeJsonLd } from "@/lib/json-ld";
import { site } from "@/lib/data/site";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import WorkSection from "@/components/home/WorkSection";
import BlogPreview from "@/components/home/BlogPreview";
import ContactSection from "@/components/home/ContactSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.description,
  inLanguage: "en",
  publisher: { "@type": "Person", name: site.founder, url: site.url },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteJsonLd) }} />
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <WhyChooseUsSection />
      <WorkSection />
      <BlogPreview />
      <ContactSection />
    </>
  );
}
