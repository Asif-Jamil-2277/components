"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import { ShowcaseCard } from "./ShowcaseCard"
import { showcaseItems } from "./showcase.data"

const ease = [0.22, 1, 0.36, 1] as const

export function ShowcaseCardsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const total = showcaseItems.length

  const getRelativePosition = (index: number) => {
    let position = index - activeIndex

    if (position > total / 2) {
      position -= total
    }

    if (position < -total / 2) {
      position += total
    }

    return position
  }

  /*
   * IMPORTANT:
   *
   * Active card width = 560px
   * Inactive card width = 220px
   *
   * We position cards based on their ACTUAL width
   * so they don't overlap each other.
   */

  const getXPosition = (position: number) => {
    const positions: Record<number, number> = {
      [-2]: -760,
      [-1]: -520,
      [0]: -280,
      [1]: 300,
      [2]: 540,
    }

    return positions[position] ?? (
      position < 0 ? -1000 : 1000
    )
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
      "
    >
      <div
        className="
          relative
          mx-auto
          h-[500px]
          w-full
          max-w-[1500px]
        "
      >
        {showcaseItems.map((item, index) => {
          const position = getRelativePosition(index)

          const active = position === 0

          return (
            <motion.div
              key={item.id}
              className="
                absolute
                left-1/2
                top-1/2
                h-[470px]
                -translate-y-1/2
              "
              initial={false}
              animate={{
                x: getXPosition(position),
              }}
              transition={{
                duration: 0.85,
                ease,
              }}
              style={{
                zIndex: active
                  ? 50
                  : 30 - Math.abs(position),
              }}
            >
              <ShowcaseCard
                item={item}
                active={active}
                onClick={() => setActiveIndex(index)}
              />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}