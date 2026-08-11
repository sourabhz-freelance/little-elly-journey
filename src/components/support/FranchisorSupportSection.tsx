import { useState } from "react";
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

/** Flattened list of the nineteen obligations, numbered in cluster order. */
const STONES = S.clusters.flatMap((c) =>
  c.items.map((label) => ({ label, accent: c.accent, cluster: c.title })),
);

/** Geometry: stones sit on a shallow ellipse arc, computed once (SSR-stable). */
const ARCH = STONES.map((s, i) => {
  const t = 176 - (i * (176 - 4)) / (STONES.length - 1);
  const r = (t * Math.PI) / 180;
  return { ...s, x: 500 + 452 * Math.cos(r), y: 296 - 196 * Math.sin(r) };
});

const ARC_PATH = (() => {
  const pts = Array.from({ length: 97 }, (_, k) => {
    const r = ((180 - (k * 180) / 96) * Math.PI) / 180;
    return `${(500 + 452 * Math.cos(r)).toFixed(1)},${(296 - 196 * Math.sin(r)).toFixed(1)}`;
  });
  return `M ${pts.join(" L ")}`;
})();

/** The arch: nineteen numbered stones hold up the four things you carry. */
function Arch() {
  const reduce = useReducedMotion();
  const rise = useRise();
  const [active, setActive] = useState<number | null>(null);
  const weCarry = STONES.length;
  const shown = active === null ? null : ARCH[active];

  return (
    <div className="mt-20">
      {/* legend — the arithmetic, stated */}
      <motion.div className="flex flex-wrap items-center justify-center gap-2.5" {...rise(0)}>
        {S.clusters.map((c) => (
          <span
            key={c.id}
            className="flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.78rem] leading-none"
            style={{
              background: `color-mix(in oklab, ${c.accent} 11%, transparent)`,
              color: c.accent,
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: c.accent }} />
            {c.title}
            <span className="font-semibold">{c.items.length}</span>
          </span>
        ))}
        <span className="rounded-full bg-ink/[0.06] px-3.5 py-1.5 text-[0.78rem] leading-none text-ink/60">
          = <span className="font-semibold text-ink">{weCarry}</span> obligations, ours
        </span>
      </motion.div>

      {/* ---- desktop: the arch ---- */}
      <div className="mt-10 hidden lg:block">
        <div className="relative w-full" style={{ paddingBottom: "29%" }}>
          <svg
            viewBox="0 60 1000 290"
            className="absolute inset-0 h-full w-full"
            fill="none"
            aria-hidden="true"
          >
            <path
              d={ARC_PATH}
              stroke="var(--pink)"
              strokeWidth={3}
              strokeLinecap="round"
              strokeDasharray="0.1 13"
              vectorEffect="non-scaling-stroke"
              opacity={0.85}
            />
          </svg>

          {ARCH.map((s, i) => (
            <motion.button
              key={s.label}
              type="button"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive((a: number | null) => (a === i ? null : a))}
              onFocus={() => setActive(i)}
              onBlur={() => setActive((a: number | null) => (a === i ? null : a))}
              className="absolute flex h-[clamp(2rem,3.4vw,2.9rem)] w-[clamp(2rem,3.4vw,2.9rem)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[0.7rem] font-display text-[0.8rem] font-semibold tabular-nums outline-none transition-transform duration-300 hover:-translate-y-[62%] focus-visible:-translate-y-[62%]"
              style={{
                left: `${(s.x / 1000) * 100}%`,
                top: `${((s.y - 60) / 290) * 100}%`,
                background:
                  active === i
                    ? s.accent
                    : `color-mix(in oklab, ${s.accent} 13%, var(--cream))`,
                color: active === i ? "var(--cream)" : s.accent,
                boxShadow:
                  active === i
                    ? `0 10px 24px -10px color-mix(in oklab, ${s.accent} 70%, transparent)`
                    : "none",
                border: `1px solid color-mix(in oklab, ${s.accent} 45%, transparent)`,
              }}
              initial={reduce ? false : { opacity: 0, y: 14, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.35 + i * 0.055 }}
              aria-label={`${s.cluster}: ${s.label}`}
            >
              {String(i + 1).padStart(2, "0")}
            </motion.button>
          ))}
        </div>

        {/* the caption — one obligation at a time */}
        <div className="-mt-2 flex h-8 items-center justify-center">
          <p
            className="font-display text-lg leading-none transition-colors duration-300"
            style={{ color: shown ? shown.accent : "color-mix(in oklab, var(--ink) 35%, transparent)" }}
          >
            {shown ? `${shown.cluster} — ${shown.label}` : "Hover a stone to read what it carries"}
          </p>
        </div>

        {/* the deck you stand on */}
        <motion.div
          className="mt-6 grid grid-cols-4 gap-px overflow-hidden rounded-2xl border border-coral/20 bg-coral/15"
          {...rise(0.15)}
        >
          {S.yours.map((y) => {
            const Icon = YOURS_ICONS[y.icon as keyof typeof YOURS_ICONS];
            return (
              <div key={y.id} className="flex items-center gap-3 bg-cream px-5 py-5">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral"
                  aria-hidden="true"
                >
                  <Icon size={17} strokeWidth={1.7} />
                </span>
                <p className="font-display text-[0.98rem] leading-snug text-ink">{y.title}</p>
              </div>
            );
          })}
        </motion.div>
        <motion.p className="mt-4 text-center text-sm text-ink/45" {...rise(0.2)}>
          You carry {S.yours.length}. The arch above is ours — {weCarry} of them.
        </motion.p>
      </div>

      {/* ---- mobile: the same arch, rotated into a spine ---- */}
      <div className="mt-10 lg:hidden">
        <ol className="relative ml-1 border-l-2 border-dotted border-pink/70 pl-5">
          {ARCH.map((s, i) => (
            <motion.li
              key={s.label}
              {...rise(0.03 * i)}
              className="relative flex items-center gap-3 py-2"
            >
              <span
                className="absolute -left-[1.6rem] h-2.5 w-2.5 rounded-full"
                style={{ background: s.accent }}
                aria-hidden="true"
              />
              <span
                className="w-7 shrink-0 font-display text-[0.72rem] font-semibold tabular-nums"
                style={{ color: s.accent }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[0.95rem] leading-snug text-ink">{s.label}</span>
            </motion.li>
          ))}
        </ol>

        <motion.div className="mt-8 grid gap-3 sm:grid-cols-2" {...rise(0.1)}>
          {S.yours.map((y) => {
            const Icon = YOURS_ICONS[y.icon as keyof typeof YOURS_ICONS];
            return (
              <div
                key={y.id}
                className="flex items-center gap-3 rounded-2xl border border-coral/20 bg-coral/[0.05] px-5 py-4"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral"
                  aria-hidden="true"
                >
                  <Icon size={17} strokeWidth={1.7} />
                </span>
                <p className="font-display text-[0.98rem] leading-snug text-ink">{y.title}</p>
              </div>
            );
          })}
        </motion.div>
        <p className="mt-5 text-center text-sm text-ink/45">
          You carry {S.yours.length}. The {weCarry} above are ours.
        </p>
      </div>
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

        <Arch />
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
