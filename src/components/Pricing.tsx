"use client";

import { motion } from "motion/react";
import { Check, ArrowRight, Sparkles, Phone } from "lucide-react";
import ShineButton from "./ShineButton";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  highlight: boolean;
  badge?: string;
}

const TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "$0",
    period: "First workflow free",
    description:
      "See the results before you invest. We automate your first workflow completely free — no strings, no contracts.",
    features: [
      "1 fully automated workflow",
      "End-to-end build & deployment",
      "Up to 3 tool integrations",
      "Performance monitoring (30 days)",
      "Slack support during build",
      "No credit card required",
    ],
    cta: "Start free",
    ctaHref: "#book",
    highlight: false,
    badge: "No risk",
  },
  {
    name: "Professional",
    price: "$3,000 – $9,000",
    period: "per workflow",
    description:
      "Production-grade AI automations built for scale. Complex integrations, custom logic, and ongoing optimization.",
    features: [
      "Custom AI agent development",
      "Unlimited tool integrations",
      "Advanced logic & branching",
      "Error handling & fallbacks",
      "90-day monitoring & optimization",
      "Priority Slack & email support",
      "Performance dashboards",
      "Documentation & training",
    ],
    cta: "Get started",
    ctaHref: "#book",
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored to your needs",
    description:
      "Full-scale automation programs. Multiple workflows, dedicated team, and ongoing partnership for continuous improvement.",
    features: [
      "Unlimited workflows",
      "Dedicated automation team",
      "Custom AI model fine-tuning",
      "On-premise / VPC deployment",
      "SOC 2 compliant processes",
      "SLA-backed uptime guarantee",
      "Quarterly business reviews",
      "24/7 priority support",
    ],
    cta: "Book a call",
    ctaHref: "#book",
    highlight: false,
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding relative">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(59,130,246,0.04), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="text-xs font-medium text-[#3B82F6] tracking-widest uppercase mb-4">
            Pricing
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.025em] mb-5">
            Simple pricing.{" "}
            <span className="text-gradient">Serious results.</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg leading-relaxed max-w-2xl mx-auto">
            Start free. Scale when you&apos;re ready. Every engagement begins
            with a free workflow so you can see the value firsthand.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 items-start">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className={`relative rounded-2xl p-[1px] ${
                tier.highlight
                  ? "bg-gradient-to-b from-[rgba(59,130,246,0.4)] via-[rgba(59,130,246,0.15)] to-[rgba(59,130,246,0.05)]"
                  : ""
              }`}
            >
              <div
                className={`glass-card rounded-2xl p-7 md:p-8 h-full flex flex-col ${
                  tier.highlight
                    ? "!bg-[rgba(59,130,246,0.04)] !border-transparent"
                    : ""
                }`}
              >
                {/* Badge */}
                {tier.badge && (
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-5 w-fit ${
                      tier.highlight
                        ? "bg-[rgba(59,130,246,0.15)] text-[#06B6D4]"
                        : "bg-[rgba(255,255,255,0.05)] text-[#9CA3AF]"
                    }`}
                  >
                    {tier.highlight ? (
                      <Sparkles size={11} />
                    ) : null}
                    {tier.badge}
                  </div>
                )}

                {/* Plan name */}
                <h3 className="text-lg font-semibold text-[#EEEEF0] tracking-tight">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="mt-4 mb-1">
                  <span
                    className={`text-3xl md:text-4xl font-bold tracking-tight ${
                      tier.highlight ? "text-gradient" : "text-[#EEEEF0]"
                    }`}
                  >
                    {tier.price}
                  </span>
                </div>
                <p className="text-sm text-[#6B7280] mb-5">{tier.period}</p>

                {/* Description */}
                <p className="text-sm text-[#9CA3AF] leading-[1.7] mb-7">
                  {tier.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-[#9CA3AF]"
                    >
                      <Check
                        size={15}
                        className={`shrink-0 mt-0.5 ${
                          tier.highlight
                            ? "text-[#3B82F6]"
                            : "text-[#6B7280]"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <ShineButton
                  href={tier.ctaHref}
                  variant={tier.highlight ? "primary" : "secondary"}
                  size="md"
                  className="w-full justify-center"
                >
                  {tier.name === "Enterprise" ? (
                    <>
                      <Phone size={15} className="mr-1.5" />
                      {tier.cta}
                    </>
                  ) : (
                    <>
                      {tier.cta}
                      <ArrowRight size={15} className="ml-1.5" />
                    </>
                  )}
                </ShineButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
