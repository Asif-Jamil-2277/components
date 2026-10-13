 "use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Code2,
  Menu,
  Monitor,
  Smartphone,
  Sparkles,
  Tablet,
  X,
} from "lucide-react";

const links = ["Product", "Solutions", "Resources", "Pricing"];

type Viewport = "desktop" | "tablet" | "mobile";
type Tab = "preview" | "code";

const reusableNavbarCode = `"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const links = ["Product", "Solutions", "Resources", "Pricing"];

export default function SaaSNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-white px-4 py-3 sm:px-6">
      <a href="/" className="flex items-center gap-2.5 font-semibold">
        <span className="grid size-9 place-items-center rounded-xl bg-slate-950 text-white">
          <Sparkles size={17} />
        </span>
        northstar<span className="text-indigo-600">.</span>
      </a>

      <nav className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm text-slate-600 transition hover:text-indigo-600"
          >
            {link}
          </a>
        ))}
      </nav>

      <div className="hidden items-center gap-3 md:flex">
        <a href="#" className="px-3 py-2 text-sm font-medium text-slate-600">
          Sign in
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          Get started <ArrowUpRight size={15} />
        </a>
      </div>

      <button
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="grid size-10 place-items-center rounded-xl border border-slate-200 md:hidden"
      >
        {open ? <X size={19} /> : <Menu size={19} />}
      </button>

      {open && (
        <nav className="absolute left-4 right-4 top-20 z-20 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl md:hidden">
          {links.map((link) => (
            <a key={link} href="#" className="block rounded-xl px-3 py-3 text-sm text-slate-700 hover:bg-slate-50">
              {link}
            </a>
          ))}
          <a href="#" className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-medium text-white">
            Get started <ArrowUpRight size={15} />
          </a>
        </nav>
      )}
    </header>
  );
}`;

