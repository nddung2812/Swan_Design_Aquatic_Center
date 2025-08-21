"use client";

import { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
  AddressElement,
} from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Loader2 } from "lucide-react";
import { toast } from "react-toastify";

export default function CheckoutForm({
  clientSecret,
  total,
  onPaymentSuccess,
  orderNumber,
  customerInfo,
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${
            window.location.origin
          }/products/checkout?payment_intent=${
            clientSecret.split("_secret_")[0]
          }`,
          receipt_email: customerInfo.email,
        },
        redirect: "if_required",
      });

      if (error) {
        toast.error(error.message);
        console.error("Payment failed:", error);
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        toast.success("Payment successful!");
        onPaymentSuccess(paymentIntent);
      }
    } catch (err) {
      toast.error("An unexpected error occurred.");
      console.error("Payment error:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <CreditCard className="w-5 h-5 mr-2" />
          Payment Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Address Element for billing address */}
          <div>
            <h3 className="text-lg font-medium mb-3">Billing Address</h3>
            <AddressElement
              options={{
                mode: "billing",
                defaultValues: {
                  name: `${customerInfo.firstName} ${customerInfo.lastName}`,
                },
              }}
            />
          </div>

          {/* Payment Element for card details */}
          <div>
            <h3 className="text-lg font-medium mb-3">Payment Details</h3>
            <PaymentElement
              options={{
                layout: "tabs",
              }}
            />
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total:</span>
              <span className="text-blue-600">${total.toFixed(2)} AUD</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">Order #{orderNumber}</p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12"
            disabled={!stripe || isProcessing}
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing Payment...
              </>
            ) : (
              <>
                <CreditCard className="w-4 h-4 mr-2" />
                Pay ${total.toFixed(2)} AUD
              </>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Your payment information is secured with 256-bit SSL encryption.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
