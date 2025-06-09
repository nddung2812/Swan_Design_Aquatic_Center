"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Plus, Minus, Trash2, CreditCard, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { productsData } from "../data/products";
import { useCart } from "@/app/context/CartContext";
import { toast } from "react-toastify";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Use global cart context
  const {
    cartItems: items,
    removeFromCart: onRemove,
    updateCartQuantity: onUpdateQuantity,
    getTotalItems: totalItems,
    getTotalPrice: totalPrice,
  } = useCart();

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
      toast.warning(
        `Cannot add more. Maximum stock available: ${productStock}`
      );
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
    <>
      {/* Fixed Cart Button - Bottom Right Corner */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="relative h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200 p-0"
          size="lg"
        >
          <ShoppingCart className="w-6 h-6 text-white" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-red-500 text-white min-w-[24px] h-6 flex items-center justify-center rounded-full text-xs font-bold shadow-md">
              {totalItems}
            </Badge>
          )}
        </Button>
      </div>

      {/* Cart Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Cart Content - Slide in from right */}
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b bg-white">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-gray-700" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Shopping Cart
                  </h2>
                  <Badge variant="secondary">{totalItems} items</Badge>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-hidden flex flex-col">
                {items.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center p-8 text-gray-500">
                    <ShoppingCart className="w-16 h-16 mb-4 text-gray-300" />
                    <p className="text-center mb-4">Your cart is empty</p>
                    <Button
                      variant="outline"
                      onClick={() => setIsOpen(false)}
                      className="w-full"
                    >
                      Continue Shopping
                    </Button>
                  </div>
                ) : (
                  <>
                    {/* Cart Items - Scrollable */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
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
                              className="w-16 h-16 object-cover rounded"
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
                              {/* Stock information - side by side with cart quantity */}
                              <div className="flex justify-between items-center mt-2">
                                <div className="text-xs text-blue-600">
                                  In Cart: {item.quantity}
                                </div>
                                <div className="text-xs text-right">
                                  <span
                                    className={
                                      productStock - item.quantity > 0
                                        ? "text-green-600"
                                        : "text-red-600"
                                    }
                                  >
                                    Available: {productStock - item.quantity}
                                  </span>
                                  {isAtMaxStock && (
                                    <span className="text-red-600 ml-1 block">
                                      (Max reached)
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
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
                                <span className="text-sm font-medium w-8 text-center text-gray-900">
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
                              </div>
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

                    {/* Cart Summary - Fixed at bottom */}
                    <div className="border-t bg-white p-4 space-y-4">
                      <div className="flex justify-between items-center">
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
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
