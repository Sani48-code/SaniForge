import type { LucideIcon } from "lucide-react";
import { ArrowRight, CalendarDays, Code2, FileText, Globe, PenLine, Rocket, Search, TrendingUp, Workflow } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import { site } from "@/lib/data/site";

function IconTile({
  tone,
  icon: Icon,
  extras = [],
  size = "h-16 w-16",
}: {
  tone: string;
  icon: LucideIcon;
  extras?: LucideIcon[];
  size?: string;
}) {
  return (
    <div className={`relative shrink-0 ${size}`}>
      <div className={`flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br text-navy-deep shadow-lg ${tone}`}>
        <Icon className="h-1/2 w-1/2" strokeWidth={2.2} />
      </div>
      {extras[0] && (
        <span className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-xl border border-gold/40 bg-navy-deep text-gold-light shadow">
          {(() => { const E = extras[0]; return <E size={15} strokeWidth={2.4} />; })()}
        </span>
      )}
      {extras[1] && (
        <span className="absolute -bottom-3 -left-3 flex h-8 w-8 items-center justify-center rounded-xl border border-blue-accent/50 bg-navy-deep text-blue-soft shadow">
          {(() => { const E = extras[1]; return <E size={15} strokeWidth={2.4} />; })()}
        </span>
      )}
    </div>
  );
}

type Role = {
  period: string;
  org: string;
  title: string;
  description: string;
  tags: string[];
  logo?: string;
  tone: string;
  dot: string;
  href?: string;
  avatarTone: string;
  icon: LucideIcon;
  extras: LucideIcon[];
};

const roles: Role[] = [
  {
    period: "2024 to Present",
    org: "GrowMinion",
    title: "Core Team Member & Web/Automation Engineer",
    description:
      "Building client websites, SEO content systems, and n8n automation pipelines; helped build 3 internal SaaS products used to scale content and rank-tracking for local businesses.",
    tags: ["Web Development", "SEO Content", "n8n Automation"],
    logo: "/images/growminion-mark.png",
    tone: "from-gold/15 to-transparent border-gold/30",
    dot: "bg-gold",
    href: site.growminionUrl,
    avatarTone: "from-gold to-[#8a6a14]",
    icon: Globe,
    extras: [Search, Workflow],
  },
  {
    period: "2023 to Present",
    org: "SaniForge",
    title: "Founder",
    description:
      "Personal practice covering web development, SEO copywriting, and automation for businesses across the US.",
    tags: ["Web", "SEO", "Automation"],
    logo: "/images/saniforge-mark.png",
    tone: "from-blue-accent/15 to-transparent border-blue-accent/30",
    dot: "bg-blue-accent",
    avatarTone: "from-blue-accent to-[#14295e]",
    icon: Code2,
    extras: [Globe, Rocket],
  },
  {
    period: "2023",
    org: "Started with SEO Copywriting",
    title: "Freelance Copywriter at GrowMinion",
    description:
      "My journey began at GrowMinion as a freelance copywriter, writing keyword-researched service pages for law firms, home service companies, and real estate businesses.",
    tags: ["Law Firms", "Home Services", "Real Estate"],
    tone: "from-gold-soft/10 via-blue-accent/10 to-transparent border-navy-border",
    dot: "bg-gold-soft",
    avatarTone: "from-blue-soft to-gold",
    icon: PenLine,
    extras: [Search, FileText],
  },
];

const steps = [
  {
    title: "Joined as a Freelance Copywriter",
    text: "I started at GrowMinion as a freelance copywriter, creating SEO content for local businesses.",
    icon: PenLine,
    tone: "from-blue-soft to-[#14295e]",
  },
  {
    title: "Showed an Engineering Mindset",
    text: "I kept finding ways to automate, optimize, and build. This mindset stood out.",
    icon: Code2,
    tone: "from-gold to-[#8a6a14]",
  },
  {
    title: "Got Promoted to Engineer",
    text: "Eventually, GrowMinion promoted me to Web/Automation Engineer, where I now build websites, SEO systems, and automation pipelines.",
    icon: TrendingUp,
    tone: "from-blue-accent to-gold",
  },
];

