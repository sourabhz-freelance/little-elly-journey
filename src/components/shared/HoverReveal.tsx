import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * A card that reveals a deeper explanation on hover (or tap / keyboard focus).
 * No close button — move away and it goes.
 */
export default function HoverReveal({
  accent,
  children,
  detail,
  className = "",
}: {
  accent: string;
  children: React.ReactNode;
  detail: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`relative isolate ${className}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onClick={() => setOpen((v) => !v)}
      tabIndex={0}
      role="button"
      aria-expanded={open}
    >
      {children}

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.99 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="absolute inset-0 z-30 overflow-hidden rounded-[inherit] p-7 text-left"
            style={{
              background: `linear-gradient(160deg, color-mix(in oklab, ${accent} 96%, black 4%), color-mix(in oklab, ${accent} 78%, var(--ink) 22%))`,
              boxShadow: `0 24px 60px -24px color-mix(in oklab, ${accent} 60%, transparent)`,
            }}
          >
            {detail}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
