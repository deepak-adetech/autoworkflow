"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

/* ─── Animated Workflow Diagram ─── */
function WorkflowDiagram() {
  const ease = [0.16, 1, 0.3, 1] as const;

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
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 800 360"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] md:w-[1100px] h-auto opacity-[0.09] md:opacity-[0.12]"
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

        {/* Nodes — fade in with stagger */}
        {nodes.map((n) => (
          <motion.g
            key={n.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: n.delay, ease }}
          >
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
    </div>
  );
}

/* ─── Hero ─── */
export default function Hero() {
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#FAFAF8]">
      {/* Blueprint dotted grid */}
      <div className="absolute inset-0 blueprint-grid opacity-40" />

      {/* Radial fade — grid dissolves at edges */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, #FAFAF8 80%)",
        }}
      />

      {/* Workflow animation behind text */}
      <WorkflowDiagram />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 pt-24 pb-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(13,107,78,0.15)] bg-[rgba(13,107,78,0.04)] mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0D6B4E] animate-pulse" />
          <span className="text-xs font-medium tracking-wide uppercase text-[#0D6B4E]">
            AI &amp; Automation Partners
          </span>
        </motion.div>

        {/* Headline — light weight, architectural */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-light leading-[1.08] tracking-[-0.03em] text-[#111827] mb-2"
        >
          We automate the processes
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-light leading-[1.08] tracking-[-0.03em] text-gradient-animated mb-10"
        >
          no software was built for.
        </motion.h1>

        {/* Sub */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease }}
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7, ease }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="#book"
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#0D6B4E] text-white text-lg font-medium shadow-[0_4px_20px_-4px_rgba(13,107,78,0.35)] hover:shadow-[0_6px_28px_-4px_rgba(13,107,78,0.45)] hover:bg-[#065F46] transition-all duration-300 shine-button"
          >
            Start Your Workflow Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <p className="text-sm text-[#9CA3AF]">
            First Automation Workflow FREE — no strings attached.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
