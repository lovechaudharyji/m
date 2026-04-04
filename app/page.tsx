import Header from "./_components/sections/Header";
import HeroSection from "./_components/sections/HeroSection";
import ProblemSection from "./_components/sections/ProblemSection";
import WhyChooseUsSection from "./_components/sections/WhyChooseUsSection";
import PricingSection from "./_components/sections/PricingSection";
import BlueprintSection from "./_components/sections/BlueprintSection";
import GallerySection from "./_components/sections/GallerySection";
import BookingSection from "./_components/sections/BookingSection";
import FaqSection from "./_components/sections/FaqSection";
import FooterSection from "./_components/sections/FooterSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <Image src="/images/1.png" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.30)]" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col">
        <Header brandName="MountAura" />
        <HeroSection />
        <ProblemSection />
         <PricingSection />
  
        <WhyChooseUsSection />
      
        <BlueprintSection />
        
         <GallerySection />
        <FaqSection />
       
        <BookingSection />
        <FooterSection brandName="MountAura" />
      </div>
    </div>
  );
}
