import { Fragment, type ReactNode } from "react";
import { site } from "@/lib/data/site";

const GM_PATTERN = /(Grow[Mm]inion)/;

/** Inline GrowMinion link: bold, theme-inheriting colour, brand-yellow underline (see .gm-link in globals.css). */
export function GrowMinionLink({ children = "GrowMinion" }: { children?: ReactNode }) {
  return (
    <a href={site.growminionUrl} target="_blank" rel="noopener noreferrer" className="gm-link">
      {children}
    </a>
  );
}

/**
 * Wraps every "GrowMinion" / "Growminion" in a string with a link to growminion.com.
 * Non-string nodes are returned untouched, so it is safe to call on any ReactNode.
 * Do not use inside an element that is already a link.
 */
export function linkifyGrowMinion(text: ReactNode): ReactNode {
  if (typeof text !== "string") return text;
  const parts = text.split(GM_PATTERN);
  if (parts.length === 1) return text;

  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <GrowMinionLink key={i}>{part}</GrowMinionLink>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}
