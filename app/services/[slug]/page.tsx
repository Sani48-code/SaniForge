import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Phone } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import ServiceIllustration from "@/components/services/ServiceIllustration";
import OfferCard from "@/components/services/OfferCard";
import ComparisonTable from "@/components/services/ComparisonTable";
import FaqAccordion from "@/components/services/FaqAccordion";
import { getService, services } from "@/lib/data/services";
import { site } from "@/lib/data/site";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params | Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await Promise.resolve(params);
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `${site.url}/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Params | Promise<Params>;
}) {
  const { slug } = await Promise.resolve(params);
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.label,
      description: service.seoDescription,
      url: `${site.url}/services/${service.slug}`,
      provider: { "@type": "Person", name: site.founder, url: site.url },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${service.label} services`,
        itemListElement: service.offers.map((o) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: o.title, description: o.text },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
        { "@type": "ListItem", position: 3, name: service.label, item: `${site.url}/services/${service.slug}` },
      ],
    },
  ];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[#EEF5FF] py-16 sm:py-24">
        <div className="container-px mx-auto grid max-w-content items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <nav aria-label="Breadcrumb" className="text-sm text-[#64748B]">
              <Link href="/" className="hover:text-[#2563EB]">Home</Link>
              {" / "}
              <Link href="/services" className="hover:text-[#2563EB]">Services</Link>
            </nav>
            <span className="mt-6 inline-block rounded-full border border-[#E8B43A] bg-[#FFF6DD] px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-[#8A6100]">
              {service.badge}
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] text-[#142B46] sm:text-5xl lg:text-[3.4rem] text-balance">
              {service.headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#64748B]">{service.intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={site.bookCallLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#E8B43A] px-6 py-3.5 text-base font-semibold text-[#142B46] shadow-lg shadow-slate-200 transition hover:brightness-110"
              >
                <Phone size={16} /> Book a Free Strategy Call
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center rounded-xl border border-[#DFE7F1] bg-white px-6 py-3.5 text-base font-semibold text-[#142B46] transition hover:border-[#E8B43A]"
              >
                See Related Work
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-3xl border border-[#E8B43A]/60 bg-white p-4 shadow-lg shadow-slate-200">
              <div className="aspect-[4/3] w-full">
                <ServiceIllustration slug={service.slug} />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Offers */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-px mx-auto max-w-content">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <FadeIn>
              <p className="border-l-4 border-gold pl-3 font-mono text-sm text-slate-700">
                {service.label}: What I Offer
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-slate-900 sm:text-5xl text-balance">
                Full-service. Or pick and choose.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-base leading-relaxed text-slate-600 lg:text-right">
                Whether you need a one-time project or an ongoing partner, each
                part of {service.label.toLowerCase()} can be bought on its own
                or combined into one complete system.
              </p>
            </FadeIn>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {service.offers.map((o, i) => (
              <FadeIn key={o.title} delay={i * 0.05}>
                <OfferCard offer={o} index={i} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-24">
        <div className="container-px mx-auto max-w-content">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#8A6100]">
              How it works
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[#142B46] sm:text-5xl text-balance">
              A simple, transparent process
            </h2>
          </FadeIn>
          <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <li className="h-full list-none rounded-2xl border border-[#DFE7F1] bg-white p-6">
                  <span className="font-mono text-3xl font-bold text-[#8A6100]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-[#142B46]">{p.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-[#64748B]">{p.text}</p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-y border-[#DFE7F1] bg-[#EEF5FF] py-20 sm:py-24">
        <div className="container-px mx-auto max-w-content">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#8A6100]">
              SaniForge vs. Other Options
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[#142B46] sm:text-5xl text-balance">
              {service.compare.title}
            </h2>
          </FadeIn>
          <div className="mt-12">
            <ComparisonTable compare={service.compare} />
          </div>
        </div>
      </section>

      {/* Tools + ideal for + proof */}
      <section className="py-20 sm:py-24">
        <div className="container-px mx-auto grid max-w-content grid-cols-1 gap-10 lg:grid-cols-3">
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-[#142B46]">Tools I use</h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {service.tools.map((t) => (
                <span key={t} className="rounded-full border border-[#E8B43A]/60 bg-[#FFF6DD] px-4 py-1.5 text-sm text-[#8A6100]">
                  {t}
                </span>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="font-display text-2xl font-bold text-[#142B46]">Ideal for</h2>
            <ul className="mt-5 space-y-3">
              {service.idealFor.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-base text-[#64748B]">
                  <Check size={16} className="mt-1 shrink-0 text-[#8A6100]" />
                  {i}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.16}>
            <h2 className="font-display text-2xl font-bold text-[#142B46]">Related work</h2>
            <div className="mt-5 flex flex-col gap-3">
              {service.proof.map((p) => (
                <a
                  key={p.url + p.label}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-2 rounded-xl border border-[#DFE7F1] bg-white px-4 py-3 text-base text-[#142B46] transition-colors hover:border-[#E8B43A] hover:text-[#2563EB]"
                >
                  {p.label} <ArrowUpRight size={15} />
                </a>
              ))}
              <Link href="/projects" className="text-sm text-[#8A6100] hover:text-[#2563EB]">
                View all projects
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#DFE7F1] py-20 sm:py-24">
        <div className="container-px mx-auto grid max-w-content gap-12 lg:grid-cols-[1fr_1.6fr]">
          <FadeIn>
            <p className="border-l-4 border-gold pl-3 font-mono text-sm text-[#64748B]">FAQs</p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[#142B46] sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base text-[#64748B]">
              Straight answers about {service.label.toLowerCase()}. Still unsure? Ask me directly.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <FaqAccordion faqs={service.faqs} />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 sm:pb-24">
        <div className="container-px mx-auto max-w-content">
          <FadeIn>
            <div className="rounded-3xl border border-[#E8B43A]/60 bg-white px-6 py-14 text-center shadow-lg shadow-slate-200 sm:px-12">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-[#142B46] sm:text-5xl text-balance">
                Ready to get started with{" "}
                <span className="bg-gradient-to-r from-[#2563EB] to-[#8A6100] bg-clip-text text-transparent">
                  {service.label.toLowerCase()}?
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-[#64748B]">
                Tell me about your project and I will reply with a clear plan and quote.
              </p>
              <a
                href={site.bookCallLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#E8B43A] px-8 py-4 text-lg font-semibold text-[#142B46] transition hover:brightness-110"
              >
                <Phone size={18} /> Book a Call
              </a>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {others.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="rounded-full border border-[#DFE7F1] px-4 py-1.5 text-sm text-[#64748B] transition-colors hover:border-[#E8B43A] hover:text-[#2563EB]"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
