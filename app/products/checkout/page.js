"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
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
import { ArrowLeft, CreditCard, Truck, Mail, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [paymentStep, setPaymentStep] = useState("details"); // "details" or "payment"
  const router = useRouter();
  const searchParams = useSearchParams();

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
    country: "Australia",
  });

  const [billingAddress, setBillingAddress] = useState({
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "Australia",
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
    return (
      new Intl.NumberFormat("en-AU", {
        style: "currency",
        currency: "AUD",
      }).format(price) + " AUD"
    );
  };

  const getSubtotal = useCallback(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const getShippingCost = useCallback(() => {
    return 15.99; // Standard shipping only
  }, []);

  const getTax = useCallback(() => {
    const subtotal = getSubtotal();
    // Apply 10% GST (Australia only)
    return subtotal * 0.1;
  }, [getSubtotal]);

  const getTotal = useCallback(() => {
    return getSubtotal() + getShippingCost() + getTax();
  }, [getSubtotal, getShippingCost, getTax]);

  const generateOrderNumber = () => {
    return "AQ" + Date.now().toString().slice(-8);
  };

  const sendConfirmationEmail = useCallback(
    async (orderDetails) => {
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

        // Send confirmation email using EmailJS
        await emailjs.send(
          "service_nyo9717", // EmailJS service ID
          "template_0xpbklp", // EmailJS template ID for order confirmation
          templateParams,
          "PlnxkEthyMpuKG_kJ" // EmailJS public key
        );
      } catch (error) {
        console.error("Failed to send confirmation email:", error);
      }
    },
    [customerInfo, cartItems, shippingAddress]
  );

  const createPaymentIntent = async () => {
    try {
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: getTotal(),
          currency: "aud",
          metadata: {
            orderNumber: generateOrderNumber(),
            customerEmail: customerInfo.email,
            customerName: `${customerInfo.firstName} ${customerInfo.lastName}`,
            shippingAddress: JSON.stringify(shippingAddress),
            items: JSON.stringify(
              cartItems.map((item) => ({
                name: item.name,
                quantity: item.quantity,
                price: item.price,
              }))
            ),
          },
          shipping: {
            name: `${customerInfo.firstName} ${customerInfo.lastName}`,
            phone: customerInfo.phone,
            address: {
              line1: shippingAddress.address,
              city: shippingAddress.city,
              state: shippingAddress.state,
              postal_code: shippingAddress.zipCode,
              country:
                shippingAddress.country === "Australia"
                  ? "AU"
                  : shippingAddress.country,
            },
          },
        }),
      });

      const data = await response.json();
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
        setOrderNumber(data.metadata?.orderNumber || generateOrderNumber());
        setPaymentStep("payment");
      } else {
        throw new Error("Failed to create payment intent");
      }
    } catch (error) {
      toast.error("Failed to initialize payment. Please try again.");
      console.error("Payment intent creation failed:", error);
    }
  };

  const handlePaymentSuccess = useCallback(
    async (paymentIntent) => {
      try {
        // Send confirmation email
        await sendConfirmationEmail({
          orderNumber: orderNumber,
          total: getTotal(),
          paymentId: paymentIntent.id,
        });

        // Clear cart
        localStorage.removeItem("shopping-cart");
        setOrderComplete(true);
        toast.success("Payment successful! Confirmation email sent.");
      } catch (error) {
        console.error("Post-payment processing failed:", error);
        toast.warning(
          "Payment successful, but confirmation email failed to send."
        );
        setOrderComplete(true);
      }
    },
    [orderNumber, getTotal, sendConfirmationEmail]
  );

  const handlePaymentReturn = useCallback(
    async (paymentIntentId) => {
      try {
        const response = await fetch("/api/confirm-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ paymentIntentId }),
        });

        const data = await response.json();
        if (data.status === "succeeded") {
          await handlePaymentSuccess(data.paymentIntent);
        }
      } catch (error) {
        console.error("Error confirming payment:", error);
      }
    },
    [handlePaymentSuccess]
  );

  // Check for payment intent in URL (for return from redirect)
  useEffect(() => {
    const paymentIntent = searchParams.get("payment_intent");
    if (paymentIntent) {
      // Handle successful payment return
      handlePaymentReturn(paymentIntent);
    }
  }, [searchParams, handlePaymentReturn]);

  const handleDetailsSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !customerInfo.firstName ||
      !customerInfo.lastName ||
      !customerInfo.email
    ) {
      toast.error("Please fill in all required customer information fields.");
      return;
    }
    if (
      !shippingAddress.address ||
      !shippingAddress.city ||
      !shippingAddress.state ||
      !shippingAddress.zipCode
    ) {
      toast.error("Please fill in all required shipping address fields.");
      return;
    }

    // Generate order number and create payment intent
    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    createPaymentIntent();
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
            variant="outline"
            size="sm"
            onClick={() => router.push("/products")}
            className="mb-4 flex items-center gap-2 hover:bg-blue-50 hover:border-blue-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
        </div>
        <form onSubmit={handleDetailsSubmit}>
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
                      placeholder="Enter your full address"
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
                      <Label htmlFor="zipCode">Postcode</Label>
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

              {/* Continue to Payment Button */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Review & Continue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Please review your order details and shipping information
                    above, then proceed to payment.
                  </p>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Setting up payment...
                      </>
                    ) : (
                      "Continue to Payment"
                    )}
                  </Button>
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
                          <h4 className="font-medium text-sm text-gray-900">
                            {item.name}
                          </h4>
                          <p className="text-xs text-gray-500 font-medium">
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
                      <span>GST (10%):</span>
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
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
        ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Step with Stripe Elements */}
          {/* Left Column - Payment Form */}
          <div className="lg:col-span-2">
            {clientSecret && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm
                  clientSecret={clientSecret}
                  total={getTotal()}
                  onPaymentSuccess={handlePaymentSuccess}
                  orderNumber={orderNumber}
                  customerInfo={customerInfo}
                />
              </Elements>
            )}

            <Button
              onClick={() => setPaymentStep("details")}
              variant="outline"
              className="mt-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Details
            </Button>
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
                      className="flex justify-between items-center"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-sm text-gray-500">
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
                    <span>GST (10%):</span>
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
              </CardContent>
            </Card>
          </div>
        </div>
        {`}`}
      </div>
    </div>
  );
}
