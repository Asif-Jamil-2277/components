"use client"

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react"

import { motion } from "framer-motion"

import { ProductCard } from "./ProductCard"
import { products } from "./product.data"

const ease = [0.22, 1, 0.36, 1] as const

type CardPosition =
  | "left"
  | "active"
  | "right"
  | "hidden-left"
  | "hidden-right"

export function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const total = products.length

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const next = useCallback(() => {
    setActiveIndex((current) =>
      current === total - 1 ? 0 : current + 1
    )
  }, [total])

  const previous = useCallback(() => {
    setActiveIndex((current) =>
      current === 0 ? total - 1 : current - 1
    )
  }, [total])

  /* =========================================================
     AUTO PLAY
  ========================================================= */

  useEffect(() => {
    if (paused || total <= 1) {
      return
    }

    const timer = window.setInterval(() => {
      next()
    }, 5200)

    return () => {
      window.clearInterval(timer)
    }
  }, [paused, next, total])

  /* =========================================================
     GET RELATIVE POSITION
  ========================================================= */

  const getRelativeIndex = useCallback(
    (index: number) => {
      let difference = index - activeIndex

      if (difference > total / 2) {
        difference -= total
      }

      if (difference < -total / 2) {
        difference += total
      }

      return difference
    },
    [activeIndex, total]
  )

  /* =========================================================
     POSITION CONFIG
  ========================================================= */

  const getCardPosition = (
    relativeIndex: number
  ): CardPosition => {
    if (relativeIndex === 0) {
      return "active"
    }

    if (relativeIndex === -1) {
      return "left"
    }

    if (relativeIndex === 1) {
      return "right"
    }

    if (relativeIndex < -1) {
      return "hidden-left"
    }

    return "hidden-right"
  }

  /* =========================================================
     CARD STYLE
  ========================================================= */

  const getCardAnimation = (
    position: CardPosition
  ) => {
    switch (position) {
      case "active":
        return {
          left: "23%",
          width: "54%",
          opacity: 1,
          scale: 1,
          zIndex: 30,
        }

      case "left":
        return {
          left: "0%",
          width: "21%",
          opacity: 1,
          scale: 0.98,
          zIndex: 20,
        }

      case "right":
        return {
          left: "79%",
          width: "21%",
          opacity: 1,
          scale: 0.98,
          zIndex: 20,
        }

      case "hidden-left":
        return {
          left: "-25%",
          width: "21%",
          opacity: 0,
          scale: 0.94,
          zIndex: 5,
        }

      case "hidden-right":
        return {
          left: "104%",
          width: "21%",
          opacity: 0,
          scale: 0.94,
          zIndex: 5,
        }
    }
  }

  /* =========================================================
     PRODUCTS
  ========================================================= */

  const renderedProducts = useMemo(() => {
    return products.map((product, index) => {

      const relativeIndex =
        getRelativeIndex(index)

      const position =
        getCardPosition(relativeIndex)

      return {
        product,
        index,
        relativeIndex,
        position,
      }
    })
  }, [
    getRelativeIndex,
    activeIndex,
  ])

  if (!products.length) {
    return null
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F6F8FB]
        px-5
        py-20
        sm:px-8
        lg:px-10
        lg:py-28
      "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            left-[8%]
            top-[12%]
            h-[320px]
            w-[320px]
            rounded-full
            bg-blue-500/[0.035]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-[5%]
            right-[4%]
            h-[340px]
            w-[340px]
            rounded-full
            bg-cyan-400/[0.025]
            blur-3xl
          "
        />

      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div
          className="
            mb-10
            flex
            flex-col
            gap-6
            sm:mb-12
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >

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
                tracking-[0.18em]
                text-slate-500
                shadow-sm
              "
            >
              Our Toolkit
            </span>

            <h2
              className="
                mt-4
                font-[Poppins]
                text-3xl
                font-semibold
                leading-[1.1]
                tracking-[-0.04em]
                text-slate-950
                sm:text-4xl
                lg:text-[46px]
              "
            >
              Powerful tools for

              <span className="block text-slate-400">
                modern workflows.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-xl
                font-[Poppins]
                text-sm
                font-medium
                leading-7
                text-slate-500
              "
            >
              Discover professional tools designed to improve
              development, AI workflows, research and productivity.
            </p>

          </div>

          <button
            type="button"
            onClick={() => setActiveIndex(0)}
            className="
              group
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
              shadow-sm
              transition-all
              duration-300
              hover:border-slate-950
              hover:bg-slate-950
              hover:text-white
            "
          >
            Explore All

            <ArrowRight
              size={14}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>

        </div>

        {/* ===================================================
            DESKTOP TRACK VIEWPORT
        =================================================== */}

        <div
          className="
            relative
            hidden
            h-[470px]
            w-full
            overflow-visible
            md:block
          "
        >

          {/* subtle viewport line */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-px
              bg-slate-200
            "
          />

          {/* =================================================
              CARDS
          ================================================= */}

          {renderedProducts.map(
            ({
              product,
              index,
              position,
            }) => {

              const animation =
                getCardAnimation(position)

              const isActive =
                position === "active"

              return (
                <motion.div
                  key={product.id}
                  className="
                    absolute
                    top-0
                    h-full
                    will-change-[left,width,transform,opacity]
                  "
                  initial={false}
                  animate={animation}
                  transition={{
                    left: {
                      duration: 1.05,
                      ease,
                    },

                    width: {
                      duration: 1.05,
                      ease,
                    },

                    opacity: {
                      duration: 0.7,
                      ease,
                    },

                    scale: {
                      duration: 1.05,
                      ease,
                    },
                  }}
                >

                  <ProductCard
                    product={product}
                    active={isActive}
                    onClick={() => {

                      if (position === "left") {
                        setActiveIndex(
                          index
                        )
                      }

                      if (position === "right") {
                        setActiveIndex(
                          index
                        )
                      }

                    }}
                  />

                </motion.div>
              )
            }
          )}

        </div>

        {/* ===================================================
            MOBILE
        =================================================== */}

        <div className="md:hidden">

          <motion.div
            key={products[activeIndex].id}
            initial={{
              opacity: 0,
              x: 24,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.55,
              ease,
            }}
          >

            <ProductCard
              product={products[activeIndex]}
              active
            />

          </motion.div>

        </div>

        {/* ===================================================
            CONTROLS
        =================================================== */}

        <div
          className="
            mt-8
            flex
            items-center
            justify-between
          "
        >

          {/* Dots */}

          <div className="flex items-center gap-2">

            {products.map(
              (product, index) => (

                <button
                  key={product.id}
                  type="button"
                  aria-label={`Show ${product.title}`}
                  onClick={() =>
                    setActiveIndex(index)
                  }
                  className="
                    flex
                    h-5
                    items-center
                    justify-center
                  "
                >

                  <motion.span
                    animate={{
                      width:
                        activeIndex === index
                          ? 28
                          : 6,

                      opacity:
                        activeIndex === index
                          ? 1
                          : 0.3,
                    }}
                    transition={{
                      duration: 0.35,
                      ease,
                    }}
                    className="
                      h-1.5
                      rounded-full
                      bg-slate-950
                    "
                  />

                </button>
              )
            )}

          </div>

          {/* Arrows */}

          <div className="flex items-center gap-2">

            <button
              type="button"
              onClick={previous}
              aria-label="Previous product"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-slate-600
                shadow-sm
                transition-all
                duration-300
                hover:border-slate-950
                hover:bg-slate-950
                hover:text-white
              "
            >
              <ArrowLeft size={16} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next product"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-slate-600
                shadow-sm
                transition-all
                duration-300
                hover:border-slate-950
                hover:bg-slate-950
                hover:text-white
              "
            >
              <ArrowRight size={16} />
            </button>

          </div>

        </div>

        {/* ===================================================
            PROGRESS
        =================================================== */}

        <div className="mt-5 h-px w-full overflow-hidden bg-slate-200">

          <motion.div
            key={activeIndex}
            initial={{
              width: "0%",
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 5.2,
              ease: "linear",
            }}
            className="
              h-full
              bg-slate-950
            "
          />

        </div>

      </div>
    </section>
  )
}