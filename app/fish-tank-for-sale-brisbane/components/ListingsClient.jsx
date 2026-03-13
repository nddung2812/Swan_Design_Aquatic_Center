"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import TankSidebar from "./TankSidebar";
import TankGrid from "./TankGrid";
import EnquiryModal from "./EnquiryModal";
import Footer from "@/app/components/Footer";

const ITEMS_PER_BATCH = 9;

function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export default function ListingsClient({ tanks }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedArea, setSelectedArea] = useState("all");
  const [availableOnly, setAvailableOnly] = useState(false);
  const [sortBy, setSortBy] = useState("newest");
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_BATCH);
  const [enquiryTank, setEnquiryTank] = useState(null);
  const [filteredTanks, setFilteredTanks] = useState(tanks);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    let result = tanks;

    if (selectedType !== "all") {
      result = result.filter((t) => t.type === selectedType);
    }
    if (selectedArea !== "all") {
      result = result.filter((t) => t.locationArea === selectedArea);
    }
    if (availableOnly) {
      result = result.filter((t) => t.status === "available");
    }
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.location.toLowerCase().includes(q) ||
          stripHtml(t.description).toLowerCase().includes(q)
      );
    }

    setFilteredTanks(result);
    setDisplayCount(ITEMS_PER_BATCH);
  }, [selectedType, selectedArea, availableOnly, searchTerm, tanks]);

  useEffect(() => {
    setDisplayCount(ITEMS_PER_BATCH);
  }, [sortBy]);

  const sortedTanks = useMemo(() => {
    return [...filteredTanks].sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return (a.price ?? Infinity) - (b.price ?? Infinity);
        case "price-desc":
          return (b.price ?? -1) - (a.price ?? -1);
        case "size-desc":
          return b.volume - a.volume;
        default:
          return new Date(b.datePosted) - new Date(a.datePosted);
      }
    });
  }, [filteredTanks, sortBy]);

  const visibleTanks = sortedTanks.slice(0, displayCount);
  const hasMore = displayCount < sortedTanks.length;

  const handleObserver = useCallback(
    (entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setTimeout(() => setDisplayCount((prev) => prev + ITEMS_PER_BATCH), 400);
      }
    },
    [hasMore]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    });
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [handleObserver]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow bg-gray-50 pt-8">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-300"
            >
              <Link href="/">
                <Home className="w-4 h-4" />
                Home
              </Link>
            </Button>
          </div>

          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Fish Tanks for Sale Brisbane &amp; Gold Coast
            </h1>
            <h2 className="text-xl text-blue-600 font-semibold mb-4">
              Second-Hand Aquariums · Reef Tanks · Planted Setups · Marine Systems
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Browse quality second-hand{" "}
              <strong>fish tanks for sale in Brisbane</strong> and the Gold
              Coast. Reef tanks, planted aquariums, marine setups and freshwater
              systems — complete with equipment. Enquire directly with the
              seller via our online form.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="lg:w-1/4">
              <TankSidebar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                selectedType={selectedType}
                onTypeChange={setSelectedType}
                selectedArea={selectedArea}
                onAreaChange={setSelectedArea}
                availableOnly={availableOnly}
                onAvailableOnlyChange={setAvailableOnly}
              />
            </div>

            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">
                  {filteredTanks.length} listing
                  {filteredTanks.length !== 1 ? "s" : ""}
                </span>
                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-600 whitespace-nowrap">
                    Sort by:
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-sm text-gray-900 border border-gray-300 rounded-md px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    <option value="newest">Newest First</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="size-desc">Largest Tank First</option>
                  </select>
                </div>
              </div>

              <TankGrid tanks={visibleTanks} onEnquire={setEnquiryTank} />

              {hasMore && (
                <div
                  ref={loadMoreRef}
                  className="flex justify-center items-center py-8"
                >
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
                </div>
              )}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Buy a Second-Hand Fish Tank in Brisbane?
            </h2>
            <p className="text-gray-700 mb-4">
              Buying a second-hand aquarium is one of the best ways to get into
              the hobby without the full cost of a new setup. Many Brisbane
              sellers include equipment, live rock, substrate, and even
              livestock — giving you a mature, established system from day one.
            </p>
            <p className="text-gray-700 mb-4">
              Our listings cover Brisbane North (Chermside, Aspley, Stafford),
              Brisbane South (Sunnybank, Calamvale, Eight Mile Plains), Brisbane
              Inner suburbs, and the Gold Coast (Southport, Surfers Paradise,
              Robina, Coomera).
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">
              Need Help Setting Up Your New Tank?
            </h3>
            <p className="text-gray-700 mb-4">
              Duckaroo&apos;s professional aquarium maintenance team can clean,
              test, and set up your second-hand fish tank. We service Brisbane
              and Gold Coast — book a service or get a free quote.
            </p>
            <Link href="/service">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Book Aquarium Service
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />

      <EnquiryModal
        open={!!enquiryTank}
        tank={enquiryTank}
        onClose={() => setEnquiryTank(null)}
      />
    </div>
  );
}
