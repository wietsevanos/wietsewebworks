import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, ArrowUpRight } from "lucide-react";
import logo from "@/assets/wietse-webworks-logo.png.asset.json";
import whatsappLogo from "@/assets/whatsapp-logo.png.asset.json";

const navigatie = [
  { label: "Werk", href: "/werk" },
  { label: "Werkwijze", href: "/werkwijze" },
  { label: "Prijzen", href: "/prijzen" },
  { label: "Hosting", href: "/hosting" },
  { label: "Over mij", href: "/over-mij" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const juridisch = [
  { label: "Privacybeleid", href: "/privacybeleid" },
  { label: "Voorwaarden", href: "/voorwaarden" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        {/* Top: Brand statement + Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 pb-20 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-7">
            <Link to="/" className="inline-flex items-center gap-3 mb-8" aria-label="Wietse Webworks, home">
              <img
                src={logo.url}
                alt="Wietse Webworks"
                className="h-9 w-auto object-contain"
                style={{ filter: "invert(1) brightness(2)" }}
              />
              <span className="text-base font-semibold tracking-tight">Wietse Webworks</span>
            </Link>
            <p className="text-white/70 text-2xl md:text-3xl leading-[1.25] tracking-tight font-light max-w-xl">
              Professionele websites voor lokale ondernemers.
              <span className="text-white/40"> Persoonlijk, transparant en volledig verzorgd.</span>
            </p>
          </div>

          {/* Direct contact */}
          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-white/10">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">
              Direct contact
            </p>
            <div className="space-y-4">
              <a
                href="tel:+31647872734"
                className="group flex items-center justify-between text-lg hover:text-primary transition-colors"
              >
                <span className="inline-flex items-center gap-3">
                  <Phone size={16} className="text-white/40 group-hover:text-primary transition-colors" />
                  06 47 87 27 34
                </span>
                <ArrowUpRight size={16} className="text-white/30 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </a>
              <a
                href="mailto:wietsevanos@gmail.com"
                className="group flex items-center justify-between text-lg hover:text-primary transition-colors"
              >
                <span className="inline-flex items-center gap-3">
                  <Mail size={16} className="text-white/40 group-hover:text-primary transition-colors" />
                  wietsevanos@gmail.com
                </span>
                <ArrowUpRight size={16} className="text-white/30 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </a>
              <a
                href="https://wa.me/31647872734"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between text-lg hover:text-primary transition-colors"
              >
                <span className="inline-flex items-center gap-3">
                  <img
                    src={whatsappLogo.url}
                    alt=""
                    className="w-4 h-4 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                  WhatsApp
                </span>
                <ArrowUpRight size={16} className="text-white/30 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </a>
              <a
                href="https://instagram.com/wietsevanos"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between text-lg hover:text-primary transition-colors"
              >
                <span className="inline-flex items-center gap-3">
                  <Instagram size={16} className="text-white/40 group-hover:text-primary transition-colors" />
                  @wietsevanos
                </span>
                <ArrowUpRight size={16} className="text-white/30 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* Middle: Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 border-b border-white/10">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-5">
              Studio
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Wietse van Os<br />
              Bloemendaalseweg 315<br />
              2051 GH Overveen<br />
              <span className="text-white/40">Werkzaam in heel Nederland</span>
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-5">
              Navigatie
            </p>
            <ul className="space-y-2.5">
              {navigatie.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-5">
              &nbsp;
            </p>
            <ul className="space-y-2.5">
              {navigatie.slice(4).map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-5">
              Juridisch
            </p>
            <ul className="space-y-2.5">
              {juridisch.map((j) => (
                <li key={j.href}>
                  <Link
                    to={j.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {j.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-white/40 tracking-wide">
            © {new Date().getFullYear()} Wietse Webworks · Alle rechten voorbehouden
          </p>
          <p className="text-xs text-white/40 tracking-wide">
            KvK 99105578 · Vrijgesteld van btw (KOR)
          </p>
        </div>
      </div>
    </footer>
  );
};
