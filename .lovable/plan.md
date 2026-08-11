# The houses behind this partnership

A new opening chapter, placed immediately after the hero and before the H.A.P.P.Y. curriculum section. It introduces the two groups standing behind this master-franchise opportunity, then narrows down to Little Elly.

## The narrative in three beats

1. **Two houses, one table.** K2 Learning on the left, Learning Edge on the right, joined at the centre by a dotted brand trail meeting at a coral node. Nothing literally says "joint venture" — the visual and copy imply two established groups coming together for this.
2. **What each house holds.** Under each holding brand, its portfolio as logo cards (placeholder marks until you send the real logos):
   - K2 Learning: Career Utsav (career guidance IP/event), Academic City (boarding school), Foundation (group of pre-universities), Edify (CBSE school)
   - Learning Edge: Little Elly, Glentree Academy, Elly Childcare, Cocoon Early Learning, LETR (teacher training & research)
3. **Zoom in.** Every card dims except Little Elly, which lifts and glows in coral, with a line to the effect of: today's conversation is about one of these — Little Elly. This hands off into the existing "our family is growing" / 172-centres material.

## Look and feel

- Cream section, same rhythm as the rest of the deck: coral kicker, Fredoka headline, Poppins body.
- The two houses sit as two soft white columns; a dotted pink trail arcs from each into a shared centre point, reusing the existing Trail motif.
- Portfolio brands render as small rounded logo tiles with the brand name below; the tile holds a placeholder monogram mark now and swaps to your real logo files later with no layout change.
- Scroll-in: houses rise first, trail draws, portfolio tiles stagger in, then the Little Elly spotlight resolves last.
- Reduced-motion respected, mobile stacks to a single column.

## Technical notes

- New `src/content/houses.ts` holding both groups, their brands, and all copy (single place to edit names/taglines).
- New `src/components/houses/HousesSection.tsx` plus a small `BrandTile` that takes an optional `logo` import and falls back to a monogram placeholder.
- Rendered in `src/routes/index.tsx` directly after `<Hero />`, before `<CurriculumSection />`.
- Logos: once you share the files, they drop into `src/assets/brands/` and get wired into `houses.ts` — no component changes needed.

## Open item

Real logo assets for K2 Learning, Career Utsav, Academic City, Foundation, Edify, Learning Edge, Glentree Academy, Elly Childcare, Cocoon Early Learning and LETR. Until then, styled monogram placeholders stand in.
