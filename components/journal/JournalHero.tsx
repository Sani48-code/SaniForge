import Link from "next/link";
import { ArrowDown, BookOpenCheck, FlaskConical, Wrench } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";

const labels = [
  { icon: BookOpenCheck, text: "Real-World Lessons" },
  { icon: Wrench, text: "Technical Breakdowns" },
  { icon: FlaskConical, text: "Honest Experiments" },
];

export default function JournalHero() {
  return (
    <section className="relative overflow-hidden bg-navy-radial py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(rgba(212,175,55,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="container-px relative mx-auto max-w-4xl text-center">
        <FadeIn>
          <p className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-gold-light">
            <span className="h-px w-8 bg-gold/60" /> The SaniForge Journal{" "}
            <span className="h-px w-8 bg-gold/60" />
          </p>
          <h1 className="mt-6 font-display text-5xl font-medium leading-[1.08] text-ink sm:text-6xl lg:text-7xl">
            Real Experience.
            <br />
            Practical Insights.
            <br />
            <span className="bg-gradient-to-r from-gold-light to-gold bg-clip-text italic text-transparent">
              Better Solutions.
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Lessons from building websites, SaaS tools, automation workflows, and SEO
            systems. I share what I learn, the problems I face, and the solutions that
            actually work.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#latest"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-base font-semibold text-navy-deep shadow-gold-glow transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
            >
              Explore Insights <ArrowDown size={16} aria-hidden="true" />
            </a>
            <Link
              href="/#about"
              className="inline-flex items-center justify-center rounded-full border border-gold/40 px-7 py-3.5 text-base font-semibold text-ink transition hover:border-gold hover:bg-gold/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
            >
              My Building Journey
            </Link>
          </div>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {labels.map(({ icon: Icon, text }) => (
              <li key={text} className="inline-flex items-center gap-2 text-sm text-ink-muted">
                <Icon size={16} className="text-gold-light" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
