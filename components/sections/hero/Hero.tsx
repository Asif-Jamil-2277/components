"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { HeroVisual } from "./HeroVisual";
import { heroContent } from "./hero.data";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const initialAnimation = shouldReduceMotion
    ? false
    : {
        opacity: 0,
        y: 24,
      };

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-[#f8fafc] text-slate-950"
    >
      {/* Background Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.045) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Subtle Blue Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_45%,rgba(0,86,210,0.07),transparent_28%)]"
      />

      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <div className="grid min-h-[calc(100svh-80px)] items-center gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          
          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div className="relative z-10 lg:col-span-5 lg:pr-8">

            {/* Eyebrow */}
            <motion.div
              initial={initialAnimation}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              <span className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0056D2]">
                <span className="h-px w-8 bg-[#0056D2]" />
                {heroContent.eyebrow}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              id="hero-title"
              initial={initialAnimation}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease: "easeOut",
              }}
              className="max-w-[680px] text-[clamp(3.25rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.055em]"
              style={{
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {heroContent.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={initialAnimation}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.16,
                ease: "easeOut",
              }}
              className="mt-8 max-w-[540px] text-base leading-7 text-slate-600 sm:text-lg"
            >
              {heroContent.description}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={initialAnimation}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.24,
                ease: "easeOut",
              }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              {/* Primary CTA */}
              <Link
                href={heroContent.primaryCta.href}
                className="group inline-flex h-12 items-center justify-center gap-3 bg-[#0056D2] px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#0045ad] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056D2] focus-visible:ring-offset-2"
              >
                {heroContent.primaryCta.label}

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              {/* Secondary CTA */}
              <Link
                href={heroContent.secondaryCta.href}
                className="group inline-flex h-12 items-center justify-center px-5 text-sm font-semibold text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                {heroContent.secondaryCta.label}

                <span className="ml-2 h-px w-5 bg-slate-400 transition-all duration-300 group-hover:w-8 group-hover:bg-slate-900" />
              </Link>
            </motion.div>

            {/* Metadata */}
            <motion.div
              initial={initialAnimation}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.32,
                ease: "easeOut",
              }}
              className="mt-12 flex items-center gap-6 border-t border-slate-200 pt-5"
            >
              {heroContent.meta.map((item) => (
                <div key={item.label}>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.value}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* =========================
              RIGHT VISUAL
          ========================== */}
          <div className="relative lg:col-span-7">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}