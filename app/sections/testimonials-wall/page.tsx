"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const items = [
  {quote:"The team finally has a shared place to turn ideas into action. It feels simple without limiting what we can do.",name:"Avery Morgan",role:"Product Lead",initials:"AM",tone:"bg-violet-100 text-violet-700"},
  {quote:"The details are excellent. We spend less time organising the work and more time actually moving it forward.",name:"Jordan Lee",role:"Design Director",initials:"JL",tone:"bg-amber-100 text-amber-700"},
  {quote:"It was easy to adopt across the team. The workflow is clear, the interface is calm, and progress is visible.",name:"Riley Shah",role:"Operations Manager",initials:"RS",tone:"bg-emerald-100 text-emerald-700"},
  {quote:"We replaced a patchwork of tools with one consistent process. That change made collaboration noticeably easier.",name:"Taylor Brooks",role:"Founder",initials:"TB",tone:"bg-sky-100 text-sky-700"},
  {quote:"Thoughtful design and useful defaults meant we could get started quickly, then adapt the setup to our needs.",name:"Casey Kim",role:"Engineering Manager",initials:"CK",tone:"bg-rose-100 text-rose-700"},
  {quote:"A strong balance of flexibility and focus. It gives our team structure without adding unnecessary process.",name:"Morgan Patel",role:"Creative Director",initials:"MP",tone:"bg-indigo-100 text-indigo-700"},
];

export default function Page() {
 const reduceMotion=useReducedMotion();
 return <main className="min-h-screen bg-white px-4 py-16 font-sans text-slate-900 sm:px-8 sm:py-24">
  <section className="mx-auto max-w-6xl">
   <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-semibold uppercase tracking-[.24em] text-violet-600">Customer stories</p><h1 className="mt-4 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">Good work speaks for itself.</h1><p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">A flexible testimonial wall with varied card emphasis and gentle entrance motion.</p><div className="mt-5 flex items-center justify-center gap-2 text-sm"><span className="flex text-amber-400">{Array.from({length:5},(_,i)=><Star key={i} size={15} fill="currentColor"/>)}</span><span className="font-semibold">4.9/5</span><span className="text-slate-400">· sample rating</span></div></div>
   <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {items.map((item,i)=><motion.article key={item.name} initial={reduceMotion?false:{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.4,delay:(i%3)*.08}} whileHover={reduceMotion?{}:{y:-4}} className={`rounded-[24px] border p-6 transition-shadow hover:shadow-xl hover:shadow-slate-900/5 ${i===1?"border-violet-200 bg-violet-50/60":"border-slate-200 bg-white"}`}>
      <Quote size={21} className="text-violet-500"/><p className="mt-5 text-[15px] leading-7 text-slate-700">“{item.quote}”</p><div className="mt-7 flex items-center gap-3 border-t border-slate-200/70 pt-5"><span className={`grid size-10 place-items-center rounded-full text-xs font-bold ${item.tone}`}>{item.initials}</span><div><p className="text-sm font-semibold">{item.name}</p><p className="mt-0.5 text-xs text-slate-500">{item.role}</p></div></div>
     </motion.article>)}
   </div>
   <p className="mt-6 text-center text-xs text-slate-400">Sample testimonials and identities. Replace with approved, authentic customer feedback.</p>
  </section>
 </main>;
}
