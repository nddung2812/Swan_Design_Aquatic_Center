export const metadata = {
  title:
    "About Duckaroo - Brisbane's #1 Aquarium & Fish Tank Cleaning Service Since 2010",
  description:
    "Learn about Duckaroo, Brisbane's premier fish tank cleaning and aquarium maintenance service since 2010. 15+ years experience, 1000+ happy customers, 5-star rated service across Brisbane, Gold Coast & QLD.",
  keywords: [
    "about duckaroo",
    "brisbane aquarium service",
    "fish tank cleaning brisbane",
    "aquarium maintenance brisbane",
    "pond cleaning brisbane",
    "aquarium company brisbane",
    "fish tank service brisbane",
    "aquatic services brisbane",
    "aquarium technicians brisbane",
    "pond maintenance brisbane",
    "aquascaping brisbane",
    "emergency aquarium service",
    "brisbane aquarium experts",
    "gold coast aquarium service",
    "queensland fish tank cleaning",
  ],

  openGraph: {
    title: "About Duckaroo - Brisbane's #1 Aquarium Service Since 2010",
    description:
      "Discover why 1000+ Brisbane customers trust Duckaroo for fish tank cleaning, aquarium maintenance & pond services. 15+ years experience, 5-star rated, same-day service available.",
    url: "https://duckaroo.com.au/about-us",
    siteName: "Duckaroo Aquatic Services",
    images: [
      {
        url: "https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1739712659/swan-logo-transparent_rphcfl",
        width: 1200,
        height: 630,
        alt: "Duckaroo - Brisbane's Premier Aquarium Service",
      },
    ],
    locale: "en_AU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Duckaroo - Brisbane's #1 Aquarium Service",
    description:
      "15+ years experience in fish tank cleaning & aquarium maintenance across Brisbane, Gold Coast & QLD. 1000+ happy customers, 5-star rated service.",
    images: [
      "https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1739712659/swan-logo-transparent_rphcfl",
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://duckaroo.com.au/about-us",
  },

  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },

  category: "Aquarium Services",
  classification: "Business",

  other: {
    "geo.region": "AU-QLD",
    "geo.placename": "Brisbane",
    "geo.position": "-27.4698;153.0251",
    ICBM: "-27.4698, 153.0251",
    "business:contact_data:locality": "Brisbane",
    "business:contact_data:region": "Queensland",
    "business:contact_data:country_name": "Australia",
    "business:contact_data:postal_code": "4000",
    "business:contact_data:phone_number": "(04) 57663939",
    "business:contact_data:website": "https://duckaroo.com.au",
  },
};

export default function AboutUsLayout({ children }) {
  return (
    <>
      {/* About Us specific structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": "https://duckaroo.com.au/about-us",
            mainEntity: {
              "@type": "LocalBusiness",
              "@id": "https://duckaroo.com.au/#organization",
              name: "Duckaroo",
              alternateName: "Duckaroo Aquatic Services",
              description:
                "Brisbane's premier fish tank cleaning and aquarium maintenance service since 2010. Serving Brisbane, Gold Coast, and Queensland with professional aquatic services.",
              url: "https://duckaroo.com.au",
              telephone: "(04) 5766 3939",
              email: "aquaticswandesign@gmail.com",
              foundingDate: "2010",
              founder: {
                "@type": "Organization",
                name: "Duckaroo Founders",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Street Address",
                addressLocality: "Brisbane",
                addressRegion: "QLD",
                postalCode: "4000",
                addressCountry: "AU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -27.4698,
                longitude: 153.0251,
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Brisbane",
                  sameAs: "https://en.wikipedia.org/wiki/Brisbane",
                },
                {
                  "@type": "City",
                  name: "Gold Coast",
                  sameAs:
                    "https://en.wikipedia.org/wiki/Gold_Coast,_Queensland",
                },
                {
                  "@type": "State",
                  name: "Queensland",
                  sameAs: "https://en.wikipedia.org/wiki/Queensland",
                },
              ],
              serviceType: [
                "Fish Tank Cleaning",
                "Aquarium Maintenance",
                "Pond Cleaning",
                "Aquarium Installation",
                "Emergency Aquarium Service",
                "Aquascaping Design",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "247",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Sarah Mitchell",
                  },
                  reviewBody:
                    "Absolutely fantastic service! The team cleaned our office aquarium and it looks incredible. Professional, punctual, and the fish are so much happier.",
                  datePublished: "2024-01-15",
                },
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "David Chen",
                  },
                  reviewBody:
                    "Best aquarium service in Brisbane! They set up our new 200L tank perfectly and provided excellent ongoing maintenance advice.",
                  datePublished: "2024-01-01",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Aquarium Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Fish Tank Cleaning",
                      description:
                        "Professional fish tank cleaning services across Brisbane",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Aquarium Maintenance",
                      description:
                        "Regular aquarium maintenance and care services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Pond Cleaning",
                      description:
                        "Professional pond cleaning and maintenance services",
                    },
                  },
                ],
              },
              openingHours: "Mo-Su 07:00-19:00",
              priceRange: "$$",
              paymentAccepted: "Cash, Credit Card, Bank Transfer",
              currenciesAccepted: "AUD",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
