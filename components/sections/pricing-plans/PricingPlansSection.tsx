
"use client";

import { useState } from "react";

const plans = [
  {
    name: "Essential",
    description: "For individuals building their next big idea.",
    monthly: 799,
    yearly: 599,
    features: [
      "Up to 3 active projects",
      "Core design components",
      "Responsive layouts",
      "Community support",
    ],
    featured: false,
  },
  {
    name: "Professional",
    description: "For teams ready to create without limits.",
    monthly: 1499,
    yearly: 1099,
    features: [
      "Unlimited projects",
      "Complete component library",
      "Advanced animations",
      "Priority support",
      "Commercial usage",
    ],
    featured: true,
  },
  {
    name: "Studio",
    description: "For growing teams and ambitious businesses.",
    monthly: 2999,
    yearly: 2299,
    features: [
      "Everything in Professional",
      "Team collaboration",
      "Custom design systems",
      "Dedicated assistance",
    ],
    featured: false,
  },
];

export function PricingPlansSection() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  return (
    <section className="pricing-motion relative overflow-hidden bg-[#F7F7F4] px-5 py-20 font-[Poppins] text-[#20211E] sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-amber-200/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-[10px] font-semibold tracking-[0.24em] text-[#8A6B36] sm:text-xs">
            SIMPLE PLANS / CLEAR VALUE
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-5xl lg:text-6xl">
            Invest in your next
            <span className="block text-neutral-400">great idea.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
            Choose a plan that fits your workflow. Straightforward options,
            thoughtful features and room to grow.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white p-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              aria-pressed={billing === "monthly"}
              className={`rounded-full px-5 py-2.5 text-xs font-medium transition duration-300 ${
                billing === "monthly"
                  ? "bg-[#20211E] text-white shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => setBilling("yearly")}
              aria-pressed={billing === "yearly"}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium transition duration-300 ${
                billing === "yearly"
                  ? "bg-[#20211E] text-white shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              Yearly
              <span
                className={`rounded-full px-2 py-1 text-[9px] ${
                  billing === "yearly"
                    ? "bg-lime-300 text-[#20211E]"
                    : "bg-lime-100 text-green-800"
                }`}
              >
                SAVE
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const price =
              billing === "monthly" ? plan.monthly : plan.yearly;

            return (
              <article
                key={plan.name}
                className={`pricing-card group relative flex flex-col overflow-hidden rounded-[26px] border p-7 transition duration-500 hover:-translate-y-1.5 sm:p-8 ${
                  plan.featured
                    ? "border-[#25261F] bg-[#25261F] text-white shadow-[0_25px_70px_rgba(30,30,20,0.15)] lg:-my-3 lg:py-11"
                    : "border-neutral-200/80 bg-white text-[#20211E] hover:border-neutral-300 hover:shadow-[0_20px_55px_rgba(30,30,20,0.07)]"
                }`}
              >
                {plan.featured && (
                  <div className="absolute right-0 top-0 rounded-bl-2xl bg-lime-300 px-4 py-2 text-[9px] font-semibold tracking-[0.14em] text-[#20211E]">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <p
                    className={`text-xs font-medium ${
                      plan.featured ? "text-white/60" : "text-neutral-500"
                    }`}
                  >
                    PLAN 0{index + 1}
                  </p>

                  <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                    {plan.name}
                  </h3>

                  <p
                    className={`mt-3 min-h-[48px] text-sm leading-6 ${
                      plan.featured ? "text-white/60" : "text-neutral-500"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div
                  className={`my-7 border-y py-6 ${
                    plan.featured ? "border-white/15" : "border-neutral-100"
                  }`}
                >
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-medium">₹</span>
                    <span
                      key={`${plan.name}-${billing}`}
                      className="pricing-number text-5xl font-semibold tracking-[-0.065em] sm:text-6xl"
                    >
                      {price.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <p
                    className={`mt-2 text-xs ${
                      plan.featured ? "text-white/50" : "text-neutral-400"
                    }`}
                  >
                    per month, billed {billing === "yearly" ? "annually" : "monthly"}
                  </p>
                </div>

                <p className="mb-5 text-xs font-semibold tracking-wide">
                  Whats included
                </p>

                <ul className="flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] ${
                          plan.featured
                            ? "bg-lime-300 text-[#20211E]"
                            : "bg-[#F0F0E9] text-[#525449]"
                        }`}
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span
                        className={`text-sm leading-6 ${
                          plan.featured ? "text-white/75" : "text-neutral-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() =>
                    alert(`${plan.name} selected (${billing} billing). Connect your checkout to activate purchases.`)
                  }
                  className={`mt-9 flex w-full items-center justify-between rounded-xl px-5 py-4 text-sm font-medium transition duration-300 ${
                    plan.featured
                      ? "bg-lime-300 text-[#20211E] hover:bg-lime-200"
                      : "border border-neutral-200 bg-white hover:border-[#25261F] hover:bg-[#25261F] hover:text-white"
                  }`}
                >
                  Choose {plan.name}
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </button>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs leading-6 text-neutral-400">
          Demo pricing for UI preview. Update plans, currency and billing
          terms before using this component for a real business.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 pt-5">
          <span className="text-[10px] font-medium tracking-[0.18em] text-neutral-400">
            PRICING SYSTEM / 004
          </span>
          <span className="text-xs text-neutral-400">
            Flexible by design. Clear by default.
          </span>
        </div>
      </div>
    </section>
  );
}
