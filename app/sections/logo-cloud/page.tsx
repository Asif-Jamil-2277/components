"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AudioWaveform, Blocks, Command, Hexagon, Layers3, Orbit } from "lucide-react";

const brands = [
  { name: "Layers", Icon: Layers3 }, { name: "Command", Icon: Command },
  { name: "Vertex", Icon: Hexagon }, { name: "Orbit", Icon: Orbit },
  { name: "Blocks", Icon: Blocks }, { name: "Waveform", Icon: AudioWaveform },
];

export default function Page() {
  const reduceMotion = useReducedMotion();
  return <main className="min-h-screen bg-white px-5 py-20 font-sans text-slate-900 sm:px-8 sm:py-28">
    <section className="mx-auto max-w-6xl">
      <motion.div initial={reduceMotion ? false : {opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.4}} transition={{duration:.5}} className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[.25em] text-violet-600">Trusted by teams</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-[-.04em] sm:text-5xl">Good company makes great work.</h1>
        <p className="mt-4 text-base leading-7 text-slate-500">A refined logo cloud to establish credibility without overwhelming the page.</p>
      </motion.div>
      <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {brands.map(({name,Icon},i)=><motion.div key={name} initial={reduceMotion?false:{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.07,duration:.4}} whileHover={reduceMotion?{}:{y:-4,scale:1.02}} className="group flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-3 py-5 transition-colors hover:border-violet-200 hover:bg-violet-50/40">
          <Icon size={27} strokeWidth={1.7} className="text-slate-500 transition-colors group-hover:text-violet-600"/>
          <span className="text-sm font-semibold tracking-tight text-slate-700">{name}</span>
        </motion.div>)}
      </div>
      <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl bg-slate-950 px-6 py-6 text-center text-white sm:flex-row sm:text-left">
        <div><p className="text-sm font-semibold">Built for ambitious teams</p><p className="mt-1 text-sm text-slate-400">Join a growing community of people who build with purpose.</p></div>
        <div className="flex -space-x-2">{["AM","JS","RK","TL","+"].map((n,i)=><span key={n} className={`grid size-9 place-items-center rounded-full border-2 border-slate-950 text-[10px] font-bold ${i===4?"bg-violet-500 text-white":"bg-slate-700 text-slate-100"}`}>{n}</span>)}</div>
      </div>
      <p className="mt-5 text-center text-xs text-slate-400">Illustrative brand marks · Replace with approved customer logos and permissions.</p>
    </section>
  </main>;
}
