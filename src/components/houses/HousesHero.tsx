import { motion, useReducedMotion } from "framer-motion";
import { housesContent as H } from "@/content/houses";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Full-viewport opening title: the two houses, joined. */
export default function HousesHero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.85, ease: EASE, delay },
        };

  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-cream px-6 py-24 sm:px-10"
      aria-label="Two houses, one ambition"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(48% 42% at 50% 34%, color-mix(in oklab, var(--yellow) 22%, transparent), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <motion.p
          className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral"
          {...rise(0)}
        >
          {H.kicker}
        </motion.p>

        <motion.h1
          className="mx-auto mt-6 max-w-[18ch] font-display font-semibold leading-[1.04] tracking-[-0.03em] text-ink [font-size:clamp(2.3rem,6vw,4.4rem)]"
          {...rise(0.08)}
        >
          {H.headline[0]} <span className="text-coral">{H.headline[1]}</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-7 max-w-[46ch] text-base leading-relaxed text-ink/55 sm:text-lg"
          {...rise(0.16)}
        >
          {H.sub}
        </motion.p>

        {/* the two names, joined by the trail */}
        <div className="mt-16 grid items-center gap-8 sm:grid-cols-[1fr_auto_1fr] sm:gap-4">
          {[H.houses[0]!, H.houses[1]!].map((house, i) => (
            <motion.div
              key={house.id}
              className={i === 1 ? "sm:order-3" : ""}
              {...rise(0.26 + i * 0.1)}
            >
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.28em]"
                style={{ color: house.accent }}
              >
                {house.role}
              </p>
              <p className="mt-3 font-display leading-tight text-ink [font-size:clamp(1.6rem,3.4vw,2.4rem)]">
                {house.name}
              </p>
            </motion.div>
          ))}

          <div className="relative flex items-center justify-center sm:order-2 sm:w-[13rem]">
            <motion.div
              className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-[3px] sm:block"
              style={{
                backgroundImage: "radial-gradient(circle, var(--pink) 1.5px, transparent 1.6px)",
                backgroundSize: "14px 3px",
                backgroundRepeat: "repeat-x",
                transformOrigin: "center",
              }}
              aria-hidden="true"
              initial={reduce ? false : { scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 0.85 }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.5 }}
            />
            <motion.span
              className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-coral/30 bg-cream font-display text-[0.85rem] text-coral shadow-[0_16px_36px_-22px_var(--coral)]"
              initial={reduce ? false : { opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.62 }}
            >
              {H.centreNode}
            </motion.span>
          </div>
        </div>
      </div>

      <motion.p
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[11px] font-medium uppercase tracking-[0.28em] text-ink/35"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {H.scrollCue}
      </motion.p>
    </section>
  );
}
