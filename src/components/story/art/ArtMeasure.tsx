import { motion } from "framer-motion";
import { ArtFrame, DottedPath, Glow, Print } from "./shared";

/** 04 — Parents and classrooms feeding into what we measured. */
export function ArtMeasure() {
  const bars = [
    { x: 236, h: 54, fill: "var(--periwinkle)" },
    { x: 274, h: 88, fill: "var(--cyan)" },
    { x: 312, h: 124, fill: "var(--yellow)" },
    { x: 350, h: 162, fill: "var(--coral)" },
  ];
  return (
    <ArtFrame>
      <Glow cx={210} cy={170} r={118} />
      {/* listening marks feeding in */}
      <Print x={62} y={252} rot={-18} s={0.24} opacity={0.55} />
      <Print x={104} y={200} rot={-10} s={0.24} opacity={0.65} />
      <Print x={148} y={252} rot={12} s={0.24} opacity={0.55} />
      <DottedPath d="M74 244 C 130 214 168 214 216 232" opacity={0.6} />
      <DottedPath d="M116 194 C 158 190 186 206 216 226" color="var(--lightpink)" opacity={0.7} />

      <line x1={222} y1={272} x2={392} y2={272} stroke="var(--ink)" strokeWidth={2} opacity={0.18} />
      {bars.map((b, i) => (
        <motion.rect
          key={b.x}
          x={b.x}
          width={24}
          rx={9}
          fill={b.fill}
          animate={{ height: [b.h * 0.86, b.h, b.h * 0.86], y: [272 - b.h * 0.86, 272 - b.h, 272 - b.h * 0.86] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
        />
      ))}
    </ArtFrame>
  );
}
