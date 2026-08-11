import { motion, useReducedMotion } from "framer-motion";
import { EllyFloating } from "@/components/brand/Elly";
import {
  Eye,
  Brain,
  Sigma,
  MessagesSquare,
  Heart,
  Compass,
  Waves,
  Sparkles,
} from "lucide-react";
import { methodContent as M } from "@/content/method";

const EASE = [0.22, 1, 0.36, 1] as const;
const ICONS = { Eye, Brain, Sigma, MessagesSquare } as const;
const EI_ICONS = [Heart, Compass, Waves, Sparkles] as const;

const IMAGES: Record<string, string> = {
  visual: "/method/visual.jpg",
  mental: "/method/mental.jpg",
  math: "/method/math.jpg",
  language: "/method/language.jpg",
  perceiving: "/method/perceiving.jpg",
  understanding: "/method/understanding.jpg",
  managing: "/method/managing.jpg",
  using: "/method/using.jpg",
};

export default function MethodSection() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.7, ease: EASE, delay },
        };

  return (
    <section
      className="relative w-full overflow-hidden bg-cream px-6 py-28 sm:px-10 lg:py-36"
      aria-label="Inside the classroom: abilities, emotional intelligence and methodology"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 0%, color-mix(in oklab, var(--periwinkle) 12%, transparent), transparent 70%)",
        }}
      />

      {/* Elly presents the classroom */}
      <EllyFloating
        pose="pencil"
        float={5.5}
        className="absolute right-2 top-16 z-0 hidden h-40 w-40 opacity-95 xl:block"
      />


      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div className="text-center" {...rise(0)}>
          <h2 className="mx-auto max-w-[20ch] font-display font-semibold leading-[1.05] tracking-[-0.03em] text-ink [font-size:clamp(2.2rem,5vw,4rem)]">
            {M.headline[0]} <span className="text-coral">{M.headline[1]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[42ch] text-base leading-relaxed text-ink/55 sm:text-lg">
            {M.sub}
          </p>
        </motion.div>

        {/* Beat 1 — abilities */}
        <div className="mt-20">
          <motion.p
            className="text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/40"
            {...rise(0.05)}
          >
            {M.iqTitle}
          </motion.p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {M.abilities.map((a, i) => {
              const Icon = ICONS[a.icon as keyof typeof ICONS];
              return (
                <motion.div
                  key={a.id}
                  className="overflow-hidden rounded-3xl border border-ink/[0.07] bg-white/70 backdrop-blur-sm"
                >
                  <img
                    src={IMAGES[a.id]}
                    alt={a.title}
                    loading="eager"
                    width={944}
                    height={704}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="flex items-center gap-3 p-6">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                      style={{
                        background: `color-mix(in oklab, ${a.accent} 14%, transparent)`,
                        color: a.accent,
                      }}
                      aria-hidden="true"
                    >
                      <Icon size={18} strokeWidth={1.6} />
                    </span>
                    <p className="font-display text-lg leading-snug text-ink">
                      {a.title}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Beat 2 — emotional intelligence */}
        <div className="mt-20">
          <motion.p
            className="text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/40"
            {...rise(0.05)}
          >
            {M.eiTitle}
          </motion.p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {M.eiNodes.map((n, i) => {
              const Icon = EI_ICONS[i % EI_ICONS.length]!;
              return (
                <motion.div
                  key={n.id}
                  className="overflow-hidden rounded-3xl border border-ink/[0.07] bg-white/70 backdrop-blur-sm"
                >
                  <img
                    src={IMAGES[n.id]}
                    alt={n.title}
                    loading="eager"
                    width={944}
                    height={704}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="flex items-center gap-3 p-6">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                      style={{
                        background: `color-mix(in oklab, ${n.accent} 14%, transparent)`,
                        color: n.accent,
                      }}
                      aria-hidden="true"
                    >
                      <Icon size={18} strokeWidth={1.6} />
                    </span>
                    <p className="font-display text-base leading-snug text-ink sm:text-lg">
                      {n.title}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.p
          className="mx-auto mt-20 max-w-[26ch] text-center font-display leading-tight text-ink [font-size:clamp(1.5rem,3vw,2.4rem)]"
          {...rise(0.1)}
        >
          {M.closing[0]} <span className="text-coral">{M.closing[1]}</span>
        </motion.p>
      </div>
    </section>
  );
}
