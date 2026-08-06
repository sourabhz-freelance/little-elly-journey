# Section 02 — "We've already walked it" (the invisible asset)

A presenter-paced, horizontal storyboard: as the presenter scrolls, the story
moves sideways along one continuous dotted Trail, beat by beat, and ends in a
gift box that opens toward the prospect.

## Why horizontal

A left-to-right journey is the honest metaphor here: two decades of walking a
road. Vertical scrolling would read as a list of features; horizontal reads as a
journey with a destination. Mechanically it stays a normal downward scroll — the
section pins to the viewport and vertical scroll drives horizontal movement, so
the presenter never has to learn a new gesture and can pause on any beat.

## The storyboard (6 beats)

```text
 01 ────── 02 ────── 03 ────── 04 ────── 05 ────── 06
 Start     Fail      Redo      Measure   Repeat    The gift
 broken dotted trail ──────────────────► solid confident trail
```

1. **We started.** One small paw print, one faint dotted trail heading off into
   nothing. Copy: "Twenty years ago there was no map."
2. **We got it wrong.** The trail forks and doubles back; scattered off-path
   prints. Copy: "We took the wrong turns so you don't have to."
3. **We rebuilt.** Curriculum blocks assemble/disassemble/reassemble into a
   clean stack. Copy: "Rewrote the curriculum. Then rewrote it again."
4. **We listened, we measured.** Small parent/child marks feeding into rising
   bars. Copy: "Every classroom taught us something a spreadsheet couldn't."
5. **It became a way.** Many prints converging into one confident trail; a
   cluster of dots blooming into 172. Copy: "172 centres later, it isn't luck.
   It's a method."
6. **The invisible asset, gifted.** A gift box (coral, yellow ribbon) opens and
   the whole trail pours out of it toward the viewer, ending at an open dashed
   "seat kept open" paw print. Copy: "The hardest part is already done. We'd
   like to hand it to you."

Each beat: oversized Fredoka line + one short Poppins support line + its own
illustration. Type sits left, illustration right, alternating slightly so it
breathes.

## Motion rules

- Beats fade/slide in as they enter the centre of the viewport, and dim slightly
  as they leave — one beat is always the hero on screen.
- The connecting Trail draws itself continuously across the whole section:
  broken and hesitant in beats 1–2, tightening and becoming continuous by 5–6.
- Gift box only opens once beat 6 is centred (the presenter's punchline).
- A slim progress rail at the bottom shows position 1–6 so the presenter knows
  where they are.
- Reduced-motion: all beats visible, no pinning, no auto-draw.

## Illustrations

All custom SVG built from the existing brand paw silhouette, dotted trail,
and brand palette — no stock art, no mascot. Mono/low-opacity paw silhouettes as
texture; coral/yellow/periwinkle/cyan/pink used sparingly as accents on the
focal element of each beat.

## Technical notes

- New `src/components/story/StorySection.tsx`, one file per illustration under
  `src/components/story/art/`, copy in `src/content/story.ts`.
- Pinning + horizontal translation via framer-motion `useScroll` on the section
  container with `useTransform` mapping scroll progress to `x`; sticky wrapper,
  section height ≈ 600vh for comfortable pacing.
- Trail draw uses `stroke-dashoffset` bound to the same scroll progress; dots
  keep `vector-effect="non-scaling-stroke"`.
- Below `lg`, drop the pin and stack the six beats vertically (same copy, same
  art) so it stays presentable on a tablet.
- Hero stays untouched.
