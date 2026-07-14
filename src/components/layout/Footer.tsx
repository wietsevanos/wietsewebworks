import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/wietse-webworks-logo.png.asset.json";
import whatsappLogo from "@/assets/whatsapp-logo.png.asset.json";

const diensten = [
  { label: "Webdesign", href: "/werk" },
  { label: "Website ontwikkeling", href: "/werk" },
  { label: "Hosting", href: "/hosting" },
  { label: "Onderhoud", href: "/hosting" },
  { label: "Microsoft 365", href: "/werk" },
];

const navigatie = [
  { label: "Werk", href: "/werk" },
  { label: "Werkwijze", href: "/werkwijze" },
  { label: "Prijzen", href: "/prijzen" },
  { label: "Over mij", href: "/over-mij" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const juridisch = [
  { label: "Privacybeleid", href: "/privacybeleid" },
  { label: "Algemene voorwaarden", href: "/voorwaarden" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 mb-6" aria-label="Wietse Webworks, home">
              <img
                src={logo.url}
                alt="Wietse Webworks"
                className="h-10 w-auto object-contain invert brightness-0"
                style={{ filter: "invert(1) brightness(2)" }}
              />
              <span className="text-lg font-semibold tracking-tight">Wietse Webworks</span>
            </Link>
            <p className="text-white/70 text-[0.9375rem] leading-relaxed max-w-sm">
              Professionele websites voor lokale ondernemers. Persoonlijk contact,
              transparante prijzen en alles onder één dak.
            </p>
            <div className="flex items-center gap-3 mt-7">
              <a
                href="https://instagram.com/wietsevanos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-deep transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/31647872734"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors"
              >
                <img
                  src={whatsappLogo.url}
                  alt="WhatsApp"
                  className="w-4 h-4 object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </a>
              <a
                href="mailto:wietsevanos@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white/60 transition-colors"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:+31647872734"
                aria-label="Telefoon"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white/60 transition-colors"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Diensten */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wide">
              Diensten
            </h4>
            <ul className="space-y-3">
              {diensten.map((d) => (
                <li key={d.label}>
                  <Link
                    to={d.href}
                    className="text-white/70 hover:text-primary transition-colors text-[0.9375rem]"
                  >
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigatie */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wide">
              Navigatie
            </h4>
            <ul className="space-y-3">
              {navigatie.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-primary transition-colors text-[0.9375rem]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wide">
              Contact
            </h4>
            <div className="space-y-3 text-white/70 text-[0.9375rem]">
              <p className="text-white font-medium">Wietse van Os</p>
              <a
                href="tel:+31647872734"
                className="block hover:text-primary transition-colors"
              >
                06 47 87 27 34
              </a>
              <a
                href="mailto:wietsevanos@gmail.com"
                className="block hover:text-primary transition-colors"
              >
                wietsevanos@gmail.com
              </a>
              <a
                href="https://instagram.com/wietsevanos"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                @wietsevanos
              </a>
              <p className="pt-2 text-xs text-white/50 leading-relaxed">
                Bloemendaalseweg 315, 2051 GH Overveen
                <br />
                Werkzaam in heel Nederland
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col items-center gap-4">
          <p className="text-sm text-white/60 tracking-wide text-center">
            KvK 99105578 &middot; Vrijgesteld van btw (KOR)
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <p className="text-sm text-white/45">
              © {new Date().getFullYear()} Wietse Webworks. Alle rechten voorbehouden.
            </p>
            <span className="hidden sm:inline text-white/20">·</span>
            <div className="flex items-center gap-6">
              {juridisch.map((j) => (
                <Link
                  key={j.href}
                  to={j.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {j.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
