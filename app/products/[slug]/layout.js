import { getProductBySlug } from "../data/products";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  // Unwrap the params Promise
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com";
  const productUrl = `${baseUrl}/products/${product.slug}`;

  return {
    title: `${product.name} - Premium Aquatic Products | Aquatic Swan Design`,
    description: `${product.description} Shop ${product.name} for $${
      product.price
    }. ${product.features.join(", ")}. Free shipping on orders over $50.`,
    keywords: [
      product.name.toLowerCase(),
      product.category,
      "aquarium",
      "aquatic",
      "aquascaping",
      "aquarium supplies",
      ...product.features.map((f) => f.toLowerCase()),
    ].join(", "),

    // Open Graph tags for social media
    openGraph: {
      title: `${product.name} - $${product.price}`,
      description: product.description,
      url: productUrl,
      siteName: "Aquatic Swan Design",
      images: [
        {
          url: product.images[0],
          width: 600,
          height: 400,
          alt: product.name,
        },
        ...product.images.slice(1, 4).map((image, index) => ({
          url: image,
          width: 600,
          height: 400,
          alt: `${product.name} - Image ${index + 2}`,
        })),
      ],
      type: "website",
      locale: "en_US",
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: `${product.name} - $${product.price}`,
      description: product.description,
      images: [product.images[0]],
      creator: "@AquaticSwanDesign",
    },

    // Additional meta tags
    other: {
      "product:price:amount": product.price.toString(),
      "product:price:currency": "USD",
      "product:availability": product.stock > 0 ? "in stock" : "out of stock",
      "product:condition": "new",
      "product:brand": "Aquatic Swan Design",
      "product:category": product.category,
    },

    // Canonical URL
    alternates: {
      canonical: productUrl,
    },

    // Robots
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
  };
}

// Generate static params for all products (for build optimization)
export async function generateStaticParams() {
  // In a real app, you might want to fetch this from an API
  const { getAllProductSlugs } = await import("../data/products");
  const slugs = getAllProductSlugs();

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function ProductLayout({ children }) {
  return children;
}
