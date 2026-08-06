import { motion, useReducedMotion } from "framer-motion";
import { happyContent as H } from "@/content/happy";

const EASE = [0.22, 1, 0.36, 1] as const;

/** One small flat mark per card — same shape family, different accent. */
function Mark({ id, accent }: { id: string; accent: string }) {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden="true">
      <circle cx={32} cy={32} r={30} fill={accent} opacity={0.18} />
      {id === "child" && (
        <>
          <circle cx={24} cy={27} r={3.4} fill={accent} />
          <circle cx={40} cy={27} r={3.4} fill={accent} />
          <path
            d="M21 38 C26 46 38 46 43 38"
            fill="none"
            stroke={accent}
            strokeWidth={4}
            strokeLinecap="round"
          />
        </>
      )}
      {id === "parent" && (
        <>
          <circle cx={32} cy={24} r={8} fill={accent} />
          <path d="M16 46 C16 36 48 36 48 46" fill="none" stroke={accent} strokeWidth={4.5} strokeLinecap="round" />
        </>
      )}
      {id === "partner" && (
        <>
          <circle cx={25} cy={32} r={9} fill="none" stroke={accent} strokeWidth={4} />
          <circle cx={39} cy={32} r={9} fill="none" stroke={accent} strokeWidth={4} />
        </>
      )}
    </svg>
  );
}

export default function HappySection() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 26 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.4 },
          transition: { duration: 0.75, ease: EASE, delay },
        };

  return (
    <section
      className="relative w-full overflow-hidden bg-cream px-6 py-28 sm:px-10 lg:py-36"
      aria-label="A happy preschool for everyone"
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%]"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 100%, color-mix(in oklab, var(--lightpink) 40%, transparent), transparent 72%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div className="text-center" {...rise(0)}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {H.kicker}
          </p>
          <h2 className="mx-auto mt-5 max-w-[18ch] font-display font-semibold leading-[1.05] tracking-[-0.03em] text-ink [font-size:clamp(2.2rem,5vw,4rem)]">
            {H.headline[0]}{" "}
            <span className="text-coral">{H.headline[1]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[46ch] text-base leading-relaxed text-ink/55 sm:text-lg">
            {H.sub}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:gap-8">
          {H.cards.map((c, i) => (
            <motion.div
              key={c.id}
              {...rise(0.15 + i * (i === 2 ? 0.5 : 0.22))}
              className="rounded-3xl border border-ink/[0.07] bg-white/70 p-8 backdrop-blur-sm"
              style={
                c.id === "partner"
                  ? { borderColor: "color-mix(in oklab, var(--coral) 34%, transparent)" }
                  : undefined
              }
            >
              <Mark id={c.id} accent={c.accent} />
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/40">
                {c.label}
              </p>
              <p className="mt-3 font-display text-xl leading-snug text-ink sm:text-[1.4rem]">
                {c.line}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div className="mx-auto mt-20 max-w-3xl text-center" {...rise(0.25)}>
          <p className="font-display font-semibold leading-[1.15] tracking-[-0.02em] text-ink [font-size:clamp(1.6rem,3.4vw,2.6rem)]">
            &ldquo;We don&rsquo;t hand you a brand and wave goodbye.{" "}
            <span className="text-coral">We stay.</span>&rdquo;
          </p>
          <p className="mx-auto mt-6 max-w-[56ch] text-base leading-relaxed text-ink/55">
            {H.closing.support}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
