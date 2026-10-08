"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

import type { ShowcaseItem } from "./showcase.data"

interface ShowcaseCardProps {
  item: ShowcaseItem
  active: boolean
  onClick: () => void
}

const ease = [0.22, 1, 0.36, 1] as const

export function ShowcaseCard({
  item,
  active,
  onClick,
}: ShowcaseCardProps) {
  return (
    <motion.article
      onClick={onClick}
      animate={{
        width: active ? 560 : 220,
      }}
      transition={{
        duration: 0.85,
        ease,
      }}
      className="
        group
        relative
        h-[470px]
        shrink-0
        cursor-pointer
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200
        bg-white
        shadow-[0_20px_60px_rgba(15,23,42,0.08)]
      "
    >
      {/* IMAGE */}

      <motion.div
        animate={{
          height: active ? 250 : 470,
        }}
        transition={{
          duration: 0.85,
          ease,
        }}
        className="
          absolute
          inset-x-0
          top-0
          overflow-hidden
          bg-slate-100
        "
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority={active}
          sizes="(max-width: 768px) 100vw, 560px"
          className="
            object-cover
            transition-transform
            duration-1000
            ease-out
            group-hover:scale-[1.02]
          "
        />

        <motion.div
          animate={{
            opacity: active ? 0.04 : 0.28,
          }}
          transition={{
            duration: 0.5,
            ease,
          }}
          className="
            absolute
            inset-0
            bg-slate-950
          "
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-40
            bg-gradient-to-t
            from-black/40
            via-black/5
            to-transparent
          "
        />

        {/* LABEL */}

        <div className="absolute left-5 top-5 z-10">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-white/25
              bg-black/20
              px-3
              py-1.5
              font-[Poppins]
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-white
              backdrop-blur-md
            "
          >
            {item.label}
          </span>
        </div>

        {/* NUMBER */}

        <div
          className="
            absolute
            right-5
            top-5
            z-10
            font-[Poppins]
            text-[10px]
            font-semibold
            tracking-[0.18em]
            text-white/70
          "
        >
          {item.number}
        </div>

        {/* ARROW */}

        <motion.div
          animate={{
            opacity: active ? 0 : 1,
            scale: active ? 0.8 : 1,
          }}
          transition={{
            duration: 0.3,
            ease,
          }}
          className="
            absolute
            bottom-5
            right-5
            z-10
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-black/20
            text-white
            backdrop-blur-md
          "
        >
          <ArrowUpRight size={14} />
        </motion.div>
      </motion.div>

      {/* ACTIVE CONTENT */}

      <motion.div
        animate={{
          opacity: active ? 1 : 0,
          y: active ? 0 : 20,
        }}
        transition={{
          duration: 0.5,
          delay: active ? 0.12 : 0,
          ease,
        }}
        className="
          absolute
          inset-x-0
          bottom-0
          z-20
          h-[220px]
          bg-white
          p-6
        "
      >
        <div className="mb-5 flex items-center justify-between">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-blue-100
              bg-blue-50
              px-3
              py-1.5
              font-[Poppins]
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-blue-600
            "
          >
            {item.label}
          </span>

          <span
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-slate-50
              text-slate-600
            "
          >
            <ArrowUpRight size={14} />
          </span>
        </div>

        <h3
          className="
            font-[Poppins]
            text-2xl
            font-semibold
            leading-[1.15]
            tracking-[-0.035em]
            text-slate-950
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-3
            max-w-[470px]
            font-[Poppins]
            text-xs
            font-medium
            leading-6
            text-slate-500
            sm:text-sm
          "
        >
          {item.description}
        </p>

        <div
          className="
            absolute
            bottom-5
            left-6
            right-6
            flex
            items-center
            justify-between
            border-t
            border-slate-100
            pt-3
          "
        >
          <span
            className="
              font-[Poppins]
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-slate-400
            "
          >
            Explore
          </span>

          <span
            className="
              font-[Poppins]
              text-[10px]
              font-semibold
              tracking-[0.15em]
              text-slate-400
            "
          >
            {item.number}
          </span>
        </div>
      </motion.div>
    </motion.article>
  )
}