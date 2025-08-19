import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Duckaroo Brisbane | #1 Fish Tank Cleaning, Removal & Aquarium Service QLD",
  description:
    "Brisbane's premier fish tank cleaning & removal service since 2020. Professional aquarium maintenance, tank removal, pond cleaning & plant care. Same-day service available. Call (04) 5766 3939",
  keywords:
    "fish tank cleaning Brisbane, tank removal Brisbane, aquarium service QLD, pond maintenance, aquarium cleaning, Brisbane aquatic service, fish tank maintenance",
  authors: [{ name: "Duckaroo Brisbane" }],
  creator: "Duckaroo Brisbane",
  publisher: "Duckaroo Brisbane",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://duckaroo.com.au"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Duckaroo Brisbane | #1 Fish Tank Cleaning, Removal & Aquarium Service QLD",
    description:
      "Brisbane's premier fish tank cleaning & removal service since 2020. Professional aquarium maintenance, tank removal, pond cleaning & plant care. Same-day service available.",
    url: "https://duckaroo.com.au",
    siteName: "Duckaroo Brisbane",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "Professional Aquarium Cleaning Service Brisbane - Duckaroo",
      },
      {
        url: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "Aquascaping and Plant Care Services Brisbane",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Duckaroo Brisbane | #1 Fish Tank Cleaning, Removal & Aquarium Service QLD",
    description:
      "Brisbane's premier fish tank cleaning & removal service since 2020. Professional aquarium maintenance, tank removal, pond cleaning & plant care. Same-day service available.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=630&fit=crop&crop=center",
        alt: "Professional Aquarium Cleaning Service Brisbane - Duckaroo",
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
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "geo.region": "AU-QLD",
    "geo.placename": "Brisbane",
    "geo.position": "-27.4698;153.0251",
    ICBM: "-27.4698, 153.0251",
  },
  category: "business",
  classification: "Aquarium Services",
  coverage: "Brisbane, Queensland, Australia",
  distribution: "global",
  rating: "general",
  referrer: "origin-when-cross-origin",
  "apple-mobile-web-app-capable": "yes",
  "apple-mobile-web-app-status-bar-style": "default",
  "apple-mobile-web-app-title": "Duckaroo Brisbane",
  "application-name": "Duckaroo Brisbane",
  "msapplication-TileColor": "#0f172a",
  "theme-color": "#0f172a",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  // Local Business Schema
  other: {
    "business:contact_data:street_address": "Brisbane, QLD",
    "business:contact_data:locality": "Brisbane",
    "business:contact_data:region": "Queensland",
    "business:contact_data:postal_code": "4000",
    "business:contact_data:country_name": "Australia",
    "business:contact_data:email": "aquaticswandesign@gmail.com",
    "business:contact_data:phone_number": "+61457663939",
    "business:contact_data:website": "https://duckaroo.com.au",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <head>
        {/* Critical resource hints for performance */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />

        {/* Critical font preload */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        />

        {/* Critical CSS for immediate LCP rendering - Mobile Optimized */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Force immediate text rendering */
              * {
                font-synthesis: none !important;
                text-rendering: optimizeSpeed !important;
              }

              /* Critical hero styles with mobile-first approach */
              .hero-title {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
                font-weight: 700 !important;
                line-height: 1.1 !important;
                color: white !important;
                text-align: center !important;
                font-display: swap !important;
                font-size: clamp(2rem, 8vw, 4rem) !important;
                margin-bottom: 1.5rem !important;
              }

              .hero-subtitle {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
                font-weight: 400 !important;
                line-height: 1.5 !important;
                color: rgba(255, 255, 255, 0.8) !important;
                text-align: center !important;
                font-display: swap !important;
                font-size: clamp(1.125rem, 4vw, 1.5rem) !important;
                max-width: 42rem !important;
                margin: 0 auto 2rem auto !important;
              }

              .hero-gradient-text {
                background: linear-gradient(to right, #34d399, #14b8a6) !important;
                -webkit-background-clip: text !important;
                -webkit-text-fill-color: transparent !important;
                background-clip: text !important;
                display: block !important;
                margin-top: 0.5rem !important;
                padding-bottom: 0.5rem !important;
              }

              /* Mobile-specific optimizations */
              @media (max-width: 768px) {
                .hero-title {
                  font-size: 2.5rem !important;
                  line-height: 1.2 !important;
                }
                .hero-subtitle {
                  font-size: 1.25rem !important;
                  line-height: 1.4 !important;
                  padding: 0 1rem !important;
                }
              }
            `,
          }}
        />
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://duckaroo.com.au/#business",
              name: "Duckaroo Brisbane",
              alternateName: "Aquatic Swan Design",
              description:
                "Brisbane's premier fish tank cleaning, removal and aquarium maintenance service since 2020.",
              url: "https://duckaroo.com.au",
              telephone: "+61457663939",
              email: "aquaticswandesign@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Brisbane",
                addressRegion: "QLD",
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
                },
                {
                  "@type": "State",
                  name: "Queensland",
                },
              ],
              serviceType: [
                "Fish Tank Cleaning",
                "Tank Removal",
                "Aquarium Maintenance",
                "Pond Cleaning",
                "Aquascaping",
                "Plant Care",
              ],
              priceRange: "$$",
              currenciesAccepted: "AUD",
              paymentAccepted: "Cash, Credit Card, Bank Transfer",
              openingHours: "Mo-Su 08:00-18:00",
              image: [
                "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=630&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=1200&h=630&fit=crop&crop=center",
              ],
              sameAs: ["https://duckaroo.com.au"],
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
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Sarah M.",
                  },
                  reviewBody:
                    "Excellent service! They transformed our tank completely. Professional, reliable, and great value.",
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
                      name: "Tank Removal",
                      description:
                        "Safe and professional aquarium tank removal service in Brisbane",
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
        <CartProvider>
          {children}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </CartProvider>
      </body>
    </html>
  );
}
