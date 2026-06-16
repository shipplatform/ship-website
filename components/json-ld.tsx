export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SHIP",
    legalName: "SHIP Platform Inc.",
    url: "https://shipplatform.ai",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    description:
      "The Chief of Staff for engineering leadership: SHIP starts from company goals, reads the artefact trail (code, tickets, docs, chat), and delivers a morning brief, conversational answers in chat and your IDE, 1:1 prep, and early drift detection.",
    foundingDate: "2026",
    sameAs: [
      "https://www.linkedin.com/company/shipplatform/",
      "https://www.youtube.com/@shipplatform",
    ],
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
