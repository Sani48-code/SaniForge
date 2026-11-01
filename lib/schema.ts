/**
 * Reusable schema.org builders. Entities are linked by @id so Google sees one Person and
 * one business across every page instead of many disconnected copies.
 *
 * Rules: only facts already published on the site. No Review or AggregateRating markup.
 */
import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_ROLE, SOCIAL_LINKS, absoluteUrl } from "@/lib/site";
import { services } from "@/lib/data/services";

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const BUSINESS_ID = `${SITE_URL}/#business`;

type Json = Record<string, unknown>;

const CONTEXT = "https://schema.org";
const US = { "@type": "Country", name: "United States" };

export function personSchema(): Json {
  return {
    "@context": CONTEXT,
    "@type": "Person",
    "@id": PERSON_ID,
    name: AUTHOR_NAME,
    alternateName: ["Sani", "Abdul Kaiyum"],
    jobTitle: AUTHOR_ROLE,
    description:
      "n8n developer, full-stack developer and growth engineer building fast websites, SEO content and lead automation for US law firms and local businesses.",
    url: SITE_URL,
    image: absoluteUrl("/images/portrait-suit-1.png"),
    email: "mailto:contact.sani@proton.me",
    sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.github, SOCIAL_LINKS.facebook],
    worksFor: { "@type": "Organization", name: "GrowMinion", url: "https://growminion.com/" },
    knowsAbout: [
      "n8n",
      "Workflow automation",
      "Full-stack development",
      "Technical SEO",
      "Lead generation",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "GoHighLevel",
      "SEO copywriting",
    ],
  };
}

export function websiteSchema(): Json {
  return {
    "@context": CONTEXT,
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en",
    description:
      "Portfolio and blog of Abdul Kaiyum Sani: n8n developer, full-stack developer and growth engineer.",
    publisher: { "@id": PERSON_ID },
    author: { "@id": PERSON_ID },
  };
}

export function professionalServiceSchema(): Json {
  return {
    "@context": CONTEXT,
    "@type": "ProfessionalService",
    "@id": BUSINESS_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Full-stack web development, n8n automation, GoHighLevel lead generation, SaaS development, copywriting and SEO content for US businesses.",
    logo: absoluteUrl("/images/saniforge-mark.png"),
    image: absoluteUrl("/opengraph-image"),
    email: "contact.sani@proton.me",
    founder: { "@id": PERSON_ID },
    employee: { "@id": PERSON_ID },
    areaServed: US,
    serviceType: services.map((s) => s.label),
    knowsLanguage: "en",
  };
}

export type Crumb = { name: string; path: string };

/** Home is prepended automatically. */
export function breadcrumbSchema(crumbs: Crumb[]): Json {
  const all = [{ name: "Home", path: "/" }, ...crumbs];
  return {
    "@context": CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

type ArticleInput = {
  type: "BlogPosting" | "Article";
  headline: string;
  description: string;
  path: string;
  images: string[];
  datePublished?: string;
  dateModified?: string;
  section?: string;
  keywords?: string[];
};

export function articleSchema({ type, headline, description, path, images, datePublished, dateModified, section, keywords }: ArticleInput): Json {
  const url = absoluteUrl(path);
  return {
    "@context": CONTEXT,
    "@type": type,
    headline: headline.replace(/[“”"]/g, "").slice(0, 110),
    description,
    image: images.map(absoluteUrl),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ?? datePublished ? { dateModified: dateModified ?? datePublished } : {}),
    author: { "@type": "Person", "@id": PERSON_ID, name: AUTHOR_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      "@id": BUSINESS_ID,
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: absoluteUrl("/images/saniforge-mark.png") },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    inLanguage: "en",
    ...(section ? { articleSection: section } : {}),
    ...(keywords && keywords.length ? { keywords: keywords.join(", ") } : {}),
  };
}

type ServiceInput = {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  offers?: { name: string; description: string }[];
};

export function serviceSchema({ name, description, path, serviceType, offers }: ServiceInput): Json {
  return {
    "@context": CONTEXT,
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    serviceType: serviceType ?? name,
    provider: { "@type": "ProfessionalService", "@id": BUSINESS_ID, name: SITE_NAME, url: SITE_URL },
    areaServed: US,
    ...(offers && offers.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${name} services`,
            itemListElement: offers.map((o) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: o.name, description: o.description },
            })),
          },
        }
      : {}),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]): Json {
  return {
    "@context": CONTEXT,
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}
