import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Card from "@/components/ui/Card";
import BlogCoverArt from "@/components/visuals/BlogCoverArt";
import type { CaseStudy } from "@/lib/mdx";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/work/${study.slug}`}>
      <Card className="h-full overflow-hidden">
        <div className="relative h-44 w-full">
          <BlogCoverArt theme={study.coverTheme} category={study.category} className="h-full" />
          <span className="absolute left-4 top-4 rounded-full border border-gold/30 bg-navy-deep/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-gold-light backdrop-blur-sm">
            {study.category}
          </span>
        </div>
        <div className="p-7">
          <h3 className="font-display text-lg text-ink">{study.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{study.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {study.industries.slice(0, 3).map((ind) => (
              <span
                key={ind}
                className="rounded-full border border-navy-border px-2.5 py-1 font-mono text-[10px] text-ink-faint"
              >
                {ind}
              </span>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-navy-border pt-5">
            {study.metrics.slice(0, 2).map((m) => (
              <div key={m.label}>
                <div className="font-display text-xl text-gold-light">{m.value}</div>
                <div className="text-xs text-ink-muted">{m.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-gold-light">
            View Case Study <ArrowUpRight size={14} />
          </div>
        </div>
      </Card>
    </Link>
  );
}
