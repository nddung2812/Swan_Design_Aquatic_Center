"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, X, MapPin, Fish, ToggleLeft, ToggleRight } from "lucide-react";
import { tankTypes, locationAreas } from "../data/tanks";

const typeColors = {
  Reef: "bg-blue-100 text-blue-800 border-blue-300",
  Marine: "bg-cyan-100 text-cyan-800 border-cyan-300",
  Freshwater: "bg-green-100 text-green-800 border-green-300",
  Planted: "bg-emerald-100 text-emerald-800 border-emerald-300",
  Cichlid: "bg-orange-100 text-orange-800 border-orange-300",
  all: "bg-gray-100 text-gray-800 border-gray-300",
};

export default function TankSidebar({
  searchTerm,
  onSearchChange,
  selectedType,
  onTypeChange,
  selectedArea,
  onAreaChange,
  availableOnly,
  onAvailableOnlyChange,
}) {
  return (
    <Card className="lg:sticky lg:top-4">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Search & Filter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Search */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-700">Search Listings</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search tanks..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 pr-10 py-2 text-sm border-gray-200 focus:border-blue-500"
            />
            {searchTerm && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="w-3 h-3 text-gray-500" />
              </button>
            )}
          </div>
        </div>

        {/* Available Only Toggle */}
        <div className="flex items-center justify-between py-1">
          <span className="text-sm font-medium text-gray-700">
            Available Only
          </span>
          <button
            onClick={() => onAvailableOnlyChange(!availableOnly)}
            className="flex items-center gap-1 text-sm"
          >
            {availableOnly ? (
              <ToggleRight className="w-6 h-6 text-blue-600" />
            ) : (
              <ToggleLeft className="w-6 h-6 text-gray-400" />
            )}
          </button>
        </div>

        {/* Tank Type */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-700 flex items-center gap-1">
            <Fish className="w-4 h-4" />
            Tank Type
          </h3>
          <div className="space-y-1">
            {tankTypes.map((type) => (
              <Button
                key={type.id}
                variant="outline"
                className={`w-full justify-between p-3 h-auto border ${
                  selectedType === type.id
                    ? typeColors[type.id] || typeColors.all
                    : "bg-white border-gray-200 hover:bg-gray-50"
                }`}
                onClick={() => onTypeChange(type.id)}
              >
                <span className="font-medium">{type.name}</span>
                <Badge variant="secondary" className="bg-gray-200 text-gray-700">
                  {type.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Location Area */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-700 flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            Location
          </h3>
          <div className="space-y-1">
            {locationAreas.map((area) => (
              <Button
                key={area.id}
                variant="outline"
                className={`w-full justify-start p-3 h-auto border text-sm ${
                  selectedArea === area.id
                    ? "bg-blue-100 text-blue-800 border-blue-300"
                    : "bg-white border-gray-200 hover:bg-gray-50 text-gray-700"
                }`}
                onClick={() => onAreaChange(area.id)}
              >
                {area.name}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
