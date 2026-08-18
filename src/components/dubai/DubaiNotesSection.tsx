import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, Building2, MapPinned, Receipt, Scale, Coins } from "lucide-react";
import { dubaiNotes as N } from "@/content/dubai";

const EASE = [0.22, 1, 0.36, 1] as const;

const ICONS = { BadgeCheck, Building2, MapPinned, Receipt, Scale, Coins } as const;

export default function DubaiNotesSection() {
  const reduce = useReducedMotion();
  const rise = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.25 },
          transition: { duration: 0.7, ease: EASE, delay },
        };

  return (
    <section
      className="relative w-full overflow-hidden bg-cream px-6 py-28 sm:px-10 lg:py-36"
      aria-label="Regulatory, ownership and tax notes"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[50%]"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 0%, color-mix(in oklab, var(--yellow) 18%, transparent), transparent 72%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div className="text-center" {...rise(0)}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {N.kicker}
          </p>
          <h2 className="mx-auto mt-5 max-w-[18ch] font-display font-semibold leading-[1.05] tracking-[-0.03em] text-ink [font-size:clamp(2.2rem,5vw,3.9rem)]">
            {N.headline[0]} <span className="text-coral">{N.headline[1]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[60ch] text-base leading-relaxed text-ink/55 sm:text-lg">
            {N.sub}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {N.notes.map((n, i) => {
            const Icon = ICONS[n.icon as keyof typeof ICONS] ?? BadgeCheck;
            return (
              <motion.div
                key={n.id}
                {...rise(0.06 * i)}
                className="rounded-3xl border bg-white/70 p-8 backdrop-blur-sm"
                style={{ borderColor: `color-mix(in oklab, ${n.accent} 26%, transparent)` }}
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{
                    background: `color-mix(in oklab, ${n.accent} 16%, transparent)`,
                    color: n.accent,
                  }}
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-5 font-display text-lg text-ink">{n.title}</p>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-ink/60">{n.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
