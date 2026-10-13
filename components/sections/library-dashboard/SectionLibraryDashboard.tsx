
"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Blocks,
  LayoutTemplate,
  Search,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";

const categories = [
  "All",
  "Hero",
  "Features",
  "Cards",
  "Interactive",
  "Showcase",
] as const;

type Category = (typeof categories)[number];

const sections: {
  title: string;
  slug: string;
  category: Exclude<Category, "All">;
  description: string;
  number: string;
  accent: string;
}[] = [
  {
    title: "Aurora Hero",
    slug: "aurora-hero",
    category: "Hero",
    description: "Glowing visuals, floating panels and motion effects.",
    number: "01",
    accent: "from-violet-500/30 to-indigo-500/5",
  },
  {
    title: "Orbit Showcase",
    slug: "orbit-showcase",
    category: "Showcase",
    description: "Interactive orbit rings and floating technology nodes.",
    number: "02",
    accent: "from-lime-400/25 to-emerald-500/5",
  },
  {
    title: "Bento Features",
    slug: "bento-features",
    category: "Features",
    description: "An asymmetric grid for highlighting key capabilities.",
    number: "03",
    accent: "from-sky-400/25 to-blue-500/5",
  },
  {
    title: "Animated Stats",
    slug: "animated-stats",
    category: "Features",
    description: "Animated metrics and data-inspired visual elements.",
    number: "04",
    accent: "from-orange-400/25 to-amber-500/5",
  },
  {
    title: "Feature Tabs",
    slug: "feature-tabs",
    category: "Interactive",
    description: "Switch between feature panels with animated transitions.",
    number: "05",
    accent: "from-fuchsia-400/25 to-purple-500/5",
  },
  {
    title: "Scroll Story",
    slug: "scroll-story",
    category: "Interactive",
    description: "A multi-stage story with sticky visuals and progress.",
    number: "06",
    accent: "from-violet-400/25 to-indigo-500/5",
  },
  {
    title: "FAQ Section",
    slug: "faq-section",
    category: "Interactive",
    description: "An accessible accordion with smooth answer transitions.",
    number: "07",
    accent: "from-rose-400/25 to-orange-500/5",
  },
  {
    title: "Before / After",
    slug: "before-after",
    category: "Interactive",
    description: "Compare two designs with an interactive slider.",
    number: "08",
    accent: "from-emerald-400/25 to-teal-500/5",
  },
  {
    title: "Pricing Plans",
    slug: "pricing-plans",
    category: "Cards",
    description: "Pricing tiers with a billing-period toggle.",
    number: "09",
    accent: "from-cyan-400/25 to-blue-500/5",
  },
  {
    title: "Testimonials",
    slug: "testimonials",
    category: "Cards",
    description: "An editorial layout for customer testimonials.",
    number: "10",
    accent: "from-amber-400/25 to-orange-500/5",
  },
  {
    title: "Project Gallery",
    slug: "project-gallery",
    category: "Showcase",
    description: "Filterable project cards with animated transitions.",
    number: "11",
    accent: "from-pink-400/25 to-rose-500/5",
  },
  {
    title: "Brand Marquee",
    slug: "brand-marquee",
    category: "Showcase",
    description: "A continuous animated wordmark showcase.",
    number: "12",
    accent: "from-lime-400/25 to-green-500/5",
  },
  {
    title: "Travel Hero",
    slug: "travel-hero",
    category: "Hero",
    description: "A travel-inspired hero and destination presentation.",
    number: "13",
    accent: "from-teal-400/25 to-cyan-500/5",
  },
  {
    title: "Product Showcase",
    slug: "product-showcase",
    category: "Showcase",
    description: "A dedicated product presentation layout.",
    number: "14",
    accent: "from-orange-400/25 to-red-500/5",
  },
  {
    title: "Media Cards",
    slug: "media-cards",
    category: "Cards",
    description: "Reusable media-led cards and content layouts.",
    number: "15",
    accent: "from-blue-400/25 to-indigo-500/5",
  },
  {
    title: "Tool Cards",
    slug: "tool-cards",
    category: "Cards",
    description: "A collection layout for tools and resources.",
    number: "16",
    accent: "from-purple-400/25 to-pink-500/5",
  },
];

