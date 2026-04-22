"use client";

import { type ReactNode } from "react";

interface ShineButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  onClick?: () => void;
}

export default function ShineButton({
  children,
  href,
  className = "",
  variant = "primary",
  size = "md",
  onClick,
}: ShineButtonProps) {
  const base =
    "shine-button inline-flex items-center justify-center font-medium rounded-full transition-all duration-250 ease-out cursor-pointer";

  const variants = {
    primary:
      "bg-[#0D6B4E] text-white hover:bg-[#065F46] shadow-[0_2px_12px_-3px_rgba(13,107,78,0.3)] hover:shadow-[0_4px_20px_-3px_rgba(13,107,78,0.4)]",
    secondary:
      "bg-transparent text-[#111827] border border-[rgba(0,0,0,0.12)] hover:border-[rgba(0,0,0,0.24)] hover:bg-[rgba(0,0,0,0.03)]",
  };

  const sizeStyles = {
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const cls = `${base} ${variants[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
