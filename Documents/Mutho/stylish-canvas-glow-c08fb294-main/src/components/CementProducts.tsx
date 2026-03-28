import ProductCard from "./ProductCard";
import cement325 from "@/assets/cement-325r.jpg";
import cement425 from "@/assets/cement-425n.jpg";
import bulkCement from "@/assets/bulk-cement.jpg";
import gypsum from "@/assets/gypsum.jpg";
import dumuCement from "@/assets/dumu-cement.jpeg";
import nguvuCement from "@/assets/nguvu-cement.jpeg";
import bamburiCement from "@/assets/bamburi-cement.jpeg";
import dumu42Cement from "@/assets/dumu-42-cement.jpeg";
import crownPaints from "@/assets/crown-paints.jpeg";
import sprayPaints from "@/assets/spray-paints.jpeg";
import crownFiller from "@/assets/crown-skimming-filler.jpeg";
import brushRoller from "@/assets/brush-roller.jpeg";
import hyseal from "@/assets/hyseal.jpeg";
import sikalite from "@/assets/sikalite.jpeg";
import blackPolythene from "@/assets/black-polythene.jpeg";
import pattex from "@/assets/pattex.jpeg";

const CementProducts = () => {
  const cementProducts = [
    {
      image: cement325,
      title: "Simba 32.5R General Purpose Cement",
      description: "Ideal for residential and light commercial construction.",
      price: "KSh 550 / 50kg bag",
      whatsappMessage: "Simba 32.5R General Purpose Cement"
    },
    {
      image: cement425,
      title: "Simba 42.5N High Strength Cement",
      description: "Perfect for structural work and heavy-duty applications.",
      price: "KSh 650 / 50kg bag",
      whatsappMessage: "Simba 42.5N High Strength Cement"
    },
    {
      image: dumuCement,
      title: "Dumu 32.5 General Purpose Cement",
      description: "RAI Cement quality assured. Reliable for all general building works.",
      price: "KSh 550 / 50kg bag",
      whatsappMessage: "Dumu 32.5 General Purpose Cement"
    },
    {
      image: dumu42Cement,
      title: "Dumu-Ultra 42.5N High Strength Cement",
      description: "RAI Cement high strength for demanding structural applications.",
      price: "KSh 620 / 50kg bag",
      whatsappMessage: "Dumu-Ultra 42.5N High Strength Cement"
    },
    {
      image: nguvuCement,
      title: "Nguvu Cement (Bamburi)",
      description: "Lafarge Bamburi cement for general building and structural use.",
      price: "KSh 600 / 50kg bag",
      whatsappMessage: "Nguvu Cement (Bamburi)"
    },
    {
      image: bamburiCement,
      title: "Bamburi Cement Range",
      description: "Tembo, Nguvu & Powermax — premium Bamburi cement for every project need.",
      price: "KSh 600 / 50kg bag",
      whatsappMessage: "Bamburi Cement Range"
    },
    {
      image: bulkCement,
      title: "Bulk Cement (1 Ton)",
      description: "Delivered directly to your site. Ideal for large projects.",
      price: "KSh 12,000 / ton",
      whatsappMessage: "Bulk Cement (1 Ton)"
    },
    {
      image: gypsum,
      title: "Gypsum Plaster (50kg)",
      description: "Premium gypsum plaster for smooth wall and ceiling finishing.",
      price: "KSh 1,000 / 50kg bag",
      whatsappMessage: "Gypsum Plaster (50kg)"
    }
  ];

  const paintProducts = [
    {
      image: crownPaints,
      title: "Crown Paints (4L)",
      description: "Full range of Crown paints — Covermatt, Silk Vinyl Emulsion, Ultraguard Protect, Permaplast & more. Premium grade, no harmful smell.",
      price: "KSh 4,000 / 4L tin",
      whatsappMessage: "Crown Paints (4L)"
    },
    {
      image: sprayPaints,
      title: "Asmaco Spray Paints",
      description: "All-purpose interior & exterior spray paints. Available in multiple colors including metallic gold, silver & high-temp variants.",
      price: "KSh 300 / can",
      whatsappMessage: "Asmaco Spray Paints"
    },
    {
      image: crownFiller,
      title: "Crown Skim Coat Filler (25kg)",
      description: "White cement-based wall filler for interior & exterior. Smooth finish for painting preparation.",
      price: "KSh 999 / 25kg bag",
      whatsappMessage: "Crown Skim Coat Filler (25kg)"
    },
    {
      image: brushRoller,
      title: "Paint Brush Roller Set (11pcs)",
      description: "Complete 100mm roller set with polyester foam & acrylic refills. For smooth & medium-coarse surfaces.",
      price: "KSh 2,550 / set",
      whatsappMessage: "Paint Brush Roller Set (11pcs)"
    }
  ];

  const waterproofProducts = [
    {
      image: hyseal,
      title: "Hyseal Waterproof Cement (1kg)",
      description: "Kenbro Hyseal for water-resistant concrete & plaster work. Just mix with mortar for instant waterproofing.",
      price: "KSh 500 / 1kg pack",
      whatsappMessage: "Hyseal Waterproof Cement (1kg)"
    },
    {
      image: sikalite,
      title: "Sikalite Waterproof Admixture (1kg)",
      description: "Powdered waterproofing admixture for cement/sand mortars. For walls, facades, floor screeds & water tanks.",
      price: "KSh 1,200 / 1kg pack",
      whatsappMessage: "Sikalite Waterproof Admixture (1kg)"
    },
    {
      image: blackPolythene,
      title: "Black Polythene Sheet",
      description: "Heavy-duty black polythene membrane for damp-proofing, foundation wrapping & ground moisture barriers.",
      price: "KSh 2,500 / roll",
      whatsappMessage: "Black Polythene Sheet"
    },
    {
      image: pattex,
      title: "Pattex PL150 Construction Adhesive",
      description: "Professional solvent-based adhesive for interior & exterior. Extra-strong, ultra-resistant with instant tack. German technology.",
      price: "KSh 2,000 / cartridge",
      whatsappMessage: "Pattex PL150 Construction Adhesive"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* CEMENT */}
        <h2 className="text-4xl font-bold text-primary mb-4 text-center animate-fade-in">Cement Products</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up">
          Wide range of premium cement brands at the most competitive prices in Kenya
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cementProducts.map((product, index) => (
            <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* PAINTS */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center animate-fade-in">PAINTS & ACCESSORIES</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up">
            Premium Crown paints, spray paints, fillers & painting tools for professional results.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paintProducts.map((product, index) => (
              <div key={`paint-${index}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        {/* WATERPROOFING */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center animate-fade-in">WATERPROOFING & SEALANTS</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up">
            Protect your structures from water damage with our professional-grade waterproofing solutions.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {waterproofProducts.map((product, index) => (
              <div key={`waterproof-${index}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CementProducts;
