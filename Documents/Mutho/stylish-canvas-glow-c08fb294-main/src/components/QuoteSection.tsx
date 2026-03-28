import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const QuoteSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    quantity: "",
    instructions: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailBody = `Quote Request Details:\n\nName: ${formData.name}\nLocation: ${formData.location}\nQuantity: ${formData.quantity}\n\nInstructions:\n${formData.instructions}`;
    const whatsappMsg = `Hello, I'd like a quote.\n\nName: ${formData.name}\nLocation: ${formData.location}\nQuantity: ${formData.quantity}\nDetails: ${formData.instructions}`;
    
    window.open(`mailto:infomuthokinjupaintsandcement@gmail.com?subject=${encodeURIComponent(`Quote Request from ${formData.name}`)}&body=${encodeURIComponent(emailBody)}`, '_self');
    
    setTimeout(() => {
      window.open(`https://wa.me/254755949858?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
    }, 500);

    toast({
      title: "Quote Request Initiated!",
      description: "Your email client and WhatsApp will open to send the request.",
    });
    
    setFormData({ name: "", location: "", quantity: "", instructions: "" });
  };

  return (
    <section id="quote" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <Card className="shadow-primary shadow-glow animate-scale-in">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary text-center">
              Request a Quote
            </CardTitle>
            <p className="text-center text-muted-foreground mt-2">
              Tell us what you need and we'll get back to you with the best prices
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                placeholder="Location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
              <Input
                type="number"
                placeholder="Quantity (bags or tons)"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                required
              />
              <Textarea
                placeholder="Delivery Instructions & Product Details"
                rows={4}
                value={formData.instructions}
                onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
              />
              <Button type="submit" className="w-full gradient-primary hover:opacity-90 hover:scale-105 transition-smooth shadow-md" size="lg">
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuoteSection;
