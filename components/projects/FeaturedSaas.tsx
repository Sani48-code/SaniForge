import Image from "next/image";
import { ArrowUpRight, Wallet, Wrench, Sparkles, KeyRound, Flag, UserCog, TrendingUp, ListChecks, Route, PackageCheck } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import StackChips from "./StackChips";
import { buildBenefits, featuredProjects, productStack, type FeaturedProject } from "@/lib/data/projects-page";

const benefitIcons = { wallet: Wallet, wrench: Wrench, sparkles: Sparkles, key: KeyRound };

function CaseBlock({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Flag;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-pf-border bg-white p-5">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-pf-navy text-pf-yellow">
          <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <h4 className="text-xs font-semibold uppercase tracking-wider text-pf-navy">{label}</h4>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-pf-slate">{children}</div>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((i) => (
        <li key={i} className="flex gap-2.5">
          <span className="mt-2 h-1 w-3 shrink-0 rounded bg-pf-yellow" />
          {i}
        </li>
      ))}
    </ul>
  );
}

function FeaturedCard({ p, flip }: { p: FeaturedProject; flip: boolean }) {
  return (
    <article className="rounded-2xl border border-pf-border bg-white p-5 shadow-sm sm:p-8">
      {/* Top row: image card + detail panel of matching height */}
      <div className="grid items-stretch gap-6 lg:grid-cols-2">
        <div className={`flex flex-col gap-5 ${flip ? "lg:order-2" : ""}`}>
          <div className="relative overflow-hidden rounded-xl border border-pf-border shadow-md">
            <span className="absolute left-3 top-3 z-10 rounded-full bg-pf-navy px-3 py-1 font-display text-sm font-bold text-white">
              {p.number}
            </span>
            <Image
              src={p.image}
              alt={p.imageAlt}
              width={1672}
              height={941}
              sizes="(max-width: 1024px) 100vw, 600px"
              className="h-auto w-full"
            />
          </div>
          <div className="rounded-xl bg-pf-gray p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-pf-navy">Built with</p>
            <StackChips items={p.details.stack} />
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-xl border border-pf-border bg-pf-navy p-6 text-white sm:p-8">
          <div>
            <span className="inline-block rounded-full bg-pf-yellow px-3 py-1 text-xs font-semibold text-pf-navy">
              {p.category}
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">{p.title}</h3>
            <p className="mt-2 text-sm italic text-white/70">{p.context}</p>
            <div className="mt-5 h-px w-12 bg-pf-yellow" />
            <h4 className="mt-5 text-xs font-semibold uppercase tracking-wider text-pf-yellow">Overview</h4>
            <p className="mt-2 text-base leading-relaxed text-white/85">{p.overview}</p>
          </div>
          <div className="mt-8">
            {p.url ? (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-pf-yellow px-5 py-3 text-sm font-semibold text-pf-navy transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {p.cta} <ArrowUpRight size={15} />
              </a>
            ) : (
              <div>
                <span className="inline-flex items-center gap-2 rounded-lg border-2 border-dashed border-pf-yellow px-5 py-3 text-sm font-semibold text-pf-yellow">
                  {p.cta}
                </span>
                {p.urlNote && <p className="mt-2 text-xs text-white/60">{p.urlNote}</p>}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Case study */}
      <div className="mt-8 rounded-xl bg-pf-gray p-5 sm:p-7">
        <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-pf-gold">
          <span className="h-px w-6 bg-pf-gold" /> Case study
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <CaseBlock icon={Flag} label="Business challenge">{p.challenge}</CaseBlock>
          <CaseBlock icon={UserCog} label="My role">{p.role}</CaseBlock>
          <CaseBlock icon={TrendingUp} label="Outcome">{p.outcome}</CaseBlock>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <CaseBlock icon={ListChecks} label="Solution and features"><Bullets items={p.solution} /></CaseBlock>
          <CaseBlock icon={Route} label="The approach">{p.details.approach}</CaseBlock>
          <CaseBlock icon={PackageCheck} label="Key deliverables"><Bullets items={p.details.deliverables} /></CaseBlock>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedSaas() {
  return (
    <section id="saas" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="container-px mx-auto max-w-[1240px]">
        <SectionHead
          eyebrow="Featured"
          title="Real Products. Real Business Workflows."
          text="Three SaaS products I helped build with the Growminion team, each one coded from scratch for real agency workflows."
        />
        <Reveal>
          <div className="mt-12 rounded-2xl border border-pf-border bg-pf-gray p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-pf-navy sm:text-2xl">
              Built in code, not rented from paid tools
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-pf-slate sm:text-base">
              Every product below is fully coded: the front end, the backend and the SQL database.
              Agencies need tools like these every day, and paid platforms charge more as the
              team grows. Building them in house changes the economics.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {buildBenefits.map((b) => {
                const Icon = benefitIcons[b.icon];
                return (
                  <div key={b.title} className="rounded-xl border border-pf-border bg-white p-5">
                    <Icon size={22} strokeWidth={1.6} className="text-pf-gold" aria-hidden="true" />
                    <h4 className="mt-3 font-display text-base font-bold text-pf-navy">{b.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-pf-slate">{b.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-6">
              <StackChips items={productStack} />
            </div>
          </div>
        </Reveal>
        <div className="mt-10 space-y-10">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.id}>
              <FeaturedCard p={p} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
