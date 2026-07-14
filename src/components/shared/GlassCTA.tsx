import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

interface GlassCTAProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  whatsappLabel?: string;
}

/**
 * Consistent glassmorphism closing CTA used on every page.
 * Uses the same visual language as the original login/hero panel:
 * frosted white surface, rounded corners, subtle glow and blur.
 */
export const GlassCTA = ({
  eyebrow = "Klaar om te starten?",
  title = "Vrijblijvend kennismaken over uw nieuwe website",
  description = "Bel, WhatsApp of mail. U krijgt altijd persoonlijk antwoord van Wietse zelf. Het eerste ontwerp is gratis en zonder verplichtingen.",
  primaryLabel = "Start uw project",
  primaryHref = "/contact",
  whatsappLabel = "WhatsApp 06 47 87 27 34",
}: GlassCTAProps) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden dark-section">
      {/* Ambient glow layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/5" />
      <div
        aria-hidden
        className="absolute -top-32 -left-24 w-[36rem] h-[36rem] rounded-full bg-primary/30 blur-[120px] opacity-70"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-24 w-[32rem] h-[32rem] rounded-full bg-primary-glow/25 blur-[120px] opacity-70"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="relative rounded-[2rem] md:rounded-[2.5rem] p-10 md:p-16 border border-white/15 bg-white/[0.06] backdrop-blur-xl shadow-[0_30px_120px_-30px_rgba(0,0,0,0.55)] overflow-hidden group transition-all duration-500 hover:border-white/25 hover:bg-white/[0.08]">
            {/* Inner sheen */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-80"
            />
            {/* Soft glow inside the card */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-1/2 left-1/2 -translate-x-1/2 w-[120%] h-[120%] rounded-full bg-primary/10 blur-3xl transition-opacity duration-700 group-hover:opacity-70 opacity-50"
            />

            <div className="relative text-center max-w-2xl mx-auto">
              <Reveal delay={80}>
                <p className="text-primary-light font-medium mb-4 text-sm tracking-wide uppercase">
                  {eyebrow}
                </p>
              </Reveal>
              <Reveal delay={160}>
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
                  {title}
                </h2>
              </Reveal>
              <Reveal delay={240}>
                <p className="text-white/75 text-lg leading-relaxed mb-10">
                  {description}
                </p>
              </Reveal>
              <Reveal delay={320}>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to={primaryHref}
                    className="btn-primary inline-flex items-center gap-2 group/btn"
                  >
                    {primaryLabel}
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-200 group-hover/btn:translate-x-1"
                    />
                  </Link>
                  <a
                    href="https://wa.me/31647872734"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline inline-flex items-center gap-2 group/wa"
                  >
                    <MessageCircle
                      size={18}
                      className="transition-transform duration-200 group-hover/wa:scale-110"
                    />
                    {whatsappLabel}
                  </a>
                  <a
                    href="tel:+31647872734"
                    className="btn-outline inline-flex items-center gap-2"
                  >
                    <Phone size={18} />
                    Bel direct
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
