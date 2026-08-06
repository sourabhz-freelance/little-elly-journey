import { motion } from "framer-motion";
import { modelContent as MO } from "@/content/sector";

const EASE = [0.22, 1, 0.36, 1] as const;

function Donut({ pct, accent }: { pct: number; accent: string }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 130 130" className="h-32 w-32 shrink-0" aria-hidden="true">
      <circle
        cx={65}
        cy={65}
        r={r}
        fill="none"
        stroke="var(--ink)"
        strokeOpacity={0.08}
        strokeWidth={14}
      />
      <motion.circle
        cx={65}
        cy={65}
        r={r}
        fill="none"
        stroke={accent}
        strokeWidth={14}
        strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        whileInView={{ strokeDashoffset: c * (1 - pct / 100) }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.2, ease: EASE }}
        transform="rotate(-90 65 65)"
      />
      <text
        x={65}
        y={72}
        textAnchor="middle"
        className="font-display"
        fontSize={24}
        fontWeight={600}
        fill="var(--ink)"
      >
        {pct}%
      </text>
    </svg>
  );
}

export default function ModelSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-cream px-6 py-28 sm:px-10 lg:py-36"
      aria-label="Why the preschool business model works"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {MO.kicker}
          </p>
          <h2 className="mx-auto mt-5 max-w-[18ch] font-display font-semibold leading-[1.05] tracking-[-0.03em] text-ink [font-size:clamp(2.2rem,5vw,4rem)]">
            {MO.headline[0]} <span className="text-coral">{MO.headline[1]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[50ch] text-base leading-relaxed text-ink/55 sm:text-lg">
            {MO.sub}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {MO.splits.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 * i }}
              className="flex flex-col items-center gap-6 rounded-3xl border border-ink/[0.07] bg-white/70 p-8 text-center backdrop-blur-sm sm:flex-row sm:text-left"
            >
              <Donut pct={s.pct} accent={s.accent} />
              <div>
                <p className="font-display text-xl text-ink">{s.label}</p>
                <p className="mt-3 text-base leading-relaxed text-ink/60">{s.body}</p>
                <p className="mt-4 text-xs text-ink/35">{s.source}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MO.reasons.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.07 * i }}
              className="rounded-3xl border border-ink/[0.07] bg-white/60 p-7 backdrop-blur-sm"
            >
              <p className="font-display text-lg leading-snug text-ink">{r.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/55">{r.body}</p>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-[60ch] text-center text-sm leading-relaxed text-ink/40">
          {MO.placeholder}
        </p>
      </div>
    </section>
  );
}
