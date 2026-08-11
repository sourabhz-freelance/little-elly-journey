import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Megaphone,
  ShieldCheck,
  Search,
  KeyRound,
  HeartHandshake,
  Wallet,
  ClipboardList,
  Target,
  Timer,
} from "lucide-react";
import { supportContent as S } from "@/content/franchisorSupport";

const EASE = [0.22, 1, 0.36, 1] as const;
const YOURS_ICONS = { Search, KeyRound, HeartHandshake, ShieldCheck } as const;
const VOICE_ICONS = { Wallet, ClipboardList, Target, Timer } as const;

const useRise = () => {
  const reduce = useReducedMotion();
  return (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.75, ease: EASE, delay },
        };
};

const WE_COUNT = S.clusters.reduce((n, c) => n + c.items.length, 0);

/** Two tabs: what sits in our kitty, and what sits in yours. */
function Responsibilities() {
  const reduce = useReducedMotion();
  const rise = useRise();
  const [tab, setTab] = useState<"ours" | "yours">("ours");

  const tabs = [
    { id: "ours" as const, label: S.tabs.ours.label, count: WE_COUNT },
    { id: "yours" as const, label: S.tabs.yours.label, count: S.yours.length },
  ];

  return (
    <div className="mt-16">
      {/* the switch */}
      <motion.div className="flex justify-center" {...rise(0)}>
        <div
          className="flex gap-1 rounded-full border border-ink/[0.08] bg-white/70 p-1.5 backdrop-blur-sm"
          role="tablist"
          aria-label="Who carries what"
        >
          {tabs.map((t) => {
            const on = tab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setTab(t.id)}
                className={`relative rounded-full px-6 py-2.5 font-display text-[0.95rem] leading-none transition-colors duration-300 sm:px-8 ${
                  on ? "text-cream" : "text-ink/55 hover:text-ink"
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="carry-tab"
                    className="absolute inset-0 rounded-full bg-coral"
                    transition={{ duration: 0.45, ease: EASE }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  {t.label}
                  <span
                    className={`rounded-full px-2 py-0.5 text-[0.72rem] font-semibold tabular-nums ${
                      on ? "bg-cream/25" : "bg-ink/[0.06]"
                    }`}
                  >
                    {t.count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      <p className="mx-auto mt-6 max-w-[44ch] text-center text-sm leading-relaxed text-ink/50">
        {tab === "ours" ? S.tabs.ours.note : S.tabs.yours.note}
      </p>

      {/* the panel */}
      <div className="mt-10">
        <AnimatePresence mode="wait" initial={false}>
          {tab === "ours" ? (
            <motion.div
              key="ours"
              role="tabpanel"
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -10 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              {S.clusters.map((c, ci) => {
                const start = S.clusters
                  .slice(0, ci)
                  .reduce((n, x) => n + x.items.length, 0);
                return (
                  <div
                    key={c.id}
                    className="rounded-3xl border bg-white/70 p-6 backdrop-blur-sm"
                    style={{ borderColor: `color-mix(in oklab, ${c.accent} 26%, transparent)` }}
                  >
                    <div className="flex items-baseline justify-between">
                      <p className="font-display text-lg leading-none" style={{ color: c.accent }}>
                        {c.title}
                      </p>
                      <span
                        className="rounded-full px-2 py-0.5 text-[0.7rem] font-semibold tabular-nums"
                        style={{
                          background: `color-mix(in oklab, ${c.accent} 12%, transparent)`,
                          color: c.accent,
                        }}
                      >
                        {c.items.length}
                      </span>
                    </div>
                    <p className="mt-2 text-[0.82rem] leading-relaxed text-ink/45">{c.lead}</p>
                    <ul className="mt-5 space-y-3">
                      {c.items.map((item, i) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span
                            className="mt-[3px] w-6 shrink-0 font-display text-[0.7rem] font-semibold tabular-nums"
                            style={{ color: c.accent }}
                          >
                            {String(start + i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[0.9rem] leading-snug text-ink/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="yours"
              role="tabpanel"
              className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -10 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              {S.yours.map((y, i) => {
                const Icon = YOURS_ICONS[y.icon as keyof typeof YOURS_ICONS];
                return (
                  <div
                    key={y.id}
                    className="flex items-start gap-4 rounded-3xl border border-coral/20 bg-coral/[0.05] px-6 py-6"
                  >
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral"
                      aria-hidden="true"
                    >
                      <Icon size={19} strokeWidth={1.7} />
                    </span>
                    <div>
                      <p className="font-display text-lg leading-tight text-ink">
                        <span className="mr-2 text-coral/60 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {y.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink/55">{y.line}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="mt-8 text-center text-sm text-ink/45">
        You carry {S.yours.length}. We carry {WE_COUNT}.
      </p>
    </div>
  );
}



function Grant() {
  const rise = useRise();
  return (
    <motion.div
      className="mt-24 rounded-[2.5rem] border border-coral/20 bg-coral/[0.05] px-6 py-12 sm:px-12"
      {...rise(0)}
    >
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
        {S.grantKicker}
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {S.grant.map((g, i) => (
          <motion.p
            key={g}
            {...rise(0.07 * i)}
            className="rounded-2xl bg-white/70 px-6 py-6 font-display text-[1.02rem] leading-snug text-ink"
          >
            {g}
          </motion.p>
        ))}
      </div>
      <motion.p className="mt-6 text-center text-sm text-ink/45" {...rise(0.1)}>
        {S.grantNote}
      </motion.p>
    </motion.div>
  );
}

function Voice() {
  const rise = useRise();
  return (
    <div className="mt-24">
      <motion.p
        className="text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-coral"
        {...rise(0)}
      >
        {S.voiceKicker}
      </motion.p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {S.voice.map((v, i) => {
          const Icon = VOICE_ICONS[v.icon as keyof typeof VOICE_ICONS];
          return (
            <motion.div
              key={v.id}
              {...rise(0.06 * i)}
              className="rounded-3xl border border-ink/[0.08] bg-white/70 p-6"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-turquoise/10 text-turquoise"
                aria-hidden="true"
              >
                <Icon size={19} strokeWidth={1.7} />
              </span>
              <p className="mt-4 font-display text-lg leading-tight text-ink">{v.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">{v.line}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function TermTimeline() {
  const reduce = useReducedMotion();
  const rise = useRise();
  return (
    <div className="mt-24">
      <motion.p
        className="text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-coral"
        {...rise(0)}
      >
        {S.termKicker}
      </motion.p>

      <div className="relative mt-12">
        <motion.div
          className="pointer-events-none absolute left-3 top-[10px] hidden h-[3px] lg:block"
          style={{
            right: "calc(12.5% + 6rem)",
            backgroundImage: "radial-gradient(circle, var(--pink) 1.5px, transparent 1.6px)",
            backgroundSize: "14px 3px",
            backgroundRepeat: "repeat-x",
            opacity: 0.75,
            transformOrigin: "left",
          }}
          aria-hidden="true"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.4, ease: EASE }}
        />

        <div className="grid gap-8 lg:grid-cols-4">
          {S.term.map((t, i) => (
            <motion.div key={t.id} {...rise(0.08 * i)} className="text-center lg:text-left">
              <span
                className="mx-auto flex h-6 w-6 items-center justify-center rounded-full border-[3px] border-coral bg-cream lg:mx-0"
                aria-hidden="true"
              />
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-coral/70">
                {t.year}
              </p>
              <p className="mt-2 font-display text-lg leading-tight text-ink">{t.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">{t.line}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FranchisorSupportSection() {
  const rise = useRise();
  return (
    <section
      className="relative w-full overflow-hidden bg-cream px-6 py-28 sm:px-10 lg:py-36"
      aria-label="What the Franchisor carries"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46% 42% at 50% 24%, color-mix(in oklab, var(--yellow) 22%, transparent), transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div className="text-center" {...rise(0)}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {S.kicker}
          </p>
          <h2 className="mx-auto mt-5 max-w-[22ch] font-display font-semibold leading-[1.06] tracking-[-0.03em] text-ink [font-size:clamp(1.9rem,4.4vw,3.3rem)]">
            {S.headline[0]} <span className="text-coral">{S.headline[1]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[46ch] text-base leading-relaxed text-ink/55 sm:text-lg">
            {S.sub}
          </p>
        </motion.div>

        <Responsibilities />
        <Grant />
        <Voice />
        <TermTimeline />

        <motion.p className="mt-16 text-center text-sm text-ink/40" {...rise(0.1)}>
          {S.disclaimer}
        </motion.p>
      </div>
    </section>
  );
}
