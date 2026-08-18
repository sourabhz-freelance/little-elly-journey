import { motion, useReducedMotion } from "framer-motion";

/**
 * Small animated illustrations for the four Dubai market forces.
 * Colour comes from the parent via `color` / currentColor.
 */

type Props = { className?: string };

const VB = "0 0 120 90";

function Svg({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg
      viewBox={VB}
      className={className}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/** The regulator is the moat — a gate that only the compliant passes. */
export function ArtGate({ className }: Props) {
  const reduce = useReducedMotion();
  return (
    <Svg className={className}>
      {/* moat water lines */}
      {[0, 1, 2].map((i) => (
        <motion.path
          key={i}
          d={`M8 ${70 + i * 7} q10 -5 20 0 t20 0 t20 0 t20 0 t20 0`}
          stroke="currentColor"
          strokeOpacity={0.2}
          strokeWidth={2}
          animate={reduce ? undefined : { x: [0, 8, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {/* gate posts */}
      <rect x="26" y="18" width="9" height="48" rx="4" stroke="currentColor" strokeWidth={3} />
      <rect x="85" y="18" width="9" height="48" rx="4" stroke="currentColor" strokeWidth={3} />
      {/* arch */}
      <path d="M30 20 q30 -14 60 0" stroke="currentColor" strokeWidth={3} />
      {/* bars that lift open */}
      <motion.g
        animate={reduce ? undefined : { y: [0, -16, -16, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.3, 0.8, 1], ease: "easeInOut" }}
      >
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M35 ${34 + i * 11} H85`}
            stroke="currentColor"
            strokeOpacity={0.45}
            strokeWidth={3}
          />
        ))}
      </motion.g>
      {/* the one who gets through */}
      <motion.g
        animate={reduce ? undefined : { x: [-16, 0, 34, 34] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.3, 0.8, 1], ease: "easeInOut" }}
      >
        <circle cx="52" cy="52" r="6" fill="currentColor" />
      </motion.g>
    </Svg>
  );
}

/** Dual income is the norm — two salaries arriving from both sides. */
export function ArtTwoIncomes({ className }: Props) {
  const reduce = useReducedMotion();
  const pulse = (delay: number) =>
    reduce
      ? undefined
      : {
          animate: { x: delay === 0 ? [0, 20] : [0, -20], opacity: [0, 1, 0] },
          transition: { duration: 2.2, repeat: Infinity, delay, ease: "easeInOut" as const },
        };
  return (
    <Svg className={className}>
      {/* two parents */}
      {[
        { x: 20, r: 8 },
        { x: 100, r: 8 },
      ].map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy="30" r={p.r} stroke="currentColor" strokeWidth={3} />
          <path
            d={`M${p.x - 11} 56 q11 -14 22 0`}
            stroke="currentColor"
            strokeWidth={3}
          />
        </g>
      ))}
      {/* centre: the child / the centre */}
      <rect
        x="46"
        y="34"
        width="28"
        height="26"
        rx="8"
        stroke="currentColor"
        strokeWidth={3}
        fill="currentColor"
        fillOpacity={0.08}
      />
      <path d="M46 40 h28" stroke="currentColor" strokeOpacity={0.35} strokeWidth={2} />
      {/* income streams */}
      <path d="M30 47 H44" stroke="currentColor" strokeOpacity={0.25} strokeWidth={2} />
      <path d="M76 47 H90" stroke="currentColor" strokeOpacity={0.25} strokeWidth={2} />
      <motion.circle cx="32" cy="47" r="3.5" fill="currentColor" {...pulse(0)} />
      <motion.circle cx="88" cy="47" r="3.5" fill="currentColor" {...pulse(0.9)} />
      {/* full day arc */}
      <path
        d="M28 74 q32 12 64 0"
        stroke="currentColor"
        strokeOpacity={0.3}
        strokeWidth={2}
        strokeDasharray="0.1 8"
      />
    </Svg>
  );
}

/** Parents shop on quality — a fee tag pinned, quality outweighing price. */
export function ArtScales({ className }: Props) {
  const reduce = useReducedMotion();
  return (
    <Svg className={className}>
      {/* beam pivot */}
      <path d="M60 22 V66" stroke="currentColor" strokeWidth={3} />
      <path d="M46 70 h28" stroke="currentColor" strokeWidth={3} />
      <motion.g
        style={{ originX: "60px", originY: "26px" }}
        animate={reduce ? undefined : { rotate: [0, -9, -9, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.35, 0.85, 1], ease: "easeInOut" }}
      >
        <path d="M22 26 H98" stroke="currentColor" strokeWidth={3} />
        {/* quality pan (heavier) */}
        <path d="M22 26 v10" stroke="currentColor" strokeOpacity={0.4} strokeWidth={2} />
        <path d="M12 36 q10 12 20 0" stroke="currentColor" strokeWidth={3} />
        <circle cx="22" cy="30" r="0.5" fill="currentColor" />
        {/* price pan (locked) */}
        <path d="M98 26 v10" stroke="currentColor" strokeOpacity={0.4} strokeWidth={2} />
        <path d="M88 36 q10 12 20 0" stroke="currentColor" strokeWidth={3} />
      </motion.g>
      {/* star = reputation */}
      <motion.path
        d="M22 14 l2.6 5.4 5.9.8-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.8z"
        fill="currentColor"
        animate={reduce ? undefined : { scale: [1, 1.15, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "22px", originY: "22px" }}
      />
      {/* price tag, padlocked */}
      <rect x="88" y="10" width="20" height="13" rx="4" stroke="currentColor" strokeWidth={2.5} />
      <path d="M94 10 V7 a4 4 0 0 1 8 0 v3" stroke="currentColor" strokeWidth={2.5} />
    </Svg>
  );
}

/** Demand sits inside the communities — villas, one ground-floor site glowing. */
export function ArtCommunity({ className }: Props) {
  const reduce = useReducedMotion();
  return (
    <Svg className={className}>
      {[8, 30, 74, 96].map((x, i) => (
        <g key={i} opacity={0.32}>
          <path d={`M${x} 46 l8 -8 8 8`} stroke="currentColor" strokeWidth={2.5} />
          <rect x={x + 2} y="46" width="12" height="16" rx="2" stroke="currentColor" strokeWidth={2.5} />
        </g>
      ))}
      {/* the centre */}
      <motion.g
        animate={reduce ? undefined : { y: [0, -3, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M46 40 l14 -13 14 13" stroke="currentColor" strokeWidth={3} />
        <rect
          x="49"
          y="40"
          width="22"
          height="22"
          rx="4"
          stroke="currentColor"
          strokeWidth={3}
          fill="currentColor"
          fillOpacity={0.1}
        />
        <path d="M57 62 v-9 h6 v9" stroke="currentColor" strokeWidth={2.5} />
      </motion.g>
      {/* shaded outdoor play */}
      <path d="M40 70 h40" stroke="currentColor" strokeWidth={3} />
      <path
        d="M34 76 q26 10 52 0"
        stroke="currentColor"
        strokeOpacity={0.3}
        strokeWidth={2}
        strokeDasharray="0.1 8"
      />
      {/* radius ping */}
      {[0, 1].map((i) => (
        <motion.circle
          key={i}
          cx="60"
          cy="51"
          r="20"
          stroke="currentColor"
          strokeOpacity={0.25}
          strokeWidth={2}
          animate={reduce ? undefined : { scale: [0.6, 1.25], opacity: [0.4, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 1.5, ease: "easeOut" }}
          style={{ originX: "60px", originY: "51px" }}
        />
      ))}
    </Svg>
  );
}

export const FORCE_ART = {
  gate: ArtGate,
  twoincomes: ArtTwoIncomes,
  scales: ArtScales,
  community: ArtCommunity,
} as const;
