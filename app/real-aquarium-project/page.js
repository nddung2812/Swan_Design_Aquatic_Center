import AquariumProjectsClient from "./AquariumProjectsClient";

export const metadata = {
  title:
    "Real Aquarium Projects Brisbane | Fish Tank Cleaning Service Results | Duckaroo",
  description:
    "See stunning before & after results from Brisbane's #1 fish tank cleaning service. Real customer aquarium transformations, professional tank maintenance, and aquascaping projects by Duckaroo experts.",
  keywords:
    "aquarium projects Brisbane, fish tank cleaning results, before after aquarium cleaning, professional fish tank service, aquarium transformation Brisbane, tank maintenance results, fish tank cleaning service examples",
  openGraph: {
    title:
      "Real Aquarium Projects Brisbane | Professional Fish Tank Service Results",
    description:
      "Browse our gallery of stunning aquarium transformations. See why Brisbane customers choose Duckaroo for professional fish tank cleaning and maintenance services.",
    url: "https://aquaticswandesign.com.au/real-aquarium-project",
    siteName: "Duckaroo Brisbane Fish Tank Cleaning Service",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "Professional Aquarium Projects Brisbane - Fish Tank Cleaning Service Results",
      },
    ],
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Aquarium Projects Brisbane | Professional Fish Tank Service",
    description:
      "See stunning aquarium transformations by Brisbane's premier fish tank cleaning service. Professional results that speak for themselves.",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=630&fit=crop&crop=center",
    ],
    creator: "@AquaticSwanDesign",
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
    canonical: "https://aquaticswandesign.com.au/real-aquarium-project",
  },
  other: {
    "geo.region": "AU-QLD",
    "geo.placename": "Brisbane",
    "geo.position": "-27.4698;153.0251",
    ICBM: "-27.4698, 153.0251",
  },
};

export default function RealAquariumProjectPage() {
  return <AquariumProjectsClient />;
}
