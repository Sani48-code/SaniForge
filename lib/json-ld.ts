/**
 * Serialize structured data for a <script type="application/ld+json"> tag.
 * Escaping "<" prevents a "</script>" sequence in the data from ending the tag early.
 */
export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
