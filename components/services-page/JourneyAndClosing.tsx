import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Reveal from "@/components/projects/Reveal";
import FaqLight from "./FaqLight";
import { site } from "@/lib/data/site";

/* ---------- Journey ---------- */
const journey = [
  {
    n: "01",
    label: "The beginning",
    title: "Copywriting and understanding how businesses communicate",
    text: "I started at Growminion as a freelance copywriter, creating research-backed SEO content for local businesses.",
    image: "/images/experience/joined-as-freelancer.png",
    alt: "Starting as a freelance copywriter at Growminion",
  },
  {
    n: "02",
    label: "The transition",
    title: "Applying engineering thinking to practical problems",
    text: "I kept finding ways to automate repetitive workflows, optimize pipelines, and build tools. That mindset stood out.",
    image: "/images/experience/showed-engineer-mindset.png",
    alt: "Showing an engineering and automation mindset",
  },
  {
    n: "03",
    label: "The growth",
    title: "Taking on software engineering responsibilities",
    text: "Growminion promoted me to Web and Automation Engineer, where I build full-stack websites, SEO systems, and automation pipelines.",
    image: "/images/experience/promoted-to-engineer.png",
    alt: "Promoted to Web and Automation Engineer at Growminion",
  },
];

export function JourneySection() {
  return (
    <section className="bg-jn-pale/70 py-20 sm:py-28">
      <div className="container-px mx-auto max-w-[1240px]">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-4">
            <Image src="/images/growminion-mark.png" alt="Growminion logo" width={44} height={44} className="h-11 w-auto" />
            <span aria-hidden="true" className="text-xl text-sv-goldtext">+</span>
            <Image src="/images/saniforge-mark.png" alt="SaniForge logo" width={44} height={44} className="h-11 w-auto" />
          </div>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-sv-navy sm:text-5xl xl:text-6xl text-balance">
            From Understanding <span className="text-sv-blue">Words</span> to Engineering{" "}
            <span className="rounded bg-jn-gold/50 px-2">Solutions.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-jn-body">
            I joined Growminion as a copywriter. As my engineering mindset and technical
            skills became clear, I moved into engineering and development work. Knowing
            both the communication side and the technical side of digital products is
            what lets me connect the two.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-6 lg:grid-cols-3">
          {journey.map((j, i) => (
            <Reveal as="li" key={j.n} delay={i * 0.08} className={`flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-sv-border ${i === 1 ? "lg:mt-8" : i === 2 ? "lg:mt-16" : ""}`}>
                <div className="relative aspect-[16/10] bg-sv-soft">
                  <Image src={j.image} alt={j.alt} fill sizes="(max-width: 1024px) 100vw, 400px" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-sv-goldtext">
                    {j.n} · {j.label}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-extrabold leading-snug text-sv-navy">{j.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-jn-body">{j.text}</p>
                </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Projects banner (pointer to /projects, not a duplicate of it) ---------- */
const thumbs = [
  { src: "/images/projects/saas-local-seo.png", alt: "Local rank tracker dashboard" },
  { src: "/images/projects/saas-content.png", alt: "AI content engine platform" },
  { src: "/images/projects/saas-hr.png", alt: "HR and team productivity platform" },
];

export function ProjectsBanner() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-px mx-auto max-w-[1240px]">
        <Reveal>
          <div className="grid items-center gap-8 rounded-3xl bg-gradient-to-r from-sv-soft to-sv-lavender p-8 sm:p-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <h2 className="font-display text-3xl font-extrabold text-sv-navy sm:text-4xl">Want to See What I Build?</h2>
              <p className="mt-3 text-base leading-relaxed text-jn-body sm:text-lg">
                Explore selected projects, products, and practical implementations.
              </p>
              <Link
                href="/projects"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sv-blue px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jn-gold"
              >
                Explore All Projects <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <div className="flex items-center justify-center -space-x-5" aria-hidden={false}>
              {thumbs.map((t, i) => (
                <div
                  key={t.src}
                  className={`w-[34%] overflow-hidden rounded-xl border-4 border-white shadow-lg ${i === 1 ? "z-10 scale-110" : ""}`}
                >
                  <Image src={t.src} alt={t.alt} width={640} height={360} sizes="200px" className="h-auto w-full" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export const servicesFaqs = [
  { q: "What types of projects do you work on?", a: "I work on websites and web applications, SaaS products, automation workflows with n8n, GoHighLevel lead systems, and SEO-focused content such as copywriting and blog writing. You can see examples on the Projects page." },
  { q: "How does the project process work?", a: "It follows five steps: understand the problem, plan the approach, build, test and refine, then deliver and look at sensible improvements. You will always know what stage the work is in." },
  { q: "How do we decide the right solution for my business?", a: "We start with your goals and the problem behind them rather than a specific tool. After a short conversation I will recommend the smallest useful starting point and explain why." },
  { q: "Can you work on an existing website or application?", a: "In most cases yes. I can review what you have, improve it, add features or connect it to other tools. If a rebuild would serve you better, I will say so honestly." },
  { q: "How can I get started?", a: "Book a call or send a short message about what you need. We will talk through the problem and the options, and I will follow up with a clear recommendation." },
];

export function ServicesFaq() {
  return (
    <section className="bg-sv-soft py-20 sm:py-28">
      <div className="container-px mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[1fr_1.7fr]">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sv-goldtext">
            <span className="h-0.5 w-6 rounded bg-jn-gold" /> FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-sv-navy sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <FaqLight faqs={servicesFaqs} />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
export function ServicesCta() {
  return (
    <section className="bg-white pb-20 pt-4 sm:pb-28">
      <div className="container-px mx-auto max-w-[1240px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-jn-pale via-white to-sv-soft px-6 py-16 text-center shadow-lg ring-1 ring-sv-border sm:px-12">
            <span aria-hidden="true" className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-jn-gold/30" />
            <span aria-hidden="true" className="absolute -bottom-12 -right-8 h-44 w-44 rounded-full bg-sv-blue/10" />
            <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-extrabold text-sv-navy sm:text-5xl text-balance">
              Have a Problem Worth Solving?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-jn-body">
              Let&apos;s discuss your goals and find a practical way to turn your idea into a working solution.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={site.bookCallLink}
                className="inline-flex items-center gap-2 rounded-xl bg-sv-blue px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jn-gold"
              >
                <Phone size={18} aria-hidden="true" /> Book a Call
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-sv-navy bg-white px-8 py-4 text-lg font-semibold text-sv-navy transition hover:-translate-y-0.5 hover:border-jn-gold hover:bg-jn-pale focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jn-gold"
              >
                Explore My Work
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
