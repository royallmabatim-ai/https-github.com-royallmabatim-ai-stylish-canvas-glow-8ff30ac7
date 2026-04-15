import aboutFactory from "@/assets/about-factory.jpg";

const WhyBuySection = () => (
  <section id="about" className="py-20 bg-section-alt">
    <div className="container">
      <div className="text-center mb-4">
        <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-2">ABOUT US</p>
        <h2 className="section-heading">Who We Are</h2>
      </div>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
        We are a trusted mabati supplier based in Nairobi, dedicated to providing affordable and durable roofing solutions for homes, businesses, and contractors. Our mission is to make quality roofing accessible to every Kenyan household.
      </p>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={aboutFactory}
            alt="Boma Mabati Factory Nairobi"
            className="w-full h-full object-cover"
            loading="lazy"
            width={800}
            height={600}
          />
        </div>
        <div className="space-y-6">
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">🏭 Nairobi Roots</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Based on Mombasa Road, Nairobi, we've been serving Kenyans with quality roofing products. Our factory uses state-of-the-art roll-forming technology.
            </p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">🎯 Our Mission</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To manufacture and deliver high-quality, affordable roofing solutions that protect Kenyan homes and businesses, while providing exceptional customer service.
            </p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">✅ Quality Guaranteed</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              KEBS certified, KAM member, with warranties up to 20 years. "Mabati ya kila Nyumba."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyBuySection;
