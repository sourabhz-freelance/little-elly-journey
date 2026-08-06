import { ArtFrame, DottedPath, Glow, Print } from "./shared";

/** 02 — Forks, dead ends and prints scattered off the path. */
export function ArtWrong() {
  return (
    <ArtFrame>
      <Glow cx={210} cy={160} r={112} />
      <DottedPath d="M60 280 C 120 258 150 218 190 190" opacity={0.55} />
      {/* dead-end fork, doubling back */}
      <DottedPath d="M190 190 C 235 165 265 190 245 225 C 228 254 190 246 186 218" color="var(--coral)" opacity={0.32} />
      <DottedPath d="M190 190 C 215 148 255 132 300 128" color="var(--coral)" opacity={0.3} />
      <DottedPath d="M300 128 C 335 124 348 100 336 78" color="var(--coral)" opacity={0.2} />
      {/* the one that eventually worked */}
      <DottedPath d="M190 190 C 240 172 300 150 372 96" color="var(--pink)" opacity={0.7} />

      <Print x={60} y={282} rot={-24} s={0.28} opacity={0.85} />
      <Print x={248} y={228} rot={140} s={0.24} opacity={0.35} />
      <Print x={186} y={216} rot={-160} s={0.22} opacity={0.3} />
      <Print x={334} y={78} rot={30} s={0.24} opacity={0.3} />
      <Print x={300} y={128} rot={-8} s={0.26} opacity={0.5} />

      {/* crossed-out dead ends */}
      <g stroke="var(--ink)" strokeWidth={2.4} strokeLinecap="round" opacity={0.28}>
        <path d="M326 66 L346 90 M346 66 L326 90" />
        <path d="M176 206 L196 230 M196 206 L176 230" />
      </g>
    </ArtFrame>
  );
}
