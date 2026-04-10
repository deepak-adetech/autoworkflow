"use client";

import { motion } from "motion/react";
import {
  Bot,
  Workflow,
  FileSearch,
  BarChart3,
  MessageSquare,
  Plug,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    icon: Bot,
    title: "Custom AI Agents",
    description:
      "Autonomous agents that handle complex workflows end-to-end. Customer support, data processing, decision-making — your AI workforce never sleeps.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Connect your tools, eliminate manual handoffs, and let processes run themselves. From intake to output, zero human bottlenecks.",
  },
  {
    icon: FileSearch,
    title: "Intelligent Document Processing",
    description:
      "Extract, classify, and route documents in seconds. Invoices, contracts, applications — AI reads them so your team doesn't have to.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description:
      "Turn raw data into decisions. Custom dashboards, anomaly detection, and automated reports that surface what actually matters.",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description:
      "Deploy chatbots and voice agents that genuinely understand context. Handle 80% of inquiries, escalate the rest intelligently.",
  },
  {
    icon: Plug,
    title: "API & System Integration",
    description:
      "Bridge the gaps between your tools. CRM, ERP, databases, SaaS platforms — we build the AI-powered glue that makes everything talk.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-xs font-medium text-[#3B82F6] tracking-widest uppercase mb-4">
            What We Build
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.025em] mb-5">
            AI solutions that{" "}
            <span className="text-gradient">actually ship</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg leading-relaxed max-w-2xl mx-auto">
            We don&apos;t do PowerPoint decks. We build production-ready automations
            that save your team real hours every week.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease,
              }}
              className="glass-card p-7 md:p-8 group cursor-default"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgba(59,130,246,0.15)] to-[rgba(6,182,212,0.08)] flex items-center justify-center mb-5 group-hover:from-[rgba(59,130,246,0.25)] group-hover:to-[rgba(6,182,212,0.15)] transition-all duration-300">
                <service.icon
                  size={22}
                  className="text-[#3B82F6] group-hover:text-[#06B6D4] transition-colors duration-300"
                />
              </div>

              <h3 className="text-lg font-semibold text-[#EEEEF0] mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm text-[#9CA3AF] leading-[1.7]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
