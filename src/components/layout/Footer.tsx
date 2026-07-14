import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

const services = [
  "Structured Trade Finance",
  "Transactional Execution",
  "Bank Advisory",
  "Insurance Structuring",
  "Claims Handling",
  "Interim Roles",
];

const infoLinks = [
  { label: "Vision", href: "/vision" },
  { label: "About", href: "/about" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/message" },
];

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Office */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-xl font-semibold tracking-tight">
                <span className="text-foreground">TCF</span>
                <span className="text-primary ml-1.5">Orange</span>
              </span>
            </Link>
            <div className="space-y-1 text-muted-foreground text-[0.9375rem]">
              <p>Gatwickstraat 15</p>
              <p>1043 GL Amsterdam</p>
              <p>The Netherlands</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-deep transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:hello@tcforange.com"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-primary transition-colors text-[0.9375rem]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-5">
              Info
            </h4>
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
            <h4 className="font-semibold text-foreground mb-5">
              Contact
            </h4>
            <div className="space-y-3 text-muted-foreground text-[0.9375rem]">
              <p>Christiaan van den Brink</p>
              <a
                href="mailto:hello@tcforange.com"
                className="block hover:text-primary transition-colors"
              >
                hello@tcforange.com
              </a>
              <a
                href="tel:+31618473476"
                className="block hover:text-primary transition-colors"
              >
                +31 618 473 476
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} TCF Orange. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