export default function Page() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("preview");
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [copied, setCopied] = useState(false);
  const reduceMotion = useReducedMotion();

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(reusableNavbarCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  const viewportWidth =
    viewport === "desktop"
      ? "w-full"
      : viewport === "tablet"
        ? "w-full max-w-[768px]"
        : "w-full max-w-[390px]";

  return (
    <main className="min-h-screen bg-[#f7f8fc] px-4 py-8 font-sans text-slate-900 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600">
            Navigation · 01
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            A calmer way to navigate
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            Preview the responsive SaaS navbar, inspect the reusable component
            code, and copy it into your own project.
          </p>
        </div>

        <section className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_24px_80px_-40px_rgba(30,41,59,0.3)]">
          <div className="flex flex-col gap-4 border-b border-slate-100 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="inline-flex w-fit rounded-xl bg-slate-100 p-1" role="tablist" aria-label="Component view">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "preview"}
                onClick={() => setActiveTab("preview")}
                className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
                  activeTab === "preview" ? "bg-white text-slate-950 shadow-sm" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <Monitor size={15} /> Preview
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "code"}
                onClick={() => setActiveTab("code")}
                className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
                  activeTab === "code" ? "bg-white text-slate-950 shadow-sm" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <Code2 size={15} /> Source code
              </button>
            </div>

            {activeTab === "preview" ? (
              <div className="flex flex-wrap items-center gap-2" aria-label="Preview viewport size">
                <span className="mr-1 text-xs text-slate-400">Viewport</span>
                {([
                  ["desktop", Monitor, "Desktop"],
                  ["tablet", Tablet, "Tablet"],
                  ["mobile", Smartphone, "Mobile"],
                ] as const).map(([value, Icon, label]) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={viewport === value}
                    onClick={() => {
                      setViewport(value);
                      setOpen(false);
                    }}
                    className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition ${
                      viewport === value
                        ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                        : "border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-800"
                    }`}
                  >
                    <Icon size={14} /> {label}
                  </button>
                ))}
              </div>
            ) : (
              <button
                type="button"
                onClick={copyCode}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                {copied ? "Copied!" : "Copy component code"}
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "preview" ? (
              <motion.div
                key="preview"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="min-h-[500px] bg-[#f8faff] p-3 sm:p-6 lg:p-8"
              >
                <div className={`mx-auto transition-all duration-300 ${viewportWidth}`}>
                  <motion.section
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-3 shadow-[0_24px_80px_-40px_rgba(30,41,59,0.3)] sm:p-4"
                  >
                    <div className="relative">
                      <header className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white px-3 py-3 sm:px-6">
                        <a href="#" className="flex shrink-0 items-center gap-2 font-semibold tracking-tight">
                          <span className="grid size-9 place-items-center rounded-xl bg-slate-950 text-white">
                            <Sparkles size={17} />
                          </span>
                          northstar<span className="text-indigo-600">.</span>
                        </a>

                        <nav className="hidden items-center gap-5 lg:gap-8 md:flex">
                          {links.map((link) => (
                            <a key={link} href="#" className="text-sm text-slate-600 transition hover:text-indigo-600">
                              {link}
                            </a>
                          ))}
                        </nav>

                        <div className="hidden items-center gap-2 md:flex">
                          <a href="#" className="px-2 py-2 text-sm font-medium text-slate-600 hover:text-slate-950 lg:px-3">
                            Sign in
                          </a>
                          <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-3 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700 lg:px-4">
                            Get started <ArrowUpRight size={15} />
                          </a>
                        </div>

                        <button
                          type="button"
                          aria-label={open ? "Close navigation" : "Open navigation"}
                          aria-expanded={open}
                          onClick={() => setOpen(!open)}
                          className="grid size-10 shrink-0 place-items-center rounded-xl border border-slate-200 md:hidden"
                        >
                          {open ? <X size={19} /> : <Menu size={19} />}
                        </button>
                      </header>

                      <AnimatePresence>
                        {open && (
                          <motion.nav
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            className="absolute left-0 right-0 top-[60px] z-20 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl md:hidden"
                          >
                            <div className="grid gap-1 p-3">
                              {links.map((link) => (
                                <a key={link} href="#" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm text-slate-700 hover:bg-slate-50">
                                  {link}
                                </a>
                              ))}
                              <a href="#" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-medium text-white">
                                Get started <ArrowUpRight size={15} />
                              </a>
                            </div>
                          </motion.nav>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className={`grid gap-8 px-4 py-12 sm:px-8 sm:py-20 ${viewport === "mobile" ? "grid-cols-1" : "md:grid-cols-[1fr_0.8fr] md:items-center"}`}>
                      <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
                          <span className="size-1.5 rounded-full bg-indigo-500" /> Designed for focused teams
                        </span>
                        <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl">
                          Make room for your next big idea.
                        </h2>
                        <p className="mt-5 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
                          A thoughtful workspace that helps teams turn scattered work into meaningful progress.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                          <a href="#" className="rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700 sm:px-5">
                            Explore the platform
                          </a>
                          <a href="#" className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:px-5">
                            See how it works
                          </a>
                        </div>
                        <p className="mt-5 text-xs text-slate-400">No credit card required · Start in minutes</p>
                      </div>

                      {viewport !== "mobile" && (
                        <div className="relative mx-auto w-full max-w-md">
                          <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-indigo-200/60 via-violet-100/40 to-cyan-100/60 blur-2xl" />
                          <div className="relative rounded-[26px] border border-white bg-white/90 p-5 shadow-2xl shadow-indigo-950/10">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                              <div>
                                <p className="text-sm font-semibold">Team overview</p>
                                <p className="mt-1 text-xs text-slate-400">Weekly momentum</p>
                              </div>
                              <span className="rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-semibold text-emerald-700">+18.6%</span>
                            </div>
                            <div className="mt-6 grid grid-cols-2 gap-3">
                              {([["Active projects", "24"], ["Tasks completed", "186"], ["Team capacity", "82%"], ["Focus time", "31h"]] as const).map(([label, value], i) => (
                                <div key={label} className="rounded-2xl bg-slate-50 p-4">
                                  <p className="text-xs text-slate-500">{label}</p>
                                  <p className="mt-3 text-2xl font-semibold tracking-tight">{value}</p>
                                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200">
                                    <motion.div initial={{ width: 0 }} animate={{ width: `${[72, 88, 82, 64][i]}%` }} transition={{ duration: 0.8, delay: i * 0.1 }} className="h-full rounded-full bg-indigo-500" />
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="mt-4 rounded-2xl bg-slate-950 p-4 text-white">
                              <p className="text-xs text-slate-400">Quarterly goal</p>
                              <div className="mt-2 flex items-end justify-between">
                                <p className="text-2xl font-semibold">76% <span className="text-sm font-normal text-slate-400">complete</span></p>
                                <Sparkles className="text-violet-300" size={19} />
                              </div>
                              <div className="mt-4 h-2 rounded-full bg-white/10">
                                <div className="h-full w-[76%] rounded-full bg-gradient-to-r from-indigo-400 to-violet-300" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.section>
                </div>
                <p className="mt-5 text-center text-xs text-slate-400">Preview concept · Demo links use placeholder destinations.</p>
              </motion.div>
            ) : (
              <motion.div
                key="code"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-[#0b1220] p-4 sm:p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-100">SaaSNavbar.tsx</p>
                    <p className="mt-1 text-xs text-slate-400">Reusable React component · TypeScript</p>
                  </div>
                  <span className="rounded-md border border-white/10 px-2 py-1 text-[11px] text-slate-400">TSX</span>
                </div>
                <pre className="max-h-[560px] overflow-auto rounded-xl border border-white/10 bg-[#080d17] p-4 text-xs leading-6 text-slate-200 sm:p-5 sm:text-sm">
                  <code>{reusableNavbarCode}</code>
                </pre>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-5 text-slate-400">Requires <code className="text-slate-300">lucide-react</code>. Add your own routes and adapt styling as needed.</p>
                  <button type="button" onClick={copyCode} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-indigo-100">
                    {copied ? <Check size={15} /> : <Copy size={15} />}
                    {copied ? "Copied!" : "Copy code"}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold">Responsive layout</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">Switch the preview between desktop, tablet and mobile widths.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold">Reduced-motion friendly</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">Motion effects respect the device preference where supported.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold">Reusable source</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">Inspect and copy a standalone navbar component.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
