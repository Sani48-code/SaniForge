import { Lightbulb, Info, AlertTriangle, Sparkles } from "lucide-react";

type CalloutType = "tip" | "info" | "warning" | "note";

const calloutStyles: Record<
  CalloutType,
  { bg: string; border: string; text: string; icon: typeof Lightbulb; iconColor: string; label: string }
> = {
  tip: {
    bg: "bg-emerald-50/80",
    border: "border-emerald-200",
    text: "text-emerald-950",
    icon: Sparkles,
    iconColor: "text-emerald-600",
    label: "Pro Tip",
  },
  info: {
    bg: "bg-blue-50/80",
    border: "border-blue-200",
    text: "text-blue-950",
    icon: Info,
    iconColor: "text-blue-600",
    label: "Key Note",
  },
  warning: {
    bg: "bg-amber-50/80",
    border: "border-amber-200",
    text: "text-amber-950",
    icon: AlertTriangle,
    iconColor: "text-amber-600",
    label: "Caution",
  },
  note: {
    bg: "bg-slate-50",
    border: "border-slate-200",
    text: "text-slate-800",
    icon: Lightbulb,
    iconColor: "text-slate-600",
    label: "Observation",
  },
};

export default function Callout({
  type = "info",
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}) {
  const style = calloutStyles[type] || calloutStyles.info;
  const Icon = style.icon;

  return (
    <div className={`my-8 rounded-2xl border ${style.border} ${style.bg} p-5 sm:p-6 shadow-2xs`}>
      <div className="flex items-center gap-2.5 font-sans font-bold text-sm">
        <Icon size={18} className={style.iconColor} />
        <span className={style.text}>{title || style.label}</span>
      </div>
      <div className={`mt-2.5 text-base leading-relaxed ${style.text}`}>
        {children}
      </div>
    </div>
  );
}

