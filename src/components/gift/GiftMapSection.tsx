import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Simplified, hand-drawn India silhouette (viewBox 0 0 400 470). */
const INDIA =
  "M148 22 C176 14, 200 34, 226 46 C252 58, 268 52, 286 62 C300 70, 296 84, 308 92 C322 101, 342 96, 352 108 C362 120, 344 130, 338 142 C330 158, 314 150, 300 148 C288 146, 280 154, 276 166 C268 190, 258 214, 246 244 C234 274, 226 300, 216 330 C206 360, 198 392, 188 424 C184 438, 176 442, 170 430 C160 408, 150 372, 140 340 C130 308, 120 278, 110 250 C102 226, 88 214, 74 200 C62 188, 54 174, 62 162 C70 150, 86 152, 98 146 C110 140, 112 126, 112 112 C112 96, 118 78, 124 58 C129 41, 136 26, 148 22 Z";

type Dot = { x: number; y: number; r?: number; delay: number };

/** Marked territories — indicative pins across the map. */
const DOTS: Dot[] = [
  { x: 132, y: 78, delay: 0.0 },
  { x: 176, y: 60, r: 5.5, delay: 0.08 },
  { x: 214, y: 96, delay: 0.16 },
  { x: 262, y: 96, delay: 0.24 },
  { x: 300, y: 118, delay: 0.32 },
  { x: 246, y: 148, r: 5.5, delay: 0.4 },
  { x: 190, y: 140, delay: 0.48 },
  { x: 140, y: 150, delay: 0.56 },
  { x: 112, y: 196, delay: 0.64 },
  { x: 166, y: 206, r: 5.5, delay: 0.72 },
  { x: 222, y: 210, delay: 0.8 },
  { x: 148, y: 268, delay: 0.88 },
  { x: 198, y: 272, delay: 0.96 },
  { x: 172, y: 330, r: 5.5, delay: 1.04 },
  { x: 206, y: 316, delay: 1.12 },
  { x: 182, y: 386, delay: 1.2 },
];

export default function GiftMapSection() {
  const reduce = useReducedMotion();
  const rise = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.35 },
          transition: { duration: 0.75, ease: EASE, delay },
        };

  return (
    <section
      className="relative w-full overflow-hidden bg-cream px-6 py-28 sm:px-10 lg:py-36"
      aria-label="Where the gift is going"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46% 44% at 50% 46%, color-mix(in oklab, var(--lightpink) 40%, transparent), transparent 72%)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
        <div className="text-center lg:text-left">
          <motion.p
            className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral"
            {...rise(0)}
          >
            And the gift has a name
          </motion.p>
          <motion.h2
            className="mx-auto mt-5 max-w-[16ch] font-display font-semibold leading-[1.05] tracking-[-0.03em] text-ink [font-size:clamp(2.2rem,5vw,3.9rem)] lg:mx-0"
            {...rise(0.1)}
          >
            A map with <span className="text-coral">open spaces</span> on it.
          </motion.h2>
          <motion.p
            className="mx-auto mt-6 max-w-[40ch] text-base leading-relaxed text-ink/55 sm:text-lg lg:mx-0"
            {...rise(0.2)}
          >
            Every dot is a place where children are waiting, and no one has arrived
            yet. We can&rsquo;t be in all of them. Someone has to hold the territory.
          </motion.p>
          <motion.p
            className="mx-auto mt-8 max-w-[30ch] font-display leading-tight text-ink [font-size:clamp(1.3rem,2.4vw,1.9rem)] lg:mx-0"
            {...rise(0.3)}
          >
            That someone is a{" "}
            <span className="text-coral">master franchise partner.</span>
          </motion.p>
        </div>

        <motion.div className="relative mx-auto w-full max-w-[26rem]" {...rise(0.15)}>
          <svg viewBox="0 0 400 470" className="h-full w-full" role="img" aria-label="Map of India with marked territories">
            <motion.path
              d={INDIA}
              fill="color-mix(in oklab, var(--coral) 8%, transparent)"
              stroke="var(--coral)"
              strokeWidth={2.4}
              strokeLinejoin="round"
              strokeLinecap="round"
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2, ease: EASE }}
            />
            {DOTS.map((d, i) => (
              <g key={i}>
                <motion.circle
                  cx={d.x}
                  cy={d.y}
                  r={(d.r ?? 4) * 3}
                  fill="var(--yellow)"
                  initial={reduce ? false : { opacity: 0 }}
                  whileInView={{ opacity: [0, 0.35, 0.12] }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.4, ease: EASE, delay: 0.9 + d.delay }}
                />
                <motion.circle
                  cx={d.x}
                  cy={d.y}
                  r={d.r ?? 4}
                  fill={i % 3 === 0 ? "var(--coral)" : i % 3 === 1 ? "var(--turquoise)" : "var(--orange)"}
                  initial={reduce ? false : { opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  style={{ transformOrigin: `${d.x}px ${d.y}px` }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.9 + d.delay }}
                />
              </g>
            ))}
          </svg>
          <p className="mt-4 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/35">
            Territories, indicative
          </p>
        </motion.div>
      </div>
    </section>
  );
}
