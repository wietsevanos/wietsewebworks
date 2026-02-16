import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logoWW from "@/assets/logo-ww.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3 transition-all duration-500">
      <nav
        className={`container mx-auto flex items-center justify-between py-2.5 px-6 rounded-xl transition-all duration-500 backdrop-blur-xl border border-white/15 ${
          isScrolled ? "shadow-lg shadow-black/10" : ""
        }`}
        style={{
          background: "linear-gradient(135deg, hsl(210 75% 50% / 0.55), hsl(200 70% 55% / 0.45))",
        }}
      >
        {/* Logo - left */}
        <Link
          to="/"
          className="flex items-center gap-3 text-foreground transition-colors hover:text-blue-sky"
        >
          <img
            src={logoWW}
            alt="Wietse Webworks logo"
            className="h-8 w-auto brightness-0 invert"
          />
        </Link>

        {/* Desktop Navigation - center */}
        <ul className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
          <li>
            <button
              onClick={() => scrollToSection("werk")}
              className="text-xs tracking-[0.25em] uppercase text-white/80 hover:text-white transition-colors duration-300"
            >
              Werk
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("over")}
              className="text-xs tracking-[0.25em] uppercase text-white/80 hover:text-white transition-colors duration-300"
            >
              Over
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("prijzen")}
              className="text-xs tracking-[0.25em] uppercase text-white/80 hover:text-white transition-colors duration-300"
            >
              Prijzen
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-xs tracking-[0.25em] uppercase text-white/80 hover:text-white transition-colors duration-300"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* CTA button - right */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase bg-foreground text-background font-medium px-5 py-2 hover:bg-foreground/90 hover:shadow-md transition-all duration-300 rounded-lg"
          >
            Start project
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-2 mx-0 rounded-xl bg-background/95 backdrop-blur-md transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 border border-border" : "max-h-0"
        }`}
      >
        <ul className="container mx-auto py-6 flex flex-col gap-6">
          <li>
            <button onClick={() => scrollToSection("werk")} className="text-xs tracking-[0.2em] uppercase text-foreground hover:text-blue-sky">
              Werk
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("over")} className="text-xs tracking-[0.2em] uppercase text-foreground hover:text-blue-sky">
              Over
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("prijzen")} className="text-xs tracking-[0.2em] uppercase text-foreground hover:text-blue-sky">
              Prijzen
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")} className="text-xs tracking-[0.2em] uppercase text-blue-sky">
              Contact
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase border border-foreground/80 px-5 py-2.5 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 w-fit rounded-lg"
            >
              Start project
              <ArrowRight size={14} />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
