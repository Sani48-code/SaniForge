export default function ParticleWave({ className }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
      aria-hidden="true"
    >
      <svg
        className="absolute -top-1/3 left-1/2 h-[140%] w-[140%] -translate-x-1/2 opacity-[0.15]"
        viewBox="0 0 1200 800"
        fill="none"
      >
        <path
          d="M0 400 Q 150 300 300 400 T 600 400 T 900 400 T 1200 400"
          stroke="#D4AF37"
          strokeWidth="1"
        />
        <path
          d="M0 450 Q 150 550 300 450 T 600 450 T 900 450 T 1200 450"
          stroke="#4A7FE8"
          strokeWidth="1"
        />
        <path
          d="M0 350 Q 150 250 300 350 T 600 350 T 900 350 T 1200 350"
          stroke="#D4AF37"
          strokeWidth="0.5"
        />
      </svg>
      <div className="absolute inset-0 bg-blue-gold-glow" />
    </div>
  );
}
