const ROLES = [
  {
    title: "Initiatives & context",
    desc: "Structured goals, success criteria, and risk — the judgement leaders already hold, written so systems can reason over it.",
    mono: "IC",
  },
  {
    title: "Connectors",
    desc: "Read-only links into GitHub, Jira, Confluence, Slack, Linear, Notion — the artefact trail, not another manual timesheet.",
    mono: "CX",
  },
  {
    title: "Classification",
    desc: "Map commits, tickets, and docs to initiatives — deterministic filters plus LLM where the signal is ambiguous.",
    mono: "CL",
  },
  {
    title: "Drift & quality",
    desc: "Catch when execution diverges from stated intent before it becomes a deck-level surprise — evidence, not vibes.",
    mono: "QA",
  },
  {
    title: "Delivery & ops",
    desc: "Hosted pipelines, secure tokens, and reliable delivery of briefs to Slack or inbox — boring when it must be.",
    mono: "DO",
  },
  {
    title: "Governance",
    desc: "Audit-friendly trails for regulated environments — who saw what, when, and on what basis (where product scope allows).",
    mono: "GV",
  },
  {
    title: "Domain depth",
    desc: "Founding team experience from high-scale trading and fintech — useful where delivery sits under heavy scrutiny.",
    mono: "DM",
  },
];

export default function VirtualTeam() {
  return (
    <section className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
            What sits behind the brief
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {ROLES.map((role) => (
            <div
              key={role.title}
              className="rounded-lg border border-ship-gray-800 bg-ship-gray-900/30 p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-ship-accent/10 font-mono text-sm font-bold text-ship-accent">
                {role.mono}
              </div>
              <h3 className="font-heading text-lg font-semibold uppercase tracking-tight">
                {role.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ship-gray-400">
                {role.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-lg leading-relaxed text-ship-gray-400">
          This is not an army of generic coding agents. It is an intelligence layer that
          respects your goals first — then holds the work underneath accountable to them.
        </p>
      </div>
    </section>
  );
}
