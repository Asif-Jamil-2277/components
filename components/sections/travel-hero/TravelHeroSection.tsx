"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react"

export function TravelHeroSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F8FAFC] text-slate-950 font-[Poppins]">
      {/* =========================================================
          FLUID BACKGROUND GLOWS & MESH
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Soft radial fluid gradient in center */}
        <div className="absolute left-1/2 top-[35%] h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.07] blur-[140px]" />
        <div className="absolute left-1/4 top-[60%] h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.05] blur-[120px]" />
        <div className="absolute right-1/4 top-[50%] h-[500px] w-[700px] -translate-y-1/2 rounded-full bg-sky-400/[0.06] blur-[130px]" />

        {/* Subtle dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `radial-gradient(rgba(15,23,42,0.12) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* =========================================================
          HEADER / NAVBAR
      ========================================================= */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20 transition-transform group-hover:scale-105">
            ✈️
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-950">
            Travel<span className="text-blue-600">With</span>
          </span>
        </Link>

        <Link
          href="#join"
          className="inline-flex h-10 items-center justify-center rounded-full bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/20"
        >
          Join beta
        </Link>
      </header>

      {/* =========================================================
          HERO CONTENT CONTAINER
      ========================================================= */}
      <div className="mx-auto max-w-5xl px-6 pt-12 pb-24 text-center sm:px-8 lg:pt-16">
        
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl leading-[1.08]"
        >
          Travel <span className="italic font-serif font-normal text-blue-600">stress-free</span> with <br className="hidden sm:inline" />
          your close friends.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-base text-slate-600 sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Create a travel plan together, plan daily trips, see the world, and go on adventures together without the planning chaos.
        </motion.p>

        {/* Email Form / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 max-w-md mx-auto"
        >
          {submitted ? (
            <div className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800 font-medium text-sm">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              You&apos;re on the waitlist! We&apos;ll notify you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200/80 shadow-xl shadow-slate-200/50">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full h-12 px-4 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 shrink-0"
              >
                Join beta
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}

          {/* Micro badges */}
          <div className="mt-4 flex items-center justify-center gap-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-blue-600" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Free trial available
            </span>
          </div>
        </motion.div>

        {/* =========================================================
            PHONE MOCKUP & FLOATING CARDS (FLUID ANIMATION)
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 flex justify-center items-center"
        >
          {/* Background Ambient Glow Behind Phone */}
          <div className="absolute h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] rounded-full bg-gradient-to-tr from-blue-600/15 to-sky-400/20 blur-3xl -z-10" />

          {/* Left Floating Card: Bucharest */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 sm:left-4 lg:left-12 top-12 z-20 hidden sm:block w-[210px] rounded-2xl bg-white p-3 shadow-2xl border border-slate-100 text-left"
          >
            <div className="relative h-36 w-full rounded-xl overflow-hidden mb-3">
              <Image src="/images/interstellar.jpg" alt="Bucharest" fill className="object-cover" />
              <div className="absolute top-2 right-2 rounded-full bg-black/40 backdrop-blur-md px-2 py-0.5 text-[10px] text-white flex items-center gap-1">
                🇷🇴 Romania
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-900">Bucharest City</h4>
                <p className="text-[10px] text-slate-500">Apr 30 - May 5</p>
              </div>
              <div className="flex -space-x-1.5">
                <span className="h-5 w-5 rounded-full bg-blue-500 text-[10px] text-white flex items-center justify-center font-bold">A</span>
                <span className="h-5 w-5 rounded-full bg-indigo-500 text-[10px] text-white flex items-center justify-center font-bold">K</span>
              </div>
            </div>
          </motion.div>

          {/* Right Floating Card: Paris */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 sm:right-4 lg:right-12 top-20 z-20 hidden sm:block w-[210px] rounded-2xl bg-white p-3 shadow-2xl border border-slate-100 text-left"
          >
            <div className="relative h-36 w-full rounded-xl overflow-hidden mb-3">
              <Image src="/images/inception.jpg" alt="Paris" fill className="object-cover" />
              <div className="absolute top-2 right-2 rounded-full bg-black/40 backdrop-blur-md px-2 py-0.5 text-[10px] text-white flex items-center gap-1">
                🇫🇷 France
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-900">Paris</h4>
                <p className="text-[10px] text-slate-500">Apr 28 - May 3</p>
              </div>
              <div className="flex -space-x-1.5">
                <span className="h-5 w-5 rounded-full bg-teal-500 text-[10px] text-white flex items-center justify-center font-bold">S</span>
                <span className="h-5 w-5 rounded-full bg-amber-500 text-[10px] text-white flex items-center justify-center font-bold">M</span>
              </div>
            </div>
          </motion.div>

          {/* Center Phone Mockup */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-30 w-[300px] sm:w-[320px] rounded-[48px] bg-slate-900 p-3 shadow-[0_35px_70px_rgba(15,23,42,0.25)] border-[8px] border-slate-900"
          >
            {/* Phone Screen Inner */}
            <div className="relative h-[560px] w-full rounded-[38px] bg-white overflow-hidden flex flex-col">
              
              {/* Phone Status bar */}
              <div className="flex items-center justify-between px-6 pt-3 pb-2 text-[11px] font-bold text-slate-900">
                <span>9:41</span>
                <div className="h-3 w-20 bg-slate-900 rounded-full" />
                <div className="flex items-center gap-1 text-[10px]">5G</div>
              </div>

              {/* App Nav inside phone */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-slate-100">
                <div className="flex gap-1">
                  <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-semibold">Active</span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-medium">Past</span>
                </div>
                <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">+</div>
              </div>

              {/* Phone Main Destination Content (London) */}
              <div className="relative flex-1 m-3 rounded-2xl overflow-hidden shadow-inner">
                <Image
                  src="/images/interstellar.jpg"
                  alt="London Big Ben"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Flag Badge on phone */}
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-slate-900 flex items-center gap-1 shadow-sm">
                  🇬🇧 United Kingdom
                </div>

                {/* Details at bottom of phone card */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-base font-bold">London</h3>
                  <p className="text-[11px] text-slate-200 mt-0.5">Apr 30 - May 5</p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <div className="h-6 w-6 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold border-2 border-white">AS</div>
                      <div className="h-6 w-6 rounded-full bg-indigo-600 text-white text-[10px] flex items-center justify-center font-bold border-2 border-white">JD</div>
                    </div>
                    <span className="text-[10px] bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-md font-medium">3 travelers</span>
                  </div>
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div className="py-2 flex justify-center">
                <div className="h-1 w-28 bg-slate-200 rounded-full" />
              </div>

            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}
