/** Section — the logical half of "Happy": daily practice inside the classroom. */
export const methodContent = {
  kicker: "Inside the classroom",
  headline: ["Happy is the philosophy.", "This is the daily practice."],
  sub: "What a child is actually built on, day after day.",

  iqTitle: "Smarter children, brighter future",
  abilities: [
    { id: "visual", title: "Visual ability", icon: "Eye", accent: "var(--cyan)" },
    { id: "mental", title: "Mental ability", icon: "Brain", accent: "var(--orange)" },
    { id: "math", title: "Mathematical ability", icon: "Sigma", accent: "var(--turquoise)" },
    { id: "language", title: "Language ability", icon: "MessagesSquare", accent: "var(--pink)" },
  ],

  eiTitle: "Emotional intelligence",
  eiCentre: "Emotional Intelligence",
  eiNodes: [
    { id: "perceiving", title: "Perceiving emotions", accent: "var(--orange)" },
    { id: "understanding", title: "Understanding emotions", accent: "var(--turquoise)" },
    { id: "managing", title: "Managing emotions", accent: "var(--periwinkle)" },
    { id: "using", title: "Using emotions", accent: "var(--yellow)" },
  ],

  methodsTitle: "The methods behind it",
  methodsCentre: "Little Elly Method",
  methods: [
    { id: "mi", title: "Multiple Intelligence", accent: "var(--turquoise)" },
    { id: "montessori", title: "Montessori", accent: "var(--periwinkle)" },
    { id: "project", title: "Project-based", accent: "var(--orange)" },
    { id: "reggio", title: "Reggio Emilia", accent: "var(--cyan)" },
  ],

  closing: ["A happy child,", "measured in what they can do."],
} as const;
