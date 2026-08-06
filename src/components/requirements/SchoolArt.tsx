/** Brand-styled flat school illustration. 260x200 canvas. */
export default function SchoolArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 200" className={className} aria-hidden="true">
      {/* ground */}
      <ellipse cx="130" cy="176" rx="104" ry="12" fill="var(--lightpink)" opacity="0.7" />

      {/* trees */}
      <g>
        <rect x="35" y="146" width="5" height="20" rx="2.5" fill="var(--orange)" opacity="0.55" />
        <circle cx="37.5" cy="138" r="16" fill="var(--turquoise)" opacity="0.85" />
        <rect x="220" y="146" width="5" height="20" rx="2.5" fill="var(--orange)" opacity="0.55" />
        <circle cx="222.5" cy="138" r="16" fill="var(--turquoise)" opacity="0.85" />
      </g>

      {/* side wings */}
      <rect x="52" y="112" width="58" height="54" rx="6" fill="var(--coral)" />
      <rect x="150" y="112" width="58" height="54" rx="6" fill="var(--coral)" />
      <path d="M46 112 L81 92 L116 112 Z" fill="var(--ink)" opacity="0.85" />
      <path d="M144 112 L179 92 L214 112 Z" fill="var(--ink)" opacity="0.85" />

      {/* wing windows */}
      {[64, 84].map((x) =>
        [124, 144].map((y) => (
          <rect key={`l${x}${y}`} x={x} y={y} width="14" height="14" rx="3" fill="var(--yellow)" />
        )),
      )}
      {[162, 182].map((x) =>
        [124, 144].map((y) => (
          <rect key={`r${x}${y}`} x={x} y={y} width="14" height="14" rx="3" fill="var(--yellow)" />
        )),
      )}

      {/* central tower */}
      <rect x="104" y="86" width="52" height="80" rx="6" fill="var(--coral)" />
      <path d="M98 86 L130 60 L162 86 Z" fill="var(--ink)" />
      <circle cx="130" cy="76" r="7" fill="var(--cream)" />
      <circle cx="130" cy="76" r="5.5" fill="var(--yellow)" />
      <path d="M130 76 v-3 M130 76 h2.5" stroke="var(--ink)" strokeWidth="1.2" strokeLinecap="round" />

      {/* flag */}
      <path d="M130 60 v-16" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      <path d="M130 44 h16 l-5 5 5 5 h-16 z" fill="var(--pink)" />

      {/* door */}
      <path d="M118 166 v-28 a12 12 0 0 1 24 0 v28 z" fill="var(--ink)" opacity="0.9" />
      <circle cx="136" cy="152" r="2" fill="var(--yellow)" />
      <path d="M130 138 v28" stroke="var(--cream)" strokeWidth="1" opacity="0.4" />

      {/* steps */}
      <rect x="106" y="166" width="48" height="5" rx="2.5" fill="var(--ink)" opacity="0.25" />
      <rect x="98" y="171" width="64" height="5" rx="2.5" fill="var(--ink)" opacity="0.18" />
    </svg>
  );
}
