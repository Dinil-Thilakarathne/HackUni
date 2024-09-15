import FAQSection from "@/components/FAQSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroductionSection from "@/components/IntroSection";
import PrizesSection from "@/components/PrizeSection";
import HorizontalTimelineSection from "@/components/TimelineSection";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <IntroductionSection />
      <HorizontalTimelineSection />
      <PrizesSection />
      <FAQSection />
    </div>
  );
}
