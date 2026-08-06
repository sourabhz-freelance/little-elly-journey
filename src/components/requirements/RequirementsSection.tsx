import { motion, useReducedMotion } from "framer-motion";
import { Ruler, ShieldCheck, Boxes, Wallet } from "lucide-react";
import { requirementsContent as R } from "@/content/requirements";
import SchoolArt from "./SchoolArt";

const EASE = [0.22, 1, 0.36, 1] as const;
const ICONS = { Ruler, ShieldCheck, Boxes, Wallet } as const;

type Group = (typeof R.groups)[number];

/** Dotted connector paths (viewBox 0 0 100 100, non-scaling stroke keeps dots round). */
const LINKS = [
  { d: "M46 44 C 42 36, 40 28, 36.5 26", i: 0 },
  { d: "M54 44 C 58 36, 60 28, 63.5 26", i: 1 },
  { d: "M46 62 C 42 70, 40 76, 36.5 78", i: 2 },
  { d: "M54 62 C 58 70, 60 76, 63.5 78", i: 3 },
];


function Card({ g, align }: { g: Group; align: "left" | "right" }) {
  const Icon = ICONS[g.icon as keyof typeof ICONS];
  return (
    <div
      className="rounded-3xl border bg-white/85 p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 sm:p-7"
      style={{ borderColor: `color-mix(in oklab, ${g.accent} 32%, transparent)` }}
    >
      <div
        className={`flex items-center gap-3 ${align === "right" ? "lg:flex-row-reverse lg:text-right" : ""}`}
      >
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
          style={{
            background: `color-mix(in oklab, ${g.accent} 16%, transparent)`,
            color: g.accent,
          }}
          aria-hidden="true"
        >
          <Icon size={21} strokeWidth={1.7} />
        </span>
        <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-ink">
          {g.title}
        </h3>
      </div>

      <ul className="mt-5 space-y-3">
        {g.points.map((p) => (
          <li
            key={p}
            className={`flex gap-3 text-[0.93rem] leading-relaxed text-ink/70 ${
              align === "right" ? "lg:flex-row-reverse lg:text-right" : ""
            }`}
          >
            <span
              className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: g.accent }}
              aria-hidden="true"
            />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function RequirementsSection() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.25 },
          transition: { duration: 0.75, ease: EASE, delay },
        };

  const groups = R.groups;

  return (
    <section
      className="relative w-full overflow-hidden bg-cream px-6 py-28 sm:px-10 lg:py-36"
      aria-label="Master franchise requirements"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46% 42% at 50% 55%, color-mix(in oklab, var(--lightpink) 42%, transparent), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div className="text-center" {...rise(0)}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {R.kicker}
          </p>
          <h2 className="mx-auto mt-5 max-w-[20ch] font-display font-semibold leading-[1.08] tracking-[-0.03em] text-ink [font-size:clamp(1.9rem,4.2vw,3.3rem)]">
            {R.headline[0]} <span className="text-coral">{R.headline[1]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[44ch] text-base leading-relaxed text-ink/55 sm:text-lg">
            {R.sub}
          </p>
        </motion.div>

        {/* Infographic — desktop */}
        <div className="relative mt-20 hidden lg:block">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            {LINKS.map((l) => (
              <motion.path
                key={l.i}
                d={l.d}
                fill="none"
                stroke={groups[l.i]!.accent}
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeDasharray="0.1 7"
                vectorEffect="non-scaling-stroke"
                initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.75 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.35 + l.i * 0.12 }}
              />
            ))}
          </svg>

          <div className="relative grid grid-cols-[1fr_20rem_1fr] items-center gap-x-8 gap-y-14">
            <motion.div {...rise(0.1)}>
              <Card g={groups[0]!} align="left" />
            </motion.div>

            <motion.div
              className="row-span-2 flex flex-col items-center justify-center px-2"
              initial={reduce ? false : { opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, ease: EASE }}
            >
              <SchoolArt className="w-full max-w-[19rem]" />
              <p className="mt-6 text-center font-display text-lg leading-snug text-ink/70">
                One centre.
                <br />
                <span className="text-coral">Then a territory of them.</span>
              </p>
            </motion.div>

            <motion.div {...rise(0.18)}>
              <Card g={groups[1]!} align="right" />
            </motion.div>

            <motion.div {...rise(0.26)}>
              <Card g={groups[2]!} align="left" />
            </motion.div>
            <motion.div {...rise(0.34)}>
              <Card g={groups[3]!} align="right" />
            </motion.div>
          </div>
        </div>

        {/* Stacked — mobile / tablet */}
        <div className="mt-14 lg:hidden">
          <motion.div className="mx-auto max-w-[16rem]" {...rise(0.05)}>
            <SchoolArt className="w-full" />
          </motion.div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {groups.map((g, i) => (
              <motion.div key={g.id} {...rise(0.08 + i * 0.07)}>
                <Card g={g} align="left" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p className="mt-16 text-center text-sm text-ink/45" {...rise(0.1)}>
          {R.footnote}
        </motion.p>
      </div>
    </section>
  );
}
