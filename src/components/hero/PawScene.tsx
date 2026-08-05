import { motion } from "framer-motion";
import { PawShape, PawOutline } from "@/components/brand/paw";

/**
 * The right-hand welcoming scene.
 * Everything lives in ONE svg coordinate space (600x520) so nothing can drift.
 */
export function PawScene({ className }: { className?: string }) {
  const walkers = [
    { t: "translate(140 453) rotate(-28) scale(.26) translate(-50 -60)", delay: 0 },
    { t: "translate(180 414) rotate(-20) scale(.30) translate(-50 -60)", delay: 0.45 },
    { t: "translate(220 376) rotate(-14) scale(.34) translate(-50 -60)", delay: 0.9 },
  ];

  return (
    <svg viewBox="0 0 600 520" className={className} aria-hidden="true">
      {/* a) soft glow */}
      <motion.circle
        cx={330}
        cy={232}
        r={182}
        fill="var(--lightpink)"
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

      {/* c) focal welcoming paw — breathing lives on the OUTER wrapper only */}
      <motion.g
        style={{ transformOrigin: "330px 225px" }}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <g transform="translate(190 64) scale(2.8)" filter="url(#pawShadow)">
          <PawShape focal />
        </g>
      </motion.g>

      {/* d) walking prints marching up the trail */}
      {walkers.map((w, i) => (
        <motion.g
          key={i}
          animate={{ opacity: [0, 0.9, 0.9, 0] }}
          transition={{
            duration: 4.2,
            times: [0, 0.22, 0.68, 1],
            repeat: Infinity,
            delay: w.delay,
            ease: "easeInOut",
          }}
        >
          <g transform={w.t}>
            <PawShape color="var(--coral)" />
          </g>
        </motion.g>
      ))}

      {/* e) dashed "seat kept open" print — OPACITY ONLY on the outer wrapper */}
      <motion.g
        animate={{ opacity: [0.3, 0.85, 0.3] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <PawOutline
          transform="translate(248 354) scale(.42) translate(-50 -60)"
          fill="none"
          stroke="var(--coral)"
          strokeWidth={6}
          strokeDasharray="10 12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>

      <defs>
        <filter id="pawShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#E85253" floodOpacity="0.18" />
        </filter>
      </defs>
    </svg>
  );
}
