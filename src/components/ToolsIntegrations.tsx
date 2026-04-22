"use client";

import { motion } from "motion/react";

/* ─── Simple SVG tool icons ─── */
/* Each is a minimal, recognizable mark with the tool's brand color */

const TOOLS_ROW_1 = [
  {
    name: "OpenAI",
    color: "#10A37F",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M22.28 9.37a5.93 5.93 0 00-.51-4.87A6.02 6.02 0 0015.29 1a5.96 5.96 0 00-5.69 1.33A5.94 5.94 0 006.7 1.07 6.02 6.02 0 002.13 5.2a5.96 5.96 0 00-.82 6.18A5.93 5.93 0 001.82 16a6.02 6.02 0 006.48 3.5 5.94 5.94 0 004.44 1.97 6.02 6.02 0 005.74-4.13 5.94 5.94 0 003.93-1.28 6.02 6.02 0 001.87-6.69z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Claude",
    color: "#D97757",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5M14 11c0-.55.45-1 1-1s1 .45 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Slack",
    color: "#E01E5A",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M6 15a2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2h2zm1 0a2 2 0 012-2 2 2 0 012 2v5a2 2 0 01-2 2 2 2 0 01-2-2zM9 6a2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2v2zm0 1a2 2 0 012 2 2 2 0 01-2 2H4a2 2 0 01-2-2 2 2 0 012-2zM18 9a2 2 0 012-2 2 2 0 012 2 2 2 0 01-2 2h-2zm-1 0a2 2 0 01-2 2 2 2 0 01-2-2V4a2 2 0 012-2 2 2 0 012 2zM15 18a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2v-2zm0-1a2 2 0 01-2-2 2 2 0 012-2h5a2 2 0 012 2 2 2 0 01-2 2z" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    name: "Zapier",
    color: "#FF4F00",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M12 2L2 12l10 10 10-10L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "HubSpot",
    color: "#FF7A59",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.64 5.64l2.83 2.83M15.54 15.54l2.83 2.83M5.64 18.36l2.83-2.83M15.54 8.46l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Make",
    color: "#6D00CC",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 15V9l5 6V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Salesforce",
    color: "#00A1E0",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M5.5 16.5c-2 0-3.5-1.5-3.5-3.5s1.5-3.5 3.5-3.5c.2 0 .4 0 .6.05A5 5 0 0110.5 5a5 5 0 014.9 4.05c.2-.03.4-.05.6-.05 2 0 3.5 1.5 3.5 3.5s-1.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "n8n",
    color: "#EA4B71",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="8" cy="12" r="1.5" fill="currentColor"/>
        <circle cx="16" cy="12" r="1.5" fill="currentColor"/>
        <path d="M9.5 12h5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Stripe",
    color: "#635BFF",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12.5 9.5c-1.5-.7-3 0-3 1.5s1.5 1.5 3 2.2c1.5.7 1.5 2.3 0 2.8s-3-.3-3-.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Notion",
    color: "#111827",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 7h8M8 11h5M8 15h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const TOOLS_ROW_2 = [
  {
    name: "AWS",
    color: "#FF9900",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M4 16c3 2 7 3 11 2s6-3 6-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 15l2.5-.5-1 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 12l3-7 3 7M6.5 10h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    color: "#111827",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.484 0-.236-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.337-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.16 22 16.418 22 12c0-5.523-4.477-10-10-10z" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    color: "#4285F4",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M14.5 6l1.7-2.9M9.5 6L7.8 3.1M16.3 12h3.4M4.3 12h3.4M14.5 18l1.7 2.9M9.5 18L7.8 20.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 8H8l-2 4 2 4h8l2-4-2-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    color: "#336791",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <ellipse cx="12" cy="8" rx="7" ry="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 8v8c0 2.21 3.13 4 7 4s7-1.79 7-4V8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 13c0 2.21 3.13 4 7 4s7-1.79 7-4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Airtable",
    color: "#18BFFF",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M3 7l9-4 9 4v2l-9 4-9-4V7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M3 13l9 4 9-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 17l9 4 9-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Shopify",
    color: "#7AB55C",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M16 4l1 3h3l-6 16L4 7h4l2-3h6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10.5 4v6.5l3.5-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Twilio",
    color: "#F22F46",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="9.5" cy="9.5" r="1.5" fill="currentColor"/>
        <circle cx="14.5" cy="9.5" r="1.5" fill="currentColor"/>
        <circle cx="9.5" cy="14.5" r="1.5" fill="currentColor"/>
        <circle cx="14.5" cy="14.5" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Snowflake",
    color: "#29B5E8",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M12 2v20M2 12h20M5.64 5.64l12.73 12.73M18.36 5.64L5.64 18.36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Power Automate",
    color: "#0066FF",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    color: "#47A248",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M12 2c0 0-4 5-4 10a4 4 0 008 0c0-5-4-10-4-10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 12v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

function ToolPill({ name, icon, color }: { name: string; icon: React.ReactNode; color: string }) {
  return (
    <div
      className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-[rgba(0,0,0,0.06)] bg-[rgba(0,0,0,0.02)] shrink-0 transition-all duration-200 group/pill hover:border-[rgba(0,0,0,0.12)]"
    >
      <span className="text-[#9CA3AF] group-hover/pill:text-current transition-colors duration-200" style={{ color: undefined } as React.CSSProperties}
        onMouseEnter={(e) => (e.currentTarget.style.color = color)}
        onMouseLeave={(e) => (e.currentTarget.style.color = "")}
      >
        {icon}
      </span>
      <span className="text-sm text-[#4B5563] whitespace-nowrap font-medium">
        {name}
      </span>
    </div>
  );
}

export default function ToolsIntegrations() {
  const row1Doubled = [...TOOLS_ROW_1, ...TOOLS_ROW_1];
  const row2Doubled = [...TOOLS_ROW_2, ...TOOLS_ROW_2];

  return (
    <section id="tools" className="py-16 md:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="text-xs font-medium text-[#0D6B4E] tracking-widest uppercase mb-3">
            Tool Agnostic
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-3">
            We don&apos;t sell tools. <span className="text-gradient">We solve problems.</span>
          </h2>
          <p className="text-[#4B5563] text-base leading-relaxed max-w-xl mx-auto">
            No vendor lock-in. We evaluate your needs and pick the best combination from 50+ platforms, AI models, and infrastructure providers.
          </p>
        </motion.div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#FAFAF8] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#FAFAF8] to-transparent" />
        <div className="flex overflow-hidden">
          <div className="marquee-track flex shrink-0 gap-3 items-center">
            {row1Doubled.map((tool, i) => (
              <ToolPill key={`${tool.name}-${i}`} {...tool} />
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#FAFAF8] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#FAFAF8] to-transparent" />
        <div className="flex overflow-hidden">
          <div className="marquee-track-reverse flex shrink-0 gap-3 items-center">
            {row2Doubled.map((tool, i) => (
              <ToolPill key={`${tool.name}-${i}`} {...tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
