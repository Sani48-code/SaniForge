import { Plus } from "lucide-react";

export default function FaqLight({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => (
        <details
          key={f.q}
          open={i === 0}
          className="group rounded-2xl border border-sv-border bg-white px-6 py-5 transition open:border-sv-gold open:shadow-md"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-sv-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sv-blue [&::-webkit-details-marker]:hidden">
            {f.q}
            <Plus size={20} aria-hidden="true" className="shrink-0 text-sv-goldtext transition-transform group-open:rotate-45" />
          </summary>
          <p className="mt-3 text-base leading-relaxed text-sv-slate">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
