import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/wietse-webworks-logo.png.asset.json";
import { WhatsAppLink, WhatsAppIcon } from "@/components/shared/WhatsAppLink";

const navItems = [
  { label: "Diensten", href: "/diensten" },
  { label: "Werkwijze", href: "/werkwijze" },
  { label: "Prijzen", href: "/prijzen" },
  { label: "Over mij", href: "/over-mij" },
  { label: "FAQ", href: "/faq" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]"
          : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-16" : "h-20"}`}>
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center transition-transform duration-300 hover:scale-[1.03]"
            aria-label="Wietse Webworks, home"
          >
            <img
              src={logo.url}
              alt="Wietse Webworks"
              className={`w-auto object-contain transition-all duration-500 ${scrolled ? "h-9" : "h-10"}`}
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
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full text-foreground/80 font-medium text-[0.9375rem] hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <WhatsAppLink
              className="btn-whatsapp !py-2.5 !px-5 text-[0.9375rem]"
              ariaLabel="Start een WhatsApp gesprek"
            >
              <WhatsAppIcon size={16} />
              WhatsApp
            </WhatsAppLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-border/60 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-base font-medium py-2 transition-colors ${
                    location.pathname === item.href ? "text-primary" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border/60 mt-2">
                <Link
                  to="/contact"
                  className="px-6 py-2.5 rounded-full border border-border text-foreground font-medium text-center"
                >
                  Contact
                </Link>
                <WhatsAppLink className="btn-whatsapp justify-center">
                  <WhatsAppIcon size={16} />
                  Chat via WhatsApp
                </WhatsAppLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
