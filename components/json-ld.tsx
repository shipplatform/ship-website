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
      "Top-down engineering intelligence: map company initiatives to commits, tickets, docs, and chat — daily briefs and drift detection without bottom-up vanity metrics.",
    foundingDate: "2026",
    sameAs: [],
    knowsAbout: [
      "Engineering intelligence",
      "Software delivery alignment",
      "Initiative tracking",
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
