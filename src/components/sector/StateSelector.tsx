import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, MapPin, X } from "lucide-react";
import { Paw } from "@/components/brand/paw";
import { STATE_STATS, type StateStat } from "@/content/states";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Faint dotted Trail flourish. */
function TrailWisp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 60" className={className} aria-hidden="true" fill="none">
      <path
        d="M2 40 C 80 4, 150 60, 220 28 S 350 8, 398 34"
        stroke="var(--pink)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="0.1 17"
      />
    </svg>
  );
}

export function StateSelectorBar({
  state,
  onSelect,
}: {
  state: StateStat;
  onSelect: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative mx-auto mb-16 w-full max-w-xl text-center">
        <Paw className="pointer-events-none absolute -left-2 -top-4 h-9 w-9 opacity-[0.06]" />

        <p className="relative text-[10px] font-medium uppercase tracking-[0.28em] text-ink/40">
          Region shown
        </p>

        <motion.button
          type="button"
          onClick={() => setOpen(true)}
          whileHover={{ y: -1 }}
          transition={{ duration: 0.25, ease: EASE }}
          aria-haspopup="dialog"
          aria-expanded={open}
          className="group relative mt-3 inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-white/70 px-5 py-2.5 text-left shadow-[0_4px_14px_-10px_color-mix(in_oklab,var(--ink)_60%,transparent)] backdrop-blur-sm transition-colors hover:border-coral/40"
        >
          <MapPin
            size={15}
            strokeWidth={1.9}
            className="text-ink/35 transition-colors group-hover:text-coral"
            aria-hidden="true"
          />
          <span className="font-display text-base font-semibold text-coral">{state.name}</span>
          <ChevronDown size={16} strokeWidth={1.9} className="text-ink/30" aria-hidden="true" />
        </motion.button>
      </div>

      <StateOverlay
        open={open}
        selectedId={state.id}
        onClose={() => setOpen(false)}
        onPick={(id) => {
          onSelect(id);
          setOpen(false);
        }}
      />
    </>
  );
}

function StateOverlay({
  open,
  selectedId,
  onClose,
  onPick,
}: {
  open: boolean;
  selectedId: string;
  onClose: () => void;
  onPick: (id: string) => void;
}) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    setQ("");
    const t = window.setTimeout(() => inputRef.current?.focus(), 60);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  const filtered = useMemo(() => {
    const n = q.trim().toLowerCase();
    return n ? STATE_STATS.filter((s) => s.name.toLowerCase().includes(n)) : STATE_STATS;
  }, [q]);

  const groups: Array<{ label: string; items: StateStat[] }> = [
    { label: "States", items: filtered.filter((s) => s.group === "State") },
    { label: "Union Territories", items: filtered.filter((s) => s.group === "Union Territory") },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE }}
        >
          <div
            className="absolute inset-0 bg-ink/55 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Choose a state or union territory"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.98 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.985 }}
            transition={{ duration: 0.32, ease: EASE }}
            className="relative z-10 max-h-[86vh] w-full max-w-2xl overflow-hidden rounded-3xl border border-coral/25 bg-cream shadow-[0_40px_90px_-30px_color-mix(in_oklab,var(--ink)_45%,transparent)]"
          >
            <Paw className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rotate-12 opacity-[0.08]" />
            <TrailWisp className="pointer-events-none absolute -bottom-3 left-0 w-full opacity-30" />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-ink/50 transition-colors hover:text-coral"
            >
              <X size={17} strokeWidth={2} />
            </button>

            <div className="max-h-[86vh] overflow-y-auto px-7 py-9 sm:px-10">
              <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                Who&apos;s in the room?
              </h3>
              <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-ink/60">
                Pick the state or union territory your prospect is from — the three figures below
                will speak to them. Your choice resets when the page is refreshed.
              </p>

              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search a state…"
                aria-label="Search a state"
                className="mt-6 w-full rounded-full border border-ink/10 bg-white/85 px-5 py-3 text-sm text-ink outline-none placeholder:text-ink/35 focus:border-coral/50"
              />

              {groups.map((g) =>
                g.items.length === 0 ? null : (
                  <div key={g.label} className="mt-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-ink/40">
                      {g.label}
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                      {g.items.map((s) => {
                        const active = s.id === selectedId;
                        return (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => onPick(s.id)}
                            aria-pressed={active}
                            className={
                              active
                                ? "rounded-full bg-coral px-4 py-2.5 text-center text-[0.8rem] font-semibold leading-tight text-cream shadow-[0_8px_22px_-12px_color-mix(in_oklab,var(--coral)_90%,transparent)]"
                                : "rounded-full border border-ink/10 bg-white/80 px-4 py-2.5 text-center text-[0.8rem] leading-tight text-ink/75 transition-colors hover:border-coral/60 hover:text-coral"
                            }
                          >
                            {s.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ),
              )}

              {filtered.length === 0 && (
                <p className="mt-8 text-sm text-ink/45">No match. Try another spelling.</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
