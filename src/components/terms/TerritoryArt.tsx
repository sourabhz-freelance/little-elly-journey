/** Illustrations for the two territory scales. Shared 300x180 canvas. */

const dotColors = ["var(--coral)", "var(--turquoise)", "var(--orange)", "var(--cyan)"];

/** A city pocket: streets, blocks, a handful of centres close together. */
export function ZoneArt() {
  return (
    <svg viewBox="0 0 300 180" className="h-full w-full" aria-hidden="true">
      <rect x="8" y="8" width="284" height="164" rx="22" fill="color-mix(in oklab, var(--coral) 7%, transparent)" />
      {[52, 96, 140].map((y) => (
        <line key={y} x1="26" y1={y} x2="274" y2={y} stroke="var(--ink)" strokeOpacity="0.1" strokeWidth="2" />
      ))}
      {[80, 150, 220].map((x) => (
        <line key={x} x1={x} y1="26" x2={x} y2="156" stroke="var(--ink)" strokeOpacity="0.1" strokeWidth="2" />
      ))}
      {[
        [80, 52],
        [150, 96],
        [220, 52],
        [150, 140],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="16" fill={dotColors[i % 4]} opacity="0.14" />
          <circle cx={x} cy={y} r="6.5" fill={dotColors[i % 4]} />
        </g>
      ))}
      <path
        d="M80 52 C 110 60, 130 80, 150 96 S 200 70, 220 52"
        fill="none"
        stroke="var(--pink)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="0.1 12"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** A whole state: an outline with centres spread wide across it. */
export function StateArt() {
  return (
    <svg viewBox="0 0 300 180" className="h-full w-full" aria-hidden="true">
      <path
        d="M46 46 C 84 22, 128 34, 168 28 C 208 22, 246 40, 262 68 C 276 94, 262 124, 232 142 C 198 162, 150 158, 112 152 C 76 146, 44 132, 34 106 C 26 84, 30 58, 46 46 Z"
        fill="color-mix(in oklab, var(--turquoise) 9%, transparent)"
        stroke="var(--turquoise)"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {[
        [82, 74],
        [130, 56],
        [186, 62],
        [232, 92],
        [180, 116],
        [118, 122],
        [72, 106],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="13" fill={dotColors[i % 4]} opacity="0.13" />
          <circle cx={x} cy={y} r="5.5" fill={dotColors[i % 4]} />
        </g>
      ))}
    </svg>
  );
}
