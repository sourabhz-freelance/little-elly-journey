import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { demographicsContent as D } from "@/content/sector";
import { Baby, TrendingUp, Briefcase, Landmark, Users, Home, GraduationCap } from "lucide-react";
import { DEFAULT_STATE_ID, STATE_STATS } from "@/content/states";
import { StateSelectorBar } from "./StateSelector";

const ICONS = { Baby, TrendingUp, Briefcase, Landmark, Users, Home, GraduationCap } as const;

const EASE = [0.22, 1, 0.36, 1] as const;

export default function DemographicsSection() {
  const [open, setOpen] = useState<string | null>(D.drivers[0].id);
  const [selectedId, setSelectedId] = useState(DEFAULT_STATE_ID);
  const stateBlockRef = useRef<HTMLDivElement>(null);
  const state = STATE_STATS.find((s) => s.id === selectedId) ?? STATE_STATS[0]!;

  const regionCards = [
    {
      id: "people",
      value: state.people,
      label: `People in ${state.name}`,
      note: "A large, young consumer market on your doorstep.",
      source: "Census 2011",
      accent: "var(--coral)",
    },
    {
      id: "children",
      value: state.children,
      label: "Children aged 0–6",
      note: "The cohort that walks into a preschool, refreshed every year.",
      source: "Census 2011",
      accent: "var(--turquoise)",
    },
    {
      id: "urban",
      value: state.urban,
      label: "Urban population share",
      note: "Urban families are the ones who buy structured early years.",
      source: "Census 2011",
      accent: "var(--orange)",
    },
  ];


  return (
    <section
      className="relative w-full overflow-hidden bg-cream px-6 py-28 sm:px-10 lg:py-36"
      aria-label="India's demographic tailwind"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 20% 20%, color-mix(in oklab, var(--periwinkle) 20%, transparent), transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-5xl">
        <StateSelectorBar
          state={state}
          onSelect={(id) => {
            setSelectedId(id);
            window.setTimeout(
              () => stateBlockRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }),
              120,
            );
          }}
        />

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {D.kicker}
          </p>
          <h2 className="mx-auto mt-5 max-w-[18ch] font-display font-semibold leading-[1.05] tracking-[-0.03em] text-ink [font-size:clamp(2.2rem,5vw,4rem)]">
            {D.headline[0]} <span className="text-coral">{D.headline[1]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[46ch] text-base leading-relaxed text-ink/55 sm:text-lg">
            {D.sub}
          </p>
        </motion.div>

        {/* India first */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto mt-16 max-w-[34ch] text-center font-display text-xl leading-snug text-ink sm:text-2xl"
        >
          {D.indiaKicker}
        </motion.p>

        <div className="mt-10 space-y-4">
          {D.drivers.map((d, i) => {
            const isOpen = open === d.id;
            return (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.08 * i }}
                className="overflow-hidden rounded-3xl border bg-white/70 backdrop-blur-sm"
                style={{
                  borderColor: isOpen
                    ? `color-mix(in oklab, ${d.accent} 45%, transparent)`
                    : "color-mix(in oklab, var(--ink) 8%, transparent)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : d.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-5 px-7 py-6 text-left sm:px-9"
                >
                  {(() => {
                    const Icon = ICONS[d.icon as keyof typeof ICONS];
                    return (
                      <span
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                        style={{
                          background: `color-mix(in oklab, ${d.accent} 16%, transparent)`,
                          color: d.accent,
                        }}
                        aria-hidden="true"
                      >
                        <Icon size={22} strokeWidth={1.7} />
                      </span>
                    );
                  })()}
                  <span
                    className="hidden shrink-0 font-display text-xl font-semibold sm:block sm:text-2xl"
                    style={{ color: d.accent }}
                  >
                    {d.stat}
                  </span>
                  <span className="flex-1 font-display text-lg leading-snug text-ink sm:text-xl">
                    {d.title}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="shrink-0 text-2xl leading-none text-ink/30"
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                    >
                      <div className="px-7 pb-7 sm:px-9 sm:pb-9">
                        <p
                          className="mb-3 font-display text-xl font-semibold sm:hidden"
                          style={{ color: d.accent }}
                        >
                          {d.stat}
                        </p>
                        <p className="max-w-[62ch] text-base leading-relaxed text-ink/60">
                          {d.body}
                        </p>
                        <p className="mt-4 text-xs text-ink/35">{d.source}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* hairline break, then the state */}
        <div className="mx-auto mt-20 h-px w-full max-w-3xl bg-ink/10" />

        <div className="mt-16 scroll-mt-24" ref={stateBlockRef}>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/40">
            Closer to home — {state.name}
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {regionCards.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.08 * i }}
                className="rounded-3xl border bg-white/70 p-7 backdrop-blur-sm"
                style={{ borderColor: `color-mix(in oklab, ${r.accent} 26%, transparent)` }}
              >
                <div className="overflow-hidden">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.p
                      key={`${state.id}-${r.id}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.32, ease: EASE }}
                      className="font-display font-semibold leading-none tracking-[-0.02em] [font-size:clamp(2rem,3.6vw,2.75rem)]"
                      style={{ color: r.accent }}
                    >
                      {r.value}
                    </motion.p>
                  </AnimatePresence>
                </div>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/40">
                  {r.label}
                </p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/60">{r.note}</p>
                <p className="mt-4 text-xs text-ink/35">{r.source}</p>
              </motion.div>
            ))}
          </div>
          <p className="mx-auto mt-5 max-w-[70ch] text-center text-xs leading-relaxed text-ink/35">
            Source: Census of India 2011. The three figures above tailor to the state selected for
            this meeting, and reset to the default when the page is refreshed.
          </p>
        </div>

      </div>
    </section>
  );
}
