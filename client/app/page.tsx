import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import VideoSection from "@/components/VideoSection";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import MapSection from "@/components/MapSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <VideoSection />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <CTABanner />
      <MapSection />
      <Contact />
      <Footer />
    </main>
  );
}
