import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { websiteSchema, organizationSchema, profilePageSchema } from "@/lib/schema";
import Hero from "@/components/home/Hero";
import ShortVersion from "@/components/home/ShortVersion";
import AboutSection from "@/components/home/AboutSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import WorkSection from "@/components/home/WorkSection";
import BlogPreview from "@/components/home/BlogPreview";
import ContactSection from "@/components/home/ContactSection";

export const metadata: Metadata = buildMetadata({
  title: site.title,
  absoluteTitle: true,
  description: site.description,
  path: "/",
  type: "profile",
  // app/opengraph-image.tsx provides the share image for this route.
  image: null,
});

export default function HomePage() {
  return (
    <>
      {/* WebSite + Organization drive the site name and logo Google shows; server-rendered. */}
      <JsonLd data={[websiteSchema(), organizationSchema(), profilePageSchema()]} />
      <Hero />
      <ShortVersion />
      <AboutSection />
      <ExperienceSection />
      <WhyChooseUsSection />
      <WorkSection />
      <BlogPreview />
      <ContactSection />
    </>
  );
}
