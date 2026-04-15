import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer id="contact" className="bg-footer text-footer-foreground">
    <div className="container py-14">
      {/* Get in Touch Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-2">Get in Touch</h2>
        <p className="text-footer-foreground/80 max-w-xl mx-auto">
          We're here to help you choose the right mabati for your project.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="Boma Mabati Factory" className="h-12 w-auto brightness-200" />
          </div>
          <p className="text-sm leading-relaxed italic">"Mabati ya kila Nyumba"</p>
          <p className="text-sm mt-3 leading-relaxed">
            Kenya's trusted manufacturer of affordable, durable mabati roofing sheets. KEBS certified with free countrywide delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
            <li><a href="/#products" className="hover:text-secondary transition-colors">Our Products</a></li>
            <li><a href="/#projects" className="hover:text-secondary transition-colors">Our Work</a></li>
            <li><Link to="/blog" className="hover:text-secondary transition-colors">Blog</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-4 text-lg">Our Products</h4>
          <ul className="space-y-2 text-sm">
            <li>Corrugated Mabati</li>
            <li>Box Profile Mabati</li>
            <li>Colored Mabati</li>
            <li>Boma Tile</li>
            <li>Boma Vass</li>
            <li>Boma Euro Z</li>
            <li>Accessories & Ridges</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-4 text-lg">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
              <span>0734 753 416</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
              <a href="mailto:bomamabati.sales@gmail.com" className="hover:text-secondary transition-colors">bomamabati.sales@gmail.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
              <span>Mombasa Road, Nairobi, Kenya</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
              <span>Mon-Fri: 8am-5pm | Sat: 8am-1pm</span>
            </li>
          </ul>

          {/* Social */}
          <div className="flex gap-3 mt-5">
            {["YouTube", "Instagram", "Facebook", "TikTok"].map((s) => (
              <a key={s} href="#" className="h-9 w-9 rounded-full bg-primary/30 flex items-center justify-center hover:bg-secondary transition-colors" aria-label={s}>
                <span className="text-primary-foreground text-xs font-bold">{s.charAt(0)}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="mt-10 rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Boma Mabati Factory Location on Mombasa Road Nairobi"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8176!2d36.8502!3d-1.3192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMombasa%20Road%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1680000000000!5m2!1sen!2ske"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container py-4 flex flex-col md:flex-row items-center justify-between text-xs">
        <span>© {new Date().getFullYear()} Boma Mabati Factory. All rights reserved.</span>
        <span className="mt-1 md:mt-0">Mabati ya kila Nyumba | Mombasa Road, Nairobi, Kenya</span>
      </div>
    </div>
  </footer>
);

export default Footer;
