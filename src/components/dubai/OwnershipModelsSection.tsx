import { motion, useReducedMotion } from "framer-motion";
import { Building2, Landmark } from "lucide-react";
import { dubaiModels as M } from "@/content/dubai";

const EASE = [0.22, 1, 0.36, 1] as const;

function useRise() {
  const reduce = useReducedMotion();
  return (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.7, ease: EASE, delay },
        };
}

function Panel({
  tag,
  title,
  accent,
  icon,
  blocks,
  footer,
}: {
  tag: string;
  title: string;
  accent: string;
  icon: React.ReactNode;
  blocks: { title: string; points: readonly string[] }[];
  footer?: { title: string; body: string };
}) {
  const rise = useRise();
  return (
    <motion.div
      {...rise(0.05)}
      className="rounded-[2rem] border bg-white/70 p-8 backdrop-blur-sm sm:p-10"
      style={{ borderColor: `color-mix(in oklab, ${accent} 30%, transparent)` }}
    >
      <div className="flex items-center gap-4">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-2xl text-white"
          style={{ background: accent }}
          aria-hidden="true"
        >
          {icon}
        </span>
        <div>
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.28em]"
            style={{ color: accent }}
          >
            {tag}
          </p>
          <p className="mt-1 font-display text-xl leading-snug text-ink sm:text-2xl">{title}</p>
        </div>
      </div>

      <div className="mt-8 space-y-7">
        {blocks.map((b) => (
          <div key={b.title}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/40">
              {b.title}
            </p>
            <ul className="mt-3 space-y-2.5">
              {b.points.map((p) => (
                <li key={p} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink/65">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: accent }}
                    aria-hidden="true"
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {footer ? (
        <div
          className="mt-8 rounded-2xl p-6"
          style={{ background: `color-mix(in oklab, ${accent} 10%, transparent)` }}
        >
          <p className="font-display text-lg text-ink">{footer.title}</p>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/65">{footer.body}</p>
        </div>
      ) : null}
    </motion.div>
  );
}

export default function OwnershipModelsSection() {
  const rise = useRise();

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
          <p className="mx-auto mt-6 max-w-[60ch] text-base leading-relaxed text-ink/55 sm:text-lg">
            {M.sub}
          </p>
        </motion.div>

        {/* the comparison ladder */}
        <div className="mt-16 overflow-hidden rounded-[2rem] border border-ink/[0.07] bg-white/70 backdrop-blur-sm">
          <div className="grid grid-cols-[1fr] gap-0 border-b border-ink/[0.07] sm:grid-cols-[1.1fr_1fr_1fr]">
            <div className="hidden px-6 py-5 sm:block" />
            <div className="px-6 py-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-coral px-4 py-1.5 font-display text-sm leading-none text-white">
                FOCO
              </span>
              <p className="mt-2 text-xs text-ink/40">You own it. We run it.</p>
            </div>
            <div className="px-6 py-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-turquoise px-4 py-1.5 font-display text-sm leading-none text-white">
                FOFO
              </span>
              <p className="mt-2 text-xs text-ink/40">You own it. You run it.</p>
            </div>
          </div>

          {M.rows.map((r, i) => (
            <motion.div
              key={r.id}
              {...rise(0.03 * i)}
              className="grid grid-cols-1 border-b border-ink/[0.05] last:border-b-0 sm:grid-cols-[1.1fr_1fr_1fr]"
            >
              <div className="px-6 pb-1 pt-5 sm:py-5">
                <p className="font-display text-[0.95rem] text-ink">{r.label}</p>
              </div>
              <div className="px-6 py-2 sm:py-5">
                <p className="text-[0.9rem] leading-relaxed text-ink/60">
                  <span className="mr-2 font-semibold text-coral sm:hidden">FOCO</span>
                  {r.foco}
                </p>
              </div>
              <div className="px-6 pb-5 pt-2 sm:py-5">
                <p className="text-[0.9rem] leading-relaxed text-ink/60">
                  <span className="mr-2 font-semibold text-turquoise sm:hidden">FOFO</span>
                  {r.fofo}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs uppercase tracking-[0.24em] text-ink/35">
          One platform under both models
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Panel
            tag={M.foco.tag}
            title={M.foco.title}
            accent={M.foco.accent}
            icon={<Landmark className="h-6 w-6" />}
            blocks={[M.foco.owns, M.foco.free, M.foco.paid]}
            footer={M.foco.why}
          />
          <Panel
            tag={M.fofo.tag}
            title={M.fofo.title}
            accent={M.fofo.accent}
            icon={<Building2 className="h-6 w-6" />}
            blocks={[M.fofo.holds, M.fofo.lifted, M.fofo.plan]}
          />
        </div>
      </div>
    </section>
  );
}
