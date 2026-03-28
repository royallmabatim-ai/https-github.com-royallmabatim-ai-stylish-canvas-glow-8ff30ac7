import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center px-4 py-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 gradient-hero" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center text-primary-foreground">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-fade-in">
          Your Trusted Source for Quality Cement & Supplies
        </h2>
        <p className="text-lg sm:text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-up">
          We're your one-stop shop for premium cement products, steel bars, paving blocks, and construction accessories across Kenya.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg font-semibold hover:scale-105 transition-transform">
            <a href="#products">Browse Products</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover:scale-105 transition-transform">
            <a href="#quote">Get a Free Quote</a>
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-sm animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <CheckCircle className="h-5 w-5" />
          <p className="font-medium">Trusted by 500+ builders across Kenya</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
