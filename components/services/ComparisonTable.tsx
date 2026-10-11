import { Check, X } from "lucide-react";
import type { Service } from "@/lib/data/services";

function Mark({ yes }: { yes: boolean }) {
  return yes ? (
    <Check size={18} className="mx-auto text-[#8A6100]" aria-label="Yes" />
  ) : (
    <X size={18} className="mx-auto text-[#64748B]/60" aria-label="No" />
  );
}

export default function ComparisonTable({ compare }: { compare: Service["compare"] }) {
  const rows = [
    { name: "SaniForge", note: "Specialist who does it end to end", values: compare.me, highlight: true },
    { name: "In-house hire", note: "Higher cost, slower to start", values: compare.inHouse },
    { name: "Cheap freelancers", note: "Low price, inconsistent quality", values: compare.cheap },
    { name: "AI tools alone", note: "Fast, but generic and unreviewed", values: compare.ai },
  ];

  return (
    <div className="overflow-x-auto rounded-2xl">
      <table className="w-full min-w-[760px] border-separate border-spacing-y-2 text-left">
        <thead>
          <tr className="text-sm text-[#64748B]">
            <th scope="col" className="px-5 py-3 font-medium">Option</th>
            {compare.criteria.map((c) => (
              <th key={c} scope="col" className="px-3 py-3 text-center font-medium">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr
              key={r.name}
              className={
                r.highlight
                  ? "bg-[#E8B43A] text-[#142B46]"
                  : "bg-white text-[#142B46]"
              }
            >
              <th scope="row" className="rounded-l-xl px-5 py-4 font-normal">
                <span className="block font-display text-base font-semibold">{r.name}</span>
                <span className={r.highlight ? "text-xs text-[#142B46]/70" : "text-xs text-[#64748B]"}>
                  {r.note}
                </span>
              </th>
              {r.values.map((v, i) => (
                <td
                  key={i}
                  className={`px-3 py-4 text-center ${i === r.values.length - 1 ? "rounded-r-xl" : ""}`}
                >
                  {r.highlight ? (
                    v ? <Check size={18} className="mx-auto text-[#142B46]" aria-label="Yes" /> : <X size={18} className="mx-auto" aria-label="No" />
                  ) : (
                    <Mark yes={v} />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
