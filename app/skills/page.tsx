import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import SkillPillar from "@/components/skills/SkillPillar";
import Button from "@/components/ui/Button";
import { skillPillars } from "@/lib/data/skills";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "A deep dive into web development, SEO copywriting, and n8n automation — the three pillars behind SaniForge.",
};

export default function SkillsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-radial py-20 sm:py-28">
        <div className="container-px mx-auto grid max-w-content grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-light">
              Skills
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl text-balance">
              Three disciplines,{" "}
              <em className="italic text-gold-light">one system</em>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
              Web development, SEO copywriting, and n8n automation — deployed
              together so your site, your content, and your workflows all
              move in the same direction.
            </p>
            <div className="mt-8">
              <Button href={site.bookCallLink} size="lg" external>
                Book a Call
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-0 -z-10 scale-110 rounded-[2rem] bg-blue-gold-glow blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-gold/20 shadow-gold-glow">
              <Image
                src="/images/portrait-skills.png"
                alt="Abdul Kalyum Sani working at his desk"
                width={480}
                height={600}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="container-px mx-auto max-w-content divide-y divide-navy-border pb-16">
        {skillPillars.map((pillar, i) => (
          <SkillPillar key={pillar.id} pillar={pillar} index={i} />
        ))}
      </section>
    </>
  );
}
