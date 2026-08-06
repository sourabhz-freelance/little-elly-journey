# Ultra-simplify the homepage (hero)

Goal: one calm, confident title slide. Type carries the moment; almost nothing else moves.

## What stays
- Header: logo lockup + "Master Franchise Partnership" badge
- Eyebrow, headline "Our family is growing." (coral accent), one-line subline
- Proof strip: 172 centres / 19 cities / 20+ years / "India's most admired preschool"
- Scroll cue at the bottom

## What goes
- The right-hand paw scene entirely (focal paw, walking prints, dashed open seat, lead-in trail)
- The three animated background trails
- Mouse parallax and the spring motion values it needs

## What changes
- Layout becomes a single centered column, generously spaced, full viewport height
- Background: one very soft warm glow instead of two layered gradients
- Motion reduced to a simple staggered fade-up for eyebrow, headline, subline, proof strip
- Counter on "172" kept (it is the one number worth animating); everything else static

## Technical notes
- `src/components/hero/Hero.tsx`: remove `Trails`, `PawScene` import, `useMotionValue`/`useSpring`/`useTransform` parallax block; collapse the grid to a centered flex column.
- `src/components/hero/PawScene.tsx`: delete (no other consumer).
- `src/components/brand/paw.tsx`: keep — `Paw` is still used by the logo lockup. `Trail`/`PawOutlineShapes` become unused and can be dropped.
- Content (`src/content/hero.ts`), tokens, and fonts unchanged.

Verify with a 1440x820 desktop and a mobile screenshot after the change.
