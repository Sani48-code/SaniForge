import { readFile } from "fs/promises";
import path from "path";
import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { SITE_NAME } from "@/lib/site";

export const alt = `${SITE_NAME}: web development, SEO content and n8n automation company`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
// Rendered on request (and cached by the CDN) rather than prerendered: next/og in Next 14 cannot
// load its bundled font while prerendering on Windows, which would break local `next build`.
export const dynamic = "force-dynamic";

export default async function Image() {
  const portrait = await readFile(path.join(process.cwd(), "assets/og-portrait.jpg"));
  return renderOgCard({
    eyebrow: SITE_NAME,
    title: "Web Development,\nSEO Content &\nn8n Automation",
    subtitle: "Fast websites, SEO content and lead automation for US law firms and local businesses.",
    portrait: `data:image/jpeg;base64,${portrait.toString("base64")}`,
  });
}
