import { motion } from "framer-motion";
import { ArtFrame, Glow } from "./shared";

/** 03 — Taken apart and stacked back, better each time. */
export function ArtRebuild() {
  const blocks = [
    { y: 252, w: 176, fill: "var(--coral)" },
    { y: 208, w: 152, fill: "var(--yellow)" },
    { y: 164, w: 128, fill: "var(--periwinkle)" },
  ];
  return (
    <ArtFrame>
      <Glow cx={205} cy={175} r={116} />
      {blocks.map((b) => (
        <rect key={b.y} x={210 - b.w / 2} y={b.y} width={b.w} height={36} rx={12} fill={b.fill} />
      ))}
      {/* the piece being put back, again */}
      <motion.rect
        x={166}
        y={112}
        width={88}
        height={36}
        rx={12}
        fill="var(--cyan)"
        animate={{ y: [112, 124, 112] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* do it again */}
      <g fill="none" stroke="var(--ink)" strokeWidth={2.8} strokeLinecap="round" opacity={0.32}>
        <path d="M336 216 A 44 44 0 1 1 304 160" />
        <path d="M304 160 L300 180 M304 160 L322 166" />
      </g>
    </ArtFrame>
  );
}
