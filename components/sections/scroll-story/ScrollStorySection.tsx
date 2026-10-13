
"use client";

import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Code2,
  Layers3,
  Workflow,
} from "lucide-react";

const chapters = [
  {
    number: "01",
    eyebrow: "THE FOUNDATION",
    title: "Start with a clear direction.",
    description:
      "Every great digital experience begins with a clear understanding of the problem, the people and the outcome.",
    icon: BrainCircuit,
    color: "#C4B5FD",
    tags: ["Research", "Strategy", "Clarity"],
  },
  {
    number: "02",
    eyebrow: "THE CONNECTION",
    title: "Connect ideas into a system.",
    description:
      "Bring your tools, processes and information together in a structure that feels intuitive and works as one.",
    icon: Workflow,
    color: "#A5F36C",
    tags: ["Integration", "Systems", "Flow"],
  },
  {
    number: "03",
    eyebrow: "THE EXPERIENCE",
    title: "Make complexity feel simple.",
    description:
      "Thoughtful interfaces, purposeful interactions and reusable components turn complex workflows into clear experiences.",
    icon: Layers3,
    color: "#F6B98A",
    tags: ["Interface", "Motion", "Usability"],
  },
  {
    number: "04",
    eyebrow: "THE EVOLUTION",
    title: "Build for what comes next.",
    description:
      "Create a flexible foundation that can evolve with new ideas, growing needs and future opportunities.",
    icon: Code2,
    color: "#8EDCF4",
    tags: ["Development", "Scale", "Iteration"],
  },
];

export function ScrollStorySection() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeChapter, setActiveChapter] = useState(0);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section
      ref={containerRef}
      className="scroll-story relative bg-[#111114] text-[#F5F4F8]"
    >
      {/* Intro */}
      <div className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px]" />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl"
        >
          <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-violet-300">
            <span className="h-px w-8 bg-violet-300" />
            A journey through the process
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-7xl">
            From the first idea
            <span className="block text-white/40">
              to something extraordinary.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
            Scroll through the stages. Each step builds on the previous one,
            creating a more connected and thoughtful digital experience.
          </p>
        </motion.div>
      </div>

      {/* Story area */}
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
        {/* Sticky visual */}
        <div className="relative lg:sticky lg:top-20 lg:h-[620px] lg:self-start">
          <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden rounded-[28px] border border-white/10 bg-[#19191F] sm:min-h-[500px] lg:h-full">
            {/* Decorative grid */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:34px_34px]" />

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { rotate: 360 }
              }
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[290px] w-[290px] rounded-full border border-dashed border-white/15 sm:h-[350px] sm:w-[350px]"
            >
              <span className="absolute left-[18%] top-[8%] h-3 w-3 rounded-full bg-violet-300 shadow-[0_0_22px_rgba(196,181,253,0.8)]" />
            </motion.div>

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { rotate: -360 }
              }
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[210px] w-[210px] rounded-full border border-white/10 sm:h-[260px] sm:w-[260px]"
            >
              <span className="absolute bottom-[10%] right-[7%] h-2.5 w-2.5 rounded-full bg-white/80" />
            </motion.div>

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.06, 1],
                      opacity: [0.4, 0.75, 0.4],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-44 w-44 rounded-full blur-3xl sm:h-56 sm:w-56"
              style={{ backgroundColor: chapters[activeChapter].color }}
            />

            {/* Changing central element */}
            <motion.div
              key={chapters[activeChapter].number}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, scale: 0.8, y: 12 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="relative z-10 flex h-44 w-44 flex-col items-center justify-center rounded-[32px] border border-white/15 bg-[#202027]/90 shadow-[0_25px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:h-52 sm:w-52"
            >
              {(() => {
                const Icon = chapters[activeChapter].icon;
                return (
                  <Icon
                    size={48}
                    strokeWidth={1.25}
                    style={{ color: chapters[activeChapter].color }}
                  />
                );
              })()}

              <span className="mt-5 text-[10px] uppercase tracking-[0.22em] text-white/45">
                Chapter {chapters[activeChapter].number}
              </span>

              <span className="mt-2 text-sm font-medium">
                {chapters[activeChapter].eyebrow}
              </span>
            </motion.div>

            {/* Corner labels */}
            <div className="absolute left-5 top-5">
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                Process map
              </p>
              <p className="mt-1 text-xs text-white/70">
                4 stages
              </p>
            </div>

            <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2">
              <motion.span
                animate={
                  reduceMotion ? undefined : { opacity: [1, 0.35, 1] }
                }
                transition={{ duration: 2, repeat: Infinity }}
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: chapters[activeChapter].color }}
              />
              <span className="text-[10px] text-white/55">
                {chapters[activeChapter].number} / 04
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-5 flex items-center gap-4">
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-violet-300"
                style={{ width: `${((activeChapter + 1) / chapters.length) * 100}%` }}
                transition={{ duration: 0.35 }}
              />
            </div>
            <span className="text-xs tabular-nums text-white/50">
              {String(activeChapter + 1).padStart(2, "0")} / 04
            </span>
          </div>
        </div>

        {/* Scroll chapters */}
        <div className="relative">
          <div className="absolute bottom-10 left-[17px] top-8 w-px bg-white/10">
            <motion.div
              className="w-full origin-top bg-violet-300"
              style={{ height: progressHeight }}
            />
          </div>

          {chapters.map((chapter, index) => {
            const Icon = chapter.icon;
            const isActive = activeChapter === index;

            return (
              <motion.article
                key={chapter.number}
                onViewportEnter={() => setActiveChapter(index)}
                viewport={{ amount: 0.45 }}
                initial={
                  reduceMotion ? false : { opacity: 0.35, y: 28 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="relative min-h-[440px] py-8 pl-12 sm:min-h-[490px] sm:pl-16 sm:py-12"
              >
                <div
                  className={`absolute left-0 top-10 z-10 flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
                    isActive
                      ? "border-violet-300 bg-violet-300 text-[#111114]"
                      : "border-white/20 bg-[#111114] text-white/45"
                  }`}
                >
                  {isActive ? (
                    <Check size={15} />
                  ) : (
                    <span className="text-[10px]">{chapter.number}</span>
                  )}
                </div>

                <p
                  className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] transition-colors duration-300"
                  style={{ color: isActive ? chapter.color : "#777780" }}
                >
                  {chapter.eyebrow}
                </p>

                <h3
                  className={`max-w-md text-3xl font-semibold leading-[1.15] tracking-[-0.045em] transition-colors duration-300 sm:text-4xl ${
                    isActive ? "text-white" : "text-white/65"
                  }`}
                >
                  {chapter.title}
                </h3>

                <p className="mt-6 max-w-md text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                  {chapter.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {chapter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-2 text-[11px] text-white/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setActiveChapter(index);
                    document
                      .getElementById(`story-visual-${index}`)
                      ?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className="mt-8 inline-flex items-center gap-2 text-xs font-medium text-white/60 transition-colors hover:text-white"
                >
                  Explore this stage
                  <ArrowUpRight size={15} />
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Closing statement */}
      <div className="border-t border-white/10 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-violet-300">
              The next chapter starts here
            </p>
            <h3 className="max-w-2xl text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              Good design is a journey, not a single moment.
            </h3>
          </div>

          <a
            href="#top"
            className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm text-white/75 transition-colors hover:border-violet-300 hover:text-violet-200"
          >
            Back to top
            <ArrowDownRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
