"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-[1.05/1] w-full max-w-[760px]">
      
      {/* Main visual frame */}
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute right-0 top-[8%] h-[78%] w-[82%] overflow-hidden border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.10)]"
      >
        {/* Fake browser header */}
        <div className="flex h-11 items-center justify-between border-b border-slate-100 px-4">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            <span className="h-2 w-2 rounded-full bg-slate-300" />
          </div>

          <div className="h-2 w-20 bg-slate-100" />
        </div>

        {/* Product UI */}
        <div className="grid h-[calc(100%-44px)] grid-cols-12">
          <div className="col-span-3 border-r border-slate-100 p-4">
            <div className="h-3 w-16 bg-[#0056D2]" />
            <div className="mt-8 space-y-3">
              <div className="h-2 w-full bg-slate-100" />
              <div className="h-2 w-4/5 bg-slate-100" />
              <div className="h-2 w-3/5 bg-slate-100" />
            </div>
          </div>

          <div className="col-span-9 p-6">
            <div className="flex items-end justify-between">
              <div>
                <div className="h-3 w-24 bg-slate-200" />
                <div className="mt-3 h-7 w-44 bg-slate-900" />
              </div>

              <div className="h-8 w-20 bg-[#0056D2]" />
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="h-24 border border-slate-100 bg-slate-50" />
              <div className="h-24 border border-slate-100 bg-slate-50" />
              <div className="h-24 border border-slate-100 bg-slate-50" />
            </div>

            <div className="mt-4 h-32 border border-slate-100">
              <div className="flex h-full items-end gap-2 p-5">
                {[45, 68, 52, 82, 64, 91, 72, 100].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-[#0056D2]"
                    style={{ height: `${height}%`, opacity: 0.35 + i * 0.07 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating information panel */}
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7 }}
        className="absolute bottom-[6%] left-[2%] z-20 w-[230px] border border-slate-200 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.10)]"
      >
        <div className="flex items-start justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Performance
          </span>

          <ArrowUpRight size={15} className="text-[#0056D2]" />
        </div>

        <div className="mt-6 flex items-end gap-3">
          <span className="text-4xl font-semibold tracking-[-0.05em]">
            84%
          </span>

          <span className="mb-1 text-xs font-medium text-[#0056D2]">
            +18.4%
          </span>
        </div>

        <div className="mt-4 h-1 overflow-hidden bg-slate-100">
          <div className="h-full w-[84%] bg-[#0056D2]" />
        </div>
      </motion.div>

      {/* Accent number */}
      <div className="absolute right-[3%] top-0 hidden text-right lg:block">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          Built for
        </p>
        <p className="mt-1 text-sm font-semibold text-slate-900">
          Modern products
        </p>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 right-[8%] h-24 w-px bg-slate-200" />
    </div>
  );
}