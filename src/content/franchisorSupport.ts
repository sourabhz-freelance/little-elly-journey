/** Franchisor support to the Master Franchisee — from the support summary. Indicative. */
export const supportContent = {
  kicker: "What we carry",
  headline: ["You carry four things.", "We carry the rest."],
  sub: "Nineteen obligations the Franchisor owes you under the Master Franchise Agreement.",

  /** The four clusters we carry — short chips, not paragraphs. */
  clusters: [
    {
      id: "academics",
      title: "Academics",
      icon: "BookOpen",
      accent: "var(--coral)",
      lead: "No academic risk on you.",
      items: ["Curriculum, kept current", "All teacher training", "Competency standards", "Fee & admission policy"],
    },
    {
      id: "machine",
      title: "Systems",
      icon: "Cpu",
      accent: "var(--turquoise)",
      lead: "Built, hosted, maintained.",
      items: ["MIS & CRM", "Parent app", "Franchisee portal", "National IVR", "Operations manual"],
    },
    {
      id: "brand",
      title: "Brand",
      icon: "Megaphone",
      accent: "var(--orange)",
      lead: "Demand before you ask.",
      items: ["National campaigns", "Leads routed to you", "First-year launch push", "Collateral, refreshed", "We face authorities"],
    },
    {
      id: "quality",
      title: "Quality",
      icon: "ShieldCheck",
      accent: "var(--periwinkle)",
      lead: "One weak centre stays contained.",
      items: ["Annual audit per centre", "Common scorecard", "Power to pause admissions", "We vet every franchisee", "Site approval in 10 days"],
    },
  ],

  /** The four things the Master Franchisee carries. */
  yours: [
    { id: "find", icon: "Search", title: "Find the franchisees" },
    { id: "open", icon: "KeyRound", title: "Open their centres" },
    { id: "mentor", icon: "HeartHandshake", title: "Mentor them" },
    { id: "standards", icon: "ShieldCheck", title: "Hold the standard" },
  ],
  yoursNote: "Everything else is ours to carry.",

  grantKicker: "The grant",
  grant: [
    "Exclusive rights across your state",
    "You appoint the Unit Franchisees",
    "Full licence to the marks and System",
  ],
  grantNote: "Exclusivity operates within your Territory for the term.",

  voiceKicker: "Where you have a voice",
  voice: [
    {
      id: "fees",
      icon: "Wallet",
      title: "Fee revisions",
      line: "Approved with you.",
    },
    {
      id: "policy",
      icon: "ClipboardList",
      title: "Policy changes",
      line: "Discussed before they land.",
    },
    {
      id: "mpc",
      icon: "Target",
      title: "Targets",
      line: "Co-set, reviewed twice a year.",
    },
    {
      id: "escalate",
      icon: "Timer",
      title: "Escalation",
      line: "Answered in five working days.",
    },
  ],

  termKicker: "Term and continuity",
  term: [
    {
      id: "start",
      year: "Year 0",
      title: "Effective date",
      line: "The five-year term begins.",
    },
    {
      id: "run",
      year: "Years 1–4",
      title: "You build the state",
      line: "Centres open, brand fees compound.",
    },
    {
      id: "notice",
      year: "Year 4.75",
      title: "Renewal notice",
      line: "Three months out, on a clean record.",
    },
    {
      id: "end",
      year: "Year 5",
      title: "Renew, or hand over",
      line: "Deposit refunded; a successor may be referred.",
    },
  ],

  disclaimer: "A summary only. The Master Franchise Agreement governs in all respects.",
} as const;
