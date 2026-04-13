import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesCarousel } from "@/components/landing/FeaturesCarousel";
import { WhyChoose } from "@/components/landing/WhyChoose";
import { FeatureHighlight } from "@/components/landing/FeatureHighlight";
import { CtaFooter } from "@/components/landing/CtaFooter";

const Index = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesCarousel />
      <WhyChoose />
      <FeatureHighlight />
      <CtaFooter />
    </div>
  );
};

export default Index;
