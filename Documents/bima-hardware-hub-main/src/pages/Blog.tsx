import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Calendar, ArrowRight, Tag } from "lucide-react";

const blogPosts = [
  {
    title: "How to Choose the Right Mabati for Your Home in Nairobi",
    excerpt: "Choosing between tile, box profile, and corrugated roofing? Here's a comprehensive guide to picking the best mabati for your budget, climate, and architectural design. We break down the pros and cons of each profile type.",
    date: "March 28, 2026",
    category: "Roofing Tips",
    readTime: "5 min read",
  },
  {
    title: "Gauge 28 vs Gauge 30: Which Mabati Thickness is Best?",
    excerpt: "Understanding the difference between G-28 and G-30 mabati. We compare thickness, durability, noise reduction, pricing, and which gauge suits residential vs commercial buildings in Kenya's varied climate.",
    date: "March 15, 2026",
    category: "Product Guide",
    readTime: "4 min read",
  },
  {
    title: "Easter Special: Up to 15% Off All Boma Mabati Products",
    excerpt: "Celebrate Easter with massive savings! Get up to 15% off all roofing sheets, ridges, and accessories. Free delivery within Nairobi for orders above KSh 50,000. Limited time offer ending April 30th.",
    date: "March 5, 2026",
    category: "Offers",
    readTime: "2 min read",
  },
  {
    title: "5 Common Roofing Mistakes and How to Avoid Them",
    excerpt: "From wrong gauge selection to poor installation, learn about the top 5 roofing mistakes Kenyan homeowners make and expert tips to ensure your roof lasts decades.",
    date: "February 20, 2026",
    category: "Roofing Tips",
    readTime: "6 min read",
  },
  {
    title: "Why Colored Mabati Adds Value to Your Property",
    excerpt: "Beyond aesthetics — colored mabati with UV-resistant coating lasts longer and can increase your property value by up to 10%. Learn how to pick the right color for your home.",
    date: "February 10, 2026",
    category: "Product Guide",
    readTime: "3 min read",
  },
  {
    title: "Boma Mabati Lipa Pole Pole Scheme — How It Works",
    excerpt: "Can't afford to pay for your roofing sheets upfront? Our Lipa Pole Pole scheme lets you pay in installments. Here's everything you need to know about joining.",
    date: "January 28, 2026",
    category: "Finance",
    readTime: "4 min read",
  },
];

const Blog = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />

    <section className="bg-primary py-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4">Blog & Roofing Tips</h1>
        <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">Expert advice, product guides, and special offers from Boma Mabati Factory</p>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <article key={i} className="bg-card rounded-xl border border-border shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/20 flex items-center justify-center relative">
                <span className="bg-secondary text-secondary-foreground text-xs font-heading font-semibold rounded-full px-4 py-1">{post.category}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-muted-foreground text-xs mb-3">
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Tag className="h-3.5 w-3.5" /> {post.readTime}</span>
                </div>
                <h2 className="font-heading font-semibold text-foreground text-lg mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <button className="text-primary font-heading font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Read Full Article <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <Footer />
    <WhatsAppButton />
  </div>
);

export default Blog;
