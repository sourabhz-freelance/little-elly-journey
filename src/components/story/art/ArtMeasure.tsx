import { motion } from "framer-motion";
import { ArtFrame, Glow } from "./shared";

/** 04 — What we heard, turned into something we could measure. */
export function ArtMeasure() {
  const bars = [
    { x: 190, h: 62, fill: "var(--periwinkle)" },
    { x: 232, h: 96, fill: "var(--cyan)" },
    { x: 274, h: 132, fill: "var(--yellow)" },
    { x: 316, h: 170, fill: "var(--coral)" },
  ];
  return (
    <ArtFrame>
      <Glow cx={210} cy={170} r={118} />

      {/* voices heard */}
      <g fill="var(--lightpink)">
        <path d="M62 122 h72 a14 14 0 0 1 14 14 v34 a14 14 0 0 1 -14 14 h-46 l-18 16 v-16 h-8 a14 14 0 0 1 -14 -14 v-34 a14 14 0 0 1 14 -14 z" />
      </g>
      <g fill="var(--pink)" opacity={0.75}>
        <path d="M78 200 h56 a12 12 0 0 1 12 12 v26 a12 12 0 0 1 -12 12 h-34 l-15 13 v-13 h-7 a12 12 0 0 1 -12 -12 v-26 a12 12 0 0 1 12 -12 z" />
      </g>

      {/* measured */}
      <line x1={178} y1={276} x2={356} y2={276} stroke="var(--ink)" strokeWidth={2} opacity={0.18} />
      {bars.map((b, i) => (
        <motion.rect
          key={b.x}
          x={b.x}
          width={26}
          rx={10}
          fill={b.fill}
          animate={{
            height: [b.h * 0.86, b.h, b.h * 0.86],
            y: [276 - b.h * 0.86, 276 - b.h, 276 - b.h * 0.86],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
        />
      ))}
    </ArtFrame>
  );
}
