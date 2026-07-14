import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "./Reveal";


interface GlassCTAProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  whatsappLabel?: string;
}

const benefits = [
  "Transparante prijzen",
  "Eén vast aanspreekpunt",
  "Binnen enkele weken online",
];

/**
 * Premium closing section — clean, spacious, studio-grade.
 */
export const GlassCTA = ({
  eyebrow = "Klaar om te starten?",
  title = "Klaar om online net zo professioneel over te komen als uw bedrijf?",
  description = "Een gratis eerste ontwerp, een eerlijk gesprek en geen verplichtingen. Zo weet u precies wat u kunt verwachten.",
  primaryLabel = "Vraag vrijblijvend een offerte aan",
  primaryHref = "/contact",
}: GlassCTAProps) => {
  return (
    <section className="relative bg-background py-28 md:py-40 overflow-hidden">
      {/* Ultra-subtle ambient accents */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[40rem] rounded-full bg-primary/[0.04] blur-3xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-primary font-medium mb-6 text-xs tracking-[0.2em] uppercase">
            {eyebrow}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="text-4xl md:text-6xl font-semibold text-foreground leading-[1.1] tracking-tight mb-8 max-w-3xl mx-auto">
            {title}
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="text-foreground/60 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-12">
            {description}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-14">
            {benefits.map((b) => (
              <li
                key={b}
                className="inline-flex items-center gap-2 text-sm md:text-[0.9375rem] text-foreground/80"
              >
                <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check size={12} className="text-primary" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-col items-center gap-6">
            <Link
              to={primaryHref}
              className="btn-primary inline-flex items-center gap-2 group/btn text-base px-8 py-4"
            >
              {primaryLabel}
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover/btn:translate-x-1"
              />
            </Link>

            <div className="flex items-center gap-3 text-sm text-foreground/50">
              <span>of</span>
              <a
                href="https://wa.me/31647872734"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-foreground/70 hover:text-primary transition-colors"
              >
                <img
                  src={whatsappLogo.url}
                  alt=""
                  className="w-4 h-4 object-contain"
                />
                WhatsApp
              </a>
              <span className="text-foreground/20">·</span>
              <a
                href="tel:+31647872734"
                className="inline-flex items-center gap-1.5 text-foreground/70 hover:text-primary transition-colors"
              >
                <Phone size={14} />
                Bel direct
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
