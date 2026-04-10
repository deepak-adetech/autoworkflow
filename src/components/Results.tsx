"use client";

import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Quote } from "lucide-react";

/* ─── Animated Counter ─── */
function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  duration = 2000,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Expo ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * value);

      setDisplay(current);

      if (progress < 1) {
        start = requestAnimationFrame(tick);
      } else {
        setDisplay(value);
      }
    };

    start = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(start);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ─── Metrics ─── */
const METRICS = [
  { value: 500, suffix: "+", label: "Workflows Automated" },
  { value: 50000, suffix: "+", label: "Hours Saved Annually" },
  { value: 3.2, suffix: "×", label: "Average ROI" },
  { prefix: "<", value: 14, suffix: " Days", label: "Average Deployment" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Results() {
  return (
    <section id="results" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-xs font-medium text-[#5E6AD2] tracking-widest uppercase mb-4">
            Results
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.025em] mb-5">
            Numbers that{" "}
            <span className="text-gradient">speak for themselves</span>
          </h2>
          <p className="text-[#8A8F98] text-lg leading-relaxed max-w-2xl mx-auto">
            We measure success in hours returned to your team and dollars kept in
            your pocket.
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="glass-card p-6 md:p-8 text-center"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-2 tracking-tight">
                {metric.value === 3.2 ? (
                  /* Non-integer: just display directly */
                  <span>3.2{metric.suffix}</span>
                ) : (
                  <AnimatedNumber
                    value={metric.value}
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                  />
                )}
              </div>
              <p className="text-sm text-[#8A8F98] font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="glass-card p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Accent glow */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-[0.06] blur-[80px] pointer-events-none"
            style={{ background: "radial-gradient(circle, #5E6AD2, transparent)" }}
          />

          <Quote size={32} className="text-[#5E6AD2] opacity-40 mb-6" />
          <blockquote className="text-lg md:text-xl text-[#EDEDEF] leading-[1.7] font-medium mb-8">
            &quot;AutoWorkflows automated our entire client onboarding pipeline in 10 days.
            What used to take our team 6 hours per client now takes 12 minutes. We&apos;ve
            reclaimed over 200 hours a month — and our clients get a better experience.&quot;
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5E6AD2] to-[#7C5CFC] flex items-center justify-center text-white font-bold text-sm">
              SR
            </div>
            <div>
              <p className="text-sm font-semibold text-[#EDEDEF]">
                Sarah Rodriguez
              </p>
              <p className="text-sm text-[#8A8F98]">
                COO, ScalePoint Financial
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
