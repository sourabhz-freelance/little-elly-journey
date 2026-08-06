import { motion } from "framer-motion";
import {
  Wallet,
  School,
  Megaphone,
  CalendarClock,
  Heart,
  Rocket,
  Users,
  Map,
  MapPin,
} from "lucide-react";
import { termsContent as T } from "@/content/terms";
import { ZoneArt, StateArt } from "./TerritoryArt";

const EASE = [0.22, 1, 0.36, 1] as const;

const ICONS = {
  Wallet,
  School,
  Megaphone,
  CalendarClock,
  Heart,
  Rocket,
  Users,
  Map,
} as const;

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
  transition: { duration: 0.7, ease: EASE, delay },
});

export default function TermsSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-cream px-6 py-28 sm:px-10 lg:py-36"
      aria-label="Terms of association"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(44% 40% at 50% 30%, color-mix(in oklab, var(--turquoise) 14%, transparent), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div className="text-center" {...rise(0)}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {T.kicker}
          </p>
          <h2 className="mx-auto mt-5 max-w-[18ch] font-display font-semibold leading-[1.05] tracking-[-0.03em] text-ink [font-size:clamp(2.2rem,5vw,4rem)]">
            {T.headline[0]} <span className="text-coral">{T.headline[1]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[40ch] text-base leading-relaxed text-ink/55 sm:text-lg">
            {T.sub}
          </p>
        </motion.div>

        {/* Two territory scales */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {T.tiers.map((t, i) => (
            <motion.div
              key={t.id}
              {...rise(0.08 * i)}
              className="overflow-hidden rounded-3xl border bg-white/70 backdrop-blur-sm"
              style={{ borderColor: `color-mix(in oklab, ${t.accent} 35%, transparent)` }}
            >
              <div className="h-44 w-full px-8 pt-6">
                {i === 0 ? <ZoneArt /> : <StateArt />}
              </div>
              <div className="flex items-center gap-5 px-8 pb-8 pt-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background: `color-mix(in oklab, ${t.accent} 16%, transparent)`,
                    color: t.accent,
                  }}
                  aria-hidden="true"
                >
                  <MapPin size={22} strokeWidth={1.7} />
                </span>
                <div>
                  <p className="font-display text-xl leading-snug text-ink">{t.label}</p>
                  <p className="mt-1 text-base text-ink/55">{t.scale}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shared terms — the model-section pill flow */}
        <div className="mt-8 flex flex-wrap items-stretch justify-center gap-3">
          {T.shared.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            return (
              <motion.div key={s.id} {...rise(0.06 * i)} className="flex items-center gap-3">
                <div className="flex items-center gap-3 rounded-full border border-ink/[0.07] bg-white/70 py-3.5 pl-3.5 pr-6 backdrop-blur-sm">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral"
                    aria-hidden="true"
                  >
                    <Icon size={19} strokeWidth={1.7} />
                  </span>
                  <p className="font-display text-base leading-snug text-ink">{s.title}</p>
                </div>
                {i < T.shared.length - 1 && (
                  <span className="font-display text-xl text-coral/50" aria-hidden="true">
                    +
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
        <motion.p className="mt-6 text-center text-sm text-ink/40" {...rise(0.1)}>
          {T.sharedNote}
        </motion.p>

        {/* Profile */}
        <motion.p
          className="mt-24 text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-coral"
          {...rise(0)}
        >
          {T.profileKicker}
        </motion.p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {T.profile.map((p, i) => {
            const Icon = ICONS[p.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={p.id}
                {...rise(0.07 * i)}
                className="flex flex-col items-start gap-4 rounded-3xl border border-ink/[0.07] bg-white/70 p-6 backdrop-blur-sm"
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full"
                  style={{
                    background: `color-mix(in oklab, ${p.accent} 16%, transparent)`,
                    color: p.accent,
                  }}
                  aria-hidden="true"
                >
                  <Icon size={20} strokeWidth={1.7} />
                </span>
                <p className="font-display text-lg leading-snug text-ink">{p.title}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Rules */}
        <motion.p
          className="mt-24 text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-coral"
          {...rise(0)}
        >
          {T.rulesKicker}
        </motion.p>
        <div className="mx-auto mt-8 max-w-3xl divide-y divide-ink/[0.07] rounded-3xl border border-ink/[0.07] bg-white/60 px-7 backdrop-blur-sm">
          {T.rules.map((r, i) => (
            <motion.div key={r} {...rise(0.05 * i)} className="flex items-center gap-4 py-4">
              <span className="font-display text-sm text-coral/60" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-relaxed text-ink/70">{r}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
