# Sections 07–08 — The H.A.P.P.Y. Curriculum

Placed directly after "The Model". Two sections: one philosophical opener, one
infographic centrepiece. Same brand system (Fredoka headings, Poppins body,
cream ground, coral accent), presenter-paced.

## Section 07 — The philosophy (calm, full-viewport)

Kicker: `The curriculum`

Headline: **A child is not a syllabus to be finished.**

Body (two short paragraphs, large type, centred, generous space):

> Twenty years in classrooms taught us one thing: a child learns best when they
> are happy. Not entertained — happy. Curious, safe, moving, and sure of
> themselves.
>
> So we stopped designing a syllabus and started designing a childhood. We call
> it the H.A.P.P.Y. curriculum — and over **1 lakh parents** have watched it
> work on their own child.

Proof line under it: `1,00,000+ happy parents · 172 centres · 20+ years`
(the 1 lakh figure is the user's; the rest are existing approved proof points).

Motion: text fades and rises in three beats; one soft warm glow behind. Nothing
else — this section is the breath before the infographic.

## Section 08 — The HAPPY Framework (the centrepiece)

A child at the centre, five petals of the framework arranged around them.

```text
              A healthy body
   A lifelong                A n awakened
   love of        [ CHILD ]      mind
   learning
      A capable self    A playful heart
```

- **Centre**: a generated photo-real portrait of a happy, affluent, urban Indian
  child (approx. 4–5 years old) in a soft circular mask with a coral ring —
  warm, premium, not stocky. Prompt specifies Indian child, well-dressed,
  natural light, neutral warm background.
- **Around it**: five cards/nodes, each on a brand colour, connected to the
  centre by thin dotted brand trails (the one place the trail motif earns its
  keep). Desktop: true radial layout around the child. Mobile: the child on top,
  the five nodes stacked beneath — no cramped radial on small screens.

Each node carries a letter, a title and one line:

| Letter | Title | Line | Colour |
|---|---|---|---|
| H | A healthy body | Movement, nutrition, rest — the body a mind depends on. | coral |
| A | An awakened mind | Questions before answers; wonder before worksheets. | cyan |
| P | A playful heart | Play is the work of childhood, and we take it seriously. | yellow |
| P | A capable self | Small independences, practised daily, until they feel ordinary. | periwinkle |
| Y | A lifelong love of learning | The one outcome that outlives every report card. | turquoise |

Note on the acronym: the five pillars are presented as the H.A.P.P.Y. letters in
that order. The final line is labelled `Y` as "Yearning to learn — a lifelong
love of learning" so the acronym resolves cleanly. Say the word if you'd rather
drop the letters and keep the five phrases plain.

Motion: the child scales in first, then the five nodes bloom outward in
sequence (clockwise from the top), dotted connectors drawing as each lands.
Hovering / tapping a node lifts it and deepens its colour — a presenter can park
on one pillar while talking. Reduced motion: all visible, no stagger.

Closing line, centred under the diagram:
**"Happy is not the mood we aim for. It's the method."**

## Technical notes

- Copy in `src/content/curriculum.ts`; components
  `src/components/curriculum/PhilosophySection.tsx` and
  `src/components/curriculum/HappyFrameworkSection.tsx` (with a small
  `PillarNode` sub-component).
- Radial layout computed from angles in one container using absolute
  positioning; connectors in a single overlaid SVG so nothing drifts.
- Child portrait generated to `src/assets/happy-child.jpg`, imported as an ES6
  image import, with descriptive alt text.
- Framer Motion `whileInView` with `once: true` — no pinning (StorySection keeps
  that role).
- Rendered in `src/routes/index.tsx` between `<ModelSection />` and
  `<HappySection />`.
