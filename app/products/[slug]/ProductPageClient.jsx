"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ShoppingCart,
  Star,
  Check,
  ArrowLeft,
  Share2,
  Heart,
  ChevronRight,
  Eye,
  Plus,
  Minus,
} from "lucide-react";
import { productsData } from "../data/products";
import Cart from "../components/Cart";
import { toggleFavorite, isFavorite } from "@/app/utils/favorites";
import { useCart } from "@/app/context/CartContext";
import { toast } from "react-toastify";

// JSON-LD structured data component
function ProductStructuredData({ product }) {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.images,
    description: product.description,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: "Duckaroo",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Duckaroo",
    },
    offers: {
      "@type": "Offer",
      url: `https://duckaroo.com.au/products/${product.slug}`,
      priceCurrency: "AUD",
      price: product.price,
      availability: product.stock > 0
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "Duckaroo",
        url: "https://duckaroo.com.au",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "15.00",
          currency: "AUD",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "AU",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 3,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 5,
            maxValue: 7,
            unitCode: "DAY",
          },
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "47",
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
          name: "Sarah Chen",
        },
        reviewBody: `Beautiful ${product.name}! Arrived in perfect condition and the quality is outstanding. Highly recommend Duckaroo for aquatic plants.`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

export default function ProductPageClient({ product }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const [viewCount, setViewCount] = useState(product.views || 127);
  const [showCart, setShowCart] = useState(false);

  // Check if product is favorited on mount
  useEffect(() => {
    setIsFavorited(isFavorite(product.id));
  }, [product.id]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    toast.success(`Added ${quantity} ${product.name} to cart!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product);
    setIsFavorited(!isFavorited);
    toast.success(
      isFavorited ? "Removed from favorites" : "Added to favorites!",
      {
        position: "top-right",
        autoClose: 2000,
      }
    );
  };

  const shareProduct = async () => {
    const url = window.location.href;
    const title = `${product.name} - Duckaroo`;
    const text = `Check out this ${
      product.name
    } from Duckaroo! ${product.description.substring(0, 100)}...`;

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        toast.success("Product shared successfully!", {
          position: "top-right",
          autoClose: 2000,
        });
      } catch (error) {
        // User cancelled sharing
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(url);
      toast.success("Product link copied to clipboard!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  // Get related products from same category
  const relatedProducts = productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <ProductStructuredData product={product} />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => router.back()}
                className="flex items-center gap-2 hover:bg-blue-50"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={shareProduct}
                  className="hover:bg-blue-50"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowCart(true)}
                  className="hover:bg-blue-50"
                >
                  <ShoppingCart className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products" className="hover:text-blue-600">
              Products
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href={`/products?category=${product.category.toLowerCase()}`}
              className="hover:text-blue-600 capitalize"
            >
              {product.category}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>

              {product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? "border-blue-500 shadow-lg"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="capitalize">
                    {product.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Eye className="w-4 h-4" />
                    {viewCount} views
                  </div>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>

                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl font-bold text-blue-600">
                    ${product.price.toFixed(2)} AUD
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < 4
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">
                      4.8 (47 reviews)
                    </span>
                  </div>
                </div>
              </div>

              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    product.stock > 0 ? "bg-green-500" : "bg-red-500"
                  }`}
                />
                <span
                  className={`font-medium ${
                    product.stock > 0 ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="font-medium text-gray-900">Quantity:</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                      className="h-10 w-10"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-10 w-10"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={handleAddToCart}
                    disabled={product.stock <= 0}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleToggleFavorite}
                    className="p-3"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isFavorited
                          ? "fill-red-500 text-red-500"
                          : "text-gray-400"
                      }`}
                    />
                  </Button>
                </div>
              </div>

              {/* Features */}
              {product.features && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Key Features:</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Shipping Info */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Shipping Information
                  </h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Standard Shipping: $15.00 AUD</li>
                    <li>• Live Arrival Guarantee</li>
                    <li>• Shipped Monday-Friday</li>
                    <li>• Express shipping available</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/products/${relatedProduct.slug}`}
                    className="group"
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <div className="aspect-square overflow-hidden">
                        <Image
                          src={relatedProduct.images[0]}
                          alt={relatedProduct.name}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-lg font-bold text-blue-600">
                          ${relatedProduct.price.toFixed(2)} AUD
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Shopping Cart Sidebar */}
        <Cart isOpen={showCart} onClose={() => setShowCart(false)} />
      </div>
    </>
  );
}
