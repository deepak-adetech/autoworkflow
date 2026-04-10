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
    name: "Deepak Sharma",
    role: "Co-Founder",
    bio: "Former automation architect who saw too many businesses drowning in manual processes. Built AutoWorkflows to fix that — one AI agent at a time.",
    initials: "DS",
    gradient: "from-[#5E6AD2] to-[#7C5CFC]",
    linkedin: "https://www.linkedin.com/in/deepak-sharma",
  },
  {
    name: "Pranav Parekh",
    role: "Co-Founder",
    bio: "Digital strategist turned AI evangelist. Obsessed with helping businesses scale without scaling headcount. Believes the best workflow is the one nobody has to do.",
    initials: "PP",
    gradient: "from-[#7C5CFC] to-[#A78BFA]",
    linkedin: "https://www.linkedin.com/in/pranav-parekh",
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
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(94,106,210,0.04), transparent)",
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
          <p className="text-xs font-medium text-[#5E6AD2] tracking-widest uppercase mb-4">
            Leadership
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.025em] mb-5">
            Learn from founders{" "}
            <span className="text-gradient">who&apos;ve done it</span>
          </h2>
          <p className="text-[#8A8F98] text-lg leading-relaxed max-w-2xl mx-auto">
            We didn&apos;t just study automation — we lived it. Now we build the AI
            systems we wish existed when we were in your shoes.
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
                    "radial-gradient(circle, #5E6AD2, transparent)",
                }}
              />

              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div
                  className={`w-24 h-24 rounded-full bg-gradient-to-br ${founder.gradient} flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-[0_0_30px_-6px_rgba(94,106,210,0.35)]`}
                >
                  {founder.initials}
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-[#EDEDEF] tracking-tight">
                  {founder.name}
                </h3>
                <p className="text-sm text-[#5E6AD2] font-medium mt-1 mb-4">
                  {founder.role}
                </p>

                {/* Bio */}
                <p className="text-sm text-[#8A8F98] leading-[1.7] mb-6 max-w-sm">
                  {founder.bio}
                </p>

                {/* LinkedIn */}
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-sm text-[#8A8F98] hover:text-[#EDEDEF] hover:border-[rgba(94,106,210,0.3)] hover:bg-[rgba(94,106,210,0.06)] transition-all duration-250"
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
