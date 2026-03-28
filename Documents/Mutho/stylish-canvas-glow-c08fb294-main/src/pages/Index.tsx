import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CementProducts from "@/components/CementProducts";
import OtherProducts from "@/components/OtherProducts";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import QuoteSection from "@/components/QuoteSection";
import DeliveryPayment from "@/components/DeliveryPayment";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CementProducts />
        <OtherProducts />
        <About />
        <Testimonials />
        <Contact />
        <QuoteSection />
        <DeliveryPayment />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
