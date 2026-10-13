"use client"

import {
  useCallback,
  useEffect,
  useState,
} from "react"

import { motion } from "framer-motion"

import { LimeCard } from "./LimeCard"
import { limeItems } from "./lime.data"

const ease = [0.22, 1, 0.36, 1] as const

const AUTO_PLAY_DELAY = 1400
const ANIMATION_DURATION = 0.8

export function LimeShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const total = limeItems.length

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % total)
  }, [total])

  useEffect(() => {
    if (isHovered || total <= 1) {
      return
    }

    const timer = window.setInterval(() => {
      nextSlide()
    }, AUTO_PLAY_DELAY)

    return () => {
      window.clearInterval(timer)
    }
  }, [isHovered, nextSlide, total])

  const getPosition = (index: number) => {
    let position = index - activeIndex
    const half = Math.floor(total / 2)

    if (position > half) {
      position -= total
    }
    if (position < -half) {
      position += total
    }

    return position
  }

  const getX = (position: number) => {
    switch (position) {
      case -2:
        return -480
      case -1:
        return -250
      case 0:
        return 0
      case 1:
        return 250
      case 2:
        return 480
      default:
        return position < 0 ? -750 : 750
    }
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#CCFF00]
        py-24
        sm:py-32
      "
    >
      {/* Section Header */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mb-12 text-center">
        <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-black/5 text-xs font-semibold tracking-wider text-slate-900 uppercase">
          Interactive Experience
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950">
          Built for modern learning & engagement
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-800/85 max-w-xl mx-auto">
          Smooth, high-impact animated card carousel inspired by your design reference.
        </p>
      </div>

      {/* Carousel Container */}
      <div
        className="
          relative
          mx-auto
          h-[420px]
          w-full
          max-w-7xl
          overflow-hidden
        "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {limeItems.map((item, index) => {
          const position = getPosition(index)
          const active = position === 0

          return (
            <motion.div
              key={item.id}
              className="
                absolute
                left-1/2
                top-1/2
                h-[360px]
                w-[260px]
                -translate-x-1/2
                -translate-y-1/2
                sm:h-[390px]
                sm:w-[290px]
              "
              initial={false}
              animate={{
                x: getX(position),
                scale: active ? 1 : 0.9,
                opacity: Math.abs(position) > 2 ? 0 : 1,
              }}
              transition={{
                duration: ANIMATION_DURATION,
                ease,
              }}
              style={{
                zIndex: active ? 50 : 30 - Math.abs(position),
                pointerEvents: Math.abs(position) > 2 ? "none" : "auto",
              }}
            >
              <LimeCard
                item={item}
                active={active}
                position={position}
              />
            </motion.div>
          )
        })}
      </div>

      {/* Pagination Dots */}
      <div className="relative mt-8 flex justify-center">
        <div className="flex items-center gap-2 bg-black/10 px-4 py-2 rounded-full backdrop-blur-sm">
          {limeItems.map((item, index) => {
            const active = activeIndex === index

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show slide ${index + 1}`}
                className="flex h-5 items-center justify-center"
              >
                <motion.span
                  animate={{
                    width: active ? 28 : 6,
                    opacity: active ? 1 : 0.4,
                  }}
                  transition={{
                    duration: 0.25,
                    ease,
                  }}
                  className="h-1.5 rounded-full bg-slate-950"
                />
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
