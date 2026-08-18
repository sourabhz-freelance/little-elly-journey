import { motion, useReducedMotion } from "framer-motion";
import { dubaiOpportunity as O } from "@/content/dubai";
import { useCountUp } from "@/components/sector/useCountUp";
import HoverReveal from "@/components/shared/HoverReveal";
import { FORCE_ART } from "./forceArt";

const EASE = [0.22, 1, 0.36, 1] as const;

function Stat({ s, delay }: { s: (typeof O.stats)[number]; delay: number }) {
  const { ref, text } = useCountUp(s.value, s.decimals);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className="rounded-3xl border border-ink/[0.07] bg-white/70 p-8 backdrop-blur-sm"
    >
      <p className="font-display font-semibold leading-none tracking-[-0.03em] text-coral [font-size:clamp(2.6rem,5vw,4rem)]">
        {s.prefix}
        <span ref={ref}>{text}</span>
        {s.suffix}
      </p>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/40">
        {s.label}
      </p>
      <p className="mt-2 text-base leading-relaxed text-ink/60">{s.note}</p>
      <p className="mt-4 text-xs text-ink/35">{s.source}</p>
    </motion.div>
  );
}

export default function DubaiOpportunitySection() {
  const reduce = useReducedMotion();
  const rise = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.75, ease: EASE, delay },
        };

  return (
    <section
      className="relative w-full overflow-hidden bg-cream px-6 py-28 sm:px-10 lg:py-36"
      aria-label="The Dubai opportunity"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[55%]"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 0%, color-mix(in oklab, var(--yellow) 22%, transparent), transparent 72%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div className="text-center" {...rise(0)}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {O.kicker}
          </p>
          <h2 className="mx-auto mt-5 max-w-[20ch] font-display font-semibold leading-[1.05] tracking-[-0.03em] text-ink [font-size:clamp(2.2rem,5vw,4rem)]">
            {O.headline[0]} <span className="text-coral">{O.headline[1]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[56ch] text-base leading-relaxed text-ink/55 sm:text-lg">
            {O.sub}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {O.stats.map((s, i) => (
            <Stat key={s.id} s={s} delay={0.1 + i * 0.12} />
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {O.forces.map((f, i) => {
            const Art = FORCE_ART[f.art as keyof typeof FORCE_ART];
            return (
              <motion.div key={f.id} {...rise(0.08 + i * 0.07)}>
                <HoverReveal
                  accent={f.accent}
                  className="h-full cursor-help rounded-3xl"
                  detail={
                    <div className="flex h-full flex-col justify-center">
                      <p className="font-display text-lg leading-snug text-cream">{f.title}</p>
                      <p className="mt-3 text-[0.9rem] leading-relaxed text-cream/85">{f.body}</p>
                    </div>
                  }
                >
                  <div
                    className="flex h-full flex-col rounded-3xl border bg-white/65 p-7 backdrop-blur-sm"
                    style={{ borderColor: `color-mix(in oklab, ${f.accent} 28%, transparent)` }}
                  >
                    <div
                      className="flex h-24 items-center justify-center"
                      style={{ color: f.accent }}
                    >
                      {Art ? <Art className="h-full w-auto" /> : null}
                    </div>
                    <p className="mt-6 font-display text-lg leading-snug text-ink">{f.title}</p>
                    <p className="mt-2 text-[0.95rem] leading-snug text-ink/55">{f.line}</p>
                  </div>
                </HoverReveal>
              </motion.div>
            );
          })}
        </div>


        <p className="mx-auto mt-10 max-w-[70ch] text-center text-xs leading-relaxed text-ink/35">
          {O.disclaimer}
        </p>
      </div>
    </section>
  );
}
