"use client";

import { motion } from "framer-motion";

const PERSONA_LINES = [
  {
    role: "CEO",
    line:
      "Strategic bets and board- or client-facing narrative traced to shipped work — not “we’re shipping a lot.”",
  },
  {
    role: "CFO",
    line:
      "Engineering spend and headcount mapped to the portfolio and roadmap you funded — not another productivity vanity chart.",
  },
  {
    role: "CPO",
    line:
      "Roadmap commitments vs where capacity actually went — before missed dates become customer or revenue risk.",
  },
  {
    role: "CTO / VPE",
    line:
      "Where execution drifts off initiatives while delivery metrics still look healthy — early enough to replan.",
  },
  {
    role: "Leads",
    line:
      "Clarity on what to stop calling “almost done” when the artefact trail says otherwise.",
  },
] as const;

function personaHeading(role: (typeof PERSONA_LINES)[number]["role"]): string {
  return `${role} sees:`;
}

const COMPARISON = [
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

export default function Numbers() {
  return (
    <section className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Same data. Different question.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-12 rounded-lg border border-ship-accent/20 bg-ship-accent/5 p-6 text-left md:p-8 lg:mt-16"
        >
          <div className="mx-auto max-w-4xl space-y-4 text-base leading-relaxed text-ship-gray-300">
            {PERSONA_LINES.map((persona) => (
              <p key={persona.role}>
                <span className="font-semibold text-ship-white">
                  {personaHeading(persona.role)}
                </span>{" "}
                {persona.line}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 hidden md:block lg:mt-16"
        >
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-ship-gray-800">
                <th className="pb-4 pr-4 font-medium text-ship-gray-500" />
                <th className="pb-4 pr-4 font-heading text-base font-semibold uppercase tracking-tight text-ship-gray-400">
                  Bottom-up analytics
                </th>
                <th className="pb-4 font-heading text-base font-semibold uppercase tracking-tight text-ship-accent">
                  SHIP (top-down)
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr
                  key={row.metric}
                  className="border-b border-ship-gray-800/50"
                >
                  <td className="py-4 pr-4 font-medium text-ship-gray-300">
                    {row.metric}
                  </td>
                  <td className="py-4 pr-4 text-ship-gray-500">
                    {row.traditional}
                  </td>
                  <td className="py-4 font-medium text-ship-white">
                    {row.ship}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile stacked cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 space-y-3 md:hidden"
        >
          {COMPARISON.map((row) => (
            <div
              key={row.metric}
              className="rounded-lg border border-ship-gray-800 bg-ship-gray-900/30 p-4"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-ship-gray-500">
                {row.metric}
              </p>
              <div className="mt-2 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-ship-gray-500">Bottom-up</p>
                  <p className="text-sm text-ship-gray-400">
                    {row.traditional}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-ship-accent">SHIP</p>
                  <p className="text-sm font-semibold text-ship-white">
                    {row.ship}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
