import { motion, useReducedMotion } from "framer-motion";

/** Small animated illustrations for "What to weigh before you sign." */

type Props = { className?: string | undefined };

function Svg({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string | undefined;
}) {
  return (
    <svg
      viewBox="0 0 120 90"
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

/** FOCO counterparty — two hands, one link between them. */
export function ArtHandshake({ className }: Props) {
  const reduce = useReducedMotion();
  return (
    <Svg className={className}>
      {/* you */}
      <circle cx="22" cy="28" r="8" stroke="currentColor" strokeWidth={3} />
      <path d="M11 54 q11 -14 22 0" stroke="currentColor" strokeWidth={3} />
      {/* us */}
      <circle cx="98" cy="28" r="8" stroke="currentColor" strokeWidth={3} />
      <path d="M87 54 q11 -14 22 0" stroke="currentColor" strokeWidth={3} />
      {/* the link */}
      <motion.g
        animate={reduce ? {} : { scale: [1, 1.06, 1] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "60px", originY: "44px" }}
      >
        <path d="M50 44 a8 8 0 0 1 8 -8 h2" stroke="currentColor" strokeWidth={3} />
        <path d="M70 44 a8 8 0 0 0 -8 8 h-2" stroke="currentColor" strokeWidth={3} />
        <path d="M52 52 h6" stroke="currentColor" strokeWidth={3} />
        <path d="M62 36 h6" stroke="currentColor" strokeWidth={3} />
      </motion.g>
      {/* income flows only while the link holds */}
      <motion.circle
        cx="40"
        cy="70"
        r="3.5"
        fill="currentColor"
        animate={reduce ? {} : { x: [0, 40], opacity: [0, 1, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <path
        d="M34 70 H86"
        stroke="currentColor"
        strokeOpacity={0.25}
        strokeWidth={2}
        strokeDasharray="0.1 8"
      />
    </Svg>
  );
}

/** Asset specificity — building stays, fit-out fades. */
export function ArtPurposeBuilt({ className }: Props) {
  const reduce = useReducedMotion();
  return (
    <Svg className={className}>
      {/* building shell — solid */}
      <path d="M32 34 l28 -18 28 18" stroke="currentColor" strokeWidth={3} />
      <rect x="36" y="34" width="48" height="36" rx="5" stroke="currentColor" strokeWidth={3} />
      <path d="M28 70 h64" stroke="currentColor" strokeWidth={3} />
      {/* fit-out inside — fades */}
      <motion.g
        animate={reduce ? {} : { opacity: [1, 0.18, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="43" y="44" width="12" height="10" rx="3" stroke="currentColor" strokeWidth={2.5} />
        <rect x="65" y="44" width="12" height="10" rx="3" stroke="currentColor" strokeWidth={2.5} />
        <path d="M43 62 h34" stroke="currentColor" strokeWidth={2.5} />
      </motion.g>
      {/* permit stamp */}
      <circle cx="98" cy="22" r="10" stroke="currentColor" strokeOpacity={0.4} strokeWidth={2.5} />
      <path d="M94 22 l3 3 6 -6" stroke="currentColor" strokeWidth={2.5} />
    </Svg>
  );
}

/** Variability — a payout line that moves with collections. */
export function ArtVariable({ className }: Props) {
  const reduce = useReducedMotion();
  return (
    <Svg className={className}>
      <path d="M18 72 H104" stroke="currentColor" strokeOpacity={0.3} strokeWidth={2} />
      <path d="M18 16 V72" stroke="currentColor" strokeOpacity={0.3} strokeWidth={2} />
      {/* flat expectation */}
      <path
        d="M18 48 H104"
        stroke="currentColor"
        strokeOpacity={0.25}
        strokeWidth={2}
        strokeDasharray="0.1 8"
      />
      {/* variable collections */}
      <motion.path
        d="M18 62 C34 30 44 66 58 40 S82 60 104 26"
        stroke="currentColor"
        strokeWidth={3.5}
        animate={reduce ? {} : { pathLength: [0, 1] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.6, ease: "easeInOut" }}
      />
      <motion.circle
        cx="104"
        cy="26"
        r="4.5"
        fill="currentColor"
        animate={reduce ? {} : { scale: [0.7, 1.15, 0.7] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "104px", originY: "26px" }}
      />
    </Svg>
  );
}

/** The FOFO ramp — cost flat from day one, enrolment climbing behind it. */
export function ArtRamp({ className }: Props) {
  const reduce = useReducedMotion();
  return (
    <Svg className={className}>
      <path d="M18 72 H104" stroke="currentColor" strokeOpacity={0.3} strokeWidth={2} />
      <path d="M18 14 V72" stroke="currentColor" strokeOpacity={0.3} strokeWidth={2} />
      {/* cost: flat, high, from day one */}
      <path d="M18 34 H104" stroke="currentColor" strokeWidth={3} strokeDasharray="6 5" />
      {/* enrolment: climbs */}
      <motion.path
        d="M18 70 C48 70 66 48 104 20"
        stroke="currentColor"
        strokeWidth={3.5}
        strokeOpacity={0.55}
        animate={reduce ? {} : { pathLength: [0, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" }}
      />
      {/* the gap you must fund */}
      <motion.path
        d="M40 34 V64 M52 34 V56 M64 34 V47"
        stroke="currentColor"
        strokeOpacity={0.3}
        strokeWidth={2.5}
        animate={reduce ? {} : { opacity: [0.15, 0.5, 0.15] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </Svg>
  );
}

export const WEIGH_ART = {
  handshake: ArtHandshake,
  purposebuilt: ArtPurposeBuilt,
  variable: ArtVariable,
  ramp: ArtRamp,
} as const;
