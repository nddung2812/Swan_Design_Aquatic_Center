import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Duckaroo - Brisbane's #1 Fish Tank & Aquarium Cleaning Service | Professional Pond Maintenance QLD",
  description:
    "★★★★★ Brisbane's premier fish tank cleaning & aquarium maintenance service. Expert pond cleaning, tank setup & aquatic consultations. Same-day service across Brisbane, Gold Coast & QLD. 1000+ satisfied customers. Call now!",
  keywords: [
    // Primary keywords
    "fish tank cleaning Brisbane",
    "aquarium cleaning Brisbane",
    "pond cleaning Brisbane",
    "tank maintenance Brisbane",
    "aquarium service Brisbane",

    // Location-based keywords
    "fish tank cleaning Gold Coast",
    "aquarium cleaning Southside Brisbane",
    "pond maintenance Northside Brisbane",
    "tank cleaning Logan",
    "aquarium service Ipswich",
    "fish tank cleaning Bayside",

    // Service-specific keywords
    "professional aquarium cleaning",
    "fish tank setup Brisbane",
    "pond installation Brisbane",
    "aquatic consultation Brisbane",
    "emergency tank cleaning",
    "same day aquarium service",

    // Business keywords
    "Duckaroo Brisbane",
    "best tank cleaning Brisbane",
    "certified aquarium technician",
    "licensed pond specialist",
    "Brisbane aquatic experts",
  ].join(", "),

  authors: [{ name: "Duckaroo Aquatic Services" }],
  creator: "Duckaroo",
  publisher: "Duckaroo Aquatic Services",

  icons: {
    icon: [
      { url: "/swan-favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/swan-favicon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/swan-favicon.png",
    apple: [{ url: "/swan-favicon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "icon",
        url: "/swan-favicon.png",
      },
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
    canonical: "https://duckaroo.com.au",
  },

  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://duckaroo.com.au",
    siteName: "Duckaroo - Brisbane's #1 Aquarium & Fish Tank Cleaning Service",
    title: "Duckaroo - Brisbane's #1 Fish Tank & Aquarium Cleaning Service",
    description:
      "★★★★★ Brisbane's premier fish tank cleaning & aquarium maintenance service. Expert pond cleaning, tank setup & aquatic consultations. Same-day service across Brisbane, Gold Coast & QLD. 1000+ satisfied customers.",
    images: [
      {
        url: "https://res.cloudinary.com/dhvj8x2nq/image/upload/v1739712678/duckaroo-brisbane-aquarium-cleaning.jpg",
        width: 1200,
        height: 630,
        alt: "Duckaroo - Brisbane's Premier Fish Tank & Aquarium Cleaning Service",
        type: "image/jpeg",
      },
      {
        url: "https://res.cloudinary.com/dhvj8x2nq/image/upload/v1739712678/duckaroo-pond-cleaning-brisbane.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Pond Cleaning Services Brisbane - Duckaroo",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DuckarooBrisbane",
    creator: "@DuckarooBrisbane",
    title: "Duckaroo - Brisbane's #1 Fish Tank & Aquarium Cleaning Service",
    description:
      "★★★★★ Brisbane's premier fish tank cleaning & aquarium maintenance service. Same-day service across Brisbane, Gold Coast & QLD. 1000+ satisfied customers.",
    images: {
      url: "https://res.cloudinary.com/dhvj8x2nq/image/upload/v1739712678/duckaroo-brisbane-aquarium-cleaning.jpg",
      alt: "Duckaroo - Brisbane's Premier Fish Tank & Aquarium Cleaning Service",
    },
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

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <head>
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://duckaroo.com.au/#organization",
              name: "Duckaroo",
              alternateName: "Duckaroo Aquatic Services",
              description:
                "Brisbane's premier fish tank cleaning and aquarium maintenance service. Professional pond cleaning, tank setup, and aquatic consultations across Brisbane, Gold Coast, and Queensland.",
              url: "https://duckaroo.com.au",
              telephone: "(04) 57663939",
              email: "aquaticswandesign@gmail.com",
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
                "Aquarium Setup",
                "Pond Installation",
                "Aquatic Consultation",
              ],
              priceRange: "$$",
              currenciesAccepted: "AUD",
              paymentAccepted: "Cash, Credit Card, Bank Transfer",
              openingHours: "Mo-Su 07:00-19:00",
              image:
                "https://res.cloudinary.com/dhvj8x2nq/image/upload/v1739712678/duckaroo-brisbane-aquarium-cleaning.jpg",
              logo: "https://res.cloudinary.com/dhvj8x2nq/image/upload/v1739712678/duckaroo-logo.png",
              sameAs: [
                "https://www.facebook.com/DuckarooBrisbane",
                "https://www.instagram.com/duckaroo_brisbane",
                "https://www.linkedin.com/company/duckaroo",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "247",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Sarah M.",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "Duckaroo transformed our dirty fish tank into a crystal clear aquarium. Professional, reliable, and reasonably priced. Highly recommend for anyone in Brisbane!",
                },
              ],
            }),
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Aquarium and Fish Tank Cleaning Service",
              provider: {
                "@type": "LocalBusiness",
                name: "Duckaroo",
                "@id": "https://duckaroo.com.au/#organization",
              },
              areaServed: {
                "@type": "State",
                name: "Queensland",
                containsPlace: [
                  {
                    "@type": "City",
                    name: "Brisbane",
                  },
                  {
                    "@type": "City",
                    name: "Gold Coast",
                  },
                  {
                    "@type": "City",
                    name: "Logan",
                  },
                  {
                    "@type": "City",
                    name: "Ipswich",
                  },
                ],
              },
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
                        "Professional fish tank cleaning and maintenance service",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Pond Cleaning",
                      description:
                        "Expert pond cleaning and maintenance service",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Aquarium Setup",
                      description:
                        "Complete aquarium setup and installation service",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How often should I clean my fish tank in Brisbane?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "For optimal fish health, we recommend professional tank cleaning every 2-4 weeks depending on tank size, fish load, and filtration system. Brisbane's climate may require more frequent cleaning due to higher temperatures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide same-day aquarium cleaning in Brisbane?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! Duckaroo offers same-day emergency aquarium cleaning services across Brisbane, Gold Coast, and surrounding areas. Contact us for urgent tank maintenance needs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What areas in Brisbane do you service?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We service all Brisbane areas including CBD, Southside, Northside, Eastern & Western suburbs, Bayside, plus Logan, Ipswich, and Gold Coast regions.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Additional Meta Tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* Geo Tags */}
        <meta name="geo.region" content="AU-QLD" />
        <meta name="geo.placename" content="Brisbane" />
        <meta name="geo.position" content="-27.4698;153.0251" />
        <meta name="ICBM" content="-27.4698, 153.0251" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <GoogleTagManager gtmId="GTM-NQQBXXPZ" />
        <GoogleAnalytics gaId="G-DMVQ6Y0D0S" />
        {children}
      </body>
    </html>
  );
}
