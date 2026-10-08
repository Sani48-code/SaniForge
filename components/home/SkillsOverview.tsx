import { Code2, PenTool, Workflow } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/motion/FadeIn";
import { skillPillars } from "@/lib/data/skills";

const icons = [Code2, PenTool, Workflow];

export default function SkillsOverview() {
  return (
    <section id="skills" className="scroll-mt-24 bg-gradient-to-br from-[#0B3B3D] via-[#0D4A4C] to-[#082B2E] py-24 sm:py-32">
      <div className="container-px mx-auto max-w-content">
        <SectionHeading
          eyebrow="What I Do"
          title="Three skills, one system"
          description="Most agencies hand your project between three vendors. I build the site, write the content, and automate what's left, all under one roof."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {skillPillars.map((pillar, i) => {
            const Icon = icons[i];
            return (
              <FadeIn key={pillar.id} delay={i * 0.1}>
                <div>
                  <Card className="h-full p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/5 text-gold-light">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-6 font-display text-2xl text-ink">{pillar.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-ink-muted">
                      {pillar.tagline}
                    </p>
                  </Card>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
