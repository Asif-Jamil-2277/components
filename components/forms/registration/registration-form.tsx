"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  User,
} from "lucide-react";

export interface RegistrationFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  primaryColor?: string;
  onSubmit?: (data: RegistrationFormData) => void;
}

export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const defaultValues: RegistrationFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export default function RegistrationForm({
  title = "Create your account",
  description = "Start your journey with a simple and secure account.",
  buttonText = "Create account",
  primaryColor = "#2563eb",
  onSubmit,
}: RegistrationFormProps) {
  const [formData, setFormData] =
    useState<RegistrationFormData>(defaultValues);

  const [showPassword, setShowPassword] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (
    field: keyof RegistrationFormData,
    value: string,
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!accepted) return;

    onSubmit?.(formData);
    setSubmitted(true);
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#fafcff] px-4 py-12 sm:px-6 lg:px-8"
      style={
        {
          "--form-primary": primaryColor,
        } as React.CSSProperties
      }
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ backgroundColor: primaryColor }}
      />

      {/* Decorative circles */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full border border-slate-200/70"
        animate={{
          y: [0, 25, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 bottom-10 h-80 w-80 rounded-full border border-slate-200/70"
        animate={{
          y: [0, -30, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full max-w-5xl overflow-hidden lg:grid-cols-[0.9fr_1.1fr]">
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative hidden min-h-[620px] overflow-hidden rounded-l-[2rem] bg-slate-950 p-10 lg:flex lg:flex-col lg:justify-between"
          >
            {/* Ambient light */}
            <motion.div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
              style={{ backgroundColor: primaryColor }}
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.2, 0.35, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Orbit */}
            <motion.div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <span
                className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full shadow-[0_0_18px_currentColor]"
                style={{ color: primaryColor, backgroundColor: primaryColor }}
              />
            </motion.div>

            <motion.div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
              animate={{ rotate: -360 }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <span
                className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full shadow-[0_0_18px_currentColor]"
                style={{ color: primaryColor, backgroundColor: primaryColor }}
              />
            </motion.div>

            <div className="relative z-10">
              <div className="mb-10 flex items-center gap-2">
                <div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: primaryColor }}
                />
                <span className="text-sm font-semibold tracking-tight text-white">
                  YourBrand
                </span>
              </div>

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                Get started
              </span>

              <h2 className="mt-5 max-w-sm text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white">
                Build something
                <span className="block text-white/45">
                  worth remembering.
                </span>
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-6 text-white/50">
                Create your account and get access to everything you need
                to move your work forward.
              </p>
            </div>

            {/* Bottom status */}
            <div className="relative z-10 flex items-center gap-3 text-xs text-white/40">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: primaryColor }}
              />
              Secure registration
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative bg-white px-6 py-10 sm:px-10 lg:min-h-[620px] lg:px-14 lg:py-14"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {/* Header */}
                  <div className="mb-10">
                    <div
                      className="mb-5 flex h-10 w-10 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: `${primaryColor}12`,
                        color: primaryColor,
                      }}
                    >
                      <User size={18} strokeWidth={1.8} />
                    </div>

                    <h1 className="text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">
                      {title}
                    </h1>

                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                      {description}
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-7"
                  >
                    {/* Name */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field
                        label="First name"
                        value={formData.firstName}
                        onChange={(value) =>
                          updateField("firstName", value)
                        }
                        placeholder="John"
                        required
                      />

                      <Field
                        label="Last name"
                        value={formData.lastName}
                        onChange={(value) =>
                          updateField("lastName", value)
                        }
                        placeholder="Doe"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="registration-email"
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
                          id="registration-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(event) =>
                            updateField(
                              "email",
                              event.target.value,
                            )
                          }
                          placeholder="you@example.com"
                          className="w-full border-0 border-b border-slate-200 bg-transparent py-3 pl-7 pr-2 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[var(--form-primary)]"
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <label
                        htmlFor="registration-password"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Password
                      </label>

                      <div className="group relative">
                        <LockKeyhole
                          size={17}
                          className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[var(--form-primary)]"
                        />

                        <input
                          id="registration-password"
                          type={
                            showPassword
                              ? "text"
                              : "password"
                          }
                          required
                          minLength={8}
                          value={formData.password}
                          onChange={(event) =>
                            updateField(
                              "password",
                              event.target.value,
                            )
                          }
                          placeholder="Minimum 8 characters"
                          className="w-full border-0 border-b border-slate-200 bg-transparent py-3 pl-7 pr-10 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[var(--form-primary)]"
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowPassword((current) => !current)
                          }
                          aria-label={
                            showPassword
                              ? "Hide password"
                              : "Show password"
                          }
                          className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700"
                        >
                          {showPassword ? (
                            <EyeOff size={17} />
                          ) : (
                            <Eye size={17} />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Terms */}
                    <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-500">
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked={accepted}
                        onClick={() =>
                          setAccepted((current) => !current)
                        }
                        className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-all"
                        style={{
                          borderColor: accepted
                            ? primaryColor
                            : "#cbd5e1",
                          backgroundColor: accepted
                            ? primaryColor
                            : "transparent",
                        }}
                      >
                        {accepted && (
                          <Check
                            size={11}
                            strokeWidth={3}
                            className="text-white"
                          />
                        )}
                      </button>

                      <span>
                        I agree to the{" "}
                        <button
                          type="button"
                          className="font-medium text-slate-900 underline underline-offset-4"
                        >
                          Terms of Service
                        </button>{" "}
                        and{" "}
                        <button
                          type="button"
                          className="font-medium text-slate-900 underline underline-offset-4"
                        >
                          Privacy Policy
                        </button>
                        .
                      </span>
                    </label>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white shadow-lg transition-shadow hover:shadow-xl"
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
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[500px] flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 15,
                    }}
                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <Check size={28} />
                  </motion.div>

                  <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950">
                    Account created
                  </h2>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                    Your registration was completed successfully.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------
   Reusable Field
--------------------------------- */

interface FieldProps {
  label: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange: (value: string) => void;
}

function Field({
  label,
  value,
  placeholder,
  required,
  onChange,
}: FieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <input
        type="text"
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full border-0 border-b border-slate-200 bg-transparent px-0 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[var(--form-primary)]"
      />
    </div>
  );
}