"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import ShineButton from "./ShineButton";
import BlurText from "./reactbits/BlurText";
import ShinyText from "./reactbits/ShinyText";

/* ─── Animated Gradient Mesh ─── */
function AnimatedMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Primary orb — drifts slowly */}
      <div className="hero-orb-1 absolute -top-[20%] left-[20%] w-[700px] h-[500px] rounded-full opacity-[0.12]" />
      {/* Secondary orb — counter-drift */}
      <div className="hero-orb-2 absolute top-[5%] right-[10%] w-[500px] h-[400px] rounded-full opacity-[0.08]" />
      {/* Tertiary orb — slow pulse */}
      <div className="hero-orb-3 absolute bottom-[10%] left-[40%] w-[600px] h-[350px] rounded-full opacity-[0.06]" />
    </div>
  );
}

/* ─── Grid with perspective fade ─── */
function HeroGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="hero-grid absolute inset-0" />
      {/* Radial mask — grid dissolves at edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 40%, transparent 25%, #0A0A0F 75%)",
        }}
      />
    </div>
  );
}

/* ─── Pulsing concentric rings ─── */
function PulseRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute rounded-full border border-[rgba(59,130,246,0.06)]"
          style={{
            width: 300 + i * 200,
            height: 300 + i * 200,
            animation: `pulse-ring 6s ease-in-out ${i * 2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Horizontal light beams ─── */
function LightBeams() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Main beam */}
      <div
        className="absolute top-[40%] left-0 right-0 h-px opacity-[0.1]"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, #3B82F6 25%, #06B6D4 50%, #3B82F6 75%, transparent 95%)",
        }}
      />
      {/* Subtle secondary beam */}
      <div
        className="hero-beam absolute top-[41%] left-0 right-0 h-[2px] opacity-[0.04]"
        style={{
          background:
            "linear-gradient(90deg, transparent 10%, #06B6D4 40%, #3B82F6 60%, transparent 90%)",
        }}
      />
    </div>
  );
}

/* ─── Hero ─── */
export default function Hero() {
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0A0A0F]">
      {/* Background layers */}
      <HeroGrid />
      <AnimatedMesh />
      <PulseRings />
      <LightBeams />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 pt-24 pb-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.06)] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
          <ShinyText
            text="Builders, not consultants"
            className="text-xs font-medium tracking-wide uppercase"
            color="#9CA3AF"
            shineColor="#EEEEF0"
            speed={3}
          />
        </motion.div>

        {/* Headline — full width */}
        <div className="mb-2">
          <BlurText
            text="We automate the processes"
            className="text-[clamp(2.25rem,5.5vw,4.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#EEEEF0] justify-center"
            delay={80}
            animateBy="words"
            direction="bottom"
            stepDuration={0.4}
          />
        </div>
        <BlurText
          text="no software was built for."
          className="text-[clamp(2.25rem,5.5vw,4.5rem)] font-bold leading-[1.08] tracking-[-0.03em] justify-center text-gradient-animated-inline"
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

        {/* Sub — split into two creative lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease }}
          className="mt-10 mb-12 max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl font-medium text-[#EEEEF0] mb-2">
            Smart people shouldn&apos;t do dumb work.
          </p>
          <p className="text-base md:text-lg text-[#9CA3AF] leading-relaxed">
            We close the gap between &ldquo;AI can do this&rdquo;
            <br className="hidden sm:block" />
            and &ldquo;AI actually does this{" "}
            <span className="text-[#EEEEF0] font-medium">here</span>.&rdquo;
          </p>
        </motion.div>

        {/* CTA — "First workflow free" is the hero action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease }}
          className="flex flex-col items-center gap-5"
        >
          <a
            href="#book"
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#3B82F6] text-white text-lg font-semibold shadow-[0_0_40px_-8px_rgba(59,130,246,0.5)] hover:shadow-[0_0_60px_-4px_rgba(59,130,246,0.6)] hover:bg-[#60A5FA] transition-all duration-300 shine-button"
          >
            First workflow free
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <div className="flex items-center gap-6 text-sm text-[#6B7280]">
            <span>No contracts</span>
            <span className="w-1 h-1 rounded-full bg-[#6B7280] opacity-50" />
            <span>No obligations</span>
            <span className="w-1 h-1 rounded-full bg-[#6B7280] opacity-50" />
            <span>We bet on our work</span>
          </div>
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
