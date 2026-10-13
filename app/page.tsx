"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  CreditCard,
  FileText,
  KeyRound,
  LayoutTemplate,
  LockKeyhole,
  Mail,
  Search,
  ShieldCheck,
  UploadCloud,
  UserPlus,
  Workflow,
  Blocks,
  Sparkles,
} from "lucide-react";

type LibraryCategory =
  | "All"
  | "Forms"
  | "Hero"
  | "Features"
  | "Cards"
  | "Interactive"
  | "Showcase"
  | "Navigation"
  | "Brands"
  | "Pricing"
  | "Testimonials"
  | "Dashboard"
  | "CTA";

type FormComponent = {
  title: string;
  description: string;
  href: string;
  icon: typeof FileText;
  category: string;
  accent: string;
};

type UISection = {
  title: string;
  description: string;
  slug: string;
  category: Exclude<LibraryCategory, "All" | "Forms">;
  number: string;
  accent: string;
};

const categories: LibraryCategory[] = [
  "All",
  "Forms",
  "Hero",
  "Features",
  "Cards",
  "Interactive",
  "Showcase",
  "Navigation",
  "Brands",
  "Pricing",
  "Testimonials",
  "Dashboard",
  "CTA",
];

const formComponents: FormComponent[] = [
  { title: "Auth Form", description: "Sign in and sign up authentication experience.", href: "/forms/auth", icon: LockKeyhole, category: "Authentication", accent: "#2563EB" },
  { title: "Contact Form", description: "Clean contact and enquiry form for modern websites.", href: "/forms/contact", icon: Mail, category: "Communication", accent: "#4F46E5" },
  { title: "Registration Form", description: "Modern account creation form with validation-ready fields.", href: "/forms/registration", icon: UserPlus, category: "Authentication", accent: "#059669" },
  { title: "Forgot Password", description: "Secure password recovery and reset-link experience.", href: "/forms/forgot-password", icon: KeyRound, category: "Authentication", accent: "#EA580C" },
  { title: "OTP Verification", description: "Secure one-time password verification with resend and countdown.", href: "/forms/otp", icon: ShieldCheck, category: "Authentication", accent: "#2563EB" },
  { title: "Checkout Form", description: "Professional payment and order checkout experience.", href: "/forms/checkout", icon: CreditCard, category: "Commerce", accent: "#0F766E" },
  { title: "Multi-Step Wizard", description: "Guided multi-step form with progress tracking and review.", href: "/forms/wizard", icon: Workflow, category: "Forms", accent: "#7C3AED" },
  { title: "File Upload", description: "Drag-and-drop document upload with validation and progress.", href: "/forms/file-upload", icon: UploadCloud, category: "Utility", accent: "#0891B2" },
  { title: "Booking Form", description: "Appointment scheduling with date and time selection.", href: "/forms/booking", icon: CalendarDays, category: "Scheduling", accent: "#2563EB" },
];

