import { motion } from "framer-motion";
import { ArtFrame, Glow } from "./shared";

/** 03 — Curriculum blocks torn apart and stacked back, better. */
export function ArtRebuild() {
  const blocks = [
    { y: 250, w: 168, fill: "var(--coral)" },
    { y: 208, w: 148, fill: "var(--yellow)" },
    { y: 166, w: 128, fill: "var(--periwinkle)" },
    { y: 124, w: 108, fill: "var(--cyan)" },
  ];
  return (
    <ArtFrame>
      <Glow cx={200} cy={175} r={116} />
      {blocks.map((b, i) => (
        <motion.rect
          key={b.y}
          x={210 - b.w / 2}
          y={b.y}
          width={b.w}
          height={34}
          rx={12}
          fill={b.fill}
          animate={{ x: [210 - b.w / 2, 210 - b.w / 2 + (i % 2 ? 6 : -6), 210 - b.w / 2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        />
      ))}
      {/* the piece being re-placed */}
      <motion.rect
        x={172}
        y={78}
        width={76}
        height={30}
        rx={11}
        fill="var(--pink)"
        animate={{ y: [78, 86, 78], rotate: [-6, 2, -6] }}
        style={{ transformOrigin: "210px 93px" }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* rebuild loop arrow */}
      <g fill="none" stroke="var(--ink)" strokeWidth={2.6} strokeLinecap="round" opacity={0.35}>
        <path d="M330 210 A 46 46 0 1 1 296 152" />
        <path d="M296 152 L 292 172 M296 152 L 314 158" />
      </g>
    </ArtFrame>
  );
}
