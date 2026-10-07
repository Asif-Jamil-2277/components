"use client"

import { FeatureCard } from "./FeatureCard"

const featureCards = [
  {
    image: "/images/feature-card.jpg",
    title: "Nike Airforce1 Premium",
    subtitle: "Own the Airforce",
    description:
      "Step back into classic hoops style with a durable leather finish.",
    badge: "Best Seller",
    value: "$111",
    buttonText: "Buy Now",
    dots: 4,
    activeDot: 0,
    href: "#",
  },
  {
    image: "/images/feature-card.jpg",
    title: "Air Max Essential",
    subtitle: "Everyday Performance",
    description:
      "Designed for everyday comfort with a clean and modern silhouette.",
    badge: "Featured",
    value: "$129",
    buttonText: "Buy Now",
    dots: 4,
    activeDot: 1,
    href: "#",
  },
  {
    image: "/images/feature-card.jpg",
    title: "Court Vision Premium",
    subtitle: "Classic Street Style",
    description:
      "A timeless design built for comfort, movement and everyday wear.",
    badge: "New",
    value: "$99",
    buttonText: "Buy Now",
    dots: 4,
    activeDot: 2,
    href: "#",
  },
]

export function FeatureCardsSection() {
  return (
    <section className="w-full bg-[#f7f7f5] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-[Poppins] text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">
            Featured Collection
          </p>

          <h2 className="font-[Poppins] text-3xl font-semibold tracking-[-0.03em] text-neutral-950 md:text-5xl">
            Explore our featured cards
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}