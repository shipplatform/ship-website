import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — SHIP",
  description: "Terms of Service for SHIP (shipplatform.ai)",
};

export default function Terms() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <h1 className="font-heading text-4xl font-bold uppercase tracking-tight md:text-5xl">
        Terms of Service
      </h1>
      <p className="mt-4 text-sm text-ship-gray-500">
        Last updated: 16 June 2026
      </p>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-ship-gray-300">
        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            1. Agreement to Terms
          </h2>
          <p className="mt-2">
            By accessing or using the SHIP website at{" "}
            <a
              href="https://shipplatform.ai"
              className="text-ship-accent underline"
            >
              shipplatform.ai
            </a>{" "}
            (&ldquo;the Site&rdquo;), you agree to be bound by these Terms of
            Service (&ldquo;Terms&rdquo;) with SHIP Platform Inc., a Delaware
            corporation based in the United States. If you do not agree, please
            do not use the Site.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            2. Description of Service
          </h2>
          <p className="mt-2">
            SHIP provides an AI-native engineering intelligence platform — a
            chief-of-staff layer that helps engineering leaders see how their
            teams&apos; work maps to company goals, through briefings, drift
            signals, and 1:1 preparation grounded in the tools teams already use.
            The Site serves as a marketing and information resource about our
            services, and provides a waitlist signup and discovery call booking
            functionality.
          </p>
          <p className="mt-2">
            SHIP is currently in private pilot. Access to our services is by
            invitation only. Joining the waitlist does not guarantee access.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            3. Waitlist and Communications
          </h2>
          <p className="mt-2">
            By submitting your email address to our waitlist, you consent to
            receive communications from SHIP related to our service
            availability, updates, and relevant announcements. You may
            unsubscribe at any time by replying to any email or contacting us at{" "}
            <a
              href="mailto:hello@shipplatform.ai"
              className="text-ship-accent underline"
            >
              hello@shipplatform.ai
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            4. Intellectual Property
          </h2>
          <p className="mt-2">
            All content on this Site — including text, design, code, graphics,
            and trademarks — is the property of SHIP and is protected by
            applicable intellectual property laws. You may not reproduce,
            distribute, or create derivative works without our written
            permission.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            5. Accuracy of Information
          </h2>
          <p className="mt-2">
            The statistics, cost comparisons, and performance metrics presented
            on this Site are based on real-world experience and reasonable
            estimates. However, actual results may vary depending on your
            specific requirements, team composition, and technical environment.
            We do not guarantee specific outcomes.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            6. Limitation of Liability
          </h2>
          <p className="mt-2">
            To the maximum extent permitted by applicable law, SHIP shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising from your use of the Site or reliance on
            any information provided herein.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            7. Third-Party Links
          </h2>
          <p className="mt-2">
            This Site may contain links to third-party websites or services
            (including booking and analytics tools). We are not responsible for
            the content or practices of any third-party sites.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            8. Governing Law
          </h2>
          <p className="mt-2">
            These Terms are governed by and construed in accordance with the
            laws of the State of Delaware and applicable federal law of the
            United States, without regard to conflict-of-law principles. Any
            disputes arising under or relating to these Terms or the Site shall
            be brought exclusively in the state or federal courts located in
            Delaware, and you consent to personal jurisdiction there.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            9. Changes to These Terms
          </h2>
          <p className="mt-2">
            We reserve the right to update these Terms at any time. Changes will
            be posted on this page with an updated revision date. Your continued
            use of the Site after changes constitutes acceptance of the revised
            Terms.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            10. Contact
          </h2>
          <p className="mt-2">
            For questions about these Terms, contact us at{" "}
            <a
              href="mailto:hello@shipplatform.ai"
              className="text-ship-accent underline"
            >
              hello@shipplatform.ai
            </a>
            .
          </p>
        </section>
      </div>

      <div className="mt-16 border-t border-ship-gray-800 pt-8">
        <Link
          href="/"
          className="text-sm text-ship-gray-500 transition-colors hover:text-ship-white"
        >
          &larr; Back to home
        </Link>
      </div>
    </main>
  );
}
