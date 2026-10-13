"use client";

import { useEffect } from "react";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const brands = ["NORTHSTAR", "FORMA", "KINETIC", "MONOGRAPH", "PULSE", "STUDIO N°8"];

function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  const controls = useAnimationControls();
  const reduceMotion = useReducedMotion();
  const run = () => controls.start({ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"], transition: { duration: reverse ? 34 : 42, repeat: Infinity, ease: "linear" } });
  useEffect(() => { if (reduceMotion) { controls.set({ x: 0 }); return; } void controls.start({ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"], transition: { duration: reverse ? 34 : 42, repeat: Infinity, ease: "linear" } }); }, [controls, reduceMotion, reverse]);
  return <div className="group overflow-hidden" onMouseEnter={() => controls.stop()} onMouseLeave={() => { if (!reduceMotion) void run(); }} onFocus={() => controls.stop()} onBlur={() => { if (!reduceMotion) void run(); }}><motion.div animate={controls} className="flex w-max items-center">{[0,1].map(copy=><div key={copy} aria-hidden={copy===1} className="flex shrink-0 items-center">{brands.map((brand,i)=><div key={`${copy}-${brand}`} className="flex items-center gap-8 px-7 sm:gap-12 sm:px-12"><span className="whitespace-nowrap text-xl font-semibold tracking-[-.05em] text-white/75 transition-colors group-hover:text-white sm:text-2xl lg:text-3xl">{brand}</span><span className="h-2 w-2 rotate-45 bg-lime-300/80" /></div>)}</div>)}</motion.div></div>;
}

export function BrandMarqueeSection() {
  return <section className="overflow-hidden bg-[#171914] py-20 text-white sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"><div className="flex flex-col justify-between gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end"><div><p className="text-xs uppercase tracking-[.22em] text-lime-300">Built for collaboration</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.05em] sm:text-4xl">Good work travels together.</h2></div><a href="#partners" className="inline-flex w-fit items-center gap-2 text-sm text-white/60 hover:text-lime-200">Explore partnerships <ArrowUpRight size={16} /></a></div></div><div id="partners" className="mt-10 space-y-8 sm:mt-14"><MarqueeTrack /><MarqueeTrack reverse /></div><p className="mx-auto mt-10 max-w-7xl px-5 text-xs text-white/35 sm:px-8 lg:px-12">Sample wordmarks only. Replace them with approved partner or client names.</p></section>;
}