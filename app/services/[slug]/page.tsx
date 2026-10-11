import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLandingPage from "@/components/services-page/ServiceLandingPage";
import { getLanding } from "@/lib/data/service-landings";
import { getService, services } from "@/lib/data/services";
import { bw } from "@/lib/data/blog-writing-page";
import { site } from "@/lib/data/site";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Params | Promise<Params> }): Promise<Metadata> {
  const { slug } = await Promise.resolve(params);
  const landing = getLanding(slug);
  if (!landing) return {};
  const image = landing.images.hero;
  return {
    title: landing.seo.title,
    description: landing.seo.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      type: "website",
      title: landing.seo.title,
      description: landing.seo.description,
      url: `${site.url}/services/${slug}`,
      images: [{ url: image.src, width: image.w, height: image.h }],
    },
  };
}

export default async function ServicePage({ params }: { params: Params | Promise<Params> }) {
  const { slug } = await Promise.resolve(params);
  const service = getService(slug);
  const landing = getLanding(slug);
  if (!service || !landing) notFound();

  // Blog writing has its own, more detailed copy in blog-writing-page.ts.
  const offers =
    slug === "blog-writing"
      ? bw.services.items.map((i) => ({ title: i.title, text: i.text }))
      : service.offers;
  const faqs = slug === "blog-writing" ? bw.faqs : service.faqs;

  return <ServiceLandingPage landing={landing} label={service.label} offers={offers} faqs={faqs} icon={service.icon} />;
}
