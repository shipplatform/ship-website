"use client";

import { motion } from "framer-motion";

const CAREER = [
  {
    company: "Deutsche Bank",
    role: "Market making, quantitative engineering, FX derivatives risk",
  },
  {
    company: "Revolut",
    role: "FX spot trading infrastructure — millions of daily trades, 100k+ concurrent users",
  },
  {
    company: "Vega",
    role: "CTO — built alternative investment platform end-to-end, zero to Series A",
  },
  {
    company: "Nevis",
    role: "AI-powered wealth management platform",
  },
  {
    company: "Capital.com",
    role: "VP Trading Platform — leading 60+ engineers across CFD execution, pricing, and risk",
  },
];

export default function Founder() {
  return (
    <section className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Built by someone who&apos;s been
            <br /> on your side of the table
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 space-y-6"
        >
          <div className="space-y-3">
            {CAREER.map((c, i) => (
              <motion.div
                key={c.company}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="flex flex-col gap-1 rounded-lg border border-ship-gray-800 bg-ship-gray-900/30 px-5 py-4 sm:flex-row sm:items-center sm:gap-4"
              >
                <span className="shrink-0 font-heading text-sm font-semibold uppercase tracking-wider text-ship-accent">
                  {c.company}
                </span>
                <span className="text-sm text-ship-gray-400">{c.role}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-12 max-w-2xl border-l-2 border-ship-accent/40 pl-6 text-base italic leading-relaxed text-ship-gray-300"
        >
          &ldquo;At scale-up after scale-up I watched leaders run on narrative —
          standups, decks, green dashboards — while the artefact trail told a
          different story. The painful part was never typing code faster; it was
          discovering three weeks before a release that we were building the wrong
          thing. SHIP exists to collapse that gap: goals at the top, evidence from
          Git and Jira and docs below, drift in the open before it is expensive.&rdquo;
        </motion.blockquote>
      </div>
    </section>
  );
}
