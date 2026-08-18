/** Section 07 — The H.A.P.P.Y. curriculum, as a whole system. */
export const curriculumContent = {
  kicker: "The curriculum behind the brand",
  headline: ["1 lakh+ parents have loved", "our H.A.P.P.Y. curriculum"],
  proof: ["Every letter of H.A.P.P.Y. built into the day"],

  wheelKicker: "One curriculum, three circles",
  wheelLead: "Five commitments — H, A, P, P, Y — the child at the centre of all of them.",

  /** Inner ring — the five things the curriculum builds. */
  pillars: [
    {
      id: "body",
      letter: "H",
      icon: "HeartPulse",
      title: "A Healthy body",
      line: "Movement, nutrition, rest.",
      long: "Movement, nutrition and rest — the body a mind depends on.",
      accent: "var(--coral)",
    },
    {
      id: "mind",
      letter: "A",
      icon: "Lightbulb",
      title: "An Awakened mind",
      line: "Wonder before worksheets.",
      long: "Questions before answers; wonder before worksheets.",
      accent: "var(--cyan)",
    },
    {
      id: "heart",
      letter: "P",
      icon: "ToyBrick",
      title: "A Playful heart",
      line: "Play, taken seriously.",
      long: "Play is the work of childhood, and we take it seriously.",
      accent: "var(--yellow)",
    },
    {
      id: "self",
      letter: "P",
      icon: "Sparkles",
      title: "A Purposeful self",
      line: "Small independences, daily.",
      long: "Small independences, practised daily, until they feel ordinary.",
      accent: "var(--periwinkle)",
    },
    {
      id: "learning",
      letter: "Y",
      icon: "BookOpen",
      title: "A Yearning to learn",
      line: "The outcome that outlives school.",
      long: "The one outcome that outlives every report card.",
      accent: "var(--turquoise)",
    },
  ],

  /** Middle ring — the traditions the classroom borrows from. */
  inspiredKicker: "Inspired by",
  inspired: [
    {
      id: "montessori",
      title: "Montessori",
      line: "Independence · Hands-on · Prepared environment",
      accent: "var(--turquoise)",
    },
    {
      id: "steiner",
      title: "Steiner",
      line: "Imagination · Rhythm · Nature · Story · Music",
      accent: "var(--pink)",
    },
    {
      id: "play",
      title: "Play-based learning",
      line: "Child-led · Inquiry · Discovery · Social",
      accent: "var(--cyan)",
    },
    {
      id: "research",
      title: "Research-informed practice",
      line: "Brain development · Relationships · Evidence",
      accent: "var(--periwinkle)",
    },
  ],

  /** Outer ring — what the parent actually sees at home. */
  outcomesKicker: "Outcomes we nurture",
  outcomes: [
    {
      id: "confident",
      icon: "Star",
      title: "Confident",
      line: "Believes in herself, and takes on new things.",
      accent: "var(--yellow)",
    },
    {
      id: "curious",
      icon: "Lightbulb",
      title: "Curious",
      line: "Asks questions long after the class ends.",
      accent: "var(--orange)",
    },
    {
      id: "independent",
      icon: "HandHeart",
      title: "Independent",
      line: "Makes choices and does things on her own.",
      accent: "var(--cyan)",
    },
    {
      id: "compassionate",
      icon: "Heart",
      title: "Compassionate",
      line: "Notices other children, and is kind to them.",
      accent: "var(--coral)",
    },
    {
      id: "creative",
      icon: "Palette",
      title: "Creative",
      line: "Imagines, makes, and thinks in new ways.",
      accent: "var(--periwinkle)",
    },
    {
      id: "ready",
      icon: "GraduationCap",
      title: "School ready",
      line: "Ready for big school, and for life after it.",
      accent: "var(--turquoise)",
    },
  ],

  centreLabel: "The child",
  centreLine: "Curious. Capable. Unique.",
  closing: "Happy is not the mood we aim for. It's the method.",
} as const;
