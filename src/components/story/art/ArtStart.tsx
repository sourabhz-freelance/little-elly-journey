import { motion } from "framer-motion";
import { ArtFrame, Glow } from "./shared";

/** 01 — One small beginning in a lot of empty space. */
export function ArtStart() {
  return (
    <ArtFrame>
      <Glow cx={210} cy={170} r={120} />
      {/* ground */}
      <line x1={70} y1={252} x2={350} y2={252} stroke="var(--ink)" strokeWidth={2} opacity={0.15} />
      {/* the first small thing */}
      <motion.g
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx={140} cy={228} r={22} fill="var(--coral)" />
      </motion.g>
      {/* the long empty ahead */}
      <path
        d="M170 236 C 240 226 290 200 340 150"
        fill="none"
        stroke="var(--ink)"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeDasharray="6 12"
        opacity={0.2}
        vectorEffect="non-scaling-stroke"
      />
      <motion.circle
        cx={348}
        cy={140}
        r={6}
        fill="var(--yellow)"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </ArtFrame>
  );
}
