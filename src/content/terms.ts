/** Section 10 — Territory, terms, profile and rules. */
export const termsContent = {
  kicker: "The association",
  headline: ["You don't buy a centre.", "You own a territory."],
  sub: "One scale of association: an entire state, yours to build out.",

  tiers: [
    {
      id: "state",
      label: "State",
      accent: "var(--turquoise)",
      scale: "A whole state to build out",
    },
  ],

  shared: [
    { id: "fee", icon: "Wallet", title: "One-time association fee" },
    { id: "model", icon: "School", title: "Your own model school" },
    { id: "marketing", icon: "Megaphone", title: "Marketing from the company" },
    { id: "term", icon: "CalendarClock", title: "Five-year term" },
  ],
  sharedNote: "Four terms. One map: your state.",

  profileKicker: "Who we're looking for",
  profile: [
    { id: "passion", icon: "Heart", title: "A passion for education", accent: "var(--coral)" },
    { id: "drive", icon: "Rocket", title: "Entrepreneurial drive", accent: "var(--orange)" },
    { id: "network", icon: "Users", title: "A local network", accent: "var(--cyan)" },
    { id: "plan", icon: "Map", title: "A plan for the territory", accent: "var(--periwinkle)" },
  ],

  rulesKicker: "The fine print, in plain words",
  rules: [
    "Five years, then renewal on mutual terms",
    "You pick the state you know best",
    "You fill it in five years — with our help",
    "No royalty on your franchisees' fees",
    "Brand standards protect everyone in the family",
  ],
} as const;
