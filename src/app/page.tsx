import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";

const WhyWeExist = dynamic(() => import("@/components/WhyWeExist"));
const Services = dynamic(() => import("@/components/Services"));
const ToolsIntegrations = dynamic(() => import("@/components/ToolsIntegrations"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const CaseStudies = dynamic(() => import("@/components/CaseStudies"));
const Results = dynamic(() => import("@/components/Results"));
const Founders = dynamic(() => import("@/components/Founders"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const CTASection = dynamic(() => import("@/components/CTASection"));

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WhyWeExist />
      <Services />
      <ToolsIntegrations />
      <HowItWorks />
      <CaseStudies />
      <Results />
      <Founders />
      <Pricing />
      <FAQ />
      <CTASection />
    </>
  );
}
