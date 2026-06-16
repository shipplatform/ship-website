"use client";

import { motion } from "framer-motion";

const CAL_URL = "https://cal.com/shipplatform/discovery";

const TIERS = [
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

const TRUST = [
  "Read-only OAuth",
  "Scoped, revocable tokens",
  "SOC 2 / ISO 27001 / DORA-aligned",
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Senior pricing. No spreadsheet.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ship-gray-400">
            One platform fee scoped to your org — not a per-seat calculator you
            have to reverse-engineer.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16">
          {TIERS.map((tier, i) => {
            const isExternal = tier.href.startsWith("http");
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex flex-col rounded-lg border p-8 ${
                  tier.highlighted
                    ? "border-ship-accent/40 bg-ship-accent/5"
                    : "border-ship-gray-800 bg-ship-gray-900/30"
                }`}
              >
                <h3 className="font-heading text-2xl font-bold uppercase tracking-tight">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-ship-gray-400">{tier.blurb}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-bold text-ship-white">
                    {tier.price}
                  </span>
                  <span className="text-ship-gray-500">{tier.cadence}</span>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-ship-gray-300">
                      <span className="mt-0.5 shrink-0 text-ship-accent">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.href}
                  {...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`mt-8 inline-flex h-12 items-center justify-center rounded-sm px-8 text-base font-semibold transition-colors ${
                    tier.highlighted
                      ? "bg-ship-accent text-white hover:bg-ship-accent-hover"
                      : "border border-ship-gray-700 text-ship-gray-300 hover:border-ship-gray-500 hover:text-ship-white"
                  }`}
                >
                  {tier.cta}
                </a>
              </motion.div>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ship-gray-500">
          Building with us early?{" "}
          <a
            href="#design-partners"
            className="text-ship-accent transition-colors hover:text-ship-accent-hover"
          >
            Founding design partners
          </a>{" "}
          get pricing below our standard rate — by application.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 border-t border-ship-gray-800 pt-8">
          {TRUST.map((t) => (
            <span
              key={t}
              className="rounded-full border border-ship-gray-700 px-4 py-1.5 text-xs text-ship-gray-400"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-ship-gray-500">
          Built by engineers from Deutsche Bank, Revolut, Vega, and Capital.com —
          where “trust me” was never an acceptable answer.
        </p>
      </div>
    </section>
  );
}
