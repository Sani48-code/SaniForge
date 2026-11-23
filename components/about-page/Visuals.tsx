/** Average Google position for target keywords, month 0-3: 45 -> 22 -> 9 -> 3 (lower is better). */
export function RankingChart() {
  // y = 20 + (position - 1) / 49 * 180, x spread across 4 months
  const pts = [
    { x: 50, y: 182, v: 45 },
    { x: 230, y: 97, v: 22 },
    { x: 410, y: 49, v: 9 },
    { x: 580, y: 27, v: 3 },
  ];
  const line = "M50 182 C 120 150, 170 105, 230 97 S 350 56, 410 49 S 530 30, 580 27";
  return (
    <svg viewBox="0 0 620 230" className="h-auto w-full" role="img" aria-label="Average position improved from 45 to 22, 9 and then 3 over three months">
      <defs>
        <linearGradient id="rank-line" x1="0" x2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="55%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
        <linearGradient id="rank-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[{ y: 20, l: "1" }, { y: 108, l: "25" }, { y: 200, l: "50" }].map((g) => (
        <g key={g.l}>
          <line x1="40" x2="600" y1={g.y} y2={g.y} stroke="rgba(255,255,255,0.08)" />
          <text x="0" y={g.y + 4} fill="rgba(255,255,255,0.45)" fontSize="12">{g.l}</text>
        </g>
      ))}
      <path d={`${line} L580 200 L50 200 Z`} fill="url(#rank-fill)" />
      <path d={line} fill="none" stroke="url(#rank-line)" strokeWidth="3" strokeLinecap="round" />
      {pts.map((p, i) => (
        <g key={p.v}>
          <circle cx={p.x} cy={p.y} r={i === 3 ? 7 : 6} fill={i === 3 ? "#FBBF24" : "#0D1326"} stroke={i === 3 ? "#FBBF24" : "#A78BFA"} strokeWidth="2.5" />
          <text x={p.x + (i === 3 ? -22 : 8)} y={p.y - 10} fill="#fff" fontSize="13" fontWeight="700">{p.v}</text>
          <text x={p.x} y="222" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="12">Month {i}</text>
        </g>
      ))}
    </svg>
  );
}
