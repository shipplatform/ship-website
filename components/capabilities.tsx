const CAPABILITIES = [
  {
    title: "Brief",
    mono: "BR",
    desc: "A decision-ready morning narrative: what moved which initiative, where drift showed up, and what needs a call — grounded in artefacts, not another wall of DORA charts.",
  },
  {
    title: "Ask",
    mono: "AS",
    desc: "Conversational answers over your whole engineering org. “Is payments on track? Who’s blocked? What changed since Friday?” In the app, in Slack, or inside Claude and Cursor.",
  },
  {
    title: "Prep",
    mono: "PR",
    desc: "1:1s that write themselves. SHIP assembles each report’s recent work, open threads, and last meeting’s notes so you walk in prepared — every time.",
  },
  {
    title: "Catch drift",
    mono: "DR",
    desc: "Early signal when execution diverges from the initiatives you funded — while you can still steer, not in the quarterly review when the miss is already baked.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Meet your Chief of Staff
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ship-gray-400">
            Everything a great chief of staff does — briefs you, answers
            questions, preps your 1:1s, catches drift — grounded in the work your
            team already produces.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.title}
              className="rounded-lg border border-ship-gray-800 bg-ship-gray-900/30 p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-ship-accent/10 font-mono text-sm font-bold text-ship-accent">
                {cap.mono}
              </div>
              <h3 className="font-heading text-lg font-semibold uppercase tracking-tight">
                {cap.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ship-gray-400">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-lg leading-relaxed text-ship-gray-400">
          Not another dashboard to check. An intelligence layer that starts from
          your goals — then holds the work underneath accountable to them.
        </p>
      </div>
    </section>
  );
}
