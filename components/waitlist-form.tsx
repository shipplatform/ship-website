"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const TEAM_SIZES = ["< 10", "10–50", "50–200", "200+"];

const PRIMARY_STACKS = [
  "GitHub + Jira",
  "GitHub + Linear",
  "GitLab + Jira",
  "Mixed / other",
];

const DESIGN_PARTNER_BENEFITS = [
  {
    title: "Direct founder access",
    body: "Weekly working sessions — your reality lands in product, not a support queue.",
  },
  {
    title: "Shape what we build",
    body: "Initiative workflows, brief formats, and connector priorities reflect what works for your team first.",
  },
  {
    title: "Founding-partner pricing",
    body: "Pricing below our standard rate, locked while we build together — terms we offer now don't come back later.",
  },
  {
    title: "Peer cohort",
    body: "Engineering leaders running top-down alignment in production — compare notes off the record.",
  },
];

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
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [waitlistPhase, setWaitlistPhase] = useState<"email" | "done">("email");
  const [loading, setLoading] = useState(false);
  const [waitlistLoading, setWaitlistLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [company, setCompany] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [primaryStack, setPrimaryStack] = useState("");

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
    const stackNote = primaryStack
      ? `Design partner — stack: ${primaryStack}`
      : "Design partner";
    const sizeWithIntent = teamSize
      ? `${teamSize} (${stackNote})`
      : stackNote;
    try {
      await submitToShipApi({
        email,
        company: company || undefined,
        teamSize: sizeWithIntent,
      });
    } catch {
      // fail silently
    }
    setLoading(false);
    setPhase("done");
  }

  async function handleWaitlistSubmit(e: FormEvent) {
    e.preventDefault();
    setWaitlistLoading(true);
    try {
      await submitToShipApi({ email: waitlistEmail });
    } catch {
      // fail silently
    }
    setWaitlistLoading(false);
    setWaitlistPhase("done");
  }

  return (
    <section id="design-partners" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Become a
            <br />
            design partner
          </h2>
          <p className="mt-4 text-lg text-ship-gray-400">
            SHIP is in private pilot — limited slots for engineering leaders who
            want a chief of staff for their org, with direct working sessions and
            founding-partner pricing. Briefs, chat, 1:1 prep and drift — without
            another dashboard graveyard.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 space-y-4 text-left"
        >
          {DESIGN_PARTNER_BENEFITS.map((benefit) => (
            <li
              key={benefit.title}
              className="rounded-lg border border-ship-gray-800 bg-ship-gray-900/30 px-5 py-4"
            >
              <p className="font-heading text-sm font-semibold uppercase tracking-tight text-ship-white">
                {benefit.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ship-gray-400">
                {benefit.body}
              </p>
            </li>
          ))}
        </motion.ul>

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
                "Request access"
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
                Application received.
              </p>
              <p className="mt-1 text-sm text-ship-gray-400">
                We&apos;ll reply within 48 hours. Onboarding design partners in Q3
                2026.
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
              <select
                value={primaryStack}
                onChange={(e) => setPrimaryStack(e.target.value)}
                className="h-12 w-full rounded-sm border border-ship-gray-700 bg-ship-gray-900 px-4 text-ship-white outline-none transition-colors focus:border-ship-accent"
              >
                <option value="">Primary stack (optional)</option>
                {PRIMARY_STACKS.map((stack) => (
                  <option key={stack} value={stack}>
                    {stack}
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
              Application received.
            </p>
            <p className="mt-2 text-ship-gray-400">
              We&apos;ll reply within 48 hours. Onboarding design partners in Q3
              2026.
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

        {phase !== "done" && waitlistPhase !== "done" && (
          <div className="mt-10 border-t border-ship-gray-800 pt-8">
            {!waitlistOpen ? (
              <button
                type="button"
                onClick={() => setWaitlistOpen(true)}
                className="text-sm text-ship-gray-500 transition-colors hover:text-ship-gray-300"
              >
                Not ready for a partnership?{" "}
                <span className="text-ship-accent">
                  Join the waitlist for launch updates
                </span>
              </button>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                id="waitlist-updates"
                className="mx-auto max-w-md"
              >
                <p className="mb-3 text-sm text-ship-gray-400">
                  Launch updates only — no working partnership commitment.
                </p>
                <form
                  onSubmit={handleWaitlistSubmit}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    placeholder="Work email"
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    className="w-full flex-1 rounded-sm border border-ship-gray-700 bg-ship-gray-900 p-3 text-sm text-ship-white placeholder-ship-gray-500 outline-none transition-colors focus:border-ship-accent sm:h-11 sm:py-0"
                  />
                  <button
                    type="submit"
                    disabled={waitlistLoading}
                    className="inline-flex h-11 items-center justify-center rounded-sm border border-ship-gray-700 px-5 text-sm font-medium text-ship-gray-300 transition-colors hover:border-ship-gray-500 hover:text-ship-white disabled:opacity-60"
                  >
                    {waitlistLoading ? (
                      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    ) : (
                      "Join waitlist"
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        )}

        {waitlistPhase === "done" && phase !== "done" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-sm text-ship-green"
          >
            You&apos;re on the waitlist — we&apos;ll send launch updates before Q3
            2026.
          </motion.p>
        )}
      </div>
    </section>
  );
}
