
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, Plus } from "lucide-react";

const faqItems = [
  {
    number: "01",
    question: "How do I get started?",
    answer:
      "Start by exploring the available services and choosing the option that best fits your needs. You can then contact our team to discuss your requirements and the next steps.",
  },
  {
    number: "02",
    question: "Can I customise the solution?",
    answer:
      "Yes. The solution can be adapted to your goals, workflow and brand requirements. Share your priorities so the right approach can be planned.",
  },
  {
    number: "03",
    question: "How long does a project take?",
    answer:
      "The timeline depends on the project scope, required features and feedback process. After reviewing your requirements, a realistic delivery schedule can be agreed upon.",
  },
  {
    number: "04",
    question: "Do you provide support after delivery?",
    answer:
      "Support options can be discussed before the project begins. This helps define the handover process, maintenance requirements and any ongoing assistance.",
  },
  {
    number: "05",
    question: "How can I request a quote?",
    answer:
      "Share a brief description of your project, your main objectives and any important requirements. This information helps prepare a more relevant estimate.",
  },
];

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="faq-motion relative overflow-hidden bg-[#F5F2EB] px-5 py-20 text-[#24251F] sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Left content */}
        <div className="flex flex-col items-start">
          <span className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#D7D2C7] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#68685D]">
            <span className="h-2 w-2 rounded-full bg-[#D56B45]" />
            Help & Information
          </span>

          <h2 className="max-w-lg text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Good questions.
            <span className="mt-2 block font-normal text-[#858276]">
              Clear answers.
            </span>
          </h2>

          <p className="mt-6 max-w-md text-base leading-7 text-[#68685D] sm:text-lg">
            Everything you need to know before taking the next step.
            Can&apos;t find what you are looking for? Get in touch with our team.
          </p>

          <a
            href="mailto:hello@example.com"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#24251F] px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#D56B45]"
          >
            Ask us a question
            <ArrowDownRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
            />
          </a>

          <div className="mt-16 hidden w-full max-w-sm border-t border-[#D7D2C7] pt-5 sm:block">
            <p className="text-xs uppercase tracking-[0.18em] text-[#858276]">
              Need more information?
            </p>
            <p className="mt-2 text-sm text-[#68685D]">
              We&apos;re here to help you make an informed decision.
            </p>
          </div>
        </div>

        {/* Right accordion */}
        <div className="border-t border-[#D7D2C7]">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={item.number}
                className="faq-item border-b border-[#D7D2C7]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.number}`}
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  className="group flex w-full items-center gap-4 py-6 text-left sm:gap-6 sm:py-7"
                >
                  <span className="w-7 shrink-0 pt-1 text-xs font-medium text-[#A19C8E]">
                    {item.number}
                  </span>

                  <span
                    className={`flex-1 text-lg font-medium tracking-[-0.025em] transition-colors duration-300 sm:text-xl ${
                      isOpen
                        ? "text-[#D56B45]"
                        : "text-[#24251F] group-hover:text-[#D56B45]"
                    }`}
                  >
                    {item.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-[#D56B45] bg-[#D56B45] text-white"
                        : "border-[#D7D2C7] text-[#68685D] group-hover:border-[#D56B45]"
                    }`}
                  >
                    <Plus size={17} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${item.number}`}
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
                        opacity: { duration: 0.22 },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pl-11 pr-3 text-sm leading-7 text-[#68685D] sm:pl-13 sm:pr-12 sm:text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full border border-[#E1DCD1]" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full border border-[#E1DCD1]" />
    </section>
  );
}
