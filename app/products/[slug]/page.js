import { notFound } from "next/navigation";
import { getProductBySlug, productsData } from "../data/products";
import ProductPageClient from "./ProductPageClient";

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  try {
    const product = getProductBySlug(params.slug);

    if (!product) {
      return {
        title: "Product Not Found | Duckaroo Brisbane",
        description:
          "The requested product could not be found. Browse our collection of premium aquatic plants, equipment and accessories.",
      };
    }

    // Ensure all required properties exist
    const safeName = product.name || "Unknown Product";
    const safeCategory = product.category || "Product";
    const safeDescription = product.description || "Premium aquatic product";
    const safePrice = product.price || 0;
    const safeStock = product.stock || 0;
    const safeImages =
      product.images && Array.isArray(product.images) ? product.images : [];

    return {
      title: `${safeName} - Premium ${safeCategory} | Duckaroo Brisbane`,
      description: `${safeDescription.substring(
        0,
        155
      )}... Buy premium ${safeCategory.toLowerCase()} online. $${safePrice.toFixed(
        2
      )} AUD. Australia-wide shipping with live arrival guarantee.`,
      keywords: `${safeName}, ${safeCategory}, aquatic plants, aquarium plants Brisbane, ${safeCategory.toLowerCase()} for sale, buy ${safeCategory.toLowerCase()} online Australia`,
      openGraph: {
        title: `${safeName} - Premium ${safeCategory}`,
        description: `${safeDescription.substring(
          0,
          155
        )}... Premium quality ${safeCategory.toLowerCase()} available now.`,
        images:
          safeImages.length > 0
            ? [
                {
                  url: safeImages[0],
                  width: 1200,
                  height: 1200,
                  alt: safeName,
                },
                ...safeImages.slice(1, 3).map((img) => ({
                  url: img,
                  width: 1200,
                  height: 1200,
                  alt: `${safeName} - additional view`,
                })),
              ]
            : [],
        type: "website",
        siteName: "Duckaroo Brisbane",
        locale: "en_AU",
      },
      twitter: {
        card: "summary_large_image",
        title: `${safeName} - Premium ${safeCategory}`,
        description: `${safeDescription.substring(0, 140)}...`,
        images: safeImages.length > 0 ? [safeImages[0]] : [],
      },
      alternates: {
        canonical: `https://duckaroo.com.au/products/${product.slug}`,
      },
      other: {
        "product:price:amount": safePrice,
        "product:price:currency": "AUD",
        "product:availability": safeStock > 0 ? "in stock" : "out of stock",
        "product:condition": "new",
        "product:retailer": "Duckaroo Brisbane",
        "product:category": safeCategory,
      },
    };
  } catch (error) {
    console.error("Error in generateMetadata:", error);
    return {
      title: "Product Error | Duckaroo Brisbane",
      description: "There was an error loading this product. Please try again.",
    };
  }
}

// Generate static params for all products
export async function generateStaticParams() {
  try {
    return productsData.map((product) => ({
      slug: product.slug,
    }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
}

export default function ProductPage({ params }) {
  try {
    const product = getProductBySlug(params.slug);

    if (!product) {
      notFound();
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="text-2xl font-bold text-blue-600">
            ${product.price.toFixed(2)} AUD
          </div>
          <div className="mt-4">
            Stock: {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in ProductPage:", error);
    notFound();
  }
}
