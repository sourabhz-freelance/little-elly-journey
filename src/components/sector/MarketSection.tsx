import { motion } from "framer-motion";
import { marketContent as M } from "@/content/sector";
import { useCountUp } from "./useCountUp";

const EASE = [0.22, 1, 0.36, 1] as const;

function Stat({ s, delay }: { s: (typeof M.stats)[number]; delay: number }) {
  const { ref, text } = useCountUp(s.value, s.decimals);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className="rounded-3xl border border-ink/[0.07] bg-white/70 p-8 backdrop-blur-sm"
    >
      <p className="font-display font-semibold leading-none tracking-[-0.03em] text-coral [font-size:clamp(2.6rem,5vw,4rem)]">
        {s.prefix}
        <span ref={ref}>{text}</span>
        {s.suffix}
      </p>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/40">
        {s.label}
      </p>
      <p className="mt-2 text-base leading-relaxed text-ink/60">{s.note}</p>
      <p className="mt-4 text-xs text-ink/35">{s.source}</p>
    </motion.div>
  );
}

/** Who runs the market: 100 dots, only a handful branded. */
function CompositionPanel() {
  const C = M.composition;
  const dots = Array.from({ length: 100 }, (_, i) => i < C.brandedOf100);

  return (
    <div className="rounded-3xl border border-ink/[0.07] bg-white/70 p-8 backdrop-blur-sm sm:p-10">
      <p className="font-display text-xl text-ink sm:text-2xl">{C.title}</p>
      <p className="mt-3 max-w-[56ch] text-base leading-relaxed text-ink/55">{C.lead}</p>

      <div className="mt-10 grid gap-10 md:grid-cols-[auto_minmax(0,1fr)] md:items-center">
        <div className="grid w-fit grid-cols-10 gap-[6px]" aria-hidden="true">
          {dots.map((branded, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.35, ease: EASE, delay: 0.004 * i }}
              className={`h-[13px] w-[13px] rounded-[4px] sm:h-4 sm:w-4 ${
                branded ? "bg-coral" : "bg-ink/[0.09]"
              }`}
            />
          ))}
        </div>

        <div>
          <div className="flex items-baseline gap-3">
            <span className="font-display font-semibold leading-none text-coral [font-size:clamp(2.4rem,4.5vw,3.4rem)]">
              {C.brandedOf100}
              <span className="text-ink/25"> / 100</span>
            </span>
          </div>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-coral/80">
            {C.brandedLabel}
          </p>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/35">
            {C.independentLabel}
          </p>
          <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-ink/60">{C.takeaway}</p>
        </div>
      </div>

      <p className="mt-8 text-xs leading-relaxed text-ink/35">{C.caption}</p>
    </div>
  );
}

export default function MarketSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-cream px-6 py-28 sm:px-10 lg:py-36"
      aria-label="The preschool sector opportunity"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[55%]"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 0%, color-mix(in oklab, var(--yellow) 22%, transparent), transparent 72%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {M.kicker}
          </p>
          <h2 className="mx-auto mt-5 max-w-[20ch] font-display font-semibold leading-[1.05] tracking-[-0.03em] text-ink [font-size:clamp(2.2rem,5vw,4rem)]">
            {M.headline[0]} <span className="text-coral">{M.headline[1]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[52ch] text-base leading-relaxed text-ink/55 sm:text-lg">
            {M.sub}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {M.stats.map((s, i) => (
            <Stat key={s.id} s={s} delay={0.1 + i * 0.15} />
          ))}
        </div>

        <div className="mt-8">
          <CompositionPanel />
        </div>
      </div>
    </section>
  );
}
