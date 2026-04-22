"use client";

import { motion } from "motion/react";

/* ─── Client Logo SVGs ─── */
/* Simple, clean text-mark logos rendered as SVG for crisp display */

function LogoSiemens() {
  return (
    <svg viewBox="0 0 120 24" fill="none" className="h-5 md:h-6 w-auto">
      <text x="0" y="18" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="600" letterSpacing="-0.5" fill="currentColor">
        SIEMENS
      </text>
    </svg>
  );
}

function LogoBosch() {
  return (
    <svg viewBox="0 0 100 24" fill="none" className="h-5 md:h-6 w-auto">
      <text x="0" y="18" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="700" letterSpacing="1" fill="currentColor">
        BOSCH
      </text>
    </svg>
  );
}

function LogoTata() {
  return (
    <svg viewBox="0 0 76 24" fill="none" className="h-5 md:h-6 w-auto">
      <text x="0" y="18" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="700" letterSpacing="2" fill="currentColor">
        TATA
      </text>
    </svg>
  );
}

function LogoHCL() {
  return (
    <svg viewBox="0 0 56 24" fill="none" className="h-5 md:h-6 w-auto">
      <text x="0" y="18" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="700" letterSpacing="1.5" fill="currentColor">
        HCL
      </text>
    </svg>
  );
}

function LogoWipro() {
  return (
    <svg viewBox="0 0 96 24" fill="none" className="h-5 md:h-6 w-auto">
      <text x="0" y="18" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="600" letterSpacing="0.5" fill="currentColor">
        Wipro
      </text>
    </svg>
  );
}

function LogoInfosys() {
  return (
    <svg viewBox="0 0 110 24" fill="none" className="h-5 md:h-6 w-auto">
      <text x="0" y="18" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="600" letterSpacing="-0.3" fill="currentColor">
        Infosys
      </text>
    </svg>
  );
}

function LogoLT() {
  return (
    <svg viewBox="0 0 56 24" fill="none" className="h-5 md:h-6 w-auto">
      <text x="0" y="18" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="700" letterSpacing="1" fill="currentColor">
        L&amp;T
      </text>
    </svg>
  );
}

function LogoMahindra() {
  return (
    <svg viewBox="0 0 140 24" fill="none" className="h-5 md:h-6 w-auto">
      <text x="0" y="18" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="600" letterSpacing="-0.3" fill="currentColor">
        MAHINDRA
      </text>
    </svg>
  );
}

function LogoGodrej() {
  return (
    <svg viewBox="0 0 110 24" fill="none" className="h-5 md:h-6 w-auto">
      <text x="0" y="18" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="600" letterSpacing="0.3" fill="currentColor">
        Godrej
      </text>
    </svg>
  );
}

function LogoReliance() {
  return (
    <svg viewBox="0 0 140 24" fill="none" className="h-5 md:h-6 w-auto">
      <text x="0" y="18" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="600" letterSpacing="-0.3" fill="currentColor">
        RELIANCE
      </text>
    </svg>
  );
}

function LogoTechMahindra() {
  return (
    <svg viewBox="0 0 200 24" fill="none" className="h-5 md:h-6 w-auto">
      <text x="0" y="18" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="600" letterSpacing="-0.3" fill="currentColor">
        Tech Mahindra
      </text>
    </svg>
  );
}

function LogoBajaj() {
  return (
    <svg viewBox="0 0 96 24" fill="none" className="h-5 md:h-6 w-auto">
      <text x="0" y="18" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="700" letterSpacing="0.5" fill="currentColor">
        BAJAJ
      </text>
    </svg>
  );
}

const CLIENT_LOGOS = [
  { name: "Siemens", Logo: LogoSiemens },
  { name: "Bosch", Logo: LogoBosch },
  { name: "Tata", Logo: LogoTata },
  { name: "HCL", Logo: LogoHCL },
  { name: "Wipro", Logo: LogoWipro },
  { name: "Infosys", Logo: LogoInfosys },
  { name: "L&T", Logo: LogoLT },
  { name: "Mahindra", Logo: LogoMahindra },
  { name: "Godrej", Logo: LogoGodrej },
  { name: "Reliance", Logo: LogoReliance },
  { name: "Tech Mahindra", Logo: LogoTechMahindra },
  { name: "Bajaj", Logo: LogoBajaj },
];

export default function TrustedBy() {
  const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="relative border-y border-[rgba(0,0,0,0.04)] bg-[rgba(0,0,0,0.01)] py-12 overflow-hidden">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-xs font-medium text-[#9CA3AF] tracking-widest uppercase mb-8"
      >
        Trusted by industry leaders
      </motion.p>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#FAFAF8] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#FAFAF8] to-transparent" />

        <div className="flex overflow-hidden">
          <div className="marquee-track flex shrink-0 gap-12 md:gap-16 items-center">
            {doubled.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex items-center shrink-0 text-[#9CA3AF] hover:text-[#4B5563] transition-colors duration-300 opacity-60 hover:opacity-90"
              >
                <client.Logo />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
