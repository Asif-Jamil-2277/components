"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

export interface ToolCardProps {
  title: string
  description: string
  category: string
  icon?: React.ReactNode
  preview?: React.ReactNode
  href?: string
  accent?: "blue" | "violet" | "cyan" | "pink" | "orange"
}

const accentStyles = {
  blue: {
    background:
      "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
    glow: "bg-blue-500/20",
  },

  violet: {
    background:
      "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
    glow: "bg-violet-500/20",
  },

  cyan: {
    background:
      "linear-gradient(135deg, #0891b2 0%, #2563eb 100%)",
    glow: "bg-cyan-500/20",
  },

  pink: {
    background:
      "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    glow: "bg-pink-500/20",
  },

  orange: {
    background:
      "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
    glow: "bg-orange-500/20",
  },
}

export function ToolCard({
  title,
  description,
  category,
  icon,
  preview,
  href = "#",
  accent = "blue",
}: ToolCardProps) {
  const style = accentStyles[accent]

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -5 }}
      className="
        group
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-slate-200
        bg-white
        shadow-[0_12px_35px_rgba(15,23,42,0.06)]
        transition-shadow
        duration-300
        hover:shadow-[0_24px_60px_rgba(15,23,42,0.11)]
      "
    >
      {/* Preview */}
      <div
        className="
          relative
          min-h-[235px]
          overflow-hidden
          p-4
        "
        style={{
          background: style.background,
        }}
      >
        {/* Decorative Glow */}
        <div
          className={`
            absolute
            -right-16
            -top-16
            h-40
            w-40
            rounded-full
            blur-3xl
            ${style.glow}
          `}
        />

        <div
          className="
            absolute
            -bottom-20
            -left-16
            h-44
            w-44
            rounded-full
            bg-white/10
            blur-3xl
          "
        />

        {/* Top Row */}
        <div className="relative z-10 flex items-start justify-between">
          {/* Category */}
          <span
            className="
              rounded-full
              border
              border-white/20
              bg-white/10
              px-3
              py-1.5
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-white/90
              backdrop-blur-md
            "
          >
            {category}
          </span>

          {/* Icon */}
          {icon && (
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-white/20
                bg-white/15
                text-white
                backdrop-blur-md
              "
            >
              {icon}
            </div>
          )}
        </div>

        {/* Preview Content */}
        <div className="relative z-10 mt-7 flex min-h-[145px] items-center justify-center">
          {preview ? (
            preview
          ) : (
            <div
              className="
                flex
                h-full
                w-full
                items-center
                justify-center
                rounded-2xl
                border
                border-white/15
                bg-white/10
                text-sm
                font-medium
                text-white/70
                backdrop-blur-sm
              "
            >
              Tool Preview
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              className="
                font-[Poppins]
                text-[18px]
                font-semibold
                tracking-[-0.025em]
                text-slate-950
              "
            >
              {title}
            </h3>

            <p
              className="
                mt-2
                max-w-[290px]
                font-[Poppins]
                text-[12px]
                font-medium
                leading-[1.6]
                text-slate-500
              "
            >
              {description}
            </p>
          </div>

          {/* Arrow */}
          <Link
            href={href}
            aria-label={`Open ${title}`}
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-slate-50
              text-slate-500
              transition-all
              duration-300
              group-hover:border-slate-950
              group-hover:bg-slate-950
              group-hover:text-white
            "
          >
            <ArrowUpRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:rotate-45
              "
            />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}