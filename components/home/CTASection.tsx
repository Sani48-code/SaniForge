import Button from "@/components/ui/Button";
import GoldDivider from "@/components/ui/GoldDivider";
import FadeIn from "@/components/motion/FadeIn";
import ParticleWave from "@/components/visuals/ParticleWave";
import { site } from "@/lib/data/site";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-navy-border py-24 sm:py-32">
      <ParticleWave />
      <div className="container-px relative mx-auto max-w-3xl text-center">
        <FadeIn>
          <GoldDivider className="mb-8" />
          <h2 className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-5xl text-balance">
            Ready to build something that{" "}
            <em className="italic text-gold-light">actually works?</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Book a free 15-minute call — no obligation. We&apos;ll talk through
            your project and whether I&apos;m the right fit.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href={site.bookCallLink} size="lg" external>
              Book a Call
            </Button>
            <Button href="/contact" size="lg" variant="outline">
              Contact Me
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
