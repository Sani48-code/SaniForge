import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import CaseStudyCard from "@/components/work/CaseStudyCard";
import IndustriesGrid from "@/components/work/IndustriesGrid";
import { getAllCaseStudies } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies across web development, SEO copywriting, and n8n automation — real results, not just deliverables.",
};

export default function WorkPage() {
  const studies = getAllCaseStudies();

  return (
    <>
      <section className="relative overflow-hidden bg-navy-radial py-20 sm:py-28">
        <div className="container-px mx-auto max-w-content text-center">
          <FadeIn className="mx-auto max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-light">
              Case Studies
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl text-balance">
              Work built to move a{" "}
              <em className="italic text-gold-light">real number</em>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
              Leads, rankings, time saved, deals closed — six projects across
              automation, copywriting, and web development.
            </p>
          </FadeIn>
          <FadeIn delay={0.15} className="relative mx-auto mt-14 max-w-xl">
            <div className="overflow-hidden rounded-2xl border border-navy-border">
              <Image
                src="/images/portrait-suit-2.png"
                alt="Abdul Kalyum Sani"
                width={640}
                height={360}
                priority
                className="h-56 w-full object-cover object-top sm:h-72"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-px mx-auto max-w-content">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {studies.map((study, i) => (
              <FadeIn key={study.slug} delay={i * 0.06}>
                <CaseStudyCard study={study} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-navy-border py-20 sm:py-28">
        <div className="container-px mx-auto max-w-content">
          <SectionHeading
            eyebrow="Client Industries"
            title="Businesses I've worked with"
            description="From legal services to home services, real estate to industrial — work that spans a wide range of local and national businesses."
          />
          <div className="mt-16">
            <IndustriesGrid />
          </div>
        </div>
      </section>
    </>
  );
}
