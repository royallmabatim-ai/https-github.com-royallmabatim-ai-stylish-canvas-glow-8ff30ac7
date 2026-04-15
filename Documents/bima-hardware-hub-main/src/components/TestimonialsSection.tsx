import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  { name: "James", location: "Nairobi", text: "Great quality mabati at affordable prices. Delivery was fast and reliable." },
  { name: "Mary", location: "Contractor", text: "I've used their roofing sheets for my rental houses, and they've held up perfectly." },
  { name: "Chege Gatama", location: "Nairobi", text: "Great Company. Great People." },
  { name: "Albert Kamau", location: "Kenya", text: "Reasonable prices and quick service. Thank you Boma Mabati." },
  { name: "Josiah Mwenda", location: "Nairobi", text: "Excellent customer support services. I ordered my Boma Vass on May 9th at 11am and got them same day at 5:20pm. I highly recommend this company." },
  { name: "Waithaka Pita", location: "Kenya", text: "Boma Mabati is the most reliable service provider. Your customer care, responsiveness and personalized orders have been IMPRESSIVE!!!" },
  { name: "Heeran Ndunda", location: "Nairobi", text: "Boma Mabati, you're the best. I ordered on 20-08-2021 and on 21-08-2021 my order was delivered. I recommend anybody to try Boma Mabati." },
  { name: "Halima", location: "Kenya", text: "Very reliable. Proud to be your customer." },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 400;
    const newPos = direction === "left" ? scrollPos - amount : scrollPos + amount;
    scrollRef.current.scrollTo({ left: newPos, behavior: "smooth" });
    setScrollPos(newPos);
  };

  return (
    <section className="py-20 bg-section-alt">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-2">TESTIMONIALS</p>
          <h2 className="section-heading">
            What Our Customers Say
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground rounded-full p-2.5 shadow-lg hover:bg-primary/90 -ml-4"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-[320px] md:min-w-[380px] snap-start">
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm h-full flex flex-col">
                  <Quote className="h-8 w-8 text-secondary/40 mb-4" />
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1 italic">"{t.text}"</p>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-heading font-bold text-primary text-lg">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground text-sm">{t.name}</h4>
                      <p className="text-xs text-muted-foreground">{t.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground rounded-full p-2.5 shadow-lg hover:bg-primary/90 -mr-4"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
