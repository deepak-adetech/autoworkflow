"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import ShineButton from "./ShineButton";

const ease = [0.16, 1, 0.3, 1] as const;

export default function CTASection() {
  return (
    <section id="book" className="section-padding relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-[0.06] blur-[100px]"
          style={{
            background: "radial-gradient(ellipse, #0D6B4E, #10B981, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(13,107,78,0.25)] bg-[rgba(13,107,78,0.06)] mb-8">
            <Sparkles size={14} className="text-[#0D6B4E]" />
            <span className="text-xs font-medium text-[#0D6B4E]">
              First workflow on us
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.025em] mb-6 leading-[1.1]">
            Your processes deserve better
            <br />
            <span className="text-gradient-animated">than manual work.</span>
          </h2>

          <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed max-w-2xl mx-auto mb-10">
            Tell us what workflow is eating your team&apos;s time. We&apos;ll map it,
            build the automation, and deploy it — the first one&apos;s free. We bet on
            our work.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ShineButton href="#" size="lg">
              Book a free discovery call
              <ArrowRight size={18} className="ml-1" />
            </ShineButton>
          </div>

          <p className="mt-8 text-sm text-[#9CA3AF]">
            No decks. No demos. We build the thing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