const uiSections: UISection[] = [
  { title: "Aurora Hero", slug: "aurora-hero", category: "Hero", description: "Glowing visuals, floating panels and motion effects.", number: "01", accent: "from-violet-500/20 to-indigo-500/5" },
  { title: "Travel Hero", slug: "travel-hero", category: "Hero", description: "A travel-inspired hero and destination presentation.", number: "02", accent: "from-teal-400/25 to-cyan-500/5" },
  { title: "Bento Features", slug: "bento-features", category: "Features", description: "An asymmetric grid for highlighting key capabilities.", number: "03", accent: "from-sky-400/25 to-blue-500/5" },
  { title: "Animated Stats", slug: "animated-stats", category: "Features", description: "Animated metrics and data-inspired visual elements.", number: "04", accent: "from-orange-400/25 to-amber-500/5" },
  { title: "Feature Tabs", slug: "feature-tabs", category: "Features", description: "Switch between feature panels with animated transitions.", number: "05", accent: "from-fuchsia-400/25 to-purple-500/5" },
  { title: "Feature Cards", slug: "feature-cards", category: "Features", description: "Reusable cards for product and service features.", number: "06", accent: "from-cyan-400/25 to-blue-500/5" },
  { title: "Pricing Plans", slug: "pricing-plans", category: "Cards", description: "Pricing tiers with a billing-period toggle.", number: "07", accent: "from-cyan-400/25 to-blue-500/5" },
  { title: "Testimonials", slug: "testimonials", category: "Cards", description: "An editorial layout for customer testimonials.", number: "08", accent: "from-amber-400/25 to-orange-500/5" },
  { title: "Media Cards", slug: "media-cards", category: "Cards", description: "Media-led cards and content layouts.", number: "09", accent: "from-blue-400/25 to-indigo-500/5" },
  { title: "Tool Cards", slug: "tool-cards", category: "Cards", description: "A collection layout for tools and resources.", number: "10", accent: "from-purple-400/25 to-pink-500/5" },
  { title: "Showcase Cards", slug: "showcase-cards", category: "Cards", description: "Reusable showcase card layouts.", number: "11", accent: "from-rose-400/25 to-pink-500/5" },
  { title: "FAQ Section", slug: "faq-section", category: "Interactive", description: "An accordion with smooth answer transitions.", number: "12", accent: "from-rose-400/25 to-orange-500/5" },
  { title: "Before / After", slug: "before-after", category: "Interactive", description: "Compare two designs with an interactive slider.", number: "13", accent: "from-emerald-400/25 to-teal-500/5" },
  { title: "Scroll Story", slug: "scroll-story", category: "Interactive", description: "A multi-stage story with scroll-driven visuals.", number: "14", accent: "from-violet-400/25 to-indigo-500/5" },
  { title: "Orbit Showcase", slug: "orbit-showcase", category: "Showcase", description: "Orbit rings and floating technology nodes.", number: "15", accent: "from-lime-400/25 to-emerald-500/5" },
  { title: "Project Gallery", slug: "project-gallery", category: "Showcase", description: "Filterable project cards with animated transitions.", number: "16", accent: "from-pink-400/25 to-rose-500/5" },
  { title: "Brand Marquee", slug: "brand-marquee", category: "Showcase", description: "A continuous animated wordmark showcase.", number: "17", accent: "from-lime-400/25 to-green-500/5" },
  { title: "Product Showcase", slug: "product-showcase", category: "Showcase", description: "A dedicated product presentation layout.", number: "18", accent: "from-orange-400/25 to-red-500/5" },
  { title: "SaaS Navbar", slug: "saas-navbar", category: "Navigation", description: "A polished navigation bar for modern SaaS and product websites.", number: "19", accent: "from-indigo-400/25 to-violet-500/5" },
  { title: "Logo Cloud", slug: "logo-cloud", category: "Brands", description: "A clean brand-logo strip for partners, customers, and integrations.", number: "20", accent: "from-slate-400/25 to-blue-500/5" },
  { title: "Pricing Comparison", slug: "pricing-comparison", category: "Pricing", description: "Compare plans and features in a clear, conversion-focused layout.", number: "21", accent: "from-violet-400/25 to-fuchsia-500/5" },
  { title: "Testimonials Wall", slug: "testimonials-wall", category: "Testimonials", description: "A premium testimonial grid for customer stories and social proof.", number: "22", accent: "from-amber-400/25 to-orange-500/5" },
  { title: "Stats Dashboard", slug: "stats-dashboard", category: "Dashboard", description: "A dashboard-style overview with key metrics and visual hierarchy.", number: "23", accent: "from-cyan-400/25 to-blue-500/5" },
  { title: "CTA Sections", slug: "cta-sections", category: "CTA", description: "High-impact call-to-action sections for key conversion points.", number: "24", accent: "from-emerald-400/25 to-teal-500/5" },
];

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l border-slate-200 pl-4">
      <p className="font-[Poppins] text-2xl font-semibold tracking-tight text-slate-950">{value}</p>
      <p className="mt-1 text-xs font-medium text-slate-400">{label}</p>
    </div>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<LibraryCategory>("All");
  const [search, setSearch] = useState("");
  const reduceMotion = useReducedMotion();

  const query = search.trim().toLowerCase();

  const filteredForms = useMemo(
    () =>
      formComponents.filter((item) =>
        `${item.title} ${item.description} ${item.category}`.toLowerCase().includes(query),
      ),
    [query],
  );

  const filteredSections = useMemo(
    () =>
      uiSections.filter((item) => {
        const categoryMatches = activeCategory === "All" || activeCategory === "Forms" || item.category === activeCategory;
        const queryMatches = `${item.title} ${item.description} ${item.category}`.toLowerCase().includes(query);
        return categoryMatches && queryMatches;
      }),
    [activeCategory, query],
  );

  const showForms = activeCategory === "All" || activeCategory === "Forms";
  const showSections = activeCategory !== "Forms";

  const visibleCount =
    (showForms ? filteredForms.length : 0) +
    (showSections ? filteredSections.length : 0);

  return (
    <main className="min-h-screen bg-[#F6F8FB] text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/[0.045] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.28] [background-image:linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] [background-size:44px_44px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white transition-transform duration-300 group-hover:scale-105">
              <FileText className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight text-slate-950">Component Library</p>
              <p className="hidden text-[11px] text-slate-400 sm:block">Forms & reusable UI sections</p>
            </div>
          </Link>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <span className="hidden sm:inline">Design system</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>Active</span>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 pb-9 pt-12 sm:px-8 sm:pt-16 lg:px-10">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-500 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Modern Form & UI Components
          </div>
          <h1 className="font-[Poppins] text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
            One library. <span className="block text-slate-400">Every interface.</span>
          </h1>
          <p className="mt-5 max-w-2xl font-[Poppins] text-sm leading-7 text-slate-500 sm:text-base">
            Browse reusable forms and animated page sections from one compact dashboard. Filter by category or search for a component.
          </p>
        </div>
        <div className="mt-9 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3">
          <Stat value={String(formComponents.length + uiSections.length).padStart(2, "0")} label="Catalog items" />
          <Stat value={String(formComponents.length).padStart(2, "0")} label="Form experiences" />
          <Stat value={String(uiSections.length).padStart(2, "0")} label="UI sections" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Library explorer</p>
            <h2 className="mt-2 font-[Poppins] text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-3xl">
              Browse components
            </h2>
            <p className="mt-2 text-sm text-slate-500">Choose a category to reduce the list. Open any card to view its dedicated page.</p>
          </div>
          <label className="relative block w-full lg:max-w-sm">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search forms or sections..."
              aria-label="Search forms and UI sections"
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </label>
        </div>

        <div role="group" aria-label="Filter component categories" className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => {
            const selected = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={selected}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                  selected
                    ? "border-slate-950 bg-slate-950 text-white shadow-sm"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-950"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm font-medium text-slate-700">
            {activeCategory === "All" ? "All components" : `${activeCategory} components`}
          </p>
          <p className="text-xs text-slate-400">{visibleCount} results</p>
        </div>

        {showForms && (activeCategory === "Forms" || activeCategory === "All") && (
          <div className="mb-10">
            {activeCategory === "All" && (
              <div className="mb-4 flex items-center gap-2">
                <FileText className="h-4 w-4 text-blue-600" />
                <h3 className="font-[Poppins] text-lg font-semibold text-slate-900">Form components</h3>
                <span className="text-xs text-slate-400">{filteredForms.length}</span>
              </div>
            )}
            {filteredForms.length > 0 ? (
              <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {filteredForms.map((component, index) => {
                    const Icon = component.icon;
                    return (
                      <motion.div
                        key={component.href}
                        layout
                        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduceMotion ? undefined : { opacity: 0, y: 8 }}
                        transition={{ duration: 0.22, delay: reduceMotion ? 0 : Math.min(index * 0.025, 0.15) }}
                      >
                        <Link href={component.href} className="group relative block h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                          <span className="absolute left-0 top-0 h-full w-[3px] opacity-70 transition-all group-hover:w-1" style={{ backgroundColor: component.accent }} />
                          <div className="flex items-start justify-between">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ backgroundColor: `${component.accent}12`, color: component.accent }}>
                              <Icon className="h-5 w-5" />
                            </div>
                            <ArrowUpRight className="h-4 w-4 text-slate-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-700" />
                          </div>
                          <div className="mt-6">
                            <div className="mb-2 flex flex-wrap items-center gap-2">
                              <h4 className="text-base font-semibold text-slate-950">{component.title}</h4>
                              <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] text-slate-500">{component.category}</span>
                            </div>
                            <p className="min-h-12 text-sm leading-6 text-slate-500">{component.description}</p>
                          </div>
                          <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-4">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                            <span className="text-xs font-medium text-slate-400">Ready to preview</span>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            ) : (
              <p className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">No forms match your search.</p>
            )}
          </div>
        )}

        {showSections && (
          <div>
            {activeCategory === "All" && (
              <div className="mb-4 flex items-center gap-2">
                <Blocks className="h-4 w-4 text-blue-600" />
                <h3 className="font-[Poppins] text-lg font-semibold text-slate-900">UI sections</h3>
                <span className="text-xs text-slate-400">{filteredSections.length}</span>
              </div>
            )}
            {filteredSections.length > 0 ? (
              <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {filteredSections.map((section, index) => (
                    <motion.article
                      layout
                      key={section.slug}
                      initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.99 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={reduceMotion ? undefined : { opacity: 0, y: 8, scale: 0.99 }}
                      transition={{ duration: 0.22, delay: reduceMotion ? 0 : Math.min(index * 0.02, 0.12) }}
                      className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-colors hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
                    >
                      <div className={`relative flex h-32 items-center justify-center overflow-hidden bg-gradient-to-br ${section.accent}`}>
                        <div className="absolute inset-0 opacity-[0.2] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:24px_24px]" />
                        <motion.div whileHover={reduceMotion ? undefined : { rotate: 7, scale: 1.06 }} className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/60 bg-white/55 text-slate-800 shadow-lg backdrop-blur">
                          <LayoutTemplate size={25} strokeWidth={1.5} />
                        </motion.div>
                        <span className="absolute left-4 top-3 text-xs font-medium text-slate-600/70">{section.number}</span>
                        <span className="absolute bottom-3 right-3 rounded-full border border-white/60 bg-white/65 px-3 py-1 text-[10px] font-medium text-slate-700 backdrop-blur">{section.category}</span>
                      </div>
                      <div className="p-5">
                        <h4 className="font-[Poppins] text-base font-semibold text-slate-950">{section.title}</h4>
                        <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">{section.description}</p>
                        <Link href={`/sections/${section.slug}`} className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white">
                          Open preview <ArrowUpRight size={14} />
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <p className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">No UI sections match your search or category.</p>
            )}
          </div>
        )}

        {visibleCount === 0 && (
          <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center">
            <Search className="mx-auto text-slate-400" size={24} />
            <p className="mt-3 font-medium text-slate-800">No components found</p>
            <p className="mt-1 text-sm text-slate-500">Try another keyword or reset the filters.</p>
            <button type="button" onClick={() => { setSearch(""); setActiveCategory("All"); }} className="mt-4 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-medium text-white">Reset filters</button>
          </div>
        )}
      </section>

      <footer className="border-t border-slate-200/70 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>Component Library — Forms & reusable UI sections</p>
          <p>Next.js · TypeScript · Tailwind CSS · Framer Motion</p>
        </div>
      </footer>
    </main>
  );
}
