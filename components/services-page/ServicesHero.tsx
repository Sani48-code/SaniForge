import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Workflow, Search, Boxes } from "lucide-react";
import Reveal from "@/components/projects/Reveal";

const capabilities = [
  { icon: Code2, label: "Web Development", bg: "bg-sv-soft", fg: "text-sv-blue" },
  { icon: Workflow, label: "Automation", bg: "bg-sv-mint", fg: "text-emerald-700" },
  { icon: Search, label: "SEO & Content", bg: "bg-sv-palegold", fg: "text-sv-goldtext" },
  { icon: Boxes, label: "SaaS Solutions", bg: "bg-sv-lavender", fg: "text-violet-700" },
];

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-sv-soft/60 pt-14 sm:pt-20">
      <div className="container-px mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <Reveal className="pb-10 lg:pb-20">
          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-sv-goldtext">
            <span className="h-0.5 w-8 rounded bg-sv-gold" /> What I Build &amp; How I Help
          </p>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-sv-navy sm:text-6xl xl:text-[4.25rem] text-balance">
            I Build Digital Solutions That Help Businesses{" "}
            <span className="relative whitespace-nowrap text-sv-blue">
              Grow.
              <span aria-hidden="true" className="absolute -bottom-1 left-0 -z-10 h-3 w-full rounded bg-sv-gold/50" />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sv-slate">
            From compelling copy and SEO-driven content to custom web applications and
            intelligent automation, I help businesses turn complex problems into
            practical digital solutions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sv-blue px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-gold"
            >
              Explore My Services <ArrowRight size={18} aria-hidden="true" />
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl border-2 border-sv-navy bg-white px-7 py-4 text-base font-semibold text-sv-navy transition hover:-translate-y-0.5 hover:border-sv-gold hover:bg-sv-palegold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-gold"
            >
              View My Work
            </Link>
          </div>
          <ul className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {capabilities.map(({ icon: Icon, label, bg, fg }) => (
              <li key={label} className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 ${bg}`}>
                <Icon size={18} className={fg} aria-hidden="true" />
                <span className="text-sm font-semibold text-sv-navy">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="self-end">
          <div className="relative mx-auto w-full max-w-[600px]">
            <span aria-hidden="true" className="absolute -left-6 top-10 h-40 w-40 rounded-full bg-sv-soft" />
            <span aria-hidden="true" className="absolute -right-4 bottom-24 h-24 w-24 rounded-full bg-sv-palegold" />
            <Image
              src="/images/projects/hero-visual-v2.png"
              alt="Sani in a black hoodie with arms crossed beside a project overview dashboard"
              width={901}
              height={940}
              priority
              sizes="(max-width: 1024px) 100vw, 600px"
              className="relative h-auto w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
