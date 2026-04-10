"use client";

/* Lightweight noise grain using a CSS background-image data URI
   instead of a live SVG feTurbulence filter (which triggers
   continuous GPU compositing on every frame). */
export default function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay"
      aria-hidden="true"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }}
    />
  );
}
