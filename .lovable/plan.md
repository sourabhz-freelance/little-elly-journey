# Section 03 — "Happy is not just for the children"

One calm, full-viewport slide that takes the tagline "A Happy Preschool" and
widens it: happy for children, happy for parents, and — the turn — happy for the
people who run it with us.

## The shape

A vertical, presenter-paced slide. Three "happy" cards sit in a row; as the
presenter scrolls, the third one lands last and holds the room, then a closing
line resolves the idea.

```text
        HAPPY MINDS, ENDLESS POSSIBILITIES

   [ Children ]     [ Parents ]     [ Partners ]
     joy            confidence        ← the turn

        "A preschool can only stay happy if
         everyone inside it is."
```

## Copy (draft — editable in one content file)

Kicker: `A Happy Preschool`

Headline: **Happy isn't only for the little ones.**

Sub: It's the standard we hold for everyone who stands inside a Little Elly.

Three cards:

1. **For the child** — "Curiosity that never gets corrected out of them."
2. **For the parent** — "The quiet confidence of knowing they're in the right hands."
3. **For the partner** — "A business you can be proud of on a Monday morning — supported, profitable, and never alone."

Closing line (larger, centred, coral accent):
**"We don't hand you a brand and wave goodbye. We stay."**
Support: Training, curriculum, marketing, admissions, audits, people — the
happiness of our partners is not goodwill, it's operating policy.

## Illustration approach

Keeping it deliberately simple, as agreed — brand colours doing the work, no
forced paws or dotted trails:

- Each card carries one small, flat mark: a child card in yellow, a parent card
  in periwinkle/cyan, a partner card in coral.
- Behind the closing line, a single soft warm glow — nothing else.
- The partner card is visibly the "third circle" of the same family: same shape
  language, coral (the brand's primary) so it reads as the point of the slide.

## Motion

- Cards fade and rise in sequence (child → parent → partner), with a longer beat
  before the partner card so the presenter can land the line.
- Closing statement fades up on its own once the cards have settled.
- Reduced motion: everything visible, no stagger.

## Technical notes

- Copy in `src/content/happy.ts`; component `src/components/happy/HappySection.tsx`
  with a small `HappyCard` and three tiny flat SVG marks inline.
- Framer Motion `whileInView` with `once: true` — no pinning, no scroll hijack
  (Section 02 already owns the pinned moment; this one should feel like a pause).
- Rendered in `src/routes/index.tsx` directly below `<StorySection />`.
- Brand tokens only (coral, yellow, periwinkle, cyan, ink, cream); Fredoka
  headings, Poppins body.
