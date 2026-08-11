# Rework "What we carry" into a countable infographic

Today the section reads as a balance bar plus four boxes of bullet text — and the "19" is a claim nobody can verify by looking. The fix is to make the 19 obligations *the visual itself*, so the count is obvious at a glance and the section stops feeling like a list.

## The idea: the arch

One drawing carries the whole section — a shallow arch (a bridge you walk across).

```text
              . . . . . the trail continues . . . . .
        [05][06][07][08][09][10][11][12][13][14][15][16]
     [04]                                            [17]
   [03]                                                [18]
  [02]                                                  [19]
 [01]                                                     
 ============ you stand here: 4 things ============
   FIND        OPEN        MENTOR      HOLD THE STANDARD
```

- **19 stones form the arch.** Each stone is a small numbered tile, coloured by its cluster (Academics coral, Systems turquoise, Brand orange, Quality periwinkle). The four colour bands are visible as arcs of the curve, so the reader sees the grouping without reading a single word.
- **The deck below is yours** — the four things the Master Franchisee carries, sitting on the arch that holds them up. That is the whole argument, told as a picture: you walk, we hold.
- **Stones reveal on hover/tap** (and on scroll, one after another). Hovering a stone raises it slightly and shows its label in a single caption line under the arch — so all 19 names are available, but only one at a time. No wall of chips.
- **Cluster keys** sit as four small legend pills with counts (Academics 4 · Systems 5 · Brand 5 · Quality 5 = 19), so the arithmetic is explicit.
- The stones draw in sequence as the section enters view, numbers counting 01 → 19, which makes the count land emotionally rather than as a statistic.

## What gets removed

- The you-vs-us progress bar (the arch replaces it — the picture already says it).
- The four heavy cluster cards with bulleted chips.
- The separate "on your side of the beam" card row (folded into the arch's deck).

## What stays

- The grant block, the "where you have a voice" row, and the term timeline stay as they are — they're already light.
- All existing wording from the Franchisor Support Summary is preserved; nothing new is invented.

## Mobile

Below `lg`, the arch flattens into a vertical numbered spine (19 dots down a dotted trail, cluster-coloured, labels always visible in a compact two-column read) with the four "yours" items as the base plate. Same picture, rotated.

## Technical notes

- Edit `src/components/support/FranchisorSupportSection.tsx`: replace `Beam()` with an `Arch()` component. The arch is an SVG path; stone tiles are positioned along it with `getPointAtLength`-equivalent math computed at build time (fixed angle array, no DOM measuring) so SSR renders identically.
- `src/content/franchisorSupport.ts` keeps its four clusters; each item becomes `{ label, short }` so the arch tile can show an abbreviated caption where needed. Item order defines the 01–19 numbering.
- Motion via existing `framer-motion` `whileInView` with staggered delays; respects `useReducedMotion` (stones appear without the draw-in).
- Brand tokens only — coral / turquoise / orange / periwinkle / ink / cream, Fredoka display + Poppins body, dotted-trail motif reused for the arch guideline.
