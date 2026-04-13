"use client";

import { motion } from "framer-motion";

const METRICS = [
  { value: "< 24h", unit: "", label: "Typical drift visibility from intent" },
  { value: "Top-down", unit: "", label: "Initiative-first classification" },
  { value: "1", unit: " brief", label: "Morning narrative execs actually read" },
  { value: "0", unit: "", label: "Extra DORA charts required to get value" },
];

export default function ProductionGrade() {
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
            Built for decisions.
            <br />
            Not for vanity metrics.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-lg border border-ship-gray-800 bg-ship-gray-900/30 p-6 text-center"
            >
              <div className="font-heading text-4xl font-bold text-ship-accent md:text-5xl">
                {m.value}
                <span className="text-xl text-ship-gray-400">{m.unit}</span>
              </div>
              <p className="mt-2 text-sm text-ship-gray-400">{m.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-ship-gray-400"
        >
          SHIP is hosted, secured, and operated for real engineering organisations —
          the same bar we held at institutions processing massive daily flow. The
          product promise is alignment evidence you can stand behind in a review — not
          a prototype chart that falls over under real data volume.
        </motion.p>
      </div>
    </section>
  );
}
