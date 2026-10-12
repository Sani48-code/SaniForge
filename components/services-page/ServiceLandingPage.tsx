import { safeJsonLd } from "@/lib/json-ld";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Mail, Phone, ShieldCheck, Target, Code2, Sparkles, Layers } from "lucide-react";
import Reveal from "@/components/projects/Reveal";
import Heading from "./Heading";
import FaqLight from "./FaqLight";
import { PipelineExample, SearchConsoleExample } from "./ExampleVisuals";
import { sharedConsult, type LandingImage, type ServiceLanding } from "@/lib/data/service-landings";
import { site } from "@/lib/data/site";

type Offer = { title: string; text: string; points?: string[] };
type Faq = { q: string; a: string };

const uspIcons = [Target, Code2, Sparkles, Layers];
const uspBg = ["bg-sv-soft", "bg-jn-pale", "bg-sv-mint", "bg-sv-lavender"];
const offerBg = ["bg-white", "bg-sv-soft", "bg-white", "bg-sv-mint", "bg-white", "bg-sv-lavender"];

function Img({ img, className = "", sizes, priority }: { img: LandingImage; className?: string; sizes: string; priority?: boolean }) {
  return <Image src={img.src} alt={img.alt} width={img.w} height={img.h} sizes={sizes} priority={priority} className={`h-auto w-full ${className}`} />;
}

function Cta({ label = "Book a Call" }: { label?: string }) {
  return (
    <a
      href={site.bookCallLink}
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-sv-blue px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jn-gold"
    >
      <Phone size={17} aria-hidden="true" /> {label}
    </a>
  );
}

