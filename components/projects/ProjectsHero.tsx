import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Laptop, Settings, BarChart3, Users } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/data/site";

const skills = [
  "Software Engineer",
  "Full-Stack Developer",
  "Automation Engineer",
  "SaaS Builder",
  "SEO Copywriter",
];

const strip = [
  { icon: Laptop, a: "Web Apps", b: "& SaaS Tools" },
  { icon: Settings, a: "Automation", b: "& Workflows" },
  { icon: BarChart3, a: "SEO Tools", b: "& Platforms" },
  { icon: Users, a: "Business", b: "Solutions" },
];

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-14 sm:pt-20">
      <div className="container-px mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <Reveal className="pb-10 lg:pb-20">
          <h1 className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-pf-navy sm:text-6xl xl:text-7xl text-balance">
            From Business Challenges to Digital Solutions<span className="text-pf-yellow">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pf-slate">
            I design and build SaaS tools, automation systems, SEO platforms, and
            workflow solutions that help businesses work smarter and grow faster.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#saas"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-pf-navy px-8 py-4 text-base font-semibold text-white transition hover:bg-[#0b1f33] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pf-yellow"
            >
              Explore My Work <ArrowRight size={18} />
            </a>
            <Link
              href={site.bookCallLink}
              className="inline-flex items-center justify-center rounded-lg border-2 border-pf-navy bg-white px-8 py-4 text-base font-semibold text-pf-navy transition hover:border-pf-yellow hover:bg-pf-yellow/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pf-yellow"
            >
              Let&apos;s Work Together
            </Link>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {strip.map(({ icon: Icon, a, b }) => (
              <li key={a} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pf-yellow/20 text-sv-goldtext">
                  <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span className="text-sm leading-tight text-pf-slate">
                  {a}
                  <br />
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="self-center pb-10 lg:pb-14">
          <div className="relative mx-auto w-full max-w-[640px]">
            <Image
              src="/images/projects/hero-visual-v2.png"
              alt="Sani with arms crossed beside a project overview dashboard"
              width={901}
              height={940}
              priority
              sizes="(max-width: 1024px) 100vw, 600px"
              className="h-auto w-full"
            />
          </div>
        </Reveal>
      </div>

      {/* Skills band: sits below the hero, never over the image */}
      <div className="border-y border-pf-navy bg-pf-navy">
        <div className="container-px mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-x-4 gap-y-2 py-4 sm:gap-x-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-pf-yellow">What I do</span>
          <span aria-hidden="true" className="hidden h-4 w-px bg-white/25 sm:block" />
          {skills.map((t, i) => (
            <span key={t} className="inline-flex items-center gap-4 text-sm font-semibold text-white sm:gap-6">
              {i > 0 && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-pf-yellow" />}
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
