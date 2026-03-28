import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello, I would like to inquire about your products.");
    window.open(`https://wa.me/254755949858?text=${message}`, '_blank');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    window.open(`mailto:infomuthokinjupaintsandcement@gmail.com?subject=${encodeURIComponent(`Message from ${formData.name}`)}&body=${encodeURIComponent(emailBody)}`, '_self');
    
    const whatsappMsg = `Hello, my name is ${formData.name}. ${formData.message}`;
    setTimeout(() => {
      window.open(`https://wa.me/254755949858?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
    }, 500);

    toast({
      title: "Message Initiated!",
      description: "Your email client and WhatsApp will open to send the message.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-accent/10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">Get in Touch</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We're here to help you build better. Reach out for quotes, questions, or custom orders.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-primary transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-primary">Our Office</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">MUTHOKINJU HARDWARE Ltd</p>
                  <p className="text-muted-foreground">Athiriver, Msa Road</p>
                  <p className="text-muted-foreground">Machakos, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+254755949858" className="text-primary hover:underline">
                   0755 949 858
                 </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:infomuthokinjupaintsandcement@gmail.com" className="text-primary hover:underline text-sm">
                   infomuthokinjupaintsandcement@gmail.com
                 </a>
              </div>

              <Button 
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 mt-4"
              >
                Message Us on WhatsApp
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-primary transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-primary">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <Textarea
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
                <Button type="submit" className="w-full gradient-primary hover:opacity-90 transition-smooth">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=Athi+River,+Kenya&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
