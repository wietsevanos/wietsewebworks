import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Linkedin } from "lucide-react";
const navItems = [{
  label: "Vision",
  href: "/vision"
}, {
  label: "Services",
  href: "/services"
}, {
  label: "About",
  href: "/about"
}, {
  label: "Partnerships",
  href: "/partnerships"
}, {
  label: "FAQ",
  href: "/faq"
}];
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
        {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/tcf-logo.png?v=2"
              alt="TCF Orange logo"
              className="h-6 w-6 object-contain"
            />
            <span className="text-xl font-semibold tracking-tight">
              <span className="text-foreground">TCF</span>
              <span className="text-primary ml-1.5">Orange</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map(item => <Link key={item.href} to={item.href} className={`nav-link ${location.pathname === item.href ? "active" : ""}`}>
                {item.label}
              </Link>)}
          </div>

          {/* Desktop Actions - Styled like reference */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/message" className="px-6 py-2.5 rounded-full border-2 border-foreground/20 text-foreground font-medium text-[0.9375rem] hover:border-primary hover:text-primary transition-colors">
              Message
            </Link>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-deep transition-colors">
              <Linkedin size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="lg:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map(item => <Link key={item.href} to={item.href} onClick={() => setIsOpen(false)} className={`text-base font-medium py-2 ${location.pathname === item.href ? "text-primary" : "text-foreground/70"}`}>
                  {item.label}
                </Link>)}
              <div className="flex items-center gap-4 pt-4 border-t border-border mt-2">
                <Link to="/message" onClick={() => setIsOpen(false)} className="px-6 py-2.5 rounded-full border-2 border-foreground/20 text-foreground font-medium">
                  Message
                </Link>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};