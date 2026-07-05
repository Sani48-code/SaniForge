import { Fragment, type ReactNode } from "react";
import { site } from "@/lib/data/site";

export function linkifyGrowMinion(text: string): ReactNode {
  const parts = text.split("GrowMinion");
  if (parts.length === 1) return text;

  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && (
        <a
          href={site.growminionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold-light underline decoration-gold/40 underline-offset-2 hover:decoration-gold"
        >
          GrowMinion
        </a>
      )}
    </Fragment>
  ));
}
