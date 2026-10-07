"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

export interface FeatureCardProps {
  image: string
  title: string
  subtitle?: string
  description?: string
  badge?: string
  logo?: string
  value?: string
  buttonText?: string
  dots?: number
  activeDot?: number
  href?: string
}

export function FeatureCard({
  image,
  title,
  subtitle,
  description,
  badge,
  logo,
  value,
  buttonText = "View More",
  dots = 4,
  activeDot = 0,
  href = "#",
}: FeatureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="
        group
        w-full
        max-w-[340px]
        overflow-hidden
        rounded-[28px]
        bg-white
        p-2
        shadow-[0_18px_50px_rgba(0,0,0,0.10)]
        transition-shadow
        duration-300
        hover:shadow-[0_24px_65px_rgba(0,0,0,0.16)]
      "
    >
      {/* Image Area */}
      <div className="relative aspect-[0.92] w-full overflow-hidden rounded-[22px] bg-neutral-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 340px"
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/10" />

        {/* Badge */}
        {badge && (
          <div
            className="
              absolute
              left-4
              top-4
              rounded-full
              bg-white/90
              px-3
              py-1.5
              text-[11px]
              font-medium
              tracking-wide
              text-neutral-800
              shadow-sm
              backdrop-blur-md
            "
          >
            {badge}
          </div>
        )}

        {/* Logo */}
        {logo && (
          <div
            className="
              absolute
              right-4
              top-4
              flex
              h-10
              w-10
              items-center
              justify-center
              overflow-hidden
              rounded-full
              bg-white/95
              p-2
              shadow-sm
              backdrop-blur-md
            "
          >
            <Image
              src={logo}
              alt=""
              width={28}
              height={28}
              className="h-full w-full object-contain"
            />
          </div>
        )}

        {/* Carousel Dots */}
        {dots > 1 && (
          <div
            className="
              absolute
              bottom-3
              left-1/2
              flex
              -translate-x-1/2
              items-center
              gap-1.5
              rounded-full
              bg-black/15
              px-2
              py-1
              backdrop-blur-sm
            "
          >
            {Array.from({ length: dots }).map((_, index) => (
              <span
                key={index}
                className={`
                  block
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    index === activeDot
                      ? "h-2 w-2 bg-white"
                      : "h-1.5 w-1.5 bg-white/50"
                  }
                `}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-2 pb-2 pt-4">
        {/* Title */}
        <h3
          className="
            font-[Poppins]
            text-[18px]
            font-semibold
            leading-[1.25]
            tracking-[-0.02em]
            text-neutral-950
          "
        >
          {title}
        </h3>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="
              mt-1
              font-[Poppins]
              text-[13px]
              font-medium
              text-neutral-400
            "
          >
            {subtitle}
          </p>
        )}

        {/* Description */}
        {description && (
          <p
            className="
              mt-2
              max-w-[290px]
              font-[Poppins]
              text-[12px]
              font-medium
              leading-[1.45]
              text-neutral-400
            "
          >
            {description}
          </p>
        )}

        {/* Bottom Action Row */}
        <div className="mt-5 flex items-center justify-between gap-3">
          {/* Value */}
          {value && (
            <div
              className="
                rounded-full
                bg-neutral-100
                px-4
                py-2
                font-[Poppins]
                text-[14px]
                font-semibold
                text-neutral-900
              "
            >
              {value}
            </div>
          )}

          {/* CTA */}
          <a
            href={href}
            className="
              group/button
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-neutral-950
              px-4
              py-2
              font-[Poppins]
              text-[12px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-neutral-800
            "
          >
            {buttonText}

            <span
              className="
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-white
                text-neutral-950
                transition-transform
                duration-300
                group-hover/button:rotate-45
              "
            >
              <ArrowUpRight size={12} strokeWidth={2.5} />
            </span>
          </a>
        </div>
      </div>
    </motion.article>
  )
}