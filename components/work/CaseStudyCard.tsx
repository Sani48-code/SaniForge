import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Card from "@/components/ui/Card";
import type { CaseStudy } from "@/lib/mdx";

export default function CaseStudyCard({
  study,
  onSelect,
}: {
  study: Pick<CaseStudy, "slug" | "title" | "tagline" | "category" | "image" | "industries" | "metrics">;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="group block w-full text-left"
      aria-haspopup="dialog"
    >
      <Card className="h-full overflow-hidden hover:-translate-y-1.5">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={study.image}
            alt={study.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/10 to-transparent" />
          <span className="absolute left-5 top-5 rounded-full border border-gold/30 bg-navy-deep/90 px-3 py-1 font-mono text-xs uppercase tracking-wider text-gold-light backdrop-blur-sm">
            {study.category}
          </span>
        </div>
        <div className="p-8">
          <h3 className="font-display text-3xl text-ink">{study.title}</h3>
          <p className="mt-2.5 text-lg leading-relaxed text-ink-muted">{study.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {study.industries.slice(0, 3).map((ind) => (
              <span
                key={ind}
                className="rounded-full border border-navy-border px-2.5 py-1 font-mono text-xs text-ink-faint"
              >
                {ind}
              </span>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-navy-border pt-6">
            {study.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-display text-2xl text-gold-light">{m.value}</div>
                <div className="text-sm text-ink-muted">{m.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-1.5 text-base font-medium text-gold-light">
            View Case Study <ArrowUpRight size={14} />
          </div>
        </div>
      </Card>
    </button>
  );
}
