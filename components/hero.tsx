"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DEPLOY_LINES = [
  { module: "Company initiatives", delay: 0, status: "linked" },
  { module: "Issues & roadmaps", delay: 1800, status: "linked" },
  { module: "Pull requests & commits", delay: 3600, status: "linked" },
  { module: "Docs & specs", delay: 5400, status: "linked" },
  { module: "Slack & chat", delay: 7200, status: "linked" },
  { module: "Morning brief", delay: 9000, status: "delivered" },
];

function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (typingIndex >= DEPLOY_LINES.length) return;

    const line = DEPLOY_LINES[typingIndex];
    const fullText = `mapping ${line.module.toLowerCase()}`;
    let charIdx = 0;

    setTypedText("");

    const typeInterval = setInterval(() => {
      charIdx++;
      setTypedText(fullText.slice(0, charIdx));

      if (charIdx >= fullText.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setVisibleLines((prev) => [...prev, typingIndex]);
          setTypedText("");
          setTypingIndex((prev) => prev + 1);
        }, 400);
      }
    }, 35);

    return () => clearInterval(typeInterval);
  }, [typingIndex]);

  useEffect(() => {
    if (typingIndex >= DEPLOY_LINES.length) {
      const timeout = setTimeout(() => {
        setVisibleLines([]);
        setTypingIndex(0);
        setTypedText("");
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex]);

  return (
    <div className="mx-auto mt-12 max-w-xl rounded-lg border border-ship-gray-800 bg-ship-gray-900/50 p-6 font-mono text-sm backdrop-blur-sm lg:mt-16">
      <div className="mb-3 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-ship-red/60" />
        <span className="h-3 w-3 rounded-full bg-ship-amber/60" />
        <span className="h-3 w-3 rounded-full bg-ship-green/60" />
        <span className="ml-2 text-xs text-ship-gray-500">ship brief</span>
      </div>
      <div className="space-y-1.5">
        {visibleLines.map((lineIdx) => (
          <div key={lineIdx} className="flex items-center gap-2">
            <span className="text-ship-green">✓</span>
            <span className="text-ship-gray-400">
              {DEPLOY_LINES[lineIdx].module.toLowerCase()}
            </span>
            <span className="text-ship-green">
              {DEPLOY_LINES[lineIdx].status}
            </span>
          </div>
        ))}
        {typingIndex < DEPLOY_LINES.length && (
          <div className="flex items-center gap-2">
            <span className="text-ship-accent">›</span>
            <span className="text-ship-white">
              {typedText}
              <span className="animate-blink text-ship-accent">▌</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

const TRUST_COMPANIES = [
  "Deutsche Bank",
  "Revolut",
  "Vega",
  "Capital.com",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-24 pt-40"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-5xl text-center"
      >
        <h1 className="font-heading text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
          Top-Down Engineering
          <br />
          Intelligence
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ship-gray-400 md:text-xl">
          Start from company goals and initiatives — then see how commits, tickets,
          docs, and messages actually map to that intent.{" "}
          <span className="text-ship-white">
            Not &ldquo;are we busy?&rdquo; — are we doing what we agreed to do?
          </span>
        </p>
        <p className="mx-auto mt-3 max-w-xl text-base font-medium text-ship-gray-300">
          The opposite of bottom-up dashboards: fewer DORA vanity charts, more
          alignment from strategy to the task in front of each engineer.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#design-partners"
            className="inline-flex h-14 items-center justify-center rounded-sm bg-ship-accent px-8 text-base font-semibold text-white transition-colors hover:bg-ship-accent-hover"
          >
            Apply as design partner
          </a>
          <a
            href="#how-it-works"
            className="inline-flex h-14 items-center justify-center rounded-sm border border-ship-gray-700 px-8 text-base font-medium text-ship-gray-300 transition-colors hover:border-ship-gray-500 hover:text-ship-white"
          >
            See How It Works
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="hidden w-full lg:block"
      >
        <TerminalAnimation />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-ship-gray-800 pt-8 lg:mt-20"
      >
        <span className="text-xs uppercase tracking-widest text-ship-gray-500">
          Built by engineers from
        </span>
        {TRUST_COMPANIES.map((company) => (
          <span
            key={company}
            className="text-sm font-medium tracking-wide text-ship-gray-400"
          >
            {company}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
