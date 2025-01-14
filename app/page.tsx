import CallToAction from "@/components/CallToAction";
import FeaturedProjects from "@/components/FeaturedProjects";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div w-full max-w-6xl>
      <HeroSection />
      <ServicesSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <CallToAction />
    </div>
  );
}
