/**
 * All marketing copy and facts, centralized for i18n-readiness.
 * Strings are ported verbatim from the existing site. Future locales add
 * sibling files (e.g. data.de.ts) keyed identically.
 */
import { CAL_URL } from "./consts";

export const CAPABILITIES = [
  {
    title: "Brief",
    mono: "BR",
    desc: "A decision-ready morning narrative: what moved which initiative, where drift showed up, and what needs a call — grounded in artefacts, not another wall of DORA charts.",
  },
  {
    title: "Ask",
    mono: "AS",
    desc: "Conversational answers over your whole engineering org. “Is payments on track? Who’s blocked? What changed since Friday?” In the app, in Slack, or inside Claude and Cursor.",
  },
  {
    title: "Prep",
    mono: "PR",
    desc: "1:1s that write themselves. SHIP assembles each report’s recent work, open threads, and last meeting’s notes so you walk in prepared — every time.",
  },
  {
    title: "Catch drift",
    mono: "DR",
    desc: "Early signal when execution diverges from the initiatives you funded — while you can still steer, not in the quarterly review when the miss is already baked.",
  },
];

export const PAIN_CARDS = [
  {
    title: "The Bottom-Up Trap",
    body: "Velocity, cycle time, and DORA-style dashboards tell you how fast the machine spins — not whether it is pointed at the right hill. Busy teams can still ship the wrong roadmap.",
  },
  {
    title: "The Narrative Gap",
    body: "Standups sell a story: “almost done,” “good progress.” The artefact trail — PRs, tickets, docs — often tells a different one. Reconciling the two burns leadership hours every week.",
  },
  {
    title: "The Tool Sprawl Tax",
    body: "Jira, GitHub, Confluence, Slack, Linear, Notion — truth is fragmented. Without a top-down map from company goals to actual work, execs chase updates instead of making decisions.",
  },
];

export const METHOD_STEPS = [
  { word: "Scope", rest: "COPE", desc: "Encode initiatives & success criteria" },
  { word: "Harness", rest: "ARNESS", desc: "Classify artefacts against that intent" },
  { word: "Iterate", rest: "TERATE", desc: "Surface drift early; adjust priorities" },
  { word: "Publish", rest: "UBLISH", desc: "Decision-ready briefs, not raw metrics" },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    label: "Encode",
    tag: "Goals first",
    body: "Capture initiatives, success criteria, and technical context — the same judgement you would put in a board pack, in a form SHIP can classify against.",
  },
  {
    number: "02",
    label: "Connect",
    tag: "Artefact trail",
    body: "OAuth into GitHub, Jira, Confluence, Slack, Linear, Notion (and more on the roadmap). Read-only access to the work that already happened.",
  },
  {
    number: "03",
    label: "Brief",
    tag: "Top-down truth",
    body: "A morning narrative: what moved which initiative, where drift shows up, what deserves a decision — not a vanity chart of how busy everyone looked.",
  },
];

export const INTEGRATIONS_LIVE = [
  "GitHub",
  "GitLab",
  "Jira",
  "Confluence",
  "Slack",
  "Linear",
  "Notion",
  "Gmail",
];

export const INTEGRATIONS_COMING = [
  { name: "Google Meet", description: "Meeting recordings & transcripts" },
  { name: "Google Drive", description: "Docs, Sheets & Slides" },
  { name: "Zoom", description: "Meeting recordings & transcripts" },
];

export const SIGNALS = [
  "Pull requests & commits",
  "Issues & epics",
  "Pages & specs",
  "Threads & decisions",
  "Roadmaps",
  "Design docs",
  "Meeting transcripts",
];

export const PERSONA_LINES = [
  {
    role: "CEO",
    line: "Strategic bets and board- or client-facing narrative traced to shipped work — not “we’re shipping a lot.”",
  },
  {
    role: "CFO",
    line: "Engineering spend and headcount mapped to the portfolio and roadmap you funded — not another productivity vanity chart.",
  },
  {
    role: "CPO",
    line: "Roadmap commitments vs where capacity actually went — before missed dates become customer or revenue risk.",
  },
  {
    role: "CTO / VPE",
    line: "Where execution drifts off initiatives while delivery metrics still look healthy — early enough to replan.",
  },
  {
    role: "Leads",
    line: "Clarity on what to stop calling “almost done” when the artefact trail says otherwise.",
  },
];

