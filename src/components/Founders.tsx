"use client";

import { motion } from "motion/react";
function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const FOUNDERS = [
  {
    name: "Pranav Parekh",
    role: "Co-Founder",
    bio: "Spent years watching consultancies deliver decks and disappear. Co-founded AutoWorkflow.AI to be the builders who stay — loyal to the problem, not to any vendor or technology.",
    initials: "PP",
    gradient: "from-[#06B6D4] to-[#22D3EE]",
    linkedin: "https://www.linkedin.com/in/pranav-parekh",
  },
  {
    name: "Deepak Sharma",
    role: "Co-Founder",
    bio: "Saw too many smart teams stuck doing dumb work — copying data, chasing approvals, assembling reports. Built AutoWorkflow.AI to close the gap between what AI can do and what it actually does inside a business.",
    initials: "DS",
    gradient: "from-[#3B82F6] to-[#06B6D4]",
    linkedin: "https://www.linkedin.com/in/deepak-sharma",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Founders() {
  return (
    <section id="founders" className="section-padding relative">
      {/* Subtle background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(59,130,246,0.04), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="text-xs font-medium text-[#3B82F6] tracking-widest uppercase mb-4">
            Leadership
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.025em] mb-5">
            Founders who&apos;ve{" "}
            <span className="text-gradient">been in your shoes</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg leading-relaxed max-w-2xl mx-auto">
            We didn&apos;t start with a technology. We started with a frustration —
            watching capable teams waste hours on work that machines should handle.
          </p>
        </motion.div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {FOUNDERS.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease }}
              className="glass-card p-8 md:p-10 group relative overflow-hidden"
            >
              {/* Accent glow on hover */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-0 group-hover:opacity-[0.06] blur-[60px] transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, #3B82F6, transparent)",
                }}
              />

              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div
                  className={`w-24 h-24 rounded-full bg-gradient-to-br ${founder.gradient} flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-[0_0_30px_-6px_rgba(59,130,246,0.35)]`}
                >
                  {founder.initials}
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-[#EEEEF0] tracking-tight">
                  {founder.name}
                </h3>
                <p className="text-sm text-[#3B82F6] font-medium mt-1 mb-4">
                  {founder.role}
                </p>

                {/* Bio */}
                <p className="text-sm text-[#9CA3AF] leading-[1.7] mb-6 max-w-sm">
                  {founder.bio}
                </p>

                {/* LinkedIn */}
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-sm text-[#9CA3AF] hover:text-[#EEEEF0] hover:border-[rgba(59,130,246,0.3)] hover:bg-[rgba(59,130,246,0.06)] transition-all duration-250"
                >
                  <LinkedinIcon size={15} />
                  Connect on LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
