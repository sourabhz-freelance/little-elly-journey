# The logical half of "Happy"

Placed directly after the curriculum section and before the partner framework.
Philosophy first, then proof of method. One new section, three quick-read beats.

Kicker: `Inside the classroom`

Headline: **Happy is the philosophy. This is the daily practice.**

One line: *What a child is actually built on, day after day.*

## Beat 1 — IQ: smarter children, brighter future

A child silhouette (coral/pink, brand-styled) on the left with four labelled
leader lines pointing out from it, each label an ability in its own accent
colour with an icon:

| Ability | Colour | Icon |
|---|---|---|
| Visual ability | cyan | Eye |
| Mental ability | orange | Brain |
| Mathematical ability | turquoise | Sigma |
| Language ability | pink | MessagesSquare |

Labels animate in one after another as the section enters view; the leader
lines draw themselves.

## Beat 2 — Emotional intelligence

To the right of the child: a five-hexagon cluster, brand-coloured, with
**Emotional Intelligence** in the coral centre hex and four around it —
Perceiving emotions, Understanding emotions, Managing emotions, Using
emotions. Headings only, no paragraphs. Gentle stagger + hover lift.

## Beat 3 — The methods behind it

A four-quadrant ring (donut split into four arcs) with a small coral centre
disc reading **Little Elly Method**. Quadrants:

Multiple Intelligence · Montessori · Reggio Emilia · Project-based

Curved labels are hard to read; labels sit flat inside each quadrant instead
of following the arc (the reference screenshot's upside-down text is the one
thing not to copy). Each arc draws in on scroll.

Closing line, centred: **"A happy child, measured in what they can do."**

## Layout

- Desktop: Beat 1 and Beat 2 side by side in one row; Beat 3 as a centred
  block below.
- Mobile: child + abilities stacked as a two-column label grid, hex cluster
  below, method ring last.

## Technical notes

- New `src/content/method.ts` (abilities, EI nodes, pedagogy arcs, copy) and
  `src/components/method/MethodSection.tsx`, plus small sub-components for
  `AbilityDiagram`, `EIHexes` and `MethodRing`.
- Child silhouette drawn as inline SVG in brand colours — not a photo, and not
  the uploaded reference image.
- Hexes and ring arcs are hand-built SVG; motion via framer-motion with the
  existing `EASE = [0.22, 1, 0.36, 1]` and scroll-triggered `whileInView`
  pattern used across the page.
- All colours from existing tokens (coral, cyan, orange, turquoise,
  periwinkle, pink, ink, cream). No new palette.
- Rendered in `src/routes/index.tsx` between `<CurriculumSection />` and
  `<PartnerFrameworkSection />`.
