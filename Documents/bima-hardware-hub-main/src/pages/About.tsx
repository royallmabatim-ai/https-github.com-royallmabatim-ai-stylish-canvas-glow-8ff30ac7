import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Shield, Users, Target, MapPin, Award, CheckCircle } from "lucide-react";
import aboutFactory from "@/assets/about-factory.jpg";
import kebsBadge from "@/assets/kebs-badge.png";

const values = [
  { icon: Shield, title: "Quality First", desc: "Every sheet undergoes rigorous quality checks before leaving our factory." },
  { icon: Users, title: "Customer Focus", desc: "We build lasting relationships through excellent service and fair pricing." },
  { icon: Target, title: "Innovation", desc: "Continuously investing in modern manufacturing technology and new profiles." },
  { icon: MapPin, title: "Nairobi Roots", desc: "Proudly headquartered on Mombasa Road, serving Kenya and East Africa." },
];

const milestones = [
  { year: "Est.", text: "Founded on Mombasa Road, Nairobi with a vision to make quality roofing affordable for every Kenyan." },
  { year: "Growth", text: "Expanded production capacity to serve thousands of customers countrywide with 6+ mabati profiles." },
  { year: "Certified", text: "Achieved KEBS certification and Kenya Association of Manufacturers membership." },
  { year: "Today", text: "5,000+ satisfied customers, free countrywide delivery, and Nairobi's most trusted mabati brand." },
];

const About = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />

    {/* Hero */}
    <section className="relative h-[350px]">
      <img src={aboutFactory} alt="Boma Mabati Factory premises on Mombasa Road Nairobi" className="w-full h-full object-cover" width={1200} height={800} />
      <div className="absolute inset-0 bg-primary/70 flex items-center">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4">About Boma Mabati Factory</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">Nairobi's trusted manufacturer of affordable, durable mabati roofing sheets. Built on quality, driven by service.</p>
        </div>
      </div>
    </section>

    {/* Story */}
    <section className="py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-2">OUR STORY</p>
            <h2 className="section-heading mb-6">From Mombasa Road to Every Kenyan Home</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Boma Mabati Factory was born from a simple but powerful vision: every Kenyan family deserves a quality roof over their heads at a fair price. Based along Mombasa Road in Nairobi, we started as a small operation and have grown into one of Kenya's most trusted mabati manufacturers.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Our factory uses state-of-the-art roll-forming technology to produce six distinct roofing profiles — Tile, Zed Tile, Box Profile, Corrugated, Vass, and Euro Z — all in multiple gauges and over 15 vibrant colors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With KEBS certification, a Kenya Association of Manufacturers membership, and warranties of up to 20 years, Boma Mabati stands for durability you can trust and affordability you'll love. <strong>"Mabati ya kila Nyumba."</strong>
            </p>
          </div>
          <div className="space-y-4">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-heading font-bold text-primary text-xs">{m.year}</span>
                </div>
                <p className="text-muted-foreground text-sm pt-2">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-16 bg-section-alt">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
            <Target className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-heading font-bold text-xl mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To manufacture and deliver high-quality, affordable roofing solutions that protect Kenyan homes and businesses, while providing exceptional customer service and contributing to the nation's building industry.
            </p>
          </div>
          <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
            <Award className="h-10 w-10 text-secondary mb-4" />
            <h3 className="font-heading font-bold text-xl mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be East Africa's leading mabati manufacturer, recognized for quality, innovation, and the trust of every homeowner — making "Mabati ya kila Nyumba" a reality across the region.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-16">
      <div className="container">
        <h2 className="section-heading text-center mb-12">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="text-center p-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="py-16 bg-section-alt">
      <div className="container text-center">
        <h2 className="section-heading mb-8">Certifications & Quality Standards</h2>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          <img src={kebsBadge} alt="KEBS Certification" loading="lazy" width={100} height={100} className="h-24 w-auto" />
          <div className="flex items-center gap-3 bg-card px-6 py-4 rounded-xl border border-border">
            <CheckCircle className="h-8 w-8 text-price-green" />
            <div className="text-left">
              <p className="font-heading font-semibold">ISO Compliant</p>
              <p className="text-xs text-muted-foreground">International quality management</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-card px-6 py-4 rounded-xl border border-border">
            <Award className="h-8 w-8 text-secondary" />
            <div className="text-left">
              <p className="font-heading font-semibold">KAM Member</p>
              <p className="text-xs text-muted-foreground">Kenya Association of Manufacturers</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
    <WhatsAppButton />
  </div>
);

export default About;
