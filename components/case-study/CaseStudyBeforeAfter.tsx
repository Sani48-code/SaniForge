import Image from "next/image";
import CaseStudyVisual from "@/components/visuals/CaseStudyVisual";
import type { CaseStudy } from "@/lib/mdx";

export default function CaseStudyBeforeAfter({ study }: { study: CaseStudy }) {
  const hasCustomImages = !!study.beforeImage;
  const afterImg = study.afterImage || study.image;

  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
            Transformation Overview
          </span>
          <h3 className="mt-1 font-display text-2xl font-bold text-slate-900">
            Before &amp; After Implementation
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Before */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-4 py-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-2.5 py-0.5 text-xs font-semibold text-rose-700 border border-rose-200">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              Before
            </span>
            <span className="text-xs text-slate-500">Manual / Bottlenecked</span>
          </div>
          <div className="relative aspect-[16/10] w-full bg-slate-100">
            {hasCustomImages && study.beforeImage ? (
              <Image
                src={study.beforeImage}
                alt="Before implementation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale-[30%] opacity-90"
              />
            ) : (
              <CaseStudyVisual category={study.category} state="before" className="h-full" />
            )}
          </div>
          <div className="p-4 text-xs leading-relaxed text-slate-600 bg-white">
            Previous workflow: High friction, repetitive manual tasks, and lost pipeline efficiency.
          </div>
        </div>

        {/* After */}
        <div className="overflow-hidden rounded-2xl border border-blue-200/80 bg-white shadow-xs">
          <div className="flex items-center justify-between border-b border-blue-50 bg-blue-50/40 px-4 py-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              After
            </span>
            <span className="text-xs text-blue-600 font-medium">Automated &amp; Scalable</span>
          </div>
          <div className="relative aspect-[16/10] w-full bg-slate-100">
            {hasCustomImages ? (
              <Image
                src={afterImg}
                alt="After implementation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            ) : (
              <CaseStudyVisual category={study.category} state="after" className="h-full" />
            )}
          </div>
          <div className="p-4 text-xs leading-relaxed text-slate-700 bg-white">
            Optimized workflow: High speed, automated verification, and measurable output multiplier.
          </div>
        </div>
      </div>
    </div>
  );
}

