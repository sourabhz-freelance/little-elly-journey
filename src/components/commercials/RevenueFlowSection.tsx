import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Repeat, KeyRound, Package } from "lucide-react";
import { revenueContent as R } from "@/content/commercials";

const EASE = [0.22, 1, 0.36, 1] as const;
const ICONS = { Repeat, KeyRound, Package } as const;

const inr = (n: number) =>
  n >= 10000000
    ? `₹${(n / 10000000).toFixed(2)} Cr`
    : `₹${(n / 100000).toFixed(n % 100000 === 0 ? 0 : 1)} L`;

const useRise = () => {
  const reduce = useReducedMotion();
  return (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.75, ease: EASE, delay },
        };
};

/** One flow: a pipe from the centres, splitting into two shares. */
function Flow({ f, i }: { f: (typeof R.flows)[number]; i: number }) {
  const reduce = useReducedMotion();
  const rise = useRise();
  const Icon = ICONS[f.icon as keyof typeof ICONS];
  const thick = f.weight === "primary";
  const none = f.weight === "none";

  return (
    <motion.div
      {...rise(0.08 * i)}
      className="grid gap-6 rounded-3xl border bg-white/70 p-6 sm:p-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center"
      style={{
        borderColor: `color-mix(in oklab, ${f.accent} ${none ? 18 : 34}%, transparent)`,
        opacity: none ? 0.85 : 1,
      }}
    >
      <div>
        <div className="flex items-center gap-3">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
            style={{
              background: `color-mix(in oklab, ${f.accent} 15%, transparent)`,
              color: f.accent,
            }}
            aria-hidden="true"
          >
            <Icon size={19} strokeWidth={1.7} />
          </span>
          <div>
            <p className="font-display text-lg leading-tight text-ink">{f.title}</p>
            <p className="text-sm text-ink/50">{f.basis}</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ink/55">{f.note}</p>
      </div>

      {/* the split */}
      <div>
        <div
          className="flex w-full overflow-hidden rounded-full"
          style={{ height: thick ? 44 : none ? 26 : 34 }}
        >
          <motion.div
            className="flex items-center justify-center"
            style={{ background: f.accent }}
            initial={reduce ? false : { flexGrow: 0.001 }}
            whileInView={{ flexGrow: Math.max(f.master, 0.001) }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          >
            {f.master > 0 && (
              <span className="font-display text-sm font-semibold text-cream">
                Master Franchise · {f.master}%
              </span>
            )}
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            style={{ background: `color-mix(in oklab, ${f.accent} 18%, transparent)` }}
            initial={reduce ? false : { flexGrow: 0.001 }}
            whileInView={{ flexGrow: 100 - f.master }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          >
            <span className="font-display text-xs font-semibold text-ink/60">
              Learning Edge · {100 - f.master}%
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/** Two dials, one live number. Arithmetic, not a projection. */
function Calculator() {
  const rise = useRise();
  const [centres, setCentres] = useState(10);
  const [students, setStudents] = useState(60);
  const [daycare, setDaycare] = useState(20);

  const annual =
    centres * students * R.perStudentPreschool * 0.5 +
    centres * Math.round((students * daycare) / 100) * R.perStudentDaycare * 0.5;

  const Dial = ({
    label,
    value,
    set,
    min,
    max,
    step = 1,
    suffix = "",
  }: {
    label: string;
    value: number;
    set: (n: number) => void;
    min: number;
    max: number;
    step?: number;
    suffix?: string;
  }) => (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm text-ink/60">{label}</label>
        <span className="font-display text-lg font-semibold text-ink">
          {value}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => set(Number(e.target.value))}
        aria-label={label}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-ink/10 accent-coral"
      />
    </div>
  );

  return (
    <motion.div
      className="mt-24 rounded-[2.5rem] border border-ink/[0.07] bg-white/60 px-6 py-12 backdrop-blur-sm sm:px-12"
      {...rise(0)}
    >
      <div className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
          {R.calcKicker}
        </p>
        <h3 className="mx-auto mt-4 max-w-[22ch] font-display font-semibold leading-[1.08] tracking-[-0.03em] text-ink [font-size:clamp(1.6rem,3.4vw,2.5rem)]">
          {R.calcHeadline[0]} <span className="text-coral">{R.calcHeadline[1]}</span>
        </h3>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
        <div className="space-y-8">
          <Dial
            label="Centres in your territory"
            value={centres}
            set={setCentres}
            min={1}
            max={40}
          />
          <Dial
            label="Students per centre"
            value={students}
            set={setStudents}
            min={20}
            max={150}
            step={5}
          />
          <Dial
            label="Of those, in daycare"
            value={daycare}
            set={setDaycare}
            min={0}
            max={60}
            step={5}
            suffix="%"
          />
        </div>

        <div className="rounded-[2rem] border border-coral/25 bg-coral/[0.06] px-8 py-10 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-coral">
            Your brand-fee share, per year
          </p>
          <p className="mt-4 font-display font-semibold leading-none tracking-[-0.04em] text-coral [font-size:clamp(2.6rem,7vw,4.4rem)]">
            {inr(annual)}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/50">
            Recurring, for as long as those children stay enrolled.
          </p>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-ink/40">{R.calcNote}</p>
    </motion.div>
  );
}

export default function RevenueFlowSection() {
  const rise = useRise();
  return (
    <section
      className="relative w-full overflow-hidden bg-cream px-6 py-28 sm:px-10 lg:py-36"
      aria-label="Where the money comes from"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46% 40% at 50% 30%, color-mix(in oklab, var(--turquoise) 14%, transparent), transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div className="text-center" {...rise(0)}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {R.kicker}
          </p>
          <h2 className="mx-auto mt-5 max-w-[20ch] font-display font-semibold leading-[1.06] tracking-[-0.03em] text-ink [font-size:clamp(1.9rem,4.4vw,3.3rem)]">
            {R.headline[0]} <span className="text-coral">{R.headline[1]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[48ch] text-base leading-relaxed text-ink/55 sm:text-lg">
            {R.sub}
          </p>
        </motion.div>

        <div className="mt-16 space-y-5">
          {R.flows.map((f, i) => (
            <Flow key={f.id} f={f} i={i} />
          ))}
        </div>

        <motion.p
          className="mx-auto mt-8 max-w-[58ch] text-center text-sm leading-relaxed text-ink/45"
          {...rise(0.1)}
        >
          {R.collectNote}
        </motion.p>

        <Calculator />
      </div>
    </section>
  );
}
