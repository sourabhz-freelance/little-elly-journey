# Paw system rebuild + Section 02 with illustrations

Two parts: fix the drawing system so every paw/dot in the deck is precise, then build the "hardest part of business" section with illustrations that carry each beat.

## Part 1 — One correct paw silhouette

Replace the old geometric "Creative Paw" (rounded squares, circle, triangle) entirely. New `<Paw>` component on a 100x100 viewBox using the exact pad path and four rotated toe ellipses supplied, accepting either one `color` (mono) or per-toe colors, plus a dashed/outline mode.

Used everywhere: logo eyes, background floaters, walking prints, dashed "open seat", and the focal welcoming paw (coral pad; yellow / periwinkle / cyan / pink toes, slightly larger, breathing 1 to 1.03).

## Part 2 — Hero right-hand scene, one coordinate space

Rebuilt inside a single `viewBox="0 0 600 520"` svg so nothing drifts: pale pink pulsing glow, dotted coral lead-in trail, focal paw at `translate(190 64) scale(2.8)`, three coral walking prints climbing the trail with staggered fade, and the dashed open-seat print at the trail's end.

Animation rule enforced throughout: any element carrying a positioning `transform` attribute never carries a CSS/motion transform animation — breathing and pulsing live on an outer wrapper `<g>`, and the seat pulse animates opacity only (0.3 to 0.85). This is what makes the current seat print jump.

## Part 3 — Background trails

One full-bleed svg, `viewBox="0 0 1440 900"`, `preserveAspectRatio="xMidYMid slice"`. Three paths converging from the left (one lightpink), each stroke-width 3.4, round caps, dasharray `0.5 15`, opacity ~0.55, and `vector-effect="non-scaling-stroke"` so dots stay perfectly round and evenly spaced at any viewport. Slow `stroke-dashoffset` flow 0 to -155.

## Part 4 — Section 02: "The hardest part is already behind you"

A scroll-paced, presenter-led sequence. Lines reveal one at a time as the presenter scrolls; each line is paired with a small, quiet illustration built from the same paw/trail language — no stock icons, no clipart.

Copy (editable in one file):

Movement 1 — the cost
- Every business is built the same way.
- Mistake. Rebuild. Mistake again.
- Twenty years of guessing, priced in.

The turn
- Unless someone has already walked it.

Movement 2 — the gift
- Twenty years of mistakes, already made.
- Every answer, already paid for.
- You don't start from zero. You start from proven.

Closing (largest, holds)
- **The hardest part is already behind you.** ("already behind you" in coral)

Illustrations, one per beat, each drawn in SVG in the brand palette:

1. **The long way** — a single paw print at the bottom and a tangled, doubling-back dotted path that loops on itself before finding its way up.
2. **Mistake. Rebuild.** — a broken dotted line: prints that stop, restart, stop again, with faded ghost prints where steps were abandoned.
3. **Priced in** — the same climb rendered as a steep dotted slope with prints spaced far apart, straining.
4. **The turn** — the tangle resolves: a single clean dotted arc drawn left to right as the line enters.
5. **Already made** — the arc now has confident, evenly spaced prints along it.
6. **Already paid for** — the path arrives at a warm glow, with the dashed open-seat print waiting at the end.
7. **Closing** — the focal welcoming paw, breathing, with the trail arriving into it.

Each illustration animates on entry only (draw-in / fade), tied to scroll position so the presenter controls the pace, and reduces to a plain fade under reduced-motion.

## Technical notes

- `src/components/brand/paw.tsx` rewritten: `Paw` (mono or per-toe, solid or dashed outline), `Trail` updated with `vector-effect="non-scaling-stroke"` and the new dash values. `CreativePaw` and `PawPrint` removed and all call sites updated (`LogoLockup`, `Hero`).
- New `src/components/hero/PawScene.tsx` for the single-svg right-hand scene; `Hero.tsx` regains the two-column desktop grid (text left, scene right) while keeping copy, proof strip, counter, scroll cue, and mouse parallax exactly as they are.
- New `src/content/story.ts` for section-02 copy, and `src/components/story/Challenge.tsx` plus a small `src/components/story/illustrations.tsx` holding the seven SVG scenes.
- Section 02 rendered after `<Hero />` in `src/routes/index.tsx`; scroll driven by framer-motion `useScroll`/`useTransform` scoped to the section.
- Verification: screenshots at desktop 1440x820, an element-level zoom of the right-hand scene to confirm the paw silhouette and round dots, and a mobile pass.
