"use client";

import { useState, useEffect, use } from "react";
import { notFound, useRouter } from "next/navigation";
import Link from "next/link";
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
} from "lucide-react";
import { getProductBySlug, productsData } from "../data/products";
import Cart from "../components/Cart";

// JSON-LD structured data component
function ProductStructuredData({ product }) {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.images,
    description: product.description,
    sku: product.id.toString(),
    brand: {
      "@type": "Brand",
      name: "Aquatic Swan Design",
    },
    offers: {
      "@type": "Offer",
      url: `https://yourdomain.com/products/${product.slug}`,
      priceCurrency: "USD",
      price: product.price.toString(),
      availability:
        product.stock > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: "Aquatic Swan Design",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
    category: product.category,
    additionalProperty: Object.entries(product.specifications).map(
      ([key, value]) => ({
        "@type": "PropertyValue",
        name: key,
        value: value,
      })
    ),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Breadcrumb component
function Breadcrumb({ product }) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <Link href="/" className="hover:text-blue-600">
        Home
      </Link>
      <ChevronRight className="w-4 h-4" />
      <Link href="/products" className="hover:text-blue-600">
        Products
      </Link>
      <ChevronRight className="w-4 h-4" />
      <Link
        href={`/products?category=${product.category}`}
        className="hover:text-blue-600 capitalize"
      >
        {product.category}
      </Link>
      <ChevronRight className="w-4 h-4" />
      <span className="text-gray-900 font-medium">{product.name}</span>
    </nav>
  );
}

