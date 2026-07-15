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
    <section className="bg-secondary/50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="relative overflow-hidden rounded-[36px] border border-white/15 px-8 py-20 md:px-20 md:py-28 shadow-[0_40px_100px_-40px_rgba(8,15,40,0.55)]"
          style={{ backgroundColor: "hsl(var(--brand-navy))" }}
        >
          {/* Soft ambient orbs for depth */}
          <div aria-hidden className="pointer-events-none absolute -top-40 -left-32 w-[34rem] h-[34rem] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(var(--brand-light) / 0.35) 0%, transparent 65%)" }} />
          <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-24 w-[32rem] h-[32rem] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(var(--accent-orange) / 0.18) 0%, transparent 65%)" }} />
          {/* Slow glass reflection sweeping across */}
          <div aria-hidden className="cta-reflection pointer-events-none absolute inset-0" />
          {/* Frosted glass layer */}
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[36px] backdrop-blur-2xl bg-white/[0.06]" />
          {/* Subtle top & bottom inner highlights */}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />


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
