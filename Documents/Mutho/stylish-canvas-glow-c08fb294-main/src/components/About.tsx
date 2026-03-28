import { Target, Globe2, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-accent/10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-in">About MUTHOKINJU HARDWARE</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto text-foreground/80 animate-fade-in-up">
          At <strong>MUTHOKINJU HARDWARE</strong>, we don't just supply materials — we build the backbone of Kenya's future. 
          From high-performance cement to precision-engineered steel bars, paints, waterproofing, and paving blocks, our products are trusted 
          by contractors, architects, and homeowners alike.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left mb-12">
          <Card className="hover:shadow-primary hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-scale-in">
            <CardHeader>
              <Target className="h-10 w-10 text-primary mb-2" />
              <CardTitle className="text-primary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To deliver top-quality construction materials at competitive prices, empowering builders 
                to create strong, lasting structures across Kenya.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-primary hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <Globe2 className="h-10 w-10 text-primary mb-2" />
              <CardTitle className="text-primary">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be Kenya's most trusted supplier of cement, paints, and construction products — known for reliability, 
                innovation, and customer-first service.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-primary hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <Sparkles className="h-10 w-10 text-primary mb-2" />
              <CardTitle className="text-primary">Why Choose Us</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                <li>ISO-certified products</li>
                <li>Fast delivery across Kenya</li>
                <li>Competitive pricing</li>
                <li>Expert customer support</li>
                <li>Trusted by 500+ builders</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Button asChild size="lg" className="gradient-primary hover:opacity-90 hover:scale-105 transition-smooth shadow-md animate-fade-in">
          <a href="#contact">Contact Us Today</a>
        </Button>
      </div>
    </section>
  );
};

export default About;
