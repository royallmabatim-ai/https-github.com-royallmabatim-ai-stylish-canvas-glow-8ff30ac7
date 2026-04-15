import { Button } from "@/components/ui/button";
import { ShoppingCart, Download, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import productTile from "@/assets/product-tile.jpg";
import productBox from "@/assets/product-box.jpg";
import productCorrugated from "@/assets/product-corrugated.jpg";
import coloredMabati from "@/assets/colored-mabati.jpg";

const products = [
  {
    name: "Corrugated Mabati",
    image: productCorrugated,
    desc: "Classic design, affordable, available in multiple lengths.",
    gauge: "0.28mm / 0.30mm",
    lengths: "2m - 4m",
    colors: "Silver, Red, Green, Blue",
    warranty: "15–20 Years",
  },
  {
    name: "Box Profile Mabati",
    image: productBox,
    desc: "Modern look, strong and durable, ideal for residential and commercial projects.",
    gauge: "0.28mm / 0.30mm",
    lengths: "2m - 6m",
    colors: "Red, Green, Blue, Maroon, Charcoal",
    warranty: "15–20 Years",
  },
  {
    name: "Colored Mabati",
    image: coloredMabati,
    desc: "Stylish roofing with protective coating, available in red, blue, green, and grey.",
    gauge: "0.28mm / 0.30mm",
    lengths: "2m - 4m",
    colors: "Red, Blue, Green, Grey, Maroon",
    warranty: "20 Years",
  },
];

const comparisonData = [
  { profile: "Corrugated", thickness: "G-28 (0.28mm)", coverage: "660mm", bestFor: "Budget builds, fencing, sheds", warranty: "15 Years" },
  { profile: "Corrugated", thickness: "G-30 (0.30mm)", coverage: "660mm", bestFor: "Temporary structures, stores", warranty: "10 Years" },
  { profile: "Box Profile", thickness: "G-28 (0.28mm)", coverage: "680mm", bestFor: "Commercial & residential", warranty: "20 Years" },
  { profile: "Box Profile", thickness: "G-30 (0.30mm)", coverage: "680mm", bestFor: "Residential projects", warranty: "15 Years" },
  { profile: "Colored / Tile", thickness: "G-28 (0.28mm)", coverage: "780mm", bestFor: "Premium residential homes", warranty: "20 Years" },
  { profile: "Colored / Tile", thickness: "G-30 (0.30mm)", coverage: "780mm", bestFor: "Residential homes", warranty: "15 Years" },
];

const ProductsSection = () => {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section id="products" className="py-20">
      <div className="container">
        <div className="text-center mb-4">
          <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-2">PRODUCTS</p>
          <h2 className="section-heading">Our Mabati Products</h2>
        </div>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
          Choose from a wide range of mabati sheets designed to suit every project. Whether you need corrugated, box profile, or colored mabati, we've got you covered.
        </p>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={i} className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all group">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={`${p.name} roofing sheet Nairobi Kenya`}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">{p.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
                <div className="space-y-1 text-xs text-muted-foreground mb-4 bg-muted/50 rounded-lg p-3">
                  <p><span className="font-semibold text-foreground">Thickness:</span> {p.gauge}</p>
                  <p><span className="font-semibold text-foreground">Lengths:</span> {p.lengths}</p>
                  <p><span className="font-semibold text-foreground">Colors:</span> {p.colors}</p>
                  <p><span className="font-semibold text-foreground">Warranty:</span> {p.warranty}</p>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading text-sm gap-2"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Request Quote
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-14">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="mx-auto flex items-center gap-2 btn-navy rounded-full px-8 py-3 text-sm"
          >
            {showComparison ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            {showComparison ? "Hide" : "View"} Mabati Comparison Table
          </button>

          {showComparison && (
            <div className="mt-8 overflow-x-auto">
              <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-5 py-4 text-left font-heading text-sm">Profile</th>
                    <th className="px-5 py-4 text-left font-heading text-sm">Thickness</th>
                    <th className="px-5 py-4 text-left font-heading text-sm">Coverage Width</th>
                    <th className="px-5 py-4 text-left font-heading text-sm">Best For</th>
                    <th className="px-5 py-4 text-left font-heading text-sm">Warranty</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={`border-b border-border ${i % 2 === 0 ? "bg-background" : "bg-muted/30"}`}>
                      <td className="px-5 py-3 font-semibold text-sm">{row.profile}</td>
                      <td className="px-5 py-3 text-sm">{row.thickness}</td>
                      <td className="px-5 py-3 text-sm">{row.coverage}</td>
                      <td className="px-5 py-3 text-sm text-muted-foreground">{row.bestFor}</td>
                      <td className="px-5 py-3 text-sm font-semibold text-price-green">{row.warranty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;
