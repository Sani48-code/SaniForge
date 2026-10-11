import { CheckCircle2, Bookmark } from "lucide-react";

export default function KeyTakeaways({
  title = "Key Takeaways",
  points,
}: {
  title?: string;
  points: string[];
}) {
  if (!points || points.length === 0) return null;

  return (
    <div className="my-10 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/70 to-indigo-50/40 p-6 sm:p-8 shadow-xs">
      <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-blue-700">
        <Bookmark size={15} className="text-blue-600" />
        {title}
      </div>
      <ul className="mt-4 space-y-3">
        {points.map((pt, i) => (
          <li key={i} className="flex items-start gap-3 text-base text-slate-800">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" />
            <span className="leading-relaxed">{pt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

