"use client"

import {
  useCallback,
  useEffect,
  useState,
} from "react"

import { motion } from "framer-motion"

import { MediaCard } from "./MediaCard"
import { mediaItems } from "./media.data"

const ease = [0.22, 1, 0.36, 1] as const

const AUTO_PLAY_DELAY = 1100
const ANIMATION_DURATION = 0.9

export function MediaCardsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const total = mediaItems.length

  /*
   * -------------------------------------------------------
   * NEXT SLIDE
   * -------------------------------------------------------
   */

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => {
      return (current + 1) % total
    })
  }, [total])

  /*
   * -------------------------------------------------------
   * AUTO ROTATION
   *
   * Reference video:
   * roughly one card movement per second.
   *
   * Hover = STOP
   * Leave = RESUME
   * -------------------------------------------------------
   */

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

  /*
   * -------------------------------------------------------
   * CIRCULAR POSITION
   *
   * -2 = far left
   * -1 = left
   *  0 = active
   * +1 = right
   * +2 = far right
   *
   * This keeps the carousel circular.
   * -------------------------------------------------------
   */

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

  /*
   * -------------------------------------------------------
   * X POSITIONS
   *
   * Cards are intentionally close together,
   * matching the reference video.
   * -------------------------------------------------------
   */

  const getX = (position: number) => {
    switch (position) {
      case -2:
        return -430

      case -1:
        return -220

      case 0:
        return 0

      case 1:
        return 220

      case 2:
        return 430

      default:
        return position < 0 ? -700 : 700
    }
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#030303]
        py-20
        sm:py-24
      "
    >
      {/* ===================================================
          OUTER RED GLOW
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[330px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-red-900/25
          blur-[120px]
        "
      />

      {/* ===================================================
          INNER RED GLOW
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[180px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-red-600/10
          blur-[80px]
        "
      />

      {/* ===================================================
          CAROUSEL
      =================================================== */}

      <div
        className="
          relative
          mx-auto
          h-[360px]
          w-full
          sm:h-[390px]
        "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {mediaItems.map((item, index) => {
          const position = getPosition(index)

          const active = position === 0

          return (
            <motion.div
              key={item.id}
              className="
                absolute
                left-1/2
                top-1/2
                h-[265px]
                w-[180px]
                -translate-x-1/2
                -translate-y-1/2
                sm:h-[305px]
                sm:w-[205px]
              "
              initial={false}
              animate={{
                x: getX(position),
              }}
              transition={{
                duration: ANIMATION_DURATION,
                ease,
              }}
              style={{
                zIndex: active
                  ? 50
                  : 30 - Math.abs(position),
              }}
            >
              <MediaCard
                item={item}
                active={active}
                position={position}
              />
            </motion.div>
          )
        })}
      </div>

      {/* ===================================================
          PAGINATION
      =================================================== */}

      <div className="relative mt-4 flex justify-center">
        <div className="flex items-center gap-2">
          {mediaItems.map((item, index) => {
            const active =
              activeIndex === index

            return (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  setActiveIndex(index)
                }
                aria-label={`Show ${item.title}`}
                className="
                  flex
                  h-5
                  items-center
                  justify-center
                "
              >
                <motion.span
                  animate={{
                    width: active ? 24 : 4,
                    opacity: active ? 1 : 0.25,
                  }}
                  transition={{
                    duration: 0.25,
                    ease,
                  }}
                  className="
                    h-1
                    rounded-full
                    bg-white
                  "
                />
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}