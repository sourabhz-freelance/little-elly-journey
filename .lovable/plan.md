# Section 02 — "The Hardest Part of Business"

A philosophical, presenter-paced sequence that lands one idea: the painful road to a working formula has already been walked — and it is being handed over.

## How it feels

One full-screen section that reveals a **train of short lines, one after another, as the presenter scrolls**. Nothing appears until scrolled to. Each line lands alone, breathes, then the next arrives. Type is large, quiet, ink on cream. No cards, no icons, no charts, no buttons — this section is pure copy and rhythm.

Two movements:

1. **The cost** — the hurdle lines, tighter spacing, slightly dimmer ink, a dotted trail beside them that keeps breaking.
2. **The gift** — a beat of empty space, then the turn. Larger type, coral accent word, the dotted trail becomes one unbroken flowing line (the brand Trail motif already in the hero).

## Draft copy (editable in one content file)

Movement 1 — the cost
- Every business is built the same way.
- Mistake. Rebuild. Mistake again.
- Twenty years of guessing, priced in.

The turn
- Unless someone has already walked it.

Movement 2 — the gift
- Twenty years of mistakes — already made.
- Every answer — already paid for.
- You don't start from zero. You start from proven.

Closing line (holds on screen, largest)
- **The hardest part is already behind you.** ("already behind you" in coral)

## Motion

- Lines fade + rise as they enter, staggered by scroll position, not by timer, so the presenter controls the pace.
- A vertical dotted paw-trail runs down the left of the column: dashed and interrupted during Movement 1, continuous and gently flowing by the closing line.
- Soft warm radial glow strengthens slightly through the section. Nothing flashes.
- Respects reduced-motion: lines fade only.

## Technical notes

- New `src/content/story.ts` holding the line list and accents, mirroring the `hero.ts` pattern so copy stays editable in one place.
- New `src/components/story/Challenge.tsx`, rendered after `<Hero />` in `src/routes/index.tsx`.
- Uses framer-motion `useScroll` + `useTransform` scoped to the section; reuses `Trail` from `@/components/brand/paw`.
- Fredoka for the lines, Poppins for the small movement labels; only existing brand tokens (ink, coral, cream, pink).
- Section is tall (roughly 220vh) so scroll drives the reveal, with each line snapping into a comfortable reading position on 800px-tall laptops.
- Verified on desktop 1440x800 and mobile with screenshots after build.
