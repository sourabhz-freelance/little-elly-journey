import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * A full-width editorial pause between chapters of the deck.
 * One line, said slowly. Nothing else on the screen.
 */
export default function EditorialBreak({
  kicker,
  lines,
  accentIndex,
  note,
  tone = "cream",
}: {
  kicker?: string;
  /** Each string is its own line. */
  lines: readonly string[];
  /** Which line renders in coral. */
  accentIndex?: number;
  note?: string;
  tone?: "cream" | "ink";
}) {
  const reduce = useReducedMotion();
  const dark = tone === "ink";

  return (
    <section
      className={`relative w-full overflow-hidden px-6 py-32 sm:px-10 lg:py-44 ${
        dark ? "bg-ink" : "bg-cream"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: dark
            ? "radial-gradient(50% 50% at 50% 50%, color-mix(in oklab, var(--coral) 22%, transparent), transparent 72%)"
            : "radial-gradient(50% 46% at 50% 50%, color-mix(in oklab, var(--yellow) 20%, transparent), transparent 72%)",
        }}
      />

      {/* the trail, drawn straight through the line */}
      <svg
        className="pointer-events-none absolute inset-x-0 top-1/2 h-24 w-full -translate-y-1/2"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M -20 70 C 220 10, 420 110, 600 60 S 980 10, 1220 60"
          fill="none"
          stroke="var(--pink)"
          strokeWidth={3}
          strokeLinecap="round"
          strokeDasharray="0.1 17"
          opacity={dark ? 0.5 : 0.35}
          vectorEffect="non-scaling-stroke"
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.6, ease: EASE }}
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {kicker && (
          <motion.p
            className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {kicker}
          </motion.p>
        )}
        <h2
          className={`mt-6 font-display font-semibold leading-[1.04] tracking-[-0.03em] [font-size:clamp(2.3rem,6vw,4.6rem)] ${
            dark ? "text-cream" : "text-ink"
          }`}
        >
          {lines.map((l, i) => (
            <motion.span
              key={l}
              className="block"
              style={i === accentIndex ? { color: "var(--coral)" } : undefined}
              initial={reduce ? false : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.12 + i * 0.14 }}
            >
              {l}
            </motion.span>
          ))}
        </h2>
        {note && (
          <motion.p
            className={`mx-auto mt-8 max-w-[46ch] text-base leading-relaxed sm:text-lg ${
              dark ? "text-cream/60" : "text-ink/55"
            }`}
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
          >
            {note}
          </motion.p>
        )}
      </div>
    </section>
  );
}
