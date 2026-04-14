import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — SHIP",
  description: "Privacy Policy for SHIP (shipplatform.ai)",
};

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <h1 className="font-heading text-4xl font-bold uppercase tracking-tight md:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-ship-gray-500">
        Last updated: 8 March 2026
      </p>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-ship-gray-300">
        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            1. Who We Are
          </h2>
          <p className="mt-2">
            SHIP (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
            operates the website{" "}
            <a
              href="https://shipplatform.ai"
              className="text-ship-accent underline"
            >
              shipplatform.ai
            </a>
            . We are SHIP Platform Inc., a Delaware corporation headquartered in
            the United States, providing AI-native trading platform engineering
            services.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            2. Information We Collect
          </h2>
          <p className="mt-2">We collect the following data when you interact with our website:</p>
          <ul className="mt-3 list-inside list-disc space-y-1 text-ship-gray-400">
            <li>
              <strong className="text-ship-gray-300">Waitlist submissions:</strong>{" "}
              email address, company name, and team size (if provided voluntarily)
            </li>
            <li>
              <strong className="text-ship-gray-300">Analytics data:</strong>{" "}
              anonymized usage data including pages visited, scroll depth, and
              referral source, collected via PostHog
            </li>
            <li>
              <strong className="text-ship-gray-300">Booking data:</strong>{" "}
              name, email, and any information you provide when scheduling a
              discovery call through our booking system
            </li>
          </ul>
          <p className="mt-3">
            We do not collect payment information, biometric data, or sensitive
            personal data.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            3. How We Use Your Information
          </h2>
          <ul className="mt-2 list-inside list-disc space-y-1 text-ship-gray-400">
            <li>To process and respond to your waitlist application</li>
            <li>To schedule and conduct discovery calls</li>
            <li>
              To send you updates about SHIP&apos;s availability (you can
              unsubscribe at any time)
            </li>
            <li>To improve our website and understand visitor behavior</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            4. Data Storage and Third Parties
          </h2>
          <p className="mt-2">Your data may be processed by:</p>
          <ul className="mt-3 list-inside list-disc space-y-1 text-ship-gray-400">
            <li>
              <strong className="text-ship-gray-300">SHIP platform (backend):</strong>{" "}
              for waitlist signups and related account records
            </li>
            <li>
              <strong className="text-ship-gray-300">PostHog:</strong>{" "}
              for anonymized website analytics
            </li>
            <li>
              <strong className="text-ship-gray-300">Vercel:</strong>{" "}
              for website hosting
            </li>
            <li>
              <strong className="text-ship-gray-300">Cal.com or Google Calendar:</strong>{" "}
              for appointment scheduling
            </li>
          </ul>
          <p className="mt-3">
            We do not sell, rent, or trade your personal data to any third party
            for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            5. Data Retention
          </h2>
          <p className="mt-2">
            We retain your waitlist and contact information for as long as
            necessary to fulfill the purposes outlined above, or until you
            request deletion. Analytics data is retained in anonymized form for
            up to 24 months.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            6. Your Privacy Rights
          </h2>
          <p className="mt-2">
            Depending on where you live, you may have rights regarding your
            personal information. For example, if you are a resident of
            California or certain other U.S. states, you may have the right to
            access, correct, delete, or opt out of certain processing of personal
            information, subject to applicable law.
          </p>
          <p className="mt-2">
            If you are in the European Economic Area, United Kingdom, or
            Switzerland, applicable law (including the GDPR or UK GDPR) may
            grant you additional rights such as access, rectification, erasure,
            restriction, objection, and data portability.
          </p>
          <p className="mt-2">
            In all cases, you may contact us to exercise rights that apply to
            you. We will respond in line with applicable law. To exercise any of
            these rights, contact us at{" "}
            <a
              href="mailto:privacy@shipplatform.ai"
              className="text-ship-accent underline"
            >
              privacy@shipplatform.ai
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            7. Cookies
          </h2>
          <p className="mt-2">
            Our website uses essential cookies for functionality and analytics
            cookies (PostHog) to understand visitor behavior. No third-party
            advertising cookies are used. You can disable cookies in your browser
            settings at any time.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            8. Changes to This Policy
          </h2>
          <p className="mt-2">
            We may update this privacy policy from time to time. Changes will be
            posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-ship-white">
            9. Contact
          </h2>
          <p className="mt-2">
            For questions about this privacy policy or your data, email{" "}
            <a
              href="mailto:privacy@shipplatform.ai"
              className="text-ship-accent underline"
            >
              privacy@shipplatform.ai
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
