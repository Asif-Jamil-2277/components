"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  HeartPulse,
  Moon,
  Activity,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white font-[family-name:var(--font-poppins)] text-[#111827]">

      {/* =====================================================
          SOFT BLUE BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[48%]
          h-[620px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#1683ff]/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          left-1/2
          h-[400px]
          w-[800px]
          -translate-x-1/2
          rounded-full
          bg-[#5daeff]/10
          blur-[100px]
        "
      />

      <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-10">

        {/* =================================================
            NAVBAR
        ================================================== */}

        <header
          className="
            flex
            h-[72px]
            items-center
            justify-between
            border-b
            border-slate-200/80
          "
        >

          {/* LOGO */}

          <Link
            href="/"
            className="
              flex
              items-center
              gap-2
              text-[16px]
              font-semibold
              tracking-[-0.02em]
              text-[#111827]
            "
          >
            YourBrand

            <span className="h-2 w-2 rounded-full bg-[#087cff]" />
          </Link>


          {/* NAV */}

          <nav className="hidden items-center gap-8 md:flex">

            <Link
              href="#platform"
              className="
                text-[11px]
                font-medium
                text-slate-500
                transition
                hover:text-[#087cff]
              "
            >
              Platform
            </Link>

            <Link
              href="#solutions"
              className="
                text-[11px]
                font-medium
                text-slate-500
                transition
                hover:text-[#087cff]
              "
            >
              Solutions
            </Link>

            <Link
              href="#resources"
              className="
                text-[11px]
                font-medium
                text-slate-500
                transition
                hover:text-[#087cff]
              "
            >
              Resources
            </Link>

            <Link
              href="#about"
              className="
                text-[11px]
                font-medium
                text-slate-500
                transition
                hover:text-[#087cff]
              "
            >
              About
            </Link>

          </nav>


          {/* CTA */}

          <Link
            href="#contact"
            className="
              hidden
              items-center
              gap-2
              rounded-full
              bg-[#111827]
              px-5
              py-2.5
              text-[11px]
              font-medium
              text-white
              transition
              hover:bg-[#087cff]
              md:inline-flex
            "
          >
            Get Started

            <ArrowUpRight size={13} />

          </Link>

        </header>


        {/* =================================================
            HERO CONTENT
        ================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-[760px]
            pt-[76px]
            text-center
            sm:pt-[88px]
          "
        >

          {/* BADGE */}

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#087cff]/15
                bg-[#087cff]/[0.035]
                px-4
                py-2
              "
            >

              <Sparkles
                size={12}
                className="text-[#087cff]"
              />

              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.14em]
                  text-[#087cff]
                "
              >
                AI-Powered Digital Platform
              </span>

            </div>

          </motion.div>


          {/* HEADING */}

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
            }}
            className="
              mx-auto
              mt-7
              max-w-[720px]
              text-[clamp(2.8rem,5vw,4.55rem)]
              font-semibold
              leading-[1.06]
              tracking-[-0.045em]
              text-[#111827]
            "
          >

            AI-powered technology

            <br />

            <span className="text-[#087cff]">
              built for what&apos;s next.
            </span>

          </motion.h1>


          {/* DESCRIPTION */}

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.18,
            }}
            className="
              mx-auto
              mt-5
              max-w-[540px]
              text-[13px]
              font-normal
              leading-[1.8]
              text-slate-500
              sm:text-[14px]
            "
          >
            Intelligent tools that simplify your workflow,
            automate everyday tasks, and help you work smarter.
          </motion.p>


          {/* BUTTONS */}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.26,
            }}
            className="
              mt-7
              flex
              items-center
              justify-center
              gap-3
            "
          >

            <Link
              href="#contact"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#087cff]
                px-5
                py-3
                text-[11px]
                font-medium
                text-white
                shadow-[0_10px_28px_rgba(8,124,255,0.18)]
                transition
                hover:-translate-y-0.5
                hover:bg-[#006de5]
              "
            >
              Get Started

              <span
                className="
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-white/15
                "
              >
                <ArrowRight size={11} />
              </span>

            </Link>


            <Link
              href="#platform"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-slate-200
                bg-white
                px-5
                py-3
                text-[11px]
                font-medium
                text-slate-600
                shadow-[0_4px_15px_rgba(15,23,42,0.05)]
                transition
                hover:border-[#087cff]/30
                hover:text-[#087cff]
              "
            >
              Explore Platform

              <ArrowUpRight size={12} />

            </Link>

          </motion.div>

        </div>


        {/* =================================================
            MAIN VISUAL
        ================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-14
            h-[500px]
            max-w-[1050px]
            sm:mt-16
            sm:h-[560px]
          "
        >

          {/* CENTRAL GLOW */}

          <motion.div
            animate={{
              scale: [1, 1.04, 1],
              opacity: [0.45, 0.6, 0.45],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-[48%]
              h-[430px]
              w-[620px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#2494ff]/14
              blur-[90px]
            "
          />


          {/* =================================================
              LEFT CARD
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -4, 0],
            }}
            transition={{
              opacity: {
                duration: 0.6,
                delay: 0.5,
              },
              x: {
                duration: 0.6,
                delay: 0.5,
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
              absolute
              left-0
              top-[37%]
              z-30
              w-[190px]
              rounded-2xl
              border
              border-slate-100
              bg-white
              p-4
              shadow-[0_20px_50px_rgba(15,23,42,0.09)]
              sm:w-[205px]
            "
          >

            <div className="flex items-start justify-between">

              <div>

                <p className="text-[9px] font-medium text-slate-400">
                  Health Score
                </p>

                <p className="mt-1 text-[22px] font-semibold tracking-[-0.04em] text-slate-900">
                  94.8%
                </p>

              </div>

              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#087cff]/10
                "
              >
                <Activity
                  size={14}
                  className="text-[#087cff]"
                />
              </div>

            </div>

            <div
              className="
                mt-3
                h-1.5
                overflow-hidden
                rounded-full
                bg-slate-100
              "
            >
              <div
                className="
                  h-full
                  w-[94.8%]
                  rounded-full
                  bg-[#087cff]
                "
              />
            </div>

            <p className="mt-2 text-[9px] text-slate-400">
              System efficiency
            </p>

          </motion.div>


          {/* =================================================
              RIGHT CARD
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, 4, 0],
            }}
            transition={{
              opacity: {
                duration: 0.6,
                delay: 0.65,
              },
              x: {
                duration: 0.6,
                delay: 0.65,
              },
              y: {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
              absolute
              right-0
              top-[43%]
              z-30
              w-[205px]
              rounded-2xl
              border
              border-slate-100
              bg-white
              p-4
              shadow-[0_20px_50px_rgba(15,23,42,0.09)]
              sm:w-[220px]
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  relative
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#087cff]/10
                "
              >

                <HeartPulse
                  size={17}
                  className="text-[#087cff]"
                />

                <span
                  className="
                    absolute
                    right-1
                    top-1
                    h-2
                    w-2
                    rounded-full
                    bg-emerald-500
                  "
                />

              </div>

              <div>

                <p
                  className="
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.1em]
                    text-slate-400
                  "
                >
                  AI Assistant
                </p>

                <p className="mt-1 text-[13px] font-semibold text-slate-900">
                  Ready to help
                </p>

              </div>

            </div>

            <div className="mt-3 flex items-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

              <span className="text-[9px] text-slate-400">
                Online
              </span>

            </div>

          </motion.div>


          {/* =================================================
              PHONE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.85,
              delay: 0.35,
              ease: "easeOut",
            }}
            className="
              absolute
              bottom-[-35px]
              left-1/2
              z-20
              h-[455px]
              w-[255px]
              -translate-x-1/2
              overflow-hidden
              rounded-[38px]
              border-[6px]
              border-[#111827]
              bg-white
              shadow-[0_35px_80px_rgba(15,23,42,0.18)]
              sm:h-[505px]
              sm:w-[285px]
            "
          >

            {/* Dynamic Island */}

            <div
              className="
                absolute
                left-1/2
                top-2.5
                z-30
                h-[20px]
                w-[88px]
                -translate-x-1/2
                rounded-full
                bg-[#111827]
              "
            />


            {/* PHONE SCREEN */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-[#0c8cff]
                via-[#159cff]
                to-[#0072dc]
              "
            >

              {/* App Header */}

              <div className="px-5 pt-12 text-white">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-[9px] opacity-70">
                      Good morning
                    </p>

                    <p className="mt-1 text-[17px] font-semibold">
                      Your AI Health
                    </p>

                  </div>

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-white/15
                    "
                  >
                    <Sparkles size={14} />
                  </div>

                </div>


                {/* Health Circle */}

                <div
                  className="
                    mx-auto
                    mt-10
                    flex
                    h-[155px]
                    w-[155px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/25
                    bg-white/10
                  "
                >

                  <div
                    className="
                      flex
                      h-[120px]
                      w-[120px]
                      flex-col
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/30
                      bg-white/10
                      backdrop-blur
                    "
                  >

                    <HeartPulse size={22} />

                    <span className="mt-2 text-[28px] font-semibold">
                      94
                    </span>

                    <span className="text-[9px] opacity-70">
                      Excellent
                    </span>

                  </div>

                </div>


                {/* Stats */}

                <div className="mt-9 grid grid-cols-2 gap-3">

                  <div
                    className="
                      rounded-2xl
                      bg-white/12
                      p-3
                      backdrop-blur
                    "
                  >

                    <div className="flex items-center gap-2">

                      <Activity size={13} />

                      <span className="text-[8px] opacity-70">
                        Heart Rate
                      </span>

                    </div>

                    <p className="mt-2 text-[18px] font-semibold">
                      72
                    </p>

                    <p className="text-[8px] opacity-60">
                      BPM
                    </p>

                  </div>


                  <div
                    className="
                      rounded-2xl
                      bg-white/12
                      p-3
                      backdrop-blur
                    "
                  >

                    <div className="flex items-center gap-2">

                      <Moon size={13} />

                      <span className="text-[8px] opacity-70">
                        Sleep
                      </span>

                    </div>

                    <p className="mt-2 text-[18px] font-semibold">
                      7h 45m
                    </p>

                    <p className="text-[8px] opacity-60">
                      Last night
                    </p>

                  </div>

                </div>

              </div>


              {/* Bottom navigation */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  flex
                  justify-around
                  border-t
                  border-white/10
                  bg-black/10
                  px-4
                  py-4
                  backdrop-blur
                "
              >

                <span className="text-[8px] font-medium">
                  Home
                </span>

                <span className="text-[8px] opacity-50">
                  Insights
                </span>

                <span className="text-[8px] opacity-50">
                  Profile
                </span>

              </div>

            </div>

          </motion.div>


          {/* =================================================
              BOTTOM FLOATING CARD
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: 1,
              y: [0, -3, 0],
            }}
            transition={{
              opacity: {
                duration: 0.6,
                delay: 0.9,
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
              absolute
              bottom-[-5px]
              left-1/2
              z-40
              -translate-x-1/2
              rounded-2xl
              border
              border-slate-100
              bg-white
              px-5
              py-3
              shadow-[0_18px_45px_rgba(15,23,42,0.10)]
            "
          >

            <div className="flex items-center gap-5">

              <div>

                <p className="text-[8px] text-slate-400">
                  Active users
                </p>

                <p className="mt-0.5 text-[18px] font-semibold tracking-[-0.03em]">
                  24.8K+
                </p>

              </div>

              <div className="flex -space-x-2">

                <span className="h-7 w-7 rounded-full border-2 border-white bg-slate-100" />
                <span className="h-7 w-7 rounded-full border-2 border-white bg-slate-200" />
                <span className="h-7 w-7 rounded-full border-2 border-white bg-slate-300" />

              </div>

            </div>

          </motion.div>

        </div>


        {/* =================================================
            TRUST BAR
        ================================================== */}

        <div
          className="
            border-t
            border-slate-200/80
            py-6
          "
        >

          <div
            className="
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            <p
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-slate-400
              "
            >
              Built with modern technology
            </p>


            <div className="flex items-center gap-7">

              <span className="text-[10px] font-medium text-slate-300">
                Microsoft
              </span>

              <span className="text-[10px] font-medium text-slate-300">
                Google
              </span>

              <span className="text-[10px] font-medium text-slate-300">
                AWS
              </span>

              <span className="text-[10px] font-medium text-slate-300">
                Notion
              </span>

              <span className="text-[10px] font-medium text-slate-300">
                Stripe
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}