export function SectionLibraryDashboard() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");
  const reduceMotion = useReducedMotion();

  const filteredSections = useMemo(() => {
    const query = search.trim().toLowerCase();

    return sections.filter((section) => {
      const matchesCategory =
        activeCategory === "All" || section.category === activeCategory;

      const matchesSearch =
        !query ||
        section.title.toLowerCase().includes(query) ||
        section.description.toLowerCase().includes(query) ||
        section.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen bg-[#111216] px-4 py-8 text-white sm:px-7 sm:py-12 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/65">
              <Sparkles size={14} className="text-lime-300" />
              Your reusable design system
            </div>

            <h1 className="text-4xl font-semibold tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              UI Component
              <span className="block text-lime-300">Library.</span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
              Explore, filter and preview reusable sections without scrolling
              through the entire collection.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
            <Blocks size={22} className="text-lime-300" />
            <div>
              <p className="text-2xl font-semibold">{sections.length}</p>
              <p className="text-xs text-white/45">Section designs</p>
            </div>
          </div>
        </header>

        <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2 text-sm text-white/55">
            <SlidersHorizontal size={16} />
            Browse by category
          </div>

          <label className="relative block w-full lg:max-w-sm">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
            />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search components..."
              aria-label="Search components"
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-lime-300/60"
            />
          </label>
        </div>

        <div
          role="group"
          aria-label="Component categories"
          className="mb-9 flex gap-2 overflow-x-auto pb-2"
        >
          {categories.map((category) => {
            const selected = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={selected}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm transition-all duration-200 ${
                  selected
                    ? "border-lime-300 bg-lime-300 text-[#151711]"
                    : "border-white/10 bg-white/[0.03] text-white/65 hover:border-white/25 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mb-5 flex items-center justify-between gap-3">
          <p className="text-sm text-white/65">
            {activeCategory === "All" ? "All components" : activeCategory}
          </p>
          <p className="text-xs text-white/35">
            {filteredSections.length} results
          </p>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredSections.map((section, index) => (
              <motion.article
                layout
                key={section.slug}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={
                  reduceMotion ? undefined : { opacity: 0, y: 8, scale: 0.98 }
                }
                transition={{
                  duration: 0.24,
                  delay: reduceMotion ? 0 : Math.min(index * 0.025, 0.15),
                }}
                className="group overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.035] transition-colors hover:border-lime-300/35 hover:bg-white/[0.055]"
              >
                <div
                  className={`relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br ${section.accent}`}
                >
                  <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:24px_24px]" />

                  <motion.div
                    whileHover={reduceMotion ? undefined : { rotate: 8, scale: 1.08 }}
                    className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-black/20 shadow-xl backdrop-blur"
                  >
                    <LayoutTemplate size={27} strokeWidth={1.4} />
                  </motion.div>

                  <span className="absolute left-4 top-4 text-xs text-white/50">
                    {section.number}
                  </span>
                  <span className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[10px] text-white/70 backdrop-blur">
                    {section.category}
                  </span>
                </div>

                <div className="p-5">
                  <h2 className="text-lg font-medium tracking-tight">
                    {section.title}
                  </h2>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-white/45">
                    {section.description}
                  </p>

                  <a
                    href={`/sections/${section.slug}`}
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-xs font-medium text-white/75 transition hover:border-lime-300/50 hover:bg-lime-300 hover:text-[#151711]"
                  >
                    Open preview
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSections.length === 0 && (
          <div className="rounded-2xl border border-dashed border-white/15 px-5 py-16 text-center">
            <Search className="mx-auto mb-4 text-white/35" size={26} />
            <h2 className="text-lg font-medium">No components found</h2>
            <p className="mt-2 text-sm text-white/45">
              Try a different search or select another category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-5 rounded-full bg-lime-300 px-4 py-2.5 text-sm font-medium text-[#151711]"
            >
              Reset filters
            </button>
          </div>
        )}

        <footer className="mt-12 border-t border-white/10 pt-5 text-xs text-white/35">
          Reusable components · Individual previews · Responsive library
        </footer>
      </div>
    </main>
  );
}
