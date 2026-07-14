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
    <section className="relative bg-secondary/40 py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="relative bg-background border border-border/70 rounded-[2rem] px-8 py-16 md:px-16 md:py-24 shadow-[0_30px_80px_-40px_hsl(210_95%_50%/0.15)] overflow-hidden">
            {/* Subtle ambient accent inside the card */}
            <div
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[30rem] rounded-full bg-primary/[0.05] blur-3xl"
            />

            <div className="relative text-center max-w-3xl mx-auto">
              <p className="text-primary font-medium mb-6 text-xs tracking-[0.2em] uppercase">
                {eyebrow}
              </p>

              <Reveal delay={80}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1] tracking-tight mb-8">
                  {title}
                </h2>
              </Reveal>

              <Reveal delay={160}>
                <p className="text-foreground/60 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-12">
                  {description}
                </p>
              </Reveal>

              <Reveal delay={220}>
                <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-12">
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
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
