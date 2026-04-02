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
    <div className="flex flex-1 flex-col bg-background text-foreground">
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
  );
}
