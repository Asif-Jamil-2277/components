"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  CircleUserRound,
  FileCheck2,
  Mail,
  MapPin,
  User,
} from "lucide-react";
import { useMemo, useState } from "react";

export type WizardStep = {
  id: string;
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
};

export type WizardFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
};

export interface WizardFormProps {
  brandName?: string;
  title?: string;
  description?: string;
  primaryColor?: string;
  buttonText?: string;
  steps?: WizardStep[];
  onSubmit?: (data: WizardFormData) => void | Promise<void>;
}

const defaultSteps: WizardStep[] = [
  {
    id: "personal",
    title: "Personal",
    description: "Basic information",
    icon: CircleUserRound,
  },
  {
    id: "contact",
    title: "Contact",
    description: "How we can reach you",
    icon: Mail,
  },
  {
    id: "location",
    title: "Location",
    description: "Your location",
    icon: MapPin,
  },
  {
    id: "review",
    title: "Review",
    description: "Check your details",
    icon: FileCheck2,
  },
];

const initialData: WizardFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  country: "",
};

export default function WizardForm({
  brandName = "YourBrand",
  title = "Complete your profile",
  description = "A simple guided experience that keeps every step clear.",
  primaryColor = "#2563eb",
  buttonText = "Complete setup",
  steps = defaultSteps,
  onSubmit,
}: WizardFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<WizardFormData>(initialData);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const progress = useMemo(
    () => ((currentStep + 1) / steps.length) * 100,
    [currentStep, steps.length]
  );

  const updateField = (
    field: keyof WizardFormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const validateStep = () => {
    if (currentStep === 0) {
      if (!formData.firstName.trim() || !formData.lastName.trim()) {
        setError("Please enter your first and last name.");
        return false;
      }
    }

    if (currentStep === 1) {
      if (!formData.email.trim() || !formData.phone.trim()) {
        setError("Please enter your email and phone number.");
        return false;
      }

      if (!formData.email.includes("@")) {
        setError("Please enter a valid email address.");
        return false;
      }
    }

    if (currentStep === 2) {
      if (!formData.city.trim() || !formData.country.trim()) {
        setError("Please enter your city and country.");
        return false;
      }
    }

    setError("");
    return true;
  };

  const handleNext = () => {
    if (!validateStep()) return;

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setError("");
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;

    setIsSubmitting(true);
    setError("");

    try {
      await onSubmit?.(formData);

      await new Promise((resolve) =>
        setTimeout(resolve, 900)
      );

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="relative min-h-screen overflow-hidden bg-white px-5 py-8 text-slate-900 sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{
              background: `${primaryColor}12`,
            }}
          />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-xl text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.15,
                type: "spring",
                stiffness: 180,
              }}
              className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full"
              style={{
                background: `${primaryColor}12`,
                color: primaryColor,
              }}
            >
              <CheckCircle2 className="h-10 w-10" />
            </motion.div>

            <p
              className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: primaryColor }}
            >
              Setup complete
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Everything is ready.
            </h2>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
              Your information has been successfully submitted.
              You can now continue to the next part of your journey.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  const activeStep = steps[currentStep];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8fafc] px-4 py-5 text-slate-900 sm:px-6 sm:py-8 lg:px-10">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-24 -top-24 h-80 w-80 rounded-full blur-3xl"
          style={{
            background: `${primaryColor}12`,
          }}
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full blur-3xl"
          style={{
            background: `${primaryColor}10`,
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-2.5rem)] max-w-6xl items-center justify-center sm:min-h-[calc(100vh-4rem)]">
        <div className="w-full">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-sm"
                  style={{ backgroundColor: primaryColor }}
                >
                  <User className="h-4 w-4" />
                </div>

                <span className="text-sm font-semibold tracking-tight text-slate-900">
                  {brandName}
                </span>
              </div>
            </div>

            <span className="text-xs font-medium text-slate-400">
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>

          {/* Main */}
          <div className="grid overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[0.85fr_1.4fr]">
            {/* Left */}
            <div className="relative hidden overflow-hidden bg-slate-950 p-10 lg:block">
              <div
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
                style={{
                  background: `${primaryColor}30`,
                }}
              />

              <div
                className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full blur-3xl"
                style={{
                  background: `${primaryColor}18`,
                }}
              />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.25em]"
                    style={{ color: `${primaryColor}cc` }}
                  >
                    Guided setup
                  </p>

                  <h1 className="mt-5 max-w-sm text-3xl font-semibold leading-tight tracking-tight text-white">
                    {title}
                  </h1>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
                    {description}
                  </p>
                </div>

                {/* Steps */}
                <div className="mt-12 space-y-7">
                  {steps.map((step, index) => {
                    const Icon = step.icon ?? CircleUserRound;
                    const active = index === currentStep;
                    const completed = index < currentStep;

                    return (
                      <div
                        key={step.id}
                        className="relative flex gap-4"
                      >
                        {index < steps.length - 1 && (
                          <div
                            className="absolute left-[18px] top-10 h-7 w-px"
                            style={{
                              background:
                                index < currentStep
                                  ? primaryColor
                                  : "rgba(148,163,184,0.2)",
                            }}
                          />
                        )}

                        <motion.div
                          animate={{
                            scale: active ? 1.08 : 1,
                          }}
                          className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border"
                          style={{
                            borderColor:
                              active || completed
                                ? primaryColor
                                : "rgba(148,163,184,0.25)",
                            background:
                              active || completed
                                ? primaryColor
                                : "rgba(255,255,255,0.04)",
                            color:
                              active || completed
                                ? "white"
                                : "rgb(148 163 184)",
                          }}
                        >
                          {completed ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Icon className="h-4 w-4" />
                          )}
                        </motion.div>

                        <div>
                          <p
                            className={`text-sm font-medium ${
                              active
                                ? "text-white"
                                : "text-slate-400"
                            }`}
                          >
                            {step.title}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-12 border-t border-white/10 pt-6">
                  <p className="text-xs leading-5 text-slate-500">
                    Your information stays organized throughout the
                    entire process.
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="p-6 sm:p-8 lg:p-12">
              {/* Mobile title */}
              <div className="mb-8 lg:hidden">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: primaryColor }}
                >
                  Guided setup
                </p>

                <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  {title}
                </h1>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {description}
                </p>
              </div>

              {/* Progress */}
              <div className="mb-10">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">
                    {activeStep.title}
                  </span>

                  <span className="text-xs font-medium text-slate-400">
                    {Math.round(progress)}%
                  </span>
                </div>

                <div className="h-1 overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    animate={{ width: `${progress}%` }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full"
                    style={{
                      backgroundColor: primaryColor,
                    }}
                  />
                </div>
              </div>

              {/* Step heading */}
              <div className="mb-8">
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{
                    background: `${primaryColor}10`,
                    color: primaryColor,
                  }}
                >
                  {activeStep.icon ? (
                    <activeStep.icon className="h-5 w-5" />
                  ) : (
                    <CircleUserRound className="h-5 w-5" />
                  )}
                </div>

                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {activeStep.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {activeStep.description}
                </p>
              </div>

              {/* Fields */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -18 }}
                  transition={{ duration: 0.25 }}
                >
                  {currentStep === 0 && (
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="First name"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(value) =>
                          updateField("firstName", value)
                        }
                      />

                      <Field
                        label="Last name"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(value) =>
                          updateField("lastName", value)
                        }
                      />
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="space-y-5">
                      <Field
                        label="Email address"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(value) =>
                          updateField("email", value)
                        }
                      />

                      <Field
                        label="Phone number"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(value) =>
                          updateField("phone", value)
                        }
                      />
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="City"
                        placeholder="Kolkata"
                        value={formData.city}
                        onChange={(value) =>
                          updateField("city", value)
                        }
                      />

                      <Field
                        label="Country"
                        placeholder="India"
                        value={formData.country}
                        onChange={(value) =>
                          updateField("country", value)
                        }
                      />
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-3">
                      <ReviewRow
                        label="Name"
                        value={`${formData.firstName} ${formData.lastName}`}
                      />

                      <ReviewRow
                        label="Email"
                        value={formData.email}
                      />

                      <ReviewRow
                        label="Phone"
                        value={formData.phone}
                      />

                      <ReviewRow
                        label="Location"
                        value={`${formData.city}, ${formData.country}`}
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Error */}
              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-5 text-sm font-medium text-red-500"
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className="mt-10 flex items-center justify-between gap-4 border-t border-slate-100 pt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentStep === 0 || isSubmitting}
                  className="inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-900 disabled:pointer-events-none disabled:opacity-30"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>

                {currentStep < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                    style={{
                      backgroundColor: primaryColor,
                    }}
                  >
                    Continue
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="inline-flex min-w-[150px] items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                    style={{
                      backgroundColor: primaryColor,
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Processing
                      </>
                    ) : (
                      <>
                        {buttonText}
                        <Check className="h-4 w-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </span>

      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-12 w-full border-b border-slate-200 bg-transparent px-0 text-sm text-slate-950 outline-none transition placeholder:text-slate-300 focus:border-slate-950"
      />
    </label>
  );
}

function ReviewRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-6 border-b border-slate-100 py-4">
      <span className="text-sm text-slate-400">{label}</span>

      <span className="text-right text-sm font-medium text-slate-800">
        {value}
      </span>
    </div>
  );
}