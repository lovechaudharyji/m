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

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 z-0 transform-gpu">
        <video className="absolute inset-0 h-full w-full object-cover" src="/images/hm.mp4" autoPlay muted loop playsInline preload="auto" />
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
        <GallerySection />
        <ShowcaseStripSection />
        <FaqSection />
        <BookingSection whatsappHref="https://wa.me/" />
        <FooterSection brandName="Weekend Escape" />
      </div>
    </div>
  );
}
