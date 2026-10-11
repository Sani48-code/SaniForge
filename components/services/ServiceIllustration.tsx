import type { ServiceSlug } from "@/lib/data/services";

const ink = "#0A0E1A";
const gold = "#D4AF37";
const blue = "#4A7FE8";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-hidden="true" className="h-full w-full">
      <rect x="20" y="20" width="360" height="260" rx="18" fill="#fff" stroke="#E2E8F0" />
      <circle cx="42" cy="42" r="4" fill="#F87171" />
      <circle cx="56" cy="42" r="4" fill="#FBBF24" />
      <circle cx="70" cy="42" r="4" fill="#34D399" />
      <line x1="20" y1="58" x2="380" y2="58" stroke="#E2E8F0" />
      {children}
    </svg>
  );
}

function Lines({ x, y, widths }: { x: number; y: number; widths: number[] }) {
  return (
    <>
      {widths.map((w, i) => (
        <rect key={i} x={x} y={y + i * 16} width={w} height="8" rx="4" fill="#E2E8F0" />
      ))}
    </>
  );
}

export default function ServiceIllustration({ slug }: { slug: ServiceSlug }) {
  switch (slug) {
    case "copywriting":
      return (
        <Frame>
          <rect x="44" y="78" width="200" height="16" rx="6" fill={ink} />
          <rect x="44" y="100" width="150" height="16" rx="6" fill={ink} />
          <Lines x={44} y={134} widths={[250, 230, 180]} />
          <rect x="44" y="196" width="110" height="34" rx="17" fill={gold} />
          <text x="99" y="218" textAnchor="middle" fontSize="13" fontWeight="700" fill={ink}>Book a call</text>
          <rect x="270" y="78" width="90" height="150" rx="12" fill="#F1F5F9" />
          <text x="315" y="118" textAnchor="middle" fontSize="26" fontWeight="800" fill={blue}>Clear</text>
          <text x="315" y="136" textAnchor="middle" fontSize="10" fill="#64748B">one next step</text>
          <polyline points="282,210 298,190 314,198 330,170 348,176" fill="none" stroke={gold} strokeWidth="3" strokeLinecap="round" />
        </Frame>
      );
    case "blog-writing":
      return (
        <Frame>
          <rect x="44" y="78" width="190" height="14" rx="6" fill={ink} />
          <Lines x={44} y={106} widths={[200, 190, 205, 160]} />
          <rect x="44" y="180" width="200" height="60" rx="10" fill="#EEF4FF" />
          <Lines x={56} y={194} widths={[150, 120]} />
          <rect x="262" y="78" width="100" height="162" rx="12" fill="#F1F5F9" />
          <text x="312" y="102" textAnchor="middle" fontSize="10" fill="#64748B">Google rank</text>
          <text x="312" y="140" textAnchor="middle" fontSize="36" fontWeight="800" fill={ink}>#1</text>
          <rect x="274" y="160" width="76" height="8" rx="4" fill={gold} />
          <rect x="274" y="176" width="58" height="8" rx="4" fill={blue} />
          <rect x="274" y="192" width="40" height="8" rx="4" fill="#CBD5E1" />
        </Frame>
      );
    case "web-development":
      return (
        <Frame>
          <rect x="44" y="76" width="312" height="56" rx="10" fill={ink} />
          <rect x="60" y="92" width="120" height="10" rx="5" fill={gold} />
          <rect x="60" y="110" width="170" height="8" rx="4" fill="#475569" />
          <rect x="44" y="146" width="96" height="72" rx="10" fill="#EEF4FF" />
          <rect x="152" y="146" width="96" height="72" rx="10" fill="#FFF7DB" />
          <rect x="260" y="146" width="96" height="72" rx="10" fill="#ECFDF5" />
          <text x="60" y="244" fontSize="13" fontFamily="monospace" fill="#64748B">{"<Next /> + Node + DB"}</text>
          <rect x="300" y="228" width="56" height="22" rx="11" fill="#34D399" />
          <text x="328" y="243" textAnchor="middle" fontSize="11" fontWeight="700" fill={ink}>100</text>
        </Frame>
      );
    case "n8n-automation":
      return (
        <Frame>
          <line x1="110" y1="140" x2="190" y2="110" stroke="#CBD5E1" strokeWidth="3" />
          <line x1="110" y1="140" x2="190" y2="190" stroke="#CBD5E1" strokeWidth="3" />
          <line x1="230" y1="110" x2="300" y2="140" stroke="#CBD5E1" strokeWidth="3" />
          <line x1="230" y1="190" x2="300" y2="140" stroke="#CBD5E1" strokeWidth="3" />
          <rect x="52" y="116" width="64" height="48" rx="12" fill={ink} />
          <text x="84" y="145" textAnchor="middle" fontSize="12" fontWeight="700" fill={gold}>Trigger</text>
          <rect x="188" y="88" width="64" height="44" rx="12" fill="#EEF4FF" stroke={blue} />
          <text x="220" y="115" textAnchor="middle" fontSize="11" fontWeight="700" fill={blue}>AI</text>
          <rect x="188" y="168" width="64" height="44" rx="12" fill="#FFF7DB" stroke={gold} />
          <text x="220" y="195" textAnchor="middle" fontSize="11" fontWeight="700" fill="#92710A">CRM</text>
          <rect x="296" y="116" width="64" height="48" rx="12" fill="#34D399" />
          <text x="328" y="145" textAnchor="middle" fontSize="12" fontWeight="700" fill={ink}>Done</text>
          <text x="200" y="250" textAnchor="middle" fontSize="12" fill="#64748B">Runs 24/7, alerts you on errors</text>
        </Frame>
      );
    case "lead-generation-ghl":
      return (
        <Frame>
          <polygon points="60,84 340,84 300,130 100,130" fill="#EEF4FF" />
          <polygon points="100,138 300,138 270,180 130,180" fill="#FFF7DB" />
          <polygon points="130,188 270,188 245,226 155,226" fill={gold} />
          <text x="200" y="112" textAnchor="middle" fontSize="12" fontWeight="700" fill={blue}>Leads</text>
          <text x="200" y="164" textAnchor="middle" fontSize="12" fontWeight="700" fill="#92710A">Follow ups</text>
          <text x="200" y="212" textAnchor="middle" fontSize="12" fontWeight="700" fill={ink}>Booked</text>
          <rect x="300" y="196" width="64" height="40" rx="10" fill={ink} />
          <text x="332" y="214" textAnchor="middle" fontSize="9" fill="#94A3B8">SMS in</text>
          <text x="332" y="228" textAnchor="middle" fontSize="12" fontWeight="800" fill={gold}>Instant</text>
        </Frame>
      );
    case "saas-development":
      return (
        <Frame>
          <rect x="34" y="68" width="70" height="202" fill="#F1F5F9" />
          <rect x="46" y="84" width="46" height="8" rx="4" fill={ink} />
          <Lines x={46} y={108} widths={[40, 34, 44, 30]} />
          <rect x="118" y="78" width="70" height="52" rx="10" fill="#EEF4FF" />
          <rect x="196" y="78" width="70" height="52" rx="10" fill="#FFF7DB" />
          <rect x="274" y="78" width="90" height="52" rx="10" fill="#ECFDF5" />
          <rect x="118" y="142" width="246" height="100" rx="10" fill="#fff" stroke="#E2E8F0" />
          <rect x="136" y="204" width="22" height="28" rx="4" fill={blue} />
          <rect x="170" y="188" width="22" height="44" rx="4" fill={gold} />
          <rect x="204" y="170" width="22" height="62" rx="4" fill={blue} />
          <rect x="238" y="158" width="22" height="74" rx="4" fill={gold} />
          <rect x="272" y="176" width="22" height="56" rx="4" fill={blue} />
          <rect x="306" y="150" width="22" height="82" rx="4" fill={gold} />
        </Frame>
      );
  }
}
