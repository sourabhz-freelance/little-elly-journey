import { motion } from "framer-motion";
import { ArtFrame, DottedPath, Glow, Print } from "./shared";

/** 05 — Many journeys converge into one confident method. */
export function ArtMethod() {
  return (
    <ArtFrame>
      <Glow cx={215} cy={165} r={122} />
      <DottedPath d="M40 90 C 120 110 170 150 230 168" opacity={0.45} />
      <DottedPath d="M40 170 C 120 172 170 168 230 170" opacity={0.45} />
      <DottedPath d="M40 252 C 120 236 170 192 230 174" opacity={0.45} />
      <DottedPath d="M230 170 C 290 176 320 176 386 172" color="var(--coral)" width={4} opacity={0.85} dash="0.5 12" />

      <Print x={48} y={96} rot={-40} s={0.2} opacity={0.5} />
      <Print x={48} y={176} rot={0} s={0.2} opacity={0.5} />
      <Print x={48} y={258} rot={38} s={0.2} opacity={0.5} />

      <motion.g
        animate={{ scale: [1, 1.035, 1] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "324px 170px" }}
      >
        <circle cx={324} cy={170} r={54} fill="var(--cream)" stroke="var(--coral)" strokeWidth={2.5} opacity={0.9} />
        <text
          x={324}
          y={166}
          textAnchor="middle"
          fill="var(--coral)"
          fontFamily="Fredoka, sans-serif"
          fontSize={34}
          fontWeight={600}
        >
          172
        </text>
        <text
          x={324}
          y={190}
          textAnchor="middle"
          fill="var(--ink)"
          opacity={0.5}
          fontFamily="Poppins, sans-serif"
          fontSize={10}
          letterSpacing={2}
        >
          CENTRES
        </text>
      </motion.g>
    </ArtFrame>
  );
}
