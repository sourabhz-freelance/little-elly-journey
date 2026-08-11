import { motion, useReducedMotion } from "framer-motion";
import { ellyPoses, type EllyPose } from "@/content/elly";
import { cn } from "@/lib/utils";

/**
 * Elly the mascot — a warm guest, never a decoration.
 * One per screen, never recoloured or cropped through the face.
 */
export function Elly({
  pose,
  className,
  delay = 0,
  float = 5,
}: {
  pose: EllyPose;
  /** size + position utilities, e.g. "absolute bottom-0 left-6 w-40" */
  className?: string;
  delay?: number;
  /** float loop duration in seconds */
  float?: number;
}) {
  const reduce = useReducedMotion();
  const p = ellyPoses[pose];

  return (
    <motion.img
      src={p.url}
      alt={p.alt}
      loading="lazy"
      decoding="async"
      className={cn("pointer-events-none select-none", className)}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {null}
    </motion.img>
  );
}

/** Elly with a gentle breathing float. */
export function EllyFloating(props: Parameters<typeof Elly>[0]) {
  const reduce = useReducedMotion();
  const { className, float = 5, ...rest } = props;
  return (
    <motion.div
      className={cn("pointer-events-none", className)}
      animate={reduce ? { y: 0 } : { y: [0, -10, 0] }}
      transition={{ duration: float, repeat: Infinity, ease: "easeInOut" }}
    >
      <Elly {...rest} className="h-full w-full object-contain" />
    </motion.div>
  );
}
