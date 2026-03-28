import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "MUTHOKINJU HARDWARE delivered on time and the quality was top-notch. My project moved faster than expected!",
      author: "James Lopartok",
      location: "Turkana",
      rating: 5
    },
    {
      quote: "Great customer service and very competitive pricing. Will definitely order again.",
      author: "Fatma Barisa",
      location: "Mombasa",
      rating: 4
    },
    {
      quote: "The paving blocks transformed our driveway beautifully. Durable and stylish!",
      author: "Margret Anyango Oduor",
      location: "Kisumu",
      rating: 5
    },
    {
      quote: "I was impressed by the range of steel bars available. Everything was clearly labeled and easy to order.",
      author: "Mercy Jepchumba Kilel",
      location: "Eldoret",
      rating: 4
    },
    {
      quote: "Reliable supplier with consistent quality. Their cement holds up even in tough conditions.",
      author: "Brian Mutua",
      location: "Machakos",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-4 animate-fade-in">What Our Customers Say</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up">
          Don't just take our word for it — hear from builders and contractors across Kenya
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-primary hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-left">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "fill-yellow-500 text-yellow-500" : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-foreground italic mb-4">"{testimonial.quote}"</p>
                <div className="text-sm">
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
