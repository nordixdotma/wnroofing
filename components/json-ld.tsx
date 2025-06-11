export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "InteriorDesignService",
          name: "Deco Dari Ameublement",
          image: "https://i.ibb.co/d4FV7HCF/logo-black.png",
          url: "https://decodari.com",
          telephone: "+212611325349",
          email: "decodariambl@gmail.com",
          description: "Experts en design d'intérieur pour résidences, hôtels et établissements médicaux à Marrakech.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "449 1 SECTEUR 017960",
            addressLocality: "Marrakech",
            postalCode: "40100",
            addressCountry: "MA",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 31.673761099999997,
            longitude: -8.191337302734373,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "09:00",
              closes: "17:00",
            },
          ],
          sameAs: ["https://web.facebook.com/deco.dari.ameublement", "https://www.instagram.com/decodariameublement"],
          priceRange: "$$",
        }),
      }}
    />
  )
}

export function WebsiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://decodari.com",
          name: "Deco Dari Ameublement",
          description: "Experts en design d'intérieur pour résidences, hôtels et établissements médicaux à Marrakech.",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://decodari.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      }}
    />
  )
}

export function BreadcrumbJsonLd({ items }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `https://decodari.com${item.path}`,
          })),
        }),
      }}
    />
  )
}
