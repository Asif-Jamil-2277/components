"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import type { MediaItem } from "./media.data"

interface MediaCardProps {
  item: MediaItem
  active: boolean
  position: number
}

const ease = [0.22, 1, 0.36, 1] as const

export function MediaCard({
  item,
  active,
  position,
}: MediaCardProps) {
  const distance = Math.abs(position)

  return (
    <motion.article
      animate={{
        scale:
          distance === 0
            ? 1
            : distance === 1
              ? 0.84
              : 0.70,

        opacity:
          distance === 0
            ? 1
            : distance === 1
              ? 0.62
              : 0.30,

        filter:
          distance === 0
            ? "brightness(1)"
            : distance === 1
              ? "brightness(0.68)"
              : "brightness(0.48)",
      }}
      transition={{
        duration: 0.8,
        ease,
      }}
      className="
        relative
        h-[265px]
        w-[180px]
        overflow-hidden
        rounded-[12px]
        bg-neutral-900
        shadow-[0_25px_65px_rgba(0,0,0,0.55)]
        sm:h-[305px]
        sm:w-[205px]
      "
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        priority={active}
        sizes="205px"
        className="object-cover"
      />

      {/* Dark gradient */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/5
          to-transparent
        "
      />

      {/* Rating */}

      <div
        className="
          absolute
          right-3
          top-3
          z-10
          font-[Poppins]
          text-[10px]
          font-medium
          text-white
        "
      >
        {item.rating}

        <span className="ml-1 text-white/60">
          ★
        </span>
      </div>

      {/* Content */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-10
          p-4
        "
      >
        <h3
          className="
            line-clamp-2
            font-[Poppins]
            text-[12px]
            font-medium
            leading-[1.3]
            text-white
            sm:text-[14px]
          "
        >
          {item.title}
        </h3>

        <div
          className="
            mt-2
            flex
            items-center
            gap-1.5
            whitespace-nowrap
            font-[Poppins]
            text-[7px]
            font-medium
            text-white/55
            sm:text-[8px]
          "
        >
          <span>{item.year}</span>

          <span
            className="
              h-[2px]
              w-[2px]
              rounded-full
              bg-white/40
            "
          />

          <span>{item.duration}</span>
        </div>
      </div>
    </motion.article>
  )
}