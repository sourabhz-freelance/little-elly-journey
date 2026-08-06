import { motion, useReducedMotion } from "framer-motion";
import { Eye, Brain, Sigma, MessagesSquare } from "lucide-react";
import { methodContent as M } from "@/content/method";

const EASE = [0.22, 1, 0.36, 1] as const;
const ICONS = { Eye, Brain, Sigma, MessagesSquare } as const;

const HEX = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

/** Simple side-profile child silhouette, brand coral/pink. */
function ChildSilhouette() {
  return (
    <svg viewBox="0 0 200 320" className="h-full w-full" aria-hidden="true">
      <g fill="var(--coral)">
        <circle cx={104} cy={54} r={44} />
        <path d="M62 96 h74 a26 26 0 0 1 26 26 v52 a18 18 0 0 1 -18 18 h-8 v72 a16 16 0 0 1 -16 16 h-8 v22 h-30 v-22 h-8 a16 16 0 0 1 -16 -16 v-72 h-6 a18 18 0 0 1 -18 -18 v-52 a26 26 0 0 1 26 -26 z" />
        <path d="M52 292 h56 a12 12 0 0 1 12 12 v6 h-80 v-6 a12 12 0 0 1 12 -12 z" />
      </g>
      {/* bubbles */}
      {[
        { cx: 168, cy: 60, r: 13, fill: "var(--cyan)" },
        { cx: 190, cy: 44, r: 9, fill: "var(--orange)" },
        { cx: 158, cy: 88, r: 8, fill: "var(--turquoise)" },
        { cx: 178, cy: 104, r: 5, fill: "var(--yellow)" },
      ].map((b, i) => (
        <motion.circle
          key={i}
          {...b}
          animate={{ y: [0, -8, 0], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}

export default function MethodSection() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.7, ease: EASE, delay },
        };

  return (
    <section
      className="relative w-full overflow-hidden bg-cream px-6 py-28 sm:px-10 lg:py-36"
      aria-label="Inside the classroom: IQ, emotional intelligence and methodology"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 70% 20%, color-mix(in oklab, var(--cyan) 16%, transparent), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div className="text-center" {...rise(0)}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {M.kicker}
          </p>
          <h2 className="mx-auto mt-5 max-w-[20ch] font-display font-semibold leading-[1.05] tracking-[-0.03em] text-ink [font-size:clamp(2.2rem,5vw,4rem)]">
            {M.headline[0]} <span className="text-coral">{M.headline[1]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[42ch] text-base leading-relaxed text-ink/55 sm:text-lg">
            {M.sub}
          </p>
        </motion.div>

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-2">
          {/* Beat 1 — IQ */}
          <motion.div {...rise(0.05)}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/40">
              {M.iqTitle}
            </p>
            <div className="mt-8 flex items-center gap-6 sm:gap-10">
              <div className="h-56 w-36 shrink-0 sm:h-72 sm:w-44">
                <ChildSilhouette />
              </div>
              <ul className="flex-1 space-y-4">
                {M.abilities.map((a, i) => {
                  const Icon = ICONS[a.icon as keyof typeof ICONS];
                  return (
                    <motion.li
                      key={a.id}
                      className="flex items-center gap-3"
                      initial={reduce ? false : { opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.55, ease: EASE, delay: 0.2 + i * 0.12 }}
                    >
                      <span
                        className="h-px w-6 shrink-0"
                        style={{ background: `color-mix(in oklab, ${a.accent} 55%, transparent)` }}
                        aria-hidden="true"
                      />
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                        style={{
                          background: `color-mix(in oklab, ${a.accent} 16%, transparent)`,
                          color: a.accent,
                        }}
                        aria-hidden="true"
                      >
                        <Icon size={20} strokeWidth={1.7} />
                      </span>
                      <span
                        className="font-display text-lg leading-snug sm:text-xl"
                        style={{ color: a.accent }}
                      >
                        {a.title}
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>

          {/* Beat 2 — EI */}
          <motion.div {...rise(0.15)}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/40">
              {M.eiTitle}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="col-span-2 flex justify-center">
                <div
                  className="flex h-24 w-28 items-center justify-center bg-coral px-3 text-center sm:h-28 sm:w-32"
                  style={{ clipPath: HEX }}
                >
                  <span className="font-display text-sm leading-tight text-cream sm:text-base">
                    {M.eiCentre}
                  </span>
                </div>
              </div>
              {M.eiNodes.map((n, i) => (
                <motion.div
                  key={n.id}
                  className="flex justify-center"
                  initial={reduce ? false : { opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.25 + i * 0.1 }}
                >
                  <div
                    className="flex h-24 w-28 items-center justify-center px-3 text-center transition-transform duration-300 hover:-translate-y-1 sm:h-28 sm:w-32"
                    style={{ clipPath: HEX, background: n.accent }}
                  >
                    <span className="font-display text-sm leading-tight text-ink/85 sm:text-base">
                      {n.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Beat 3 — methods ring */}
        <motion.div className="mt-24 text-center" {...rise(0.05)}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/40">
            {M.methodsTitle}
          </p>
        </motion.div>

        <div className="relative mx-auto mt-10 aspect-square w-full max-w-[26rem]">
          <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
            {M.methods.map((m, i) => {
              const start = -90 + i * 90 + 2;
              const end = start + 86;
              const rad = (d: number) => (d * Math.PI) / 180;
              const p = (r: number, d: number) => [
                100 + r * Math.cos(rad(d)),
                100 + r * Math.sin(rad(d)),
              ];
              const [x1, y1] = p(92, start);
              const [x2, y2] = p(92, end);
              const [x3, y3] = p(48, end);
              const [x4, y4] = p(48, start);
              return (
                <motion.path
                  key={m.id}
                  d={`M${x1} ${y1} A92 92 0 0 1 ${x2} ${y2} L${x3} ${y3} A48 48 0 0 0 ${x4} ${y4} Z`}
                  fill={m.accent}
                  initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, ease: EASE, delay: 0.1 + i * 0.12 }}
                  style={{ transformOrigin: "100px 100px" }}
                />
              );
            })}
            <circle cx={100} cy={100} r={40} fill="var(--coral)" />
          </svg>

          <div className="pointer-events-none absolute left-1/2 top-1/2 w-24 -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="font-display text-sm leading-tight text-cream">
              {M.methodsCentre}
            </span>
          </div>

          {M.methods.map((m, i) => {
            const mid = -90 + i * 90 + 45;
            const rad = (mid * Math.PI) / 180;
            const x = 50 + 35 * Math.cos(rad);
            const y = 50 + 35 * Math.sin(rad);
            return (
              <motion.span
                key={m.id}
                className="absolute w-24 -translate-x-1/2 -translate-y-1/2 text-center font-display text-sm leading-tight text-ink/85 sm:text-base"
                style={{ left: `${x}%`, top: `${y}%` }}
                initial={reduce ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.3 + i * 0.12 }}
              >
                {m.title}
              </motion.span>
            );
          })}
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
