import Link from "next/link";
import { ArrowDown, BookOpenCheck, FlaskConical, Wrench } from "lucide-react";
import Reveal from "@/components/projects/Reveal";
import HeroVisual from "./HeroVisual";
import type { PostSummary } from "@/lib/mdx";

const trust = [
  { icon: BookOpenCheck, text: "Real-World Lessons" },
  { icon: Wrench, text: "Technical Breakdowns" },
  { icon: FlaskConical, text: "Honest Experiences" },
];

export default function JournalHero({ latest }: { latest?: PostSummary }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-jn-blue to-white py-14 sm:py-20">
      <div className="container-px mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <Reveal>
          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-sv-goldtext">
            <span className="h-0.5 w-8 rounded bg-jn-gold" /> The SaniForge Journal
          </p>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-sv-navy sm:text-6xl xl:text-[4.5rem]">
            Real Experience. Practical Insights.{" "}
            <span className="relative whitespace-nowrap text-sv-blue">
              Better Solutions.
              <span aria-hidden="true" className="absolute -bottom-1 left-0 -z-10 h-3 w-full rounded bg-jn-gold/50" />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-jn-body">
            Notes from building websites, SaaS tools, automation workflows, and SEO
            systems. I share the lessons, technical decisions, mistakes, and practical
            solutions that come from actually doing the work.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#latest"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sv-blue px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jn-gold"
            >
              Explore the Insights <ArrowDown size={17} aria-hidden="true" />
            </a>
            <Link
              href="/#about"
              className="inline-flex items-center justify-center rounded-xl border-2 border-sv-navy bg-white px-7 py-4 text-base font-semibold text-sv-navy transition hover:-translate-y-0.5 hover:border-jn-gold hover:bg-jn-pale focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jn-gold"
            >
              My Building Journey
            </Link>
          </div>
          <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
            {trust.map(({ icon: Icon, text }) => (
              <li key={text} className="inline-flex items-center gap-2 text-sm font-semibold text-sv-navy">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sv-blue shadow-sm">
                  <Icon size={16} aria-hidden="true" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <HeroVisual post={latest} />
        </Reveal>
      </div>
    </section>
  );
}
