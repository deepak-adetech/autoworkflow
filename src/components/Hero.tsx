"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import ShineButton from "./ShineButton";
import BlurText from "./reactbits/BlurText";
import ShinyText from "./reactbits/ShinyText";

/* ─── Canvas Waves ─── */
function WaveCanvas() {
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
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const w = () => window.innerWidth;
    const h = () => window.innerHeight;

    const waves = [
      { freq: 0.003, amp: 35, speed: 0.015, phase: 0, opacity: 0.04 },
      { freq: 0.005, amp: 25, speed: 0.012, phase: 2, opacity: 0.03 },
      { freq: 0.007, amp: 18, speed: 0.018, phase: 4, opacity: 0.025 },
      { freq: 0.004, amp: 30, speed: 0.01, phase: 1, opacity: 0.02 },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, w(), h());

      for (const wave of waves) {
        ctx.beginPath();
        const baseline = h() * 0.72;

        for (let x = 0; x <= w(); x += 2) {
          const y =
            baseline +
            Math.sin(x * wave.freq + frame * wave.speed + wave.phase) *
              wave.amp +
            Math.sin(x * wave.freq * 1.8 + frame * wave.speed * 0.7) *
              wave.amp *
              0.5;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.lineTo(w(), h());
        ctx.lineTo(0, h());
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, h() * 0.6, 0, h());
        grad.addColorStop(0, `rgba(94, 106, 210, ${wave.opacity})`);
        grad.addColorStop(
          0.5,
          `rgba(124, 92, 252, ${wave.opacity * 0.6})`
        );
        grad.addColorStop(1, "rgba(94, 106, 210, 0)");
        ctx.fillStyle = grad;
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
      className="absolute inset-0 pointer-events-none hidden md:block"
      aria-hidden="true"
    />
  );
}

/* ─── Ambient Blobs ─── */
function AmbientBlobs() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(ellipse, #5E6AD2 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[100px]"
        style={{
          background: "radial-gradient(circle, #5E6AD2, transparent 70%)",
          animation: "blob-drift-1 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[80px]"
        style={{
          background: "radial-gradient(circle, #7C5CFC, transparent 70%)",
          animation: "blob-drift-2 25s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[15%] left-[35%] w-[600px] h-[400px] rounded-full opacity-[0.03] blur-[120px]"
        style={{
          background: "radial-gradient(circle, #A78BFA, transparent 70%)",
          animation: "blob-drift-3 22s ease-in-out infinite",
        }}
      />
    </div>
  );
}

/* ─── Dot Grid ─── */
function DotGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.03]"
      aria-hidden="true"
      style={{
        backgroundImage:
          "radial-gradient(circle, #8A8F98 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />
  );
}

/* ─── Floating Particles ─── */
function FloatingParticles() {
  const [particles] = useState(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 15 + 20,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.3 + 0.1,
    }))
  );

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-[#5E6AD2]"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `blob-drift-${(p.id % 3) + 1} ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Orbiting Rings ─── */
function OrbitingRings() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center" aria-hidden="true">
      {[380, 520, 680].map((size, i) => (
        <div
          key={size}
          className="absolute rounded-full border border-[rgba(94,106,210,0.06)]"
          style={{
            width: size,
            height: size,
            animation: `spin ${40 + i * 15}s linear infinite ${i % 2 === 0 ? "" : "reverse"}`,
          }}
        >
          <div
            className="absolute w-2 h-2 rounded-full bg-[#5E6AD2]"
            style={{
              top: 0,
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.4 + i * 0.15,
              boxShadow: "0 0 8px rgba(94,106,210,0.5)",
            }}
          />
        </div>
      ))}
    </div>
  );
}

/* ─── Hero ─── */
export default function Hero() {
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Backgrounds */}
      <AmbientBlobs />
      <DotGrid />
      <FloatingParticles />
      <OrbitingRings />
      <WaveCanvas />

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
