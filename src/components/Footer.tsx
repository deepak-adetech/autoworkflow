"use client";

import Logo from "./Logo";
import { ArrowUpRight } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#book" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "AI Agents", href: "#services" },
      { label: "Workflow Automation", href: "#services" },
      { label: "Document Processing", href: "#services" },
      { label: "Conversational AI", href: "#services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "#results" },
      { label: "FAQ", href: "#faq" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,0,0,0.06)] bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-4">
            <Logo size="md" />
            <p className="mt-4 text-sm text-[#4B5563] leading-relaxed max-w-xs">
              AI-powered workflow automation for modern businesses. We build the
              agents that handle the work your team shouldn&apos;t have to.
            </p>
            <p className="mt-6 text-xs text-[#9CA3AF] italic">
              &quot;AI is all we do.&quot;
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title} className="md:col-span-2 md:col-start-auto">
              <h4 className="text-sm font-semibold text-[#111827] mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#4B5563] hover:text-[#111827] transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[rgba(0,0,0,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9CA3AF]">
            &copy; {new Date().getFullYear()} AutoWorkflows.AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-[#9CA3AF] hover:text-[#4B5563] transition-colors duration-200"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
