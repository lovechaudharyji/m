import Header from "./_components/sections/Header";
import HeroSection from "./_components/sections/HeroSection";
import ProblemSection from "./_components/sections/ProblemSection";
import ExperienceSection from "./_components/sections/ExperienceSection";
import WhyChooseUsSection from "./_components/sections/WhyChooseUsSection";
import PricingSection from "./_components/sections/PricingSection";
import BlueprintSection from "./_components/sections/BlueprintSection";
import GallerySection from "./_components/sections/GallerySection";
import BookingSection from "./_components/sections/BookingSection";
import FaqSection from "./_components/sections/FaqSection";
import FooterSection from "./_components/sections/FooterSection";
import ShowcaseStripSection from "./_components/sections/ShowcaseStripSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 z-0 transform-gpu">
        <Image src="/images/1.png" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.30)]" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col">
        <Header brandName="Weekend Escape" />
        <HeroSection />
        <ProblemSection />
        <ExperienceSection />
        <WhyChooseUsSection />
        <PricingSection />
        <BlueprintSection />
        <ShowcaseStripSection />
         <GallerySection />
        <FaqSection />
       
        <BookingSection whatsappHref="https://wa.me/" />
        <FooterSection brandName="Weekend Escape" />
      </div>
    </div>
  );
}
