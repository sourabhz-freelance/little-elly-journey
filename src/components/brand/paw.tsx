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

/** The one true paw silhouette — 100x100 viewBox. */
export const PAD_D =
  "M50 94 C 32 94 20 82 20 67 C 20 54 34 48 50 48 C 66 48 80 54 80 67 C 80 82 68 94 50 94Z";

type ToeSpec = { cx: number; cy: number; rx: number; ry: number; r: number };

export const TOES: ToeSpec[] = [
  { cx: 24, cy: 46, rx: 8.5, ry: 11.5, r: -22 },
  { cx: 41, cy: 33, rx: 9, ry: 12.5, r: -8 },
  { cx: 59, cy: 33, rx: 9, ry: 12.5, r: 8 },
  { cx: 76, cy: 46, rx: 8.5, ry: 11.5, r: 22 },
];

/** Slightly larger toes used for the focal welcoming paw. */
export const TOES_FOCAL: ToeSpec[] = [
  { cx: 24, cy: 46, rx: 9, ry: 12, r: -22 },
  { cx: 41, cy: 32, rx: 9.5, ry: 13, r: -8 },
  { cx: 59, cy: 32, rx: 9.5, ry: 13, r: 8 },
  { cx: 76, cy: 46, rx: 9, ry: 12, r: 22 },
];

/** Raw paw geometry (no <svg> wrapper) — drop inside any svg coordinate space. */
export function PawShape({
  color,
  colors,
  focal = false,
  ...rest
}: {
  color?: string;
  colors?: Partial<PawColors>;
  focal?: boolean;
} & React.SVGProps<SVGGElement>) {
  const c = { ...defaultPawColors, ...colors };
  const toes = focal ? TOES_FOCAL : TOES;
  const fillOf = (v: string) => color ?? v;
  const toeFills = [c.toe1, c.toe2, c.toe3, c.toe4];
  return (
    <g {...rest}>
      <path d={PAD_D} fill={color ? undefined : fillOf(c.pad)} {...(color ? { fill: color } : {})} />
      {toes.map((t, i) => (
        <ellipse
          key={i}
          cx={t.cx}
          cy={t.cy}
          rx={t.rx}
          ry={t.ry}
          transform={`rotate(${t.r} ${t.cx} ${t.cy})`}
          fill={color ?? toeFills[i]}
        />
      ))}
    </g>
  );
}

/** Outline-only version (used for the dashed "seat kept open" print). */
export function PawOutline(props: React.SVGProps<SVGGElement>) {
  return (
    <g {...props}>
      <path d={PAD_D} />
      {TOES.map((t, i) => (
        <ellipse
          key={i}
          cx={t.cx}
          cy={t.cy}
          rx={t.rx}
          ry={t.ry}
          transform={`rotate(${t.r} ${t.cx} ${t.cy})`}
        />
      ))}
    </g>
  );
}

/** Standalone paw as its own svg (logo eyes, floaters, etc.). */
export function Paw({
  className,
  color,
  colors,
  focal,
  opacity,
}: {
  className?: string;
  color?: string;
  colors?: Partial<PawColors>;
  focal?: boolean;
  opacity?: number;
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} opacity={opacity} aria-hidden="true">
      <PawShape color={color} colors={colors} focal={focal} />
    </svg>
  );
}

/** The Trail — flowing dotted paw-path with perfectly round, evenly spaced dots. */
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
