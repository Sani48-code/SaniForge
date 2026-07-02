import Link from "next/link";
import { Code2, PenTool, Workflow, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/motion/FadeIn";
import { skillPillars } from "@/lib/data/skills";

const icons = [Code2, PenTool, Workflow];

export default function SkillsOverview() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-px mx-auto max-w-content">
        <SectionHeading
          eyebrow="What I Do"
          title="Three skills, one system"
          description="Most agencies hand your project between three vendors. I build the site, write the content, and automate what's left — all under one roof."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {skillPillars.map((pillar, i) => {
            const Icon = icons[i];
            return (
              <FadeIn key={pillar.id} delay={i * 0.1}>
                <Link href={`/skills#${pillar.id}`}>
                  <Card className="h-full p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/5 text-gold-light">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-6 font-display text-xl text-ink">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {pillar.tagline}
                    </p>
                    <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-gold-light opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more <ArrowUpRight size={14} />
                    </div>
                  </Card>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
