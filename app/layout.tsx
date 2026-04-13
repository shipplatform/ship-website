import type { Metadata } from "next";
import { Inter, Oswald, Syne } from "next/font/google";
import Script from "next/script";
import JsonLd from "@/components/json-ld";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "SHIP — Top-down engineering intelligence",
  description:
    "Map company goals to real engineering work. SHIP classifies commits, tickets, and docs against your initiatives — daily briefs and drift signal without DORA-for-DORA’s sake.",
  metadataBase: new URL("https://shipplatform.ai"),
  openGraph: {
    title: "SHIP — Top-down engineering intelligence",
    description:
      "From leadership intent to ground truth: initiative-first classification over your artefact trail — not bottom-up velocity charts.",
    url: "https://shipplatform.ai",
    siteName: "SHIP",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHIP — Top-down engineering intelligence",
    description:
      "Goals first, tasks second. Daily briefs grounded in Git, Jira, Confluence, Slack, and more.",
  },
  keywords: [
    "engineering intelligence",
    "software alignment",
    "initiative tracking",
    "engineering management",
    "CTO tools",
    "delivery visibility",
    "drift detection",
    "GitHub Jira integration",
  ],
};

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY || "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${oswald.variable} ${syne.variable} antialiased`}>
        <JsonLd />
        {children}
        {POSTHOG_KEY && (
          <Script
            id="posthog"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing start_session_recording stop_session_recording session_recording_started loadToolbar get_property getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording getActiveMatchingSurveys getSurveys getNextSurveyStep".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);posthog.init('${POSTHOG_KEY}',{api_host:'https://us.i.posthog.com',person_profiles:'identified_only'})`,
            }}
          />
        )}
      </body>
    </html>
  );
}
