import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const ACCENTS = [
  "var(--coral)",
  "var(--turquoise)",
  "var(--orange)",
  "var(--periwinkle)",
  "var(--cyan)",
  "var(--pink)",
];

/** The territories open right now. */
const STATES = [
  "Andhra Pradesh",
  "Telangana",
  "Tamil Nadu",
  "Madhya Pradesh",
  "Gujarat",
  "Odisha",
  "Kerala",
  "Delhi NCR",
  "Puducherry",
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
            The states we are <span className="text-coral">opening</span>.
          </motion.h2>
          <motion.p
            className="mx-auto mt-6 max-w-[40ch] text-base leading-relaxed text-ink/55 sm:text-lg lg:mx-0"
            {...rise(0.2)}
          >
            Each of these is a place where children are waiting, and no one has
            arrived yet. We can&rsquo;t be in all of them. Someone has to hold the
            territory.
          </motion.p>
          <motion.p
            className="mx-auto mt-8 max-w-[30ch] font-display leading-tight text-ink [font-size:clamp(1.3rem,2.4vw,1.9rem)] lg:mx-0"
            {...rise(0.3)}
          >
            That someone is a{" "}
            <span className="text-coral">master franchise partner.</span>
          </motion.p>
        </div>

        <motion.div className="relative mx-auto w-full max-w-[34rem]" {...rise(0.15)}>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            {STATES.map((s, i) => {
              const accent = ACCENTS[i % ACCENTS.length];
              return (
                <motion.span
                  key={s}
                  {...rise(0.05 * i)}
                  className="inline-flex items-center gap-2.5 rounded-full border bg-white/70 px-5 py-3 font-display text-[1.02rem] leading-none text-ink backdrop-blur-sm"
                  style={{ borderColor: `color-mix(in oklab, ${accent} 32%, transparent)` }}
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ background: accent }}
                    aria-hidden="true"
                  />
                  {s}
                </motion.span>
              );
            })}
          </div>

          <motion.div
            className="mt-8 flex items-center gap-4 border-t border-ink/[0.08] pt-6"
            {...rise(0.55)}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/35">
              And beyond India
            </span>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-yellow/60 bg-yellow/[0.14] px-5 py-2.5 font-display text-[1.02rem] leading-none text-ink">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-yellow"
                aria-hidden="true"
              />
              Dubai
            </span>
          </motion.div>

          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/35">
            Territories open at the moment
          </p>
        </motion.div>
      </div>
    </section>
  );
}
