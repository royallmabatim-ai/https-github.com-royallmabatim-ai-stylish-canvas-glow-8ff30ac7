import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import pavingColored from "@/assets/paving-colored.jpeg";
import pavingGray from "@/assets/paving-gray.jpeg";
import block1 from "@/assets/block-1.jpeg";
import block2 from "@/assets/block-2.jpeg";
import steelBars from "@/assets/steel-bars.jpg";
import bindingWire from "@/assets/binding-wire.jpg";
import hoopIron from "@/assets/hoop-iron.jpg";

const OtherProducts = () => {
  const handleQuote = (product: string) => {
    const message = encodeURIComponent(`Hello, I am interested in ${product}.`);
    window.open(`https://wa.me/254755949858?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Paving Blocks */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center animate-fade-in">Paving Blocks & Building Blocks</h2>
          <p className="text-center text-muted-foreground mb-12 animate-fade-in-up">Durable and stylish paving solutions for driveways, walkways, parking areas & construction</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-primary hover:shadow-glow transition-all duration-300 animate-scale-in">
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden">
                  <img src={pavingColored} alt="Colored Paving Blocks" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Colored Interlocking Pavers</h3>
                  <p className="text-sm text-muted-foreground mb-3">Beautiful colored paving blocks in red, gray, white & mixed patterns. Multiple interlocking designs available.</p>
                  <p className="text-2xl font-bold text-primary mb-4">KSh 30 / piece</p>
                  <Button 
                    onClick={() => handleQuote("Colored Interlocking Pavers")}
                    className="gradient-primary hover:opacity-90 hover:scale-105 transition-smooth w-fit shadow-md"
                  >
                    Add to Quote
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-primary hover:shadow-glow transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden">
                  <img src={pavingGray} alt="Gray Paving Blocks" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Standard Gray Pavers (60mm)</h3>
                  <p className="text-sm text-muted-foreground mb-3">Heavy-duty concrete interlocking pavers for commercial & industrial use. Bundled and ready for delivery.</p>
                  <p className="text-2xl font-bold text-primary mb-4">KSh 20 / piece</p>
                  <Button 
                    onClick={() => handleQuote("Standard Gray Pavers (60mm)")}
                    className="gradient-primary hover:opacity-90 hover:scale-105 transition-smooth w-fit shadow-md"
                  >
                    Add to Quote
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-primary hover:shadow-glow transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden">
                  <img src={block1} alt="Building Blocks" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Machine-Cut Building Blocks</h3>
                  <p className="text-sm text-muted-foreground mb-3">Premium quality machine-cut concrete blocks for walls, fencing & general construction. Uniform size for clean finishes.</p>
                  <p className="text-2xl font-bold text-primary mb-4">KSh 20 / piece</p>
                  <Button 
                    onClick={() => handleQuote("Machine-Cut Building Blocks")}
                    className="gradient-primary hover:opacity-90 hover:scale-105 transition-smooth w-fit shadow-md"
                  >
                    Add to Quote
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-primary hover:shadow-glow transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden">
                  <img src={block2} alt="Bulk Building Blocks" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Bulk Building Blocks (Wholesale)</h3>
                  <p className="text-sm text-muted-foreground mb-3">Large quantity building blocks available for major construction projects. Competitive bulk pricing with delivery.</p>
                  <p className="text-2xl font-bold text-primary mb-4">KSh 20 / piece</p>
                  <Button 
                    onClick={() => handleQuote("Bulk Building Blocks (Wholesale)")}
                    className="gradient-primary hover:opacity-90 hover:scale-105 transition-smooth w-fit shadow-md"
                  >
                    Add to Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Steel Bars */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center animate-fade-in">Deformed Steel Bars</h2>
          <p className="text-center text-muted-foreground mb-12 animate-fade-in-up">High-grade reinforcement for structural integrity</p>
          
          <Card className="overflow-hidden hover:shadow-primary hover:shadow-glow transition-all duration-300 animate-scale-in">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-square md:aspect-auto overflow-hidden">
                  <img src={steelBars} alt="Steel Bars" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">Reinforcement Steel Bars</h3>
                  <div className="grid grid-cols-2 gap-2 mb-6 text-sm">
                    <div className="flex justify-between"><span className="font-medium">D8:</span><span>KSh 450</span></div>
                    <div className="flex justify-between"><span className="font-medium">R6:</span><span>KSh 210</span></div>
                    <div className="flex justify-between"><span className="font-medium">D10:</span><span>KSh 750</span></div>
                    <div className="flex justify-between"><span className="font-medium">R8:</span><span>KSh 450</span></div>
                    <div className="flex justify-between"><span className="font-medium">D12:</span><span>KSh 1,020</span></div>
                    <div className="flex justify-between"><span className="font-medium">R10:</span><span>KSh 850</span></div>
                    <div className="flex justify-between"><span className="font-medium">D16:</span><span>KSh 2,050</span></div>
                    <div className="flex justify-between"><span className="font-medium">R12:</span><span>KSh 1,350</span></div>
                    <div className="flex justify-between"><span className="font-medium">D25:</span><span>KSh 5,750</span></div>
                    <div className="flex justify-between"><span className="font-medium">R16:</span><span>KSh 2,300</span></div>
                  </div>
                  <Button 
                    onClick={() => handleQuote("Deformed Steel Bars")}
                    className="gradient-primary hover:opacity-90 hover:scale-105 transition-smooth w-fit shadow-md"
                  >
                    Add to Quote
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Construction Accessories */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center animate-fade-in">Construction Accessories</h2>
          <p className="text-center text-muted-foreground mb-12 animate-fade-in-up">Essential supplies for your construction projects</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-primary hover:shadow-glow transition-all duration-300 animate-scale-in">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row gap-0">
                  <div className="sm:w-1/3 aspect-square sm:aspect-auto overflow-hidden">
                    <img src={bindingWire} alt="Binding Wire" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-primary mb-2">Binding Wire (16 Gauge)</h3>
                    <p className="text-sm text-muted-foreground mb-3">25kg roll for reinforcement and construction use.</p>
                    <p className="text-2xl font-bold text-primary mb-4">KSh 3,250 / roll</p>
                    <Button 
                      onClick={() => handleQuote("Binding Wire (16 Gauge)")}
                      className="gradient-primary hover:opacity-90 hover:scale-105 transition-smooth w-fit shadow-md"
                      size="sm"
                    >
                      Add to Quote
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-primary hover:shadow-glow transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row gap-0">
                  <div className="sm:w-1/3 aspect-square sm:aspect-auto overflow-hidden">
                    <img src={hoopIron} alt="Hoop Iron" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-primary mb-2">Hoop Iron (16 Gauge)</h3>
                    <p className="text-sm text-muted-foreground mb-3">20kg roll for wall reinforcement and structural support.</p>
                    <p className="text-2xl font-bold text-primary mb-4">KSh 3,450 / roll</p>
                    <Button 
                      onClick={() => handleQuote("Hoop Iron (16 Gauge)")}
                      className="gradient-primary hover:opacity-90 hover:scale-105 transition-smooth w-fit shadow-md"
                      size="sm"
                    >
                      Add to Quote
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default OtherProducts;
