"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProductGrid from "./components/ProductGrid";
import CategoryFilter from "./components/CategoryFilter";
import Cart from "./components/Cart";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { productsData } from "./data/products";
import Footer from "@/app/components/Footer";
import { useCart } from "@/app/context/CartContext";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // Use global cart context (only need addToCart for ProductGrid)
  const { addToCart } = useCart();

  // Filter products based on category and search term
  useEffect(() => {
    let filtered = productsData;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm]);

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
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
              Aquarium Centre
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="lg:w-1/4">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
            </div>
            <div className="lg:w-3/4">
              <ProductGrid
                products={filteredProducts}
                onAddToCart={addToCart}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Fixed Floating Cart Widget */}
      <Cart />
    </div>
  );
}
