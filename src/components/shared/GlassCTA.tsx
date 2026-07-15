import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface GlassCTAProps {
  eyebrow?: string;
  title?: string;
  titleMuted?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

/**
 * Minimal, premium closing block — one rectangular navy panel with a
 * slow-running light sweep animation. Deliberately sparse content.
 */
export const GlassCTA = ({
  eyebrow = "Klaar om te starten?",
  title = "Laten we uw website",
  titleMuted = "samen bouwen.",
  primaryLabel = "Vraag een offerte aan",
  primaryHref = "/contact",
}: GlassCTAProps) => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="cta-panel relative overflow-hidden rounded-[36px] border border-white/10 bg-[hsl(var(--brand-navy))] px-8 py-20 md:px-20 md:py-28 shadow-[0_40px_100px_-40px_rgba(8,15,40,0.7)]">
          {/* Slow drifting orange blob */}
          <div aria-hidden className="cta-orb-a pointer-events-none absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl" />
          {/* Slow drifting blue blob */}
          <div aria-hidden className="cta-orb-b pointer-events-none absolute -bottom-32 -right-20 w-[32rem] h-[32rem] rounded-full blur-3xl" />
          {/* Slow horizontal light bars */}
          <div aria-hidden className="cta-bar cta-bar-1 pointer-events-none absolute inset-x-0 h-px" />
          <div aria-hidden className="cta-bar cta-bar-2 pointer-events-none absolute inset-x-0 h-px" />
          {/* Slow glass reflection sweeping across */}
          <div aria-hidden className="cta-reflection pointer-events-none absolute inset-0" />
          {/* Subtle top inner highlight */}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          {/* Glass layer */}
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[36px] backdrop-blur-[2px] bg-white/[0.02]" />

          <div className="relative z-10 max-w-3xl">
            <p className="text-[hsl(var(--accent-orange-soft))] font-medium mb-6 text-xs tracking-[0.25em] uppercase">
              {eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.05] tracking-tight mb-10">
              {title}{" "}
              <span className="text-white/40">{titleMuted}</span>
            </h2>
            <Link
              to={primaryHref}
              className="btn-accent inline-flex items-center gap-2 group/btn"
            >
              {primaryLabel}
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover/btn:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
