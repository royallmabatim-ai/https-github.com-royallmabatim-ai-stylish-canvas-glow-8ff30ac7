import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/#products" },
  { label: "Our Work", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contacts", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      if (location.pathname === "/") {
        const el = document.querySelector(href.replace("/", ""));
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const renderLink = (link: typeof navLinks[0]) => {
    if (link.href.startsWith("/#")) {
      if (location.pathname === "/") {
        return (
          <a
            key={link.label}
            href={link.href.replace("/", "")}
            className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        );
      }
      return (
        <Link
          key={link.label}
          to={link.href}
          className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          {link.label}
        </Link>
      );
    }
    return (
      <Link
        key={link.label}
        to={link.href}
        className={`px-4 py-2 text-sm font-medium transition-colors ${
          location.pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"
        }`}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <nav className="bg-background sticky top-0 z-50 shadow-md">
      <div className="container flex items-center justify-between h-[70px]">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Boma Mabati Factory Logo" className="h-14 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map(renderLink)}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:0734753416" className="btn-navy text-sm rounded-full px-5 py-2 flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" /> Call Now
          </a>
          <Link to="/#contact" className="btn-orange text-sm rounded-full px-5 py-2">
            Request a Quote
          </Link>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="block px-6 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors font-medium"
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 pt-3 flex flex-col gap-2">
            <a href="tel:0734753416" className="btn-navy text-sm text-center rounded-full flex items-center justify-center gap-2">
              <Phone className="h-3.5 w-3.5" /> Call Now
            </a>
            <Link to="/#contact" className="btn-orange text-sm text-center rounded-full" onClick={() => setOpen(false)}>
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
