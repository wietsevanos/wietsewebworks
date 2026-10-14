import { useRef, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Eye, MessageSquare, Palette, Smartphone } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

type Signaal = {
  text: string;
  icon: typeof Clock;
};

const signalen: Signaal[] = [
  { text: "Uw website ziet er verouderd uit", icon: Clock },
  { text: "Uw website werkt niet prettig op mobiel", icon: Smartphone },
  { text: "Bezoekers zien niet direct wat u doet", icon: Eye },
  { text: "Klanten kunnen moeilijk contact opnemen", icon: MessageSquare },
  {
    text: "Uw website past niet meer bij de uitstraling van uw bedrijf",
    icon: Palette,
  },
];

/** Kaart met een zachte gloed die de muis volgt (desktop). */
const SignaalCard = ({ signaal, index }: { signaal: Signaal; index: number }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const Icon = signaal.icon;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <Reveal as="li" delay={index * 70} direction="none" distance={0}>
      <div
        ref={ref}
        onMouseMove={onMove}
        className="signaal-card group relative overflow-hidden glass border border-border/60 px-5 py-5 md:px-6 md:py-6 transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_45px_-24px_hsl(var(--primary)/0.5)]"
      >
        {/* Gloed die de muis volgt */}
        <div
          aria-hidden
          className="signaal-spot pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        {/* Subtiele gradient-sheen bij hover */}
        <div
          aria-hidden
          className="signaal-sheen pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] opacity-0 group-hover:opacity-100"
        />

        <div className="relative flex items-center gap-4 md:gap-5">
          <div className="relative flex-shrink-0">
            {/* Halo achter icoon bij hover */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 scale-150 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle, hsl(var(--accent-orange) / 0.28), transparent 70%)",
              }}
            />
            {/* Gradient icoon-tegel */}
            <div className="signaal-icon relative z-10 h-14 w-14 md:h-16 md:w-16 flex items-center justify-center text-primary-foreground transition-transform duration-300 group-hover:scale-105">
              <Icon size={26} strokeWidth={1.6} className="md:w-7 md:h-7" />
            </div>
          </div>

          <div className="min-w-0">
            <span className="block text-[0.6875rem] font-semibold tabular-nums tracking-[0.18em] text-primary/45 transition-colors duration-300 group-hover:text-accent-orange">
              0{index + 1}
            </span>
            <p className="mt-1 text-[0.9375rem] md:text-base font-medium text-foreground/90 leading-snug transition-colors duration-300 group-hover:text-foreground">
              {signaal.text}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export const WebsiteCheck = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden surface-aurora">
      {/* Grote typografische vraag als rustige achtergrondvorm */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-20 right-0 md:-right-8 leading-none font-semibold text-[hsl(var(--brand-light))] opacity-[0.07] text-[16rem] md:text-[24rem]"
      >
        ?
      </span>
      {/* Zachte kleuraccenten in de achtergrond */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 -left-40 w-[28rem] h-[28rem] rounded-full bg-[hsl(var(--primary-glow))]/15 blur-3xl hidden md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -right-32 w-[24rem] h-[24rem] rounded-full bg-[hsl(var(--accent-orange))]/10 blur-3xl hidden md:block"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Vraag */}
          <div>
            <Reveal>
              <p className="text-primary font-medium mb-4 text-sm tracking-[0.2em] uppercase">
                Een website die met uw bedrijf meegaat
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-6">
                Is uw website nog wel{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--gradient-warm)" }}
                >
                  goed genoeg?
                </span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-muted-foreground leading-relaxed text-[0.9375rem] md:text-base max-w-md">
                Uw website is vaak het eerste contactmoment met een potentiële
                klant. Is de website verouderd, werkt hij onduidelijk of sluit
                hij niet meer aan bij uw bedrijf, dan kan dat onnodig klanten
                kosten.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 hidden lg:flex items-center gap-3">
                <span
                  className="h-px w-10"
                  style={{ backgroundImage: "var(--gradient-warm)" }}
                />
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                  Vijf signalen om naar te kijken
                </span>
              </div>
            </Reveal>
          </div>

          {/* Herkenning */}
          <div>
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-5">
                Herkent u dit?
              </p>
            </Reveal>
            <ol className="space-y-3 md:space-y-4">
              {signalen.map((s, i) => (
                <SignaalCard key={s.text} signaal={s} index={i} />
              ))}
            </ol>
          </div>
        </div>

        {/* Afsluiting */}
        <Reveal delay={120}>
          <div className="mt-14 md:mt-20 pt-10 md:pt-12 border-t border-border/70 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr),auto] gap-8 lg:gap-14 lg:items-center">
            <p className="text-muted-foreground leading-relaxed text-[0.9375rem] md:text-base max-w-2xl">
              Dan is het misschien tijd om opnieuw naar uw website te kijken. Ik
              help u met een moderne, professionele website die vertrouwen
              uitstraalt, prettig werkt op elk scherm en bezoekers zonder
              omwegen naar contact leidt.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2 group"
              >
                Bekijk wat er mogelijk is
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/werk"
                className="btn-ghost inline-flex items-center gap-1.5 whitespace-nowrap"
              >
                Bekijk mijn werk
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
