import { motion, useReducedMotion } from "framer-motion";
import { Crown, Building2, KeyRound } from "lucide-react";
import { dubaiResponsibility as R } from "@/content/dubai";
import HoverReveal from "@/components/shared/HoverReveal";

const EASE = [0.22, 1, 0.36, 1] as const;

const ICONS = { Crown, Building2, KeyRound } as const;


export default function DubaiResponsibilitySection() {
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
      aria-label="Where responsibility sits"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46% 44% at 50% 40%, color-mix(in oklab, var(--lightpink) 34%, transparent), transparent 72%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div className="text-center" {...rise(0)}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {R.kicker}
          </p>
          <h2 className="mx-auto mt-5 max-w-[18ch] font-display font-semibold leading-[1.05] tracking-[-0.03em] text-ink [font-size:clamp(2.2rem,5vw,3.9rem)]">
            {R.headline[0]} <span className="text-coral">{R.headline[1]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[42ch] text-base leading-relaxed text-ink/55 sm:text-lg">
            {R.sub}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {R.columns.map((c, i) => (
            <motion.div
              key={c.id}
              {...rise(0.08 * i)}
              className="relative overflow-hidden rounded-[2rem] border bg-white/70 p-8 backdrop-blur-sm"
              style={{ borderColor: `color-mix(in oklab, ${c.accent} 28%, transparent)` }}
            >
              <span
                className="absolute inset-x-0 top-0 h-1.5"
                style={{ background: c.accent }}
                aria-hidden="true"
              />
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.28em]"
                style={{ color: c.accent }}
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 font-display text-2xl leading-snug text-ink">{c.title}</p>
              <ul className="mt-6 space-y-3">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[0.92rem] leading-relaxed text-ink/65">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: c.accent }}
                      aria-hidden="true"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
