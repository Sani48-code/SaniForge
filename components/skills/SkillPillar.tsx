import { Check } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import GoldDivider from "@/components/ui/GoldDivider";
import type { SkillPillar as SkillPillarType } from "@/lib/data/skills";

export default function SkillPillar({
  pillar,
  index,
}: {
  pillar: SkillPillarType;
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <div id={pillar.id} className="scroll-mt-28 py-16 sm:py-20">
      <div
        className={`grid grid-cols-1 gap-12 lg:grid-cols-2 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <FadeIn>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-gold-light">
            0{index + 1}
          </span>
          <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl text-balance">
            {pillar.title}
          </h2>
          <p className="mt-3 font-display text-xl italic text-blue-soft">{pillar.tagline}</p>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
            {pillar.description}
          </p>

          <div className="mt-8">
            <GoldDivider className="mb-6 justify-start" />
            <p className="mb-3 font-mono text-sm uppercase tracking-wider text-ink-faint">
              Tools
            </p>
            <div className="flex flex-wrap gap-2">
              {pillar.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-navy-border px-3 py-1.5 font-mono text-sm text-ink-muted"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-navy-border bg-navy-panel/50 p-8">
            <p className="mb-5 font-mono text-sm uppercase tracking-wider text-ink-faint">
              What this covers
            </p>
            <ul className="space-y-4">
              {pillar.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold-light">
                    <Check size={12} />
                  </span>
                  <span className="text-base leading-relaxed text-ink-muted sm:text-lg">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
