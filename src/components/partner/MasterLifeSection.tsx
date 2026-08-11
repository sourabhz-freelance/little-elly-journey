import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  School,
  PhoneCall,
  Compass,
  LineChart,
  CarFront,
  GraduationCap,
  Coffee,
  Users,
  PenLine,
  Sunrise,
  Handshake,
  PartyPopper,
} from "lucide-react";
import { masterLifeContent as M } from "@/content/masterLife";
import { LifeArt } from "./lifeArt";

const EASE = [0.22, 1, 0.36, 1] as const;

const ICONS = {
  School,
  PhoneCall,
  Compass,
  LineChart,
  CarFront,
  GraduationCap,
  Coffee,
  Users,
  PenLine,
  Sunrise,
  Handshake,
  PartyPopper,
} as const;

type Scene = (typeof M.scenes)[number];

function SceneCard({ s }: { s: Scene }) {
  const Icon = ICONS[s.icon as keyof typeof ICONS];
  return (
    <div
      className="flex h-full w-[21rem] shrink-0 flex-col rounded-[2rem] border bg-white/75 p-7 backdrop-blur-sm sm:w-[23rem]"
      style={{ borderColor: `color-mix(in oklab, ${s.accent} 34%, transparent)` }}
    >
      <div
        className="relative overflow-hidden rounded-[1.4rem] px-3 py-2"
        style={{ background: `color-mix(in oklab, ${s.accent} 9%, var(--cream))` }}
      >
        <div className="h-[8.5rem] w-full">
          <LifeArt name={s.art} />
        </div>
        <span className="absolute right-4 top-3 font-display text-xs font-semibold tracking-[0.2em] text-ink/25">
          {s.index}
        </span>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
          style={{ background: `color-mix(in oklab, ${s.accent} 15%, transparent)`, color: s.accent }}
          aria-hidden="true"
        >
          <Icon size={20} strokeWidth={1.7} />
        </span>
      <p className="font-display text-xl leading-snug text-ink">{s.title}</p>
      </div>
      <p className="mt-3 text-[0.9rem] leading-relaxed text-ink/55">{s.line}</p>
      <span
        className="mt-5 block h-1 w-12 rounded-full"
        style={{ background: s.accent, opacity: 0.5 }}
        aria-hidden="true"
      />
    </div>
  );
}

function Heading() {
  return (
    <div className="mx-auto max-w-5xl text-center">
      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">{M.kicker}</p>
      <h2 className="mx-auto mt-5 max-w-[22ch] font-display font-semibold leading-[1.06] tracking-[-0.03em] text-ink [font-size:clamp(2rem,4.4vw,3.4rem)]">
        {M.headline[0]} <span className="text-coral">{M.headline[1]}</span>
      </h2>
      <p className="mx-auto mt-5 max-w-[40ch] text-base text-ink/55 sm:text-lg">{M.sub}</p>
    </div>
  );
}

export default function MasterLifeSection() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const eased = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });
  const x = useTransform(eased, [0.05, 0.95], ["1.5%", "-84%"]);
  const railScale = useTransform(eased, [0.05, 0.95], [0.08, 1]);

  const stacked = (
    <div className="mx-auto mt-14 grid max-w-2xl gap-6 sm:grid-cols-2">
      {M.scenes.map((s, i) => (
        <motion.div
          key={s.id}
          initial={reduce ? false : { opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: EASE, delay: (i % 2) * 0.08 }}
          className="[&>div]:w-full"
        >
          <SceneCard s={s} />
        </motion.div>
      ))}
    </div>
  );

  if (reduce) {
    return (
      <section className="relative w-full bg-cream px-6 py-24 sm:px-10">
        <Heading />
        {stacked}
      </section>
    );
  }

  return (
    <>
      <section className="relative w-full bg-cream px-6 py-24 sm:px-10 lg:hidden">
        <Heading />
        {stacked}
        <p className="mx-auto mt-14 max-w-[26ch] text-center font-display text-2xl leading-tight text-ink">
          {M.closing}
        </p>
      </section>

      <section
        ref={ref}
        className="relative hidden w-full bg-cream lg:block"
        style={{ height: "760vh" }}
        aria-label="The life of a master franchise partner"
      >
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(55% 45% at 50% 12%, color-mix(in oklab, var(--yellow) 22%, transparent), transparent 74%)",
            }}
          />
          <div className="relative z-10 px-10 pt-14">
            <Heading />
          </div>

          <div className="relative z-10 flex flex-1 items-center overflow-hidden">
            <motion.div className="flex gap-7 pl-10" style={{ x }}>
              {M.scenes.map((s) => (
                <div key={s.id} className="h-[24rem]">
                  <SceneCard s={s} />
                </div>
              ))}
              <div className="flex h-[24rem] w-[26rem] shrink-0 items-center gap-6">
                <p className="font-display text-3xl leading-tight text-ink">
                  {M.closing.split(" He's ")[0]}{" "}
                  <span className="text-coral">He&rsquo;s building a network.</span>
                </p>
              </div>
            </motion.div>
          </div>

          <div className="relative z-10 flex items-center gap-4 px-10 pb-10">
            <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-ink/10">
              <motion.div
                className="h-full origin-left rounded-full bg-coral"
                style={{ scaleX: railScale }}
              />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/40">
              Keep scrolling
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
