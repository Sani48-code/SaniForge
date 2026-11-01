import { getCaseStudyBySlug } from "@/lib/mdx";
import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Case study by Abdul Kaiyum Sani";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({ params }: { params: { slug: string } }) {
  const study = getCaseStudyBySlug(params.slug);
  return renderOgCard({
    eyebrow: study ? `Case Study · ${study.service}` : "Case Study",
    title: study?.title ?? "Case Study",
    subtitle: study?.tagline,
    // Only the figures already published in the case study frontmatter.
    stats: study?.metrics,
  });
}
