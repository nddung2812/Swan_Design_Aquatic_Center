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
    images: ["/images/blog-hero.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aquarium & Fish Care Blog | Expert Tips & Guides",
    description:
      "Expert aquarium care guides, fish health tips, plant care advice, and aquascaping tutorials from Brisbane's aquatic specialists.",
  },
};

export default function BlogsLayout({ children }) {
  return children;
}
