import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Simplified, hand-drawn India silhouette (viewBox 0 0 400 470). */
const INDIA =
  "M150 22 Q168 52, 200 78 Q234 100, 266 118 Q296 130, 318 140 Q352 156, 350 172 Q344 192, 316 188 Q288 184, 266 194 Q256 214, 252 228 Q238 250, 226 268 Q208 300, 196 326 Q182 366, 166 404 Q156 434, 148 432 Q138 428, 130 398 Q116 348, 106 300 Q98 268, 94 252 Q78 240, 62 226 Q48 210, 52 190 Q58 166, 74 150 Q96 130, 116 110 Q130 90, 134 66 Q138 38, 150 22 Z";


type Dot = { x: number; y: number; r?: number; delay: number };

/** Marked territories — indicative pins across the map. */
const DOTS: Dot[] = [
  { x: 140, y: 95, delay: 0.0 },
  { x: 190, y: 102, r: 5.5, delay: 0.08 },
  { x: 132, y: 142, delay: 0.16 },
  { x: 182, y: 136, delay: 0.24 },
  { x: 240, y: 152, delay: 0.32 },
  { x: 300, y: 176, r: 5.5, delay: 0.4 },
  { x: 92, y: 190, delay: 0.48 },
  { x: 150, y: 176, delay: 0.56 },
  { x: 212, y: 186, delay: 0.64 },
  { x: 112, y: 236, r: 5.5, delay: 0.72 },
  { x: 170, y: 226, delay: 0.8 },
  { x: 228, y: 242, delay: 0.88 },
  { x: 126, y: 296, delay: 0.96 },
  { x: 180, y: 286, r: 5.5, delay: 1.04 },
  { x: 142, y: 350, delay: 1.12 },
  { x: 174, y: 346, delay: 1.2 },
  { x: 152, y: 400, delay: 1.28 },
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