export default function ServiceLandingPage({
  landing,
  label,
  offers,
  faqs,
  icon,
}: {
  landing: ServiceLanding;
  label: string;
  offers: Offer[];
  faqs: Faq[];
  icon: "pen" | "file" | "code" | "workflow" | "target" | "layers";
}) {
  const { hero, images } = landing;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: label,
      description: landing.seo.description,
      url: `${site.url}/services/${landing.slug}`,
      provider: { "@type": "Person", name: site.founder, url: site.url },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${label} services`,
        itemListElement: offers.map((o) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: o.title, description: o.text },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
        { "@type": "ListItem", position: 3, name: label, item: `${site.url}/services/${landing.slug}` },
      ],
    },
  ];

  return (
    <div data-light-page className="bg-white font-sans text-sv-navy">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-sv-soft to-jn-pale/70 py-14 sm:py-20">
        <div className="container-px mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-sm text-jn-body">
              <Link href="/" className="hover:text-sv-blue">Home</Link> / <Link href="/services" className="hover:text-sv-blue">Services</Link>
            </nav>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-sv-goldtext">{hero.eyebrow}</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-sv-navy sm:text-5xl xl:text-6xl text-balance">
              {hero.titleLead}{" "}
              <span className="relative text-sv-blue">
                {hero.titleAccent}
                <span aria-hidden="true" className="absolute -bottom-1 left-0 -z-10 h-3 w-full rounded bg-jn-gold/50" />
              </span>
              {hero.titleTail}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-jn-body">{hero.pain}</p>
            <ul className="mt-6 space-y-2.5">
              {hero.proofs.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-base text-sv-navy">
                  <Check size={18} className="mt-0.5 shrink-0 text-sv-blue" aria-hidden="true" /> {p}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Cta />
              <a
                href={site.mailtoLink}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-sv-navy bg-white px-6 py-4 text-base font-semibold text-sv-navy transition hover:-translate-y-0.5 hover:border-jn-gold hover:bg-jn-pale focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jn-gold"
              >
                <Mail size={17} aria-hidden="true" /> Email Me
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative mx-auto max-w-[540px] pb-6">
              <span aria-hidden="true" className="absolute -left-4 -top-4 h-32 w-32 rounded-full bg-jn-gold/50" />
              <div className="relative overflow-hidden rounded-3xl border-4 border-white bg-white shadow-2xl shadow-slate-400/40">
                <Img img={images.hero} sizes="(max-width: 1024px) 90vw, 520px" priority />
              </div>
              {images.subExample ? (
                <div className="absolute -bottom-1 -left-3 w-[56%] sm:-left-8">
                  {images.subExample === "gsc" ? <SearchConsoleExample /> : <PipelineExample />}
                </div>
              ) : (
                images.sub && (
                  <div className="absolute -bottom-1 -left-3 w-[44%] overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:-left-8">
                    <Img img={images.sub} sizes="220px" />
                  </div>
                )
              )}
              <div className="absolute -right-2 top-5 flex items-center gap-1.5 rounded-xl bg-white px-3 py-2 text-xs font-bold text-sv-navy shadow-lg ring-1 ring-sv-border sm:-right-5 sm:text-sm">
                <ShieldCheck size={15} className="text-sv-blue" aria-hidden="true" /> {label}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. USPs */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-px mx-auto max-w-[1240px]">
          <Heading eyebrow="Why work with me" title="Four Reasons This Works" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {landing.usps.map((u, i) => {
              const Icon = uspIcons[i];
              return (
                <Reveal key={u.title} delay={i * 0.06}>
                  <div className={`h-full rounded-2xl border border-sv-border p-6 ${uspBg[i]}`}>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sv-blue shadow-sm">
                      <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-extrabold text-sv-navy">{u.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-jn-body">{u.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-10 text-center"><Cta /></div>
        </div>
      </section>

      {/* 3. Trust narrative */}
      <section className="bg-jn-alt py-20 sm:py-24">
        <div className="container-px mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border-4 border-white bg-white shadow-xl">
              <Img img={images.side} sizes="(max-width: 1024px) 90vw, 560px" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-sv-navy sm:text-4xl text-balance">{landing.trust.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-jn-body sm:text-lg">{landing.trust.text}</p>
            <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-sv-blue underline decoration-jn-gold decoration-2 underline-offset-4 hover:text-blue-800">
              See all services <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 4. Process */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-px mx-auto max-w-[1240px]">
          <Heading eyebrow="How it works" title="A Clear Three-Step Process" text="Working together should reduce friction, not add to it. Here is what each project looks like." />
          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {landing.steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.08} className="h-full list-none rounded-3xl border border-sv-border bg-sv-soft p-7">
                  <span className="font-display text-5xl font-extrabold text-sv-blue">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-display text-xl font-extrabold text-sv-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-jn-body sm:text-base">{s.text}</p>
              </Reveal>
            ))}
          </ol>
          <div className="mt-10 text-center"><Cta /></div>
        </div>
      </section>

      {/* 5. Offers */}
      <section className="bg-sv-soft py-20 sm:py-28">
        <div className="container-px mx-auto max-w-[1240px]">
          <Heading eyebrow="What you get" title={`What I Offer in ${label}`} text="Use one offer on its own or combine them. Each has a clear job." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {offers.map((o, i) => (
              <Reveal key={o.title} delay={(i % 3) * 0.06}>
                <article className={`flex h-full flex-col rounded-2xl border border-sv-border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${offerBg[i % offerBg.length]}`}>
                  <span className="font-mono text-sm font-bold text-sv-goldtext">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-display text-xl font-extrabold text-sv-navy">{o.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-jn-body sm:text-base">{o.text}</p>
                  {o.points && o.points.length > 0 && (
                    <ul className="mt-4 space-y-1.5">
                      {o.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-sv-navy">
                          <Check size={15} className="mt-0.5 shrink-0 text-sv-blue" aria-hidden="true" /> {p}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center"><Cta /></div>
        </div>
      </section>

      {/* 6. Tools */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-px mx-auto max-w-[1240px]">
          <Heading eyebrow="Tools" title="Tools and Technical Stack" text="The tools I use for this service and what each one is for." />
          <Reveal>
            <div className="mt-12 overflow-x-auto rounded-2xl border border-sv-border">
              <table className="w-full min-w-[640px] text-left text-sm">
                <caption className="sr-only">Tools used and the benefit of each</caption>
                <thead className="bg-sv-soft text-sv-navy">
                  <tr>
                    <th scope="col" className="px-5 py-3 font-bold">Category</th>
                    <th scope="col" className="px-5 py-3 font-bold">Tools</th>
                    <th scope="col" className="px-5 py-3 font-bold">Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  {landing.tools.map((t, i) => (
                    <tr key={t.category} className={i % 2 ? "bg-sv-soft/40" : "bg-white"}>
                      <th scope="row" className="px-5 py-4 font-semibold text-sv-navy">{t.category}</th>
                      <td className="px-5 py-4 text-jn-body">{t.tools}</td>
                      <td className="px-5 py-4 text-jn-body">{t.benefit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Vetting */}
      <section className="bg-jn-pale/60 py-20 sm:py-24">
        <div className="container-px mx-auto max-w-3xl">
          <Reveal>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sv-blue shadow-sm">
              <ShieldCheck size={24} aria-hidden="true" />
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-sv-navy sm:text-4xl text-balance">{landing.vetting.title}</h2>
            {landing.vetting.paras.map((p) => (
              <p key={p} className="mt-4 text-base leading-relaxed text-jn-body sm:text-lg">{p}</p>
            ))}
            <div className="mt-8"><Cta /></div>
          </Reveal>
        </div>
      </section>

      {/* 8. Comparison */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-px mx-auto max-w-[1240px]">
          <Heading eyebrow="Compare" title={`Why Choose Me for ${label}`} />
          <Reveal>
            <div className="mt-12 overflow-x-auto rounded-2xl border border-sv-border">
              <table className="w-full min-w-[720px] text-left text-sm">
                <caption className="sr-only">Comparison of cheap freelancers, generalist agencies and this service</caption>
                <thead>
                  <tr className="bg-sv-soft text-sv-navy">
                    <th scope="col" className="px-5 py-4 font-bold">Factor</th>
                    <th scope="col" className="px-5 py-4 font-bold">Cheap freelancers</th>
                    <th scope="col" className="px-5 py-4 font-bold">Generalist agencies</th>
                    <th scope="col" className="bg-jn-gold px-5 py-4 font-bold text-sv-navy">This service</th>
                  </tr>
                </thead>
                <tbody>
                  {landing.compare.map((r) => (
                    <tr key={r.factor} className="border-t border-sv-border">
                      <th scope="row" className="px-5 py-4 font-semibold text-sv-navy">{r.factor}</th>
                      <td className="px-5 py-4 text-jn-body">{r.cheap}</td>
                      <td className="px-5 py-4 text-jn-body">{r.agency}</td>
                      <td className="bg-jn-pale/70 px-5 py-4 font-semibold text-sv-navy">{r.me}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <div className="mt-10 text-center"><Cta /></div>
        </div>
      </section>

      {/* 9. Real proof */}
      <section className="bg-sv-lavender/60 py-20 sm:py-24">
        <div className="container-px mx-auto max-w-[1240px]">
          <Heading eyebrow="Proof" title={landing.proofTitle} text={landing.proofText} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {landing.proof.map((p, i) => {
              const inner = (
                <>
                  <div className="relative aspect-[3/2] overflow-hidden bg-sv-soft">
                    <Image src={p.image.src} alt={p.image.alt} fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-sv-goldtext">{p.tag}</p>
                    <h3 className="mt-2 font-display text-lg font-extrabold leading-snug text-sv-navy">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-jn-body">{p.text}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-sv-blue">
                      {p.external ? "Open" : "Read"} <ArrowUpRight size={15} aria-hidden="true" />
                    </span>
                  </div>
                </>
              );
              const cls = "group flex h-full flex-col overflow-hidden rounded-2xl border border-sv-border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-sv-blue";
              return (
                <Reveal key={p.title} delay={i * 0.07}>
                  {p.external ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
                  ) : (
                    <Link href={p.href ?? "/projects"} className={cls}>{inner}</Link>
                  )}
                </Reveal>
              );
            })}
          </div>
          <p className="mt-8 text-center text-sm text-jn-body">
            More on the <Link href="/projects" className="font-semibold text-sv-blue underline decoration-jn-gold decoration-2 underline-offset-4">Projects page</Link>.
          </p>
        </div>
      </section>

      {/* 10. Profiles + starting points */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-px mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold text-sv-navy sm:text-4xl">Who This Is For</h2>
            <ul className="mt-6 space-y-3">
              {landing.profiles.map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-xl bg-sv-soft p-4 text-base text-sv-navy">
                  <Check size={18} className="mt-0.5 shrink-0 text-sv-blue" aria-hidden="true" /> {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl font-extrabold text-sv-navy sm:text-4xl">Common Starting Points</h2>
            <p className="mt-2 text-sm text-jn-body">Typical situations and what I do about them. These are not client case results.</p>
            <ul className="mt-6 space-y-3">
              {landing.startingPoints.map((s) => (
                <li key={s.problem} className="rounded-xl bg-jn-pale/70 p-4">
                  <p className="text-base font-semibold text-sv-navy">{s.problem}</p>
                  <p className="mt-1 text-sm text-jn-body"><span className="font-bold text-emerald-700">What I do: </span>{s.fix}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="bg-sv-soft py-20 sm:py-24">
        <div className="container-px mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[1fr_1.7fr]">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sv-goldtext">
              <span className="h-0.5 w-6 rounded bg-jn-gold" /> FAQ
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-sv-navy sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <FaqLight faqs={faqs} />
          </Reveal>
        </div>
      </section>

      {/* 12. Industries */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-px mx-auto max-w-[1240px]">
          <Heading eyebrow="Use cases" title="Industries and Use Cases" text="Where this service fits best. If your field is not listed, ask." />
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {landing.industries.map((it, i) => (
              <li key={it} className={`rounded-full border border-sv-border px-5 py-2.5 text-sm font-semibold text-sv-navy ${["bg-sv-soft", "bg-jn-pale", "bg-sv-mint", "bg-sv-lavender"][i % 4]}`}>{it}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 13. Consultation */}
      <section className="bg-jn-alt py-20 sm:py-24">
        <div className="container-px mx-auto max-w-[1240px]">
          <Heading eyebrow="First call" title="What to Expect on a Strategy Call" text="A short, no-pressure call to see whether I am the right fit." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {sharedConsult.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl bg-white p-7 shadow-sm ring-1 ring-sv-border">
                  <span className="font-display text-4xl font-extrabold text-sv-blue">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-display text-lg font-extrabold text-sv-navy">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-jn-body">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center"><Cta /></div>
        </div>
      </section>

      {/* 14. Closing */}
      <section className="bg-white pb-20 pt-4 sm:pb-28">
        <div className="container-px mx-auto max-w-[1240px]">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-jn-pale via-white to-sv-soft px-6 py-16 text-center shadow-lg ring-1 ring-sv-border sm:px-12">
              <span aria-hidden="true" className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-jn-gold/30" />
              <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-extrabold text-sv-navy sm:text-5xl text-balance">{landing.closing.title}</h2>
              <p className="relative mx-auto mt-4 max-w-xl text-lg text-jn-body">{landing.closing.text}</p>
              <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Cta />
                <a href={site.mailtoLink} className="text-base font-semibold text-sv-navy underline decoration-jn-gold decoration-2 underline-offset-4 hover:text-sv-blue">Email Me</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
