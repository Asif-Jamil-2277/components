"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";

export function AuroraHeroSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative isolate overflow-hidden bg-[#111216] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[.08] [background-image:linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.22)_1px,transparent_1px)] [background-size:44px_44px]" />
        <motion.div animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [.35, .65, .35] }} transition={{ duration: 7, repeat: Infinity }} className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[110px]" />
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.04] px-4 py-2 text-xs text-white/75"><Sparkles size={14} className="text-violet-300" /> A better way to build digital</div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.03] tracking-[-.06em] sm:text-6xl lg:text-7xl">Make your next idea <span className="mt-2 block text-violet-300">feel inevitable.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/55 sm:text-lg">Thoughtful strategy, purposeful design and modern technology, brought together in one flexible digital experience.</p>
          <div className="mt-9 flex flex-wrap gap-3"><a href="#explore" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#15151A] transition hover:bg-violet-200">Explore the system <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a><a href="#details" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-4 text-sm text-white/80 hover:border-white/40">See how it works <ArrowDownRight size={17} /></a></div>
          <p className="mt-12 text-xs text-white/40">Designed to adapt as you grow</p>
        </motion.div>
        <div className="relative mx-auto aspect-square w-full max-w-[500px]">
          <motion.div animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 38, repeat: Infinity, ease: "linear" }} className="absolute inset-[4%] rounded-full border border-dashed border-white/15"><span className="absolute left-[17%] top-[9%] h-3 w-3 rounded-full bg-violet-300 shadow-[0_0_22px_rgba(196,181,253,.9)]" /></motion.div>
          <motion.div animate={reduceMotion ? undefined : { rotate: -360 }} transition={{ duration: 29, repeat: Infinity, ease: "linear" }} className="absolute inset-[17%] rounded-full border border-white/10"><span className="absolute bottom-[13%] right-[6%] h-2.5 w-2.5 rounded-full bg-cyan-200" /></motion.div>
          <motion.div animate={reduceMotion ? undefined : { y: [0, -9, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute left-[2%] top-[25%] w-[48%] rounded-2xl border border-white/10 bg-[#202128]/90 p-5 shadow-2xl backdrop-blur-xl"><p className="text-[10px] uppercase tracking-[.2em] text-white/40">01 / Strategy</p><div className="mt-4 h-2 w-3/4 rounded-full bg-white/80" /><div className="mt-2 h-2 w-1/2 rounded-full bg-white/20" /><div className="mt-5 flex gap-2"><span className="h-7 w-7 rounded-lg bg-violet-300/30" /><span className="h-7 flex-1 rounded-lg bg-white/[.06]" /></div></motion.div>
          <motion.div animate={reduceMotion ? undefined : { y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute bottom-[17%] right-0 w-[53%] rounded-2xl border border-violet-200/20 bg-[#24232E]/95 p-5 shadow-2xl backdrop-blur-xl"><p className="text-xs text-white/55">Experience score</p><p className="mt-3 text-3xl font-semibold">Excellent</p><div className="mt-5 flex h-12 items-end gap-1.5">{[28,44,34,60,48,78,65,95,73,100].map((h,i)=><motion.span key={i} initial={{height:0}} animate={{height:`${h}%`}} transition={{delay:.25+i*.04,duration:.5}} className="flex-1 rounded-t-sm bg-violet-300/80" />)}</div></motion.div>
          <div className="absolute left-1/2 top-1/2 flex h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-200/30 bg-violet-300/[.08] shadow-[0_0_90px_rgba(167,139,250,.15)]"><div className="h-[48%] w-[48%] rounded-full border border-white/30 bg-gradient-to-br from-violet-200 via-violet-500 to-indigo-800" /></div>
        </div>
      </div>
    </section>
  );
}