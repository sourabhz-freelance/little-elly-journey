# Section 07 — The H.A.P.P.Y. Curriculum

One section, placed directly after "The Model". It opens philosophically, then
resolves into the curriculum infographic in the same scroll. Same brand system
(Fredoka headings, Poppins body, cream ground, coral accent), presenter-paced.

## The shape

```text
              THE CURRICULUM
     A child is not a syllabus to be finished.
        (short philosophical lines + 1 lakh proof)

              A healthy body
   A lifelong                An awakened
   love of        [ CHILD ]      mind
   learning
      A capable self    A playful heart

     "Happy is not the mood we aim for. It's the method."
```

## Opening copy

Kicker: `The curriculum`

Headline: **A child is not a syllabus to be finished.**

Two short lines, large type, centred:

> Twenty years in classrooms taught us one thing: a child learns best when they
> are happy. Not entertained — happy. Curious, safe, moving, and sure of
> themselves.
>
> So we stopped designing a syllabus and started designing a childhood. We call
> it the **H.A.P.P.Y. curriculum** — and over **1 lakh parents** have watched it
> work on their own child.

Proof line: `1,00,000+ happy parents · 172 centres · 20+ years`

## The curriculum diagram

- **Centre**: a generated photo-real portrait of a happy, affluent, urban Indian
  child (approx. 4–5 years old) in a soft circular mask with a coral ring —
  warm and premium, not stocky.
- **Around it**: five nodes, one per brand colour, joined to the centre by thin
  dotted brand trails. Desktop: true radial layout around the child. Mobile:
  child on top, five nodes stacked beneath — no cramped radial on small screens.

| Letter | Title | Line | Colour |
|---|---|---|---|
| H | A healthy body | Movement, nutrition, rest — the body a mind depends on. | coral |
| A | An awakened mind | Questions before answers; wonder before worksheets. | cyan |
| P | A playful heart | Play is the work of childhood, and we take it seriously. | yellow |
| P | A capable self | Small independences, practised daily, until they feel ordinary. | periwinkle |
| Y | A lifelong love of learning | The one outcome that outlives every report card. | turquoise |

Closing line, centred under the diagram:
**"Happy is not the mood we aim for. It's the method."**

## Motion

- Opening copy fades and rises in two beats.
- The child scales in, then the five nodes bloom outward in sequence (clockwise
  from the top), each dotted connector drawing as its node lands.
- Hover / tap on a node lifts it and deepens its colour, so the presenter can
  park on one pillar while talking.
- Reduced motion: everything visible, no stagger.

## Technical notes

- Copy in `src/content/curriculum.ts`; component
  `src/components/curriculum/CurriculumSection.tsx` with a small `PillarNode`
  sub-component.
- Radial layout computed from angles with absolute positioning in one container;
  connectors in a single overlaid SVG so nothing drifts.
- Child portrait generated to `src/assets/happy-child.jpg`, imported as an ES6
  image import, with descriptive alt text.
- Framer Motion `whileInView` with `once: true` — no pinning (StorySection keeps
  that role).
- Rendered in `src/routes/index.tsx` between `<ModelSection />` and
  `<HappySection />`.
