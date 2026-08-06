import { motion } from "framer-motion";
import { ArtFrame, DottedPath, Glow, Print } from "./shared";

/** 01 — One first step, and a trail that fades into nothing. */
export function ArtStart() {
  return (
    <ArtFrame>
      <Glow cx={230} cy={150} r={118} />
      <DottedPath d="M70 275 C 140 250 180 200 250 120" opacity={0.55} />
      <DottedPath d="M250 120 C 285 82 310 68 350 58" color="var(--pink)" opacity={0.18} />
      <Print x={70} y={278} rot={-22} s={0.34} />
      <motion.g
        animate={{ opacity: [0.25, 0.6, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx={352} cy={56} r={5} fill="var(--yellow)" />
      </motion.g>
    </ArtFrame>
  );
}
