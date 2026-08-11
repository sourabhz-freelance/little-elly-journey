/** Section 07 — The H.A.P.P.Y. curriculum, as a whole system. */
export const curriculumContent = {
  kicker: "How did 172 centres, 19 cities, 20 years happen?",
  headline: ["1 lakh+ parents have loved", "our H.A.P.P.Y. curriculum"],
  proof: ["1 lakh+ happy parents", "172 centres", "20+ years"],

  wheelKicker: "One curriculum, three circles",
  wheelLead: "The child at the centre. What we teach around her. What she becomes.",

  /** Inner ring — the five things the curriculum builds. */
  pillars: [
    {
      id: "body",
      icon: "HeartPulse",
      title: "A healthy body",
      line: "Movement, nutrition, rest.",
      long: "Movement, nutrition and rest — the body a mind depends on.",
      accent: "var(--coral)",
    },
    {
      id: "mind",
      icon: "Lightbulb",
      title: "An awakened mind",
      line: "Wonder before worksheets.",
      long: "Questions before answers; wonder before worksheets.",
      accent: "var(--cyan)",
    },
    {
      id: "heart",
      icon: "ToyBrick",
      title: "A playful heart",
      line: "Play, taken seriously.",
      long: "Play is the work of childhood, and we take it seriously.",
      accent: "var(--yellow)",
    },
    {
      id: "self",
      icon: "Sparkles",
      title: "A capable self",
      line: "Small independences, daily.",
      long: "Small independences, practised daily, until they feel ordinary.",
      accent: "var(--periwinkle)",
    },
    {
      id: "learning",
      icon: "BookOpen",
      title: "A love of learning",
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
