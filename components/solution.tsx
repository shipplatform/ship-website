"use client";

import { motion } from "framer-motion";

const STEPS = [
  { word: "Scope", rest: "COPE", desc: "Encode initiatives & success criteria" },
  { word: "Harness", rest: "ARNESS", desc: "Classify artefacts against that intent" },
  { word: "Iterate", rest: "TERATE", desc: "Surface drift early; adjust priorities" },
  { word: "Publish", rest: "UBLISH", desc: "Decision-ready briefs, not raw metrics" },
];

export default function Solution() {
  return (
    <section id="solution" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
            SHIP is top-down engineering
            <br /> intelligence — goals first, tasks second
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-ship-gray-400">
            You define initiatives and context. SHIP reads the artefact trail your teams
            already produce — code, tickets, docs, chat — and classifies it against that
            intent. The output is alignment and drift signal: what actually moved the
            goals, not a leaderboard of who merged the most PRs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 max-w-2xl rounded-lg border border-ship-accent/20 bg-ship-accent/5 p-8 text-center"
        >
          <p className="text-lg font-medium text-ship-white">
            Bottom-up tools answer: &ldquo;How much did we ship?&rdquo; That rewards
            motion. SHIP answers: &ldquo;Did we ship what leadership committed to?&rdquo;
          </p>
          <p className="mt-3 text-lg text-ship-accent">
            Same connectors and data — different direction of reasoning. From company
            goals to the concrete task, not from activity metrics to a story.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <p className="mb-5 text-center text-sm uppercase tracking-widest text-ship-gray-500">
            The SHIP Method
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {STEPS.map((step) => (
              <div
                key={step.word}
                className="rounded-lg border border-ship-gray-800 bg-ship-gray-900/30 px-4 py-5 text-center"
              >
                <div className="font-heading uppercase tracking-tight">
                  <span className="text-2xl font-bold text-ship-accent">
                    {step.word[0]}
                  </span>
                  <span className="text-sm font-semibold text-ship-white">
                    {step.rest}
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-ship-gray-400">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
