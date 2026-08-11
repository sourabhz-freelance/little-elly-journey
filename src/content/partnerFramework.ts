/** Section 08 — "Happy" as a business framework for partners. */
export const partnerFrameworkContent = {
  kicker: "The same word, for you",
  headline: [
    "“H.A.P.P.Y.” is a curriculum for our children.",
    "It’s a framework for our partners.",
  ],
  sub: "The same thinking, pointed at your business.",
  supports: [
    {
      id: "brand",
      icon: "BadgeCheck",
      title: "A brand you don’t have to build",
      strong: "brand",
      accent: "var(--coral)",
    },
    {
      id: "marketing",
      icon: "Megaphone",
      title: "Marketing that fills your centres",
      strong: "Marketing",
      accent: "var(--orange)",
    },
    {
      id: "training",
      icon: "GraduationCap",
      title: "Training for you and your team",
      strong: "Training",
      accent: "var(--cyan)",
    },
    {
      id: "curriculum",
      icon: "BookOpen",
      title: "A curriculum already proven",
      strong: "already proven",
      accent: "var(--periwinkle)",
    },
    {
      id: "investment",
      icon: "Wallet",
      title: "Investment and unit-economics guidance",
      strong: "unit-economics",
      accent: "var(--turquoise)",
    },
    {
      id: "ops",
      icon: "Headset",
      title: "An operations team on call",
      strong: "operations team",
      accent: "var(--pink)",
    },
  ],
  closing: "We stand by you at every angle.",

  /** Commercials — indicative placeholders until territory numbers are confirmed. */
  moneyKicker: "The commercials, plainly",
  moneyHeadline: ["How the money", "actually works."],
  figures: [
    {
      id: "invest",
      value: "₹40 L",
      label: "Your own model centre",
      note: "One-time setup, phased as you grow.",
      accent: "var(--coral)",
      icon: "Wallet",
    },
    {
      id: "royalty",
      value: "40%",
      label: "Royalty comes to you",
      note: "From every franchisee in your territory.",
      accent: "var(--turquoise)",
      icon: "TrendingUp",
    },
    {
      id: "share",
      value: "10%",
      label: "Shared with head office",
      note: "The remaining 30% stays with you.",
      accent: "var(--orange)",
      icon: "Share2",
    },
  ],
  figuresNote: "Indicative placeholders — confirmed figures are shared for your territory.",

  dutiesKicker: "What you do to earn it",
  duties: [
    { id: "find", icon: "Search", title: "Find the franchisees" },
    { id: "open", icon: "KeyRound", title: "Open their centres" },
    { id: "mentor", icon: "HeartHandshake", title: "Mentor them, month on month" },
    { id: "standards", icon: "ShieldCheck", title: "Hold the brand standard" },
  ],
} as const;
