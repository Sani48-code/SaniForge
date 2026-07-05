import FadeIn from "@/components/motion/FadeIn";
import IndustryIcon from "@/components/visuals/IndustryIcon";
import { industryBadges, totalClientBusinesses } from "@/lib/data/industries";

export default function IndustryMarquee() {
  const row = [...industryBadges, ...industryBadges];

  return (
    <div>
      <FadeIn className="mb-12 flex flex-col items-center text-center">
        <div className="font-display text-5xl text-gold-light">
          {totalClientBusinesses}+
        </div>
        <p className="mt-2 font-mono text-sm uppercase tracking-wider text-ink-muted">
          Client names kept private
        </p>
      </FadeIn>

      <div className="marquee-mask relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {row.map((badge, i) => (
            <div
              key={`${badge.label}-${i}`}
              className="flex shrink-0 items-center gap-3 rounded-xl border border-navy-border bg-navy-panel/50 px-5 py-4 transition-colors hover:border-gold/40 hover:shadow-card-hover"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold/5 text-gold-light">
                <IndustryIcon name={badge.icon} size={16} />
              </div>
              <span className="whitespace-nowrap font-mono text-sm text-ink-muted">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
