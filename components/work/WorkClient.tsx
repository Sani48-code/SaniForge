"use client";

import FadeIn from "@/components/motion/FadeIn";
import CaseStudyCard from "@/components/work/CaseStudyCard";
import type { CaseStudy } from "@/lib/mdx";

export default function WorkClient({
  studies,
}: {
  studies: Pick<CaseStudy, "slug" | "title" | "tagline" | "category" | "image" | "industries" | "metrics">[];
}) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {studies.map((study, i) => (
        <FadeIn key={study.slug} delay={i * 0.06}>
          <CaseStudyCard study={study} />
        </FadeIn>
      ))}
    </div>
  );
}
