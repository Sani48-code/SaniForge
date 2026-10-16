import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { keywordPages } from "@/lib/data/keyword-pages";

const page = keywordPages["growth-engineer"];

export const alt = page.hero.h1;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
// See app/opengraph-image.tsx: rendered on request so local Windows builds work.
export const dynamic = "force-dynamic";

export default async function Image() {
  return renderOgCard({ eyebrow: page.hero.eyebrow, title: page.hero.h1, stats: page.hero.proof });
}
