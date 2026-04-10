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
            text="Builders, not consultants"
            className="text-xs font-medium tracking-wide uppercase"
            color="#9CA3AF"
            shineColor="#EEEEF0"
            speed={3}
          />
        </motion.div>

        {/* Headline */}
        <div className="mb-2">
          <BlurText
            text="We automate the processes"
            className="text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.025em] text-[#EEEEF0] justify-center"
            delay={80}
            animateBy="words"
            direction="bottom"
            stepDuration={0.4}
          />
        </div>
        <BlurText
          text="no software was built for."
          className="text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.025em] justify-center text-gradient-animated-inline"
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
          className="text-base md:text-lg text-[#9CA3AF] leading-relaxed max-w-xl mx-auto mb-10 mt-7"
        >
          Smart people shouldn&apos;t do dumb work. We close the gap between
          &ldquo;AI can do this&rdquo; and &ldquo;AI actually does this here.&rdquo;{" "}
          <span className="italic text-[#6B7280]">First workflow free.</span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ShineButton href="#book" size="lg">
            Book a free discovery call
            <ArrowRight size={18} className="ml-1" />
          </ShineButton>
          <ShineButton href="#vision" variant="secondary" size="lg">
            Why we exist
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
