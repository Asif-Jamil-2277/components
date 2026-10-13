
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  AudioWaveform,
  Bot,
  Boxes,
  BrainCircuit,
  Code2,
  Layers3,
  Sparkles,
  Zap,
} from "lucide-react";

const features = [
  {
    id: "ai",
    number: "01",
    title: "AI Intelligence",
    description: "Turn complex workflows into intelligent experiences.",
    icon: BrainCircuit,
    position: "top",
  },
  {
    id: "automation",
    number: "02",
    title: "Smart Automation",
    description: "Connect repetitive tasks into seamless workflows.",
    icon: Zap,
    position: "right",
  },
  {
    id: "development",
    number: "03",
    title: "Modern Development",
    description: "Build flexible digital products that can scale.",
    icon: Code2,
    position: "bottom",
  },
  {
    id: "systems",
    number: "04",
    title: "Connected Systems",
    description: "Bring tools, data and experiences together.",
    icon: Boxes,
    position: "left",
  },
];

export function OrbitShowcaseSection() {
  const [activeFeature, setActiveFeature] = useState("ai");
  const reduceMotion = useReducedMotion();

  const activeItem =
    features.find((feature) => feature.id === activeFeature) ?? features[0];

  return (
    <section className="orbit-showcase relative isolate overflow-hidden bg-[#141613] px-5 py-20 text-[#F4F4EC] sm:px-8 sm:py-28 lg:px-12 lg:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A5F36C]/[0.06] blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[#A5F36C]">
            <Sparkles size={14} />
            The Connected Ecosystem
          </div>

          <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl">
            Everything works
            <span className="block text-[#A5F36C]">better together.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            Discover how intelligence, automation and modern technology
            connect to create a smarter digital experience.
          </p>
        </motion.div>

        {/* Main interactive layout */}
        <div className="mt-16 grid items-center gap-12 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Interactive feature list */}
          <div className="order-2 space-y-3 lg:order-1">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature === feature.id;

              return (
                <motion.button
                  key={feature.id}
                  type="button"
                  initial={
                    reduceMotion ? false : { opacity: 0, x: -20 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: reduceMotion ? 0 : index * 0.1,
                  }}
                  onMouseEnter={() => setActiveFeature(feature.id)}
                  onFocus={() => setActiveFeature(feature.id)}
                  onClick={() => setActiveFeature(feature.id)}
                  aria-pressed={isActive}
                  className={`group relative flex w-full items-start gap-4 overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 sm:gap-5 sm:p-6 ${
                    isActive
                      ? "border-[#A5F36C]/40 bg-[#A5F36C]/[0.07]"
                      : "border-white/[0.08] bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.05]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="orbit-active-indicator"
                      className="absolute bottom-4 left-0 top-4 w-[3px] rounded-r-full bg-[#A5F36C]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
                      isActive
                        ? "border-[#A5F36C]/30 bg-[#A5F36C] text-[#141613]"
                        : "border-white/10 bg-white/[0.04] text-white/70"
                    }`}
                  >
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <span className="text-[10px] tracking-[0.16em] text-white/35">
                        {feature.number}
                      </span>
                      <h3
                        className={`text-base font-medium tracking-tight sm:text-lg ${
                          isActive ? "text-white" : "text-white/80"
                        }`}
                      >
                        {feature.title}
                      </h3>
                    </div>

                    <p className="max-w-sm text-sm leading-6 text-white/45">
                      {feature.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className={`mt-1 shrink-0 transition-all duration-300 ${
                      isActive
                        ? "translate-x-0 text-[#A5F36C] opacity-100"
                        : "-translate-x-1 text-white/40 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                </motion.button>
              );
            })}

            <p className="flex items-center gap-2 px-2 pt-3 text-xs text-white/35">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A5F36C]" />
              Select a feature to explore the system
            </p>
          </div>

          {/* Animated orbit visual */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 mx-auto aspect-square w-full max-w-[520px] lg:order-2"
          >
            {/* Orbit rings */}
            <motion.div
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{
                duration: 42,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[5%] rounded-full border border-dashed border-white/15"
            >
              <span className="absolute left-[17%] top-[8%] h-2.5 w-2.5 rounded-full bg-[#A5F36C] shadow-[0_0_18px_rgba(165,243,108,0.8)]" />
            </motion.div>

            <motion.div
              animate={reduceMotion ? undefined : { rotate: -360 }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[17%] rounded-full border border-white/10"
            >
              <span className="absolute right-[7%] top-[24%] h-2 w-2 rounded-full bg-white/80 shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
            </motion.div>

            <div className="absolute inset-[29%] rounded-full border border-[#A5F36C]/20" />

            {/* Central glow */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-[27%] rounded-full bg-[#A5F36C]/10 blur-2xl"
            />

            {/* Core */}
            <div className="absolute left-1/2 top-1/2 z-10 flex h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#A5F36C]/40 bg-[#1C2118] shadow-[0_0_60px_rgba(165,243,108,0.12),inset_0_0_35px_rgba(165,243,108,0.05)]">
              <motion.div
                key={activeItem.id}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.65 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A5F36C] text-[#141613] shadow-[0_0_24px_rgba(165,243,108,0.2)] sm:h-14 sm:w-14">
                  {activeItem.id === "ai" && <BrainCircuit size={26} />}
                  {activeItem.id === "automation" && <Zap size={26} />}
                  {activeItem.id === "development" && <Code2 size={26} />}
                  {activeItem.id === "systems" && <Layers3 size={26} />}
                </div>
                <span className="max-w-[125px] px-1 text-xs font-semibold leading-5 text-white sm:text-sm">
                  {activeItem.title}
                </span>
                <span className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#A5F36C]/70">
                  Active Node
                </span>
              </motion.div>
            </div>

            {/* Floating technology nodes */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -9, 0], rotate: [0, 3, 0] }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[2%] top-[31%] z-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#242821] text-[#A5F36C] shadow-2xl sm:h-16 sm:w-16"
            >
              <Bot size={25} />
            </motion.div>

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, 10, 0], rotate: [0, -4, 0] }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[3%] top-[26%] z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#242821] text-white/80 shadow-2xl sm:h-14 sm:w-14"
            >
              <AudioWaveform size={23} />
            </motion.div>

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -7, 0], rotate: [0, 5, 0] }
              }
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[12%] right-[16%] z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#242821] text-[#A5F36C] shadow-2xl sm:h-14 sm:w-14"
            >
              <Layers3 size={22} />
            </motion.div>

            {/* Small data labels */}
            <div className="absolute left-[8%] top-[12%] hidden rounded-lg border border-white/10 bg-[#1B1E19]/90 px-3 py-2 backdrop-blur-md sm:block">
              <p className="text-[9px] uppercase tracking-[0.16em] text-white/35">
                System
              </p>
              <p className="mt-1 text-xs font-medium text-[#A5F36C]">
                Connected
              </p>
            </div>

            <div className="absolute bottom-[8%] left-[8%] hidden rounded-lg border border-white/10 bg-[#1B1E19]/90 px-3 py-2 backdrop-blur-md sm:block">
              <p className="text-[9px] uppercase tracking-[0.16em] text-white/35">
                Architecture
              </p>
              <p className="mt-1 text-xs font-medium text-white/80">
                Modular
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom stats strip */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-1 border-y border-white/10 sm:mt-20 sm:grid-cols-3"
        >
          {[
            { value: "01", label: "Unified ecosystem" },
            { value: "04", label: "Connected capabilities" },
            { value: "∞", label: "Room to evolve" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`flex items-center gap-4 px-5 py-6 sm:justify-center sm:py-8 ${
                index !== 0 ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""
              }`}
            >
              <span className="text-3xl font-semibold tracking-[-0.06em] text-[#A5F36C]">
                {stat.value}
              </span>
              <span className="max-w-28 text-xs leading-5 text-white/45">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
