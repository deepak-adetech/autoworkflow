"use client";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { icon: 28, text: "text-lg" },
  md: { icon: 32, text: "text-xl" },
  lg: { icon: 40, text: "text-2xl" },
};

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const s = sizes[size];

  return (
    <a href="#" className={`flex items-center gap-2.5 group ${className}`}>
      {/* Workflow-node icon */}
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5E6AD2" />
            <stop offset="100%" stopColor="#7C5CFC" />
          </linearGradient>
        </defs>
        {/* Rounded square */}
        <rect
          x="1.5"
          y="1.5"
          width="29"
          height="29"
          rx="8"
          stroke="url(#logo-grad)"
          strokeWidth="1.5"
          fill="rgba(94,106,210,0.08)"
        />
        {/* Connection lines */}
        <line x1="10" y1="11" x2="22" y2="11" stroke="url(#logo-grad)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="11" x2="16" y2="22" stroke="url(#logo-grad)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="22" y1="11" x2="16" y2="22" stroke="url(#logo-grad)" strokeWidth="1.5" strokeLinecap="round" />
        {/* Nodes */}
        <circle cx="10" cy="11" r="2.8" fill="url(#logo-grad)" />
        <circle cx="22" cy="11" r="2.8" fill="url(#logo-grad)" />
        <circle cx="16" cy="22" r="2.8" fill="url(#logo-grad)" />
      </svg>

      {/* Brand text */}
      <span className={`${s.text} font-bold tracking-tight`}>
        <span className="text-[#EDEDEF]">AutoWorkflows</span>
        <span className="text-[#5E6AD2] ai-breathe">.AI</span>
      </span>
    </a>
  );
}
