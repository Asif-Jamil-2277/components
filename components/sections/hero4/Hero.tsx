"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";

import { heroContent } from "./hero.data";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero4-title"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#f8fafc]
        text-[#0b1220]
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[8%]
          h-[650px]
          w-[650px]
          -translate-x-1/2
          rounded-full
          bg-[#0056D2]/[0.055]
          blur-[110px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[30%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#60A5FA]/[0.07]
          blur-[120px]
        "
      />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <header
          className="
            flex
            items-center
            justify-between
            border-b
            border-slate-200/80
            py-5
          "
        >
          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <span className="text-lg font-bold tracking-[-0.04em]">
              YourBrand
            </span>

            <span className="h-2 w-2 rounded-full bg-[#0056D2]" />
          </Link>

          {/* Navigation */}

          <nav className="hidden items-center gap-8 md:flex">

            <Link
              href="#solutions"
              className="
                text-xs
                font-medium
                text-slate-500
                transition-colors
                hover:text-[#0056D2]
              "
            >
              Solutions
            </Link>

            <Link
              href="#process"
              className="
                text-xs
                font-medium
                text-slate-500
                transition-colors
                hover:text-[#0056D2]
              "
            >
              Process
            </Link>

            <Link
              href="#work"
              className="
                text-xs
                font-medium
                text-slate-500
                transition-colors
                hover:text-[#0056D2]
              "
            >
              Work
            </Link>

            <Link
              href="#about"
              className="
                text-xs
                font-medium
                text-slate-500
                transition-colors
                hover:text-[#0056D2]
              "
            >
              About
            </Link>

          </nav>

          {/* Contact */}

          <Link
            href="#contact"
            className="
              hidden
              items-center
              gap-2
              rounded-full
              bg-[#0b1220]
              px-5
              py-2.5
              text-xs
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-[#0056D2]
              md:inline-flex
            "
          >
            Lets Talk

            <ArrowUpRight size={14} />
          </Link>
        </header>

        {/* ===================================================
            HERO GRID
        ==================================================== */}

        <div
          className="
            grid
            min-h-[calc(100vh-81px)]
            items-center
            gap-12
            py-14
            lg:grid-cols-[0.86fr_1.14fr]
            lg:gap-6
            lg:py-16
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative z-20 max-w-[600px]"
          >

            {/* Eyebrow */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#0056D2]/10
                bg-[#0056D2]/[0.045]
                px-3.5
                py-2
              "
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0056D2]/10">
                <Sparkles
                  size={11}
                  className="text-[#0056D2]"
                />
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#0056D2]">
                {heroContent.eyebrow}
              </span>
            </motion.div>

            {/* Heading */}

            <h1
              id="hero4-title"
              className="
                max-w-[650px]
                text-[clamp(3.4rem,6vw,6.4rem)]
                font-semibold
                leading-[0.94]
                tracking-[-0.065em]
              "
            >
              {heroContent.title}

              <br />

              <span className="text-[#0056D2]">
                {heroContent.highlight}
              </span>
            </h1>

            {/* Description */}

            <p
              className="
                mt-7
                max-w-[470px]
                text-sm
                leading-7
                text-slate-500
                sm:text-base
              "
            >
              {heroContent.description}
            </p>

            {/* CTA */}

            <div className="mt-8 flex flex-wrap items-center gap-5">

              <Link
                href={heroContent.primaryCta.href}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#0056D2]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_12px_35px_rgba(0,86,210,0.2)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#0047b3]
                  hover:shadow-[0_16px_45px_rgba(0,86,210,0.28)]
                "
              >
                {heroContent.primaryCta.label}

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                  <ArrowRight
                    size={14}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                    "
                  />
                </span>
              </Link>

              <Link
                href={heroContent.secondaryCta.href}
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-slate-700
                  transition-colors
                  hover:text-[#0056D2]
                "
              >
                {heroContent.secondaryCta.label}

                <ArrowUpRight size={15} />
              </Link>

            </div>

            {/* Small trust statement */}

            <div className="mt-10 flex items-center gap-3">

              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="
                      h-7
                      w-7
                      rounded-full
                      border-2
                      border-[#f8fafc]
                      bg-slate-200
                    "
                  />
                ))}
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-700">
                  Built for modern teams
                </p>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  Strategy · Design · Technology
                </p>
              </div>

            </div>
          </motion.div>

          {/* =================================================
              RIGHT VISUAL
          ================================================== */}

          <div
            className="
              relative
              mx-auto
              h-[500px]
              w-full
              max-w-[720px]
              sm:h-[580px]
              lg:h-[650px]
            "
          >

            {/* =================================================
                CENTRAL GLOW
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              aria-hidden="true"
              className="
                absolute
                left-1/2
                top-1/2
                h-[430px]
                w-[430px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#0056D2]/10
                blur-[80px]
              "
            />

            {/* =================================================
                IMAGE FRAME
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="
                absolute
                left-1/2
                top-1/2
                h-[420px]
                w-[310px]
                -translate-x-1/2
                -translate-y-1/2
                overflow-hidden
                rounded-[42%_42%_30%_30%]
                bg-white
                shadow-[0_30px_100px_rgba(15,23,42,0.13)]
                sm:h-[510px]
                sm:w-[380px]
              "
            >

              <Image
                src={heroContent.visual.src}
                alt={heroContent.visual.alt}
                fill
                priority
                sizes="(max-width: 768px) 380px, 420px"
                className="
                  object-cover
                  object-center
                "
              />

              {/* soft overlay */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#0056D2]/10
                  via-transparent
                  to-white/10
                "
              />

            </motion.div>

            {/* =================================================
                FLOATING AUTOMATION CARD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
                y: 10,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -7, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.7,
                  delay: 0.65,
                },
                x: {
                  duration: 0.7,
                  delay: 0.65,
                  ease: "easeOut",
                },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="
                absolute
                right-0
                top-[14%]
                z-30
                w-[190px]
                rounded-2xl
                border
                border-slate-200
                bg-white/95
                p-4
                shadow-[0_20px_50px_rgba(15,23,42,0.10)]
                backdrop-blur-md
                sm:w-[220px]
              "
            >

              <div className="flex items-start justify-between">

                <div>
                  <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-slate-400">
                    {heroContent.automation.label}
                  </p>

                  <p className="mt-1 text-2xl font-semibold tracking-[-0.04em] text-slate-900">
                    {heroContent.automation.value}
                  </p>
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Check size={15} />
                </div>

              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "98.4%" }}
                  transition={{
                    duration: 1.4,
                    delay: 0.9,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full bg-[#0056D2]"
                />
              </div>

              <p className="mt-2 text-[9px] text-emerald-600">
                {heroContent.automation.change}
              </p>

            </motion.div>

            {/* =================================================
                AI AGENT CARD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.8,
                ease: "easeOut",
              }}
              className="
                absolute
                bottom-[17%]
                left-0
                z-30
                w-[205px]
                rounded-2xl
                border
                border-slate-200
                bg-white/95
                p-4
                shadow-[0_20px_50px_rgba(15,23,42,0.10)]
                backdrop-blur-md
                sm:w-[230px]
              "
            >

              <div className="flex items-center gap-3">

                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#0056D2]/10">

                  <span className="absolute h-2 w-2 animate-pulse rounded-full bg-[#0056D2]" />

                  <Sparkles
                    size={17}
                    className="text-[#0056D2]"
                  />

                </div>

                <div>

                  <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-slate-400">
                    {heroContent.agent.eyebrow}
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {heroContent.agent.title}
                  </p>

                </div>

              </div>

              <div className="mt-4 flex items-center gap-2">

                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                <span className="text-[9px] text-slate-400">
                  Running automatically
                </span>

              </div>

            </motion.div>

            {/* =================================================
                SMALL METRIC CARD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 1,
                ease: "easeOut",
              }}
              className="
                absolute
                bottom-[7%]
                right-[4%]
                z-30
                hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-4
                py-3
                shadow-[0_15px_40px_rgba(15,23,42,0.08)]
                sm:block
              "
            >

              <p className="text-[9px] uppercase tracking-[0.12em] text-slate-400">
                Productivity
              </p>

              <p className="mt-1 text-lg font-semibold text-slate-900">
                +42%
              </p>

            </motion.div>

          </div>
        </div>

        {/* ===================================================
            TRUSTED BY
        ==================================================== */}

        <div className="border-t border-slate-200/80 py-6">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Trusted technology ecosystem
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">

              {heroContent.trusted.map((brand) => (
                <span
                  key={brand}
                  className="
                    text-xs
                    font-semibold
                    tracking-[-0.02em]
                    text-slate-400
                    transition-colors
                    duration-300
                    hover:text-slate-700
                  "
                >
                  {brand}
                </span>
              ))}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}