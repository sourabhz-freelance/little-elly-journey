import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { demographicsContent as D } from "@/content/sector";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function DemographicsSection() {
  const [open, setOpen] = useState<string | null>(D.drivers[0].id);

  return (
    <section
      className="relative w-full overflow-hidden bg-cream px-6 py-28 sm:px-10 lg:py-36"
      aria-label="India's demographic tailwind"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 20% 20%, color-mix(in oklab, var(--periwinkle) 20%, transparent), transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {D.kicker}
          </p>
          <h2 className="mx-auto mt-5 max-w-[18ch] font-display font-semibold leading-[1.05] tracking-[-0.03em] text-ink [font-size:clamp(2.2rem,5vw,4rem)]">
            {D.headline[0]} <span className="text-coral">{D.headline[1]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[46ch] text-base leading-relaxed text-ink/55 sm:text-lg">
            {D.sub}
          </p>
        </motion.div>

        <div className="mt-14 space-y-4">
          {D.drivers.map((d, i) => {
            const isOpen = open === d.id;
            return (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.08 * i }}
                className="overflow-hidden rounded-3xl border bg-white/70 backdrop-blur-sm"
                style={{
                  borderColor: isOpen
                    ? `color-mix(in oklab, ${d.accent} 45%, transparent)`
                    : "color-mix(in oklab, var(--ink) 8%, transparent)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : d.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-5 px-7 py-6 text-left sm:px-9"
                >
                  <span
                    className="hidden shrink-0 font-display text-xl font-semibold sm:block sm:text-2xl"
                    style={{ color: d.accent }}
                  >
                    {d.stat}
                  </span>
                  <span className="flex-1 font-display text-lg leading-snug text-ink sm:text-xl">
                    {d.title}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="shrink-0 text-2xl leading-none text-ink/30"
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                    >
                      <div className="px-7 pb-7 sm:px-9 sm:pb-9">
                        <p
                          className="mb-3 font-display text-xl font-semibold sm:hidden"
                          style={{ color: d.accent }}
                        >
                          {d.stat}
                        </p>
                        <p className="max-w-[62ch] text-base leading-relaxed text-ink/60">
                          {d.body}
                        </p>
                        <p className="mt-4 text-xs text-ink/35">{d.source}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
