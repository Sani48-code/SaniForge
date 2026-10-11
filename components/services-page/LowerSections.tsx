import Link from "next/link";
import {
  Search, Map, PenTool, CheckCircle2, HeartPulse, House, Store, Cpu, ShoppingCart,
  ShieldCheck, Users, BookOpen, Target, Layers, MessageSquare, Wrench, Gauge, Lock, Phone,
} from "lucide-react";
import Reveal from "@/components/projects/Reveal";
import Heading from "./Heading";
import FaqLight from "./FaqLight";
import { processSteps, industries } from "@/lib/data/projects-page";
import { site } from "@/lib/data/site";

/* ---------- Process ---------- */
const stepIcons = { search: Search, map: Map, pen: PenTool, check: CheckCircle2 };

export function WorkProcess() {
  return (
    <section className="bg-sv-soft py-20 sm:py-28">
      <div className="container-px mx-auto max-w-[1240px]">
        <Heading eyebrow="Working Process" title="From Understanding the Problem to Building the Solution" />
        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          <span aria-hidden="true" className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-0.5 bg-sv-gold/60 md:left-[10%] md:right-[10%] md:top-[19px] md:h-0.5 md:w-auto" />
          {processSteps.map((s, i) => {
            const Icon = stepIcons[s.icon];
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <li className="relative flex gap-5 md:block md:text-center">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-sv-gold bg-white text-sv-blue md:mx-auto">
                    <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div className="md:mt-5">
                    <p className="font-mono text-sm font-bold text-sv-goldtext">Step {String(i + 1).padStart(2, "0")}</p>
                    <h3 className="mt-1 font-display text-xl font-bold text-sv-navy">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-sv-slate">{s.text}</p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Industries ---------- */
const indIcons = [HeartPulse, House, Store, Cpu, ShoppingCart, ShieldCheck, Users, BookOpen];
const indBg = ["bg-sv-soft", "bg-sv-palegold", "bg-sv-mint", "bg-sv-lavender"];

export function IndustriesSupport() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-px mx-auto max-w-[1240px]">
        <Heading
          eyebrow="Industries"
          title="Digital Solutions Across Different Industries"
          text="Each card shows a common challenge and how a digital solution helps. Labels separate industries with a project in my portfolio from my broader service scope."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => {
            const Icon = indIcons[i % indIcons.length];
            return (
              <Reveal key={ind.title} delay={(i % 4) * 0.05}>
                <div className={`h-full rounded-2xl border border-sv-border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${indBg[i % indBg.length]}`}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sv-blue shadow-sm">
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-sv-navy">{ind.title}</h3>
                  <span className="mt-2 inline-block rounded-full bg-white/80 px-2.5 py-0.5 text-[11px] font-bold text-sv-goldtext">
                    {ind.basis === "demonstrated" ? "Project in my portfolio" : "Service capability"}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-sv-slate">
                    <span className="font-semibold text-sv-navy">Challenge: </span>{ind.challenge}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-sv-slate">
                    <span className="font-semibold text-sv-navy">Solution: </span>{ind.help}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Tools (only technologies documented in the portfolio) ---------- */
const toolGroups = [
  { title: "Frontend Development", tools: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"], bg: "bg-sv-soft" },
  { title: "Backend Development", tools: ["Node.js", "Express.js", "REST API", "JWT"], bg: "bg-sv-palegold" },
  { title: "Databases & APIs", tools: ["SQL", "MongoDB", "Webhooks", "OpenAI API", "WordPress REST API"], bg: "bg-sv-mint" },
  { title: "Automation & Integrations", tools: ["n8n", "GoHighLevel", "Google Sheets", "Gmail", "Slack"], bg: "bg-sv-lavender" },
  { title: "SEO & Content Tools", tools: ["Surfer SEO", "Ahrefs", "Grammarly", "Notion", "ChatGPT", "Claude"], bg: "bg-sv-soft" },
  { title: "Deployment & Dev Tools", tools: ["Git", "GitHub", "WordPress", "Cloud hosting"], bg: "bg-sv-palegold" },
];

export function ToolsGrid() {
  return (
    <section className="bg-sv-soft/50 py-20 sm:py-28">
      <div className="container-px mx-auto max-w-[1240px]">
        <Heading eyebrow="Tools & Technologies" title="Tools I Use to Build Digital Solutions" />
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {toolGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.06}>
              <div className={`h-full rounded-2xl border border-sv-border p-6 ${g.bg}`}>
                <h3 className="font-display text-lg font-bold text-sv-navy">{g.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.tools.map((t) => (
                    <li key={t} className="rounded-lg border border-sv-border bg-white px-3 py-1.5 text-sm font-semibold text-sv-navy">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why work with me ---------- */
const principles = [
  { icon: Target, title: "Problem-first thinking", text: "I understand the goal before choosing a tool or a technique." },
  { icon: Layers, title: "Engineering mindset", text: "Product-oriented thinking applied to websites, content and automation." },
  { icon: Wrench, title: "Tailored, practical solutions", text: "Built around your requirements, not a fixed package." },
  { icon: MessageSquare, title: "Clear communication", text: "Plain language, regular updates and no surprises." },
  { icon: Gauge, title: "Usability and maintainability", text: "Solutions your team can actually use and keep updating." },
  { icon: Lock, title: "Careful with your information", text: "Client details are handled with care and kept confidential." },
];

export function Principles() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-px mx-auto max-w-[1240px]">
        <Heading eyebrow="Why Work With Me" title="More Than Just Delivering a Service" />
        <ul className="mt-14 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.06}>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sv-palegold text-sv-goldtext">
                  <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-sv-navy">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-sv-slate">{text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export const servicesFaqs = [
  { q: "Which service is right for my business?", a: "It depends on your biggest bottleneck. If visitors are not converting, start with copywriting. If nobody finds you, start with blog writing and SEO content. If work is slow or manual, look at automation with n8n or a custom web application. Book a call and I will recommend the smallest useful starting point." },
  { q: "Can I hire you for a single service?", a: "Yes. Every service works on its own, from one landing page to a full application. Many clients start with one service and add others later." },
  { q: "Can you build a custom SaaS product?", a: "Yes. I helped build the Growminion products shown above, including a local rank tracker, an AI content engine and an HR platform, in code from the interface to the backend and database." },
  { q: "Can you automate an existing business workflow?", a: "Yes. I map the manual steps first, then build n8n workflows that connect your tools, with error handling so you are alerted when something needs a person." },
  { q: "Can you integrate with existing applications and APIs?", a: "In most cases yes. If a tool has an API or webhooks it can usually be connected, and I will tell you early if a particular integration is not realistic." },
  { q: "How do we get started?", a: "Book a call or send a message with a short description of what you need. I will reply with questions, a recommended approach and a clear scope and quote." },
];

export function ServicesFaq() {
  return (
    <section className="bg-sv-soft py-20 sm:py-28">
      <div className="container-px mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[1fr_1.7fr]">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sv-goldtext">
            <span className="h-0.5 w-6 rounded bg-sv-gold" /> FAQ
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
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sv-palegold via-white to-sv-soft px-6 py-16 text-center shadow-lg ring-1 ring-sv-border sm:px-12">
            <span aria-hidden="true" className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-sv-gold/25" />
            <span aria-hidden="true" className="absolute -bottom-12 -right-8 h-44 w-44 rounded-full bg-sv-blue/10" />
            <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-extrabold text-sv-navy sm:text-5xl text-balance">
              Have a Business Challenge in Mind?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-sv-slate">
              Let&apos;s discuss your goals and explore a digital solution that fits your business needs.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={site.bookCallLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-sv-blue px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-gold"
              >
                <Phone size={18} aria-hidden="true" /> Book a Call
              </a>
              <Link href={site.mailtoLink} className="text-base font-semibold text-sv-navy underline decoration-sv-gold decoration-2 underline-offset-4 hover:text-sv-blue">
                Discuss Your Project
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
