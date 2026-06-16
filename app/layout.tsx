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
  title: "SHIP — The Chief of Staff for engineering leadership",
  description:
    "SHIP starts from your company goals and reads the work your teams already produce — code, tickets, docs, chat — then briefs you, answers any question in chat or your IDE, preps your 1:1s, and catches drift early.",
  metadataBase: new URL("https://shipplatform.ai"),
  openGraph: {
    title: "SHIP — The Chief of Staff for engineering leadership",
    description:
      "They tell you how fast your team works. SHIP tells you whether your team is working on the right things — brief, chat, 1:1 prep, and drift, grounded in the artefact trail.",
    url: "https://shipplatform.ai",
    siteName: "SHIP",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHIP — The Chief of Staff for engineering leadership",
    description:
      "Briefs, chat, 1:1 prep and drift signal — grounded in Git, Jira, Confluence, Slack, Linear, and Notion. Ask in the app, in Slack, or inside Claude & Cursor.",
  },
  keywords: [
    "engineering chief of staff",
    "engineering intelligence",
    "software alignment",
    "initiative tracking",
    "engineering management",
    "CTO tools",
    "1:1 prep",
    "drift detection",
    "GitHub Jira integration",
    "MCP server",
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
