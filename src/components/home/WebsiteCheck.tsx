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

export const WebsiteCheck = () => {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Grote typografische vraag als rustige achtergrondvorm */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-20 right-0 md:-right-8 leading-none font-semibold text-[hsl(var(--brand-light))] opacity-[0.06] text-[16rem] md:text-[24rem]"
      >
        ?
      </span>
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-40 w-[28rem] h-[28rem] rounded-full bg-[hsl(var(--brand-light))]/10 blur-3xl hidden md:block"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.92fr),minmax(0,1.08fr)] gap-12 lg:gap-20 items-start">
          {/* Vraag */}
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="text-primary font-medium mb-4 text-sm tracking-[0.2em] uppercase">
                Een website die met uw bedrijf meegaat
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-6">
                Is uw website nog wel{" "}
                <span className="text-accent-orange">goed genoeg?</span>
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
          </div>

          {/* Herkenning */}
          <div>
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-5">
                Herkent u dit?
              </p>
            </Reveal>
            <ol className="border-t border-border/70">
              {signalen.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal
                    key={s.text}
                    as="li"
                    delay={i * 70}
                    direction="none"
                    distance={0}
                  >
                    <div className="group flex items-center gap-4 md:gap-5 py-4 md:py-5 border-b border-border/70">
                      <span className="w-6 flex-shrink-0 text-[0.6875rem] tabular-nums tracking-[0.15em] text-muted-foreground/50 transition-colors duration-300 group-hover:text-accent-orange">
                        0{i + 1}
                      </span>
                      <span className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 border border-border/80 bg-background flex items-center justify-center text-primary/70 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/[0.06] group-hover:text-primary">
                        <Icon size={18} strokeWidth={1.75} />
                      </span>
                      <p className="text-[0.9375rem] md:text-base text-foreground/85 leading-snug transition-transform duration-300 group-hover:translate-x-0.5">
                        {s.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
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
