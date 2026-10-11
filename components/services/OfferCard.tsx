import { Check } from "lucide-react";
import type { Offer } from "@/lib/data/services";

const palettes = [
  { bg: "bg-emerald-400", text: "text-slate-900", sub: "text-slate-800" },
  { bg: "bg-purple-600", text: "text-white", sub: "text-purple-100" },
  { bg: "bg-indigo-600", text: "text-white", sub: "text-indigo-100" },
  { bg: "bg-amber-400", text: "text-slate-900", sub: "text-slate-800" },
  { bg: "bg-cyan-300", text: "text-slate-900", sub: "text-slate-800" },
  { bg: "bg-rose-500", text: "text-white", sub: "text-rose-100" },
];

export default function OfferCard({ offer, index }: { offer: Offer; index: number }) {
  const p = palettes[index % palettes.length];
  return (
    <article className={`flex h-full flex-col rounded-3xl p-7 ${p.bg} ${p.text}`}>
      <span className="font-mono text-sm opacity-70">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="mt-2 font-display text-2xl font-bold leading-tight">{offer.title}</h3>
      <p className={`mt-3 text-base leading-relaxed ${p.sub}`}>{offer.text}</p>
      <ul className="mt-5 space-y-2 text-sm font-medium">
        {offer.points.map((pt) => (
          <li key={pt} className="flex items-start gap-2">
            <Check size={16} className="mt-0.5 shrink-0" />
            {pt}
          </li>
        ))}
      </ul>
    </article>
  );
}
