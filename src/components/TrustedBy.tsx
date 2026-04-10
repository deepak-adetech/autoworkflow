"use client";

import { motion } from "motion/react";

const INTEGRATIONS = [
  "OpenAI", "Slack", "Zapier", "HubSpot", "Salesforce",
  "Google Workspace", "Notion", "Airtable", "Stripe",
  "AWS", "Make", "n8n", "Twilio", "Shopify", "Jira",
  "PostgreSQL", "Snowflake", "GitHub",
];

export default function TrustedBy() {
  const doubled = [...INTEGRATIONS, ...INTEGRATIONS];

  return (
    <section className="relative border-y border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] py-12 overflow-hidden">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-xs font-medium text-[#55585E] tracking-widest uppercase mb-8"
      >
        Integrates with the tools you already use
      </motion.p>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#09090B] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#09090B] to-transparent" />

        <div className="flex overflow-hidden">
          <div className="marquee-track flex shrink-0 gap-8 items-center">
            {doubled.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] shrink-0 hover:border-[rgba(94,106,210,0.2)] transition-colors duration-200"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#5E6AD2] to-[#7C5CFC] opacity-60" />
                <span className="text-sm text-[#8A8F98] whitespace-nowrap font-medium">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
