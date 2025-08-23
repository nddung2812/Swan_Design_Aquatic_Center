import { notFound } from "next/navigation";
import { getProductBySlug, productsData } from "../data/products";
import ProductPageClient from "./ProductPageClient";

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product Not Found | Duckaroo Brisbane",
      description:
        "The requested product could not be found. Browse our collection of premium aquatic plants, equipment and accessories.",
    };
  }

  return {
    title: `${product.name} - Premium ${product.category} | Duckaroo Brisbane`,
    description: `${product.description.substring(
      0,
      155
    )}... Buy premium ${product.category.toLowerCase()} online. $${product.price.toFixed(
      2
    )} AUD. Australia-wide shipping with live arrival guarantee.`,
    keywords: `${product.name}, ${
      product.category
    }, aquatic plants, aquarium plants Brisbane, ${product.category.toLowerCase()} for sale, buy ${product.category.toLowerCase()} online Australia`,
    openGraph: {
      title: `${product.name} - Premium ${product.category}`,
      description: `${product.description.substring(
        0,
        155
      )}... Premium quality ${product.category.toLowerCase()} available now.`,
      images: [
        {
          url: product.images[0],
          width: 1200,
          height: 1200,
          alt: product.name,
        },
        ...product.images.slice(1, 3).map((img) => ({
          url: img,
          width: 1200,
          height: 1200,
          alt: `${product.name} - additional view`,
        })),
      ],
      type: "product",
      siteName: "Duckaroo Brisbane",
      locale: "en_AU",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} - Premium ${product.category}`,
      description: `${product.description.substring(0, 140)}...`,
      images: [product.images[0]],
    },
    alternates: {
      canonical: `https://duckaroo.com.au/products/${product.slug}`,
    },
    other: {
      "product:price:amount": product.price,
      "product:price:currency": "AUD",
      "product:availability": product.stock > 0 ? "in stock" : "out of stock",
      "product:condition": "new",
      "product:retailer": "Duckaroo Brisbane",
      "product:category": product.category,
    },
  };
}

// Generate static params for all products
export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductPageClient product={product} />;
}
