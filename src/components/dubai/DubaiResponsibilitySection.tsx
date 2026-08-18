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
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {R.columns.map((c, i) => {
            const Icon = ICONS[c.icon as keyof typeof ICONS] ?? Crown;
            return (
              <motion.div key={c.id} {...rise(0.08 * i)}>
                <HoverReveal
                  accent={c.accent}
                  className="h-[300px] rounded-[2rem]"
                  detail={
                    <div className="flex h-full flex-col">
                      <p className="font-display text-lg text-white">{c.title}</p>
                      <ul className="mt-3 space-y-2 overflow-hidden">
                        {c.points.map((p) => (
                          <li
                            key={p}
                            className="flex gap-2.5 text-[0.78rem] leading-snug text-white/85"
                          >
                            <span
                              className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-white/70"
                              aria-hidden="true"
                            />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  }
                >
                  <div
                    className="relative flex h-[300px] flex-col justify-between overflow-hidden rounded-[2rem] border bg-white/70 p-8 backdrop-blur-sm"
                    style={{ borderColor: `color-mix(in oklab, ${c.accent} 28%, transparent)` }}
                  >
                    <span
                      className="absolute inset-x-0 top-0 h-1.5"
                      style={{ background: c.accent }}
                      aria-hidden="true"
                    />
                    <div className="flex items-start justify-between">
                      <span
                        className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                        style={{ background: c.accent }}
                        aria-hidden="true"
                      >
                        <Icon className="h-6 w-6" />
                      </span>
                      <span
                        className="font-display text-2xl leading-none"
                        style={{ color: `color-mix(in oklab, ${c.accent} 35%, transparent)` }}
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <p className="font-display text-2xl leading-snug text-ink">{c.title}</p>
                      <p
                        className="mt-1 text-[0.9rem] font-medium"
                        style={{ color: `color-mix(in oklab, ${c.accent} 80%, var(--ink))` }}
                      >
                        {c.role}
                      </p>
                      <p className="mt-3 text-[0.92rem] leading-relaxed text-ink/55">{c.essence}</p>
                    </div>
                  </div>
                </HoverReveal>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

