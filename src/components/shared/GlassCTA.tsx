import { Link } from "react-router-dom";
import { ArrowRight, Check, MessageSquare, PenTool, Rocket } from "lucide-react";
import { Reveal } from "./Reveal";

interface GlassCTAProps {
  eyebrow?: string;
  title?: string;
  titleMuted?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

const benefits = [
  "Gratis eerste ontwerpvoorstel",
  "Eén vast aanspreekpunt",
  "Binnen enkele weken online",
];

const steps = [
  {
    icon: MessageSquare,
    title: "Kennismaking",
    description: "We bespreken uw bedrijf, wensen en doelen. Vrijblijvend en zonder verkooppraatjes.",
  },
  {
    icon: PenTool,
    title: "Ontwerp & bouw",
    description: "U krijgt een eerste ontwerp ter goedkeuring. Daarna bouw ik uw website tot in de puntjes af.",
  },
  {
    icon: Rocket,
    title: "Livegang",
    description: "Uw website gaat live, inclusief hosting, monitoring en persoonlijke ondersteuning.",
  },
];

/**
 * Premium closing section — split layout with headline + CTA on the left,
 * "hoe werkt het" mini timeline on the right. Uses the site's navy + orange palette.
 */
export const GlassCTA = ({
  eyebrow = "Klaar om te starten?",
  title = "Klaar om online net zo professioneel over te komen",
  titleMuted = "als uw bedrijf in het echt?",
  description = "Een gratis eerste ontwerp, een eerlijk gesprek en geen verplichtingen. U weet meteen wat u van mij kunt verwachten.",
  primaryLabel = "Vraag vrijblijvend een offerte aan",
  primaryHref = "/contact",
  secondaryLabel = "Bekijk mijn werk",
  secondaryHref = "/werk",
}: GlassCTAProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-navy py-24 md:py-32">
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 w-[38rem] h-[38rem] rounded-full bg-[hsl(var(--brand-light))]/12 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 w-[34rem] h-[34rem] rounded-full bg-[hsl(var(--accent-orange))]/12 blur-3xl"
      />
      {/* Faint grid pattern for texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100% / 0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          {/* Left — pitch */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="inline-flex items-center gap-2 text-[hsl(var(--accent-orange-soft))] font-medium mb-6 text-xs tracking-[0.2em] uppercase">
                <span className="w-8 h-px bg-[hsl(var(--accent-orange-soft))]/60" />
                {eyebrow}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-white leading-[1.1] tracking-tight mb-6">
                {title}{" "}
                {titleMuted && (
                  <span className="text-[hsl(var(--accent-orange-soft))]">{titleMuted}</span>
                )}
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-xl mb-8">
                {description}
              </p>
            </Reveal>

            <Reveal delay={220}>
              <ul className="space-y-3 mb-10">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-white/90 text-[0.9375rem]">
                    <span className="w-5 h-5 rounded-full bg-[hsl(var(--accent-orange))]/15 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-[hsl(var(--accent-orange-soft))]" strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={primaryHref}
                  className="btn-accent inline-flex items-center justify-center gap-2 group/btn"
                >
                  {primaryLabel}
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-200 group-hover/btn:translate-x-1"
                  />
                </Link>
                <Link
                  to={secondaryHref}
                  className="btn-outline inline-flex items-center justify-center gap-2"
                >
                  {secondaryLabel}
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right — "In 3 stappen live" card */}
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <div className="relative rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm p-8 md:p-10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)]">
                {/* Corner accent */}
                <div
                  aria-hidden
                  className="absolute -top-px -right-px w-24 h-24 rounded-tr-2xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at top right, hsl(var(--accent-orange) / 0.35), transparent 65%)",
                  }}
                />

                <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6">
                  Zo werkt het
                </p>
                <h3 className="text-2xl font-semibold text-white mb-8 leading-tight">
                  In 3 stappen{" "}
                  <span className="text-[hsl(var(--accent-orange-soft))]">online</span>
                </h3>

                <ol className="relative space-y-6">
                  {/* Vertical connector line */}
                  <span
                    aria-hidden
                    className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent"
                  />
                  {steps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <li key={step.title} className="relative flex gap-4">
                        <div className="relative z-10 w-10 h-10 rounded-full bg-[hsl(var(--brand-navy))] border border-white/15 flex items-center justify-center flex-shrink-0">
                          <Icon size={16} className="text-[hsl(var(--accent-orange-soft))]" />
                        </div>
                        <div className="pt-1">
                          <div className="flex items-baseline gap-2 mb-1">
                            <span className="text-[0.7rem] font-semibold tracking-wider text-white/40">
                              0{i + 1}
                            </span>
                            <h4 className="text-base font-semibold text-white">
                              {step.title}
                            </h4>
                          </div>
                          <p className="text-sm text-white/60 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
