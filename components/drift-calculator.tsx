"use client";

import { useState } from "react";
import { motion } from "framer-motion";

function formatUsd(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function DriftCalculator() {
  const [engineers, setEngineers] = useState(30);
  const [salary, setSalary] = useState(120_000);
  const [waste, setWaste] = useState(30);

  const annualWaste = engineers * salary * (waste / 100);

  return (
    <section id="calculator" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Your guess is probably wrong
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ship-gray-400">
            When part of the team works on the wrong initiatives, velocity and
            DORA scores still look fine — payroll does not. The arithmetic is
            simple, and usually larger than the number in your head. Move the
            sliders and check.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-lg border border-ship-gray-800 bg-ship-gray-900/40 p-8 lg:p-10"
        >
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-ship-gray-300">
                Number of engineers
              </label>
              <input
                type="range"
                min={5}
                max={200}
                value={engineers}
                onChange={(e) => setEngineers(Number(e.target.value))}
                className="w-full accent-ship-accent"
              />
              <div className="mt-1 text-center font-mono text-2xl font-bold text-ship-white">
                {engineers}
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-ship-gray-300">
                Avg. annual salary (USD)
              </label>
              <input
                type="range"
                min={60000}
                max={250000}
                step={5000}
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className="w-full accent-ship-accent"
              />
              <div className="mt-1 text-center font-mono text-2xl font-bold text-ship-white">
                {formatUsd(salary)}
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-ship-gray-300">
                % capacity on wrong priorities
              </label>
              <input
                type="range"
                min={5}
                max={60}
                value={waste}
                onChange={(e) => setWaste(Number(e.target.value))}
                className="w-full accent-ship-accent"
              />
              <div className="mt-1 text-center font-mono text-2xl font-bold text-ship-white">
                {waste}%
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-ship-gray-800 pt-8 text-center">
            <p className="text-sm uppercase tracking-widest text-ship-gray-500">
              Estimated annual cost of misalignment (illustrative)
            </p>
            <p className="mt-2 font-heading text-5xl font-bold text-ship-white md:text-6xl">
              {formatUsd(annualWaste)}
            </p>
            <p className="mx-auto mt-4 max-w-xl font-mono text-xs leading-relaxed text-ship-gray-500">
              {engineers} engineers × {formatUsd(salary)} avg salary × {waste}%
              on the wrong priorities
            </p>
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-ship-gray-400">
            This is a back-of-the-envelope figure, not a quote — your real number
            depends on your team and your initiatives. But if even a fraction of
            it is real, the cost of seeing it sooner is small by comparison.{" "}
            <a
              href="#how-it-works"
              className="text-ship-accent transition-colors hover:text-ship-accent-hover"
            >
              See how SHIP surfaces it
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
