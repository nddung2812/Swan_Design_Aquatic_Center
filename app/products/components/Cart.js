"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Plus, Minus, Trash2, CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";
import { productsData } from "../data/products";

export default function Cart({
  items,
  onRemove,
  onUpdateQuantity,
  totalItems,
  totalPrice,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  // Get product stock by ID
  const getProductStock = (productId) => {
    const product = productsData.find((p) => p.id === productId);
    return product ? product.stock : 0;
  };

  // Handle quantity increase with stock validation
  const handleIncreaseQuantity = (item) => {
    if (typeof window === "undefined") return; // Server-side rendering guard

    const productStock = getProductStock(item.id);

    if (item.quantity >= productStock) {
      alert(`Cannot add more. Maximum stock available: ${productStock}`);
      return;
    }

    onUpdateQuantity(item.id, item.quantity + 1);
  };

  // Handle quantity decrease
  const handleDecreaseQuantity = (item) => {
    onUpdateQuantity(item.id, item.quantity - 1);
  };

  const handleCheckout = () => {
    setIsOpen(false);
    router.push("/products/checkout");
  };

  return (
    <div className="relative">
      {/* Cart Button */}
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-3"
      >
        <ShoppingCart className="w-5 h-5" />
        {totalItems > 0 && (
          <Badge className="absolute -top-2 -right-2 bg-red-500 text-white min-w-[20px] h-5 flex items-center justify-center rounded-full text-xs">
            {totalItems}
          </Badge>
        )}
        <span className="ml-2 hidden sm:inline">Cart ({totalItems})</span>
      </Button>

      {/* Cart Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Cart Content */}
          <Card className="absolute right-0 top-full mt-2 w-96 z-50 shadow-2xl border-2">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-between">
                <span>Shopping Cart</span>
                <Badge variant="secondary">{totalItems} items</Badge>
              </CardTitle>
            </CardHeader>

            <CardContent>
              {items.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <ShoppingCart className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>Your cart is empty</p>
                  <Button
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                    className="mt-4"
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="space-y-4 max-h-64 overflow-y-auto mb-4">
                    {items.map((item) => {
                      const productStock = getProductStock(item.id);
                      const isAtMaxStock = item.quantity >= productStock;

                      return (
                        <div
                          key={item.id}
                          className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <img
                            src={
                              item.images?.[0] ||
                              "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=100&h=100&fit=crop&crop=center"
                            }
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded"
                            onError={(e) => {
                              e.target.src = `https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=100&h=100&fit=crop&crop=center`;
                            }}
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm truncate">
                              {item.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {formatPrice(item.price)}
                            </p>
                            {/* Stock information */}
                            <div className="text-xs text-gray-500 mt-1">
                              Stock: {productStock}
                              {isAtMaxStock && (
                                <span className="text-red-600 ml-1">
                                  (Max reached)
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDecreaseQuantity(item)}
                              className="h-6 w-6 p-0"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="text-sm font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleIncreaseQuantity(item)}
                              className="h-6 w-6 p-0 disabled:opacity-50 disabled:cursor-not-allowed"
                              disabled={isAtMaxStock}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => onRemove(item.id)}
                              className="h-6 w-6 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Cart Summary */}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold text-lg">Total:</span>
                      <span className="font-bold text-xl text-blue-600">
                        {formatPrice(totalPrice)}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <Button
                        onClick={handleCheckout}
                        className="w-full"
                        size="lg"
                      >
                        <CreditCard className="w-4 h-4 mr-2" />
                        Proceed to Checkout
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setIsOpen(false)}
                        className="w-full"
                      >
                        Continue Shopping
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
