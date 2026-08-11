import { motion, useReducedMotion } from "framer-motion";
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
  MapPinned,
  UserPlus,
  BadgeCheck,
} from "lucide-react";
import { supportContent as S } from "@/content/franchisorSupport";

const EASE = [0.22, 1, 0.36, 1] as const;
const YOURS_ICONS = { Search, KeyRound, HeartHandshake, ShieldCheck } as const;
const VOICE_ICONS = { Wallet, ClipboardList, Target, Timer } as const;
const GRANT_ICONS = { MapPinned, UserPlus, BadgeCheck } as const;


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

/** Four neat columns of what we carry, then the four things you carry. */
function Responsibilities() {
  const rise = useRise();

  return (
    <div className="mt-16">
      <motion.p
        className="text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-coral"
        {...rise(0)}
      >
        {S.tabs.ours.label} — {WE_COUNT}
      </motion.p>
      <motion.p
        className="mx-auto mt-4 max-w-[46ch] text-center text-sm leading-relaxed text-ink/50"
        {...rise(0.05)}
      >
        {S.tabs.ours.note}
      </motion.p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {S.clusters.map((c, ci) => {
          const start = S.clusters
            .slice(0, ci)
            .reduce((n, x) => n + x.items.length, 0);
          return (
            <motion.div
              key={c.id}
              {...rise(0.06 * ci)}
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
            </motion.div>
          );
        })}
      </div>

      {/* what sits in your kitty */}
      <motion.p
        className="mt-20 text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-coral"
        {...rise(0)}
      >
        {S.tabs.yours.label} — {S.yours.length}
      </motion.p>
      <motion.p
        className="mx-auto mt-4 max-w-[46ch] text-center text-sm leading-relaxed text-ink/50"
        {...rise(0.05)}
      >
        {S.tabs.yours.note}
      </motion.p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {S.yours.map((y, i) => {
          const Icon = YOURS_ICONS[y.icon as keyof typeof YOURS_ICONS];
          return (
            <motion.div
              key={y.id}
              {...rise(0.06 * i)}
              className="rounded-3xl border border-coral/20 bg-coral/[0.05] p-6"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-coral/10 text-coral"
                aria-hidden="true"
              >
                <Icon size={19} strokeWidth={1.7} />
              </span>
              <p className="mt-4 font-display text-lg leading-tight text-ink">{y.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">{y.line}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.p className="mt-10 text-center text-sm text-ink/45" {...rise(0.1)}>
        You carry {S.yours.length}. We carry {WE_COUNT}.
      </motion.p>
    </div>
  );
}




/** The grant — three rights drawn inside one dashed territory boundary. */
function Grant() {
  const rise = useRise();
  const reduce = useReducedMotion();

  return (
    <div className="mt-24">
      <motion.p
        className="text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-coral"
        {...rise(0)}
      >
        {S.grantKicker}
      </motion.p>
      <motion.h3
        className="mx-auto mt-4 max-w-[22ch] text-center font-display text-2xl leading-tight text-ink sm:text-[1.85rem]"
        {...rise(0.05)}
      >
        {S.grantHeadline}
      </motion.h3>

      <motion.div
        className="relative mt-12 rounded-[2.5rem] border-2 border-dashed border-coral/35 bg-coral/[0.04] px-6 pb-12 pt-14 sm:px-12"
        {...rise(0.08)}
      >
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cream px-4 py-1 font-display text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-coral">
          {S.grantBoundary}
        </span>

        {/* dotted trail linking the three rights */}
        <motion.div
          className="pointer-events-none absolute left-[22%] right-[22%] top-[6.6rem] hidden h-[3px] md:block"
          style={{
            backgroundImage: "radial-gradient(circle, var(--pink) 1.5px, transparent 1.6px)",
            backgroundSize: "14px 3px",
            backgroundRepeat: "repeat-x",
            transformOrigin: "left",
          }}
          aria-hidden="true"
          initial={reduce ? false : { scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
        />

        <div className="relative grid gap-8 md:grid-cols-3">
          {S.grant.map((g, i) => {
            const Icon = GRANT_ICONS[g.icon as keyof typeof GRANT_ICONS];
            return (
              <motion.div key={g.id} {...rise(0.08 * i)} className="text-center">
                <span
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-coral/25 bg-cream text-coral shadow-[0_10px_24px_-14px_var(--coral)]"
                  aria-hidden="true"
                >
                  <Icon size={26} strokeWidth={1.6} />
                </span>
                <p className="mt-4 font-display text-[0.72rem] font-semibold tracking-[0.24em] text-coral/60">
                  {g.step}
                </p>
                <p className="mt-2 font-display text-lg leading-snug text-ink">{g.title}</p>
                <p className="mx-auto mt-2 max-w-[30ch] text-sm leading-relaxed text-ink/55">
                  {g.line}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.p
        className="mx-auto mt-6 max-w-[58ch] text-center text-sm leading-relaxed text-ink/45"
        {...rise(0.1)}
      >
        {S.grantNote}
      </motion.p>
    </div>
  );
}

/** Where you have a voice — a round table: four decisions spoked off one hub. */
function Voice() {
  const rise = useRise();
  const reduce = useReducedMotion();

  return (
    <div className="mt-24">
      <motion.p
        className="text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-coral"
        {...rise(0)}
      >
        {S.voiceKicker}
      </motion.p>
      <motion.h3
        className="mx-auto mt-4 max-w-[22ch] text-center font-display text-2xl leading-tight text-ink sm:text-[1.85rem]"
        {...rise(0.05)}
      >
        {S.voiceHeadline}
      </motion.h3>

      {/* desktop: hub and four spokes */}
      <div className="relative mx-auto mt-14 hidden max-w-4xl lg:block">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {[
            "M50 50 L 30 22",
            "M50 50 L 70 22",
            "M50 50 L 30 78",
            "M50 50 L 70 78",
          ].map((d, i) => (
            <motion.path
              key={d}
              d={d}
              fill="none"
              stroke="var(--turquoise)"
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeDasharray="0.1 7"
              vectorEffect="non-scaling-stroke"
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.3 + i * 0.1 }}
            />
          ))}
        </svg>

        <div className="relative grid grid-cols-[1fr_13rem_1fr] items-center gap-x-6 gap-y-12">
          <motion.div {...rise(0.1)}>
            <VoiceCard v={S.voice[0]!} />
          </motion.div>

          <motion.div
            className="row-span-2 mx-auto flex h-40 w-40 flex-col items-center justify-center rounded-full border-2 border-turquoise/30 bg-white/80 text-center backdrop-blur-sm"
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="font-display text-lg leading-tight text-ink">{S.voiceHub[0]}</p>
            <p className="mt-1 font-display text-lg leading-tight text-turquoise">
              {S.voiceHub[1]}
            </p>
          </motion.div>

          <motion.div {...rise(0.16)}>
            <VoiceCard v={S.voice[1]!} />
          </motion.div>
          <motion.div {...rise(0.22)}>
            <VoiceCard v={S.voice[2]!} />
          </motion.div>
          <motion.div {...rise(0.28)}>
            <VoiceCard v={S.voice[3]!} />
          </motion.div>
        </div>
      </div>

      {/* stacked */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:hidden">
        {S.voice.map((v, i) => (
          <motion.div key={v.id} {...rise(0.06 * i)}>
            <VoiceCard v={v} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function VoiceCard({ v }: { v: (typeof S.voice)[number] }) {
  const Icon = VOICE_ICONS[v.icon as keyof typeof VOICE_ICONS];
  return (
    <div className="h-full rounded-3xl border border-turquoise/20 bg-white/80 p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-3">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full bg-turquoise/10 text-turquoise"
          aria-hidden="true"
        >
          <Icon size={19} strokeWidth={1.7} />
        </span>
        <span className="rounded-full bg-turquoise/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-turquoise">
          {v.cadence}
        </span>
      </div>
      <p className="mt-4 font-display text-lg leading-tight text-ink">{v.title}</p>
      <p className="mt-2 text-sm leading-relaxed text-ink/55">{v.line}</p>
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
