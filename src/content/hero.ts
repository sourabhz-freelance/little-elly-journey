/**
 * All hero copy lives here — easy to edit.
 * This is a presenter-led deck, not a marketing site: no lead-gen CTAs.
 */
export const heroContent = {
  badge: "Master Franchise Partnership",
  eyebrow: "An invitation to belong",
  headline: ["Our", "family", "is", "growing."],
  headlineAccentIndex: 3,
  sublineBold: "An invitation to belong.",
  sublineRest: " An opportunity to build together.",
  scrollCue: "Scroll to continue",
  proof: [
    { value: 172, suffix: "", label: "Centres & growing" },
    { value: 19, suffix: "", label: "Cities" },
    { value: 20, suffix: "+", label: "Years" },
  ] as const,
  proofTag: "India's Most Admired Preschool",
  brand: {
    name: "Little Elly",
    tagline: "A Happy Preschool",
  },
} as const;
