import { Shield, Award, CheckCircle, Truck, Star, Clock } from "lucide-react";
import kebsBadge from "@/assets/kebs-badge.png";

const certifications = [
  { icon: Shield, title: "KEBS Certified", desc: "All products meet Kenya Bureau of Standards quality requirements" },
  { icon: Award, title: "KAM Member", desc: "Proud member of the Kenya Association of Manufacturers" },
  { icon: CheckCircle, title: "20-Year Warranty", desc: "Up to 20 years warranty on our premium gauge roofing sheets" },
  { icon: Truck, title: "Free Delivery", desc: "Free countrywide delivery on qualifying orders. T&C Apply" },
  { icon: Star, title: "5000+ Happy Clients", desc: "Trusted by thousands of homeowners and contractors across Kenya" },
  { icon: Clock, title: "Same-Day Dispatch", desc: "Orders placed before 12pm shipped same day from Nairobi warehouse" },
];

const CertificationsSection = () => (
  <section className="py-16 bg-primary">
    <div className="container">
      <div className="text-center mb-12">
        <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-2">TRUST & QUALITY</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
          Why Thousands Trust Boma Mabati
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((c, i) => (
          <div key={i} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center border border-primary-foreground/20">
            <div className="h-14 w-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
              <c.icon className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="font-heading font-semibold text-primary-foreground text-lg mb-2">{c.title}</h3>
            <p className="text-primary-foreground/70 text-sm">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <img src={kebsBadge} alt="KEBS Kenya Bureau of Standards Certification Badge" loading="lazy" width={120} height={120} className="h-28 w-auto opacity-90" />
      </div>
    </div>
  </section>
);

export default CertificationsSection;
