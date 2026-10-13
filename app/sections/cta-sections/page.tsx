"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";

export default function Page() {
 const reduceMotion=useReducedMotion();
 return <main className="min-h-screen bg-white px-4 py-16 font-sans text-slate-900 sm:px-8 sm:py-24">
  <section className="mx-auto max-w-6xl">
   <div className="mb-10 text-center"><p className="text-xs font-semibold uppercase tracking-[.24em] text-violet-600">Conversion · CTA</p><h1 className="mt-4 text-3xl font-semibold tracking-[-.04em] sm:text-5xl">Make the next step feel obvious.</h1><p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">Three reusable call-to-action patterns for different moments in a customer journey.</p></div>
   <div className="grid gap-5">
    <motion.article initial={reduceMotion?false:{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.45}} className="relative isolate overflow-hidden rounded-[28px] bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-14">
      <div className="absolute -right-24 -top-32 -z-10 size-96 rounded-full bg-violet-600/30 blur-3xl"/><div className="absolute right-24 top-10 -z-10 size-52 rounded-full border border-white/10"/>
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center"><div><span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-violet-200"><Sparkles size={14}/> Your next chapter starts here</span><h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-[-.04em] sm:text-5xl">Bring your best work into focus.</h2><p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">Give your team a clearer way to plan, collaborate and deliver with confidence.</p></div><a href="#" className="inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-violet-100">Get started <ArrowRight size={16}/></a></div>
    </motion.article>
    <div className="grid gap-5 md:grid-cols-2">
     <motion.article whileHover={reduceMotion?{}:{y:-4}} className="rounded-[26px] border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-6 sm:p-8"><p className="text-xs font-semibold uppercase tracking-[.2em] text-indigo-600">For growing teams</p><h2 className="mt-4 text-2xl font-semibold tracking-tight">Ready to work smarter?</h2><p className="mt-3 text-sm leading-6 text-slate-500">Make your workflow simpler with tools designed around the way your team thinks.</p><a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-900">Explore features <ArrowRight size={15}/></a></motion.article>
     <motion.article whileHover={reduceMotion?{}:{y:-4}} className="rounded-[26px] border border-slate-200 bg-white p-6 sm:p-8"><p className="text-xs font-semibold uppercase tracking-[.2em] text-emerald-700">Low commitment</p><h2 className="mt-4 text-2xl font-semibold tracking-tight">Try it at your own pace.</h2><p className="mt-3 text-sm leading-6 text-slate-500">Get started with the essentials and discover what works for you.</p><ul className="mt-5 space-y-2">{["No credit card required","Setup takes minutes"].map(x=><li key={x} className="flex items-center gap-2 text-xs text-slate-600"><Check size={14} className="text-emerald-600"/>{x}</li>)}</ul><a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-emerald-700">Start free <ArrowRight size={15}/></a></motion.article>
    </div>
   </div>
   <p className="mt-5 text-center text-xs text-slate-400">Placeholder CTA links. Connect each action to the appropriate route or conversion goal.</p>
  </section>
 </main>;
}
