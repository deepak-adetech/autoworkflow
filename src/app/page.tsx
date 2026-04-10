import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";

const Services = dynamic(() => import("@/components/Services"));
const ToolsIntegrations = dynamic(() => import("@/components/ToolsIntegrations"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const Results = dynamic(() => import("@/components/Results"));
const Founders = dynamic(() => import("@/components/Founders"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const CTASection = dynamic(() => import("@/components/CTASection"));

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <ToolsIntegrations />
      <HowItWorks />
      <Pricing />
      <Results />
      <Founders />
      <FAQ />
      <CTASection />
    </>
  );
}
