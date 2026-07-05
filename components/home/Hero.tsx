import Image from "next/image";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import GoldLineAccent from "@/components/visuals/GoldLineAccent";
import { heroStats, heroTags } from "@/lib/data/stats";
import { site } from "@/lib/data/site";
import { linkifyGrowMinion } from "@/lib/linkify-growminion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-radial pb-24 pt-16 sm:pt-24">
      <GoldLineAccent />
      <div className="container-px relative mx-auto grid max-w-content grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 font-mono text-sm uppercase tracking-wider text-gold-light">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-light" />
              Available for New Projects
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[1.1] text-ink sm:text-6xl lg:text-7xl text-balance">
              I Build <span className="text-gold-light">Websites, Words &amp;</span>{" "}
              <em className="italic text-ink">Automated Systems</em>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 font-mono text-sm uppercase tracking-[0.2em] text-blue-soft">
              Web Development &bull; SEO Copywriting &bull; n8n Automation
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {linkifyGrowMinion(
                "I'm Abdul Kalyum Sani, a web developer, SEO content writer, and automation engineer at GrowMinion. I build fast websites, write content that ranks, and automate the repetitive work so businesses can scale faster."
              )}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/#work" size="lg">
                View My Work
              </Button>
              <Button href={site.bookCallLink} size="lg" variant="outline" external>
                Book a Call
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-navy-border pt-8">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-4xl text-gold-light">{stat.value}</div>
                  <div className="mt-1 text-base text-ink-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -z-10 scale-110 rounded-[2rem] bg-blue-gold-glow blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 shadow-gold-glow">
            <Image
              src="/images/portrait-hero.png"
              alt="Abdul Kalyum Sani, founder of SaniForge"
              width={480}
              height={600}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          {heroTags.map((tag, i) => {
            const positions = [
              "top-4 -left-8",
              "top-1/4 -right-10",
              "bottom-1/3 -left-10",
              "bottom-10 -right-8",
              "top-1/2 -left-14",
            ];
            return (
              <span
                key={tag}
                className={`absolute ${positions[i % positions.length]} hidden animate-float rounded-full border border-gold/30 bg-navy-panel/90 px-3 py-1.5 font-mono text-sm text-gold-light shadow-gold-glow backdrop-blur-sm sm:block`}
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                {tag}
              </span>
            );
          })}
        </FadeIn>
      </div>
    </section>
  );
}
