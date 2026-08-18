import { motion, useReducedMotion } from "framer-motion";
import { dubaiConsiderations as C } from "@/content/dubai";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function DubaiConsiderationsSection() {
  const reduce = useReducedMotion();
  const rise = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.25 },
          transition: { duration: 0.7, ease: EASE, delay },
        };

  return (
    <section
      className="relative w-full overflow-hidden bg-cream px-6 py-28 sm:px-10 lg:py-36"
      aria-label="Considerations for a prospective centre owner"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46% 46% at 50% 42%, color-mix(in oklab, var(--periwinkle) 20%, transparent), transparent 72%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div className="text-center" {...rise(0)}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {C.kicker}
          </p>
          <h2 className="mx-auto mt-5 max-w-[18ch] font-display font-semibold leading-[1.05] tracking-[-0.03em] text-ink [font-size:clamp(2.2rem,5vw,3.9rem)]">
            {C.headline[0]} <span className="text-coral">{C.headline[1]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[42ch] text-base leading-relaxed text-ink/55 sm:text-lg">
            {C.sub}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {C.items.map((it, i) => (
            <motion.div
              key={it.id}
              {...rise(0.07 * i)}
              className="rounded-3xl border bg-white/70 p-8 backdrop-blur-sm"
              style={{ borderColor: `color-mix(in oklab, ${it.accent} 26%, transparent)` }}
            >
              <p
                className="font-display text-4xl leading-none"
                style={{ color: it.accent }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-4 font-display text-xl text-ink">{it.title}</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/60">{it.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...rise(0.1)}
          className="mt-10 rounded-[2rem] border border-coral/25 bg-white/75 p-10 text-center backdrop-blur-sm"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {C.termSheet.kicker}
          </p>
          <p className="mx-auto mt-4 max-w-[22ch] font-display leading-tight text-ink [font-size:clamp(1.6rem,3.2vw,2.4rem)]">
            {C.termSheet.title}
          </p>
          <p className="mx-auto mt-5 max-w-[54ch] text-base leading-relaxed text-ink/60">
            {C.termSheet.body}
          </p>
          <p className="mx-auto mt-8 max-w-[70ch] text-xs leading-relaxed text-ink/35">
            {C.termSheet.disclaimer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
