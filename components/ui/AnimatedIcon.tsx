import type { LucideIcon } from "lucide-react";

const TONES = {
  amber: { tile: "from-amber-300 to-orange-500", ring: "border-amber-400/60", glow: "shadow-amber-500/40" },
  blue: { tile: "from-sky-400 to-blue-600", ring: "border-sky-400/60", glow: "shadow-blue-500/40" },
  violet: { tile: "from-violet-400 to-purple-600", ring: "border-violet-400/60", glow: "shadow-violet-500/40" },
  emerald: { tile: "from-emerald-300 to-emerald-600", ring: "border-emerald-400/60", glow: "shadow-emerald-500/40" },
  rose: { tile: "from-rose-400 to-pink-600", ring: "border-rose-400/60", glow: "shadow-rose-500/40" },
} as const;

export type IconTone = keyof typeof TONES;

/**
 * Gradient icon tile with a soft pulsing ring and a gentle float.
 * Motion is CSS only and switches off under prefers-reduced-motion (see globals.css).
 */
export default function AnimatedIcon({
  icon: Icon,
  tone = "amber",
  size = "md",
  delay = 0,
}: {
  icon: LucideIcon;
  tone?: IconTone;
  size?: "sm" | "md" | "lg";
  /** Seconds, staggers the float/ring so a row of icons doesn't move in lockstep. */
  delay?: number;
}) {
  const t = TONES[tone];
  const box = size === "lg" ? "h-16 w-16 rounded-2xl" : size === "sm" ? "h-10 w-10 rounded-xl" : "h-12 w-12 rounded-2xl";
  const iconSize = size === "lg" ? 28 : size === "sm" ? 18 : 22;
  const style = { animationDelay: `${delay}s` };
  return (
    <span aria-hidden className="relative inline-flex shrink-0">
      <span className={`anim-ring absolute inset-0 border-2 ${box} ${t.ring}`} style={style} />
      <span
        className={`anim-float relative flex items-center justify-center bg-gradient-to-br text-white shadow-lg ${box} ${t.tile} ${t.glow}`}
        style={style}
      >
        <Icon size={iconSize} strokeWidth={2.2} />
      </span>
    </span>
  );
}
