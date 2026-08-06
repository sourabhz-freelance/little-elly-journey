import { motion } from "framer-motion";
import { ArtFrame, DottedPath, Glow, OutlinePrint } from "./shared";

/** 06 — Everything learned, packed into a box, handed over. */
export function ArtGift() {
  return (
    <ArtFrame>
      <Glow cx={190} cy={165} r={126} />

      {/* the whole trail pouring out of the box toward the open seat */}
      <DottedPath d="M214 150 C 260 132 300 152 336 196" color="var(--coral)" opacity={0.6} />

      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* box body */}
        <rect x={106} y={176} width={172} height={112} rx={16} fill="var(--coral)" />
        <rect x={178} y={176} width={28} height={112} fill="var(--yellow)" opacity={0.95} />
        {/* lid, lifted and tilted */}
        <g transform="rotate(-9 192 160)">
          <rect x={94} y={140} width={196} height={38} rx={13} fill="var(--pink)" />
          <rect x={178} y={140} width={28} height={38} fill="var(--yellow)" />
        </g>
        {/* bow */}
        <g transform="rotate(-9 192 160)" fill="var(--yellow)">
          <ellipse cx={174} cy={132} rx={20} ry={13} />
          <ellipse cx={210} cy={132} rx={20} ry={13} />
          <circle cx={192} cy={133} r={8} fill="var(--coral)" />
        </g>
      </motion.g>

      {/* sparks of learning escaping the box */}
      {[
        { cx: 236, cy: 118, r: 5, f: "var(--periwinkle)", d: 0 },
        { cx: 262, cy: 96, r: 4, f: "var(--cyan)", d: 0.6 },
        { cx: 292, cy: 116, r: 6, f: "var(--yellow)", d: 1.2 },
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

      {/* the seat kept open — opacity-only pulse on an outer wrapper */}
      <motion.g
        animate={{ opacity: [0.32, 0.85, 0.32] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <OutlinePrint x={352} y={216} rot={12} s={0.5} />
      </motion.g>
    </ArtFrame>
  );
}
