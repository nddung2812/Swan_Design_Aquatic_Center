"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Check,
  ChevronRight,
  MapPin,
  Ruler,
  Droplets,
  Tag,
  MessageCircle,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import { tanksData } from "../data/tanks";
import EnquiryModal from "../components/EnquiryModal";
import Footer from "@/app/components/Footer";

const baseUrl =
  typeof window !== "undefined"
    ? window.location.origin
    : "https://aquaticswandesign.com.au";

const schemaBaseUrl = "https://aquaticswandesign.com.au";

const conditionSchemaMap = {
  new: "https://schema.org/NewCondition",
  excellent: "https://schema.org/UsedCondition",
  good: "https://schema.org/UsedCondition",
  fair: "https://schema.org/UsedCondition",
};

const typeBadgeColors = {
  Reef: "bg-blue-100 text-blue-800",
  Marine: "bg-cyan-100 text-cyan-800",
  Freshwater: "bg-green-100 text-green-800",
  Planted: "bg-emerald-100 text-emerald-800",
  Cichlid: "bg-orange-100 text-orange-800",
};

const statusColors = {
  available: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  sold: "bg-red-100 text-red-800",
};

function formatPrice(price, negotiable) {
  if (price === null) return "POA (Price on Application)";
  const formatted = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(price);
  return negotiable ? `${formatted} ONO` : formatted;
}

