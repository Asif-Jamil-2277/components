"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, BarChart3, MoreHorizontal, Users, Wallet, Zap } from "lucide-react";

const metrics = [
 {label:"Total revenue",value:"$84,254",change:"+12.8%",positive:true,Icon:Wallet,bars:[28,42,35,56,45,70,62,82,67,94,78,100]},
 {label:"Active customers",value:"12,840",change:"+8.4%",positive:true,Icon:Users,bars:[38,32,48,42,59,53,68,61,74,68,88,100]},
 {label:"Conversion rate",value:"4.86%",change:"−1.2%",positive:false,Icon:Zap,bars:[82,76,80,65,72,58,63,54,61,48,52,45]},
];

export default function Page() {
 const reduceMotion=useReducedMotion();
 return <main className="min-h-screen bg-[#f6f7fb] px-4 py-12 font-sans text-slate-900 sm:px-8 sm:py-20">
  <section className="mx-auto max-w-6xl">
   <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs font-semibold uppercase tracking-[.22em] text-indigo-600">Analytics · Dashboard</p><h1 className="mt-3 text-3xl font-semibold tracking-[-.04em] sm:text-5xl">Numbers with context.</h1><p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">A reusable KPI dashboard section with animated bars, clear hierarchy and responsive metric cards.</p></div><button className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">Last 30 days <MoreHorizontal size={16}/></button></div>
   <div className="mt-9 grid gap-4 lg:grid-cols-3">
    {metrics.map((m,i)=><motion.article key={m.label} initial={reduceMotion?false:{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.45,delay:i*.08}} className="rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-center justify-between"><span className="grid size-10 place-items-center rounded-xl bg-indigo-50 text-indigo-600"><m.Icon size={19}/></span><button aria-label={`More options for ${m.label}`} className="rounded-lg p-2 text-slate-400 hover:bg-slate-50"><MoreHorizontal size={18}/></button></div>
      <p className="mt-5 text-sm text-slate-500">{m.label}</p><div className="mt-1 flex flex-wrap items-baseline justify-between gap-3"><p className="text-3xl font-semibold tracking-[-.04em]">{m.value}</p><span className={`inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-semibold ${m.positive?"bg-emerald-50 text-emerald-700":"bg-rose-50 text-rose-700"}`}>{m.positive?<ArrowUpRight size={14}/>:<ArrowDownRight size={14}/>} {m.change}</span></div>
      <div className="mt-6 flex h-14 items-end gap-1.5">{m.bars.map((height,j)=><motion.span key={j} initial={{height:0}} animate={{height:`${height}%`}} transition={{duration:.5,delay:.2+j*.025}} className={`flex-1 rounded-t-md ${m.positive?"bg-indigo-500":"bg-violet-400"} ${j===m.bars.length-1?"opacity-100":"opacity-35"}`}/>)}</div><div className="mt-3 flex justify-between text-[11px] text-slate-400"><span>01 Oct</span><span>07 Oct</span><span>13 Oct</span></div>
    </motion.article>)}
   </div>
   <div className="mt-4 grid gap-4 lg:grid-cols-[1.3fr_.7fr]">
    <div className="rounded-[24px] border border-slate-200/80 bg-white p-6"><div className="flex items-center justify-between"><div><h2 className="font-semibold">Performance overview</h2><p className="mt-1 text-xs text-slate-500">Illustrative weekly activity</p></div><BarChart3 size={20} className="text-indigo-500"/></div><div className="mt-7 flex h-36 items-end gap-2 sm:h-48">{[42,56,48,72,62,86,69,92,77,100,83,94,72,88,65,79,96,82,100,87].map((v,i)=><motion.div key={i} initial={{height:0}} animate={{height:`${v}%`}} transition={{duration:.55,delay:i*.025}} className={`flex-1 rounded-t-md ${i>15?"bg-violet-500":"bg-indigo-500/25"}`}/>)}</div><div className="mt-4 flex justify-between text-xs text-slate-400"><span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span></div></div>
    <div className="rounded-[24px] bg-slate-950 p-6 text-white"><p className="text-sm text-slate-400">Monthly target</p><p className="mt-3 text-4xl font-semibold tracking-[-.05em]">$100k</p><div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10"><motion.div initial={{width:0}} animate={{width:"84%"}} transition={{duration:1,ease:"easeOut"}} className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-violet-400"/></div><div className="mt-3 flex justify-between text-xs"><span className="text-slate-400">84% achieved</span><span className="text-violet-300">$15,746 to go</span></div><div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4"><p className="text-xs text-slate-400">Insight</p><p className="mt-2 text-sm leading-6 text-slate-200">Revenue is trending above the previous period. Review conversion rate to find the next opportunity.</p></div></div>
   </div>
   <p className="mt-5 text-center text-xs text-slate-400">All values are sample data. Connect your real analytics source before production use.</p>
  </section>
 </main>;
}
