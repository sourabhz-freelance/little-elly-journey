import { motion, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  Cpu,
  Megaphone,
  ShieldCheck,
  Search,
  KeyRound,
  HeartHandshake,
  Wallet,
  ClipboardList,
  Target,
  Timer,
  Check,
} from "lucide-react";
import { supportContent as S } from "@/content/franchisorSupport";

const EASE = [0.22, 1, 0.36, 1] as const;
const CLUSTER_ICONS = { BookOpen, Cpu, Megaphone, ShieldCheck } as const;
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

/** The load-bearing beam: four heavy clusters on our side, four light ones on yours. */
function Beam() {
  const reduce = useReducedMotion();
  const rise = useRise();
  const weCarry = S.clusters.reduce((n, c) => n + c.items.length, 0);

  return (
    <div className="mt-20">
      {/* the balance */}
      <motion.div
        className="mx-auto flex max-w-2xl items-center gap-5 rounded-full border border-ink/[0.07] bg-white/70 px-6 py-4 backdrop-blur-sm"
        {...rise(0)}
      >
        <p className="shrink-0 font-display text-sm text-ink/50">
          You <span className="font-semibold text-ink">{S.yours.length}</span>
        </p>
        <div className="flex h-2.5 flex-1 overflow-hidden rounded-full bg-ink/[0.07]">
          <motion.span
            className="h-full rounded-full bg-turquoise"
            initial={reduce ? false : { width: "0%" }}
            whileInView={{ width: `${(S.yours.length / (weCarry + S.yours.length)) * 100}%` }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: EASE }}
          />
          <motion.span
            className="h-full flex-1 rounded-full bg-coral"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
          />
        </div>
        <p className="shrink-0 font-display text-sm text-ink/50">
          <span className="font-semibold text-coral">{weCarry}</span> us
        </p>
      </motion.div>

      {/* four clusters, as chips */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {S.clusters.map((c, i) => {
          const Icon = CLUSTER_ICONS[c.icon as keyof typeof CLUSTER_ICONS];
          return (
            <motion.div
              key={c.id}
              {...rise(0.08 * i)}
              className="flex flex-col rounded-[1.75rem] border bg-white/75 p-6 backdrop-blur-sm"
              style={{ borderColor: `color-mix(in oklab, ${c.accent} 32%, transparent)` }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background: `color-mix(in oklab, ${c.accent} 15%, transparent)`,
                    color: c.accent,
                  }}
                  aria-hidden="true"
                >
                  <Icon size={19} strokeWidth={1.7} />
                </span>
                <p
                  className="font-display font-semibold leading-none tracking-[-0.02em] [font-size:1.35rem]"
                  style={{ color: c.accent }}
                >
                  {c.title}
                </p>
              </div>
              <p className="mt-4 font-display text-[0.95rem] leading-snug text-ink">{c.lead}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {c.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.78rem] leading-none text-ink/65"
                    style={{ background: `color-mix(in oklab, ${c.accent} 10%, transparent)` }}
                  >
                    <Check
                      size={12}
                      strokeWidth={2.6}
                      className="shrink-0"
                      style={{ color: c.accent }}
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

      {/* the four things you carry */}
      <motion.p
        className="mt-14 text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-coral"
        {...rise(0)}
      >
        And on your side of the beam
      </motion.p>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {S.yours.map((y, i) => {
          const Icon = YOURS_ICONS[y.icon as keyof typeof YOURS_ICONS];
          return (
            <motion.div
              key={y.id}
              {...rise(0.06 * i)}
              className="flex items-center gap-3 rounded-2xl border border-ink/[0.08] bg-white/70 px-5 py-4"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral"
                aria-hidden="true"
              >
                <Icon size={17} strokeWidth={1.7} />
              </span>
              <p className="font-display text-[0.98rem] leading-snug text-ink">{y.title}</p>
            </motion.div>
          );
        })}
      </div>
      <motion.p className="mt-6 text-center text-sm text-ink/45" {...rise(0.1)}>
        {S.yoursNote}
      </motion.p>
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

        <Beam />
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
