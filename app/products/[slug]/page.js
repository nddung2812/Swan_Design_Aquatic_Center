import { notFound } from "next/navigation";
import { getProductBySlug, productsData } from "../data/products";
import ProductPageContent from "./ProductPageContent";

// Generate metadata for SEO using product data
export async function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product Not Found | Duckaroo Brisbane",
      description:
        "The requested product could not be found. Browse our collection of premium aquatic plants, equipment and accessories.",
    };
  }

  // Use product description and first image for meta
  const metaDescription =
    product.description.length > 155
      ? `${product.description.substring(0, 155)}...`
      : product.description;

  return {
    title: `${product.name} - Premium ${product.category} | Duckaroo Brisbane`,
    description: metaDescription,
    openGraph: {
      title: `${product.name} - Premium ${product.category}`,
      description: metaDescription,
      images: [
        {
          url: product.images[0],
          width: 1200,
          height: 1200,
          alt: product.name,
        },
      ],
      type: "website",
      siteName: "Duckaroo Brisbane",
      locale: "en_AU",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} - Premium ${product.category}`,
      description: metaDescription,
      images: [product.images[0]],
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

  return <ProductPageContent params={params} />;
}
