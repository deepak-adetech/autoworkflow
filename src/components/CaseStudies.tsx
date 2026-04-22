"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const CASES = [
  {
    tag: "Client Onboarding",
    title: "6 hours per client → 12 minutes",
    before: "Manual data entry across 4 systems, chasing signatures via email, copy-pasting client info into CRM, project management, and billing tools.",
    automation: "AI agent reads intake forms, populates all systems, triggers DocuSign, creates project boards, and sends welcome sequences — automatically.",
    result: "200+ hours reclaimed monthly. Zero onboarding errors. Clients start faster.",
    metric: "97%",
    metricLabel: "time saved",
  },
  {
    tag: "Invoice Processing",
    title: "Manual AP workflow → fully automated",
    before: "Finance team manually reading invoices, classifying expenses, matching POs, entering data into ERP. 15 hours/week of skilled people doing data entry.",
    automation: "Document AI extracts line items, matches against purchase orders, flags anomalies, routes approvals, and posts to ERP — hands-free.",
    result: "94% reduction in errors. AP team now focuses on cash flow strategy instead of data entry.",
    metric: "94%",
    metricLabel: "fewer errors",
  },
  {
    tag: "Lead Qualification",
    title: "Every lead reviewed → only qualified leads reach sales",
    before: "Sales reps spending 60% of their time on unqualified leads. Manual research, scoring, and CRM updates before any outreach.",
    automation: "AI agent enriches leads from 6 data sources, scores against ICP, updates CRM, and routes hot leads to the right rep with context notes.",
    result: "47% higher conversion. Sales reps only talk to prospects worth talking to.",
    metric: "47%",
    metricLabel: "more conversions",
  },
  {
    tag: "Report Generation",
    title: "Weekly reports built by hand → auto-generated",
    before: "Ops team pulling data from 5 dashboards every Monday, copy-pasting into slides, formatting charts, emailing stakeholders. 8 hours every week.",
    automation: "Scheduled pipeline pulls live data, generates branded reports with charts and commentary, and delivers to Slack/email by 8am Monday.",
    result: "30 hours/month returned. Leadership gets fresher data, faster.",
    metric: "30hrs",
    metricLabel: "saved monthly",
  },
  {
    tag: "Customer Support",
    title: "Ticket backlog → 78% auto-resolved",
    before: "Support team drowning in repetitive tickets — password resets, order tracking, FAQ questions. Average response time: 4 hours.",
    automation: "Conversational AI trained on knowledge base handles L1 tickets, escalates complex issues with full context to human agents.",
    result: "Response time: 30 seconds. CSAT up 22%. Support team handles what machines can't.",
    metric: "78%",
    metricLabel: "auto-resolved",
  },
  {
    tag: "Data Migration",
    title: "6-week manual migration → 3-day automated pipeline",
    before: "Moving 200K records between legacy CRM and new platform. Manual field mapping, deduplication, validation. Estimated 6 weeks of contractor time.",
    automation: "Custom ETL pipeline with AI-powered field mapping, duplicate detection, data cleaning, and validation — with rollback safety.",
    result: "Completed in 3 days. 99.7% accuracy. Zero data loss.",
    metric: "3 days",
    metricLabel: "vs 6 weeks",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function CaseStudies() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);

  const next = useCallback(() => {
    setDir(1);
    setCurrent((i) => (i + 1) % CASES.length);
  }, []);

  const prev = useCallback(() => {
    setDir(-1);
    setCurrent((i) => (i - 1 + CASES.length) % CASES.length);
  }, []);

  const goTo = useCallback((i: number) => {
    setDir(i > current ? 1 : -1);
    setCurrent(i);
  }, [current]);

  useEffect(() => {
    timerRef.current = setInterval(next, 8000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [next]);

  const manual = useCallback((fn: () => void) => {
    if (timerRef.current) clearInterval(timerRef.current);
    fn();
    timerRef.current = setInterval(next, 8000);
  }, [next]);

  const c = CASES[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 50 : -50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -50 : 50, opacity: 0 }),
  };

  return (
    <section id="case-studies" className="py-16 md:py-24 relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-medium text-[#0D6B4E] tracking-widest uppercase mb-4">
            Case Studies
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.025em] mb-5">
            Real work. Real results.{" "}
            <span className="text-gradient">Real systems.</span>
          </h2>
          <p className="text-[#4B5563] text-lg leading-relaxed max-w-2xl mx-auto">
            Not hypotheticals. These are actual processes we automated — and
            the impact they made.
          </p>
        </motion.div>

        {/* Case study card */}
        <div className="relative max-w-5xl mx-auto">
          {/* Nav arrows */}
          <button
            onClick={() => manual(prev)}
            className="absolute -left-2 md:-left-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.08)] flex items-center justify-center text-[#9CA3AF] hover:text-[#111827] hover:border-[rgba(13,107,78,0.3)] transition-all duration-200 cursor-pointer"
            aria-label="Previous case"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => manual(next)}
            className="absolute -right-2 md:-right-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.08)] flex items-center justify-center text-[#9CA3AF] hover:text-[#111827] hover:border-[rgba(13,107,78,0.3)] transition-all duration-200 cursor-pointer"
            aria-label="Next case"
          >
            <ChevronRight size={18} />
          </button>

          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={current}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 md:p-10"
            >
              {/* Top row: tag + metric */}
              <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[rgba(13,107,78,0.1)] text-[#0D6B4E] text-xs font-semibold uppercase tracking-wider mb-3">
                    {c.tag}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-[#111827] tracking-tight">
                    {c.title}
                  </h3>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-3xl md:text-4xl font-bold text-gradient">
                    {c.metric}
                  </div>
                  <p className="text-xs text-[#9CA3AF] font-medium mt-1">
                    {c.metricLabel}
                  </p>
                </div>
              </div>

              {/* Before / After / Result */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-4 rounded-xl bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.04)]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#EF4444] opacity-60" />
                    <span className="text-xs font-semibold text-[#EF4444] uppercase tracking-wider opacity-80">Before</span>
                  </div>
                  <p className="text-sm text-[#4B5563] leading-[1.7]">{c.before}</p>
                </div>
                <div className="p-4 rounded-xl bg-[rgba(13,107,78,0.03)] border border-[rgba(13,107,78,0.1)]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#0D6B4E]" />
                    <span className="text-xs font-semibold text-[#0D6B4E] uppercase tracking-wider">What we built</span>
                  </div>
                  <p className="text-sm text-[#4B5563] leading-[1.7]">{c.automation}</p>
                </div>
                <div className="p-4 rounded-xl bg-[rgba(34,197,94,0.03)] border border-[rgba(34,197,94,0.1)]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E] opacity-80" />
                    <span className="text-xs font-semibold text-[#22C55E] uppercase tracking-wider opacity-80">Result</span>
                  </div>
                  <p className="text-sm text-[#4B5563] leading-[1.7]">{c.result}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {CASES.map((_, i) => (
              <button
                key={i}
                onClick={() => manual(() => goTo(i))}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current
                    ? "w-6 bg-[#0D6B4E]"
                    : "w-1.5 bg-[rgba(0,0,0,0.15)] hover:bg-[rgba(0,0,0,0.3)]"
                }`}
                aria-label={`Case study ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
