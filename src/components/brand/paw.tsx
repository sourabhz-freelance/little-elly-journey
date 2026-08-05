import { motion } from "framer-motion";

export type PawColors = {
  pad: string;
  toe1: string;
  toe2: string;
  toe3: string;
  toe4: string;
};

export const defaultPawColors: PawColors = {
  pad: "var(--coral)",
  toe1: "var(--yellow)",
  toe2: "var(--periwinkle)",
  toe3: "var(--cyan)",
  toe4: "var(--pink)",
};

/**
 * "Creative Paw" — modular brand motif.
 * Big rounded pad + 4 toes: rounded-square, circle, rounded-square, triangle.
 * Drawn on a 100x100 viewBox.
 */
export function CreativePaw({
  colors = defaultPawColors,
  className,
  mono,
}: {
  colors?: Partial<PawColors>;
  className?: string;
  mono?: string;
}) {
  const c = { ...defaultPawColors, ...colors };
  const fill = (v: string) => mono ?? v;
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {/* pad */}
      <rect x="18" y="45" width="64" height="50" rx="25" fill={fill(c.pad)} />
      {/* toe 1 — rounded square */}
      <rect x="9" y="22" width="20" height="20" rx="7" fill={fill(c.toe1)} transform="rotate(-14 19 32)" />
      {/* toe 2 — circle */}
      <circle cx="39" cy="15" r="10.5" fill={fill(c.toe2)} />
      {/* toe 3 — rounded square */}
      <rect x="53" y="6" width="20" height="20" rx="7" fill={fill(c.toe3)} transform="rotate(12 63 16)" />
      {/* toe 4 — triangle */}
      <path d="M83 20 L94 40 L72 40 Z" fill={fill(c.toe4)} />
    </svg>
  );
}

/** Simple two-tone paw print used for the "walking" prints and logo eyes. */
export function PawPrint({
  className,
  color = "var(--coral)",
  dashed = false,
}: {
  className?: string;
  color?: string;
  dashed?: boolean;
}) {
  const solid = dashed
    ? { fill: "none", stroke: color, strokeWidth: 4, strokeDasharray: "7 7", strokeLinejoin: "round" as const }
    : { fill: color };
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect x="20" y="46" width="60" height="48" rx="24" {...solid} />
      <ellipse cx="20" cy="30" rx="10" ry="13" {...solid} />
      <ellipse cx="42" cy="19" rx="10" ry="13" {...solid} />
      <ellipse cx="64" cy="21" rx="10" ry="13" {...solid} />
      <ellipse cx="84" cy="36" rx="9" ry="12" {...solid} />
    </svg>
  );
}

/** The Trail — flowing dotted paw-path. */
export function Trail({
  d,
  className,
  color = "var(--pink)",
  duration = 26,
  width = 3.4,
  opacity = 0.75,
}: {
  d: string;
  className?: string;
  color?: string;
  duration?: number;
  width?: number;
  opacity?: number;
}) {
  return (
    <motion.path
      d={d}
      className={className}
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
      strokeDasharray="0.1 17"
      opacity={opacity}
      initial={{ strokeDashoffset: 0 }}
      animate={{ strokeDashoffset: -340 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    />
  );
}
