"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const TEAM_SIZES = ["< 10", "10–50", "50–200", "200+"];

const SHIP_API_BASE =
  (process.env.NEXT_PUBLIC_SHIP_API_URL || "").replace(/\/$/, "") || "";

/** Creates or updates a waitlist row in ship-backend (`waitlist` status until first Google sign-in). */
async function submitToShipApi(payload: {
  email: string;
  company?: string;
  teamSize?: string;
}) {
  if (!SHIP_API_BASE) return;
  const res = await fetch(`${SHIP_API_BASE}/v1/waitlist`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: payload.email.trim(),
      ...(payload.company?.trim()
        ? { company: payload.company.trim() }
        : {}),
      ...(payload.teamSize?.trim()
        ? { teamSize: payload.teamSize.trim() }
        : {}),
    }),
  });
  if (res.ok || res.status === 409) return;
  throw new Error(`waitlist api: ${res.status}`);
}

export default function WaitlistForm() {
  const [phase, setPhase] = useState<"email" | "qualify" | "done">("email");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [teamSize, setTeamSize] = useState("");

  async function handleEmailSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await submitToShipApi({ email });
    } catch {
      // fail silently
    }
    setLoading(false);
    setPhase("qualify");
  }

  async function handleQualifySubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await submitToShipApi({
        email,
        company: company || undefined,
        teamSize: teamSize || undefined,
      });
    } catch {
      // fail silently
    }
    setLoading(false);
    setPhase("done");
  }

  return (
    <section id="waitlist" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Right work.
            <br />
            Visible early.
          </h2>
          <p className="mt-4 text-lg text-ship-gray-400">
            SHIP is in private pilot. Join the waitlist for top-down engineering
            intelligence — goals to tasks, briefs and drift without another
            dashboard graveyard.
          </p>
        </motion.div>

        {phase === "email" && (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleEmailSubmit}
            className="mt-12 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full flex-1 rounded-sm border border-ship-gray-700 bg-ship-gray-900 p-4 text-base text-ship-white placeholder-ship-gray-500 outline-none transition-colors focus:border-ship-accent sm:h-14 sm:py-0"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-14 w-full items-center justify-center rounded-sm bg-ship-accent px-8 text-base font-semibold text-white transition-colors hover:bg-ship-accent-hover disabled:opacity-60 sm:w-auto"
            >
              {loading ? (
                <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              ) : (
                "Join the Waitlist"
              )}
            </button>
          </motion.form>
        )}

        {phase === "qualify" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12"
          >
            <div className="rounded-lg border border-ship-green/30 bg-ship-green/5 p-6">
              <p className="text-lg font-semibold text-ship-green">
                You&apos;re on the list.
              </p>
              <p className="mt-1 text-sm text-ship-gray-400">
                We&apos;re onboarding pilot customers in Q2 2026.
              </p>
            </div>

            <form onSubmit={handleQualifySubmit} className="mt-6 space-y-3">
              <p className="text-sm text-ship-gray-400">
                Help us prepare — tell us a bit more:
              </p>
              <input
                type="text"
                placeholder="Company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="h-12 w-full rounded-sm border border-ship-gray-700 bg-ship-gray-900 px-4 text-ship-white placeholder-ship-gray-500 outline-none transition-colors focus:border-ship-accent"
              />
              <select
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value)}
                className="h-12 w-full rounded-sm border border-ship-gray-700 bg-ship-gray-900 px-4 text-ship-white outline-none transition-colors focus:border-ship-accent"
              >
                <option value="" disabled>
                  Team size
                </option>
                {TEAM_SIZES.map((size) => (
                  <option key={size} value={size}>
                    {size} engineers
                  </option>
                ))}
              </select>
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-12 flex-1 items-center justify-center rounded-sm bg-ship-gray-800 text-sm font-semibold text-ship-white transition-colors hover:bg-ship-gray-700 disabled:opacity-60"
                >
                  {loading ? (
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  ) : (
                    "Submit"
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setPhase("done")}
                  className="inline-flex h-12 items-center justify-center rounded-sm px-6 text-sm text-ship-gray-500 transition-colors hover:text-ship-gray-300"
                >
                  Skip
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {phase === "done" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 rounded-lg border border-ship-green/30 bg-ship-green/5 p-8"
          >
            <p className="text-xl font-semibold text-ship-green">
              You&apos;re on the list.
            </p>
            <p className="mt-2 text-ship-gray-400">
              We&apos;re onboarding pilot customers in Q2 2026. We&apos;ll be in
              touch soon.
            </p>
            <a
              href="https://cal.com/shipplatform/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-sm border border-ship-accent/30 px-6 text-sm font-semibold text-ship-accent transition-colors hover:bg-ship-accent/10"
            >
              Or book a discovery call now
            </a>
          </motion.div>
        )}

        {phase === "email" && (
          <p className="mt-3 text-xs text-ship-gray-500">
            No credit card required. Private pilot. Limited spots.
          </p>
        )}
      </div>
    </section>
  );
}
