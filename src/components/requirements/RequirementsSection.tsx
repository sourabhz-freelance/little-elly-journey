import { motion, useReducedMotion } from "framer-motion";
import { Ruler, ShieldCheck, Boxes, Wallet } from "lucide-react";
import { requirementsContent as R } from "@/content/requirements";

const EASE = [0.22, 1, 0.36, 1] as const;
const ICONS = { Ruler, ShieldCheck, Boxes, Wallet } as const;

export default function RequirementsSection() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.75, ease: EASE, delay },
        };

  return (
    <section
      className="relative w-full overflow-hidden bg-cream px-6 py-28 sm:px-10 lg:py-36"
      aria-label="Master franchise requirements"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(44% 40% at 50% 30%, color-mix(in oklab, var(--lightpink) 45%, transparent), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div className="text-center" {...rise(0)}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {R.kicker}
          </p>
          <h2 className="mx-auto mt-5 max-w-[20ch] font-display font-semibold leading-[1.08] tracking-[-0.03em] text-ink [font-size:clamp(1.9rem,4.2vw,3.3rem)]">
            {R.headline[0]} <span className="text-coral">{R.headline[1]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[44ch] text-base leading-relaxed text-ink/55 sm:text-lg">
            {R.sub}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {R.groups.map((g, i) => {
            const Icon = ICONS[g.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={g.id}
                {...rise(0.08 + i * 0.08)}
                className="rounded-3xl border bg-white/80 p-7 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 sm:p-8"
                style={{ borderColor: `color-mix(in oklab, ${g.accent} 32%, transparent)` }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: `color-mix(in oklab, ${g.accent} 16%, transparent)`,
                      color: g.accent,
                    }}
                    aria-hidden="true"
                  >
                    <Icon size={21} strokeWidth={1.7} />
                  </span>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-ink">
                    {g.title}
                  </h3>
                </div>

                <ul className="mt-6 space-y-3.5">
                  {g.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[0.97rem] leading-relaxed text-ink/70">
                      <span
                        className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: g.accent }}
                        aria-hidden="true"
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          className="mt-12 text-center text-sm text-ink/45"
          {...rise(0.1)}
        >
          {R.footnote}
        </motion.p>
      </div>
    </section>
  );
}
