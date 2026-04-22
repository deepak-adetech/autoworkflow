"use client";

import { motion } from "motion/react";
import { Phone, Compass, Rocket, TrendingUp } from "lucide-react";

const STEPS = [
  {
    icon: Phone,
    number: "01",
    title: "Map the Process",
    description:
      "We sit down and understand your specific workflow — not a generic version of it. Where does data come from? Where does it go? What breaks?",
  },
  {
    icon: Compass,
    number: "02",
    title: "Design the Right Approach",
    description:
      "Not the trendy approach. The right one. If a simple script solves it, that's what we propose. If it needs AI, we'll explain why.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Build the Thing",
    description:
      "We build, test, and deploy in your environment. First workflow is on us — you see real results before you invest a dollar.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Deploy & Improve",
    description:
      "We don't deliver and disappear. We monitor, optimize, and expand your automations as your business evolves. Builders who stay.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(13,107,78,0.04), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-xs font-medium text-[#0D6B4E] tracking-widest uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.025em] mb-5">
            Process first.{" "}
            <span className="text-gradient">Technology second.</span>
          </h2>
          <p className="text-[#4B5563] text-lg leading-relaxed max-w-2xl mx-auto">
            We don&apos;t start with a solution looking for a problem. We start with
            your workflow and work backward to the right tool.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[72px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[rgba(13,107,78,0.2)] to-transparent" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="relative text-center lg:text-center"
            >
              {/* Step icon circle */}
              <div className="relative mx-auto w-[88px] h-[88px] mb-6">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0D6B4E] to-[#10B981] opacity-10 blur-md" />
                {/* Circle */}
                <div className="relative w-full h-full rounded-full border border-[rgba(13,107,78,0.25)] bg-[rgba(13,107,78,0.06)] flex items-center justify-center">
                  <step.icon size={28} className="text-[#0D6B4E]" />
                </div>
                {/* Number badge */}
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#0D6B4E] flex items-center justify-center">
                  <span className="text-xs font-bold text-white">
                    {step.number}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-[#111827] mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-[#4B5563] leading-[1.7] max-w-[280px] mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
