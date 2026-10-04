"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  
  ArrowRight,
  Check,
  CreditCard,
  LockKeyhole,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

export interface CheckoutItem {
  name: string;
  description?: string;
  price: number;
  quantity?: number;
}

export interface CheckoutFormProps {
  brandName?: string;
  title?: string;
  items?: CheckoutItem[];
  currency?: string;
  primaryColor?: string;
  buttonText?: string;
  onSubmit?: (data: CheckoutFormData) => void;
}

export interface CheckoutFormData {
  cardNumber: string;
  expiry: string;
  cvv: string;
  cardholder: string;
}

const defaultItems: CheckoutItem[] = [
  {
    name: "Premium Plan",
    description: "Annual subscription",
    price: 129,
    quantity: 1,
  },
  {
    name: "Priority Support",
    description: "Included",
    price: 29,
    quantity: 1,
  },
];

export default function CheckoutForm({
  brandName = "YourBrand",
  title = "Complete your purchase",
  items = defaultItems,
  currency = "$",
  primaryColor = "#2563eb",
  buttonText = "Pay securely",
  onSubmit,
}: CheckoutFormProps) {
  const [formData, setFormData] = useState<CheckoutFormData>({
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardholder: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<
    "card" | "wallet"
  >("card");

  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const subtotal = items.reduce(
    (total, item) =>
      total + item.price * (item.quantity ?? 1),
    0,
  );

  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const updateField = (
    field: keyof CheckoutFormData,
    value: string,
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  const formatExpiry = (value: string) => {
    const clean = value.replace(/\D/g, "").slice(0, 4);

    if (clean.length <= 2) {
      return clean;
    }

    return `${clean.slice(0, 2)}/${clean.slice(2)}`;
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setProcessing(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1400),
    );

    setProcessing(false);
    setSuccess(true);

    onSubmit?.(formData);
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#f7f9fc] px-5 py-8 font-sans text-slate-950 sm:px-8 lg:px-12"
      style={
        {
          "--checkout-primary": primaryColor,
        } as React.CSSProperties
      }
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-violet-100/30 blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-xs font-semibold text-white">
              {brandName.charAt(0).toUpperCase()}
            </div>

            <span className="text-sm font-semibold tracking-tight">
              {brandName}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <LockKeyhole size={14} />
            Secure checkout
          </div>
        </header>

        <AnimatePresence mode="wait">
          {!success ? (
            <motion.div
              key="checkout"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Heading */}
              <div className="mb-12">
                <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                  <Sparkles size={14} />
                  Secure payment
                </div>

                <h1 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  {title}
                </h1>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                  Review your order and enter your payment
                  details to complete your purchase.
                </p>
              </div>

              {/* Main layout */}
              <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                {/* Payment */}
                <section>
                  {/* Payment methods */}
                  <div className="mb-8">
                    <p className="mb-4 text-sm font-semibold text-slate-900">
                      Payment method
                    </p>

                    <div className="flex gap-3">
                      <PaymentMethod
                        active={paymentMethod === "card"}
                        onClick={() =>
                          setPaymentMethod("card")
                        }
                        icon={
                          <CreditCard
                            size={18}
                            strokeWidth={1.7}
                          />
                        }
                        label="Card"
                      />

                      <PaymentMethod
                        active={paymentMethod === "wallet"}
                        onClick={() =>
                          setPaymentMethod("wallet")
                        }
                        icon={
                          <ShoppingBag
                            size={18}
                            strokeWidth={1.7}
                          />
                        }
                        label="Wallet"
                      />
                    </div>
                  </div>

                  {paymentMethod === "card" ? (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-7"
                    >
                      {/* Card preview */}
                      <motion.div
                        layout
                        className="relative overflow-hidden rounded-[24px] bg-slate-950 p-6 text-white shadow-[0_25px_60px_rgba(15,23,42,0.14)] sm:p-7"
                      >
                        <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-blue-500/20 blur-2xl" />

                        <div className="relative">
                          <div className="flex items-start justify-between">
                            <span className="text-xs font-medium text-white/50">
                              CARD
                            </span>

                            <CreditCard
                              size={22}
                              className="text-white/70"
                            />
                          </div>

                          <div className="mt-12 text-xl tracking-[0.18em] sm:text-2xl">
                            {formData.cardNumber ||
                              "•••• •••• •••• ••••"}
                          </div>

                          <div className="mt-8 flex justify-between">
                            <div>
                              <p className="text-[9px] uppercase tracking-widest text-white/40">
                                Cardholder
                              </p>

                              <p className="mt-1 text-sm font-medium">
                                {formData.cardholder ||
                                  "YOUR NAME"}
                              </p>
                            </div>

                            <div>
                              <p className="text-[9px] uppercase tracking-widest text-white/40">
                                Expires
                              </p>

                              <p className="mt-1 text-sm font-medium">
                                {formData.expiry || "MM/YY"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Cardholder */}
                      <div>
                        <label
                          htmlFor="cardholder"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Cardholder name
                        </label>

                        <input
                          id="cardholder"
                          type="text"
                          required
                          autoComplete="cc-name"
                          value={formData.cardholder}
                          onChange={(event) =>
                            updateField(
                              "cardholder",
                              event.target.value,
                            )
                          }
                          placeholder="John Doe"
                          className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                        />
                      </div>

                      {/* Card number */}
                      <div>
                        <label
                          htmlFor="card-number"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Card number
                        </label>

                        <div className="relative">
                          <CreditCard
                            size={17}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />

                          <input
                            id="card-number"
                            type="text"
                            inputMode="numeric"
                            autoComplete="cc-number"
                            required
                            value={formData.cardNumber}
                            onChange={(event) =>
                              updateField(
                                "cardNumber",
                                formatCardNumber(
                                  event.target.value,
                                ),
                              )
                            }
                            placeholder="1234 5678 9012 3456"
                            className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm tracking-wide outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                          />
                        </div>
                      </div>

                      {/* Expiry + CVV */}
                      <div className="grid grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="expiry"
                            className="mb-2 block text-sm font-medium text-slate-700"
                          >
                            Expiry date
                          </label>

                          <input
                            id="expiry"
                            type="text"
                            inputMode="numeric"
                            autoComplete="cc-exp"
                            required
                            value={formData.expiry}
                            onChange={(event) =>
                              updateField(
                                "expiry",
                                formatExpiry(
                                  event.target.value,
                                ),
                              )
                            }
                            placeholder="MM/YY"
                            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="cvv"
                            className="mb-2 block text-sm font-medium text-slate-700"
                          >
                            CVV
                          </label>

                          <input
                            id="cvv"
                            type="password"
                            inputMode="numeric"
                            autoComplete="cc-csc"
                            required
                            maxLength={4}
                            value={formData.cvv}
                            onChange={(event) =>
                              updateField(
                                "cvv",
                                event.target.value
                                  .replace(/\D/g, "")
                                  .slice(0, 4),
                              )
                            }
                            placeholder="•••"
                            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                          />
                        </div>
                      </div>

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={processing}
                        whileHover={{
                          y: processing ? 0 : -2,
                        }}
                        whileTap={{
                          scale: processing ? 1 : 0.985,
                        }}
                        className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(15,23,42,0.15)] transition-all hover:shadow-[0_18px_40px_rgba(15,23,42,0.22)] disabled:cursor-wait disabled:opacity-70"
                      >
                        {processing ? (
                          <>
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                            />

                            Processing payment...
                          </>
                        ) : (
                          <>
                            {buttonText}
                            <ArrowRight size={17} />
                          </>
                        )}
                      </motion.button>
                    </form>
                  ) : (
                    <div className="flex min-h-[300px] items-center justify-center border-y border-slate-200">
                      <div className="text-center">
                        <ShoppingBag
                          size={32}
                          className="mx-auto text-slate-300"
                        />

                        <h2 className="mt-4 text-lg font-semibold">
                          Wallet payment
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                          Connect your wallet provider here.
                        </p>
                      </div>
                    </div>
                  )}
                </section>

                {/* Order summary */}
                <aside className="lg:pt-1">
                  <div className="sticky top-8">
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                          Order
                        </p>

                        <h2 className="mt-1 text-xl font-semibold tracking-tight">
                          Summary
                        </h2>
                      </div>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                        {items.length}
                      </span>
                    </div>

                    <div className="divide-y divide-slate-200/80 border-y border-slate-200/80">
                      {items.map((item, index) => (
                        <motion.div
                          key={`${item.name}-${index}`}
                          layout
                          className="flex items-start justify-between gap-6 py-5"
                        >
                          <div>
                            <p className="text-sm font-medium text-slate-900">
                              {item.name}
                            </p>

                            {item.description && (
                              <p className="mt-1 text-xs text-slate-400">
                                {item.description}
                              </p>
                            )}

                            {(item.quantity ?? 1) > 1 && (
                              <p className="mt-1 text-xs text-slate-400">
                                Qty: {item.quantity}
                              </p>
                            )}
                          </div>

                          <span className="shrink-0 text-sm font-medium">
                            {currency}
                            {(
                              item.price *
                              (item.quantity ?? 1)
                            ).toFixed(2)}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="space-y-3 py-6 text-sm">
                      <div className="flex justify-between text-slate-500">
                        <span>Subtotal</span>

                        <span>
                          {currency}
                          {subtotal.toFixed(2)}
                        </span>
                      </div>

                      <div className="flex justify-between text-slate-500">
                        <span>Estimated tax</span>

                        <span>
                          {currency}
                          {tax.toFixed(2)}
                        </span>
                      </div>

                      <div className="flex items-end justify-between border-t border-slate-200 pt-5">
                        <span className="font-semibold">
                          Total
                        </span>

                        <span className="text-2xl font-semibold tracking-tight">
                          {currency}
                          {total.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 border-t border-slate-200 pt-5">
                      <ShieldCheck
                        size={18}
                        className="mt-0.5 shrink-0 text-emerald-500"
                      />

                      <p className="text-xs leading-5 text-slate-400">
                        Your payment information is encrypted
                        and securely processed. We never store
                        your full card details.
                      </p>
                    </div>
                  </div>
                </aside>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex min-h-[650px] items-center justify-center"
            >
              <div className="max-w-lg text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 15,
                  }}
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_20px_50px_rgba(16,185,129,0.25)]"
                >
                  <Check
                    size={34}
                    strokeWidth={2.5}
                  />
                </motion.div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
                  Payment successful
                </p>

                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  You are all set.
                </h2>

                <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-500">
                  Your payment has been processed successfully.
                  A confirmation will be sent to your email
                  shortly.
                </p>

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                  <Check
                    size={15}
                    className="text-emerald-500"
                  />
                  Order confirmed
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="mt-14 flex items-center justify-between border-t border-slate-200/80 pt-6 text-xs text-slate-400">
          <span>{brandName}</span>

          <span className="flex items-center gap-2">
            <LockKeyhole size={13} />
            Secure checkout
          </span>
        </footer>
      </div>
    </main>
  );
}

interface PaymentMethodProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

function PaymentMethod({
  active,
  onClick,
  icon,
  label,
}: PaymentMethodProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2.5 rounded-full border px-4 py-2.5 text-sm font-medium transition-all"
      style={{
        borderColor: active ? "#2563eb" : "#e2e8f0",
        backgroundColor: active ? "#eff6ff" : "white",
        color: active ? "#2563eb" : "#64748b",
      }}
    >
      {icon}
      {label}
    </button>
  );
}