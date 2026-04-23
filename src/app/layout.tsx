import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NoiseOverlay from "@/components/NoiseOverlay";
import CursorGlow from "@/components/CursorGlow";

export const metadata: Metadata = {
  title: "AutoWorkflows.AI — We Automate the Work Your Team Dreads",
  description:
    "AI-powered workflow automation for modern businesses. Custom AI agents, workflow automation, and intelligent document processing. First workflow automated free.",
  keywords: [
    "AI automation",
    "workflow automation",
    "AI agents",
    "business automation",
    "document processing",
    "conversational AI",
  ],
  openGraph: {
    title: "AutoWorkflows.AI — We Automate the Work Your Team Dreads",
    description:
      "AI-powered workflow automation for modern businesses. First workflow automated free — no strings attached.",
    type: "website",
    url: "https://autoworkflows.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoWorkflows.AI",
    description:
      "AI-powered workflow automation. First workflow automated free.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-dvh flex flex-col bg-[#FAFAF8] text-[#111827]">
        <NoiseOverlay />
        <CursorGlow />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
