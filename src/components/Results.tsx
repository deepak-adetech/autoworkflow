"use client";

import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useEffect, useState, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

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
    const startTime = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplay(value);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
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

/* ─── Testimonials ─── */
const TESTIMONIALS = [
  {
    quote:
      "AutoWorkflows automated our entire client onboarding pipeline in 10 days. What used to take our team 6 hours per client now takes 12 minutes. We've reclaimed over 200 hours a month — and our clients get a better experience.",
    name: "Sarah Rodriguez",
    title: "COO, ScalePoint Financial",
    initials: "SR",
  },
  {
    quote:
      "We were drowning in manual invoice processing. AutoWorkflows built an AI agent that reads, classifies, and routes invoices automatically. Error rates dropped 94% and our AP team finally has bandwidth to focus on strategy.",
    name: "Michael Chen",
    title: "CFO, NovaBridge Logistics",
    initials: "MC",
  },
  {
    quote:
      "The team automated our entire lead qualification workflow. Our sales reps only talk to pre-qualified prospects now. Conversion rates are up 47% and we're closing deals twice as fast.",
    name: "Priya Sharma",
    title: "VP Sales, Meridian SaaS",
    initials: "PS",
  },
  {
    quote:
      "They delivered our first automation in 8 days — for free. It saved us 30 hours a week on report generation alone. We immediately signed up for three more workflows. Best vendor decision we've made.",
    name: "David Park",
    title: "CTO, Helix Health Systems",
    initials: "DP",
  },
  {
    quote:
      "Our customer support was overwhelmed with repetitive tickets. AutoWorkflows deployed a conversational AI agent that handles 78% of incoming requests. CSAT scores went up and our support team's burnout went down.",
    name: "Elena Vasquez",
    title: "Head of CX, Lumina Retail",
    initials: "EV",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

/* ─── Testimonial Carousel ─── */
function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((i) => (i + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  }, []);

  // Auto-rotate
  useEffect(() => {
    timerRef.current = setInterval(next, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  // Reset timer on manual interaction
  const handleManual = useCallback(
    (fn: () => void) => {
      if (timerRef.current) clearInterval(timerRef.current);
      fn();
      timerRef.current = setInterval(next, 6000);
    },
    [next]
  );

  const t = TESTIMONIALS[current];

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? 60 : -60,
      opacity: 0,
      filter: "blur(4px)",
    }),
    center: { x: 0, opacity: 1, filter: "blur(0px)" },
    exit: (d: number) => ({
      x: d > 0 ? -60 : 60,
      opacity: 0,
      filter: "blur(4px)",
    }),
  };

  return (
    <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
      {/* Accent glow */}
      <div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-[0.06] blur-[80px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #0D6B4E, transparent)",
        }}
      />

      {/* Navigation arrows */}
      <button
        onClick={() => handleManual(prev)}
        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.08)] flex items-center justify-center text-[#9CA3AF] hover:text-[#111827] hover:border-[rgba(13,107,78,0.3)] transition-all duration-200 cursor-pointer"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={() => handleManual(next)}
        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.08)] flex items-center justify-center text-[#9CA3AF] hover:text-[#111827] hover:border-[rgba(13,107,78,0.3)] transition-all duration-200 cursor-pointer"
        aria-label="Next testimonial"
      >
        <ChevronRight size={16} />
      </button>

      {/* Testimonial content */}
      <div className="px-6 md:px-10 min-h-[260px] md:min-h-[220px] flex flex-col justify-between">
        <Quote size={28} className="text-[#0D6B4E] opacity-40 mb-5 shrink-0" />

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <blockquote className="text-base md:text-lg text-[#111827] leading-[1.7] font-medium mb-8">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0D6B4E] to-[#10B981] flex items-center justify-center text-white font-bold text-xs shrink-0">
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-[#111827]">
                  {t.name}
                </p>
                <p className="text-sm text-[#4B5563]">{t.title}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => handleManual(() => goTo(i))}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === current
                ? "w-6 bg-[#0D6B4E]"
                : "w-1.5 bg-[rgba(0,0,0,0.15)] hover:bg-[rgba(0,0,0,0.3)]"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Results Section ─── */
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
          <p className="text-xs font-medium text-[#0D6B4E] tracking-widest uppercase mb-4">
            Results
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.025em] mb-5">
            Numbers that{" "}
            <span className="text-gradient">speak for themselves</span>
          </h2>
          <p className="text-[#4B5563] text-lg leading-relaxed max-w-2xl mx-auto">
            We measure success in hours returned to your team and dollars kept
            in your pocket.
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
              className={`glass-card p-6 md:p-8 text-center ${metric.label === "Average Deployment" ? "!bg-[rgba(13,107,78,0.04)] !border-[rgba(13,107,78,0.2)] !shadow-[0_4px_24px_-4px_rgba(13,107,78,0.12)]" : ""}`}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-2 tracking-tight">
                {metric.value === 3.2 ? (
                  <span>3.2{metric.suffix}</span>
                ) : (
                  <AnimatedNumber
                    value={metric.value}
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                  />
                )}
              </div>
              <p className="text-sm text-[#4B5563] font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
        >
          <TestimonialCarousel />
        </motion.div>
      </div>
    </section>
  );
}
