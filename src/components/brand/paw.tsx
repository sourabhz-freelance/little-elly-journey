import { motion } from "framer-motion";

export type PawColors = {
  pad: string;
  toe1: string;
  toe2: string;
  toe3: string;
  toe4: string;
};

export const brandPawColors: PawColors = {
  pad: "var(--coral)",
  toe1: "var(--yellow)",
  toe2: "var(--periwinkle)",
  toe3: "var(--cyan)",
  toe4: "var(--pink)",
};

/** The one clean paw silhouette — 100x100 viewBox. */
export const PAD_D =
  "M50 94 C 32 94 20 82 20 67 C 20 54 34 48 50 48 C 66 48 80 54 80 67 C 80 82 68 94 50 94Z";

type ToeGeom = { cx: number; cy: number; rx: number; ry: number; rot: number };

const TOES: ToeGeom[] = [
  { cx: 24, cy: 46, rx: 8.5, ry: 11.5, rot: -22 },
  { cx: 41, cy: 33, rx: 9, ry: 12.5, rot: -8 },
  { cx: 59, cy: 33, rx: 9, ry: 12.5, rot: 8 },
  { cx: 76, cy: 46, rx: 8.5, ry: 11.5, rot: 22 },
];

/** Slightly larger toes for the focal welcoming paw. */
const TOES_FOCAL: ToeGeom[] = [
  { cx: 24, cy: 46, rx: 9, ry: 12, rot: -22 },
  { cx: 41, cy: 32, rx: 9.5, ry: 13, rot: -8 },
  { cx: 59, cy: 32, rx: 9.5, ry: 13, rot: 8 },
  { cx: 76, cy: 46, rx: 9, ry: 12, rot: 22 },
];

/**
 * Paw shapes only (no <svg> wrapper) so they can be composed inside a
 * shared SVG coordinate space. Draw on a 100x100 box.
 */
export function PawShapes({
  color,
  colors,
  focal,
}: {
  color?: string | undefined;
  colors?: Partial<PawColors> | undefined;
  focal?: boolean | undefined;
}) {
  const c = { ...brandPawColors, ...colors };
  const toes = focal ? TOES_FOCAL : TOES;
  const toeFills = [c.toe1, c.toe2, c.toe3, c.toe4];
  return (
    <>
      <path d={PAD_D} fill={color ?? c.pad} />
      {toes.map((t, i) => (
        <ellipse
          key={i}
          cx={t.cx}
          cy={t.cy}
          rx={t.rx}
          ry={t.ry}
          transform={`rotate(${t.rot} ${t.cx} ${t.cy})`}
          fill={color ?? toeFills[i]}
        />
      ))}
    </>
  );
}

/** Outline (dashed) version — inherits stroke props from the parent <g>. */
export function PawOutlineShapes() {
  return (
    <>
      <path d={PAD_D} />
      {TOES.map((t, i) => (
        <ellipse
          key={i}
          cx={t.cx}
          cy={t.cy}
          rx={t.rx}
          ry={t.ry}
          transform={`rotate(${t.rot} ${t.cx} ${t.cy})`}
        />
      ))}
    </>
  );
}

/** Standalone paw: single `color` (mono) or distinct toe colors. */
export function Paw({
  className,
  color,
  colors,
  focal,
}: {
  className?: string | undefined;
  color?: string | undefined;
  colors?: Partial<PawColors> | undefined;
  focal?: boolean | undefined;
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <PawShapes color={color} colors={colors} focal={focal} />
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
  opacity = 0.55,
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
      strokeDasharray="0.5 15"
      vectorEffect="non-scaling-stroke"
      opacity={opacity}
      initial={{ strokeDashoffset: 0 }}
      animate={{ strokeDashoffset: -155 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    />
  );
}
