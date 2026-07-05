import type { Heading } from "@/lib/mdx";

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-28 hidden rounded-2xl border border-navy-border bg-navy-panel/40 p-6 lg:block">
      <p className="mb-4 font-mono text-sm uppercase tracking-wider text-gold-light">
        On this page
      </p>
      <ul className="space-y-3">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className="text-base leading-snug text-ink-muted transition-colors hover:text-gold-light"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
