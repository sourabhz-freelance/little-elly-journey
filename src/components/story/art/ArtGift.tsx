import { motion } from "framer-motion";
import { ArtFrame, Glow } from "./shared";

/** 06 — Everything learned, packed and handed over. */
export function ArtGift() {
  return (
    <ArtFrame>
      <Glow cx={210} cy={170} r={124} />

      <motion.g
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x={124} y={176} width={172} height={112} rx={16} fill="var(--coral)" />
        <rect x={196} y={176} width={28} height={112} fill="var(--yellow)" />
        <rect x={112} y={140} width={196} height={38} rx={13} fill="var(--pink)" />
        <rect x={196} y={140} width={28} height={38} fill="var(--yellow)" />
        <g fill="var(--yellow)">
          <ellipse cx={192} cy={130} rx={20} ry={13} />
          <ellipse cx={228} cy={130} rx={20} ry={13} />
          <circle cx={210} cy={131} r={8} fill="var(--coral)" />
        </g>
      </motion.g>

      {[
        { cx: 108, cy: 108, r: 5, f: "var(--periwinkle)", d: 0 },
        { cx: 306, cy: 96, r: 6, f: "var(--cyan)", d: 0.6 },
        { cx: 334, cy: 148, r: 4, f: "var(--yellow)", d: 1.2 },
      ].map((s) => (
        <motion.circle
          key={s.cx}
          cx={s.cx}
          cy={s.cy}
          r={s.r}
          fill={s.f}
          animate={{ opacity: [0.2, 0.9, 0.2], y: [4, -6, 4] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: s.d }}
        />
      ))}
    </ArtFrame>
  );
}
