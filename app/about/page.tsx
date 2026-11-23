import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, personSchema, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/schema";
import { SITE_URL, SITE_NAME, AUTHOR_NAME, SOCIAL_LINKS, absoluteUrl } from "@/lib/site";
import { experience, aboutBio } from "@/lib/data/experience";
import { services } from "@/lib/data/services";
import { site } from "@/lib/data/site";
import { linkifyGrowMinion } from "@/lib/linkify-growminion";

const PATH = "/about";

export const metadata: Metadata = buildMetadata({
  title: "About SaniForge: Web Development & Automation Company",
  description:
    "SaniForge is a web development, SEO content and n8n automation company founded in 2023. What we do, who leads the company and how to work with us.",
  path: PATH,
  type: "profile",
  absoluteTitle: true,
});

function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}${PATH}#aboutpage`,
    url: absoluteUrl(PATH),
    name: `About ${SITE_NAME}`,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    mainEntity: { "@id": ORGANIZATION_ID },
  };
}

const facts = [
  { label: "Company", value: "SaniForge (also written Sani Forge)" },
  { label: "Website", value: "saniforge.space" },
  { label: "Founded", value: "2023" },
  { label: "Founder", value: AUTHOR_NAME },
  { label: "Based in", value: "Rajshahi, Bangladesh (remote)" },
  { label: "Clients", value: "US law firms, local service businesses and SaaS teams" },
];

export default function AboutPage() {
  return (
    <div data-light-page className="bg-white font-sans text-sv-navy">
      <JsonLd data={[aboutPageSchema(), personSchema(), breadcrumbSchema([{ name: "About", path: PATH }])]} />

      <section className="bg-gradient-to-br from-white via-sv-soft to-jn-pale/70 py-14 sm:py-20">
        <div className="container-px mx-auto grid max-w-[1100px] items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sv-goldtext">About</p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-sv-navy sm:text-5xl">
              About SaniForge
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-jn-body">
              SaniForge is a web development, SEO content and n8n automation company. Since 2023 we have built fast websites, SEO content and
              n8n automations for businesses in the US, with one team owning the whole system instead of three separate vendors.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={site.bookCallLink}
                className="rounded-full bg-sv-navy px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Book a free call
              </Link>
              <Link
                href="/projects"
                className="rounded-full px-6 py-3 text-sm font-semibold text-sv-navy ring-1 ring-sv-border transition-colors hover:bg-white"
              >
                See the work
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <Image
              src="/images/portrait-about.png"
              alt={`${AUTHOR_NAME}, founder of SaniForge`}
              width={640}
              height={800}
              className="h-auto w-full rounded-3xl shadow-lg ring-1 ring-sv-border"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-px mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-5 text-base leading-relaxed text-jn-body sm:text-lg">
            <h2 className="font-display text-2xl font-bold text-sv-navy sm:text-3xl">Meet our founder</h2>
            {aboutBio.paragraphs.map((p) => (
              <p key={p}>{linkifyGrowMinion(p)}</p>
            ))}
            <p className="font-semibold text-sv-navy">{linkifyGrowMinion(aboutBio.closing)}</p>

            <h2 className="pt-6 font-display text-2xl font-bold text-sv-navy sm:text-3xl">What SaniForge does</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="block rounded-2xl bg-sv-soft px-5 py-4 font-semibold text-sv-navy ring-1 ring-sv-border transition-colors hover:bg-white"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p>
              Looking to hire for a specific role? See the pages for{" "}
              <Link href="/n8n-developer" className="font-semibold text-sv-blue underline underline-offset-2">hiring an n8n developer</Link>,{" "}
              <Link href="/full-stack-developer" className="font-semibold text-sv-blue underline underline-offset-2">a full-stack developer</Link>{" "}
              or{" "}
              <Link href="/growth-engineer" className="font-semibold text-sv-blue underline underline-offset-2">a growth engineer</Link>.
            </p>

            <h2 className="pt-6 font-display text-2xl font-bold text-sv-navy sm:text-3xl">Timeline</h2>
            <ol className="space-y-4">
              {experience.map((e) => (
                <li key={`${e.org}-${e.period}`} className="rounded-2xl p-5 ring-1 ring-sv-border">
                  <p className="text-sm font-semibold text-sv-goldtext">{e.period}</p>
                  <p className="mt-1 font-display text-lg font-bold text-sv-navy">
                    {e.role}, {e.org}
                  </p>
                  <p className="mt-2 text-base">{e.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <aside className="h-fit rounded-3xl bg-sv-soft p-6 ring-1 ring-sv-border">
            <h2 className="font-display text-xl font-bold text-sv-navy">SaniForge at a glance</h2>
            <dl className="mt-5 space-y-4">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-xs font-bold uppercase tracking-wider text-sv-slate">{f.label}</dt>
                  <dd className="mt-1 text-base font-medium text-sv-navy">{f.value}</dd>
                </div>
              ))}
            </dl>
            <h3 className="mt-8 text-xs font-bold uppercase tracking-wider text-sv-slate">Find SaniForge on</h3>
            <ul className="mt-3 space-y-2 text-base">
              <li><a href={SOCIAL_LINKS.linkedin} rel="me noopener" target="_blank" className="font-semibold text-sv-blue underline underline-offset-2">LinkedIn</a></li>
              <li><a href={SOCIAL_LINKS.github} rel="me noopener" target="_blank" className="font-semibold text-sv-blue underline underline-offset-2">GitHub</a></li>
              <li><a href={SOCIAL_LINKS.facebook} rel="me noopener" target="_blank" className="font-semibold text-sv-blue underline underline-offset-2">Facebook</a></li>
              <li><a href={site.mailtoLink} className="font-semibold text-sv-blue underline underline-offset-2">{site.email}</a></li>
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
}
