import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { Trail } from "@/components/brand/paw";
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

const trails = [
  { d: "M -80 210 C 260 150, 520 300, 860 350 S 1250 420, 1520 360", color: "var(--pink)" },
  { d: "M -80 700 C 300 730, 560 560, 880 470 S 1240 350, 1520 300", color: "var(--lightpink)" },
  { d: "M -80 470 C 320 440, 600 500, 900 420 S 1260 250, 1520 190", color: "var(--pink)" },
];

function Trails({ mx, my }: { mx: MotionValue<number>; my: MotionValue<number> }) {
  return (
    <motion.svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.3 }}
      style={{ x: useTransform(mx, (v) => v * -10), y: useTransform(my, (v) => v * -7) }}
    >
      {trails.map((t, i) => (
        <Trail key={i} d={t.d} duration={26 + i * 6} opacity={0.55} color={t.color} />
      ))}
    </motion.svg>
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
      className="relative flex min-h-[600px] w-full flex-col overflow-hidden bg-cream lg:h-screen"
      style={{ minHeight: "max(600px, 100svh)" }}
    >
      {/* warm radial glows */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
        style={{
          background:
            "radial-gradient(58% 52% at 88% 4%, color-mix(in oklab, var(--lightpink) 38%, transparent), transparent 72%)," +
            "radial-gradient(52% 48% at 4% 98%, color-mix(in oklab, var(--yellow) 16%, transparent), transparent 74%)",
        }}
      />
      <Trails mx={mx} my={my} />

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
      <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-8 px-6 pb-8 pt-28 text-center sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pt-24 lg:text-left">
        <div className="flex flex-col items-center lg:items-start">
        <motion.p
          className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
        >
          {C.eyebrow}
        </motion.p>

        <h1 className="mt-6 font-display font-semibold leading-[1.02] tracking-[-0.02em] text-ink [font-size:clamp(2.5rem,5.6vw,4.75rem)]">
          {C.headline.map((w, i) => {
            const accent = i === C.headlineAccentIndex;
            return (
              <span key={w} className="inline-block overflow-hidden align-bottom">
                <motion.span
                  className={`inline-block ${accent ? "text-coral" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.45 + i * 0.11, ease }}
                >
                  {w}
                </motion.span>
                {i < C.headline.length - 1 && <span>&nbsp;</span>}
              </span>
            );
          })}
        </h1>

        <motion.p
          className="mt-7 max-w-[46ch] text-base leading-relaxed text-ink/55 sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease }}
        >
          <strong className="font-semibold text-ink">{C.sublineBold}</strong>
          {C.sublineRest}
        </motion.p>
        </div>

        {/* right-hand scene */}
        <motion.div
          className="mx-auto w-full max-w-[380px] lg:max-w-[480px]"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease }}
          style={{ x: useTransform(mx, (v) => v * 10), y: useTransform(my, (v) => v * 8) }}
        >
          <PawScene className="h-auto w-full" />
        </motion.div>
      </div>


      {/* proof strip */}
      <motion.div
        className="relative z-10 w-full px-6 pb-3"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.3, ease }}
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

      {/* presenter cue */}
      <motion.div
        className="relative z-10 flex w-full flex-col items-center gap-2 pb-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
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
