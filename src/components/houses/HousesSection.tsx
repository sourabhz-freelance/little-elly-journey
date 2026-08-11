import { motion, useReducedMotion } from "framer-motion";
import { housesContent as H } from "@/content/houses";
import learningEdgeAsset from "@/assets/learning-edge.png.asset.json";
import k2Asset from "@/assets/k2-learning.png.asset.json";

const EASE = [0.22, 1, 0.36, 1] as const;

const LOGOS: Record<string, string> = {};

const HOUSE_LOGOS: Record<string, string> = {
  "learning-edge": learningEdgeAsset.url,
  k2: k2Asset.url,
};

// Optically matched sizes: K2 is a wide lockup, Learning Edge is a compact stack.
const HOUSE_LOGO_CLASS: Record<string, string> = {
  "learning-edge": "h-28 max-w-[22rem]",
  k2: "h-14 max-w-[13rem]",
};




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

function monogram(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function BrandTile({
  name,
  note,
  id,
  accent,
  highlight,
}: {
  name: string;
  note: string;
  id: string;
  accent: string;
  highlight?: boolean;
}) {
  const logo = LOGOS[id];
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border p-3 transition-colors ${
        highlight
          ? "border-coral/35 bg-coral/[0.07] shadow-[0_14px_34px_-22px_var(--coral)]"
          : "border-ink/8 bg-white/70"
      }`}
    >
      <span
        className={`flex h-12 shrink-0 items-center justify-center overflow-hidden rounded-xl ${
          logo ? "w-[4.5rem] bg-white p-1.5" : "w-12"
        }`}
        style={
          logo
            ? { boxShadow: `0 0 0 1px color-mix(in oklab, ${accent} 16%, transparent)` }
            : {
                background: `color-mix(in oklab, ${accent} 12%, transparent)`,
                color: accent,
              }
        }
        aria-hidden="true"
      >
        {logo ? (
          <img src={logo} alt="" className="h-full w-full object-contain" />
        ) : (
          <span className="font-display text-[0.8rem] font-semibold tracking-tight">
            {monogram(name)}
          </span>
        )}
      </span>

      <span className="min-w-0">
        <span className="block truncate font-display text-[0.98rem] leading-tight text-ink">
          {name}
        </span>
        <span className="block truncate text-[0.78rem] leading-snug text-ink/45">{note}</span>
      </span>
    </div>
  );
}

function House({ house, delay }: { house: (typeof H.houses)[number]; delay: number }) {
  const rise = useRise();
  return (
    <motion.div {...rise(delay)} className="flex flex-col">
      <div
        className="rounded-3xl border bg-white/80 p-6 text-center backdrop-blur-sm sm:p-7"
        style={{ borderColor: `color-mix(in oklab, ${house.accent} 28%, transparent)` }}
      >
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.28em]"
          style={{ color: house.accent }}
        >
          {house.role}
        </p>
        {HOUSE_LOGOS[house.id] ? (
          <img
            src={HOUSE_LOGOS[house.id]}
            alt={`${house.name} logo`}
            className={`mx-auto mt-3 w-auto object-contain ${
              HOUSE_LOGO_CLASS[house.id] ?? "h-20 max-w-[18rem]"
            }`}

          />
        ) : (
          <p className="mt-3 font-display text-2xl leading-tight text-ink sm:text-[1.7rem]">
            {house.name}
          </p>
        )}

        <p className="mx-auto mt-3 max-w-[34ch] text-sm leading-relaxed text-ink/55">
          {house.line}
        </p>
      </div>

      <div className="mt-5 grid gap-3">
        {house.brands.map((b) => (
          <BrandTile
            key={b.id}
            id={b.id}
            name={b.name}
            note={b.note}
            accent={house.accent}
            highlight={"highlight" in b ? Boolean(b.highlight) : false}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function HousesSection() {
  const rise = useRise();
  const reduce = useReducedMotion();

  return (
    <section
      className="relative w-full overflow-hidden bg-cream px-6 py-28 sm:px-10 lg:py-36"
      aria-label="The houses behind this partnership"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46% 40% at 50% 20%, color-mix(in oklab, var(--yellow) 20%, transparent), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div className="text-center" {...rise(0)}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {H.portfolioKicker}
          </p>
          <h2 className="mx-auto mt-5 max-w-[20ch] font-display font-semibold leading-[1.06] tracking-[-0.03em] text-ink [font-size:clamp(1.9rem,4.4vw,3.3rem)]">
            {H.portfolioHeadline[0]}{" "}
            <span className="text-coral">{H.portfolioHeadline[1]}</span>
          </h2>
        </motion.div>

        {/* the two houses, joined at a shared centre */}
        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1fr_11rem_1fr] lg:gap-6">

          <House house={H.houses[0]!} delay={0.05} />

          <div className="relative hidden lg:flex lg:h-[10rem] lg:items-center lg:justify-center">
            <motion.div
              className="pointer-events-none absolute left-0 right-0 top-1/2 h-[3px]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, var(--pink) 1.5px, transparent 1.6px)",
                backgroundSize: "14px 3px",
                backgroundRepeat: "repeat-x",
                transformOrigin: "center",
              }}
              aria-hidden="true"
              initial={reduce ? false : { scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 0.85 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
            />
            <motion.span
              className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-coral/30 bg-cream px-3 text-center font-display text-[0.8rem] leading-tight text-coral shadow-[0_14px_34px_-20px_var(--coral)]"
              initial={reduce ? false : { opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
            >
              {H.centreNode}
            </motion.span>
          </div>

          <House house={H.houses[1]!} delay={0.12} />
        </div>

        {/* zoom in on Little Elly */}
        <motion.div className="mt-20 text-center" {...rise(0.05)}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">
            {H.zoomKicker}
          </p>
          <p className="mx-auto mt-5 max-w-[26ch] font-display text-2xl leading-tight text-ink sm:text-[2rem]">
            {H.zoomLine[0]} <span className="text-coral">{H.zoomLine[1]}</span>
          </p>
          <p className="mt-6 text-xs text-ink/35">{H.zoomNote}</p>
        </motion.div>
      </div>
    </section>
  );
}
