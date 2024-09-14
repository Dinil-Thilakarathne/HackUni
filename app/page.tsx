import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroductionSection from "@/components/IntroSection";
import PrizesSection from "@/components/PrizeSection";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <IntroductionSection />
      <PrizesSection />
    </div>
  );
}