function TankStructuredData({ tank }) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${schemaBaseUrl}/fish-tank-for-sale-brisbane/${tank.slug}#product`,
    name: tank.title,
    description: tank.description.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
    image: tank.images,
    sku: `tank-${tank.id}`,
    brand: {
      "@type": "Brand",
      name: "Duckaroo Fish Tank Classifieds",
    },
    offers: tank.price !== null
      ? {
          "@type": "Offer",
          "@id": `${schemaBaseUrl}/fish-tank-for-sale-brisbane/${tank.slug}#offer`,
          url: `${schemaBaseUrl}/fish-tank-for-sale-brisbane/${tank.slug}`,
          priceCurrency: "AUD",
          price: String(tank.price),
          availability:
            tank.status === "available"
              ? "https://schema.org/InStock"
              : "https://schema.org/SoldOut",
          itemCondition: conditionSchemaMap[tank.condition] || "https://schema.org/UsedCondition",
          seller: {
            "@type": "Organization",
            name: "Duckaroo",
            url: schemaBaseUrl,
          },
        }
      : {
          "@type": "Offer",
          "@id": `${schemaBaseUrl}/fish-tank-for-sale-brisbane/${tank.slug}#offer`,
          url: `${schemaBaseUrl}/fish-tank-for-sale-brisbane/${tank.slug}`,
          priceCurrency: "AUD",
          availability:
            tank.status === "available"
              ? "https://schema.org/InStock"
              : "https://schema.org/SoldOut",
          itemCondition: conditionSchemaMap[tank.condition] || "https://schema.org/UsedCondition",
          seller: {
            "@type": "Organization",
            name: "Duckaroo",
            url: schemaBaseUrl,
          },
        },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Tank Size", value: tank.tankSize },
      { "@type": "PropertyValue", name: "Volume", value: `${tank.volume} litres` },
      { "@type": "PropertyValue", name: "Type", value: tank.type },
      { "@type": "PropertyValue", name: "Condition", value: tank.condition },
      { "@type": "PropertyValue", name: "Location", value: tank.location },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: schemaBaseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Fish Tanks for Sale Brisbane",
        item: `${schemaBaseUrl}/fish-tank-for-sale-brisbane`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tank.title,
        item: `${schemaBaseUrl}/fish-tank-for-sale-brisbane/${tank.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export default function TankDetailContent({ tank }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [mainLoaded, setMainLoaded] = useState(false);
  const [thumbsLoaded, setThumbsLoaded] = useState({});
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  function selectImage(i) {
    setSelectedImageIndex(i);
    setMainLoaded(false);
  }

  // Other listings of the same type, excluding this one
  const otherListings = tanksData
    .filter((t) => t.type === tank.type && t.id !== tank.id)
    .slice(0, 3);

  return (
    <>
      <TankStructuredData tank={tank} />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Back + Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link
              href="/fish-tank-for-sale-brisbane"
              className="flex items-center gap-1 hover:text-blue-600"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Listings
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/fish-tank-for-sale-brisbane" className="hover:text-blue-600">
              Fish Tanks for Sale Brisbane
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium line-clamp-1">{tank.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg bg-gray-200 shadow-lg h-[480px]">
                {!mainLoaded && (
                  <div className="absolute inset-0 animate-pulse bg-gray-200" />
                )}
                <img
                  src={tank.images[selectedImageIndex]}
                  alt={`${tank.title} — image ${selectedImageIndex + 1}`}
                  className={`w-full h-[480px] object-cover transition-opacity duration-300 ${
                    mainLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setMainLoaded(true)}
                />
                {tank.status !== "available" && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold tracking-widest uppercase">
                      {tank.status === "sold" ? "Sold" : "Pending"}
                    </span>
                  </div>
                )}
                <Badge
                  className={`absolute top-4 left-4 ${
                    typeBadgeColors[tank.type] || "bg-gray-100 text-gray-800"
                  }`}
                >
                  {tank.type}
                </Badge>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {tank.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => selectImage(i)}
                    className={`relative overflow-hidden rounded-md border-2 transition-all duration-200 bg-gray-200 h-20 ${
                      selectedImageIndex === i
                        ? "border-blue-500 ring-2 ring-blue-200"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {!thumbsLoaded[i] && (
                      <div className="absolute inset-0 animate-pulse bg-gray-200" />
                    )}
                    <img
                      src={img}
                      alt={`${tank.title} — thumbnail ${i + 1}`}
                      className={`w-full h-20 object-cover transition-opacity duration-300 ${
                        thumbsLoaded[i] ? "opacity-100" : "opacity-0"
                      }`}
                      loading="lazy"
                      onLoad={() => setThumbsLoaded((prev) => ({ ...prev, [i]: true }))}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-3">{tank.title}</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className={typeBadgeColors[tank.type] || "bg-gray-100 text-gray-800"}>
                    {tank.type}
                  </Badge>
                  <Badge className={statusColors[tank.status] || "bg-gray-100 text-gray-800"}>
                    {tank.status.charAt(0).toUpperCase() + tank.status.slice(1)}
                  </Badge>
                  <Badge className="bg-gray-100 text-gray-700">
                    {tank.condition.charAt(0).toUpperCase() + tank.condition.slice(1)} Condition
                  </Badge>
                </div>
              </div>

              {/* Price */}
              <div className="text-4xl font-bold text-blue-600">
                {formatPrice(tank.price, tank.negotiable)}
              </div>

              {/* Specs grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-medium">Location</p>
                    <p className="text-gray-900 font-medium">{tank.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Ruler className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-medium">Tank Size</p>
                    <p className="text-gray-900 font-medium">{tank.tankSize}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Droplets className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-medium">Volume</p>
                    <p className="text-gray-900 font-medium">{tank.volume} litres</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Tag className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-medium">Date Posted</p>
                    <p className="text-gray-900 font-medium">
                      {new Date(tank.datePosted).toLocaleDateString("en-AU", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Description</h2>
                <div
                  className="text-gray-700 leading-relaxed prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: tank.description }}
                />
              </div>

              {/* Features */}
              {tank.features?.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">What&apos;s Included</h2>
                  <ul className="space-y-2">
                    {tank.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <Button
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg"
                onClick={() => setEnquiryOpen(true)}
                disabled={tank.status !== "available"}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {tank.status === "available"
                  ? "Enquire About This Tank"
                  : tank.status === "sold"
                  ? "This Tank Has Been Sold"
                  : "Sale Pending"}
              </Button>

              {tank.status === "available" && (
                <p className="text-center text-sm text-gray-500">
                  Free to enquire — contact the seller directly through Duckaroo
                </p>
              )}
            </div>
          </div>

          {/* Other listings */}
          {otherListings.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Other {tank.type} Tanks for Sale
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherListings.map((other) => (
                  <Card
                    key={other.id}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Link href={`/fish-tank-for-sale-brisbane/${other.slug}`}>
                        <img
                          src={other.thumbnail}
                          alt={other.title}
                          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </Link>
                      {other.status !== "available" && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-lg">
                          <span className="text-white font-bold uppercase">
                            {other.status === "sold" ? "Sold" : "Pending"}
                          </span>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <Link href={`/fish-tank-for-sale-brisbane/${other.slug}`}>
                        <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                          {other.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {other.location}
                      </p>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xl font-bold text-blue-600">
                          {formatPrice(other.price, other.negotiable)}
                        </span>
                      </div>
                      <Button asChild size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <Link href={`/fish-tank-for-sale-brisbane/${other.slug}`}>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Details
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Back to listings */}
          <div className="mt-8 text-center">
            <Link href="/fish-tank-for-sale-brisbane">
              <Button variant="outline" size="lg">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Browse All Fish Tanks for Sale Brisbane
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />

      <EnquiryModal
        open={enquiryOpen}
        tank={tank}
        onClose={() => setEnquiryOpen(false)}
      />
    </>
  );
}
