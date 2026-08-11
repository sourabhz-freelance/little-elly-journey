import { motion, useReducedMotion } from "framer-motion";
import { KeyRound, School, Building2, Megaphone } from "lucide-react";
import { commercialsContent as C, L } from "@/content/commercials";

const EASE = [0.22, 1, 0.36, 1] as const;
const ICONS = { KeyRound, School, Building2, Megaphone } as const;

const useRise = () => {
  const reduce = useReducedMotion();
  return (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.35 },
          transition: { duration: 0.75, ease: EASE, delay },
        };
};

/** 01 — the four line items stacking into one number. */
function Staircase() {
  const reduce = useReducedMotion();
  const rise = useRise();
  const total = C.buildUpTotal.amount;

  return (
    <div className="mt-16">
      {/* the bar */}
      <motion.div
        className="flex h-14 w-full gap-1 overflow-hidden rounded-full sm:h-16"
        {...rise(0)}
      >
        {C.buildUp.map((b, i) => (
          <motion.div
            key={b.id}
            className="flex items-center justify-center first:rounded-l-full last:rounded-r-full"
            style={{ background: b.accent }}
            initial={reduce ? false : { flexGrow: 0.001, opacity: 0 }}
            whileInView={{ flexGrow: b.amount / total, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 + i * 0.16 }}
          >
            <span className="font-display text-sm font-semibold text-cream sm:text-base">
              {L(b.amount)}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* the legend */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {C.buildUp.map((b, i) => {
          const Icon = ICONS[b.icon as keyof typeof ICONS];
          return (
            <motion.div
              key={b.id}
              {...rise(0.2 + i * 0.08)}
              className="rounded-3xl border bg-white/70 p-6"
              style={{ borderColor: `color-mix(in oklab, ${b.accent} 32%, transparent)` }}
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{
                  background: `color-mix(in oklab, ${b.accent} 15%, transparent)`,
                  color: b.accent,
                }}
                aria-hidden="true"
              >
                <Icon size={19} strokeWidth={1.7} />
              </span>
              <p
                className="mt-4 font-display font-semibold leading-none tracking-[-0.03em] [font-size:clamp(1.6rem,3vw,2.1rem)]"
                style={{ color: b.accent }}
              >
                {L(b.amount)}
              </p>
              <p className="mt-2 font-display text-base leading-snug text-ink">{b.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink/50">{b.note}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="mt-12 flex flex-col items-center gap-2 rounded-[2rem] border border-coral/25 bg-coral/[0.06] px-8 py-10 text-center"
        {...rise(0.3)}
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
          {C.buildUpTotal.label}
        </p>
        <p className="font-display font-semibold leading-none tracking-[-0.04em] text-coral [font-size:clamp(3rem,8vw,5.5rem)]">
          {L(C.buildUpTotal.amount)}
        </p>
      </motion.div>
    </div>
  );
}

/** 02 — signing cash separating into what is lost and what comes back. */
function Reconcile() {
  const reduce = useReducedMotion();
  const rise = useRise();
  const signing = C.signing;
  const back = C.reconcile.reduce((s, r) => s + r.amount, 0);
  const sunk = signing - back;

  return (
    <div className="mt-28">
      <motion.div className="text-center" {...rise(0)}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
          {C.reconcileKicker}
        </p>
        <h3 className="mx-auto mt-4 max-w-[20ch] font-display font-semibold leading-[1.08] tracking-[-0.03em] text-ink [font-size:clamp(1.7rem,3.6vw,2.7rem)]">
          {C.reconcileHeadline[0]} <span className="text-coral">{C.reconcileHeadline[1]}</span>
        </h3>
      </motion.div>

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.15fr)]">
        {/* the column */}
        <motion.div {...rise(0.05)} className="mx-auto w-full max-w-xs">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/40">
            Cash at signing
          </p>
          <p className="mt-2 text-center font-display font-semibold leading-none tracking-[-0.03em] text-ink [font-size:clamp(2rem,4vw,2.6rem)]">
            {L(signing)}
          </p>
          <div className="mt-6 flex h-72 w-full flex-col-reverse gap-1 overflow-hidden rounded-[1.75rem] border border-ink/[0.07] bg-white/60 p-1">
            <motion.div
              className="flex items-center justify-center rounded-[1.4rem] bg-coral"
              initial={reduce ? false : { flexGrow: 0.001 }}
              whileInView={{ flexGrow: sunk / signing }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, ease: EASE, delay: 0.2 }}
            >
              <span className="font-display text-sm font-semibold text-cream">{L(sunk)}</span>
            </motion.div>
            {C.reconcile.map((r, i) => (
              <motion.div
                key={r.id}
                className="flex items-center justify-center rounded-[1.1rem]"
                style={{ background: `color-mix(in oklab, ${r.accent} 26%, transparent)` }}
                initial={reduce ? false : { flexGrow: 0.001, opacity: 0 }}
                whileInView={{ flexGrow: r.amount / signing, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.35 + i * 0.14 }}
              >
                <span className="font-display text-xs font-semibold text-ink/70">
                  {L(r.amount)}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hidden self-stretch lg:flex lg:items-center"
          {...rise(0.15)}
          aria-hidden="true"
        >
          <svg width="80" height="240" viewBox="0 0 80 240" fill="none">
            {[60, 120, 180].map((y, i) => (
              <path
                key={y}
                d={`M 2 ${y} H 78`}
                stroke="var(--pink)"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeDasharray="0.1 11"
                opacity={0.55 + i * 0.05}
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>
        </motion.div>

        {/* what comes back */}
        <div className="space-y-4">
          {C.reconcile.map((r, i) => (
            <motion.div
              key={r.id}
              {...rise(0.1 + i * 0.08)}
              className="flex items-start gap-4 rounded-3xl border bg-white/70 p-5"
              style={{ borderColor: `color-mix(in oklab, ${r.accent} 32%, transparent)` }}
            >
              <p
                className="min-w-[5.5rem] font-display font-semibold leading-none tracking-[-0.03em] [font-size:clamp(1.4rem,2.6vw,1.8rem)]"
                style={{ color: r.accent }}
              >
                {L(r.amount)}
              </p>
              <div>
                <p className="font-display text-base leading-snug text-ink">
                  {r.label}{" "}
                  <span
                    className="ml-1 rounded-full px-2 py-[2px] align-middle text-[10px] font-semibold uppercase tracking-[0.18em]"
                    style={{
                      background: `color-mix(in oklab, ${r.accent} 16%, transparent)`,
                      color: r.accent,
                    }}
                  >
                    {r.kind}
                  </span>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink/50">{r.note}</p>
              </div>
            </motion.div>
          ))}
          <motion.div
            {...rise(0.34)}
            className="flex items-center gap-4 rounded-3xl border border-coral/30 bg-coral/[0.07] p-5"
          >
            <p className="min-w-[5.5rem] font-display font-semibold leading-none tracking-[-0.03em] text-coral [font-size:clamp(1.4rem,2.6vw,1.8rem)]">
              {L(sunk)}
            </p>
            <p className="font-display text-base leading-snug text-ink">
              The only money that does not come back.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.p
        className="mx-auto mt-10 max-w-[62ch] text-center text-sm leading-relaxed text-ink/45"
        {...rise(0.1)}
      >
        {C.reconcileFooter}
      </motion.p>
    </div>
  );
}

/** 03 — the unit franchisee's own ticket. */
function UnitTicket() {
  const rise = useRise();
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="mt-28 overflow-hidden rounded-[2.5rem] border border-ink/[0.07] bg-white/60 px-6 py-14 backdrop-blur-sm sm:px-12"
      {...rise(0)}
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {C.unitKicker}
          </p>
          <h3 className="mt-4 font-display font-semibold leading-[1.04] tracking-[-0.04em] text-ink [font-size:clamp(2.2rem,5vw,3.4rem)]">
            <span className="text-coral">{C.unitHeadline[0]}</span>
            <br />
            {C.unitHeadline[1]}
          </h3>
          <p className="mt-5 max-w-[36ch] text-base leading-relaxed text-ink/55">
            The cheque your franchisee writes. Knowing it by heart is half of selling it.
          </p>
        </div>

        <div>
          <div className="flex h-4 w-full gap-[3px] overflow-hidden rounded-full">
            {C.unit.map((u, i) => (
              <motion.div
                key={u.id}
                style={{ background: u.accent }}
                className="first:rounded-l-full last:rounded-r-full"
                initial={reduce ? false : { flexGrow: 0.001 }}
                whileInView={{ flexGrow: u.amount / C.unitTotal }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.1 + i * 0.09 }}
              />
            ))}
          </div>
          <ul className="mt-7 space-y-3">
            {C.unit.map((u, i) => (
              <motion.li
                key={u.id}
                {...rise(0.06 * i)}
                className="flex items-baseline justify-between gap-6 border-b border-ink/[0.06] pb-3"
              >
                <span className="flex items-center gap-3 text-[0.95rem] text-ink/70">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: u.accent }}
                    aria-hidden="true"
                  />
                  {u.label}
                </span>
                <span className="font-display text-base font-semibold text-ink">{L(u.amount)}</span>
              </motion.li>
            ))}
          </ul>
          <div className="mt-6 flex items-baseline justify-between gap-6">
            <span className="font-display text-lg text-ink">Total set-up</span>
            <span className="font-display font-semibold leading-none tracking-[-0.03em] text-coral [font-size:clamp(1.8rem,3.6vw,2.4rem)]">
              {L(C.unitTotal)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CostOfEntrySection() {
  const rise = useRise();
  return (
    <section
      className="relative w-full overflow-hidden bg-cream px-6 py-28 sm:px-10 lg:py-36"
      aria-label="The cost of entry"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(48% 40% at 50% 20%, color-mix(in oklab, var(--yellow) 20%, transparent), transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div className="text-center" {...rise(0)}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {C.kicker}
          </p>
          <h2 className="mx-auto mt-5 max-w-[20ch] font-display font-semibold leading-[1.06] tracking-[-0.03em] text-ink [font-size:clamp(1.9rem,4.4vw,3.3rem)]">
            {C.headline[0]} <span className="text-coral">{C.headline[1]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[42ch] text-base leading-relaxed text-ink/55 sm:text-lg">
            {C.sub}
          </p>
        </motion.div>

        <Staircase />
        <Reconcile />
        <UnitTicket />

        <motion.p className="mt-12 text-center text-sm text-ink/40" {...rise(0.1)}>
          {C.disclaimer}
        </motion.p>
      </div>
    </section>
  );
}
