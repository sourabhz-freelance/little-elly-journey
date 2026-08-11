/** Franchisor support to the Master Franchisee — from the support summary. Indicative. */
export const supportContent = {
  kicker: "What we carry",
  headline: ["You carry four things.", "We carry the rest."],
  sub: "Everything below is an obligation the Franchisor owes you under the Master Franchise Agreement.",

  /** The four clusters we carry. */
  clusters: [
    {
      id: "academics",
      title: "The academics",
      icon: "BookOpen",
      accent: "var(--coral)",
      lead: "You never carry academic delivery risk.",
      items: [
        "Curriculum supplied and updated by us through the whole term",
        "All academic training delivered by us, at all times",
        "Teacher and administrator competency standards set and enforced network-wide",
        "Admission procedure, fee policy and annual fee circular issued by us",
      ],
    },
    {
      id: "machine",
      title: "The machine",
      icon: "Cpu",
      accent: "var(--turquoise)",
      lead: "The systems are built, hosted and maintained for you.",
      items: [
        "Central MIS, CRM and parent app, owned and hosted by us",
        "Franchisee portal for curriculum, training material and creatives",
        "National IVR and digital lead-generation infrastructure",
        "Operations Manual on loan, with bulletins as the System evolves",
        "Data protection policy and periodic technology audits",
      ],
    },
    {
      id: "brand",
      title: "The brand",
      icon: "Megaphone",
      accent: "var(--orange)",
      lead: "Demand arrives before you ask for it.",
      items: [
        "All national campaigns — digital, print, outdoor, PR — and every official channel",
        "National digital leads routed to you for distribution",
        "Dedicated marketing support to each new centre for its first year",
        "Brand guidelines, collateral kit refreshed annually, at cost",
        "We represent the brand before authorities and in any crisis",
      ],
    },
    {
      id: "quality",
      title: "The quality",
      icon: "ShieldCheck",
      accent: "var(--periwinkle)",
      lead: "One failing centre never becomes your problem alone.",
      items: [
        "At least one independent audit per centre per year, including unannounced visits",
        "Standardised scorecard: academics, safety, hygiene, admissions, parent experience",
        "Authority to issue show-cause and suspend admissions at a non-compliant centre",
        "Approval of every Unit Franchisee candidate — a second layer of screening",
        "Site approval decisions within ten working days",
      ],
    },
  ],

  /** The four things the Master Franchisee carries. */
  yours: [
    { id: "find", icon: "Search", title: "Find the franchisees" },
    { id: "open", icon: "KeyRound", title: "Open their centres" },
    { id: "mentor", icon: "HeartHandshake", title: "Mentor them, month on month" },
    { id: "standards", icon: "ShieldCheck", title: "Hold the brand standard" },
  ],
  yoursNote: "Everything else is ours to carry.",

  grantKicker: "The grant",
  grant: [
    "Exclusive right to own, operate and manage Little Elly preschools in your Territory",
    "The right to appoint Unit Franchisees within it",
    "Licence to the Little Elly marks and System for the term",
  ],
  grantNote: "Exclusivity operates within the Territory; we license elsewhere in India and abroad.",

  voiceKicker: "Where you have a voice",
  voice: [
    {
      id: "fees",
      icon: "Wallet",
      title: "Annual fee revisions",
      line: "Approved with you, for your Territory.",
    },
    {
      id: "policy",
      icon: "ClipboardList",
      title: "Administrative policy",
      line: "Discussed with you before it lands.",
    },
    {
      id: "mpc",
      icon: "Target",
      title: "Performance commitment",
      line: "Co-developed, reviewed every six months.",
    },
    {
      id: "escalate",
      icon: "Timer",
      title: "Escalation",
      line: "Anything you can't resolve: five working days.",
    },
  ],

  termKicker: "Term and continuity",
  term: [
    {
      id: "start",
      year: "Year 0",
      title: "Effective date",
      line: "Initial term of five years begins.",
    },
    {
      id: "run",
      year: "Years 1–4",
      title: "You build the territory",
      line: "Centres open, brand fees compound.",
    },
    {
      id: "notice",
      year: "Year 4.75",
      title: "Renewal notice",
      line: "Three months before expiry, on a clean record.",
    },
    {
      id: "end",
      year: "Year 5",
      title: "Renew, or hand over",
      line: "Deposit refunded; a qualified successor may be referred.",
    },
  ],

  disclaimer: "A summary only. The Master Franchise Agreement governs in all respects.",
} as const;
