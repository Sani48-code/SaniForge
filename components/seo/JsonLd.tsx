import { safeJsonLd } from "@/lib/json-ld";

/** Renders one or more schema.org objects as a single JSON-LD script tag. */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }} />;
}
