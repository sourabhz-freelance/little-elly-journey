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
import HoverReveal from "@/components/shared/HoverReveal";

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
          <p className="mx-auto mt-6 max-w-[46ch] text-base leading-relaxed text-ink/55 sm:text-lg">
            {P.sub}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {P.clusters.map((c, i) => {
            const Icon = ICONS[c.icon as keyof typeof ICONS] ?? Sparkles;
            const featured = i === 0;
            return (
              <motion.div
                key={c.id}
                {...rise(0.05 * i)}
                className={featured ? "lg:col-span-1" : undefined}
              >
                <HoverReveal
                  accent={c.accent}
                  className="h-[248px] rounded-[1.75rem]"
                  detail={
                    <div className="flex h-full flex-col">
                      <p className="font-display text-lg leading-snug text-white">{c.title}</p>
                      <ul className="mt-3 space-y-2 overflow-hidden">
                        {c.items.map((it) => (
                          <li
                            key={it}
                            className="flex gap-2.5 text-[0.78rem] leading-snug text-white/85"
                          >
                            <span
                              className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-white/70"
                              aria-hidden="true"
                            />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  }
                >
                  <div
                    className="flex h-[248px] flex-col justify-between rounded-[1.75rem] border bg-white/70 p-7 backdrop-blur-sm"
                    style={{ borderColor: `color-mix(in oklab, ${c.accent} 24%, transparent)` }}
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className="flex h-14 w-14 items-center justify-center rounded-2xl"
                        style={{
                          background: `color-mix(in oklab, ${c.accent} 15%, transparent)`,
                          color: c.accent,
                        }}
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
                      <p className="font-display text-xl leading-snug text-ink">{c.title}</p>
                      <p className="mt-2 text-[0.92rem] leading-relaxed text-ink/55">{c.essence}</p>
                      <p
                        className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em]"
                        style={{ color: `color-mix(in oklab, ${c.accent} 70%, transparent)` }}
                      >
                        Hover for detail
                      </p>
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
