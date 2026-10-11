import { Search, Map, Hammer, FlaskConical, Rocket, PenLine, Workflow, Code2, Server } from "lucide-react";
import Reveal from "@/components/projects/Reveal";
import Heading from "./Heading";

/* ---------- How I work ---------- */
const steps = [
  { icon: Search, title: "Understand", text: "Understand the business, the problem, the users, and the desired outcome." },
  { icon: Map, title: "Plan", text: "Choose an appropriate approach, define the scope, and identify the important requirements." },
  { icon: Hammer, title: "Build", text: "Develop the solution using suitable technologies and a maintainable implementation." },
  { icon: FlaskConical, title: "Test and Refine", text: "Check functionality, address issues, and refine the experience." },
  { icon: Rocket, title: "Deliver and Improve", text: "Deliver the agreed solution and identify sensible opportunities for future improvements." },
];

export function ProcessFive() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-px mx-auto max-w-[1240px]">
        <Heading eyebrow="How I work" title="A Clear Process. Thoughtful Execution." />
        <ol className="relative mt-14 grid gap-9 md:grid-cols-5 md:gap-5">
          <span aria-hidden="true" className="absolute left-[21px] top-2 h-[calc(100%-1rem)] w-0.5 bg-jn-gold/60 md:left-[10%] md:right-[10%] md:top-[21px] md:h-0.5 md:w-auto" />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.07} className="relative flex gap-5 md:block md:text-center">
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-jn-gold bg-white text-sv-blue shadow-sm md:mx-auto">
                  <s.icon size={19} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div className="md:mt-5">
                  <p className="font-mono text-sm font-bold text-sv-goldtext">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 font-display text-lg font-extrabold text-sv-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-jn-body">{s.text}</p>
                </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Technical capabilities (only skills documented in the portfolio) ---------- */
const brand: Record<string, string> = {
  HTML: "/icons/html5.svg",
  CSS: "/icons/css3.svg",
  "Tailwind CSS": "/icons/tailwindcss.svg",
  JavaScript: "/icons/javascript.svg",
  TypeScript: "/icons/typescript.svg",
  React: "/icons/react.svg",
  "Node.js": "/icons/nodejs.svg",
  "Express.js": "/icons/express.svg",
  JWT: "/icons/jsonwebtokens.svg",
};

const groups = [
  {
    title: "Frontend Development",
    icon: Code2,
    bg: "bg-sv-soft",
    tone: "text-sv-blue",
    blurb: "Responsive, fast interfaces that are easy to use and easy to maintain.",
    items: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React"],
  },
  {
    title: "Backend Development",
    icon: Server,
    bg: "bg-jn-pale",
    tone: "text-sv-goldtext",
    blurb: "Application logic, APIs and data handling that the interface can rely on.",
    items: ["Node.js", "Express.js", "REST APIs", "SQL", "JWT"],
  },
  {
    title: "Automation",
    icon: Workflow,
    bg: "bg-sv-mint",
    tone: "text-emerald-700",
    blurb: "Workflows that connect your tools and remove repetitive manual steps.",
    items: ["n8n", "Webhooks", "Google Sheets", "Gmail", "Slack", "OpenAI API"],
  },
  {
    title: "SEO and Content",
    icon: PenLine,
    bg: "bg-sv-lavender",
    tone: "text-violet-700",
    blurb: "Content written around search intent, with the tools to research and refine it.",
    items: ["Copywriting", "Blog writing", "SEO content", "Surfer SEO", "Ahrefs", "Grammarly"],
  },
];

export function TechCapabilities() {
  return (
    <section className="bg-sv-soft/60 py-20 sm:py-28">
      <div className="container-px mx-auto max-w-[1240px]">
        <Heading
          eyebrow="Technical capabilities"
          title="The Technology Behind the Solutions."
          text="The right tools matter less than choosing them for the problem. These are the ones I use to deliver practical, maintainable work."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 2) * 0.06}>
              <div className={`h-full rounded-3xl border border-sv-border p-7 sm:p-8 ${g.bg}`}>
                <div className="flex items-center gap-3">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm ${g.tone}`}>
                    <g.icon size={21} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-xl font-extrabold text-sv-navy">{g.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-jn-body">{g.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${g.title} skills`}>
                  {g.items.map((t) => (
                    <li key={t} className="inline-flex items-center gap-2 rounded-lg border border-sv-border bg-white px-3 py-1.5 text-sm font-semibold text-sv-navy">
                      {brand[t] && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={brand[t]} alt="" width={16} height={16} />
                      )}
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
