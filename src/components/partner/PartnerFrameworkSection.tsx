import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  Megaphone,
  GraduationCap,
  BookOpen,
  Wallet,
  Headset,
  TrendingUp,
  Share2,
  Search,
  KeyRound,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import { partnerFrameworkContent as P } from "@/content/partnerFramework";
import partnerMan from "@/assets/partner-man.jpg";
import partnerWoman from "@/assets/partner-woman.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

const ICONS = { BadgeCheck, Megaphone, GraduationCap, BookOpen, Wallet, Headset } as const;
const MONEY_ICONS = {
  Wallet,
  TrendingUp,
  Share2,
  Search,
  KeyRound,
  HeartHandshake,
  ShieldCheck,
} as const;

const PHOTOS = [
  { src: partnerMan, alt: "A Little Elly master franchise partner" },
  { src: partnerWoman, alt: "A Little Elly master franchise partner" },
];

function PartnerPhoto() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % PHOTOS.length), 4000);
    return () => clearInterval(t);
  }, []);
  const p = PHOTOS[i]!;
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.img
        key={i}
        src={p.src}
        alt={p.alt}
        width={1024}
        height={1024}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        initial={reduce ? false : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: reduce ? 1 : 0 }}
        transition={{ duration: 0.9, ease: EASE }}
      />
    </AnimatePresence>
  );
}

type Support = (typeof P.supports)[number];

/** Radial geometry: angles in degrees, clockwise from the top. */
const ANGLES = [-90, -30, 30, 90, 150, 210];
const R = 38;

const pos = (i: number) => {
  const a = ((ANGLES[i] ?? 0) * Math.PI) / 180;
  return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
};

function SupportCard({ s }: { s: Support }) {
  const Icon = ICONS[s.icon as keyof typeof ICONS];
  return (
    <div
      className="flex w-[14.5rem] items-center gap-3 rounded-2xl border bg-white/80 p-4 text-left backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
      style={{ borderColor: `color-mix(in oklab, ${s.accent} 40%, transparent)` }}
    >
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
        style={{
          background: `color-mix(in oklab, ${s.accent} 16%, transparent)`,
          color: s.accent,
        }}
        aria-hidden="true"
      >
        <Icon size={20} strokeWidth={1.7} />
      </span>
      <p className="font-display text-[0.98rem] leading-snug text-ink/70">
        {(() => {
          const [before = "", ...rest] = s.title.split(s.strong);
          return (
            <>
              {before}
              <span className="font-semibold text-ink">{s.strong}</span>
              {rest.join(s.strong)}
            </>
          );
        })()}
      </p>
    </div>
  );
}

export default function PartnerFrameworkSection() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.4 },
          transition: { duration: 0.75, ease: EASE, delay },
        };

  return (
    <section
      className="relative w-full overflow-hidden bg-cream px-6 py-28 sm:px-10 lg:py-36"
      aria-label="The Happy framework for partners"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46% 42% at 50% 58%, color-mix(in oklab, var(--yellow) 22%, transparent), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div className="text-center" {...rise(0)}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {P.kicker}
          </p>
          <h2 className="mx-auto mt-5 max-w-[24ch] font-display font-semibold leading-[1.08] tracking-[-0.03em] text-ink [font-size:clamp(1.9rem,4.2vw,3.3rem)]">
            {P.headline[0]} <span className="text-coral">{P.headline[1]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[44ch] text-base leading-relaxed text-ink/55 sm:text-lg">
            {P.sub}
          </p>
        </motion.div>

        {/* Radial — desktop */}
        <div className="relative mx-auto mt-20 hidden aspect-square w-full max-w-[54rem] lg:block">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {P.supports.map((s, i) => {
              const { x, y } = pos(i);
              return (
                <motion.line
                  key={s.id}
                  x1={50}
                  y1={50}
                  x2={x}
                  y2={y}
                  stroke={s.accent}
                  strokeWidth={0.5}
                  strokeLinecap="round"
                  strokeDasharray="0.1 2"
                  vectorEffect="non-scaling-stroke"
                  initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.7 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.5 + i * 0.14 }}
                />
              );
            })}
          </svg>

          <motion.div
            className="absolute left-1/2 top-1/2 h-[17rem] w-[17rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[6px] border-coral/70 shadow-[0_24px_60px_-24px_rgba(9,9,77,0.35)]"
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <PartnerPhoto />
          </motion.div>

          {P.supports.map((s, i) => {
            const { x, y } = pos(i);
            return (
              <motion.div
                key={s.id}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
                initial={reduce ? false : { opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.6 + i * 0.14 }}
              >
                <SupportCard s={s} />
              </motion.div>
            );
          })}
        </div>

        {/* Stacked — mobile / tablet */}
        <div className="mt-16 lg:hidden">
          <motion.div
            className="relative mx-auto h-52 w-52 overflow-hidden rounded-full border-[6px] border-coral/70"
            {...rise(0.1)}
          >
            <PartnerPhoto />
          </motion.div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {P.supports.map((s, i) => (
              <motion.div key={s.id} {...rise(0.1 + i * 0.07)} className="[&>div]:w-full">
                <SupportCard s={s} />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          className="mx-auto mt-20 max-w-[24ch] text-center font-display leading-tight text-ink [font-size:clamp(1.5rem,3vw,2.4rem)]"
          {...rise(0.1)}
        >
          “We stand by you at <span className="text-coral">every angle.</span>”
        </motion.p>
      </div>
    </section>
  );
}
