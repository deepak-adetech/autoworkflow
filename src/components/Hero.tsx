"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import ShineButton from "./ShineButton";
import BlurText from "./reactbits/BlurText";
import ShinyText from "./reactbits/ShinyText";

/* ─── Gradient Orb — the visual focal point ─── */
function GradientOrb() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Primary orb — large blue-cyan glow at top-center */}
      <div
        className="absolute -top-[25%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-[0.14]"
        style={{
          background:
            "radial-gradient(ellipse, #3B82F6 0%, #06B6D4 35%, transparent 70%)",
        }}
      />
      {/* Animated secondary glow */}
      <div className="hero-glow absolute w-[600px] h-[400px] rounded-full top-[10%] left-[35%] opacity-[0.08]" />
      {/* Soft warm accent on the right */}
      <div
        className="absolute top-[20%] right-[5%] w-[350px] h-[350px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #06B6D4, transparent 70%)",
        }}
      />
    </div>
  );
}

/* ─── Grid background with fade ─── */
function HeroGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Grid lines */}
      <div className="hero-grid absolute inset-0 opacity-100" />
      {/* Radial fade — grid dissolves at edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, transparent 30%, #0A0A0F 80%)",
        }}
      />
    </div>
  );
}

/* ─── Horizontal beam ─── */
function LightBeam() {
  return (
    <div
      className="absolute top-[42%] left-0 right-0 h-px opacity-[0.08]"
      aria-hidden="true"
      style={{
        background:
          "linear-gradient(90deg, transparent 10%, #3B82F6 30%, #06B6D4 50%, #3B82F6 70%, transparent 90%)",
      }}
    />
  );
}

/* ─── Hero ─── */
export default function Hero() {
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0A0A0F]">
      {/* Background layers */}
      <HeroGrid />
      <GradientOrb />
      <LightBeam />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 pt-24 pb-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.06)] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
          <ShinyText
            text="AI-Powered Automated Workflows"
            className="text-xs font-medium tracking-wide uppercase"
            color="#9CA3AF"
            shineColor="#EEEEF0"
            speed={3}
          />
        </motion.div>

        {/* Headline — BlurText animated reveal */}
        <div className="mb-2">
          <BlurText
            text="We automate the work"
            className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.025em] text-[#EEEEF0] justify-center"
            delay={80}
            animateBy="words"
            direction="bottom"
            stepDuration={0.4}
          />
        </div>
        <BlurText
          text="your team dreads."
          className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.025em] justify-center text-gradient-animated-inline"
          delay={100}
          animateBy="words"
          direction="bottom"
          stepDuration={0.45}
          animationFrom={{ filter: "blur(12px)", opacity: 0, y: 30 }}
          animationTo={[
            { filter: "blur(4px)", opacity: 0.6, y: 5 },
            { filter: "blur(0px)", opacity: 1, y: 0 },
          ]}
        />

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease }}
          className="text-lg md:text-xl text-[#9CA3AF] leading-relaxed max-w-2xl mx-auto mb-10 mt-8 italic"
        >
          First workflow automated free — no strings attached.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ShineButton href="#book" size="lg">
            Book a free strategy call
            <ArrowRight size={18} className="ml-1" />
          </ShineButton>
          <ShineButton href="#services" variant="secondary" size="lg">
            See what we build
          </ShineButton>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0A0A0F, transparent)",
        }}
      />
    </section>
  );
}
