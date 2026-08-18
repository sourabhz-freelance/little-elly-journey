import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  DoorOpen,
  GraduationCap,
  Hammer,
  LandPlot,
  Receipt,
  RotateCcw,
  Scale,
  Settings2,
  Users,
  Wallet,
} from "lucide-react";
import { dubaiModels as M } from "@/content/dubai";

const EASE = [0.22, 1, 0.36, 1] as const;

const ICONS = {
  LandPlot,
  Hammer,
  BadgeCheck,
  Users,
  Settings2,
  GraduationCap,
  Wallet,
  Receipt,
  Scale,
  DoorOpen,
} as const;

const FOCO = "var(--coral)";
const FOFO = "var(--cyan)";

type Row = (typeof M.rows)[number];

function useRise() {
  const reduce = useReducedMotion();
  return (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.65, ease: EASE, delay },
        };
}

/** The big illustration for the topic currently being explained. */
function TopicArt({ icon, index }: { icon: string; index: number }) {
  const Icon = ICONS[icon as keyof typeof ICONS] ?? LandPlot;
  return (
    <div className="relative flex h-[190px] w-full items-center justify-center sm:h-[230px]">
      <div
        className="absolute h-[150px] w-[150px] rounded-full sm:h-[190px] sm:w-[190px]"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, color-mix(in oklab, var(--yellow) 45%, transparent), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <svg
        viewBox="0 0 200 200"
        className="absolute h-[180px] w-[180px] sm:h-[215px] sm:w-[215px]"
        aria-hidden="true"
      >
        <circle
          cx="100"
          cy="100"
          r="86"
          fill="none"
          stroke="color-mix(in oklab, var(--pink) 75%, transparent)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="0.1 17"
        />
      </svg>
      <div
        className="relative flex h-[104px] w-[104px] items-center justify-center rounded-[2rem] bg-white shadow-[0_28px_60px_-38px_color-mix(in_oklab,var(--ink)_70%,transparent)] sm:h-[124px] sm:w-[124px]"
        style={{ color: "var(--coral)" }}
      >
        <Icon className="h-12 w-12 sm:h-14 sm:w-14" strokeWidth={1.4} />
        <span
          className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full font-display text-sm text-white"
          style={{ background: "var(--ink)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

function Panel({
  tag,
  accent,
  who,
  detail,
}: {
  tag: string;
  accent: string;
  who: string;
  detail: string;
}) {
  return (
    <div
      className="rounded-[1.5rem] border p-6"
      style={{
        borderColor: `color-mix(in oklab, ${accent} 35%, transparent)`,
        background: `color-mix(in oklab, ${accent} 7%, white)`,
      }}
    >
      <span
        className="inline-flex items-center rounded-full px-3.5 py-1 font-display text-xs leading-none text-white"
        style={{ background: accent }}
      >
        {tag}
      </span>
      <p className="mt-4 font-display text-xl leading-snug text-ink">{who}</p>
      <p className="mt-2 text-[0.93rem] leading-relaxed text-ink/60">{detail}</p>
    </div>
  );
}

/** A settled row in the growing table. */
function TableRow({ row, i }: { row: Row; i: number }) {
  const Icon = ICONS[row.icon as keyof typeof ICONS] ?? LandPlot;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="grid grid-cols-1 items-start gap-3 border-t border-ink/[0.08] px-4 py-4 sm:grid-cols-[1.1fr_1fr_1fr] sm:gap-6 sm:px-6"
      style={{ background: i % 2 ? "color-mix(in oklab, var(--cream) 55%, white)" : "white" }}
    >
      <div className="flex items-center gap-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
          style={{ background: "color-mix(in oklab, var(--ink) 6%, transparent)", color: "var(--ink)" }}
          aria-hidden="true"
        >
          <Icon className="h-[17px] w-[17px]" strokeWidth={1.6} />
        </span>
        <p className="font-display text-[0.95rem] leading-tight text-ink">{row.label}</p>
      </div>
      <div>
        <p className="font-display text-sm" style={{ color: FOCO }}>
          {row.focoWho}
        </p>
        <p className="mt-1 text-[0.82rem] leading-relaxed text-ink/50">{row.foco}</p>
      </div>
      <div>
        <p className="font-display text-sm" style={{ color: FOFO }}>
          {row.fofoWho}
        </p>
        <p className="mt-1 text-[0.82rem] leading-relaxed text-ink/50">{row.fofo}</p>
      </div>
    </motion.div>
  );
}

export default function OwnershipModelsSection() {
  const rise = useRise();
  const rows = M.rows;
  // index of the topic on the stage; rows.length === everything explained
  const [step, setStep] = useState(0);
  const done = step >= rows.length;
  const current = done ? null : rows[step];
  const settled = rows.slice(0, step);

  return (
    <section
      className="relative w-full overflow-hidden bg-cream px-6 py-28 sm:px-10 lg:py-36"
      aria-label="FOCO and FOFO ownership models"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[60%]"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 0%, color-mix(in oklab, var(--cyan) 16%, transparent), transparent 72%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div className="text-center" {...rise(0)}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {M.kicker}
          </p>
          <h2 className="mx-auto mt-5 max-w-[20ch] font-display font-semibold leading-[1.05] tracking-[-0.03em] text-ink [font-size:clamp(2.2rem,5vw,3.9rem)]">
            {M.headline[0]} <span className="text-coral">{M.headline[1]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[52ch] text-base leading-relaxed text-ink/55 sm:text-lg">
            One piece at a time. Each answer settles into the table below — by the end, you have the
            whole comparison in one place.
          </p>
        </motion.div>

        {/* THE STAGE */}
        <motion.div
          {...rise(0.08)}
          layout
          className="mt-14 overflow-hidden rounded-[2.25rem] border border-ink/[0.07] bg-white/75 backdrop-blur-sm"
          style={{
            boxShadow: "0 40px 90px -60px color-mix(in oklab, var(--ink) 70%, transparent)",
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {current ? (
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
              >
                <div>
                  <TopicArt icon={current.icon} index={step} />
                  <p className="mt-4 text-center font-display text-2xl leading-tight text-ink sm:text-[1.75rem]">
                    {current.label}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Panel tag="FOCO" accent={FOCO} who={current.focoWho} detail={current.foco} />
                  <Panel tag="FOFO" accent={FOFO} who={current.fofoWho} detail={current.fofo} />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="p-10 text-center"
              >
                <p className="font-display text-2xl text-ink sm:text-3xl">
                  That is the whole picture.
                </p>
                <p className="mx-auto mt-3 max-w-[46ch] text-[0.95rem] leading-relaxed text-ink/55">
                  Same brand, same curriculum, same system under both. Only the licence, the payroll
                  and the way you are paid change.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-ink/[0.07] bg-white/60 px-6 py-4 sm:px-8">
            <div className="flex items-center gap-2" aria-hidden="true">
              {rows.map((r, i) => (
                <span
                  key={r.id}
                  className="h-1.5 rounded-full transition-all duration-500"
                  style={{
                    width: i === step ? 26 : 10,
                    background:
                      i < step
                        ? "color-mix(in oklab, var(--coral) 55%, transparent)"
                        : i === step
                          ? "var(--coral)"
                          : "color-mix(in oklab, var(--ink) 12%, transparent)",
                  }}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="mr-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/40">
                {Math.min(step + 1, rows.length)} / {rows.length}
              </span>
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition hover:bg-ink/[0.04] disabled:opacity-30"
                aria-label="Previous point"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              {done ? (
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-5 py-2.5 font-display text-sm text-ink/70 transition hover:bg-ink/[0.04]"
                >
                  <RotateCcw className="h-4 w-4" /> Start over
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setStep((s) => s + 1)}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 font-display text-sm text-white transition hover:opacity-90"
                  style={{ background: "var(--coral)" }}
                >
                  {step === rows.length - 1 ? "See the full picture" : "Next"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* THE TABLE THAT BUILDS ITSELF */}
        <AnimatePresence initial={false}>
          {settled.length > 0 ? (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 overflow-hidden rounded-[2rem] border border-ink/[0.07] bg-white"
            >
              <div className="hidden grid-cols-[1.1fr_1fr_1fr] gap-6 bg-cream/70 px-6 py-3.5 sm:grid">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-ink/40">
                  What it is
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em]" style={{ color: FOCO }}>
                  FOCO
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em]" style={{ color: FOFO }}>
                  FOFO
                </p>
              </div>
              {settled.map((r, i) => (
                <TableRow key={r.id} row={r} i={i} />
              ))}
            </motion.div>
          ) : null}
        </AnimatePresence>

        <motion.div
          {...rise(0.1)}
          className="mt-6 rounded-[2rem] border border-ink/[0.07] bg-white/60 px-8 py-5 text-center backdrop-blur-sm"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink/40">
            One platform under both
          </p>
        </motion.div>
      </div>
    </section>
  );
}
