import Hero from "@/components/home/Hero";
import SkillsOverview from "@/components/home/SkillsOverview";
import FeaturedWork from "@/components/home/FeaturedWork";
import SaaSProducts from "@/components/home/SaaSProducts";
import BlogPreview from "@/components/home/BlogPreview";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SkillsOverview />
      <FeaturedWork />
      <SaaSProducts />
      <BlogPreview />
      <CTASection />
    </>
  );
}
