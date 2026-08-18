import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  DoorOpen,
  GraduationCap,
  Hammer,
  Landmark,
  LandPlot,
  Receipt,
  Scale,
  Settings2,
  Users,
  Wallet,
} from "lucide-react";
import { dubaiModels as M } from "@/content/dubai";
import HoverReveal from "@/components/shared/HoverReveal";

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

type Mode = "foco" | "fofo";

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

/** The big two-panel picture: who owns, who operates. */
function ModelCard({
  mode,
  active,
  onSelect,
}: {
  mode: Mode;
  active: boolean;
  onSelect: () => void;
}) {
  const d = M[mode];
  const accent = d.accent;
  const owns = mode === "foco" ? "You own it" : "You own it";
  const runs = mode === "foco" ? "We run it" : "You run it";

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className="group relative w-full rounded-[2rem] border p-8 text-left transition-all duration-500 sm:p-10"
      style={{
        borderColor: active
          ? `color-mix(in oklab, ${accent} 55%, transparent)`
          : "color-mix(in oklab, var(--ink) 8%, transparent)",
        background: active
          ? `color-mix(in oklab, ${accent} 8%, white)`
          : "color-mix(in oklab, white 70%, transparent)",
        boxShadow: active ? `0 30px 70px -40px color-mix(in oklab, ${accent} 80%, transparent)` : "none",
      }}
    >
      <div className="flex items-center justify-between">
        <span
          className="inline-flex items-center rounded-full px-4 py-1.5 font-display text-sm leading-none text-white"
          style={{ background: accent }}
        >
          {d.tag}
        </span>
        <span
          className="h-3 w-3 rounded-full transition-all"
          style={{
            background: active ? accent : "color-mix(in oklab, var(--ink) 12%, transparent)",
            boxShadow: active ? `0 0 0 5px color-mix(in oklab, ${accent} 18%, transparent)` : "none",
          }}
          aria-hidden="true"
        />
      </div>

      {/* the picture: a building you own, and a hand that runs it */}
      <div className="mt-8 flex items-end gap-5">
        <div className="flex flex-col items-center">
          <span
            className="flex h-16 w-16 items-center justify-center rounded-2xl"
            style={{ background: `color-mix(in oklab, ${accent} 16%, transparent)`, color: accent }}
            aria-hidden="true"
          >
            <Building2 className="h-7 w-7" />
          </span>
          <span className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/45">
            {owns}
          </span>
        </div>

        <div className="mb-7 flex-1">
          <div
            className="h-[2px] w-full rounded-full"
            style={{
              backgroundImage: `repeating-linear-gradient(90deg, ${accent} 0 6px, transparent 6px 14px)`,
            }}
            aria-hidden="true"
          />
        </div>

        <div className="flex flex-col items-center">
          <span
            className="flex h-16 w-16 items-center justify-center rounded-2xl text-white"
            style={{ background: accent }}
            aria-hidden="true"
          >
            {mode === "foco" ? <Landmark className="h-7 w-7" /> : <Settings2 className="h-7 w-7" />}
          </span>
          <span className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/45">
            {runs}
          </span>
        </div>
      </div>

      <p className="mt-8 font-display text-xl leading-snug text-ink">{d.title}</p>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/55">
        {mode === "foco"
          ? "No licence, no staff, no operating cost. Paid on gross collections."
          : "Your licence, your team, your surplus — with the platform behind you."}
      </p>
    </button>
  );
}

export default function OwnershipModelsSection() {
  const rise = useRise();
  const [mode, setMode] = useState<Mode>("foco");
  const accent = M[mode].accent;

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
            Same brand. Same curriculum. Same system. The only question is who holds the licence,
            who employs the team — and how you get paid.
          </p>
        </motion.div>

        <motion.div className="mt-14 grid gap-6 lg:grid-cols-2" {...rise(0.08)}>
          <ModelCard mode="foco" active={mode === "foco"} onSelect={() => setMode("foco")} />
          <ModelCard mode="fofo" active={mode === "fofo"} onSelect={() => setMode("fofo")} />
        </motion.div>

        {/* the shared platform base */}
        <motion.div
          {...rise(0.12)}
          className="mt-4 rounded-[2rem] border border-ink/[0.07] bg-white/60 px-8 py-5 text-center backdrop-blur-sm"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink/40">
            One platform under both
          </p>
        </motion.div>

        {/* the switchboard */}
        <motion.div {...rise(0.06)} className="mt-20 text-center">
          <p className="font-display text-2xl text-ink sm:text-3xl">Who holds what?</p>
          <p className="mt-2 text-sm text-ink/50">
            Flip the switch. Hover any tile for the fine print.
          </p>

          <div
            className="mx-auto mt-7 inline-flex rounded-full border p-1"
            style={{ borderColor: `color-mix(in oklab, ${accent} 30%, transparent)` }}
            role="tablist"
            aria-label="Ownership model"
          >
            {(["foco", "fofo"] as Mode[]).map((m) => (
              <button
                key={m}
                type="button"
                role="tab"
                aria-selected={mode === m}
                onClick={() => setMode(m)}
                className="relative rounded-full px-7 py-2.5 font-display text-sm"
              >
                {mode === m ? (
                  <motion.span
                    layoutId="model-switch"
                    className="absolute inset-0 rounded-full"
                    style={{ background: M[m].accent }}
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                ) : null}
                <span className={mode === m ? "relative text-white" : "relative text-ink/50"}>
                  {M[m].tag}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {M.rows.map((r, i) => {
            const Icon = ICONS[r.icon as keyof typeof ICONS] ?? LandPlot;
            const who = mode === "foco" ? r.focoWho : r.fofoWho;
            const detail = mode === "foco" ? r.foco : r.fofo;
            const mine = who === "You";
            return (
              <motion.div key={r.id} {...rise(0.03 * i)}>
                <HoverReveal
                  accent={accent}
                  className="h-[172px] rounded-[1.5rem]"
                  detail={
                    <div className="flex h-full flex-col justify-center">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
                        {M[mode].tag}
                      </p>
                      <p className="mt-2 text-[0.9rem] leading-relaxed text-white">{detail}</p>
                    </div>
                  }
                >
                  <div className="flex h-[172px] flex-col justify-between rounded-[1.5rem] border border-ink/[0.07] bg-white/70 p-5 text-left backdrop-blur-sm">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{
                        background: `color-mix(in oklab, ${accent} 14%, transparent)`,
                        color: accent,
                      }}
                      aria-hidden="true"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <div>
                      <p className="font-display text-[0.95rem] leading-tight text-ink">{r.label}</p>
                      <motion.p
                        key={who}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="mt-2 inline-flex rounded-full px-3 py-1 text-[11px] font-semibold leading-none"
                        style={{
                          background: mine
                            ? `color-mix(in oklab, ${accent} 18%, transparent)`
                            : "color-mix(in oklab, var(--ink) 6%, transparent)",
                          color: mine ? accent : "color-mix(in oklab, var(--ink) 55%, transparent)",
                        }}
                      >
                        {who}
                      </motion.p>
                    </div>
                  </div>
                </HoverReveal>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
