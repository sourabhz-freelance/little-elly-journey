/** Franchisor support to the Master Franchisee — from the support summary. Indicative. */
export const supportContent = {
  kicker: "What we carry",
  headline: ["You carry four things.", "We carry the rest."],
  sub: "Nineteen obligations sit with us. Four sit with you. Switch between the two.",

  tabs: {
    ours: { label: "We carry", note: "Nineteen obligations the Franchisor owes you under the Master Franchise Agreement." },
    yours: { label: "You carry", note: "Four responsibilities stay with the Master Franchisee." },
  },

  /** The four clusters we carry — short chips, not paragraphs. */
  clusters: [
    {
      id: "academics",
      title: "Academics",
      icon: "BookOpen",
      accent: "var(--coral)",
      lead: "No academic risk on you.",
      items: [
        "Curriculum, kept current",
        "All teacher training",
        "Competency standards",
        "Fee & admission policy",
      ],
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
      items: [
        "National campaigns",
        "Leads routed to you",
        "First-year launch push",
        "Collateral, refreshed",
        "We face authorities",
      ],
    },
    {
      id: "quality",
      title: "Quality",
      icon: "ShieldCheck",
      accent: "var(--periwinkle)",
      lead: "One weak centre stays contained.",
      items: [
        "Annual audit per centre",
        "Common scorecard",
        "Power to pause admissions",
        "We vet every franchisee",
        "Site approval in 10 days",
      ],
    },
  ],

  /** The four things the Master Franchisee carries. */
  yours: [
    {
      id: "find",
      icon: "Search",
      title: "Find the franchisees",
      line: "Meet, shortlist and sign the right people in your state.",
    },
    {
      id: "open",
      icon: "KeyRound",
      title: "Open their centres",
      line: "Site, setup and launch, with our approvals behind you.",
    },
    {
      id: "mentor",
      icon: "HeartHandshake",
      title: "Mentor them",
      line: "Be the first call when a centre needs a hand.",
    },
    {
      id: "standards",
      icon: "ShieldCheck",
      title: "Hold the standard",
      line: "Walk the floors and keep every centre worthy of the name.",
    },
  ],
  yoursNote: "Everything else is ours to carry.",

  grantKicker: "The grant",
  grantHeadline: "Three rights, inside one boundary.",
  grant: [
    {
      id: "territory",
      icon: "MapPinned",
      step: "01",
      title: "Your state, exclusively",
      line: "The exclusive right to own, operate and manage Little Elly preschools across your Territory.",
    },
    {
      id: "appoint",
      icon: "UserPlus",
      step: "02",
      title: "You appoint the franchisees",
      line: "The right to appoint Unit Franchisees within the Territory — the network is yours to build.",
    },
    {
      id: "licence",
      icon: "BadgeCheck",
      step: "03",
      title: "The marks and the System",
      line: "Full licence to the Little Elly marks and the Little Elly System for the term of the Agreement.",
    },
  ],
  grantBoundary: "Your Territory",
  grantNote:
    "Exclusivity operates within your Territory. Outside it, the Franchisor may license the brand elsewhere in India and internationally.",

  voiceKicker: "Where you have a voice",
  voiceHeadline: "Four things we don't decide alone.",
  voiceHub: ["Decisions", "made with you"],
  voice: [
    {
      id: "fees",
      icon: "Wallet",
      title: "Fee revisions",
      line: "Annual fee revisions for your Territory are approved in collaboration with you.",
      cadence: "Every year",
    },
    {
      id: "policy",
      icon: "ClipboardList",
      title: "Policy changes",
      line: "Administrative policies are discussed with you before they roll out across the Territory.",
      cadence: "Before rollout",
    },
    {
      id: "mpc",
      icon: "Target",
      title: "Performance targets",
      line: "The Minimum Performance Commitment is co-developed, then reviewed together.",
      cadence: "Twice a year",
    },
    {
      id: "escalate",
      icon: "Timer",
      title: "Escalation",
      line: "Anything you can't settle locally comes to us on a full briefing, and is resolved.",
      cadence: "In 5 working days",
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
