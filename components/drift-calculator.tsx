"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CAL_URL = "https://cal.com/shipplatform/discovery";

function formatUsd(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

const TIERS = [
  { maxEngineers: 15, monthly: 2_000, label: "Starter" },
  { maxEngineers: 50, monthly: 5_000, label: "Growth" },
  { maxEngineers: Infinity, monthly: 20_000, label: "Enterprise" },
];

function getTier(engineers: number) {
  return TIERS.find((t) => engineers <= t.maxEngineers) ?? TIERS[TIERS.length - 1];
}

export default function DriftCalculator() {
  const [engineers, setEngineers] = useState(30);
  const [salary, setSalary] = useState(120_000);
  const [waste, setWaste] = useState(30);

  const annualWaste = engineers * salary * (waste / 100);
  const tier = getTier(engineers);
  const shipAnnualCost = tier.monthly * 12;
  const roi = shipAnnualCost > 0 ? Math.round(annualWaste / shipAnnualCost) : 0;

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
            Estimate misalignment cost
          </h2>
          <p className="mt-4 text-lg text-ship-gray-400">
            When engineers work on the wrong initiatives, velocity and DORA scores
            still look fine — payroll does not. Model the cost of that drift.
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
                Number of Engineers
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
                Avg. Annual Salary (USD)
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
                % Capacity on Wrong Priorities
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
              Your annual cost of misalignment (illustrative)
            </p>
            <p className="mt-2 font-heading text-5xl font-bold text-ship-red md:text-6xl">
              {formatUsd(annualWaste)}
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            {TIERS.map((t) => {
              const isActive = t === tier;
              return (
                <div
                  key={t.label}
                  className={`flex-1 rounded-lg border p-5 text-center transition-colors ${
                    isActive
                      ? "border-ship-accent/50 bg-ship-accent/10"
                      : "border-ship-gray-800 bg-ship-gray-900/30"
                  }`}
                >
                  <p className="text-xs font-medium uppercase tracking-widest text-ship-gray-500">
                    {t.label}
                  </p>
                  <p
                    className={`mt-1 font-heading text-2xl font-bold ${
                      isActive ? "text-ship-accent" : "text-ship-gray-400"
                    }`}
                  >
                    {formatUsd(t.monthly)}
                    <span className="text-sm font-normal text-ship-gray-500">
                      /mo
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-ship-gray-500">
                    {t.maxEngineers === Infinity
                      ? "51+ engineers"
                      : t.maxEngineers <= 15
                        ? "up to 15 engineers"
                        : "16–50 engineers"}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-center">
            <p className="text-ship-gray-400">
              SHIP{" "}
              <span className="font-semibold text-ship-accent">
                {tier.label}
              </span>{" "}
              at {formatUsd(shipAnnualCost)}/year vs. your{" "}
              <span className="font-semibold text-ship-white">
                {formatUsd(annualWaste)}
              </span>{" "}
              in misaligned capacity (illustrative).{" "}
              {roi > 0 && (
                <span className="text-ship-green">{roi}x ROI.</span>
              )}
            </p>
          </div>

          <div className="mt-8 text-center">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-sm bg-ship-accent px-10 text-base font-semibold text-white transition-colors hover:bg-ship-accent-hover"
            >
              <span className="sm:hidden">Book a Call</span>
              <span className="hidden sm:inline">Book a Call to Tighten Alignment</span>
            </a>
            <p className="mx-auto mt-4 max-w-xl text-xs leading-relaxed text-ship-gray-500">
              Final contract pricing may vary based on team size, velocity, and any
              optional add-on packages.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
