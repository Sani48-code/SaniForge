import type { Metadata } from "next";
import KeywordLandingPage from "@/components/keyword-page/KeywordLandingPage";
import { keywordPages } from "@/lib/data/keyword-pages";
import { buildMetadata } from "@/lib/seo";

const page = keywordPages["growth-engineer"];

export const metadata: Metadata = buildMetadata({
  title: page.seo.title,
  description: page.seo.description,
  path: "/growth-engineer",
  type: "profile",
  // ./opengraph-image.tsx provides the share image.
  image: null,
});

export default function Page() {
  return <KeywordLandingPage page={page} />;
}
