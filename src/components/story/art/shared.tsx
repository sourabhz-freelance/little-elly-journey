import type { ReactNode } from "react";
import { PawShapes, PawOutlineShapes } from "@/components/brand/paw";

/** Shared 420x340 canvas for every story illustration. */
export function ArtFrame({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 420 340"
      className="h-full w-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      {children}
    </svg>
  );
}

/** A paw print placed on the shared canvas. `s` = scale (1 ≈ 100px paw). */
export function Print({
  x,
  y,
  rot = 0,
  s = 0.3,
  color = "var(--coral)",
  opacity = 1,
}: {
  x: number;
  y: number;
  rot?: number;
  s?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s}) translate(-50 -60)`} opacity={opacity}>
      <PawShapes color={color} />
    </g>
  );
}

/** Dashed outline paw print — "the seat kept open". */
export function OutlinePrint({
  x,
  y,
  rot = 0,
  s = 0.45,
}: {
  x: number;
  y: number;
  rot?: number;
  s?: number;
}) {
  return (
    <g
      transform={`translate(${x} ${y}) rotate(${rot}) scale(${s}) translate(-50 -60)`}
      fill="none"
      stroke="var(--coral)"
      strokeWidth={6}
      strokeDasharray="10 12"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <PawOutlineShapes />
    </g>
  );
}

/** Dotted brand trail. Dots stay round at any scale. */
export function DottedPath({
  d,
  color = "var(--pink)",
  width = 3.2,
  opacity = 0.6,
  dash = "0.5 14",
}: {
  d: string;
  color?: string;
  width?: number;
  opacity?: number;
  dash?: string;
}) {
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
      strokeDasharray={dash}
      opacity={opacity}
      vectorEffect="non-scaling-stroke"
    />
  );
}

export function Glow({ cx, cy, r = 120 }: { cx: number; cy: number; r?: number }) {
  return <circle cx={cx} cy={cy} r={r} fill="var(--lightpink)" opacity={0.45} />;
}
