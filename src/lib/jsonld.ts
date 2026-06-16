/**
 * JSON-LD builders. Only factual, on-page claims — no ratings, reviews,
 * prices, or "trusted by" assertions that aren't visible on the page.
 */
import { SITE, SITE_URL, SOCIALS } from "../consts";

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    description:
      "The Chief of Staff for engineering leadership: SHIP starts from company goals, reads the artefact trail (code, tickets, docs, chat), and delivers a morning brief, conversational answers in chat and your IDE, 1:1 prep, and early drift detection.",
    foundingDate: SITE.foundingDate,
    sameAs: [SOCIALS.linkedin, SOCIALS.youtube],
    knowsAbout: [
      "Engineering chief of staff",
      "Engineering intelligence",
      "Software delivery alignment",
      "Initiative tracking",
      "1:1 preparation",
      "Drift detection",
      "MCP server",
      "GitHub",
      "Jira",
      "Slack",
      "Product engineering",
    ],
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE_URL,
    description: SITE.description,
    inLanguage: "en-US",
    publisher: { "@type": "Organization", name: SITE.name, url: SITE_URL },
  };
}

export function softwareApplicationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    description: SITE.description,
    publisher: { "@type": "Organization", name: SITE.name, url: SITE_URL },
  };
}

export function breadcrumbLd(
  trail: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, SITE_URL).href,
    })),
  };
}
