import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/wietse-webworks-logo.png.asset.json";
import whatsappLogo from "@/assets/whatsapp-logo.png.asset.json";

const navItems = [
  { label: "Werk", href: "/werk" },
  { label: "Werkwijze", href: "/werkwijze" },
  { label: "Prijzen", href: "/prijzen" },
  { label: "Over mij", href: "/over-mij" },
  { label: "FAQ", href: "/faq" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";
  const heroTransparent = isHome && !scrolled;
  const navStateClass = isHome
    ? scrolled
      ? "nav-hero-glass nav-on-dark"
      : "nav-hero-transparent nav-on-dark"
    : "nav-glass";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${navStateClass}`}
    >
      <div className="w-full px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="Wietse Webworks, home">
            <img
              src={logo.url}
              alt="Wietse Webworks"
              className="nav-logo h-10 w-auto object-contain transition-[filter] duration-500"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`nav-link ${location.pathname === item.href ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="nav-contact-btn px-6 py-2.5 rounded-full border-2 border-foreground/20 text-foreground font-medium text-[0.9375rem] hover:border-primary hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <a
              href="https://wa.me/31647872734"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp 06 47 87 27 34"
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-deep transition-all duration-200 hover:scale-105 hover:shadow-[0_8px_24px_-8px_hsl(var(--primary))]"
            >
              <img src={whatsappLogo.url} alt="WhatsApp" className="w-5 h-5 object-contain" style={{ filter: "brightness(0) invert(1)" }} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="nav-menu-btn lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-2 ${
                    location.pathname === item.href ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border mt-2">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2.5 rounded-full border-2 border-foreground/20 text-foreground font-medium"
                >
                  Contact
                </Link>
                <a
                  href="https://wa.me/31647872734"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp 06 47 87 27 34"
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white"
                >
                  <img src={whatsappLogo.url} alt="WhatsApp" className="w-5 h-5 object-contain" style={{ filter: "brightness(0) invert(1)" }} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
