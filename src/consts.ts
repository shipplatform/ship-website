/**
 * Centralized site metadata, routes, and facts.
 * Single source of truth for SEO helpers, JSON-LD, and components.
 */

export const SITE_URL = "https://shipplatform.ai";

export const SITE = {
  name: "SHIP",
  legalName: "SHIP Platform Inc.",
  title: "SHIP — The Chief of Staff for engineering leadership",
  description:
    "SHIP starts from your company goals and reads the work your teams already produce — code, tickets, docs, chat — then briefs you, answers any question in chat or your IDE, preps your 1:1s, and catches drift early.",
  ogTitle: "SHIP — The Chief of Staff for engineering leadership",
  ogDescription:
    "They tell you how fast your team works. SHIP tells you whether your team is working on the right things — brief, chat, 1:1 prep, and drift, grounded in the artefact trail.",
  twitterDescription:
    "Briefs, chat, 1:1 prep and drift signal — grounded in Git, Jira, Confluence, Slack, Linear, and Notion. Ask in the app, in Slack, or inside Claude & Cursor.",
  locale: "en_US",
  foundingDate: "2026",
} as const;

export const KEYWORDS = [
  "engineering chief of staff",
  "engineering intelligence",
  "software alignment",
  "initiative tracking",
  "engineering management",
  "CTO tools",
  "1:1 prep",
  "drift detection",
  "GitHub Jira integration",
  "MCP server",
];

export const CAL_URL = "https://cal.com/shipplatform/discovery";

export const APP_LOGIN_URL = "https://app.shipplatform.ai/login";

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/shipplatform/",
  youtube: "https://www.youtube.com/@shipplatform",
};

export const NAV_LINKS = [
  { label: "Product", href: "#capabilities" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
];

export const TRUST_COMPANIES = ["Deutsche Bank", "Revolut", "Vega", "Capital.com"];

export const PILOT_BANNER =
  "Now onboarding founding design partners — private pilot (Q3 2026)";

/** Public env (inlined at build). Empty string disables the feature. */
export const SHIP_API_BASE = (
  import.meta.env.PUBLIC_SHIP_API_URL ?? ""
).replace(/\/$/, "");
export const POSTHOG_KEY = import.meta.env.PUBLIC_POSTHOG_KEY ?? "";
