"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Layers3 } from "lucide-react";

const filters = ["All","Digital","Branding","Product"] as const;
type Filter = (typeof filters)[number];
const projects = [
  {id:1,title:"Forma Identity",category:"Branding",description:"A flexible visual language for a new generation.",palette:"from-orange-200 via-rose-300 to-red-400",visual:"rings"},
  {id:2,title:"Northstar Platform",category:"Digital",description:"A calmer interface for complex information.",palette:"from-indigo-200 via-violet-300 to-purple-500",visual:"blocks"},
  {id:3,title:"Kinetic Objects",category:"Product",description:"Product thinking shaped around everyday use.",palette:"from-lime-100 via-emerald-200 to-teal-400",visual:"orb"},
  {id:4,title:"Monograph Studio",category:"Branding",description:"A typographic system with room to experiment.",palette:"from-amber-100 via-yellow-200 to-orange-300",visual:"lines"},
  {id:5,title:"Pulse Analytics",category:"Digital",description:"Turning a sea of data into a useful signal.",palette:"from-sky-200 via-cyan-300 to-blue-500",visual:"waves"},
  {id:6,title:"Modular One",category:"Product",description:"A modular toolkit designed to grow over time.",palette:"from-stone-200 via-zinc-300 to-slate-500",visual:"grid"},
] as const;

type Project = (typeof projects)[number];
function Artwork({visual}:{visual:Project["visual"]}) {
  if(visual==="rings") return <div className="relative flex h-full items-center justify-center"><div className="absolute h-44 w-44 rounded-full border-[18px] border-black/10"/><div className="absolute h-32 w-32 rounded-full border-[14px] border-white/50"/><div className="h-16 w-16 rounded-full bg-[#B84E3D] shadow-xl"/></div>;
  if(visual==="blocks") return <div className="grid h-full place-items-center"><div className="grid w-48 -rotate-6 grid-cols-2 gap-3">{["h-20 bg-white/70","h-12 bg-black/15","h-12 bg-indigo-700/70","h-20 bg-white/40"].map(s=><div key={s} className={`rounded-2xl ${s}`}/>)}</div></div>;
  if(visual==="orb") return <div className="relative flex h-full items-center justify-center"><div className="absolute h-52 w-52 rounded-full border border-black/20"/><div className="absolute h-40 w-40 rounded-full border border-black/20"/><div className="h-28 w-28 rounded-full bg-gradient-to-br from-white/90 to-emerald-700/70 shadow-[20px_25px_50px_rgba(0,0,0,.18)]"/></div>;
  if(visual==="lines") return <div className="flex h-full flex-col justify-center gap-3 px-8 sm:px-12">{[100,70,88,48,80].map((w,i)=><div key={i} style={{width:`${w}%`}} className={`h-3 rounded-full ${i===0?"bg-black/70":"bg-black/20"}`}/>)}</div>;
  if(visual==="waves") return <div className="flex h-full items-center justify-center gap-2">{Array.from({length:13},(_,i)=><motion.div key={i} animate={{scaleY:[.4,1,.55]}} transition={{duration:1.8,repeat:Infinity,delay:i*.07}} className="w-2 origin-center rounded-full bg-blue-900/60" style={{height:`${30+((i*17)%65)}%`}}/>)}</div>;
  return <div className="grid h-full grid-cols-4 grid-rows-4 gap-2 p-8">{Array.from({length:16},(_,i)=><div key={i} className={`rounded-lg ${i%3===0?"bg-white/80":"bg-black/10"}`}/>)}</div>;
}

export function ProjectGallerySection() {
  const [filter,setFilter]=useState<Filter>("All");
  const reduceMotion=useReducedMotion();
  const visible=filter==="All"?projects:projects.filter(p=>p.category===filter);
  return <section id="details" className="bg-[#F7F6F2] px-5 py-20 text-[#24251F] sm:px-8 sm:py-28 lg:px-12 lg:py-32"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end"><div className="max-w-3xl"><p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.22em] text-[#77786F]"><Layers3 size={14}/> Selected work</p><h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-.055em] sm:text-5xl lg:text-6xl">A collection of ideas, made tangible.</h2><p className="mt-5 max-w-xl text-base leading-8 text-[#6C6D64]">Filter the collection to explore different kinds of work. Each tile is reusable.</p></div><div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">{filters.map(item=><button key={item} type="button" aria-pressed={filter===item} onClick={()=>setFilter(item)} className={`rounded-full border px-4 py-2.5 text-xs font-medium transition-colors ${filter===item?"border-[#24251F] bg-[#24251F] text-white":"border-black/10 bg-white text-[#66675F] hover:border-black/30"}`}>{item}</button>)}</div></div>
  <motion.div layout className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"><AnimatePresence mode="popLayout">{visible.map(project=><motion.article layout key={project.id} initial={reduceMotion?false:{opacity:0,y:18,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={reduceMotion?undefined:{opacity:0,y:10,scale:.97}} transition={{duration:.3}} className="group overflow-hidden rounded-[24px] border border-black/[.07] bg-white"><div className={`relative h-64 overflow-hidden bg-gradient-to-br ${project.palette} sm:h-72`}><motion.div whileHover={reduceMotion?undefined:{scale:1.045}} transition={{duration:.45}} className="h-full w-full"><Artwork visual={project.visual}/></motion.div><span className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/65 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[.14em] text-[#30312B] backdrop-blur">{project.category}</span><span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#24251F] shadow-lg transition-transform group-hover:rotate-45"><ArrowUpRight size={18}/></span></div><div className="p-5 sm:p-6"><h3 className="text-xl font-semibold tracking-[-.035em]">{project.title}</h3><p className="mt-2 text-sm leading-6 text-[#72736B]">{project.description}</p></div></motion.article>)}</AnimatePresence></motion.div><p className="mt-6 text-xs text-[#85867E]">Demo portfolio content. Replace sample projects with approved work before publishing.</p></div></section>;
}