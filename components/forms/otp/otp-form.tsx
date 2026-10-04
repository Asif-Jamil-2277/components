"use client";

import {
  ClipboardEvent,
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Mail,
  RefreshCw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

interface OtpFormProps {
  brandName?: string;
  title?: string;
  description?: string;
  email?: string;
  buttonText?: string;
  otpLength?: number;
  countdown?: number;
  onSubmit?: (otp: string) => void;
  onResend?: () => void;
}

export default function OtpForm({
  brandName = "YourBrand",
  title = "Verify your account",
  description = "We've sent a verification code to",
  email = "you@example.com",
  buttonText = "Verify code",
  otpLength = 6,
  countdown = 30,
  onSubmit,
  onResend,
}: OtpFormProps) {
  const [otp, setOtp] = useState<string[]>(
    Array.from({ length: otpLength }, () => "")
  );

  const [timeLeft, setTimeLeft] = useState(countdown);
  const [verified, setVerified] = useState(false);

  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = window.setInterval(() => {
      setTimeLeft((current) => Math.max(0, current - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [timeLeft]);

  const handleChange = (value: string, index: number) => {
    const digit = value.replace(/\D/g, "").slice(-1);

    const updated = [...otp];
    updated[index] = digit;

    setOtp(updated);

    if (digit && index < otpLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      event.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (
      event.key === "ArrowRight" &&
      index < otpLength - 1
    ) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (
    event: ClipboardEvent<HTMLInputElement>
  ) => {
    event.preventDefault();

    const pasted = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, otpLength);

    if (!pasted) return;

    const updated = Array.from(
      { length: otpLength },
      (_, index) => pasted[index] ?? ""
    );

    setOtp(updated);

    const nextIndex = Math.min(
      pasted.length,
      otpLength - 1
    );

    inputRefs.current[nextIndex]?.focus();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const code = otp.join("");

    if (code.length !== otpLength) return;

    setVerified(true);
    onSubmit?.(code);
  };

  const handleResend = () => {
    if (timeLeft > 0) return;

    setTimeLeft(countdown);
    setOtp(Array.from({ length: otpLength }, () => ""));
    inputRefs.current[0]?.focus();

    onResend?.();
  };

  const formattedTime = `00:${String(timeLeft).padStart(2, "0")}`;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-5 py-10 font-sans text-slate-950 sm:px-8">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/50 blur-[100px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex justify-center"
        >
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-xs font-semibold text-white">
              {brandName.charAt(0).toUpperCase()}
            </div>

            <span className="text-sm font-semibold tracking-tight">
              {brandName}
            </span>
          </div>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
          {/* Left visual */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hidden lg:flex lg:justify-center"
          >
            <div className="relative flex h-[460px] w-[460px] items-center justify-center">
              {/* Orbit 1 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[380px] w-[380px] rounded-full border border-slate-200"
              >
                <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.9)]" />
              </motion.div>

              {/* Orbit 2 */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 13,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[270px] w-[270px] rounded-full border border-slate-200/80"
              >
                <span className="absolute bottom-4 right-7 h-2 w-2 rounded-full bg-violet-500 shadow-[0_0_16px_rgba(139,92,246,0.8)]" />
              </motion.div>

              {/* Orbit 3 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[170px] w-[170px] rounded-full border border-blue-100"
              >
                <span className="absolute left-1/2 bottom-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />
              </motion.div>

              {/* Center */}
              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white bg-white shadow-[0_25px_80px_rgba(37,99,235,0.18)]"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-950 text-white">
                  <ShieldCheck
                    size={36}
                    strokeWidth={1.5}
                  />
                </div>
              </motion.div>

              {/* Floating label */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-0 top-20 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-slate-600 shadow-lg"
              >
                <Check
                  size={14}
                  className="text-emerald-500"
                />
                Secure verification
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-20 left-0 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-slate-600 shadow-lg"
              >
                <Mail
                  size={14}
                  className="text-blue-500"
                />
                Email protected
              </motion.div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.section
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mx-auto max-w-md">
              {!verified ? (
                <>
                  <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                    <Sparkles size={14} />
                    Verification
                  </div>

                  <h1 className="text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
                    {title}
                  </h1>

                  <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
                    {description}{" "}
                    <span className="font-medium text-slate-800">
                      {email}
                    </span>
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-9"
                  >
                    <div className="flex gap-2.5 sm:gap-3">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          ref={(element) => {
                            inputRefs.current[index] =
                              element;
                          }}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          aria-label={`Verification digit ${
                            index + 1
                          }`}
                          onChange={(event) =>
                            handleChange(
                              event.target.value,
                              index
                            )
                          }
                          onKeyDown={(event) =>
                            handleKeyDown(event, index)
                          }
                          onPaste={handlePaste}
                          className="h-14 min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white text-center text-xl font-semibold text-slate-950 outline-none transition-all hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 sm:h-16"
                        />
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={otp.join("").length !== otpLength}
                      className="mt-5 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.15)] transition-all hover:shadow-[0_16px_35px_rgba(15,23,42,0.22)] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {buttonText}
                      <ArrowRight size={17} />
                    </motion.button>
                  </form>

                  <div className="mt-7 flex items-center justify-between text-sm">
                    <button
                      type="button"
                      onClick={() =>
                        inputRefs.current[0]?.focus()
                      }
                      className="flex items-center gap-2 font-medium text-slate-500 transition-colors hover:text-slate-950"
                    >
                      <ArrowLeft size={15} />
                      Change email
                    </button>

                    {timeLeft > 0 ? (
                      <span className="text-slate-400">
                        Resend in{" "}
                        <span className="font-medium text-slate-600">
                          {formattedTime}
                        </span>
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={handleResend}
                        className="flex items-center gap-2 font-medium text-blue-600 transition-colors hover:text-blue-700"
                      >
                        <RefreshCw size={15} />
                        Resend code
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.94,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <Check size={28} />
                  </div>

                  <h1 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                    You are verified.
                  </h1>

                  <p className="mt-5 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
                    Your verification code has been confirmed
                    successfully. You can continue to your
                    account.
                  </p>

                  <motion.button
                    whileHover={{ x: 3 }}
                    type="button"
                    className="mt-8 flex items-center gap-2 text-sm font-semibold text-slate-950"
                  >
                    Continue
                    <ArrowRight size={17} />
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}