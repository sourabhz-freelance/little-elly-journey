import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { CreativePaw, PawPrint, Trail } from "@/components/brand/paw";
import { LogoLockup } from "@/components/brand/LogoLockup";
import { heroContent as C } from "@/content/hero";

/* ---------------------------------- bits --------------------------------- */

const ease = [0.22, 1, 0.36, 1] as const;

function useCounter(target: number, duration = 1800, delay = 500) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now() + delay;
    const tick = (t: number) => {
      const p = Math.min(Math.max((t - start) / duration, 0), 1);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, delay]);
  return n;
}

const floatingPaws = [
  { x: "6%", y: "14%", size: 120, rot: -18, color: "var(--coral)", o: 0.08, d: 0, depth: 1 },
  { x: "22%", y: "72%", size: 88, rot: 24, color: "var(--turquoise)", o: 0.09, d: 1.4, depth: -1 },
  { x: "44%", y: "8%", size: 70, rot: 8, color: "var(--periwinkle)", o: 0.09, d: 2.2, depth: 1 },
  { x: "68%", y: "80%", size: 104, rot: -12, color: "var(--orange)", o: 0.07, d: 0.8, depth: -1 },
  { x: "88%", y: "22%", size: 92, rot: 30, color: "var(--cyan)", o: 0.08, d: 2.8, depth: 1 },
  { x: "78%", y: "56%", size: 62, rot: -26, color: "var(--pink)", o: 0.1, d: 1.9, depth: -1 },
  { x: "35%", y: "38%", size: 54, rot: 14, color: "var(--yellow)", o: 0.1, d: 3.4, depth: 1 },
];

function FloatingPaws({ mx, my }: { mx: MotionValue<number>; my: MotionValue<number> }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {floatingPaws.map((p, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            x: useTransform(mx, (v) => v * 22 * p.depth),
            y: useTransform(my, (v) => v * 16 * p.depth),
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: p.o, y: [0, -14, 0], rotate: [p.rot, p.rot + 6, p.rot] }}
            transition={{
              opacity: { duration: 1.4, delay: 0.6 + i * 0.08 },
              y: { duration: 12 + p.d, repeat: Infinity, ease: "easeInOut", delay: p.d },
              rotate: { duration: 16 + p.d, repeat: Infinity, ease: "easeInOut", delay: p.d },
            }}
          >
            <CreativePaw mono={p.color} className="h-full w-full" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

const trails = [
  "M -60 120 C 220 60, 420 240, 700 300 S 1000 380, 1180 330",
  "M -40 620 C 260 640, 460 470, 720 400 S 1010 300, 1200 250",
  "M 300 -60 C 380 140, 560 240, 760 330 S 980 470, 1120 620",
  "M 1240 60 C 1040 160, 900 220, 780 320 S 620 470, 520 700",
];

function Trails({ mx, my }: { mx: MotionValue<number>; my: MotionValue<number> }) {
  return (
    <motion.svg
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.3 }}
      style={{ x: useTransform(mx, (v) => v * -18), y: useTransform(my, (v) => v * -12) }}
    >
      {trails.map((d, i) => (
        <Trail
          key={i}
          d={d}
          duration={22 + i * 5}
          opacity={i % 2 ? 0.5 : 0.75}
          color={i === 2 ? "var(--lightpink)" : "var(--pink)"}
        />
      ))}
    </motion.svg>
  );
}

/* --------------------------------- scene --------------------------------- */

function HandScene({ mx, my }: { mx: MotionValue<number>; my: MotionValue<number> }) {
  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-[240px] sm:max-w-[360px] lg:max-w-[520px]"
      style={{ x: useTransform(mx, (v) => v * 26), y: useTransform(my, (v) => v * 20) }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.5, ease }}
    >
      {/* pulsing glow */}
      <motion.div
        className="absolute inset-[6%] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--coral) 26%, transparent), transparent 68%)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* the welcoming paw — breathing, offset up-right to leave room for the trail */}
      <motion.div
        className="absolute left-[56%] top-[44%] h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.035, 1] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <CreativePaw className="h-full w-full drop-shadow-[0_14px_22px_rgba(232,82,83,0.14)]" />
      </motion.div>

      {/* three prints walking up (lower-left → base of the big paw), growing as they arrive */}
      {[
        { l: "5%", t: "84%", s: "9%", r: -26 },
        { l: "14%", t: "73%", s: "11%", r: -16 },
        { l: "24%", t: "63%", s: "13%", r: -8 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: p.l, top: p.t, width: p.s, height: p.s, rotate: p.r }}
          animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -6] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: i * 0.55, times: [0, 0.2, 0.7, 1], ease: "easeInOut" }}
        >
          <PawPrint className="h-full w-full" color="var(--coral)" />
        </motion.div>
      ))}

      {/* the seat kept open — endpoint of the trail, just beside the big paw */}
      <motion.div
        className="absolute left-[19%] top-[50%] h-[15%] w-[15%] -rotate-2"
        animate={{ opacity: [0.4, 0.9, 0.4], scale: [1, 1.06, 1] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <PawPrint className="h-full w-full" color="var(--coral)" dashed />
      </motion.div>
    </motion.div>
  );
}

