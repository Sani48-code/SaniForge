import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import SkillsOverview from "@/components/home/SkillsOverview";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import WorkSection from "@/components/home/WorkSection";
import PersonalProjectsSection from "@/components/home/PersonalProjectsSection";
import SaaSProducts from "@/components/home/SaaSProducts";
import BlogPreview from "@/components/home/BlogPreview";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SkillsOverview />
      <WhyChooseUsSection />
      <WorkSection />
      <PersonalProjectsSection />
      <SaaSProducts />
      <BlogPreview />
      <ContactSection />
    </>
  );
}
