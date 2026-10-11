import SectionHeading from "@/components/ui/SectionHeading";
import IndustryMarquee from "@/components/work/IndustryMarquee";
import WorkClient from "@/components/work/WorkClient";
import { getAllCaseStudies } from "@/lib/mdx";

export default function WorkSection() {
  const studies = getAllCaseStudies();

  return (
    <>
      {/* Selected Work Section */}
      <section id="work" className="scroll-mt-24 bg-gradient-to-b from-[#0F172A] via-[#0D1527] to-[#070B14] py-24 sm:py-32">
        <div className="container-px mx-auto max-w-content">
          <SectionHeading
            eyebrow="Selected Work"
            title="Results, not just deliverables"
            description="Six projects across automation, copywriting, and web development. Click any card to read the full case study in a new tab."
          />

          <div className="mt-16">
            <WorkClient studies={studies} />
          </div>
        </div>
      </section>

      {/* Client Industries / Businesses I've Worked With Section (Light & Colorful) */}
      <section
        id="client-industries"
        className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#FFFFFF] to-[#F1F5F9] py-24 sm:py-28 border-t border-slate-200"
      >
        {/* Soft Ambient Pastel Glows */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[750px] rounded-full bg-blue-200/40 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-32 right-10 h-[380px] w-[450px] rounded-full bg-indigo-200/35 blur-[130px]" />

        <div className="container-px mx-auto max-w-content relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] font-bold text-blue-700 shadow-xs">
            Client Industries
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 text-balance">
            Businesses I&apos;ve Worked With
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed text-balance font-normal">
            Over 20+ businesses across the US, grouped by industry. Client names kept private, case studies available on request.
          </p>
        </div>

        <div className="relative left-1/2 right-1/2 -mx-[50vw] mt-12 w-screen z-10">
          <IndustryMarquee />
        </div>
      </section>
    </>
  );
}
