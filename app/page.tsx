import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import SkillsOverview from "@/components/home/SkillsOverview";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import WorkSection from "@/components/home/WorkSection";
import BlogPreview from "@/components/home/BlogPreview";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <SkillsOverview />
      <WhyChooseUsSection />
      <WorkSection />
      <BlogPreview />
      <ContactSection />
    </>
  );
}
