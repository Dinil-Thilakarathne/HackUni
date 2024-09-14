import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroductionSection from "@/components/IntroSection";
import PrizesSection from "@/components/PrizeSection";
import AnimatedBox from "@/components/ui/AnimatedBox";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <IntroductionSection />
      <PrizesSection />
      <div className="h-screen flex items-center justify-center">
        <AnimatedBox>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            necessitatibus!
          </span>
        </AnimatedBox>
      </div>
    </div>
  );
}
