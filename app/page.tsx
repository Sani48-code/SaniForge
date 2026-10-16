import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { buildMetadata } from "@/lib/seo";
import Hero from "@/components/home/Hero";
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
