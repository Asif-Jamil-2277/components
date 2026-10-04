import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

import { heroContent } from "./hero.data";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero3-title"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#0b0f19]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#0056D2]/10
          blur-[140px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-60
          right-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#2563EB]/10
          blur-[130px]
        "
      />

      {/* subtle grid */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.08]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.18) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.18) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <header
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/10
            py-5
          "
        >
          {/* Brand */}

          <div className="flex items-center gap-2">

            <span className="text-lg font-bold tracking-[-0.04em]">
              Nexora
            </span>

            <span className="h-2 w-2 rounded-full bg-[#2F80FF]" />

          </div>

          {/* Navigation */}

          <nav className="hidden items-center gap-8 md:flex">

            <Link
              href="#home"
              className="
                text-xs
                font-medium
                text-white
                transition-colors
                hover:text-[#4D9AFF]
              "
            >
              Home
            </Link>

            <Link
              href="#services"
              className="
                text-xs
                font-medium
                text-white/55
                transition-colors
                hover:text-white
              "
            >
              Services
            </Link>

            <Link
              href="#work"
              className="
                text-xs
                font-medium
                text-white/55
                transition-colors
                hover:text-white
              "
            >
              Work
            </Link>

            <Link
              href="#about"
              className="
                text-xs
                font-medium
                text-white/55
                transition-colors
                hover:text-white
              "
            >
              About
            </Link>

          </nav>

          {/* Header CTA */}

          <Link
            href="#contact"
            className="
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              px-5
              py-2.5
              text-xs
              font-medium
              text-white
              transition-all
              duration-300
              hover:border-[#2F80FF]
              hover:bg-[#2F80FF]
              md:inline-flex
            "
          >
            Contact Us

            <ArrowUpRight size={14} />
          </Link>

        </header>

        {/* =====================================================
            MAIN HERO
        ====================================================== */}

        <div
          id="home"
          className="
            grid
            min-h-[calc(100vh-81px)]
            items-center
            gap-14
            py-16
            lg:grid-cols-[0.92fr_1.08fr]
            lg:gap-8
            lg:py-20
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="relative z-20">

            {/* Eyebrow */}

            <div
              className="
                mb-7
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-2
              "
            >

              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0056D2]/20">
                <Sparkles
                  size={11}
                  className="text-[#4D9AFF]"
                />
              </span>

              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
                {heroContent.eyebrow}
              </span>

            </div>

            {/* Heading */}

            <h1
              id="hero3-title"
              className="
                max-w-[680px]
                text-[clamp(3.5rem,6.5vw,6.8rem)]
                font-semibold
                leading-[0.91]
                tracking-[-0.065em]
              "
            >

              {heroContent.title}

              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-[#3B82F6]
                  via-[#60A5FA]
                  to-[#93C5FD]
                  bg-clip-text
                  text-transparent
                "
              >
                {heroContent.highlightedTitle}
              </span>

              <span className="text-[#3B82F6]">
                .
              </span>

            </h1>

            {/* Description */}

            <p
              className="
                mt-7
                max-w-[530px]
                text-sm
                leading-7
                text-white/55
                sm:text-base
              "
            >
              {heroContent.description}
            </p>

            {/* CTA */}

            <div className="mt-9 flex flex-wrap items-center gap-6">

              <Link
                href={heroContent.primaryCta.href}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#1769FF]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_12px_40px_rgba(23,105,255,0.25)]
                  transition-all
                  duration-300
                  hover:bg-[#2F80FF]
                  hover:shadow-[0_15px_50px_rgba(23,105,255,0.35)]
                "
              >

                {heroContent.primaryCta.label}

                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-white/15
                  "
                >
                  <ArrowUpRight size={14} />
                </span>

              </Link>

              <Link
                href={heroContent.secondaryCta.href}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border-b
                  border-white/20
                  pb-1.5
                  text-sm
                  font-medium
                  text-white/75
                  transition-colors
                  hover:border-[#4D9AFF]
                  hover:text-white
                "
              >

                {heroContent.secondaryCta.label}

                <ArrowRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </Link>

            </div>

          </div>

          {/* =================================================
              RIGHT VISUAL
          ================================================== */}

          <div className="relative mx-auto h-[570px] w-full max-w-[650px]">

            {/* Orbit */}

            <div
              aria-hidden="true"
              className="
                absolute
                left-1/2
                top-1/2
                h-[520px]
                w-[520px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#2F80FF]/20
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                left-1/2
                top-1/2
                h-[410px]
                w-[410px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-white/10
              "
            />

            {/* Orbit dots */}

            <span
              aria-hidden="true"
              className="
                absolute
                right-[7%]
                top-[19%]
                h-3
                w-3
                rounded-full
                bg-[#60A5FA]
                shadow-[0_0_20px_rgba(96,165,250,0.8)]
              "
            />

            <span
              aria-hidden="true"
              className="
                absolute
                bottom-[16%]
                left-[14%]
                h-4
                w-4
                rounded-full
                bg-[#1769FF]
                shadow-[0_0_25px_rgba(23,105,255,0.7)]
              "
            />

            {/* =============================================
                PERSON 1
            ============================================== */}

            <div
              className="
                absolute
                left-[7%]
                top-[10%]
                h-[290px]
                w-[190px]
                overflow-hidden
                rounded-[44px]
                bg-[#1769FF]
                shadow-2xl
              "
            >
              <Image
                src={heroContent.people[0].image}
                alt={heroContent.people[0].alt}
                fill
                sizes="190px"
                className="object-cover object-top"
              />
            </div>

            {/* =============================================
                PERSON 2
            ============================================== */}

            <div
              className="
                absolute
                right-[19%]
                top-[3%]
                h-[205px]
                w-[165px]
                overflow-hidden
                rounded-[42px]
                bg-[#2F80FF]
                shadow-2xl
              "
            >
              <Image
                src={heroContent.people[1].image}
                alt={heroContent.people[1].alt}
                fill
                sizes="165px"
                className="object-cover object-top"
              />
            </div>

            {/* =============================================
                PERSON 3
            ============================================== */}

            <div
              className="
                absolute
                right-[0]
                top-[27%]
                h-[270px]
                w-[175px]
                overflow-hidden
                rounded-[42px]
                bg-[#0E4297]
                shadow-2xl
              "
            >
              <Image
                src={heroContent.people[2].image}
                alt={heroContent.people[2].alt}
                fill
                sizes="175px"
                className="object-cover object-top"
              />
            </div>

            {/* =============================================
                PERSON 4
            ============================================== */}

            <div
              className="
                absolute
                left-[32%]
                top-[38%]
                z-10
                h-[250px]
                w-[175px]
                overflow-hidden
                rounded-[42px]
                bg-[#334155]
                shadow-2xl
              "
            >
              <Image
                src={heroContent.people[3].image}
                alt={heroContent.people[3].alt}
                fill
                sizes="175px"
                className="object-cover object-top"
              />
            </div>

            {/* =============================================
                PERSON 5
            ============================================== */}

            <div
              className="
                absolute
                bottom-[3%]
                right-[21%]
                z-20
                h-[225px]
                w-[165px]
                overflow-hidden
                rounded-[42px]
                bg-[#2563EB]
                shadow-2xl
              "
            >
              <Image
                src={heroContent.people[4].image}
                alt={heroContent.people[4].alt}
                fill
                sizes="165px"
                className="object-cover object-top"
              />
            </div>

            {/* =============================================
                COMMUNITY BADGE
            ============================================== */}

            <div
              className="
                absolute
                left-[0]
                top-[56%]
                z-30
                rounded-2xl
                border
                border-white/10
                bg-[#151b28]/90
                px-4
                py-3
                shadow-2xl
                backdrop-blur-md
              "
            >

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#1769FF]/15
                    text-[#60A5FA]
                  "
                >
                  <Sparkles size={16} />
                </div>

                <div>

                  <p className="text-[9px] uppercase tracking-[0.12em] text-white/40">
                    {heroContent.community.label}
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-white">
                    {heroContent.community.value}
                  </p>

                </div>

              </div>
            </div>

            {/* =============================================
                RATING BADGE
            ============================================== */}

            <div
              className="
                absolute
                bottom-[12%]
                right-[0]
                z-30
                rounded-2xl
                border
                border-white/10
                bg-[#151b28]/90
                px-5
                py-4
                shadow-2xl
                backdrop-blur-md
              "
            >

              <p className="text-2xl font-semibold tracking-tight text-white">
                {heroContent.rating.value}
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-white/40">
                {heroContent.rating.label}
              </p>

            </div>

          </div>
        </div>

        {/* =================================================
            FEATURE STRIP
        ================================================== */}

        <div className="border-t border-white/10">

          <div className="grid grid-cols-1 md:grid-cols-3">

            {heroContent.features.map((feature, index) => (
              <div
                key={feature.number}
                className={`
                  flex
                  items-center
                  gap-4
                  py-6
                  ${
                    index > 0
                      ? "border-t border-white/10 md:border-l md:border-t-0 md:pl-7"
                      : ""
                  }
                `}
              >

                <span className="text-[10px] font-semibold text-[#4D9AFF]">
                  {feature.number}
                </span>

                <div>

                  <p className="text-sm font-medium text-white">
                    {feature.title}
                  </p>

                  <p className="mt-1 text-[11px] text-white/35">
                    {feature.description}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}