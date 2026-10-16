import { getPostBySlug } from "@/lib/mdx";
import { renderOgCard, renderOgFromFile, publicImageDataUrl, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Blog post by Abdul Kaiyum Sani";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  // A post with a designed share image (frontmatter ogImage, PNG or JPEG in /public) uses it as is.
  const designed = post?.ogImage ? await publicImageDataUrl(post.ogImage) : null;
  if (designed) return renderOgFromFile(designed);
  return renderOgCard({
    eyebrow: post ? `Blog · ${post.category}` : "Blog",
    title: post?.title ?? "SaniForge Journal",
    subtitle: post?.excerpt,
  });
}
