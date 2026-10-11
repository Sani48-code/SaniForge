import { Plus } from "lucide-react";

export default function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => (
        <details
          key={f.q}
          open={i === 0}
          className="group rounded-2xl border border-[#DFE7F1] bg-white px-6 py-5 open:border-[#E8B43A] open:bg-[#FFF6DD]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-[#142B46] [&::-webkit-details-marker]:hidden">
            {f.q}
            <Plus size={20} className="shrink-0 text-[#8A6100] transition-transform group-open:rotate-45" />
          </summary>
          <p className="mt-3 text-base leading-relaxed text-[#64748B]">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
