/// <reference types="vite/client" />
import React, { useState, useEffect } from "react";
import {
  loadStripe,
  PaymentRequest,
} from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";
import { AlertCircle } from "lucide-react";

const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
const stripePromise = publishableKey ? loadStripe(publishableKey) : null;

const CheckoutForm = ({ amount, onComplete }: { amount: number; onComplete: () => void }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(null);

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: "GB",
        currency: "gbp",
        total: {
          label: "Consultation Fee",
          amount: amount * 100, // Stripe expects amount in pence
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      pr.canMakePayment().then((result) => {
        if (result) {
          setPaymentRequest(pr);
        }
      });

      pr.on("paymentmethod", async (ev) => {
        // Create PaymentIntent on server
        const response = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: amount * 100 }),
        });

        const { clientSecret, error: serverError } = await response.json();

        if (serverError) {
          ev.complete("fail");
          setError(serverError);
          return;
        }

        const { error: confirmError } = await stripe.confirmCardPayment(
          clientSecret,
          { payment_method: ev.paymentMethod.id },
          { handleActions: false }
        );

        if (confirmError) {
          ev.complete("fail");
          setError(confirmError.message || "Payment failed");
        } else {
          ev.complete("success");
          onComplete();
        }
      });
    }
  }, [stripe, amount, onComplete]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    try {
      // 1. Create PaymentIntent on server
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amount * 100 }),
      });

      const { clientSecret, error: serverError } = await response.json();

      if (serverError) {
        setError(serverError);
        setIsProcessing(false);
        return;
      }

      // 2. Confirm payment on client
      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement as any,
        },
      });

      if (confirmError) {
        setError(confirmError.message || "Payment failed");
      } else if (paymentIntent?.status === "succeeded") {
        onComplete();
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-zinc-100 max-w-md mx-auto">
      <h3 className="text-xl font-black text-brand-black mb-6">Secure Payment</h3>
      
      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
          <span className="text-zinc-500 font-medium">Consultation Fee</span>
          <span className="text-2xl font-black text-brand-black">£{amount}</span>
        </div>

        {paymentRequest && (
          <div className="mb-4">
            <PaymentRequestButtonElement options={{ paymentRequest }} />
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-200"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-zinc-400 font-bold">Or pay with card</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus-within:ring-2 focus-within:ring-brand-red transition-all">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#141414",
                  "::placeholder": {
                    color: "#a1a1aa",
                  },
                },
                invalid: {
                  color: "#ef4444",
                },
              },
            }}
          />
        </div>

        {error && (
          <div className="flex items-center gap-2 text-red-500 text-sm font-bold bg-red-50 p-4 rounded-xl border border-red-100">
            <AlertCircle size={16} />
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className="w-full bg-brand-red text-white py-4 rounded-xl font-black text-lg hover:bg-brand-red/90 transition-all shadow-lg disabled:opacity-50 flex items-center justify-center gap-3"
        >
          {isProcessing ? (
            <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>Pay £{amount} & Confirm</>
          )}
        </button>
      </form>
      
      <p className="text-center text-xs text-zinc-400 mt-4">
        Securely processed by Stripe. Your data is protected.
      </p>
    </div>
  );
};

export const StripePayment = ({ amount, onComplete }: { amount: number; onComplete: () => void }) => {
  if (!stripePromise) {
    return (
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-zinc-100 max-w-md mx-auto text-center">
        <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="text-amber-500" size={32} />
        </div>
        <h3 className="text-xl font-black text-brand-black mb-2">Payment Setup Required</h3>
        <p className="text-zinc-500 text-sm mb-6">
          The Stripe publishable key is missing. Please configure <code className="bg-zinc-100 px-1 rounded">VITE_STRIPE_PUBLISHABLE_KEY</code> in your environment variables.
        </p>
        <div className="p-4 bg-zinc-50 rounded-xl text-left">
          <p className="text-xs font-bold text-zinc-400 uppercase mb-2">Instructions:</p>
          <ol className="text-xs text-zinc-600 space-y-2 list-decimal ml-4">
            <li>Go to Stripe Dashboard → Developers → API Keys</li>
            <li>Copy the <strong>Publishable key</strong></li>
            <li>Add it to the Secrets panel in AI Studio</li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm amount={amount} onComplete={onComplete} />
    </Elements>
  );
};
