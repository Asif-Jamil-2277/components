"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export interface ContactFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  successMessage?: string;
  primaryColor?: string;
  showPhone?: boolean;
  showSubject?: boolean;
  showLocation?: boolean;
  onSubmit?: (data: ContactFormData) => void | Promise<void>;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

type SubmitState = "idle" | "loading" | "success" | "error";

export default function ContactForm({
  title = "Let's talk",
  description = "Have a question or want to work together? Send us a message.",
  buttonText = "Send message",
  successMessage = "Your message has been sent successfully.",
  primaryColor = "#2563eb",
  showPhone = true,
  showSubject = true,
  showLocation = true,
  onSubmit,
}: ContactFormProps) {
  const [submitState, setSubmitState] =
    useState<SubmitState>("idle");

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const updateField = (
    field: keyof ContactFormData,
    value: string,
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    if (submitState !== "idle") {
      setSubmitState("idle");
    }
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    try {
      setSubmitState("loading");

      await onSubmit?.(formData);

      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setSubmitState("idle");
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.10)]">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
          {/* =====================================================
              INFORMATION PANEL
          ====================================================== */}

          <div
            className="relative overflow-hidden px-7 py-10 text-white sm:px-10 lg:px-12 lg:py-14"
            style={{
              backgroundColor: primaryColor,
            }}
          >
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10"
            >
              {/* Icon */}
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                <MessageSquare className="h-5 w-5" />
              </div>

              <h2 className="max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">
                Have a project in mind?
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-white/75 sm:text-base">
                Tell us what you are working on and we will get
                back to you as soon as possible.
              </p>

              {/* Contact details */}
              <div className="mt-10 space-y-5">
                <ContactInfo
                  icon={<Mail className="h-4 w-4" />}
                  label="Email"
                  value="hello@example.com"
                />

                {showPhone && (
                  <ContactInfo
                    icon={<Phone className="h-4 w-4" />}
                    label="Phone"
                    value="+91 98765 43210"
                  />
                )}

                {showLocation && (
                  <ContactInfo
                    icon={<MapPin className="h-4 w-4" />}
                    label="Location"
                    value="Kolkata, India"
                  />
                )}
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              FORM PANEL
          ====================================================== */}

          <div className="px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            <AnimatePresence mode="wait">
              {submitState === "success" ? (
                <SuccessState
                  key="success"
                  message={successMessage}
                  onReset={handleReset}
                  primaryColor={primaryColor}
                />
              ) : (
                <motion.div
                  key="form"
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -20,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Heading */}
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: primaryColor }}
                    >
                      Contact us
                    </p>

                    <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                      {title}
                    </h1>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500">
                      {description}
                    </p>
                  </div>

                  {/* Form */}
                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                  >
                    {/* Name + Email */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        id="contact-name"
                        label="Full name"
                        icon={<User className="h-4 w-4" />}
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(value) =>
                          updateField("name", value)
                        }
                        required
                      />

                      <FormField
                        id="contact-email"
                        label="Email address"
                        type="email"
                        icon={<Mail className="h-4 w-4" />}
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(value) =>
                          updateField("email", value)
                        }
                        required
                      />
                    </div>

                    {/* Phone + Subject */}
                    {(showPhone || showSubject) && (
                      <div className="grid gap-5 sm:grid-cols-2">
                        {showPhone && (
                          <FormField
                            id="contact-phone"
                            label="Phone number"
                            type="tel"
                            icon={<Phone className="h-4 w-4" />}
                            placeholder="+91 98765 43210"
                            value={formData.phone ?? ""}
                            onChange={(value) =>
                              updateField("phone", value)
                            }
                          />
                        )}

                        {showSubject && (
                          <FormField
                            id="contact-subject"
                            label="Subject"
                            icon={
                              <MessageSquare className="h-4 w-4" />
                            }
                            placeholder="How can we help?"
                            value={formData.subject ?? ""}
                            onChange={(value) =>
                              updateField("subject", value)
                            }
                          />
                        )}
                      </div>
                    )}

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Message
                      </label>

                      <div className="relative">
                        <MessageSquare className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-slate-400" />

                        <textarea
                          id="contact-message"
                          value={formData.message}
                          onChange={(event) =>
                            updateField(
                              "message",
                              event.target.value,
                            )
                          }
                          placeholder="Tell us a little about your project..."
                          rows={5}
                          required
                          className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[var(--contact-primary)] focus:bg-white focus:ring-4 focus:ring-[var(--contact-primary)]/10"
                          style={
                            {
                              "--contact-primary": primaryColor,
                            } as React.CSSProperties
                          }
                        />
                      </div>
                    </div>

                    {/* Error */}
                    {submitState === "error" && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: -5,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
                      >
                        Something went wrong. Please try
                        again.
                      </motion.div>
                    )}

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={submitState === "loading"}
                      className="group h-12 w-full rounded-xl text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5"
                      style={{
                        backgroundColor: primaryColor,
                      }}
                    >
                      {submitState === "loading" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          {buttonText}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   FORM FIELD
================================================================ */

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  icon: React.ReactNode;
  required?: boolean;
  onChange: (value: string) => void;
}

function FormField({
  id,
  label,
  type = "text",
  placeholder,
  value,
  icon,
  required = false,
  onChange,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        {label}
      </label>

      <div className="relative">
        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </div>

        <input
          id={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          required={required}
          className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
        />
      </div>
    </div>
  );
}

/* ===============================================================
   CONTACT INFO
================================================================ */

interface ContactInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function ContactInfo({
  icon,
  label,
  value,
}: ContactInfoProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
        {icon}
      </div>

      <div>
        <p className="text-xs text-white/55">{label}</p>
        <p className="mt-0.5 text-sm font-medium text-white">
          {value}
        </p>
      </div>
    </div>
  );
}

/* ===============================================================
   SUCCESS STATE
================================================================ */

interface SuccessStateProps {
  message: string;
  onReset: () => void;
  primaryColor: string;
}

function SuccessState({
  message,
  onReset,
  primaryColor,
}: SuccessStateProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex min-h-[480px] flex-col items-center justify-center text-center"
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-full"
        style={{
          backgroundColor: `${primaryColor}15`,
          color: primaryColor,
        }}
      >
        <CheckCircle2 className="h-8 w-8" />
      </div>

      <h2 className="mt-6 text-2xl font-semibold text-slate-900">
        Message sent
      </h2>

      <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
        {message}
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-7 text-sm font-semibold hover:underline"
        style={{
          color: primaryColor,
        }}
      >
        Send another message
      </button>
    </motion.div>
  );
}