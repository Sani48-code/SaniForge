"use client";

import { useState } from "react";
import FadeIn from "@/components/motion/FadeIn";
import CaseStudyCard from "@/components/work/CaseStudyCard";
import CaseStudyModal from "@/components/work/CaseStudyModal";
import type { CaseStudy } from "@/lib/mdx";

type ModalStudy = CaseStudy & { contentNode: React.ReactNode };

export default function WorkClient({ studies }: { studies: ModalStudy[] }) {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const selected = studies.find((s) => s.slug === selectedSlug) ?? null;

  return (
    <>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {studies.map((study, i) => (
          <FadeIn key={study.slug} delay={i * 0.06}>
            <CaseStudyCard study={study} onSelect={() => setSelectedSlug(study.slug)} />
          </FadeIn>
        ))}
      </div>

      <CaseStudyModal study={selected} onClose={() => setSelectedSlug(null)} />
    </>
  );
}
