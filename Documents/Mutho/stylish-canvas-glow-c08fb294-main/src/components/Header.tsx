import { Phone, Mail, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a href="tel:+254755949858" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
              <Phone className="h-4 w-4" />
              0755 949 858
            </a>
            <a href="mailto:infomuthokinjupaintsandcement@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
              <Mail className="h-4 w-4" />
              infomuthokinjupaintsandcement@gmail.com
            </a>
          </div>
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
            <Facebook className="h-4 w-4" />
            <span>Follow us</span>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="gradient-primary text-primary-foreground py-3 px-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Muthokinju Paints & Cement Logo" className="h-14 w-auto rounded-md bg-white p-1" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide">MUTHOKINJU HARDWARE</h1>
              <p className="text-sm italic text-primary-foreground/80">Paints & Cement — Built to Last</p>
            </div>
          </div>

          <nav className="flex items-center gap-2 sm:gap-4 text-sm font-medium flex-wrap justify-center">
            <a href="#products" className="hover:opacity-80 transition-smooth px-2 py-1">Products</a>
            <a href="#services" className="hover:opacity-80 transition-smooth px-2 py-1">Services</a>
            <a href="#about" className="hover:opacity-80 transition-smooth px-2 py-1">About</a>
            <a href="#contact" className="hover:opacity-80 transition-smooth px-2 py-1">Contact</a>
            <Button asChild variant="secondary" size="sm" className="shadow-md">
              <a href="#quote">Get Quote</a>
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
