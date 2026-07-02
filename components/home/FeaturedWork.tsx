import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import CaseStudyCard from "@/components/work/CaseStudyCard";
import { getAllCaseStudies } from "@/lib/mdx";

export default function FeaturedWork() {
  const studies = getAllCaseStudies().slice(0, 3);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-content">
        <SectionHeading
          eyebrow="Selected Work"
          title="Results, not just deliverables"
          description="A few of the projects I've shipped across automation, copywriting, and web development."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {studies.map((study, i) => (
            <FadeIn key={study.slug} delay={i * 0.1}>
              <CaseStudyCard study={study} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-14 flex justify-center">
          <Button href="/work" variant="outline" size="lg">
            View All Case Studies
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
