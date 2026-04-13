const GAP_CARDS = [
  {
    name: "Roadmap vs backlog",
    desc: "Leadership talks initiatives; Jira shows a thousand tickets. Without a bridge, “priority” is whatever got escalated last.",
  },
  {
    name: "Velocity vs outcomes",
    desc: "Story points and cycle time are easy to game. They do not prove the next release advances the bets the company actually made.",
  },
  {
    name: "Activity vs evidence",
    desc: "Commits and merges are busy. The question is whether they land on the initiative that funds the payroll.",
  },
  {
    name: "DORA without direction",
    desc: "Deployment frequency and lead time are useful — after you know you are building the right thing. Alone, they optimise “do fast,” not “do what matters.”",
  },
  {
    name: "Dashboards nobody opens",
    desc: "Bottom-up BI aggregates noise. Execs still ask for a human to stitch Git, PM, and docs into a coherent picture.",
  },
  {
    name: "Quarterly surprise",
    desc: "When narrative and artefact trail diverge for weeks, the miss shows up late — in a review deck, not when you could still steer.",
  },
];

export default function RebuildCurse() {
  return (
    <section className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center md:text-left">
          <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
            The gap between goals
            <br /> and ground truth
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {GAP_CARDS.map((mod, i) => (
            <div
              key={mod.name}
              className="glow-card rounded-lg border border-ship-gray-800 bg-ship-gray-900/30 p-6"
              style={{ animationDelay: `${i * 0.7}s` }}
            >
              <h3 className="font-mono text-base font-medium text-ship-accent">
                {mod.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ship-gray-400">
                {mod.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-lg leading-relaxed text-ship-gray-400">
          SHIP closes the loop: encode what matters at the top, read what actually
          happened in the tools below, and surface drift while you can still act — not
          after the quarter is baked.
        </p>
      </div>
    </section>
  );
}
