export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** Colorful light category labels. Unknown categories fall back to the neutral style. */
const styles: Record<string, string> = {
  "Web Development": "bg-sv-soft text-sv-blue",
  Automation: "bg-sv-mint text-emerald-700",
  "SEO & Content": "bg-jn-pale text-sv-goldtext",
  "SaaS & Systems": "bg-sv-lavender text-violet-700",
  "Engineering Lessons": "bg-rose-50 text-rose-700",
};

export function categoryStyle(category: string): string {
  return styles[category] ?? "bg-slate-100 text-slate-700";
}