const disciplines = [
  { icon: Code2, title: "Development", sub: "Builds the product", tone: "from-blue-accent to-[#14295e]" },
  { icon: Search, title: "Copywriting", sub: "Brings the message", tone: "from-gold to-[#8a6a14]" },
  { icon: Workflow, title: "Automation", sub: "Keeps it moving", tone: "from-blue-soft to-gold" },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative scroll-mt-24 overflow-hidden border-t border-navy-border py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -left-40 top-20 h-[460px] w-[460px] rounded-full bg-blue-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-px relative mx-auto max-w-content">
        {/* ---------- Heading ---------- */}
        <FadeIn className="flex flex-col items-start justify-between gap-6 sm:flex-row">
          <div>
            <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-gold-light">
              Experience
            </span>
            <h2 className="mt-5 font-display text-4xl font-medium text-ink sm:text-5xl lg:text-6xl">
              How I{" "}
              <em className="bg-gradient-to-r from-blue-accent to-gold-light bg-clip-text italic text-transparent">
                got here
              </em>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              A journey of learning, building, and solving real problems across
              content, development, and automation.
            </p>
          </div>
          <p className="-rotate-3 font-display text-xl italic leading-snug text-gold-light">
            Different roles.
            <br />
            Same goal.
          </p>
        </FadeIn>

        {/* ---------- Timeline ---------- */}
        <div className="relative mt-14">
          <div className="absolute bottom-6 left-[7px] top-6 hidden w-px bg-gradient-to-b from-gold via-blue-accent to-transparent sm:block" />
          <div className="space-y-5">
            {roles.map((r, i) => (
              <FadeIn key={r.org} delay={i * 0.1} className="relative sm:pl-10">
                <span className={`absolute left-0 top-10 hidden h-4 w-4 rounded-full ring-4 ring-navy-deep sm:block ${r.dot}`} />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-[170px_1fr]">
                  <div className={`flex items-center gap-3 rounded-2xl border bg-gradient-to-br p-5 ${r.tone}`}>
                    <CalendarDays size={20} className="shrink-0 text-gold-light" />
                    <p className="font-display text-xl leading-tight text-ink">{r.period}</p>
                  </div>
                  <div className={`flex flex-col gap-5 rounded-2xl border bg-gradient-to-br bg-navy-panel/60 p-6 md:flex-row md:items-center ${r.tone}`}>
                    <div className="flex flex-1 gap-4">
                      {r.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={r.logo} alt={`${r.org} logo`} className="h-14 w-14 shrink-0 rounded-full object-contain" />
                      ) : (
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-blue-accent text-navy-deep">
                          <PenLine size={24} />
                        </span>
                      )}
                      <div>
                        <h3 className="font-display text-2xl text-ink">
                          {r.href ? (
                            <a href={r.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light">
                              {r.org}
                            </a>
                          ) : (
                            r.org
                          )}
                        </h3>
                        <p className="mt-1 text-base font-semibold text-blue-soft">{r.title}</p>
                        <p className="mt-2 text-base leading-relaxed text-ink-muted">{r.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 md:w-52 md:flex-col md:items-end">
                      <IconTile tone={r.avatarTone} icon={r.icon} extras={r.extras} size="h-20 w-20" />
                      <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
                      {r.tags.map((t) => (
                        <span key={t} className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold-light">
                          {t}
                        </span>
                      ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ---------- Turning point ---------- */}
        <FadeIn className="mt-14 rounded-3xl border border-navy-border bg-navy-panel/60 p-6 sm:p-10">
          <span className="inline-block rounded-full border border-blue-accent/40 bg-blue-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-blue-soft">
            The Turning Point
          </span>
          <h3 className="mt-4 font-display text-3xl text-ink sm:text-4xl">How I ended up at GrowMinion</h3>

          <div className="mt-8 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1fr_1fr_1fr_0.9fr]">
            {steps.map((s, i) => (
              <div key={s.title} className="relative">
                <IconTile tone={s.tone} icon={s.icon} size="h-16 w-16" />
                <div className="mt-4 flex items-center gap-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy-deep">
                    {i + 1}
                  </span>
                  <h4 className="text-base font-semibold text-ink">{s.title}</h4>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.text}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="absolute -right-5 top-3 hidden text-gold/60 lg:block" size={22} />
                )}
              </div>
            ))}

            <div className="flex flex-col justify-center rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/15 to-blue-accent/10 p-6">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/growminion-mark.png" alt="GrowMinion logo" className="h-11 w-11 rounded-full" />
                <span className="font-display text-xl text-ink">GrowMinion</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                From a freelance copywriter to an engineer. All because I showed I cared about the bigger picture.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ---------- One person, three disciplines ---------- */}
        <FadeIn className="mt-8 grid grid-cols-1 items-center gap-10 rounded-3xl border border-navy-border bg-gradient-to-br from-blue-accent/10 via-navy-panel/60 to-gold/10 p-6 sm:p-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h3 className="font-display text-3xl text-ink sm:text-4xl">One person, three disciplines</h3>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Most projects need a developer, a copywriter, and someone to automate the busywork in between. I combine
              all three, which means fewer handoffs, faster shipping, and a system that actually talks to itself: the
              content pipeline, the site, and the automation all built by the same person, for the same goal.
            </p>
          </div>

          <div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {disciplines.map((d, i) => (
                <div key={d.title} className="flex items-center gap-3">
                  <div className="w-36 rounded-2xl border border-navy-border bg-navy-deep/60 p-4 text-center">
                    <div className="mx-auto w-fit">
                      <IconTile tone={d.tone} icon={d.icon} size="h-16 w-16" />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-ink">{d.title}</p>
                    <p className="mt-0.5 text-xs text-ink-muted">{d.sub}</p>
                  </div>
                  {i < disciplines.length - 1 && <span className="text-xl font-bold text-gold">+</span>}
                </div>
              ))}
            </div>
            <p className="mt-5 text-center font-display text-lg italic text-gold-light">Same person. Same goal.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
