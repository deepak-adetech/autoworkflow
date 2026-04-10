"use client";

import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import BlurText from "./reactbits/BlurText";
import ShinyText from "./reactbits/ShinyText";

/* ─── Canvas Aurora — heavier animated background ─── */
function AuroraCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let frame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const w = () => window.innerWidth;
    const h = () => window.innerHeight;

    const draw = () => {
      ctx.clearRect(0, 0, w(), h());

      // Aurora ribbons
      const ribbons = [
        { yBase: 0.30, amp: 60, freq: 0.002, speed: 0.008, color: "59,130,246", opacity: 0.06, width: 180 },
        { yBase: 0.38, amp: 45, freq: 0.003, speed: 0.006, color: "6,182,212", opacity: 0.05, width: 140 },
        { yBase: 0.45, amp: 70, freq: 0.0015, speed: 0.01, color: "56,189,248", opacity: 0.04, width: 200 },
        { yBase: 0.25, amp: 50, freq: 0.0025, speed: 0.007, color: "59,130,246", opacity: 0.035, width: 160 },
        { yBase: 0.50, amp: 40, freq: 0.0035, speed: 0.009, color: "6,182,212", opacity: 0.03, width: 120 },
      ];

      for (const r of ribbons) {
        const baseline = h() * r.yBase;
        ctx.beginPath();
        for (let x = 0; x <= w(); x += 3) {
          const y = baseline +
            Math.sin(x * r.freq + frame * r.speed) * r.amp +
            Math.sin(x * r.freq * 2.3 + frame * r.speed * 0.7) * r.amp * 0.4;
          if (x === 0) ctx.moveTo(x, y - r.width / 2);
          else ctx.lineTo(x, y - r.width / 2);
        }
        for (let x = w(); x >= 0; x -= 3) {
          const y = baseline +
            Math.sin(x * r.freq + frame * r.speed) * r.amp +
            Math.sin(x * r.freq * 2.3 + frame * r.speed * 0.7) * r.amp * 0.4;
          ctx.lineTo(x, y + r.width / 2);
        }
        ctx.closePath();
        const grad = ctx.createLinearGradient(0, baseline - r.width, 0, baseline + r.width);
        grad.addColorStop(0, `rgba(${r.color}, 0)`);
        grad.addColorStop(0.5, `rgba(${r.color}, ${r.opacity})`);
        grad.addColorStop(1, `rgba(${r.color}, 0)`);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // Floating particles
      for (let i = 0; i < 40; i++) {
        const seed = i * 137.508;
        const px = ((seed * 7.31 + frame * 0.15) % w());
        const py = ((seed * 3.17 + Math.sin(frame * 0.005 + i) * 40) % h());
        const size = (Math.sin(seed) * 0.5 + 1) * 1.2;
        const alpha = (Math.sin(frame * 0.02 + seed) * 0.5 + 0.5) * 0.3;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59,130,246,${alpha})`;
        ctx.fill();
      }

      frame++;
      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

/* ─── Animated Gradient Orbs (CSS) ─── */
function AnimatedMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="hero-orb-1 absolute -top-[20%] left-[20%] w-[700px] h-[500px] rounded-full opacity-[0.14]" />
      <div className="hero-orb-2 absolute top-[5%] right-[10%] w-[500px] h-[400px] rounded-full opacity-[0.10]" />
      <div className="hero-orb-3 absolute bottom-[10%] left-[40%] w-[600px] h-[350px] rounded-full opacity-[0.08]" />
    </div>
  );
}

/* ─── Grid with fade ─── */
function HeroGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="hero-grid absolute inset-0" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 65% 55% at 50% 40%, transparent 25%, #0A0A0F 75%)",
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
      <HeroGrid />
      <AnimatedMesh />
      <AuroraCanvas />

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
            text="AI & Automation Partners"
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

        {/* Sub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease }}
          className="mt-10 mb-12 max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl font-medium text-[#EEEEF0] mb-3">
            Smart people shouldn&apos;t do dumb work.
          </p>
          <p className="text-base md:text-lg text-[#9CA3AF] leading-relaxed">
            We design AI-powered agents and automations that take over the busywork — freeing your people to focus on strategy, growth, and impact.
          </p>
        </motion.div>

        {/* CTA */}
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
        style={{ background: "linear-gradient(to top, #0A0A0F, transparent)" }}
      />
    </section>
  );
}
