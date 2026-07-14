import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";

const diensten = [
  { label: "Webdesign", href: "/diensten" },
  { label: "Website ontwikkeling", href: "/diensten" },
  { label: "Hosting", href: "/hosting" },
  { label: "Onderhoud", href: "/hosting" },
  { label: "Microsoft 365", href: "/diensten" },
];

const infoLinks = [
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
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-xl font-semibold tracking-tight">
                <span className="text-foreground">Wietse</span>
                <span className="text-primary ml-1.5">Webworks</span>
              </span>
            </Link>
            <div className="space-y-1 text-muted-foreground text-[0.9375rem]">
              <p>Websites voor lokale ondernemers</p>
              <p>Haarlem &middot; Bloemendaal &middot; Heemstede</p>
              <p>Actief in heel Nederland</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
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
                href="mailto:wietsevanos@gmail.com"
                aria-label="E-mail"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:+31647872734"
                aria-label="Telefoon"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="font-semibold text-foreground mb-5">Diensten</h4>
            <ul className="space-y-3">
              {diensten.map((d) => (
                <li key={d.label}>
                  <Link
                    to={d.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-[0.9375rem]"
                  >
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-5">Navigatie</h4>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-[0.9375rem]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-5">Contact</h4>
            <div className="space-y-3 text-muted-foreground text-[0.9375rem]">
              <p className="text-foreground font-medium">Wietse van Os</p>
              <a
                href="mailto:wietsevanos@gmail.com"
                className="block hover:text-primary transition-colors"
              >
                wietsevanos@gmail.com
              </a>
              <a
                href="tel:+31647872734"
                className="block hover:text-primary transition-colors"
              >
                06 47 87 27 34
              </a>
              <a
                href="https://instagram.com/wietsevanos"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                @wietsevanos
              </a>
              <p className="pt-2 text-xs">KvK 99105578 &middot; Vrijgesteld van btw (KOR)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Wietse Webworks. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-5">
            {juridisch.map((j) => (
              <Link
                key={j.href}
                to={j.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {j.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
