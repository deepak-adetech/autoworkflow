"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/* ─── Cursor Glow ─── */
/* Soft teal glow that follows the cursor on desktop only.
   Uses spring-damped motion values for organic following. */
export default function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 80, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 80, damping: 20, mass: 0.5 });

  useEffect(() => {
    // Desktop only — check for hover capability
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[1] hidden md:block"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        width: 500,
        height: 500,
        background: "radial-gradient(circle, rgba(13,107,78,0.08) 0%, transparent 60%)",
        mixBlendMode: "multiply",
      }}
    />
  );
}
