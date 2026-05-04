import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security — SHIP",
  description:
    "How SHIP protects customer data: architecture, authentication, encryption, integrations, and operational practices.",
};

export default function SecurityPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <h1 className="font-heading text-4xl font-bold uppercase tracking-tight md:text-5xl">
        Security
      </h1>
      <p className="mt-4 text-sm text-ship-gray-500">
        Product security overview for the SHIP platform (ship-app and Ship API).
      </p>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-ship-gray-300">
        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            Architecture &amp; isolation
          </h2>
          <p className="mt-2">
            The SHIP web application talks to a dedicated Ship API over HTTPS. Data is
            organized per tenant, and application logic is designed so queries and
            mutations stay scoped to the authenticated user&apos;s tenant context.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            Authentication &amp; sessions
          </h2>
          <p className="mt-2">
            Users sign in through standard OAuth flows. Session material for calling the
            API is handled with HttpOnly cookies and server-side routes where applicable,
            reducing exposure of bearer tokens to client-side scripts. We do not log raw
            credentials or session secrets.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            Encryption &amp; secrets
          </h2>
          <p className="mt-2">
            Traffic between browsers, the Ship API, and integrated services uses TLS in
            transit. Tenant-provided API keys and similar secrets are stored encrypted at
            rest using platform-managed keys (bring-your-own-key flows use additional
            envelope encryption; master encryption material lives only in managed secret
            stores, never in source control, with separate keys per environment).
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            Integrations
          </h2>
          <p className="mt-2">
            Connectors are built for{" "}
            <strong className="text-ship-white">least privilege</strong> and, where a
            vendor supports it, <strong className="text-ship-white">read-only</strong>{" "}
            access. OAuth tokens and integration credentials are treated as secrets and
            are not returned or logged in plaintext.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            AI providers
          </h2>
          <p className="mt-2">
            Certain features rely on large language model APIs (for example Anthropic).
            Prompts and responses travel over TLS to the provider under their terms.
            For how personal data may be involved, see our{" "}
            <a href="/privacy" className="text-ship-accent underline">
              Privacy Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            Audit logging &amp; retention
          </h2>
          <p className="mt-2">
            Security-sensitive actions are recorded in an append-oriented audit trail for
            tenant accountability and incident review. Retention periods are
            configurable to balance forensic needs with storage and compliance goals;
            automated purge jobs apply policies consistently without exposing sensitive
            payloads in operational logs.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            Application hardening
          </h2>
          <p className="mt-2">
            The SHIP web app sends standard security HTTP headers (for example
            protections against MIME sniffing, cross-origin referrer leakage, and
            embedding in foreign frames) plus a{" "}
            <strong className="text-ship-white">Content Security Policy in report-only mode</strong>{" "}
            while integrations and auth flows are validated—so violations surface without
            blocking users during rollout. User-visible rich content from untrusted
            sources is sanitized before rendering.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            Secure development
          </h2>
          <p className="mt-2">
            Dependencies are monitored with automated vulnerability scanning in CI. API
            errors return stable, safe messages to clients rather than raw upstream
            responses that might leak implementation detail.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            Contact
          </h2>
          <p className="mt-2">
            For security disclosures or questions about this overview, email{" "}
            <a
              href="mailto:security@shipplatform.ai"
              className="text-ship-accent underline"
            >
              security@shipplatform.ai
            </a>
            . For privacy rights and personal data requests, see{" "}
            <a href="/privacy" className="text-ship-accent underline">
              Privacy Policy
            </a>{" "}
            or write to{" "}
            <a
              href="mailto:privacy@shipplatform.ai"
              className="text-ship-accent underline"
            >
              privacy@shipplatform.ai
            </a>
            .
          </p>
          <p className="mt-3 text-sm text-ship-gray-500">
            Enterprise diligence packs (subprocessors, retention summaries, and incident
            response contacts) can be provided under NDA—reach out via{" "}
            <a href="https://shipplatform.ai" className="text-ship-accent underline">
              shipplatform.ai
            </a>
            .
          </p>
        </section>
      </div>

      <div className="mt-16 border-t border-ship-gray-800 pt-8">
        <a
          href="/"
          className="text-sm text-ship-gray-500 transition-colors hover:text-ship-white"
        >
          &larr; Back to home
        </a>
      </div>
    </main>
  );
}
