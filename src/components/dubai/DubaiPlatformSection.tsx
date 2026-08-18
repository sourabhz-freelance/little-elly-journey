import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  ClipboardList,
  Megaphone,
  MonitorSmartphone,
  ShieldCheck,
  Landmark,
} from "lucide-react";
import { dubaiPlatform as P } from "@/content/dubai";

const EASE = [0.22, 1, 0.36, 1] as const;

const ICONS = {
  Sparkles,
  GraduationCap,
  ClipboardList,
  Megaphone,
  MonitorSmartphone,
  ShieldCheck,
  Landmark,
} as const;

export default function DubaiPlatformSection() {
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

  const total = P.clusters.reduce((n, c) => n + c.items.length, 0);

  return (
    <section
      className="relative w-full overflow-hidden bg-cream px-6 py-28 sm:px-10 lg:py-36"
      aria-label="What the platform carries"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[50%]"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 0%, color-mix(in oklab, var(--turquoise) 14%, transparent), transparent 72%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div className="text-center" {...rise(0)}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {P.kicker}
          </p>
          <h2 className="mx-auto mt-5 max-w-[18ch] font-display font-semibold leading-[1.05] tracking-[-0.03em] text-ink [font-size:clamp(2.2rem,5vw,3.9rem)]">
            {P.headline[0]} <span className="text-coral">{P.headline[1]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[48ch] text-base leading-relaxed text-ink/55 sm:text-lg">
            {P.sub}
          </p>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/35">
            {total} things we carry
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {P.clusters.map((c, i) => {
            const Icon = ICONS[c.icon as keyof typeof ICONS] ?? Sparkles;
            return (
              <motion.div
                key={c.id}
                {...rise(0.06 * i)}
                className="flex flex-col rounded-3xl border bg-white/70 p-8 backdrop-blur-sm"
                style={{ borderColor: `color-mix(in oklab, ${c.accent} 26%, transparent)` }}
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{
                    background: `color-mix(in oklab, ${c.accent} 16%, transparent)`,
                    color: c.accent,
                  }}
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-5 font-display text-lg leading-snug text-ink">{c.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {c.items.map((it) => (
                    <li key={it} className="flex gap-3 text-[0.9rem] leading-relaxed text-ink/60">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: c.accent }}
                        aria-hidden="true"
                      />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
