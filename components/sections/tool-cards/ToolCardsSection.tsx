"use client"

import {
  ArrowUpRight,
  Bot,
  Code2,
  Database,
  FileText,
  Sparkles,
} from "lucide-react"

import { ToolCard } from "./ToolCard"

const tools = [
  {
    title: "Google AI Studio",
    description:
      "Build, test and prototype powerful AI experiences with modern generative AI tools.",
    category: "AI PLATFORM",
    icon: <Bot size={18} />,
    accent: "blue" as const,
    href: "#",

    preview: (
      <div className="w-full rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur-md">

        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/15">
              <Sparkles size={12} className="text-white" />
            </div>

            <span className="text-[10px] font-medium text-white/80">
              AI Studio
            </span>
          </div>

          <span className="rounded-full bg-emerald-400/20 px-2 py-1 text-[8px] font-medium text-emerald-100">
            Ready
          </span>
        </div>

        <div className="rounded-lg border border-white/10 bg-black/10 p-2.5">
          <p className="text-[8px] font-medium text-white/50">
            Prompt
          </p>

          <p className="mt-1 text-[9px] leading-4 text-white/90">
            Create a modern AI-powered application...
          </p>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-[8px] text-white/45">
            Gemini model
          </span>

          <span className="rounded-md bg-white/15 px-2 py-1 text-[8px] text-white/80">
            Generate
          </span>
        </div>

      </div>
    ),
  },

  {
    title: "Codex",
    description:
      "Accelerate software development with AI-assisted coding, reasoning and automation.",
    category: "DEVELOPMENT",
    icon: <Code2 size={18} />,
    accent: "violet" as const,
    href: "#",

    preview: (
      <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-[#111827]/80 shadow-xl">

        {/* Window Header */}
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">

          <span className="h-2 w-2 rounded-full bg-red-300/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-300/70" />
          <span className="h-2 w-2 rounded-full bg-green-300/70" />

          <span className="ml-2 text-[8px] text-white/40">
            terminal
          </span>

        </div>

        {/* Code */}
        <div className="space-y-1.5 p-3 font-mono">

          <p className="text-[8px] text-violet-300">
            $ codex
          </p>

          <p className="text-[8px] text-white/65">
            analyzing project...
          </p>

          <p className="text-[8px] text-white/65">
            generating component...
          </p>

          <div className="mt-2 flex items-center gap-2">
            <span className="text-[8px] text-emerald-300">
              ✓
            </span>

            <span className="text-[8px] text-white/70">
              component created successfully
            </span>
          </div>

        </div>

      </div>
    ),
  },

  {
    title: "NotebookLM",
    description:
      "Research, analyze and understand your documents with an AI-powered workspace.",
    category: "RESEARCH",
    icon: <Database size={18} />,
    accent: "cyan" as const,
    href: "#",

    preview: (
      <div className="w-full rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur-md">

        {/* Header */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/15">
              <Database size={12} className="text-white" />
            </div>

            <span className="text-[9px] font-medium text-white/80">
              Notebook
            </span>

          </div>

          <span className="text-[8px] text-white/40">
            4 sources
          </span>

        </div>

        {/* Sources */}
        <div className="mt-3 space-y-1.5">

          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-2 py-1.5">

            <FileText size={10} className="text-white/70" />

            <span className="truncate text-[8px] text-white/70">
              Research Paper.pdf
            </span>

          </div>

          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-2 py-1.5">

            <FileText size={10} className="text-white/70" />

            <span className="truncate text-[8px] text-white/70">
              Project Documentation
            </span>

          </div>

          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-2 py-1.5">

            <FileText size={10} className="text-white/70" />

            <span className="truncate text-[8px] text-white/70">
              Meeting Notes
            </span>

          </div>

        </div>

        {/* AI Response */}
        <div className="mt-3 rounded-lg bg-white/10 p-2">

          <p className="text-[8px] font-medium text-white/50">
            AI Summary
          </p>

          <p className="mt-1 text-[8px] leading-3.5 text-white/75">
            Key insights generated from your sources.
          </p>

        </div>

      </div>
    ),
  },
]

export function ToolCardsSection() {
  return (
    <section className="w-full bg-[#f8fafc] px-5 py-20 sm:px-8 lg:px-10">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

          <div className="max-w-2xl">

            <span
              className="
                inline-flex
                rounded-full
                border
                border-slate-200
                bg-white
                px-3
                py-1.5
                font-[Poppins]
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-slate-500
              "
            >
              Digital Toolset
            </span>

            <h2
              className="
                mt-4
                font-[Poppins]
                text-3xl
                font-semibold
                tracking-[-0.04em]
                text-slate-950
                sm:text-4xl
              "
            >
              Powerful tools for modern workflows.
            </h2>

            <p
              className="
                mt-4
                max-w-xl
                font-[Poppins]
                text-sm
                leading-7
                text-slate-500
              "
            >
              Explore a curated collection of professional tools
              designed for development, AI, research and productivity.
            </p>

          </div>

          <button
            className="
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-white
              px-4
              py-2.5
              font-[Poppins]
              text-xs
              font-semibold
              text-slate-700
              transition-all
              hover:border-slate-950
              hover:bg-slate-950
              hover:text-white
            "
          >
            Explore All

            <ArrowUpRight size={14} />
          </button>

        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {tools.map((tool) => (
            <ToolCard
              key={tool.title}
              {...tool}
            />
          ))}

        </div>

      </div>

    </section>
  )
}