export default function ProductPage({ params }) {
  // Unwrap the params Promise using React.use()
  const resolvedParams = use(params);
  const product = getProductBySlug(resolvedParams.slug);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [cartLoaded, setCartLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  // Get related products from the same category (excluding current product)
  const getRelatedProducts = (currentProduct) => {
    return productsData
      .filter(
        (p) =>
          p.category === currentProduct.category && p.id !== currentProduct.id
      )
      .slice(0, 3);
  };

  const relatedProducts = product ? getRelatedProducts(product) : [];

  // Load cart from localStorage on component mount
  useEffect(() => {
    setIsClient(true);
    const savedCart = localStorage.getItem("shopping-cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    setCartLoaded(true);
  }, []);

  // Save cart to localStorage whenever cartItems change (only after initial load)
  useEffect(() => {
    if (cartLoaded) {
      localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
    }
  }, [cartItems, cartLoaded]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const getCategoryBadgeColor = (category) => {
    switch (category) {
      case "plants":
        return "bg-green-100 text-green-800";
      case "probiotics":
        return "bg-blue-100 text-blue-800";
      case "accessories":
        return "bg-purple-100 text-purple-800";
      case "equipment":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const addToCart = () => {
    if (typeof window === "undefined") return; // Server-side rendering guard

    // Get existing cart from localStorage
    const existingCart = JSON.parse(
      localStorage.getItem("shopping-cart") || "[]"
    );

    // Check if product already exists in cart
    const existingItem = existingCart.find((item) => item.id === product.id);
    const currentCartQuantity = existingItem ? existingItem.quantity : 0;
    const totalQuantityAfterAdd = currentCartQuantity + quantity;

    // Validate if total quantity exceeds stock
    if (totalQuantityAfterAdd > product.stock) {
      const availableToAdd = product.stock - currentCartQuantity;
      if (availableToAdd <= 0) {
        alert(
          `This item is already at maximum stock in your cart (${product.stock} available)`
        );
        return;
      } else {
        alert(
          `Only ${availableToAdd} more can be added to cart. Maximum stock: ${product.stock}`
        );
        return;
      }
    }

    let updatedCart;
    if (existingItem) {
      // Update quantity of existing item
      updatedCart = existingCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      // Add new item to cart
      updatedCart = [...existingCart, { ...product, quantity }];
    }

    // Save updated cart to localStorage
    localStorage.setItem("shopping-cart", JSON.stringify(updatedCart));

    // Update cart state
    setCartItems(updatedCart);

    // Show success message
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };

  // Get current cart quantity for this product
  const getCurrentCartQuantity = () => {
    if (typeof window === "undefined") return 0; // Server-side rendering
    const existingCart = JSON.parse(
      localStorage.getItem("shopping-cart") || "[]"
    );
    const existingItem = existingCart.find((item) => item.id === product.id);
    return existingItem ? existingItem.quantity : 0;
  };

  const currentCartQuantity = isClient ? getCurrentCartQuantity() : 0;
  const maxSelectableQuantity = product.stock - currentCartQuantity;

  // Cart management functions
  const addToCartState = (productToAdd) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === productToAdd.id
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Ensure quantity doesn't exceed available stock
  useEffect(() => {
    if (quantity > maxSelectableQuantity && maxSelectableQuantity > 0) {
      setQuantity(maxSelectableQuantity);
    } else if (maxSelectableQuantity <= 0) {
      setQuantity(1); // Reset to 1 but disable add to cart
    }
  }, [maxSelectableQuantity, quantity]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Product link copied to clipboard!");
    }
  };

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductStructuredData product={product} />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="mb-6 flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Button>

          {/* Breadcrumb */}
          <Breadcrumb product={product} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-lg bg-white shadow-lg">
                <img
                  src={product.images[selectedImageIndex]}
                  alt={`${product.name} - Image ${selectedImageIndex + 1}`}
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop&crop=center`;
                  }}
                />
                <Badge
                  className={`absolute top-4 left-4 ${getCategoryBadgeColor(
                    product.category
                  )}`}
                >
                  {product.category}
                </Badge>
                {product.stock < 10 && (
                  <Badge className="absolute top-4 right-4 bg-red-100 text-red-800">
                    Low Stock
                  </Badge>
                )}
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative overflow-hidden rounded-md border-2 transition-all duration-200 ${
                      selectedImageIndex === index
                        ? "border-blue-500 ring-2 ring-blue-200"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - Thumbnail ${index + 1}`}
                      className="w-full h-20 object-cover"
                      onError={(e) => {
                        e.target.src = `https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=200&h=150&fit=crop&crop=center`;
                      }}
                    />
                    {selectedImageIndex === index && (
                      <div className="absolute inset-0 bg-blue-500 bg-opacity-20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                    <span className="ml-2 text-gray-600">
                      (4.8) · 127 reviews
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" onClick={handleShare}>
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="text-4xl font-bold text-blue-600">
                {formatPrice(product.price)}
              </div>

              {/* Stock Status */}
              <div className="flex items-center space-x-2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    product.stock > 0 ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                <span
                  className={`font-medium ${
                    product.stock > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.stock > 0
                    ? `${product.stock} in stock`
                    : "Out of stock"}
                </span>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">
                  Product Description
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">
                  Key Features
                </h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="font-medium">Quantity:</label>
                  <div className="flex items-center border border-gray-300 rounded-md bg-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-gray-700 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg"
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300 bg-white text-gray-900 font-semibold">
                      {quantity}
                    </span>
                    <button
                      onClick={() =>
                        setQuantity(
                          Math.min(maxSelectableQuantity, quantity + 1)
                        )
                      }
                      className="px-3 py-2 text-gray-700 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg"
                      disabled={
                        quantity >= maxSelectableQuantity ||
                        maxSelectableQuantity <= 0
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Stock Information */}
                <div className="text-sm text-gray-500">
                  <div className="flex justify-between items-center">
                    <div className="text-blue-600">
                      In Cart: {isClient ? currentCartQuantity : 0}
                    </div>
                    <div className="text-right">
                      <span
                        className={
                          product.stock - currentCartQuantity > 0
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        Available: {product.stock - currentCartQuantity}
                      </span>
                      {isClient && maxSelectableQuantity <= 0 && (
                        <span className="text-red-600 ml-1 block">
                          (Max reached)
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <Button
                  onClick={addToCart}
                  disabled={product.stock === 0 || maxSelectableQuantity <= 0}
                  className="w-full py-4 text-lg"
                  size="lg"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {product.stock === 0
                    ? "Out of Stock"
                    : maxSelectableQuantity <= 0
                    ? "Maximum Stock in Cart"
                    : `Add ${quantity} to Cart - ${formatPrice(
                        product.price * quantity
                      )}`}
                </Button>
              </div>
            </div>
          </div>

          {/* Product Specifications */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="text-2xl">Product Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-l-4 border-blue-500 pl-4">
                    <dt className="font-semibold text-gray-900 text-lg">
                      {key}
                    </dt>
                    <dd className="text-gray-600 mt-1">{value}</dd>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Related Products Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              You May Also Like
              <span className="text-sm font-normal text-gray-500 ml-2 bg-gray-100 px-2 py-1 rounded-full">
                {product.category} category
              </span>
            </h2>
            {relatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Card
                    key={relatedProduct.id}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Link href={`/products/${relatedProduct.slug}`}>
                        <img
                          src={relatedProduct.images[0]}
                          alt={relatedProduct.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                          onError={(e) => {
                            e.target.src = `https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop&crop=center`;
                          }}
                        />
                      </Link>
                      <Badge
                        className={`absolute top-2 right-2 ${getCategoryBadgeColor(
                          relatedProduct.category
                        )}`}
                      >
                        {relatedProduct.category}
                      </Badge>
                    </div>

                    <CardContent className="p-4">
                      <Link href={`/products/${relatedProduct.slug}`}>
                        <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
                          {relatedProduct.name}
                        </h3>
                      </Link>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {relatedProduct.description}
                      </p>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xl font-bold text-blue-600">
                          {formatPrice(relatedProduct.price)}
                        </span>
                        <div className="flex items-center text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 mb-3">
                        Stock: {relatedProduct.stock} available
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full bg-white text-gray-900 border-gray-300 hover:bg-gray-50 hover:text-gray-900"
                      >
                        <Link href={`/products/${relatedProduct.slug}`}>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>No related products available in this category</p>
                <Link
                  href="/products"
                  className="text-blue-600 hover:underline"
                >
                  Browse all products →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fixed Floating Cart Widget */}
      {product && (
        <Cart
          items={cartItems}
          onRemove={removeFromCart}
          onUpdateQuantity={updateCartQuantity}
          totalItems={getTotalItems()}
          totalPrice={getTotalPrice()}
        />
      )}
    </>
  );
}
