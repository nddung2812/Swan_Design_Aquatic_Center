"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { MapPin, Ruler, MessageCircle, ExternalLink } from "lucide-react";

const typeBadgeColors = {
  Reef: "bg-blue-100 text-blue-800",
  Marine: "bg-cyan-100 text-cyan-800",
  Freshwater: "bg-green-100 text-green-800",
  Planted: "bg-emerald-100 text-emerald-800",
  Cichlid: "bg-orange-100 text-orange-800",
};

const conditionColors = {
  new: "bg-purple-100 text-purple-800",
  excellent: "bg-green-100 text-green-800",
  good: "bg-yellow-100 text-yellow-800",
  fair: "bg-red-100 text-red-800",
};

function formatPrice(price, negotiable) {
  if (price === null) return "POA";
  const formatted = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(price);
  return negotiable ? `${formatted} ONO` : formatted;
}

function TankCard({ tank, onEnquire }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg bg-gray-200 h-52">
          {!loaded && (
            <div className="absolute inset-0 animate-pulse bg-gray-200" />
          )}
          <Link href={`/fish-tank-for-sale-brisbane/${tank.slug}`}>
            <img
              src={tank.thumbnail}
              alt={tank.title}
              className={`w-full h-52 object-cover md:group-hover:scale-105 md:transition-transform md:duration-300 cursor-pointer transition-opacity duration-300 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              onLoad={() => setLoaded(true)}
            />
          </Link>

          {tank.status !== "available" && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-lg">
              <span className="text-white text-2xl font-bold tracking-widest uppercase">
                {tank.status === "sold" ? "Sold" : "Pending"}
              </span>
            </div>
          )}

          <Badge
            className={`absolute top-2 right-2 ${
              typeBadgeColors[tank.type] || "bg-gray-100 text-gray-800"
            }`}
          >
            {tank.type}
          </Badge>
          <Badge
            className={`absolute top-2 left-2 ${
              conditionColors[tank.condition] || "bg-gray-100 text-gray-800"
            }`}
          >
            {tank.condition.charAt(0).toUpperCase() + tank.condition.slice(1)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <Link href={`/fish-tank-for-sale-brisbane/${tank.slug}`}>
          <h2 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
            {tank.title}
          </h2>
        </Link>

        <div className="space-y-1 mb-3">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-gray-400" />
            {tank.location}
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Ruler className="w-3.5 h-3.5 flex-shrink-0 text-gray-400" />
            {tank.tankSize} · {tank.volume}L
          </div>
        </div>

        <div className="text-2xl font-bold text-blue-600">
          {formatPrice(tank.price, tank.negotiable)}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 p-4 pt-0">
        <Link href={`/fish-tank-for-sale-brisbane/${tank.slug}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full">
            <ExternalLink className="w-4 h-4 mr-1" />
            View Details
          </Button>
        </Link>
        <Button
          size="sm"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => onEnquire(tank)}
          disabled={tank.status !== "available"}
        >
          <MessageCircle className="w-4 h-4 mr-1" />
          Enquire
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function TankGrid({ tanks, onEnquire }) {
  if (tanks.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">No listings found matching your criteria.</p>
        <p className="text-gray-400 mt-2 text-sm">Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tanks.map((tank) => (
        <TankCard key={tank.id} tank={tank} onEnquire={onEnquire} />
      ))}
    </div>
  );
}
