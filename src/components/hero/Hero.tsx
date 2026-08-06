import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LogoLockup } from "@/components/brand/LogoLockup";
import { heroContent as C } from "@/content/hero";

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

export default function Hero() {
  const centres = useCounter(C.proof[0].value, 2000, 900);

  return (
    <section
      className="relative flex w-full flex-col overflow-hidden bg-cream"
      style={{ minHeight: "max(600px, 100svh)" }}
    >
      {/* one soft warm glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 6%, color-mix(in oklab, var(--lightpink) 30%, transparent), transparent 74%)",
        }}
      />

      {/* header */}
      <motion.header
        className="relative z-20 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6 sm:px-10"
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease }}
      >
        <LogoLockup />
        <span className="hidden shrink-0 rounded-full border border-coral/40 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-coral sm:inline-block">
          {C.badge}
        </span>
      </motion.header>

      {/* centered content */}
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-7 px-6 py-16 text-center sm:px-10">
        <motion.p
          className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
        >
          {C.eyebrow}
        </motion.p>

        <motion.h1
          className="font-display font-semibold leading-[1.04] tracking-[-0.02em] text-ink [font-size:clamp(2.75rem,6vw,5rem)]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
        >
          {C.headline.map((w, i) => (
            <span key={w} className={i === C.headlineAccentIndex ? "text-coral" : ""}>
              {w}
              {i < C.headline.length - 1 && " "}
            </span>
          ))}
        </motion.h1>

        <motion.p
          className="max-w-[46ch] text-base leading-relaxed text-ink/55 sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease }}
        >
          <strong className="font-semibold text-ink">{C.sublineBold}</strong>
          {C.sublineRest}
        </motion.p>
      </div>

      {/* proof strip */}
      <motion.div
        className="relative z-10 w-full px-6 pb-4"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1, ease }}
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
        className="relative z-10 flex w-full flex-col items-center gap-2 pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
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
