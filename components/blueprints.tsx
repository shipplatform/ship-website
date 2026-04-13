"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BLUEPRINTS = [
  {
    name: "Initiative graph",
    detail:
      "Structured initiatives with owners, success criteria, and links to epics or themes — the top-down lens every artefact is judged against.",
  },
  {
    name: "Repository & branch signals",
    detail:
      "Commits and PRs tagged to initiatives via branch naming, paths, and review metadata — deterministic where possible, LLM-assisted where not.",
  },
  {
    name: "Issue & roadmap alignment",
    detail:
      "Jira, Linear, or similar: epics, stories, and transitions reconciled with what leadership said was in scope for the quarter.",
  },
  {
    name: "Knowledge & spec drift",
    detail:
      "Confluence and Notion: when docs and specs diverge from what shipped — so “we agreed X” does not quietly become “we built Y.”",
  },
  {
    name: "Slack & decision trail",
    detail:
      "Key threads and decisions surfaced where they affect prioritisation — not full surveillance; enough to catch narrative vs evidence gaps.",
  },
  {
    name: "Morning brief",
    detail:
      "A single narrative digest: initiative health, drift flags, and what changed since yesterday — built for executives, not dashboard tourists.",
  },
];

function BlueprintItem({ blueprint }: { blueprint: (typeof BLUEPRINTS)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between border-b border-ship-gray-800 py-5 text-left transition-colors hover:text-ship-accent"
      >
        <span className="font-heading text-lg font-semibold uppercase tracking-tight">
          {blueprint.name}
        </span>
        <span className="ml-4 flex-shrink-0 text-xl text-ship-gray-500 transition-transform">
          {open ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-4 pt-2 text-sm leading-relaxed text-ship-gray-400">
              {blueprint.detail}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Blueprints() {
  return (
    <section id="blueprints" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Intelligence surface — not a template library
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ship-gray-400">
            These are the layers SHIP uses to go from company goals to evidence in Git,
            PM, docs, and chat. The point is consistent top-down classification — not
            selling you another “do it faster” dashboard.
          </p>
        </div>

        <div className="mt-12 lg:mt-16">
          {BLUEPRINTS.map((bp) => (
            <BlueprintItem key={bp.name} blueprint={bp} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ship-gray-500">
          Roadmap: deeper automation and agent execution on the same context — after
          the intelligence layer proves alignment in production teams.
        </p>
      </div>
    </section>
  );
}
