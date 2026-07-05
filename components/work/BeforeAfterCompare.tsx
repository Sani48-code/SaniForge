import FadeIn from "@/components/motion/FadeIn";
import CaseStudyVisual from "@/components/visuals/CaseStudyVisual";
import type { WorkCategory } from "@/lib/mdx";

export default function BeforeAfterCompare({ category }: { category: WorkCategory }) {
  return (
    <div>
      <p className="mb-5 font-mono text-sm uppercase tracking-wider text-gold-light">
        Before &amp; After
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FadeIn>
          <div className="aspect-[4/3] w-full">
            <CaseStudyVisual category={category} state="before" className="h-full" />
          </div>
          <p className="mt-3 text-center font-mono text-sm uppercase tracking-wider text-ink-faint">
            Before
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="aspect-[4/3] w-full">
            <CaseStudyVisual category={category} state="after" className="h-full" />
          </div>
          <p className="mt-3 text-center font-mono text-sm uppercase tracking-wider text-gold-light">
            After
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
