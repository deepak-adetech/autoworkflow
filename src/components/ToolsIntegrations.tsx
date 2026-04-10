"use client";

import { motion } from "motion/react";
import {
  Brain,
  MessageSquare,
  Database,
  Zap,
  Globe,
  FileText,
  BarChart3,
  Mail,
  Shield,
  Cloud,
  Code,
  Layers,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ToolCategory {
  title: string;
  icon: LucideIcon;
  tools: string[];
}

const CATEGORIES: ToolCategory[] = [
  {
    title: "AI & LLMs",
    icon: Brain,
    tools: [
      "OpenAI / GPT-4o",
      "Claude / Anthropic",
      "Google Gemini",
      "Mistral AI",
      "LLaMA / Meta",
      "Hugging Face",
    ],
  },
  {
    title: "Conversational AI",
    icon: MessageSquare,
    tools: [
      "Voiceflow",
      "Botpress",
      "Dialogflow",
      "Rasa",
      "Intercom Fin",
      "Twilio",
    ],
  },
  {
    title: "Workflow Automation",
    icon: Zap,
    tools: [
      "Zapier",
      "Make (Integromat)",
      "n8n",
      "Power Automate",
      "Workato",
      "Tray.io",
    ],
  },
  {
    title: "Data & Databases",
    icon: Database,
    tools: [
      "PostgreSQL",
      "MongoDB",
      "Snowflake",
      "BigQuery",
      "Supabase",
      "Airtable",
    ],
  },
  {
    title: "CRM & Sales",
    icon: Globe,
    tools: [
      "Salesforce",
      "HubSpot",
      "Pipedrive",
      "Zoho CRM",
      "Close.com",
      "Apollo.io",
    ],
  },
  {
    title: "Document Processing",
    icon: FileText,
    tools: [
      "AWS Textract",
      "Google Document AI",
      "Azure Form Recognizer",
      "Nanonets",
      "Docsumo",
      "Parseur",
    ],
  },
  {
    title: "Analytics & BI",
    icon: BarChart3,
    tools: [
      "Tableau",
      "Looker",
      "Power BI",
      "Metabase",
      "Mixpanel",
      "Amplitude",
    ],
  },
  {
    title: "Communication",
    icon: Mail,
    tools: [
      "Slack",
      "Microsoft Teams",
      "Gmail / Google Workspace",
      "Outlook",
      "SendGrid",
      "Twilio SMS",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    tools: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Vercel",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    title: "Developer Tools",
    icon: Code,
    tools: [
      "GitHub",
      "GitLab",
      "Jira",
      "Linear",
      "Notion",
      "Confluence",
    ],
  },
  {
    title: "E-Commerce",
    icon: Layers,
    tools: [
      "Shopify",
      "WooCommerce",
      "Stripe",
      "Razorpay",
      "Magento",
      "BigCommerce",
    ],
  },
  {
    title: "Security & Compliance",
    icon: Shield,
    tools: [
      "Okta",
      "Auth0",
      "AWS IAM",
      "Vault",
      "Datadog",
      "PagerDuty",
    ],
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function ToolsIntegrations() {
  return (
    <section id="tools" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="text-xs font-medium text-[#5E6AD2] tracking-widest uppercase mb-4">
            Tools & Integrations
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.025em] mb-5">
            70+ tools.{" "}
            <span className="text-gradient">One seamless workflow.</span>
          </h2>
          <p className="text-[#8A8F98] text-lg leading-relaxed max-w-2xl mx-auto">
            We connect every layer of your stack — AI models, automation
            platforms, databases, CRMs, and more — into intelligent workflows
            that run themselves.
          </p>
        </motion.div>

        {/* Tool Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05, ease }}
              className="glass-card p-5 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[rgba(94,106,210,0.15)] to-[rgba(124,92,252,0.08)] flex items-center justify-center group-hover:from-[rgba(94,106,210,0.25)] group-hover:to-[rgba(124,92,252,0.15)] transition-all duration-300">
                  <cat.icon
                    size={16}
                    className="text-[#5E6AD2] group-hover:text-[#7C5CFC] transition-colors duration-300"
                  />
                </div>
                <h3 className="text-sm font-semibold text-[#EDEDEF] tracking-tight">
                  {cat.title}
                </h3>
              </div>

              {/* Tool list */}
              <ul className="space-y-1.5">
                {cat.tools.map((tool) => (
                  <li
                    key={tool}
                    className="flex items-center gap-2 text-xs text-[#8A8F98]"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#5E6AD2] opacity-50 shrink-0" />
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
