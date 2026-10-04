"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type AuthMode = "signin" | "signup";

export interface AuthFormProps {
  defaultMode?: AuthMode;
  brandName?: string;
  welcomeTitle?: string;
  welcomeDescription?: string;
  signInTitle?: string;
  signUpTitle?: string;
  primaryColor?: string;
  onSubmit?: (data: {
    mode: AuthMode;
    name?: string;
    email: string;
    password: string;
  }) => void;
}

export default function AuthForm({
  defaultMode = "signup",
  brandName = "YourBrand",
  welcomeTitle = "Welcome back!",
  welcomeDescription =
    "Enter your personal details and start your journey with us.",
  signInTitle = "Welcome Back",
  signUpTitle = "Create Account",
  primaryColor = "#e11d48",
  onSubmit,
}: AuthFormProps) {
  const [mode, setMode] = useState<AuthMode>(defaultMode);
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isSignUp = mode === "signup";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit?.({
      mode,
      ...(isSignUp ? { name } : {}),
      email,
      password,
    });
  };

  const switchMode = () => {
    setMode((current) =>
      current === "signup" ? "signin" : "signup",
    );

    setShowPassword(false);
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-8 sm:px-6">
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.14)]"
        style={
          {
            "--auth-primary": primaryColor,
          } as React.CSSProperties
        }
      >
        <div className="grid min-h-[620px] md:grid-cols-2">
          {/* =====================================================
              LEFT / WELCOME PANEL
          ====================================================== */}

          <motion.div
            layout
            className={`relative hidden overflow-hidden md:flex ${
              isSignUp ? "order-1" : "order-2"
            }`}
            style={{
              backgroundColor: "var(--auth-primary)",
            }}
          >
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

            <div className="relative z-10 flex w-full flex-col items-center justify-center px-12 text-center text-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  initial={{
                    opacity: 0,
                    x: isSignUp ? -30 : 30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: isSignUp ? 30 : -30,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="max-w-sm"
                >
                  <div className="mb-8 text-2xl font-bold tracking-tight">
                    {brandName}
                  </div>

                  <h2 className="text-4xl font-semibold tracking-tight">
                    {isSignUp ? welcomeTitle : "Hello, Friend!"}
                  </h2>

                  <p className="mt-5 text-sm leading-6 text-white/80">
                    {isSignUp
                      ? welcomeDescription
                      : "New here? Create your account and join us today."}
                  </p>

                  <button
                    type="button"
                    onClick={switchMode}
                    className="mt-8 rounded-full border border-white/70 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-slate-900"
                  >
                    {isSignUp ? "SIGN IN" : "SIGN UP"}
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* =====================================================
              FORM PANEL
          ====================================================== */}

          <motion.div
            layout
            className={`relative flex items-center bg-white px-6 py-12 sm:px-10 md:px-14 lg:px-16 ${
              isSignUp ? "order-2" : "order-1"
            }`}
          >
            <div className="mx-auto w-full max-w-md">
              {/* Mobile brand */}
              <div className="mb-8 text-center md:hidden">
                <span
                  className="text-xl font-bold"
                  style={{
                    color: primaryColor,
                  }}
                >
                  {brandName}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  initial={{
                    opacity: 0,
                    x: isSignUp ? 30 : -30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: isSignUp ? -30 : 30,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Heading */}
                  <div className="text-center">
                    <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
                      {isSignUp ? signUpTitle : signInTitle}
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                      {isSignUp
                        ? "Use your email to create your account"
                        : "Enter your details to continue"}
                    </p>
                  </div>

                  {/* Social buttons */}
                  <div className="mt-7 grid grid-cols-3 gap-2">
                    {["G", "f", "in"].map((social) => (
                      <button
                        key={social}
                        type="button"
                        className="flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-600 transition-all hover:border-slate-300 hover:bg-slate-50"
                        aria-label={`Continue with ${social}`}
                      >
                        {social}
                      </button>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="my-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-slate-200" />

                    <span className="text-xs text-slate-400">
                      OR
                    </span>

                    <div className="h-px flex-1 bg-slate-200" />
                  </div>

                  {/* Form */}
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Name */}
                    {isSignUp && (
                      <div>
                        <label
                          htmlFor="auth-name"
                          className="mb-2 block text-xs font-medium text-slate-700"
                        >
                          Full name
                        </label>

                        <div className="relative">
                          <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                          <input
                            id="auth-name"
                            type="text"
                            value={name}
                            onChange={(event) =>
                              setName(event.target.value)
                            }
                            placeholder="John Doe"
                            autoComplete="name"
                            required
                            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[var(--auth-primary)] focus:bg-white focus:ring-4 focus:ring-[var(--auth-primary)]/10"
                          />
                        </div>
                      </div>
                    )}

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="auth-email"
                        className="mb-2 block text-xs font-medium text-slate-700"
                      >
                        Email address
                      </label>

                      <div className="relative">
                        <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                        <input
                          id="auth-email"
                          type="email"
                          value={email}
                          onChange={(event) =>
                            setEmail(event.target.value)
                          }
                          placeholder="you@example.com"
                          autoComplete="email"
                          required
                          className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[var(--auth-primary)] focus:bg-white focus:ring-4 focus:ring-[var(--auth-primary)]/10"
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <label
                        htmlFor="auth-password"
                        className="mb-2 block text-xs font-medium text-slate-700"
                      >
                        Password
                      </label>

                      <div className="relative">
                        <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                        <input
                          id="auth-password"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(event) =>
                            setPassword(event.target.value)
                          }
                          placeholder="••••••••"
                          autoComplete={
                            isSignUp
                              ? "new-password"
                              : "current-password"
                          }
                          required
                          className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-11 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[var(--auth-primary)] focus:bg-white focus:ring-4 focus:ring-[var(--auth-primary)]/10"
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowPassword((current) => !current)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700"
                          aria-label={
                            showPassword
                              ? "Hide password"
                              : "Show password"
                          }
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Forgot password */}
                    {!isSignUp && (
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="text-xs font-medium transition-colors hover:underline"
                          style={{
                            color: primaryColor,
                          }}
                        >
                          Forgot password?
                        </button>
                      </div>
                    )}

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="group mt-2 h-11 w-full rounded-xl text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5"
                      style={{
                        backgroundColor: primaryColor,
                      }}
                    >
                      {isSignUp ? "Create Account" : "Sign In"}

                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>

                  {/* Mobile switch */}
                  <div className="mt-7 text-center text-sm text-slate-500 md:hidden">
                    {isSignUp
                      ? "Already have an account?"
                      : "Don't have an account?"}{" "}
                    <button
                      type="button"
                      onClick={switchMode}
                      className="font-semibold"
                      style={{
                        color: primaryColor,
                      }}
                    >
                      {isSignUp ? "Sign in" : "Sign up"}
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}