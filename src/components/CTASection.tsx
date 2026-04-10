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
            background: "radial-gradient(ellipse, #3B82F6, #06B6D4, transparent 70%)",
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(59,130,246,0.25)] bg-[rgba(59,130,246,0.06)] mb-8">
            <Sparkles size={14} className="text-[#3B82F6]" />
            <span className="text-xs font-medium text-[#3B82F6]">
              First workflow free
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.025em] mb-6 leading-[1.1]">
            Ready to stop drowning
            <br />
            <span className="text-gradient-animated">in manual work?</span>
          </h2>

          <p className="text-lg md:text-xl text-[#9CA3AF] leading-relaxed max-w-2xl mx-auto mb-10">
            Book a free strategy call. We&apos;ll audit your workflows and
            automate your first one free. No contracts, no obligations — just
            results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ShineButton href="#" size="lg">
              Book your free strategy call
              <ArrowRight size={18} className="ml-1" />
            </ShineButton>
          </div>

          <p className="mt-8 text-sm text-[#6B7280]">
            No contracts. No obligations. Just results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
