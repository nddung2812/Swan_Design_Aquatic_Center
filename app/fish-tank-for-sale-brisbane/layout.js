import { tanksData } from "./data/tanks";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://aquaticswandesign.com.au";

export const metadata = {
  title: "Fish Tanks for Sale Brisbane | Second Hand Aquariums | Duckaroo",
  description:
    "Browse fish tanks for sale in Brisbane and Gold Coast. Second-hand aquariums, reef tanks, planted tanks, marine setups and more. Contact sellers directly via Duckaroo.",
  keywords:
    "fish tank for sale Brisbane, aquarium for sale Brisbane, second hand fish tank Brisbane, reef tank for sale Brisbane, used aquarium Brisbane, fish tank Gold Coast, planted tank for sale, marine tank Brisbane, aquarium classifieds Brisbane",
  authors: [{ name: "Duckaroo" }],
  creator: "Duckaroo",
  publisher: "Duckaroo",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: `${baseUrl}/fish-tank-for-sale-brisbane`,
  },
  openGraph: {
    title: "Fish Tanks for Sale Brisbane | Second Hand Aquariums | Duckaroo",
    description:
      "Browse fish tanks for sale in Brisbane and Gold Coast. Reef tanks, planted tanks, marine setups and more. Enquire directly through Duckaroo.",
    url: `${baseUrl}/fish-tank-for-sale-brisbane`,
    siteName: "Duckaroo",
    images: [
      {
        url: "https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1749469954/best-place-to-buy-bucephalandra-kedagang-v0-5fhaw341fkjc1_ujrt6m",
        width: 1200,
        height: 630,
        alt: "Fish Tanks for Sale Brisbane — Duckaroo Aquarium Classifieds",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fish Tanks for Sale Brisbane | Second Hand Aquariums | Duckaroo",
    description:
      "Browse fish tanks for sale in Brisbane and Gold Coast. Reef, planted, marine setups and more.",
    images: [
      {
        url: "https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1749469954/best-place-to-buy-bucephalandra-kedagang-v0-5fhaw341fkjc1_ujrt6m",
        alt: "Fish Tanks for Sale Brisbane — Duckaroo",
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
  other: {
    "geo.region": "AU-QLD",
    "geo.placename": "Brisbane",
    "geo.position": "-27.4698;153.0251",
    ICBM: "-27.4698, 153.0251",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Fish Tanks for Sale Brisbane & Gold Coast",
  description:
    "Second-hand fish tanks and aquarium setups for sale in Brisbane and Gold Coast, Queensland",
  url: `${baseUrl}/fish-tank-for-sale-brisbane`,
  numberOfItems: tanksData.length,
  itemListElement: tanksData.slice(0, 10).map((tank, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${baseUrl}/fish-tank-for-sale-brisbane/${tank.id}`,
    name: tank.title,
    image: tank.thumbnail,
    description: tank.description.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().substring(0, 160),
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where can I buy a second-hand fish tank in Brisbane?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Duckaroo's fish tank classifieds page lists second-hand aquariums for sale across Brisbane North, Brisbane South, Brisbane Inner, and the Gold Coast. Browse current listings and enquire directly with the seller via our online form.",
      },
    },
    {
      "@type": "Question",
      name: "What types of fish tanks are available for sale in Brisbane?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Brisbane aquarium classifieds feature reef tanks, marine fish-only setups, freshwater planted tanks, cichlid tanks, and general community tanks. Listings include full setups with equipment, lighting, filtration, and live rock or substrate.",
      },
    },
    {
      "@type": "Question",
      name: "How do I enquire about a fish tank for sale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Click the 'Enquire' button on any listing to open the enquiry form. Enter your name, phone, and email — the seller will contact you directly to arrange viewing and pick-up. All transactions are between the buyer and seller.",
      },
    },
    {
      "@type": "Question",
      name: "Are fish tanks for sale delivered or is it pick-up only?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most large fish tank setups in Brisbane are pick-up only due to their size and fragility. The listing will specify the location (suburb). We recommend viewing the tank in person before purchasing.",
      },
    },
    {
      "@type": "Question",
      name: "Can Duckaroo help me set up or clean a second-hand fish tank I purchased?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Duckaroo is Brisbane and Gold Coast's professional aquarium maintenance service. We can clean, test water, rescape, and maintain your new second-hand fish tank. Book a service at aquaticswandesign.com.au/service.",
      },
    },
  ],
};

export default function FishTankListingsLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
