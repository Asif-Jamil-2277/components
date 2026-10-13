"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {name:"Starter",description:"For individuals finding their rhythm.",monthly:12,yearly:9,features:["Up to 3 projects","Core components","Community support","Basic analytics"],featured:false},
  {name:"Growth",description:"For teams ready to move faster.",monthly:29,yearly:23,features:["Unlimited projects","Premium components","Priority support","Advanced analytics","Team collaboration"],featured:true},
  {name:"Scale",description:"For organisations building at scale.",monthly:79,yearly:63,features:["Everything in Growth","Custom design tokens","Dedicated onboarding","Security controls","Priority roadmap"],featured:false},
];

export default function Page() {
  const [yearly,setYearly] = useState(true);
  const reduceMotion = useReducedMotion();
  return <main className="min-h-screen bg-[#f7f8fc] px-4 py-16 font-sans text-slate-900 sm:px-8 sm:py-24">
    <section className="mx-auto max-w-6xl">
      <motion.div initial={reduceMotion?false:{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.45}} className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-3 py-1.5 text-xs font-semibold text-violet-700"><Sparkles size={14}/> Straightforward pricing</span>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">Choose your pace.</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">Flexible plans for the way your team works. Upgrade when you are ready.</p>
        <div className="mt-7 inline-flex rounded-xl border border-slate-200 bg-white p-1">
          <button onClick={()=>setYearly(false)} className={`rounded-lg px-4 py-2 text-sm font-medium ${!yearly?"bg-slate-950 text-white":"text-slate-500 hover:text-slate-900"}`}>Monthly</button>
          <button onClick={()=>setYearly(true)} className={`rounded-lg px-4 py-2 text-sm font-medium ${yearly?"bg-slate-950 text-white":"text-slate-500 hover:text-slate-900"}`}>Yearly <span className="ml-1 text-emerald-500">−20%</span></button>
        </div>
      </motion.div>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {plans.map((p,i)=><motion.article key={p.name} initial={reduceMotion?false:{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:i*.1,duration:.45}} whileHover={reduceMotion?{}:{y:-5}} className={`relative flex flex-col rounded-[26px] border p-6 sm:p-8 ${p.featured?"border-violet-500 bg-slate-950 text-white shadow-2xl shadow-violet-950/15":"border-slate-200 bg-white"}`}>
          {p.featured&&<span className="absolute right-5 top-5 rounded-full bg-violet-500/15 px-3 py-1 text-[11px] font-semibold text-violet-200">MOST POPULAR</span>}
          <h2 className="text-lg font-semibold">{p.name}</h2><p className={`mt-2 min-h-10 text-sm leading-5 ${p.featured?"text-slate-400":"text-slate-500"}`}>{p.description}</p>
          <div className="mt-7 flex items-baseline gap-1"><span className="text-5xl font-semibold tracking-[-.06em]">${yearly?p.yearly:p.monthly}</span><span className={`text-sm ${p.featured?"text-slate-400":"text-slate-500"}`}>/ user / mo</span></div>
          <p className={`mt-2 text-xs ${p.featured?"text-slate-500":"text-slate-400"}`}>{yearly?"Billed annually":"Billed monthly"}</p>
          <a href="#" className={`mt-7 rounded-xl px-4 py-3 text-center text-sm font-semibold transition hover:-translate-y-0.5 ${p.featured?"bg-white text-slate-950 hover:bg-violet-100":"bg-slate-950 text-white hover:bg-violet-700"}`}>Choose {p.name}</a>
          <div className={`my-7 h-px ${p.featured?"bg-white/10":"bg-slate-100"}`}/>
          <p className={`mb-4 text-xs font-semibold uppercase tracking-[.15em] ${p.featured?"text-slate-400":"text-slate-500"}`}>What&apos;s included</p>
          <ul className="space-y-4">{p.features.map(f=><li key={f} className="flex items-start gap-3 text-sm"><Check size={17} className={`mt-0.5 shrink-0 ${p.featured ? "text-violet-300" : "text-emerald-600"}`} /><span className={p.featured?"text-slate-300":"text-slate-600"}>{f}</span></li>)}</ul>
        </motion.article>)}
      </div>
      <p className="mt-6 text-center text-xs text-slate-400">Illustrative pricing only. Connect buttons and prices to your actual billing model before production.</p>
    </section>
  </main>;
}
