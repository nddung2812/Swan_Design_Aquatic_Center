export const metadata = {
  title: "Aquarium & Fish Care Blog | Expert Tips & Guides | Duckaroo Brisbane",
  description:
    "Expert aquarium care guides, fish health tips, plant care advice, and aquascaping tutorials. Professional insights from Brisbane's #1 aquatic specialists.",
  keywords:
    "aquarium blog, fish care tips, plant care guide, aquascaping tutorials, Brisbane aquarium advice, fish health, aquarium maintenance",
  openGraph: {
    title: "Aquarium & Fish Care Blog | Expert Tips & Guides",
    description:
      "Expert aquarium care guides, fish health tips, plant care advice, and aquascaping tutorials from Brisbane's aquatic specialists.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "Aquarium Care Blog - Expert Tips and Guides",
      },
      {
        url: "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "Aquatic Plant Care and Aquascaping Guides",
      },
    ],
    type: "website",
    siteName: "Duckaroo Brisbane",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aquarium & Fish Care Blog | Expert Tips & Guides",
    description:
      "Expert aquarium care guides, fish health tips, plant care advice, and aquascaping tutorials from Brisbane's aquatic specialists.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=1200&h=630&fit=crop&crop=center",
        alt: "Aquarium Care Blog - Expert Tips and Guides",
      },
    ],
  },
};

export default function BlogsLayout({ children }) {
  return children;
}
