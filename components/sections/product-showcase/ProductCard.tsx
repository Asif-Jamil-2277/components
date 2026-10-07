"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

import type { ProductItem } from "./product.data"

interface ProductCardProps {
  product: ProductItem
  active: boolean
  onClick?: () => void
}

const smoothEase = [0.22, 1, 0.36, 1] as const

export function ProductCard({
  product,
  active,
  onClick,
}: ProductCardProps) {
  return (
    <motion.article
      onClick={onClick}
      className="
        absolute
        top-0
        h-full
        w-full
        cursor-pointer
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200
        bg-white
        shadow-[0_18px_55px_rgba(15,23,42,0.07)]
        will-change-[left,width,transform]
      "
      animate={{
        boxShadow: active
          ? "0 24px 70px rgba(15,23,42,0.12)"
          : "0 14px 40px rgba(15,23,42,0.055)",
      }}
      transition={{
        duration: 0.9,
        ease: smoothEase,
      }}
    >
      <div className="flex h-full w-full flex-col">

        {/* ==================================================
            IMAGE
        ================================================== */}

        <motion.div
          className="
            relative
            w-full
            shrink-0
            overflow-hidden
            bg-slate-100
          "
          animate={{
            height: active ? 245 : 0,
            opacity: active ? 1 : 0,
          }}
          transition={{
            duration: 0.85,
            ease: smoothEase,
          }}
        >
          {active && (
            <>
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="
                  object-cover
                  transition-transform
                  duration-1000
                  ease-out
                  group-hover:scale-[1.02]
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-slate-950/25
                  via-transparent
                  to-transparent
                "
              />
            </>
          )}
        </motion.div>

        {/* ==================================================
            CONTENT
        ================================================== */}

        <div
          className="
            flex
            min-h-0
            flex-1
            flex-col
            justify-between
            p-5
            sm:p-6
          "
        >

          {/* =================================================
              TOP CONTENT
          ================================================= */}

          <div className="min-w-0">

            {/* Category */}

            <div
              className="
                mb-5
                flex
                items-center
                justify-between
                gap-3
              "
            >

              <span
                className="
                  inline-flex
                  max-w-[85%]
                  truncate
                  rounded-full
                  border
                  border-slate-200
                  bg-slate-50
                  px-3
                  py-1.5
                  font-[Poppins]
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-slate-500
                "
              >
                {product.category}
              </span>

              <motion.span
                animate={{
                  scale: active ? 1 : 0.7,
                  opacity: active ? 1 : 0.4,
                }}
                transition={{
                  duration: 0.5,
                  ease: smoothEase,
                }}
                className="
                  h-2
                  w-2
                  shrink-0
                  rounded-full
                  bg-blue-600
                "
              />

            </div>

            {/* Title */}

            <motion.h3
              layout="position"
              className="
                font-[Poppins]
                text-lg
                font-semibold
                leading-[1.25]
                tracking-[-0.025em]
                text-slate-950
                sm:text-xl
              "
            >
              {product.title}
            </motion.h3>

            {/* Description */}

            <motion.p
              layout="position"
              className="
                mt-3
                font-[Poppins]
                text-xs
                font-medium
                leading-6
                text-slate-500
                sm:text-sm
              "
            >
              {product.description}
            </motion.p>

          </div>

          {/* =================================================
              FOOTER
          ================================================= */}

          <div
            className="
              mt-6
              flex
              items-center
              justify-between
              border-t
              border-slate-100
              pt-4
            "
          >

            <Link
              href="#"
              onClick={(event) => {
                event.stopPropagation()
              }}
              className="
                inline-flex
                items-center
                gap-2
                font-[Poppins]
                text-xs
                font-semibold
                text-slate-700
                transition-colors
                duration-300
                hover:text-blue-600
              "
            >
              Read More

              <ArrowUpRight
                size={13}
              />
            </Link>

            <Link
              href="#"
              onClick={(event) => {
                event.stopPropagation()
              }}
              aria-label={`Open ${product.title}`}
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
                hover:border-slate-950
                hover:bg-slate-950
                hover:text-white
              "
            >
              <ArrowUpRight
                size={14}
              />
            </Link>

          </div>

        </div>

      </div>
    </motion.article>
  )
}