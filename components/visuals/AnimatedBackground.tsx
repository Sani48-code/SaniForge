export default function AnimatedBackground({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
      aria-hidden="true"
    >
      <div className="absolute left-[10%] top-[-10%] h-72 w-72 animate-drift-slow rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute right-[8%] top-[20%] h-96 w-96 animate-drift-slower rounded-full bg-blue-accent/10 blur-3xl" />
      <div className="absolute bottom-[-15%] left-[35%] h-80 w-80 animate-drift-slow rounded-full bg-gold/5 blur-3xl" />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <g className="animate-line-drift">
          <line x1="0" y1="120" x2="1200" y2="220" stroke="#D4AF37" strokeWidth="0.75" />
          <line x1="0" y1="420" x2="1200" y2="340" stroke="#4A7FE8" strokeWidth="0.75" />
          <line x1="0" y1="620" x2="1200" y2="700" stroke="#D4AF37" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}
