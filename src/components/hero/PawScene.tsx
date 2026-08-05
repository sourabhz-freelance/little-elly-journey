import { motion } from "framer-motion";
import { PawShapes, PawOutlineShapes } from "@/components/brand/paw";

const ease = [0.22, 1, 0.36, 1] as const;

const walkers = [
  { t: "translate(140 453) rotate(-28) scale(.26) translate(-50 -60)", delay: 0 },
  { t: "translate(180 414) rotate(-20) scale(.30) translate(-50 -60)", delay: 0.5 },
  { t: "translate(220 376) rotate(-14) scale(.34) translate(-50 -60)", delay: 1 },
];

/**
 * The right-hand scene — everything lives in ONE 600x520 coordinate space.
 * Rule: an element that carries a positioning `transform` attribute never
 * carries an animated transform; animations go on an outer wrapper <g>.
 */
export function PawScene({ className }: { className?: string | undefined }) {
  return (
    <svg viewBox="0 0 600 520" className={className} aria-hidden="true">
      {/* a) glow */}
      <motion.circle
        cx={330}
        cy={232}
        r={182}
        fill="color-mix(in oklab, var(--lightpink) 62%, transparent)"
        animate={{ opacity: [0.55, 0.9, 0.55] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* b) dotted lead-in trail */}
      <motion.path
        d="M110 480 C165 436 195 390 250 352"
        fill="none"
        stroke="var(--coral)"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray="0.5 13"
        vectorEffect="non-scaling-stroke"
        opacity={0.5}
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: -135 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />

      {/* c) focal welcoming paw — breathing on the OUTER wrapper only */}
      <motion.g
        style={{ transformOrigin: "330px 225px" }}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: [1, 1.03, 1] }}
        transition={{
          opacity: { duration: 0.9, delay: 0.3, ease },
          scale: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
        }}
      >
        <g
          transform="translate(190 64) scale(2.8)"
          style={{ filter: "drop-shadow(0 14px 26px rgba(232,82,83,0.18))" }}
        >
          <PawShapes focal />
        </g>
      </motion.g>

      {/* d) walking prints marching up the trail */}
      {walkers.map((w, i) => (
        <motion.g
          key={i}
          animate={{ opacity: [0, 0.85, 0.85, 0] }}
          transition={{
            duration: 4.5,
            times: [0, 0.18, 0.65, 1],
            repeat: Infinity,
            delay: w.delay,
            ease: "easeInOut",
          }}
        >
          <g transform={w.t}>
            <PawShapes color="var(--coral)" />
          </g>
        </motion.g>
      ))}

      {/* e) dashed "open seat" — OPACITY ONLY, on the outer wrapper */}
      <motion.g
        animate={{ opacity: [0.3, 0.85, 0.3] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <g
          transform="translate(248 354) scale(.42) translate(-50 -60)"
          fill="none"
          stroke="var(--coral)"
          strokeWidth={6}
          strokeDasharray="10 12"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <PawOutlineShapes />
        </g>
      </motion.g>
    </svg>
  );
}

export default PawScene;
