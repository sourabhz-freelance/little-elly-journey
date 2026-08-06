import { motion, useReducedMotion } from "framer-motion";
import { curriculumContent as C } from "@/content/curriculum";
import childPhoto from "@/assets/happy-child.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

type Pillar = (typeof C.pillars)[number];

/** Radial geometry: angles in degrees, clockwise from the top. */
const ANGLES = [-90, -18, 54, 126, 198];
const R = 38; // % of container half-size

const pos = (i: number) => {
  const a = (ANGLES[i] * Math.PI) / 180;
  return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
};

function PillarCard({ p, letter }: { p: Pillar; letter: string }) {
  return (
    <div
      className="group w-[15rem] rounded-3xl border bg-white/80 p-5 text-left backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
      style={{ borderColor: `color-mix(in oklab, ${p.accent} 40%, transparent)` }}
    >
      <span
        className="inline-flex h-9 w-9 items-center justify-center rounded-full font-display text-base font-semibold text-ink"
        style={{ background: `color-mix(in oklab, ${p.accent} 32%, transparent)` }}
      >
        {letter}
      </span>
      <p className="mt-4 font-display text-lg leading-snug text-ink">{p.title}</p>
      <p className="mt-2 text-sm leading-relaxed text-ink/55">{p.line}</p>
    </div>
  );
}

export default function CurriculumSection() {
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
      aria-label="The H.A.P.P.Y. curriculum"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46% 42% at 50% 62%, color-mix(in oklab, var(--lightpink) 42%, transparent), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Philosophy */}
        <motion.div className="text-center" {...rise(0)}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {C.kicker}
          </p>
          <h2 className="mx-auto mt-5 max-w-[20ch] font-display font-semibold leading-[1.05] tracking-[-0.03em] text-ink [font-size:clamp(2.2rem,5vw,4rem)]">
            {C.headline[0]} <span className="text-coral">{C.headline[1]}</span>
          </h2>
        </motion.div>

        <motion.div className="mx-auto mt-8 max-w-[58ch] text-center" {...rise(0.15)}>
          {C.paras.map((t, i) => (
            <p key={i} className="mt-4 text-base leading-relaxed text-ink/60 sm:text-lg">
              {t}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/40">
            {C.proof.map((p, i) => (
              <span key={p} className="flex items-center gap-3">
                {i > 0 && <span className="text-coral/50">·</span>}
                {p}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Radial diagram — desktop */}
        <div className="relative mx-auto mt-20 hidden aspect-square w-full max-w-[54rem] lg:block">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {C.pillars.map((p, i) => {
              const { x, y } = pos(i);
              return (
                <motion.line
                  key={p.id}
                  x1={50}
                  y1={50}
                  x2={x}
                  y2={y}
                  stroke={p.accent}
                  strokeWidth={0.5}
                  strokeLinecap="round"
                  strokeDasharray="0.1 2"
                  vectorEffect="non-scaling-stroke"
                  initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.7 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.5 + i * 0.16 }}
                />
              );
            })}
          </svg>

          <motion.div
            className="absolute left-1/2 top-1/2 h-[17rem] w-[17rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[6px] border-coral/70 shadow-[0_24px_60px_-24px_rgba(9,9,77,0.35)]"
            initial={reduce ? undefined : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <img
              src={childPhoto}
              alt="A happy young Indian child at a Little Elly preschool"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {C.pillars.map((p, i) => {
            const { x, y } = pos(i);
            return (
              <motion.div
                key={p.id}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
                initial={reduce ? undefined : { opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.6 + i * 0.16 }}
              >
                <PillarCard p={p} letter={p.letter} />
              </motion.div>
            );
          })}
        </div>

        {/* Stacked — mobile / tablet */}
        <div className="mt-16 lg:hidden">
          <motion.div
            className="mx-auto h-52 w-52 overflow-hidden rounded-full border-[6px] border-coral/70"
            {...rise(0.1)}
          >
            <img
              src={childPhoto}
              alt="A happy young Indian child at a Little Elly preschool"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {C.pillars.map((p, i) => (
              <motion.div key={p.id} {...rise(0.1 + i * 0.08)} className="[&>div]:w-full">
                <PillarCard p={p} letter={p.letter} />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          className="mx-auto mt-20 max-w-[26ch] text-center font-display leading-tight text-ink [font-size:clamp(1.5rem,3vw,2.4rem)]"
          {...rise(0.1)}
        >
          “Happy is not the mood we aim for.{" "}
          <span className="text-coral">It&rsquo;s the method.</span>”
        </motion.p>
      </div>
    </section>
  );
}
