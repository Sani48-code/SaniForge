import FadeIn from "@/components/motion/FadeIn";
import IndustryIcon from "@/components/visuals/IndustryIcon";
import { industryBadges, totalClientBusinesses } from "@/lib/data/industries";

export default function IndustryMarquee() {
  const row1Items = industryBadges.slice(0, 11);
  const row2Items = industryBadges.slice(11);

  const row1 = [...row1Items, ...row1Items];
  const row2 = [...row2Items, ...row2Items];

  return (
    <div className="relative py-4">
      {/* Light Elevated Stats Banner */}
      <FadeIn className="mb-12 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-5 rounded-3xl border border-slate-200 bg-white px-8 py-4 shadow-lg shadow-slate-200/60">
          <div className="font-display text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-600 bg-clip-text text-transparent">
            {totalClientBusinesses}+
          </div>
          <div className="text-left border-l border-slate-200 pl-5">
            <span className="block font-mono text-xs uppercase tracking-widest text-slate-900 font-bold">
              Verified Client Engagements
            </span>
            <span className="block text-xs text-slate-600 mt-0.5 font-medium">
              Client names kept confidential &middot; Case studies available on request
            </span>
          </div>
        </div>
      </FadeIn>

      {/* Marquee Track 1: Running Left-to-Right */}
      <div className="marquee-mask relative overflow-hidden py-2">
        <div className="flex w-max animate-marquee-right gap-4 hover:[animation-play-state:paused]">
          {row1.map((badge, i) => (
            <div
              key={`row1-${badge.label}-${i}`}
              className={`group relative flex shrink-0 items-center gap-4 rounded-2xl border-2 ${badge.theme.border} ${badge.theme.cardBg} ${badge.theme.hoverBorder} ${badge.theme.hoverShadow} px-5 py-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 cursor-default`}
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${badge.theme.iconBg} group-hover:scale-105 transition-transform`}
              >
                <IndustryIcon name={badge.icon} size={20} />
              </div>

              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <span className="whitespace-nowrap font-sans text-sm font-bold text-slate-950">
                    {badge.label}
                  </span>
                  <span className={`h-2.5 w-2.5 rounded-full ${badge.theme.dot} shrink-0`} />
                </div>
                {badge.tag && (
                  <span
                    className={`mt-1 inline-block whitespace-nowrap font-mono text-[11px] font-bold ${badge.theme.tagBg} px-2.5 py-0.5 rounded-md w-fit`}
                  >
                    {badge.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Track 2: Also Running Left-to-Right (staggered speed) */}
      <div className="marquee-mask relative overflow-hidden py-2 mt-4">
        <div className="flex w-max animate-marquee-right-slow gap-4 hover:[animation-play-state:paused]">
          {row2.map((badge, i) => (
            <div
              key={`row2-${badge.label}-${i}`}
              className={`group relative flex shrink-0 items-center gap-4 rounded-2xl border-2 ${badge.theme.border} ${badge.theme.cardBg} ${badge.theme.hoverBorder} ${badge.theme.hoverShadow} px-5 py-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 cursor-default`}
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${badge.theme.iconBg} group-hover:scale-105 transition-transform`}
              >
                <IndustryIcon name={badge.icon} size={20} />
              </div>

              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <span className="whitespace-nowrap font-sans text-sm font-bold text-slate-950">
                    {badge.label}
                  </span>
                  <span className={`h-2.5 w-2.5 rounded-full ${badge.theme.dot} shrink-0`} />
                </div>
                {badge.tag && (
                  <span
                    className={`mt-1 inline-block whitespace-nowrap font-mono text-[11px] font-bold ${badge.theme.tagBg} px-2.5 py-0.5 rounded-md w-fit`}
                  >
                    {badge.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
