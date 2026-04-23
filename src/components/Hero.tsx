"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  type Variants,
} from "motion/react";
import { ArrowRight } from "lucide-react";
import Magnetic from "./Magnetic";

/* ─── Cursor-reactive + scroll-linked workflow diagram ─── */
function WorkflowDiagram({
  mouseX,
  mouseY,
}: {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}) {
  const ease = [0.16, 1, 0.3, 1] as const;

  // Subtle parallax — diagram drifts opposite to cursor
  const tx = useTransform(mouseX, [-0.5, 0.5], [8, -8]);
  const ty = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const springX = useSpring(tx, { stiffness: 60, damping: 20 });
  const springY = useSpring(ty, { stiffness: 60, damping: 20 });

  const nodes = [
    { id: "trigger", x: 80, y: 180, label: "Form Submitted", delay: 0.4 },
    { id: "agent", x: 380, y: 180, label: "AI Agent", delay: 0.9, accent: true },
    { id: "crm", x: 660, y: 80, label: "CRM Updated", delay: 1.5 },
    { id: "slack", x: 660, y: 180, label: "Slack Notified", delay: 1.7 },
    { id: "report", x: 660, y: 280, label: "Report Filed", delay: 1.9 },
  ];

  const connections = [
    { from: "trigger", to: "agent", d: "M 180 180 L 330 180", delay: 0.7 },
    { from: "agent", to: "crm", d: "M 480 180 Q 560 180 560 120 L 610 80", delay: 1.2 },
    { from: "agent", to: "slack", d: "M 480 180 L 610 180", delay: 1.3 },
    { from: "agent", to: "report", d: "M 480 180 Q 560 180 560 240 L 610 280", delay: 1.4 },
  ];

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{ x: springX, y: springY }}
    >
      <svg
        viewBox="0 0 800 360"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] md:w-[1100px] h-auto opacity-[0.11] md:opacity-[0.14]"
        fill="none"
      >
        {/* Connection lines — draw themselves */}
        {connections.map((c) => (
          <motion.path
            key={`${c.from}-${c.to}`}
            d={c.d}
            stroke="#0D6B4E"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: c.delay, ease }}
          />
        ))}

        {/* Nodes — fade in with breathing scale */}
        {nodes.map((n) => (
          <motion.g
            key={n.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: [0.8, 1.02, 1],
            }}
            transition={{
              duration: 0.6,
              delay: n.delay,
              ease,
              times: [0, 0.6, 1],
            }}
          >
            {/* Soft glow on accent node */}
            {n.accent && (
              <motion.rect
                x={n.x - 6}
                y={n.y - 30}
                width={112}
                height={60}
                rx={12}
                fill="#0D6B4E"
                opacity={0.2}
                animate={{ opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
            <rect
              x={n.x}
              y={n.y - 24}
              width={100}
              height={48}
              rx={8}
              fill={n.accent ? "#0D6B4E" : "#FAFAF8"}
              stroke="#0D6B4E"
              strokeWidth={n.accent ? 0 : 1.5}
            />
            <text
              x={n.x + 50}
              y={n.y + 5}
              textAnchor="middle"
              fontSize="11"
              fontWeight="500"
              fontFamily="system-ui, sans-serif"
              fill={n.accent ? "#FFFFFF" : "#0D6B4E"}
            >
              {n.label}
            </text>
          </motion.g>
        ))}

        {/* Data pulses — continuous flow after initial draw */}
        {connections.map((c, i) => (
          <motion.circle
            key={`pulse-${i}`}
            r="4"
            fill="#10B981"
            initial={{ opacity: 0, offsetDistance: "0%" }}
            animate={{ opacity: [0, 1, 1, 0], offsetDistance: ["0%", "100%"] }}
            transition={{
              duration: 2,
              delay: c.delay + 1.2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "linear",
            }}
            style={{ offsetPath: `path('${c.d}')` }}
          />
        ))}
      </svg>
    </motion.div>
  );
}

/* ─── Breathing grid — dots pulse in a wave ─── */
function BreathingGrid() {
  return (
    <>
      <div className="absolute inset-0 blueprint-grid opacity-40" />
      {/* Radial fade at edges */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, #FAFAF8 80%)",
        }}
      />
      {/* Ambient floating orb */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(13,107,78,0.08), transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.08), transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, -25, 20, 0],
          y: [0, 25, -15, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </>
  );
}

/* ─── Letter-by-letter reveal ─── */
function AnimatedWords({
  text,
  className = "",
  startDelay = 0,
  stagger = 0.04,
}: {
  text: string;
  className?: string;
  startDelay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: startDelay },
    },
  };
  const child: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };
  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          className="inline-block mr-[0.25em]"
          variants={child}
        >
          {w}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* ─── Hero ─── */
export default function Hero() {
  const ease = [0.16, 1, 0.3, 1] as const;
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Scroll-linked parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#FAFAF8]"
    >
      <BreathingGrid />
      <WorkflowDiagram mouseX={mouseX} mouseY={mouseY} />

      {/* Content with scroll parallax */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 pt-24 pb-16 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(13,107,78,0.15)] bg-[rgba(13,107,78,0.04)] mb-10"
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-[#0D6B4E]"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-xs font-medium tracking-wide uppercase text-[#0D6B4E]">
            AI &amp; Automation Partners
          </span>
        </motion.div>

        {/* Headline — staggered word-by-word */}
        <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-light leading-[1.08] tracking-[-0.03em] text-[#111827] mb-2">
          <AnimatedWords text="We automate the processes" startDelay={0.15} />
        </h1>
        <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-light leading-[1.08] tracking-[-0.03em] text-gradient-animated mb-10">
          <AnimatedWords
            text="no software was built for."
            startDelay={0.5}
            stagger={0.05}
          />
        </h1>

        {/* Sub */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0, ease }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-lg md:text-xl font-medium text-[#111827] mb-2">
            Smart people shouldn&apos;t do dumb work.
          </p>
          <p className="text-base md:text-lg text-[#4B5563] leading-relaxed font-normal">
            We design AI-powered agents and automations that take over the
            busywork — freeing your people to focus on strategy, growth,
            and impact.
          </p>
        </motion.div>

        {/* CTA — magnetic */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2, ease }}
          className="flex flex-col items-center gap-4"
        >
          <Magnetic strength={0.3}>
            <a
              href="#book"
              className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#0D6B4E] text-white text-lg font-medium shadow-[0_4px_20px_-4px_rgba(13,107,78,0.35)] hover:shadow-[0_8px_32px_-4px_rgba(13,107,78,0.5)] hover:bg-[#065F46] transition-all duration-300 shine-button"
            >
              Start Your Workflow Now
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </a>
          </Magnetic>
          <motion.p
            className="text-sm text-[#9CA3AF]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            First Automation Workflow FREE — no strings attached.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#9CA3AF]">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-[#9CA3AF] to-transparent"
          animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
