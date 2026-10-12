import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Code2, Workflow, Boxes, PenLine, Brain, Target, Layers } from "lucide-react";
import Reveal from "@/components/projects/Reveal";
import { site } from "@/lib/data/site";

const highlights = [
  { icon: Brain, text: "Engineering Mindset" },
  { icon: Target, text: "Business-First Solutions" },
  { icon: Layers, text: "End-to-End Understanding" },
];

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-sv-soft to-jn-pale/70 py-14 sm:py-20 lg:py-24">
      <div className="container-px mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sv-goldtext">
            Web Development · Automation · Digital Solutions
          </p>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-sv-navy sm:text-6xl xl:text-[4.25rem]">
            I Build{" "}
            <span className="relative whitespace-nowrap text-sv-blue">
              Digital Solutions
              <span aria-hidden="true" className="absolute -bottom-1 left-0 -z-10 h-3 w-full rounded bg-jn-gold/50" />
            </span>{" "}
            That Help Businesses Grow.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-jn-body">
            From websites and SaaS platforms to automation workflows and SEO-driven
            content, I help businesses solve practical problems with thoughtful
            engineering and reliable digital solutions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.bookCallLink}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sv-blue px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jn-gold"
            >
              <Phone size={17} aria-hidden="true" /> Book a Call
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-sv-navy bg-white px-7 py-4 text-base font-semibold text-sv-navy transition hover:-translate-y-0.5 hover:border-jn-gold hover:bg-jn-pale focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jn-gold"
            >
              Explore My Work <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
            {highlights.map(({ icon: Icon, text }) => (
              <li key={text} className="inline-flex items-center gap-2.5 text-sm font-semibold text-sv-navy">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sv-blue shadow-sm ring-1 ring-sv-border">
                  <Icon size={17} aria-hidden="true" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto w-full max-w-[520px] px-4 pb-6 pt-4 sm:px-6">
            {/* decorative shapes */}
            <span aria-hidden="true" className="absolute -left-2 top-10 h-[78%] w-[78%] rounded-[2.5rem] bg-sv-blue/15" />
            <span aria-hidden="true" className="absolute -right-1 bottom-2 h-36 w-36 rounded-full bg-jn-gold/70" />
            <span
              aria-hidden="true"
              className="absolute right-2 top-0 h-24 w-24 opacity-70"
              style={{ backgroundImage: "radial-gradient(#142B4633 1.5px, transparent 1.5px)", backgroundSize: "12px 12px" }}
            />
            {/* portrait */}
            <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white bg-white shadow-2xl shadow-slate-400/40">
              <Image
                src="/images/mesani.jpeg"
                alt="Portrait of Sani in a dark blazer and turtleneck against an orange wall"
                width={1254}
                height={1254}
                priority
                sizes="(max-width: 1024px) 90vw, 480px"
                className="h-auto w-full"
              />
            </div>
            {/* floating UI chips */}
            <div className="absolute left-0 top-[16%] flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-bold text-sv-navy shadow-lg ring-1 ring-sv-border sm:-left-4 sm:text-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sv-soft text-sv-blue"><Code2 size={15} aria-hidden="true" /></span>
              Full-Stack Code
            </div>
            <div className="absolute right-0 top-[40%] flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-bold text-sv-navy shadow-lg ring-1 ring-sv-border sm:-right-4 sm:text-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sv-mint text-emerald-700"><Workflow size={15} aria-hidden="true" /></span>
              n8n Workflows
            </div>
            <div className="absolute bottom-[12%] left-0 flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-bold text-sv-navy shadow-lg ring-1 ring-sv-border sm:-left-6 sm:text-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sv-lavender text-violet-700"><Boxes size={15} aria-hidden="true" /></span>
              SaaS Products
            </div>
            <div className="absolute -bottom-1 right-6 hidden items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-bold text-sv-navy shadow-lg ring-1 ring-sv-border sm:flex">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-jn-pale text-sv-goldtext"><PenLine size={15} aria-hidden="true" /></span>
              SEO Content
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
