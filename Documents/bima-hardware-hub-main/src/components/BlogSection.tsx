import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "5 Things to Consider Before Choosing Mabati for Your Home",
    excerpt: "Choosing the right mabati can save you money and protect your home for decades. Learn what factors matter most — from gauge thickness to colour coating.",
    date: "March 28, 2026",
    category: "Roofing Tips",
  },
  {
    title: "How to Maintain Your Mabati Roof for Longer Life",
    excerpt: "Regular maintenance extends the lifespan of your roof significantly. Here are practical tips every homeowner should follow to keep their mabati in top shape.",
    date: "March 15, 2026",
    category: "Maintenance",
  },
  {
    title: "This Month's Special Offer: Discounted Colored Mabati Sheets",
    excerpt: "Take advantage of our limited-time promotion with discounts on all colored mabati sheets. Free delivery within Nairobi for qualifying orders!",
    date: "March 5, 2026",
    category: "Offers",
  },
];

const BlogSection = () => (
  <section className="py-20">
    <div className="container">
      <div className="text-center mb-12">
        <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-2">BLOG & OFFERS</p>
        <h2 className="section-heading">Roofing Tips & Special Offers</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <article key={i} className="bg-card rounded-xl border border-border shadow-sm hover:shadow-xl transition-shadow overflow-hidden group">
            <div className="h-48 bg-gradient-to-br from-primary/15 via-secondary/10 to-primary/20 flex items-center justify-center">
              <span className="btn-orange text-xs rounded-full px-4 py-1">{post.category}</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-3 group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
              <Link to="/blog" className="text-primary font-heading font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