/* ---------------------------------- hero --------------------------------- */

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.6 });
  const my = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.6 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      rawX.set(((e.clientX - r.left) / r.width - 0.5) * 2);
      rawY.set(((e.clientY - r.top) / r.height - 0.5) * 2);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [rawX, rawY]);

  const centres = useCounter(C.proof[0].value, 2000, 900);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[640px] w-full flex-col overflow-hidden bg-cream lg:h-screen"
      style={{ minHeight: "max(640px, 100svh)" }}
    >
      {/* warm radial glows */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
        style={{
          background:
            "radial-gradient(60% 55% at 88% 6%, color-mix(in oklab, var(--lightpink) 70%, transparent), transparent 70%)," +
            "radial-gradient(55% 50% at 6% 96%, color-mix(in oklab, var(--yellow) 32%, transparent), transparent 72%)",
        }}
      />
      <Trails mx={mx} my={my} />
      <FloatingPaws mx={mx} my={my} />

      {/* header */}
      <motion.header
        className="absolute inset-x-0 top-0 z-20 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6 sm:px-10"
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease }}
      >
        <LogoLockup />
        <span className="hidden shrink-0 rounded-full border border-coral/40 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-coral sm:inline-block">
          {C.badge}
        </span>
      </motion.header>

      {/* content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-8 px-6 pb-8 pt-28 sm:px-10 lg:grid-cols-[55%_45%] lg:gap-10 lg:pb-16">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.p
            className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
          >
            {C.eyebrow}
          </motion.p>

          <h1 className="mt-5 font-display font-semibold leading-[1] tracking-[-0.02em] text-ink [font-size:clamp(2.75rem,7.2vw,5.75rem)]">
            {C.headline.map((w, i) => {
              const accent = i === C.headlineAccentIndex;
              return (
                <span key={w} className="inline-block overflow-hidden align-bottom">
                  <motion.span
                    className={`relative inline-block ${accent ? "text-coral" : ""}`}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.45 + i * 0.11, ease }}
                  >
                    {w}
                    {accent && (
                      <svg
                        viewBox="0 0 300 26"
                        className="absolute -bottom-1 left-0 h-[0.28em] w-full overflow-visible"
                        aria-hidden="true"
                      >
                        <motion.path
                          d="M4 17 C 60 4, 130 26, 196 11 C 232 3, 268 6, 296 14"
                          fill="none"
                          stroke="var(--yellow)"
                          strokeWidth="9"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.1, delay: 1.25, ease }}
                        />
                      </svg>
                    )}
                  </motion.span>
                  {i < C.headline.length - 1 && <span>&nbsp;</span>}
                </span>
              );
            })}
          </h1>

          <motion.p
            className="mx-auto mt-7 max-w-[32ch] text-base leading-relaxed text-ink/55 sm:text-lg lg:mx-0"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease }}
          >
            <strong className="font-semibold text-ink">{C.sublineBold}</strong>
            {C.sublineRest}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col items-center gap-5 sm:flex-row sm:gap-7 lg:justify-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease }}
          >
            <a
              href="#opportunity"
              className="group inline-flex items-center gap-2.5 rounded-full bg-coral px-7 py-4 text-sm font-semibold text-cream shadow-[0_14px_30px_-10px_rgba(232,82,83,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-12px_rgba(232,82,83,0.8)]"
            >
              {C.primaryCta}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#prospectus"
              className="text-sm font-medium text-ink/70 underline decoration-coral/40 underline-offset-[6px] transition-colors hover:text-coral hover:decoration-coral"
            >
              {C.secondaryCta}
            </a>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2">
          <HandScene mx={mx} my={my} />
        </div>
      </div>

      {/* proof strip */}
      <motion.div
        className="relative z-10 w-full px-6 pb-3"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.4, ease }}
      >
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center">
          <Proof value={String(centres)} label={C.proof[0].label} />
          <Dot />
          <Proof value={String(C.proof[1].value)} label={C.proof[1].label} />
          <Dot />
          <Proof value={`${C.proof[2].value}${C.proof[2].suffix}`} label={C.proof[2].label} />
          <Dot />
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/45">{C.proofTag}</span>
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        className="relative z-10 flex w-full flex-col items-center gap-2 pb-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <div className="flex h-7 w-[18px] justify-center rounded-full border border-ink/25 pt-1.5">
          <motion.span
            className="h-1.5 w-[3px] rounded-full bg-coral"
            animate={{ y: [0, 7, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-ink/40">{C.scrollCue}</span>
      </motion.div>
    </section>
  );
}

function Proof({ value, label }: { value: string; label: string }) {
  return (
    <span className="inline-flex items-baseline gap-1.5">
      <span className="font-display text-xl font-semibold text-coral sm:text-2xl">{value}</span>
      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/45">{label}</span>
    </span>
  );
}

function Dot() {
  return <span className="h-1.5 w-1.5 rounded-full bg-pink" />;
}
