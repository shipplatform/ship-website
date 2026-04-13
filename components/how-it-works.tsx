const STEPS = [
  {
    number: "01",
    label: "Encode",
    tag: "Goals first",
    body: "Capture initiatives, success criteria, and technical context — the same judgement you would put in a board pack, in a form SHIP can classify against.",
  },
  {
    number: "02",
    label: "Connect",
    tag: "Artefact trail",
    body: "OAuth into GitHub, Jira, Confluence, Slack, Linear, Notion (and more on the roadmap). Read-only access to the work that already happened.",
  },
  {
    number: "03",
    label: "Brief",
    tag: "Top-down truth",
    body: "A morning narrative: what moved which initiative, where drift shows up, what deserves a decision — not a vanity chart of how busy everyone looked.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
            From leadership intent to ground truth
          </h2>
        </div>

        <div className="relative mt-12 lg:mt-16">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-ship-gray-800 md:left-8 lg:block" />

          <div className="space-y-10">
            {STEPS.map((step) => (
              <div key={step.number} className="relative flex gap-6 lg:pl-20">
                <div className="relative z-10 hidden h-16 w-16 flex-shrink-0 items-center justify-center rounded-sm bg-ship-gray-900 font-mono text-2xl font-bold text-ship-accent lg:flex">
                  {step.number}
                </div>
                <div className="flex-1 rounded-lg border border-ship-gray-800 bg-ship-gray-900/30 p-6 lg:p-8">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xl font-bold text-ship-accent lg:hidden">
                      {step.number}
                    </span>
                    <h3 className="font-heading text-2xl font-bold uppercase tracking-tight">
                      {step.label}
                    </h3>
                    <span className="rounded-full border border-ship-gray-700 px-3 py-0.5 text-xs text-ship-gray-400">
                      {step.tag}
                    </span>
                  </div>
                  <p className="mt-3 leading-relaxed text-ship-gray-400">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-lg border border-ship-accent/20 bg-ship-accent/5 p-6 text-center">
          <p className="text-base leading-relaxed text-ship-gray-300">
            You own priorities and trade-offs. SHIP does not replace that — it
            makes the gap between intent and execution visible early.{" "}
            <span className="font-medium text-ship-white">
              Do the right work, not only more work.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
