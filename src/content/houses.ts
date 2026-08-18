/** Section 00 — the two houses behind this partnership. */
export const housesContent = {
  kicker: "Before we begin",
  headline: ["Two houses.", "One ambition."],
  accentIndex: 1,
  sub: "K2 Learning and Learning Edge India Pvt. Ltd. come together to grow India's happiest preschool.",
  centreNode: "Together",
  scrollCue: "Scroll to continue",
  portfolioKicker: "What the two houses hold",
  portfolioHeadline: ["Everything already", "built."],
  houses: [
    {
      id: "k2",
      name: "K2 Learning",
      role: "Joint venture partner",
      line: "An education group spanning schools, pre-university and career IPs.",
      accent: "var(--turquoise)",
      brands: [
        { id: "career-utsav", name: "Career Utsav", note: "Career guidance IP" },
        { id: "academic-city", name: "Academic City", note: "CBSE boarding school" },
        { id: "foundation", name: "SEF", note: "Sri Edu Foundation — licensing across education, focused on pre-university" },
        { id: "edify", name: "Edify", note: "CBSE school" },
      ],
    },
    {
      id: "learning-edge",
      name: "Learning Edge",
      role: "Little Elly's parent company",
      line: "Learning Edge India Pvt. Ltd. — the house Little Elly calls home, alongside three sister brands.",
      accent: "var(--coral)",
      brands: [
        { id: "little-elly", name: "Little Elly", note: "Preschool", highlight: true },
        { id: "elly-childcare", name: "Elly Childcare", note: "Corporate daycare" },
        { id: "cocoon", name: "Cucoon", note: "Premium preschool" },
        { id: "letr", name: "LETTER", note: "Teacher training & research" },
      ],
    },
  ],
  zoomKicker: "And today",
  zoomLine: ["Today's conversation is about one of them —", "Little Elly."],
  zoomNote: "Brand marks for individual sub-brands are shown as monograms.",
} as const;
