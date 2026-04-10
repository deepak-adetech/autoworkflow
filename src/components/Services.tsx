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
      "Purpose-built agents for your specific workflows. Not generic bots — agents that understand your process, handle edge cases, and actually work in production.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "The boring stuff nobody built software for — approval chains, data handoffs, report assembly. We map it, automate it, and free your team to do real work.",
  },
  {
    icon: FileSearch,
    title: "Intelligent Document Processing",
    description:
      "Your team shouldn't read invoices, contracts, or applications manually. We build systems that extract, classify, and route documents — tailored to your formats.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description:
      "Stop manually assembling reports from five different tools. We build pipelines that pull, transform, and surface insights — automatically, on your schedule.",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description:
      "Not another generic chatbot. We build conversational agents trained on your knowledge base, your tone, your escalation rules — handling 80% so your team handles what matters.",
  },
  {
    icon: Plug,
    title: "API & System Integration",
    description:
      "Your CRM doesn't talk to your ERP. Your ERP doesn't talk to your database. We build the glue — using whatever combination of tools makes sense, not whatever's trendy.",
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
            What We Actually Build
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.025em] mb-5">
            Not decks. Not demos.{" "}
            <span className="text-gradient">Working automations.</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg leading-relaxed max-w-2xl mx-auto">
            We build the specific automation your business needs — deployed in your
            stack, solving your workflow, saving your team real hours every week.
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
