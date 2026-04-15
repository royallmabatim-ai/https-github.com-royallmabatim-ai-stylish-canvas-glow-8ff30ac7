import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyBuySection from "@/components/WhyBuySection";
import ProductsSection from "@/components/ProductsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingCallButton from "@/components/FloatingCallButton";

const Index = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    <HeroSection />
    <WhyBuySection />
    <ProductsSection />
    <CertificationsSection />
    <ProjectsSection />
    <TestimonialsSection />
    <BlogSection />
    <Footer />
    <WhatsAppButton />
    <FloatingCallButton />
  </div>
);

export default Index;
