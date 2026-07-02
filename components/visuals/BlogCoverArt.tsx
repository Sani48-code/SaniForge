import { cn } from "@/lib/utils";

const palettes: Record<string, [string, string]> = {
  SEO: ["#D4AF37", "#4A7FE8"],
  Automation: ["#4A7FE8", "#D4AF37"],
  "Web Development": ["#E8B84B", "#4A7FE8"],
};

export default function BlogCoverArt({
  theme,
  category,
  className,
}: {
  theme: string;
  category: string;
  className?: string;
}) {
  const [c1, c2] = palettes[category] ?? ["#D4AF37", "#4A7FE8"];
  let seed = 0;
  for (const ch of theme) seed += ch.charCodeAt(0);
  const rotate = seed % 40;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-navy-deep",
        className
      )}
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`grad-${theme}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={c1} stopOpacity="0.25" />
            <stop offset="100%" stopColor={c2} stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill={`url(#grad-${theme})`} />
        <g transform={`rotate(${rotate} 200 120)`} opacity="0.5">
          <line x1="-50" y1="60" x2="450" y2="60" stroke={c1} strokeWidth="0.5" />
          <line x1="-50" y1="120" x2="450" y2="120" stroke={c2} strokeWidth="0.5" />
          <line x1="-50" y1="180" x2="450" y2="180" stroke={c1} strokeWidth="0.5" />
          <circle cx={80 + (seed % 200)} cy={90} r="60" fill="none" stroke={c1} strokeWidth="0.75" opacity="0.6" />
          <circle cx={280 - (seed % 150)} cy={160} r="40" fill="none" stroke={c2} strokeWidth="0.75" opacity="0.6" />
        </g>
      </svg>
      <div className="absolute inset-0 bg-navy-radial opacity-60" />
    </div>
  );
}
