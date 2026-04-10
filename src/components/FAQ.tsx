"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "What types of workflows can you automate?",
    a: "Everything from customer onboarding and document processing to inventory management and reporting. If it's repetitive and rule-based — or even semi-structured — we can automate it. We've automated workflows across finance, healthcare, e-commerce, real estate, legal, and SaaS.",
  },
  {
    q: "How long does it take to deploy?",
    a: "Most automations go live within 1–2 weeks. Complex multi-system integrations may take 3–4 weeks. We move fast without cutting corners — and you'll see a working prototype before we go to production.",
  },
  {
    q: "What does \"first workflow free\" actually mean?",
    a: "We'll automate your first workflow at no cost — no contracts, no obligations. It's our way of proving value upfront. If you love the results, we'll discuss scaling. If not, you keep the automation and walk away.",
  },
  {
    q: "Do you work with our existing tech stack?",
    a: "Absolutely. We integrate with 200+ tools including Salesforce, HubSpot, Slack, Google Workspace, Notion, Airtable, and custom APIs. No rip-and-replace required. We build on top of what you already use.",
  },
  {
    q: "What happens after deployment?",
    a: "We provide monitoring, maintenance, and optimization as part of our service. Your automations get smarter over time, and we're always a Slack message away. Think of us as your ongoing AI engineering partner, not a one-and-done vendor.",
  },
  {
    q: "How do you handle data security?",
    a: "Enterprise-grade security is non-negotiable. SOC 2 compliant processes, encrypted data handling, and we never train models on your data. Your data stays yours — always. We can also work within your VPC or on-premise infrastructure.",
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
        <span className="text-base md:text-lg font-medium text-[#EDEDEF] pr-4 group-hover:text-[#5E6AD2] transition-colors duration-200">
          {q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease }}
          className="shrink-0"
        >
          <ChevronDown size={20} className="text-[#55585E]" />
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
            <p className="pb-6 text-[#8A8F98] leading-[1.7] text-sm md:text-base max-w-3xl">
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
          <p className="text-xs font-medium text-[#5E6AD2] tracking-widest uppercase mb-4">
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