export const COMPARISON = [
  {
    metric: "Primary question",
    traditional: "How fast / how much (DORA, velocity)",
    ship: "Are we doing what we said mattered?",
  },
  {
    metric: "Direction of reasoning",
    traditional: "Activity metrics → infer success",
    ship: "Leadership intent → classify work",
  },
  {
    metric: "Executive output",
    traditional: "Dashboards & meetings",
    ship: "Decision-ready morning brief",
  },
  {
    metric: "Drift",
    traditional: "Quarterly or ad hoc",
    ship: "Surfaced within days when signals allow",
  },
  {
    metric: "Optimises for",
    traditional: "Throughput and busyness",
    ship: "Alignment to goals",
  },
];

export const PRICING_TIERS = [
  {
    name: "Startup",
    price: "By application",
    cadence: "",
    blurb: "For scale-up engineering orgs.",
    features: [
      "Morning brief + drift signal",
      "Chat + MCP — ask in Claude, Cursor & VS Code",
      "All connectors: GitHub, GitLab, Jira, Confluence, Slack, Linear, Notion",
      "People intelligence — 1:1 prep, roles & skills",
      "Knowledge base & search",
      "Bring your own Anthropic key & models",
    ],
    cta: "Get started",
    href: "#design-partners",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    blurb: "For larger or regulated orgs.",
    features: [
      "Everything in Startup",
      "SSO & SCIM",
      "Audit export",
      "SOC 2 / ISO 27001 / DORA evidence",
      "Data residency",
      "Priority support & onboarding",
    ],
    cta: "Talk to sales",
    href: CAL_URL,
    highlighted: false,
  },
];

export const PRICING_TRUST = [
  "Read-only OAuth",
  "Scoped, revocable tokens",
  "SOC 2 / ISO 27001 / DORA-aligned",
];

export const CAREER = [
  {
    company: "Deutsche Bank",
    url: "https://www.db.com/",
    role: "Engineering Manager on the algorithmic trading desk — FX and fixed-income derivatives risk inside a global, heavily regulated bank",
  },
  {
    company: "Revolut",
    url: "https://www.revolut.com",
    role: "Head of Trading Platform — market making, risk, market data and brokerage across FX, crypto, equities and bonds at consumer scale",
  },
  {
    company: "Vega",
    url: "https://www.vega-alts.com/",
    role: "CTO — built the private-markets platform 0→Series A with a 50-person team; the platform now runs $300B+ in alternative assets, with Apollo as anchor client",
  },
  {
    company: "Nevis",
    url: "https://www.neviswealth.com/",
    role: "CTO — AI-driven wealth-management platform, seed through Series A",
  },
  {
    company: "Capital.com",
    url: "https://capital.com",
    role: "VP, Product & Engineering — leads the 77+ people trading platform, shipping regulated products across multiple jurisdictions",
  },
];

export const DESIGN_PARTNER_BENEFITS = [
  {
    title: "Direct founder access",
    body: "Weekly working sessions — your reality lands in product, not a support queue.",
  },
  {
    title: "Shape what we build",
    body: "Initiative workflows, brief formats, and connector priorities reflect what works for your team first.",
  },
  {
    title: "Founding-partner pricing",
    body: "Pricing below our standard rate, locked while we build together — terms we offer now don't come back later.",
  },
  {
    title: "Peer cohort",
    body: "Engineering leaders running top-down alignment in production — compare notes off the record.",
  },
];

export const TEAM_SIZES = ["< 10", "10–50", "50–200", "200+"];

export const PRIMARY_STACKS = [
  "GitHub + Jira",
  "GitHub + Linear",
  "GitLab + Jira",
  "Mixed / other",
];

export const HERO_DEPLOY_LINES = [
  "Company initiatives",
  "Issues & roadmaps",
  "Pull requests & commits",
  "Docs & specs",
  "Slack & chat",
  "Morning brief",
];
