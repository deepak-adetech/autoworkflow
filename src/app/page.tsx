import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";

const Services = dynamic(() => import("@/components/Services"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const Results = dynamic(() => import("@/components/Results"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const CTASection = dynamic(() => import("@/components/CTASection"));

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <HowItWorks />
      <Results />
      <FAQ />
      <CTASection />
    </>
  );
}
