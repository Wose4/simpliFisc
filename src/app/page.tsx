import Image from "next/image";
import { HeroSection } from "@/components/homepage/HeroSection";
import { CompareDemo } from "@/components/homepage/ComparisonSection";
import { FAQSection } from "@/components/homepage/FaqSection";
import { ROISummary } from "@/components/homepage/RoiSection";
import { TestimonialsSection } from "@/components/homepage/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <HeroSection />
        <CompareDemo />
        <FAQSection />
        <ROISummary />
        <TestimonialsSection />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
