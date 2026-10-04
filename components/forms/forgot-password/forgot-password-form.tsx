"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Mail,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

export interface ForgotPasswordFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  primaryColor?: string;
  brandName?: string;
  onSubmit?: (email: string) => void;
}

export default function ForgotPasswordForm({
  title = "Forgot your password?",
  description = "Enter your email address and we'll send you a secure link to reset your password.",
  buttonText = "Send reset link",
  primaryColor = "#2563eb",
  brandName = "YourBrand",
  onSubmit,
}: ForgotPasswordFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit?.(email);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail("");
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#fafcff] px-5 py-12 font-sans sm:px-6"
      style={
        {
          "--form-primary": primaryColor,
        } as React.CSSProperties
      }
    >
      {/* Ambient background */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          backgroundColor: primaryColor,
          opacity: 0.09,
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.07, 0.12, 0.07],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Decorative orbit */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/70 sm:h-[620px] sm:w-[620px]"
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span
          className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full"
          style={{
            backgroundColor: primaryColor,
            boxShadow: `0 0 18px ${primaryColor}`,
          }}
        />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/50 sm:h-[450px] sm:w-[450px]"
        animate={{ rotate: -360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span
          className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full"
          style={{
            backgroundColor: primaryColor,
            boxShadow: `0 0 16px ${primaryColor}`,
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-6rem)] items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full max-w-xl"
        >
          {/* Brand */}
          <div className="mb-14 flex justify-center">
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: primaryColor }}
              />

              <span className="text-sm font-semibold tracking-[-0.02em] text-slate-950">
                {brandName}
              </span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="forgot-form"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                {/* Graphic */}
                <div className="mb-9 flex justify-center">
                  <div className="relative flex h-20 w-20 items-center justify-center">
                    <motion.div
                      className="absolute inset-0 rounded-full border"
                      style={{
                        borderColor: `${primaryColor}25`,
                      }}
                      animate={{
                        scale: [1, 1.12, 1],
                        opacity: [0.8, 0.35, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <div
                      className="relative flex h-14 w-14 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: `${primaryColor}10`,
                        color: primaryColor,
                      }}
                    >
                      <Mail size={24} strokeWidth={1.7} />
                    </div>
                  </div>
                </div>

                {/* Heading */}
                <div className="text-center">
                  <p
                    className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
                    style={{ color: primaryColor }}
                  >
                    Account recovery
                  </p>

                  <h1 className="text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
                    {title}
                  </h1>

                  <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-slate-500 sm:text-[15px]">
                    {description}
                  </p>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="mx-auto mt-10 max-w-md"
                >
                  <label
                    htmlFor="forgot-password-email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email address
                  </label>

                  <div className="group relative">
                    <Mail
                      size={17}
                      className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[var(--form-primary)]"
                    />

                    <input
                      id="forgot-password-email"
                      type="email"
                      required
                      value={email}
                      onChange={(event) =>
                        setEmail(event.target.value)
                      }
                      placeholder="you@example.com"
                      className="w-full border-0 border-b border-slate-200 bg-transparent py-4 pl-8 pr-2 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-[var(--form-primary)]"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.985 }}
                    className="group mt-8 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-shadow"
                    style={{
                      backgroundColor: primaryColor,
                      boxShadow: `0 12px 30px ${primaryColor}25`,
                    }}
                  >
                    {buttonText}

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </motion.button>
                </form>

                {/* Security note */}
                <div className="mt-8 flex justify-center">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <ShieldCheck size={15} />
                    <span>Your account information stays secure.</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-center"
              >
                {/* Success graphic */}
                <div className="mb-9 flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 15,
                    }}
                    className="flex h-20 w-20 items-center justify-center rounded-full text-white"
                    style={{
                      backgroundColor: primaryColor,
                      boxShadow: `0 15px 40px ${primaryColor}35`,
                    }}
                  >
                    <Check size={30} strokeWidth={2.5} />
                  </motion.div>
                </div>

                <p
                  className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: primaryColor }}
                >
                  Check your inbox
                </p>

                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                  Reset link sent
                </h2>

                <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-slate-500">
                  If an account exists for{" "}
                  <span className="font-medium text-slate-800">
                    {email}
                  </span>
                  , you&apos;ll receive a password reset link shortly.
                </p>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mx-auto mt-8 flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-slate-950"
                >
                  <RotateCcw size={15} />
                  Try another email
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}