export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "Blacktail Builders LLC",
    description:
      "Full-service residential construction company specializing in custom homes, design-build, and quality craftsmanship across Southern Oregon.",
    url: "https://www.blacktailbuildersllc.com",
    telephone: "+1-541-378-6971",
    email: "Info@blacktailbuildersllc.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Roseburg",
      addressRegion: "OR",
      postalCode: "97471",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.2165,
      longitude: -123.3417,
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Douglas County, Oregon",
      },
      {
        "@type": "AdministrativeArea",
        name: "Coos County, Oregon",
      },
      {
        "@type": "AdministrativeArea",
        name: "Curry County, Oregon",
      },
    ],
    serviceType: [
      "Custom Home Construction",
      "Design-Build",
      "Residential Construction",
      "Home Remodeling",
      "General Contracting",
    ],
    image: "https://www.blacktailbuildersllc.com/og-image.png",
    logo: "https://www.blacktailbuildersllc.com/logos/logo-transparent.png",
    priceRange: "$$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebPageSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: "Blacktail Builders LLC",
      url: "https://www.blacktailbuildersllc.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Blacktail Builders LLC",
      logo: {
        "@type": "ImageObject",
        url: "https://www.blacktailbuildersllc.com/logos/logo-transparent.png",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "GeneralContractor",
      name: "Blacktail Builders LLC",
      url: "https://www.blacktailbuildersllc.com",
    },
    serviceType: "Custom Home Construction",
    areaServed: {
      "@type": "State",
      name: "Oregon",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Residential Construction Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Service Design + Build",
            description:
              "Complete design-build services from initial concept through final walkthrough for custom homes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Planning & Management",
            description:
              "Project planning, permitting, budgeting, and construction management services.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Quality Construction",
            description:
              "Expert craftsmanship in framing, finishes, and residential construction.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
