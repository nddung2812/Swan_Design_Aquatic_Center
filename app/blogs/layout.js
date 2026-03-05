export const metadata = {
  title:
    "Aquarium Care Blog | Expert Fish Tank Tips & Guides | Duckaroo Brisbane",
  description:
    "Expert aquarium care guides, fish tank maintenance tips, plant care advice, and aquascaping inspiration from Duckaroo — Brisbane and Gold Coast's professional aquarium service.",
  keywords:
    "aquarium care blog, fish tank maintenance tips, aquascaping guides, aquarium plant care, Brisbane aquarium experts, fish health guides",
  metadataBase: new URL("https://aquaticswandesign.com.au"),
  alternates: {
    canonical: "https://aquaticswandesign.com.au/blogs",
  },
  openGraph: {
    title: "Aquarium Care Blog | Expert Fish Tank Tips & Guides | Duckaroo",
    description:
      "Expert aquarium care guides, fish health tips, plant care, and aquascaping advice from Brisbane's professional aquarium service specialists.",
    url: "https://aquaticswandesign.com.au/blogs",
    images: [
      {
        url: "https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1756014363/meta_f0bqpw.jpg",
        width: 1200,
        height: 630,
        alt: "Duckaroo Aquarium Care Blog - Expert Tips and Guides",
      },
    ],
    type: "website",
    siteName: "Duckaroo",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aquarium Care Blog | Expert Fish Tank Tips & Guides | Duckaroo",
    description:
      "Expert aquarium care guides, fish health tips, and aquascaping advice from Brisbane's professional aquarium service.",
    images: [
      {
        url: "https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1756014363/meta_f0bqpw.jpg",
        alt: "Duckaroo Aquarium Care Blog - Expert Tips and Guides",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogsLayout({ children }) {
  return children;
}
