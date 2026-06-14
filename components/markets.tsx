"use client";

import { motion } from "framer-motion";

const LIVE_TOOLS = [
  "GitHub",
  "GitLab",
  "Jira",
  "Confluence",
  "Slack",
  "Linear",
  "Notion",
];

const COMING_SOON_TOOLS = [
  { name: "Google Meet", description: "Meeting recordings & transcripts" },
  { name: "Google Drive", description: "Docs, Sheets & Slides" },
  { name: "Zoom", description: "Meeting recordings & transcripts" },
];

const SIGNALS = [
  "Pull requests & commits",
  "Issues & epics",
  "Pages & specs",
  "Threads & decisions",
  "Roadmaps",
  "Design docs",
  "Meeting transcripts",
];

export default function Markets() {
  return (
    <section id="integrations" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Your stack. Your artefact trail.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ship-gray-400">
            SHIP connects to the systems teams already use — read-only OAuth, no
            rip-and-replace, no forcing everyone into a new UI for day-to-day work.
          </p>
        </motion.div>

        <p className="mt-10 text-center text-sm uppercase tracking-widest text-ship-gray-500">
          Available today
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {LIVE_TOOLS.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-lg border border-ship-gray-800 bg-ship-gray-900/30 px-4 py-5 text-center"
            >
              <span className="font-heading text-base font-semibold uppercase tracking-tight">
                {name}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm uppercase tracking-widest text-ship-gray-500">
          Coming soon
        </p>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {COMING_SOON_TOOLS.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative rounded-lg border border-dashed border-ship-gray-800/60 bg-ship-gray-900/20 px-4 py-5 text-center"
            >
              <span className="absolute right-3 top-3 rounded-full border border-ship-gray-700 px-2 py-0.5 text-[10px] uppercase tracking-wide text-ship-gray-500">
                Coming soon
              </span>
              <span className="font-heading text-base font-semibold uppercase tracking-tight text-ship-gray-300">
                {tool.name}
              </span>
              <p className="mt-2 text-xs text-ship-gray-500">{tool.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <p className="mb-4 text-center text-sm uppercase tracking-widest text-ship-gray-500">
            What we classify
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {SIGNALS.map((label) => (
              <span
                key={label}
                className="rounded-full border border-ship-gray-700 px-4 py-1.5 text-sm text-ship-gray-400"
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-ship-gray-400"
        >
          Coming soon: meeting and shared-doc connectors to capture context that
          never became a ticket — opt-in, read-only. Vertical specifics (e.g.
          regulated finance) inform how we think about evidence and governance —
          the product narrative stays horizontal: goals down to tasks, across the
          tools you already run.
        </motion.p>
      </div>
    </section>
  );
}
