import FadeIn from "@/components/motion/FadeIn";
import IndustryIcon from "@/components/visuals/IndustryIcon";
import { industryGroups, totalClientBusinesses } from "@/lib/data/industries";

export default function IndustriesGrid() {
  return (
    <div>
      <FadeIn className="mb-12 flex flex-col items-center text-center">
        <div className="font-display text-5xl text-gold-light">
          {totalClientBusinesses}
        </div>
        <p className="mt-2 font-mono text-xs uppercase tracking-wider text-ink-muted">
          Client Businesses
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industryGroups.map((group, i) => (
          <FadeIn
            key={group.group}
            delay={i * 0.08}
            className="rounded-2xl border border-navy-border bg-navy-panel/40 p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/5 text-gold-light">
              <IndustryIcon name={group.icon} size={18} />
            </div>
            <h3 className="mt-4 font-display text-lg text-ink">{group.group}</h3>
            <ul className="mt-3 space-y-1.5">
              {group.items.map((item, idx) => (
                <li key={`${item}-${idx}`} className="text-sm text-ink-muted">
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
