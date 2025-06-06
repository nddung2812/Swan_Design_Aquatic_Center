"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CreditCard, Truck, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const router = useRouter();

  // Form state
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [shippingAddress, setShippingAddress] = useState({
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  });

  const [billingAddress, setBillingAddress] = useState({
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    sameAsShipping: true,
  });

  const [shippingOption, setShippingOption] = useState("standard");

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("shopping-cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);
      if (parsedCart.length === 0) {
        router.push("/products");
      }
    } else {
      router.push("/products");
    }
  }, [router]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const getSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getShippingCost = () => {
    return 15.99; // Standard shipping only
  };

  const getTax = () => {
    const subtotal = getSubtotal();
    // Apply 10% GST for Australia, 8% for other countries
    if (shippingAddress.country === "Australia") {
      return subtotal * 0.1; // 10% GST for Australia
    }
    return subtotal * 0.08; // 8% tax for other countries
  };

  const getTotal = () => {
    return getSubtotal() + getShippingCost() + getTax();
  };

  const generateOrderNumber = () => {
    return "AQ" + Date.now().toString().slice(-8);
  };

  const sendConfirmationEmail = async (orderDetails) => {
    try {
      const templateParams = {
        to_email: customerInfo.email,
        customer_name: `${customerInfo.firstName} ${customerInfo.lastName}`,
        order_number: orderDetails.orderNumber,
        order_total: formatPrice(orderDetails.total),
        items: cartItems
          .map(
            (item) =>
              `${item.name} (Qty: ${item.quantity}) - ${formatPrice(
                item.price * item.quantity
              )}`
          )
          .join("\n"),
        shipping_address: `${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.zipCode}`,
        shipping_method: "Standard Shipping (5-7 days) - $15.99",
      };

      // Note: You'll need to set up EmailJS with your service ID, template ID, and public key
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        templateParams,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );
    } catch (error) {
      console.error("Failed to send confirmation email:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const newOrderNumber = generateOrderNumber();
      setOrderNumber(newOrderNumber);

      // Send confirmation email
      await sendConfirmationEmail({
        orderNumber: newOrderNumber,
        total: getTotal(),
      });

      // Clear cart
      localStorage.removeItem("shopping-cart");
      setOrderComplete(true);
    } catch (error) {
      console.error("Checkout failed:", error);
      alert("There was an error processing your order. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Order Confirmed!
              </h1>
              <p className="text-gray-600 mb-4">
                Thank you for your purchase. Your order #{orderNumber} has been
                confirmed.
              </p>
              <p className="text-gray-600 mb-8">
                A confirmation email has been sent to {customerInfo.email}
              </p>
              <div className="space-y-4">
                <Button
                  onClick={() => router.push("/products")}
                  className="w-full"
                >
                  Continue Shopping
                </Button>
                <Button
                  variant="outline"
                  onClick={() => router.push("/")}
                  className="w-full"
                >
                  Return to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => router.push("/products")}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Forms */}
            <div className="lg:col-span-2 space-y-6">
              {/* Customer Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Customer Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        required
                        value={customerInfo.firstName}
                        onChange={(e) =>
                          setCustomerInfo({
                            ...customerInfo,
                            firstName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        required
                        value={customerInfo.lastName}
                        onChange={(e) =>
                          setCustomerInfo({
                            ...customerInfo,
                            lastName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={customerInfo.email}
                      onChange={(e) =>
                        setCustomerInfo({
                          ...customerInfo,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) =>
                        setCustomerInfo({
                          ...customerInfo,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="w-5 h-5 mr-2" />
                    Shipping Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      required
                      value={shippingAddress.address}
                      onChange={(e) =>
                        setShippingAddress({
                          ...shippingAddress,
                          address: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        required
                        value={shippingAddress.city}
                        onChange={(e) =>
                          setShippingAddress({
                            ...shippingAddress,
                            city: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        required
                        value={shippingAddress.state}
                        onChange={(e) =>
                          setShippingAddress({
                            ...shippingAddress,
                            state: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        required
                        value={shippingAddress.zipCode}
                        onChange={(e) =>
                          setShippingAddress({
                            ...shippingAddress,
                            zipCode: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Options */}
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select
                    value={shippingOption}
                    onValueChange={setShippingOption}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">
                        Standard Shipping (5-7 days) - $15.99
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                    <p className="text-blue-800 font-medium">
                      💳 Stripe Payment Integration
                    </p>
                    <p className="text-blue-600 text-sm mt-2">
                      Payment processing will be integrated with Stripe once you
                      set up your account. For now, orders will be processed
                      without payment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Items */}
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-start"
                      >
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <p className="text-xs text-gray-500">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <span className="font-medium">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Totals */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>{formatPrice(getSubtotal())}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping:</span>
                      <span>{formatPrice(getShippingCost())}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax:</span>
                      <span>{formatPrice(getTax())}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span className="text-blue-600">
                        {formatPrice(getTotal())}
                      </span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? "Processing..." : "Place Order"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
