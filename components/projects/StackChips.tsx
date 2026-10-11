import { Database, Webhook, MapPin, Sparkles, Cloud, Radio, FolderOpen } from "lucide-react";

const brand: Record<string, string> = {
  HTML: "/icons/html5.svg",
  CSS: "/icons/css3.svg",
  "Express.js": "/icons/express.svg",
  JWT: "/icons/jsonwebtokens.svg",
  Git: "/icons/git.svg",
  GitHub: "/icons/github.svg",
  "Tailwind CSS": "/icons/tailwindcss.svg",
  JavaScript: "/icons/javascript.svg",
  TypeScript: "/icons/typescript.svg",
  React: "/icons/react.svg",
  "Node.js": "/icons/nodejs.svg",
};

const generic = {
  SQL: Database,
  "REST API": Webhook,
  "Cloud hosting": Cloud,
  "Real-time": Radio,
  "File storage": FolderOpen,
  Maps: MapPin,
  AI: Sparkles,
} as const;

const frontend = ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React"];
const tools = ["Git", "GitHub", "Cloud hosting"];

function Chip({ name }: { name: string }) {
  const src = brand[name];
  const Icon = generic[name as keyof typeof generic];
  return (
    <li className="inline-flex items-center gap-2 rounded-lg border border-pf-border bg-white px-3 py-1.5 text-xs font-semibold text-pf-navy">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" width={16} height={16} />
      ) : Icon ? (
        <Icon size={16} strokeWidth={1.8} className="text-pf-gold" aria-hidden="true" />
      ) : null}
      {name}
    </li>
  );
}

export default function StackChips({ items }: { items: string[] }) {
  const groups = [
    { label: "Frontend", items: items.filter((t) => frontend.includes(t)) },
    { label: "Backend and data", items: items.filter((t) => !frontend.includes(t) && !tools.includes(t)) },
    { label: "Tools and deployment", items: items.filter((t) => tools.includes(t)) },
  ].filter((g) => g.items.length);

  return (
    <div className="space-y-3">
      {groups.map((g) => (
        <div key={g.label}>
          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-pf-gold">
            {g.label}
          </p>
          <ul className="flex flex-wrap gap-2" aria-label={`${g.label} technologies`}>
            {g.items.map((t) => (
              <Chip key={t} name={t} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
