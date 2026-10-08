import Image from "next/image";
import { Code2, GraduationCap, Briefcase, Workflow, Search } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import { linkifyGrowMinion } from "@/lib/linkify-growminion";

const highlights = [
  { icon: Code2, title: "Full-Stack Dev", sub: "MERN Stack", tone: "from-blue-accent to-blue-soft" },
  { icon: GraduationCap, title: "CSE Student", sub: "Strong Fundamentals", tone: "from-gold to-gold-soft" },
  { icon: Briefcase, title: "Real-World Work", sub: "Shipped for US Clients", tone: "from-blue-accent to-gold" },
  { icon: Workflow, title: "Automation", sub: "n8n Workflows", tone: "from-gold to-gold-light" },
  { icon: Search, title: "SEO Strategy", sub: "Content & Growth", tone: "from-blue-soft to-blue-accent" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden border-t border-gold/40 bg-gradient-to-br from-[#F2C94C] via-[#E3AE2F] to-[#C9962B] py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -right-32 top-10 h-[480px] w-[480px] rounded-full bg-[#0B1A3D]/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-px relative mx-auto grid max-w-content grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ---------- Text ---------- */}
        <div>
          <FadeIn>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#0B1A3D]" />
              <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-[#0B1A3D]">
                About Me
              </p>
            </div>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-[#0B1A3D] sm:text-5xl lg:text-6xl text-balance">
              Engineer by degree,{" "}
              <em className="bg-gradient-to-r from-[#0B2A8A] to-[#1E4FD8] bg-clip-text italic text-transparent">
                builder
              </em>{" "}
              by practice
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-[#1B2338] sm:text-lg [&_a]:!text-[#0B1A3D] [&_a]:!decoration-[#0B1A3D]/60">
              {linkifyGrowMinion(
                "I'm Abdul Kaiyum Sani, a CSE student and software engineer, and a core team member at GrowMinion. As a CSE student I know the fundamentals a software engineer needs: data structures, databases, networking and system design."
              )}
            </p>
            <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-[#1B2338] sm:text-lg [&_a]:!text-[#0B1A3D] [&_a]:!decoration-[#0B1A3D]/60">
              Beyond the classroom, I have real-world experience: shipping client websites, n8n automations and AI-powered SaaS products for businesses across the US.
            </p>
          </FadeIn>

          <div className="mt-9 flex max-w-xl flex-wrap gap-3">
            {highlights.map((h, i) => (
              <FadeIn key={h.title} delay={0.15 + i * 0.06}>
                <div className="flex items-center gap-3 rounded-2xl border border-navy-border bg-navy-panel/70 py-3 pl-3 pr-5 transition-colors hover:border-gold/40">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${h.tone} text-navy-deep`}>
                    <h.icon size={18} strokeWidth={2.4} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold leading-tight text-ink">{h.title}</p>
                    <p className="mt-0.5 text-xs text-ink-muted">{h.sub}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ---------- Image ---------- */}
        <FadeIn delay={0.2} className="relative isolate mx-auto w-full max-w-xl">
          <div className="relative">
            <div className="absolute left-[60%] top-[10%] z-0 aspect-square h-[92%] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#1E4FD8] via-[#12306F] to-[#0B1A3D] shadow-[0_0_60px_-10px_rgba(11,26,61,0.6)]" />
            <Image
              src="/images/about-cutout.png"
              alt="Abdul Kaiyum Sani at his desk with a laptop"
              width={1375}
              height={931}
              sizes="(min-width: 1024px) 560px, 95vw"
              className="relative z-10 h-auto w-full drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)]"
            />
          </div>

          <div className="relative mx-auto mt-8 flex w-fit items-center gap-3 rounded-2xl border border-[#0B1A3D]/30 bg-[#0B1A3D] px-5 py-3 shadow-xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-light text-navy-deep">
              <Code2 size={18} strokeWidth={2.6} />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Software Engineer</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                GrowMinion Core Team
              </p>
            </div>
          </div>

          <p className="absolute right-0 top-0 -rotate-6 font-display text-lg font-semibold italic leading-tight text-[#0B1A3D] sm:-right-2">
            Learn → Build → Ship
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
