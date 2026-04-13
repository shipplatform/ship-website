import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security — SHIP",
  description: "Security overview for SHIP (shipplatform.ai)",
};

export default function SecurityPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <h1 className="font-heading text-4xl font-bold uppercase tracking-tight md:text-5xl">
        Security
      </h1>
      <p className="mt-4 text-sm text-ship-gray-500">
        Summary page — expand before enterprise pilots (see product checklist A3).
      </p>
      <div className="mt-10 space-y-6 text-base leading-relaxed text-ship-gray-300">
        <p>
          Data in transit uses TLS. Product integrations are designed for{" "}
          <strong className="text-ship-white">read-only</strong> access where
          vendors allow; credentials are stored encrypted and never logged in
          plain text.
        </p>
        <p>
          For security disclosures or questions: contact through{" "}
          <a href="https://shipplatform.ai" className="text-ship-accent underline">
            shipplatform.ai
          </a>
          .
        </p>
        <p>
          <a href="/privacy" className="text-ship-accent underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </main>
  );
}
