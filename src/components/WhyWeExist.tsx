"use client";

import { motion } from "motion/react";
import { AlertTriangle, Search, Wrench, X } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const PILLARS = [
  {
    icon: AlertTriangle,
    label: "The Problem",
    title: "Smart people doing dumb work",
    body: "Every company has processes held together by people copying data between systems, chasing approvals, assembling reports. Not because they lack capability — because no tool exists for their specific workflow.",
  },
  {
    icon: Search,
    label: "The Gap",
    title: "The technology exists. The builders don\u2019t.",
    body: "AI consultancies deliver decks and disappear. SaaS products solve generic problems, not yours. AI agencies chase what\u2019s trendy. Nobody sits down to understand your specific process, figure out the right approach, and actually build the thing.",
  },
  {
    icon: Wrench,
    label: "Our Answer",
    title: "Builders loyal to the problem",
    body: "We map the process and build the automation — using whatever combination of tools makes sense. If a simple script solves it, that\u2019s what we build. If an off-the-shelf tool does the job, we\u2019ll say so. No ego. Just the right solution.",
  },
];

const NOT_LIST = [
  "Not a product company",
  "Not a strategy consultancy",
  "Not an AI hype machine",
  "Not competing with SaaS tools",
];

export default function WhyWeExist() {
  return (
    <section id="vision" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(13,107,78,0.05), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-xs font-medium text-[#0D6B4E] tracking-widest uppercase mb-4">
            Why We Exist
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.025em] mb-6 max-w-3xl mx-auto leading-[1.15]">
            Closing the gap between{" "}
            <span className="text-gradient">&ldquo;AI can do this&rdquo;</span>{" "}
            and{" "}
            <span className="text-gradient">&ldquo;AI actually does this&rdquo;</span>{" "}
            is here.
          </h2>
          <p className="text-[#4B5563] text-lg leading-relaxed max-w-2xl mx-auto">
            We help businesses harness the power of AI capabilities — not with
            pitch decks or proof-of-concepts, but with working automations
            deployed in your stack.
          </p>
        </motion.div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="glass-card p-7 md:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[rgba(13,107,78,0.15)] to-[rgba(16,185,129,0.08)] flex items-center justify-center">
                  <pillar.icon size={18} className="text-[#0D6B4E]" />
                </div>
                <span className="text-xs font-semibold text-[#0D6B4E] uppercase tracking-wider">
                  {pillar.label}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mb-3 tracking-tight leading-snug">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#4B5563] leading-[1.7]">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* What we are NOT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {NOT_LIST.map((item) => (
            <div
              key={item}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,0,0,0.06)] bg-[rgba(0,0,0,0.02)] text-sm text-[#9CA3AF]"
            >
              <X size={13} className="text-[#9CA3AF] opacity-60" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
