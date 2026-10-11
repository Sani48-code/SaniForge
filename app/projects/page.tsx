import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import ProjectsHero from "@/components/projects/ProjectsHero";
import CategoryCards from "@/components/projects/CategoryCards";
import FeaturedSaas from "@/components/projects/FeaturedSaas";
import ConceptProjects from "@/components/projects/ConceptProjects";
import WritingSamples from "@/components/projects/WritingSamples";
import ProcessTimeline from "@/components/projects/ProcessTimeline";
import IndustriesGrid from "@/components/projects/IndustriesGrid";
import WhyWorkWithMe from "@/components/projects/WhyWorkWithMe";
import ProjectsCta from "@/components/projects/ProjectsCta";
import { conceptProjects, featuredProjects, writingSamples } from "@/lib/data/projects-page";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Projects and Case Studies: SaaS, Web Apps and Content Writing",
  description:
    "Selected work by Abdul Kalyum Sani: SaaS products built with Growminion, web application design concepts and content writing samples for med spa, real estate and insurance.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects and case studies",
    url: `${site.url}/projects`,
    hasPart: [
      ...featuredProjects.filter((p) => p.url).map((p) => ({ name: p.title, url: p.url })),
      ...conceptProjects.map((p) => ({ name: p.title, url: p.url })),
      ...writingSamples.map((p) => ({ name: p.title, url: p.url })),
    ].map((p) => ({ "@type": "CreativeWork", ...p })),
  };

  return (
    <div data-light-page className="bg-white font-sans text-pf-slate">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <ProjectsHero />
      <CategoryCards />
      <FeaturedSaas />
      <ConceptProjects />
      <WritingSamples />
      <ProcessTimeline />
      <IndustriesGrid />
      <WhyWorkWithMe />
      <ProjectsCta />
    </div>
  );
}
