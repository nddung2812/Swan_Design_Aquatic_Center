export const metadata = {
  title:
    "Professional Fish Tank & Aquarium Cleaning Services Brisbane | Duckaroo - Same Day Service",
  description:
    "★★★★★ Expert fish tank cleaning, aquarium maintenance & pond services in Brisbane. Certified technicians, same-day service, 100% guarantee. Servicing all Brisbane suburbs, Gold Coast & QLD. Call (07) XXX-XXXX",
  keywords: [
    "fish tank cleaning Brisbane",
    "aquarium cleaning service Brisbane",
    "professional aquarium maintenance Brisbane",
    "pond cleaning Brisbane",
    "fish tank setup Brisbane",
    "aquarium technician Brisbane",
    "emergency tank cleaning Brisbane",
    "same day aquarium service Brisbane",
    "certified aquarium specialist Brisbane",
    "fish tank maintenance Gold Coast",
    "aquarium cleaning Southside Brisbane",
    "pond maintenance Northside Brisbane",
    "aquatic consultation Brisbane",
    "fish tank repair Brisbane",
    "aquarium installation Brisbane",
  ].join(", "),
  openGraph: {
    title:
      "Professional Fish Tank & Aquarium Cleaning Services Brisbane | Duckaroo",
    description:
      "★★★★★ Expert fish tank cleaning, aquarium maintenance & pond services in Brisbane. Same-day service across all Brisbane suburbs.",
    url: "https://duckaroo.com.au/service",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dhvj8x2nq/image/upload/v1739712678/duckaroo-service-brisbane.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Fish Tank Cleaning Services Brisbane - Duckaroo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Professional Fish Tank & Aquarium Cleaning Services Brisbane | Duckaroo",
    description:
      "★★★★★ Expert fish tank cleaning, aquarium maintenance & pond services in Brisbane. Same-day service available.",
  },
  alternates: {
    canonical: "https://duckaroo.com.au/service",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServiceLayout({ children }) {
  return (
    <>
      {/* Service-specific structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Duckaroo Fish Tank & Aquarium Cleaning Services",
            description:
              "Professional fish tank cleaning, aquarium maintenance, and pond services in Brisbane, Queensland",
            url: "https://duckaroo.com.au/service",
            telephone: "(04) 57663939",
            email: "aquaticswandesign@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Brisbane",
              addressRegion: "QLD",
              addressCountry: "AU",
            },
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: -27.4698,
                longitude: 153.0251,
              },
              geoRadius: "100000",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Aquarium & Fish Tank Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Fish Tank Cleaning Brisbane",
                    description:
                      "Professional fish tank cleaning service for residential and commercial aquariums in Brisbane",
                  },
                  priceRange: "$$",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Aquarium Maintenance Brisbane",
                    description:
                      "Regular aquarium maintenance and water quality management services",
                  },
                  priceRange: "$$",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Pond Cleaning Brisbane",
                    description:
                      "Professional pond cleaning and maintenance services for outdoor water features",
                  },
                  priceRange: "$$",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Emergency Tank Service",
                    description:
                      "24/7 emergency fish tank cleaning and repair services across Brisbane",
                  },
                  priceRange: "$$$",
                  availability: "https://schema.org/InStock",
                },
              ],
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "247",
              bestRating: "5",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
