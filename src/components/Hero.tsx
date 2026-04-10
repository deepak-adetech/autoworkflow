"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import ShineButton from "./ShineButton";
import BlurText from "./reactbits/BlurText";
import ShinyText from "./reactbits/ShinyText";

/* ─── CSS Gradient Mesh Background ─── */
function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Static multi-layer gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 25% 20%, rgba(94,106,210,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 60% at 78% 25%, rgba(124,92,252,0.09) 0%, transparent 55%),
            radial-gradient(ellipse 70% 50% at 50% 90%, rgba(167,139,250,0.06) 0%, transparent 60%)
          `,
        }}
      />

      {/* Animated soft glow — single element, CSS-only */}
      <div className="hero-glow absolute w-[700px] h-[500px] rounded-full top-[15%] left-[30%] opacity-[0.07]" />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Top-down vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, transparent 40%, #09090B 100%)",
        }}
      />
    </div>
  );
}

/* ─── Hero ─── */
export default function Hero() {
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <GradientMesh />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 pt-24 pb-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2] animate-pulse" />
          <ShinyText
            text="AI-Powered Automated Workflows"
            className="text-xs font-medium tracking-wide uppercase"
            color="#8A8F98"
            shineColor="#EDEDEF"
            speed={3}
          />
        </motion.div>

        {/* Headline — BlurText animated reveal */}
        <div className="mb-2">
          <BlurText
            text="We automate the work"
            className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.025em] text-[#EDEDEF] justify-center"
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
          className="text-lg md:text-xl text-[#8A8F98] leading-relaxed max-w-2xl mx-auto mb-10 mt-8 italic"
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
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #09090B, transparent)",
        }}
      />
    </section>
  );
}
