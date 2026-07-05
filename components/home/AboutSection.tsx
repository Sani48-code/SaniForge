import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import GoldDivider from "@/components/ui/GoldDivider";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import Timeline from "@/components/about/Timeline";
import { aboutBio } from "@/lib/data/experience";
import { site } from "@/lib/data/site";
import { linkifyGrowMinion } from "@/lib/linkify-growminion";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-navy-border">
      <div className="relative overflow-hidden bg-navy-radial py-20 sm:py-28">
        <div className="container-px mx-auto grid max-w-content grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <FadeIn>
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-gold-light">
                About Me
              </p>
              <h2 className="mt-4 font-display text-5xl font-medium leading-tight text-ink sm:text-6xl text-balance">
                Builder of <em className="italic text-gold-light">systems</em>,
                not just deliverables
              </h2>
            </FadeIn>
            <div className="mt-8 space-y-5">
              {aboutBio.paragraphs.map((p, i) => (
                <FadeIn key={i} delay={0.1 + i * 0.08}>
                  <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
                    {linkifyGrowMinion(p)}
                  </p>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.4}>
              <p className="mt-8 border-l-2 border-gold pl-5 font-display text-lg italic text-ink">
                {aboutBio.closing}
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="mt-10">
                <Button href={site.bookCallLink} size="lg" external>
                  Book a Call
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-0 -z-10 scale-110 rounded-[2rem] bg-blue-gold-glow blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-gold/20 shadow-gold-glow">
              <Image
                src="/images/portrait-about.png"
                alt="Abdul Kalyum Sani at his desk"
                width={480}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="py-24 sm:py-32">
        <div className="container-px mx-auto max-w-content">
          <SectionHeading eyebrow="Experience" title="How I got here" />
          <div className="mx-auto mt-16 max-w-2xl">
            <Timeline />
          </div>
        </div>
      </div>

      <div className="border-t border-navy-border py-24 sm:py-32">
        <div className="container-px mx-auto max-w-4xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-navy-border">
                <Image
                  src="/images/portrait-office.png"
                  alt="Abdul Kalyum Sani in his office"
                  width={520}
                  height={650}
                  className="h-auto w-full object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <GoldDivider className="mb-6 justify-start" />
              <h3 className="font-display text-4xl text-ink text-balance">
                One person, three disciplines
              </h3>
              <p className="mt-5 text-base leading-relaxed text-ink-muted">
                Most projects need a developer, a copywriter, and someone to
                automate the busywork in between. I combine all three, which
                means fewer handoffs, faster shipping, and a system that
                actually talks to itself, the content pipeline, the site,
                and the automation all built by the same person, for the
                same goal.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
