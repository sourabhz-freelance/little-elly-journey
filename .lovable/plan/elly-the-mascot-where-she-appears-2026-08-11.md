# Elly the mascot — where she appears

Ten official Elly poses are now available (blocks, reading, pencil, heart, walking, trunk-up, peeking, waving). She should feel like a warm guest who shows up at the right emotional moments — never on the serious financial slides, and never more than one per screen.

## Where she goes (5 placements)

1. **Little Elly hero** — small waving Elly at the lower-left of the section, below the logo lockup, breathing gently. Keeps the hero grown-up but signs it with the brand's face.
2. **H.A.P.P.Y. curriculum wheel** — the reading/blocks Elly tucked beside the wheel as the "child" the curriculum is about.
3. **Inside the classroom (abilities)** — the pencil Elly at the section intro, as the section's presenter.
4. **The gift / states map** — the trunk-up celebratory Elly beside the states list: "she's already here".
5. **Closing partner section (Master Life)** — the heart Elly as the last thing on the page, the emotional handshake.

## Deliberately kept mascot-free

Sector data, cost of entry, revenue flow, requirements and terms — Elly must not undercut the investor-grade numbers.

## Look and behaviour

- Peeking Elly is reserved for one optional edge-of-section peek (curriculum) if it reads well; otherwise unused.
- Each instance: soft float loop (4–6s), fades in on scroll, respects reduced motion, hidden or shrunk on mobile where space is tight.
- Never recoloured, flipped-distorted or cropped through the face.

## Technical notes

- Upload all ten poses through Lovable Assets, pointers in `src/assets/elly/*.png.asset.json`.
- New `src/components/brand/Elly.tsx` — takes a `pose` key plus size/position classes, handles the float animation and reduced-motion in one place.
- New `src/content/elly.ts` mapping pose keys to pointers, so swapping a pose is a one-line change.
- Sections import `<Elly pose="wave" />` etc.; no layout restructuring in any existing section.
