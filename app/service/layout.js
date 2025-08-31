export const metadata = {
  title:
    "Fish Tank Cleaning Service Brisbane | Professional Aquarium Maintenance | Duckaroo",
  description:
    "★★★★★ Premium fish tank cleaning service in Brisbane. Expert aquarium maintenance, pond cleaning & setup services. Professional technicians, same-day service across all Brisbane areas. Book your fish tank cleaning service today!",
  keywords: [
    "fish tank cleaning service",
    "fish tank cleaning service Brisbane",
    "professional fish tank cleaning service",
    "aquarium cleaning service Brisbane",
    "Brisbane fish tank cleaning service",
    "fish tank maintenance Brisbane",
    "aquarium maintenance service Brisbane",
    "pond cleaning Brisbane",
    "fish tank setup Brisbane",
    "emergency fish tank cleaning service Brisbane",
    "same day fish tank cleaning service",
    "certified fish tank cleaning Brisbane",
    "residential fish tank cleaning service",
    "commercial fish tank cleaning service",
    "affordable fish tank cleaning service Brisbane",
  ].join(", "),
  openGraph: {
    title:
      "Fish Tank Cleaning Service Brisbane | Professional Aquarium Maintenance | Duckaroo",
    description:
      "★★★★★ Premium fish tank cleaning service in Brisbane. Expert aquarium maintenance, pond cleaning & setup services across all Brisbane areas.",
    url: "https://aquaticswandesign.com.au/service",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dhvj8x2nq/image/upload/v1739712678/duckaroo-service-brisbane.jpg",
        width: 1200,
        height: 630,
        alt: "Fish Tank Cleaning Service Brisbane - Professional Aquarium Maintenance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Fish Tank Cleaning Service Brisbane | Professional Aquarium Maintenance | Duckaroo",
    description:
      "★★★★★ Premium fish tank cleaning service in Brisbane. Professional technicians, same-day service available.",
  },
  alternates: {
    canonical: "https://aquaticswandesign.com.au/service",
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
            name: "Duckaroo Fish Tank Cleaning Service Brisbane",
            description:
              "Premium fish tank cleaning service, aquarium maintenance, and pond services across all Brisbane areas, Queensland",
            url: "https://aquaticswandesign.com.au/service",
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
                    name: "Fish Tank Cleaning Service Brisbane",
                    description:
                      "Premium fish tank cleaning service for residential and commercial aquariums across all Brisbane areas",
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
