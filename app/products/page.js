"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProductGrid from "./components/ProductGrid";
import CategoryFilter from "./components/CategoryFilter";
import Cart from "./components/Cart";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { productsData } from "./data/products";
import Layout from "@/app/components/Layout";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [cartLoaded, setCartLoaded] = useState(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("shopping-cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    setCartLoaded(true); // Mark cart as loaded
  }, []);

  // Save cart to localStorage whenever cartItems change (only after initial load)
  useEffect(() => {
    if (cartLoaded) {
      localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
    }
  }, [cartItems, cartLoaded]);

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

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
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

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
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
            <h1 className="text-4xl font-bold text-gray-900">
              Aquatic Products Store
            </h1>
          </div>
          <Cart
            items={cartItems}
            onRemove={removeFromCart}
            onUpdateQuantity={updateCartQuantity}
            totalItems={getTotalItems()}
            totalPrice={getTotalPrice()}
          />
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
            <ProductGrid products={filteredProducts} onAddToCart={addToCart} />
          </div>
        </div>
      </div>
    </div>
  );
}
