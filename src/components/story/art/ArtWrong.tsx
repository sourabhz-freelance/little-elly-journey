import { ArtFrame, Glow } from "./shared";

/** 02 — Attempts that went nowhere, and the one line that kept going. */
export function ArtWrong() {
  return (
    <ArtFrame>
      <Glow cx={210} cy={165} r={114} />

      {/* attempts that ended */}
      <g fill="none" strokeWidth={3} strokeLinecap="round" opacity={0.35}>
        <path d="M70 250 C 120 216 160 236 196 200" stroke="var(--ink)" />
        <path d="M70 250 C 118 250 158 272 200 260" stroke="var(--ink)" />
        <path d="M70 250 C 130 190 150 148 186 128" stroke="var(--ink)" />
      </g>
      {/* dead ends */}
      <g stroke="var(--ink)" strokeWidth={3} strokeLinecap="round" opacity={0.3}>
        <path d="M188 192 L206 210 M206 192 L188 210" />
        <path d="M194 252 L212 270 M212 252 L194 270" />
        <path d="M178 120 L196 138 M196 120 L178 138" />
      </g>

      {/* the one that kept going */}
      <path
        d="M70 250 C 150 236 250 214 356 158"
        fill="none"
        stroke="var(--coral)"
        strokeWidth={4}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx={70} cy={250} r={7} fill="var(--coral)" />
      <circle cx={356} cy={158} r={9} fill="var(--yellow)" />
    </ArtFrame>
  );
}
