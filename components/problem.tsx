const PAIN_CARDS = [
  {
    title: "The Bottom-Up Trap",
    body: "Velocity, cycle time, and DORA-style dashboards tell you how fast the machine spins — not whether it is pointed at the right hill. Busy teams can still ship the wrong roadmap.",
  },
  {
    title: "The Narrative Gap",
    body: "Standups sell a story: “almost done,” “good progress.” The artefact trail — PRs, tickets, docs — often tells a different one. Reconciling the two burns leadership hours every week.",
  },
  {
    title: "The Tool Sprawl Tax",
    body: "Jira, GitHub, Confluence, Slack, Linear, Notion — truth is fragmented. Without a top-down map from company goals to actual work, execs chase updates instead of making decisions.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center md:text-left">
          <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Fast execution is easy to measure.
            <br className="hidden md:block" /> Correct execution is not.
          </h2>
          <p className="mt-4 text-lg text-ship-gray-400 md:text-xl">
            Most tooling optimises activity. SHIP starts from what leadership said matters — then
            classifies real work against that intent.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
          {PAIN_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-lg border border-ship-gray-800 bg-ship-gray-900/40 p-8"
            >
              <h3 className="font-heading text-xl font-semibold uppercase tracking-tight">
                {card.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ship-gray-400">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
