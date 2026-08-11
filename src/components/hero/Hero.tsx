import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/little-elly-logo.png";
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

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease },
});

export default function Hero() {
  const centres = useCounter(C.proof[0].value, 2000, 1.1 * 1000);

  return (
    <section
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-cream px-6 py-16 sm:px-10"
      style={{ minHeight: "max(620px, 100svh)" }}
    >
      {/* one soft warm glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(58% 46% at 50% 18%, color-mix(in oklab, var(--lightpink) 32%, transparent), transparent 72%)",
        }}
      />

      <div className="relative z-10 flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-8 text-center">
        {/* logo — centrepiece */}
        <img
          src={logo}
          alt={`${C.brand.name} — ${C.brand.tagline}`}
          className="h-32 w-auto sm:h-44"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />

        <motion.span
          className="rounded-full border border-coral/40 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-coral"
          {...rise(0.35)}
        >
          {C.badge}
        </motion.span>

        <motion.h1
          className="font-display font-semibold leading-[1.05] tracking-[-0.02em] text-ink [font-size:clamp(2.5rem,5.5vw,4.5rem)]"
          {...rise(0.5)}
        >
          {C.headline.map((w, i) => (
            <span key={w} className={i === C.headlineAccentIndex ? "text-coral" : ""}>
              {w}
              {i < C.headline.length - 1 && " "}
            </span>
          ))}
        </motion.h1>

        <motion.p className="max-w-[46ch] text-base leading-relaxed text-ink/55 sm:text-lg" {...rise(0.7)}>
          {C.eyebrow} — {C.sublineRest.trim()}
        </motion.p>

        {/* proof strip — numbers highlighted */}
        <motion.div
          className="mt-2 grid w-full max-w-2xl grid-cols-3 items-end gap-4 sm:gap-8"
          {...rise(0.9)}
        >
          <Proof value={String(centres)} label={C.proof[0].label} />
          <Proof value={String(C.proof[1].value)} label={C.proof[1].label} />
          <Proof value={`${C.proof[2].value}${C.proof[2].suffix}`} label={C.proof[2].label} />
        </motion.div>

        <motion.p
          className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink/45"
          {...rise(1.05)}
        >
          {C.proofTag}
        </motion.p>
      </div>

      {/* presenter cue */}
      <motion.div
        className="relative z-10 flex w-full flex-col items-center gap-2 pt-10"
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
    <div className="flex flex-col items-center gap-1">
      <span className="font-display font-semibold leading-none text-coral [font-size:clamp(2.25rem,5vw,3.5rem)]">
        {value}
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/45 sm:text-[11px]">
        {label}
      </span>
    </div>
  );
}
