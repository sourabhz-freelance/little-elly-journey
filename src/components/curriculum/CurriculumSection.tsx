import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  HeartPulse,
  Lightbulb,
  ToyBrick,
  Sparkles,
  BookOpen,
  Star,
  HandHeart,
  Heart,
  Palette,
  GraduationCap,
} from "lucide-react";
import { curriculumContent as C } from "@/content/curriculum";
import childPhoto from "@/assets/happy-child.jpg";
import childPhotoGirl from "@/assets/happy-child-girl.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

const ICONS = {
  HeartPulse,
  Lightbulb,
  ToyBrick,
  Sparkles,
  BookOpen,
  Star,
  HandHeart,
  Heart,
  Palette,
  GraduationCap,
} as const;

const PHOTOS = [
  { src: childPhoto, alt: "A happy young Indian boy at a Little Elly preschool" },
  { src: childPhotoGirl, alt: "A happy young Indian girl at a Little Elly preschool" },
];

function ChildPhoto() {
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

/* ---------------------------------- geometry --------------------------------- */

const CX = 500;
const CY = 500;
const rad = (a: number) => (a * Math.PI) / 180;
const pt = (r: number, a: number) => [CX + r * Math.cos(rad(a)), CY + r * Math.sin(rad(a))];

/** A donut segment between two radii and two angles. */
function ringSegment(r0: number, r1: number, a0: number, a1: number) {
  const [x0, y0] = pt(r1, a0);
  const [x1, y1] = pt(r1, a1);
  const [x2, y2] = pt(r0, a1);
  const [x3, y3] = pt(r0, a0);
  const large = a1 - a0 > 180 ? 1 : 0;
  return `M ${x0} ${y0} A ${r1} ${r1} 0 ${large} 1 ${x1} ${y1} L ${x2} ${y2} A ${r0} ${r0} 0 ${large} 0 ${x3} ${y3} Z`;
}

/** An arc for curved text; flipped when it would read upside-down. */
function textArc(r: number, a0: number, a1: number) {
  const mid = (a0 + a1) / 2;
  const flip = Math.sin(rad(mid)) > 0;
  const [s, e] = flip ? [a1, a0] : [a0, a1];
  const [x0, y0] = pt(r, s);
  const [x1, y1] = pt(r, e);
  return `M ${x0} ${y0} A ${r} ${r} 0 0 ${flip ? 0 : 1} ${x1} ${y1}`;
}

const PILLAR_R0 = 212;
const PILLAR_R1 = 362;
const INSPIRED_R0 = 372;
const INSPIRED_R1 = 452;

const pillarSpan = 360 / C.pillars.length;
const inspiredSpan = 360 / C.inspired.length;
const pillarStart = (i: number) => -90 - pillarSpan / 2 + i * pillarSpan;
const inspiredStart = (i: number) => -90 - inspiredSpan / 2 + i * inspiredSpan;

/* --------------------------------- the wheel --------------------------------- */

function Wheel() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[40rem]">
      <svg viewBox="0 0 1000 1000" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {/* soft outer halo */}
        <circle
          cx={CX}
          cy={CY}
          r={492}
          fill="color-mix(in oklab, var(--yellow) 10%, transparent)"
        />
        <circle
          cx={CX}
          cy={CY}
          r={472}
          fill="none"
          stroke="var(--pink)"
          strokeWidth={3}
          strokeLinecap="round"
          strokeDasharray="0.1 16"
          vectorEffect="non-scaling-stroke"
          opacity={0.8}
        />

        {/* middle ring — inspired by */}
        {C.inspired.map((s, i) => {
          const a0 = inspiredStart(i) + 0.9;
          const a1 = a0 + inspiredSpan - 1.8;
          return (
            <motion.path
              key={s.id}
              d={ringSegment(INSPIRED_R0, INSPIRED_R1, a0, a1)}
              fill={`color-mix(in oklab, ${s.accent} 20%, var(--cream))`}
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.35 + i * 0.08 }}
            />
          );
        })}

        {/* inner ring — the five pillars */}
        {C.pillars.map((p, i) => {
          const a0 = pillarStart(i) + 0.9;
          const a1 = a0 + pillarSpan - 1.8;
          return (
            <motion.path
              key={p.id}
              d={ringSegment(PILLAR_R0, PILLAR_R1, a0, a1)}
              fill={`color-mix(in oklab, ${p.accent} 16%, white)`}
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.15 + i * 0.08 }}
            />
          );
        })}

        {/* curved labels on the middle ring */}
        {/* curved labels on the middle ring — centred on the band, following its arc */}
        <defs>
          {C.inspired.map((s, i) => (
            <path
              key={s.id}
              id={`arc-${s.id}`}
              d={textArc(
                (INSPIRED_R0 + INSPIRED_R1) / 2,
                inspiredStart(i) + 4,
                inspiredStart(i) + inspiredSpan - 4,
              )}
              fill="none"
            />
          ))}
        </defs>
        {C.inspired.map((s) => (
          <text
            key={s.id}
            fill={s.accent}
            className="font-display"
            fontSize={30}
            fontWeight={600}
            letterSpacing="0.03em"
            dominantBaseline="central"
          >
            <textPath href={`#arc-${s.id}`} startOffset="50%" textAnchor="middle">
              {s.title}
            </textPath>
          </text>
        ))}

      </svg>

      {/* pillar labels */}
      {C.pillars.map((p, i) => {
        const mid = pillarStart(i) + pillarSpan / 2;
        const r = 287 / 10; // percent of the container
        const left = 50 + r * Math.cos(rad(mid));
        const top = 50 + r * Math.sin(rad(mid));
        const Icon = ICONS[p.icon as keyof typeof ICONS];
        return (
          <motion.div
            key={p.id}
            className="absolute w-[8rem] -translate-x-1/2 -translate-y-1/2 text-center"
            style={{ left: `${left}%`, top: `${top}%` }}
            initial={reduce ? false : { opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.3 + i * 0.08 }}
          >
            <span
              className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/80"
              style={{ color: p.accent }}
              aria-hidden="true"
            >
              <Icon size={18} strokeWidth={1.8} />
            </span>
            <p className="mt-1.5 font-display text-[0.95rem] leading-tight text-ink">{p.title}</p>
            <p className="mt-1 text-[0.7rem] leading-snug text-ink/50">{p.line}</p>
          </motion.div>
        );
      })}

      {/* the child at the centre */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[6px] border-coral/70 shadow-[0_24px_60px_-24px_rgba(9,9,77,0.35)]"
        initial={reduce ? false : { opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <ChildPhoto />
      </motion.div>
    </div>
  );
}

/* -------------------------------- outcome card ------------------------------- */

type Outcome = (typeof C.outcomes)[number];

function OutcomeCard({ o, align }: { o: Outcome; align: "left" | "right" }) {
  const Icon = ICONS[o.icon as keyof typeof ICONS];
  return (
    <div
      className={`flex items-start gap-3 ${align === "right" ? "lg:flex-row-reverse lg:text-right" : ""}`}
    >
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
        style={{ background: `color-mix(in oklab, ${o.accent} 16%, transparent)`, color: o.accent }}
        aria-hidden="true"
      >
        <Icon size={19} strokeWidth={1.7} />
      </span>
      <div>
        <p className="font-display text-base leading-snug text-ink">{o.title}</p>
        <p className="mt-1 text-[0.82rem] leading-relaxed text-ink/50">{o.line}</p>
      </div>
    </div>
  );
}

/* ---------------------------------- section ---------------------------------- */

export default function CurriculumSection() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.75, ease: EASE, delay },
        };

  const left = C.outcomes.slice(0, 3);
  const right = C.outcomes.slice(3);

  return (
    <section
      className="relative w-full overflow-hidden bg-cream px-6 py-28 sm:px-10 lg:py-36"
      aria-label="The H.A.P.P.Y. curriculum"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46% 42% at 50% 58%, color-mix(in oklab, var(--lightpink) 42%, transparent), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div className="text-center" {...rise(0)}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {C.kicker}
          </p>
          <h2 className="mx-auto mt-5 max-w-[20ch] font-display font-semibold leading-[1.05] tracking-[-0.03em] text-ink [font-size:clamp(2.2rem,5vw,4rem)]">
            {C.headline[0]} <span className="text-coral">{C.headline[1]}</span>
          </h2>
        </motion.div>

        <motion.div className="mx-auto mt-6 max-w-[46ch] text-center" {...rise(0.15)}>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/40">
            {C.proof.map((p, i) => (
              <span key={p} className="flex items-center gap-3">
                {i > 0 && <span className="text-coral/50">·</span>}
                {p}
              </span>
            ))}
          </div>
          <p className="mt-6 text-base leading-relaxed text-ink/55">{C.wheelLead}</p>
        </motion.div>

        {/* the wheel, flanked by the outcomes */}
        <motion.p
          className="mt-20 text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-coral"
          {...rise(0)}
        >
          {C.outcomesKicker}
        </motion.p>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.4fr)_minmax(0,0.62fr)] lg:gap-6">
          <div className="hidden flex-col gap-9 lg:flex">
            {left.map((o, i) => (
              <motion.div key={o.id} {...rise(0.1 + i * 0.08)}>
                <OutcomeCard o={o} align="left" />
              </motion.div>
            ))}
          </div>

          <Wheel />

          <div className="hidden flex-col gap-9 lg:flex">
            {right.map((o, i) => (
              <motion.div key={o.id} {...rise(0.1 + i * 0.08)}>
                <OutcomeCard o={o} align="right" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* outcomes — stacked below on small screens */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:hidden">
          {C.outcomes.map((o, i) => (
            <motion.div key={o.id} {...rise(0.05 * i)}>
              <OutcomeCard o={o} align="left" />
            </motion.div>
          ))}
        </div>

        {/* what each tradition gives us */}
        <motion.p
          className="mt-24 text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-coral"
          {...rise(0)}
        >
          {C.inspiredKicker}
        </motion.p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {C.inspired.map((s, i) => (
            <motion.div
              key={s.id}
              {...rise(0.06 * i)}
              className="rounded-3xl border bg-white/70 p-6 backdrop-blur-sm"
              style={{ borderColor: `color-mix(in oklab, ${s.accent} 32%, transparent)` }}
            >
              <p className="font-display text-lg leading-snug" style={{ color: s.accent }}>
                {s.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">{s.line}</p>
            </motion.div>
          ))}
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
