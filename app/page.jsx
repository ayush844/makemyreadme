import Articles from "@/components/Articles";
import CallToAction from "@/components/CallToAction";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Testimonials />
      <CallToAction />
      <Articles
        heading={"Latest Articles"}
        description={
          "Explore insights, tips, and best practices for crafting professional README files that make an impact."
        }
      />
    </>
  );
}
