import { useRef, type ReactElement } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { storyContent as S } from "@/content/story";
import { ArtStart } from "./art/ArtStart";
import { ArtWrong } from "./art/ArtWrong";
import { ArtRebuild } from "./art/ArtRebuild";
import { ArtMeasure } from "./art/ArtMeasure";
import { ArtMethod } from "./art/ArtMethod";
import { ArtGift } from "./art/ArtGift";

const ART = [ArtStart, ArtWrong, ArtRebuild, ArtMeasure, ArtMethod, ArtGift];
const N = S.beats.length;

export default function StorySection() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const eased = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  // hold on the first beat briefly, then travel to the last
  const x = useTransform(eased, [0.06, 0.94], ["0%", `-${((N - 1) / N) * 100}%`]);
  const railScale = useTransform(eased, [0.06, 0.94], [1 / N, 1]);

  if (reduce) {
    return (
      <section className="relative w-full bg-cream px-6 py-24 sm:px-10">
        <Heading />
        <div className="mx-auto mt-16 flex max-w-5xl flex-col gap-24">
          {S.beats.map((b, i) => (
            <Beat key={b.id} beat={b} Art={ART[i]!} stacked />
          ))}
        </div>
      </section>
    );
  }

  return (
    <>
      {/* mobile / tablet: plain vertical stack */}
      <section className="relative w-full bg-cream px-6 py-20 sm:px-10 lg:hidden">
        <Heading />
        <div className="mx-auto mt-14 flex max-w-2xl flex-col gap-20">
          {S.beats.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Beat beat={b} Art={ART[i]!} stacked />
            </motion.div>
          ))}
        </div>
      </section>

      {/* desktop: pinned horizontal storyboard */}
      <section
        ref={ref}
        className="relative hidden w-full bg-cream lg:block"
        style={{ height: `${N * 100}vh` }}
        aria-label="Two decades of learning"
      >
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
          <div className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(55% 45% at 50% 10%, color-mix(in oklab, var(--lightpink) 26%, transparent), transparent 74%)",
            }}
          />
          <div className="relative z-10 px-10 pt-12">
            <Heading />
          </div>

          <motion.div className="relative z-10 flex flex-1" style={{ x, width: `${N * 100}%` }}>
            {S.beats.map((b, i) => (
              <div key={b.id} className="flex h-full items-center px-16" style={{ width: `${100 / N}%` }}>
                <Beat beat={b} Art={ART[i]!} />
              </div>
            ))}
          </motion.div>

          {/* progress rail */}
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

function Heading() {
  return (
    <div className="mx-auto max-w-5xl text-center lg:text-left">
      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-coral">{S.kicker}</p>
      <p className="mt-3 max-w-[52ch] text-sm text-ink/50 sm:text-base lg:mx-0 mx-auto">{S.intro}</p>
    </div>
  );
}

function Beat({
  beat,
  Art,
  stacked,
}: {
  beat: (typeof S.beats)[number];
  Art: () => ReactElement;
  stacked?: boolean;
}) {
  return (
    <div
      className={
        stacked
          ? "grid gap-8"
          : "mx-auto grid w-full max-w-5xl grid-cols-[1fr_1.1fr] items-center gap-12"
      }
    >
      <div className={stacked ? "text-center sm:text-left" : ""}>
        <span className="font-display text-sm font-semibold tracking-[0.2em] text-coral/70">
          {beat.index}
        </span>
        <h3 className="mt-3 font-display font-semibold leading-[1.05] tracking-[-0.02em] text-ink [font-size:clamp(2rem,4.2vw,3.6rem)]">
          {beat.title}
        </h3>
        <p className="mt-5 max-w-[38ch] text-base leading-relaxed text-ink/55 sm:text-lg">
          {beat.line}
        </p>
      </div>
      <div className={stacked ? "h-56 w-full" : "h-[54vh] max-h-[500px] w-full"}>
        <Art />
      </div>
    </div>
  );
}
