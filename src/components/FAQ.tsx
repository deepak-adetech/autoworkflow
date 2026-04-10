"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Are you an AI consultancy?",
    a: "No. Consultancies deliver decks and disappear. We're builders. We sit down, understand your specific process, and build the automation. If you need a strategy deck, we're not the right fit. If you need the thing built, we are.",
  },
  {
    q: "Why not just use an off-the-shelf SaaS tool?",
    a: "If one exists for your workflow, we'll tell you — and we'll help you set it up. We don't build what already exists. But most of the processes companies struggle with are too specific for generic software. That's the gap we fill.",
  },
  {
    q: "What does \"first workflow free\" actually mean?",
    a: "We automate your first workflow at zero cost — no contracts, no obligations. It's how we prove we're different. If the results speak, we'll discuss scaling. If not, you keep the automation and walk away. We bet on our work.",
  },
  {
    q: "Do you only use AI? What if a simpler solution works?",
    a: "We're loyal to the problem, not to any technology. If a simple script solves it, that's what we build. If it needs GPT-4 and a custom pipeline, we'll explain why. The right tool is whatever actually works for your process.",
  },
  {
    q: "What happens after you build it?",
    a: "We stay. We monitor, optimize, and improve your automations as your business evolves. We're not a one-and-done vendor — we're ongoing partners. Builders who stay, not consultants who leave.",
  },
  {
    q: "How long does it take?",
    a: "Most workflows go live within 1–2 weeks. Complex multi-system automations may take 3–4 weeks. We move fast because we understand the process first — the building part is the easy part when the mapping is done right.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[rgba(255,255,255,0.06)] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-medium text-[#EEEEF0] pr-4 group-hover:text-[#3B82F6] transition-colors duration-200">
          {q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease }}
          className="shrink-0"
        >
          <ChevronDown size={20} className="text-[#6B7280]" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[#9CA3AF] leading-[1.7] text-sm md:text-base max-w-3xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding relative">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-medium text-[#3B82F6] tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.025em]">
            Questions? <span className="text-gradient">Answered.</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="glass-card p-6 md:p-8"
        >
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
