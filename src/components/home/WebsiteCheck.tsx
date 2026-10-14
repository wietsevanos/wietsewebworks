import { useState } from "react";
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
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-20 md:py-28 bg-background overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-[hsl(var(--brand-light)/0.10)] via-background to-[hsl(var(--brand-light)/0.06)] shadow-[0_30px_80px_-50px_hsl(var(--primary)/0.45)]">
            {/* Zachte kleurvlakken */}
            <div aria-hidden className="pointer-events-none absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-[hsl(var(--brand-light)/0.18)] blur-3xl hidden md:block" />
            <div aria-hidden className="pointer-events-none absolute -bottom-40 right-0 w-[24rem] h-[24rem] rounded-full bg-primary/[0.08] blur-3xl hidden md:block" />
            <span aria-hidden className="pointer-events-none select-none absolute -top-10 right-6 leading-none font-semibold text-primary opacity-[0.05] text-[12rem] md:text-[18rem]">?</span>

            <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr),minmax(0,1.1fr)] gap-10 lg:gap-16 p-6 sm:p-10 md:p-14">
              {/* Vraag */}
              <div className="lg:pt-2">
                <p className="text-primary font-medium mb-4 text-xs md:text-sm tracking-[0.2em] uppercase">
                  Een website die met uw bedrijf meegaat
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
                  Is uw website nog wel{" "}
                  <span className="text-accent-orange">goed genoeg?</span>
                </h2>
                <div className="h-px w-16 bg-gradient-to-r from-primary to-transparent mb-6" />
                <p className="text-muted-foreground leading-relaxed text-[0.9375rem] md:text-base max-w-md">
                  Uw website is vaak het eerste contactmoment met een potentiële
                  klant. Is de website verouderd, werkt hij onduidelijk of sluit
                  hij niet meer aan bij uw bedrijf, dan kan dat onnodig klanten
                  kosten.
                </p>
              </div>

              {/* Herkenning */}
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Herkent u dit?
                </p>
                <ol className="rounded-2xl border border-border/70 bg-background/70 backdrop-blur-sm divide-y divide-border/60 overflow-hidden">
                  {signalen.map((s, i) => {
                    const Icon = s.icon;
                    const isActive = active === i;
                    return (
                      <li key={s.text}>
                        <button
                          type="button"
                          onMouseEnter={() => setActive(i)}
                          onFocus={() => setActive(i)}
                          onClick={() => setActive(i)}
                          aria-pressed={isActive}
                          className={`relative w-full text-left flex items-center gap-4 md:gap-5 px-4 md:px-6 py-4 md:py-5 transition-colors duration-500 ease-out ${
                            isActive ? "bg-primary/[0.06]" : "hover:bg-primary/[0.03]"
                          }`}
                        >
                          <span
                            aria-hidden
                            className={`absolute left-0 top-0 bottom-0 w-[3px] bg-accent-orange origin-center transition-transform duration-500 ease-out ${
                              isActive ? "scale-y-100" : "scale-y-0"
                            }`}
                          />
                          <span
                            className={`w-6 flex-shrink-0 text-[0.6875rem] tabular-nums tracking-[0.15em] transition-colors duration-500 ${
                              isActive ? "text-accent-orange" : "text-muted-foreground/50"
                            }`}
                          >
                            0{i + 1}
                          </span>
                          <span
                            className={`flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center border transition-all duration-500 ease-out ${
                              isActive
                                ? "border-primary bg-primary text-primary-foreground scale-105 shadow-[0_8px_20px_-10px_hsl(var(--primary)/0.8)]"
                                : "border-border/80 bg-background text-primary/70"
                            }`}
                          >
                            <Icon size={18} strokeWidth={1.75} />
                          </span>
                          <span
                            className={`flex-1 text-[0.9375rem] md:text-base leading-snug transition-all duration-500 ease-out ${
                              isActive ? "text-foreground translate-x-1" : "text-foreground/75"
                            }`}
                          >
                            {s.text}
                          </span>
                          <ArrowRight
                            size={16}
                            aria-hidden
                            className={`hidden sm:block flex-shrink-0 transition-all duration-500 ${
                              isActive ? "opacity-100 translate-x-0 text-primary" : "opacity-0 -translate-x-2"
                            }`}
                          />
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>

            {/* Afsluitende onderbalk */}
            <div className="relative border-t border-primary/10 bg-background/60 backdrop-blur-sm px-6 sm:px-10 md:px-14 py-8 md:py-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr),auto] gap-6 lg:gap-12 lg:items-center">
              <p className="text-muted-foreground leading-relaxed text-[0.9375rem] md:text-base max-w-2xl">
                Dan is het misschien tijd om opnieuw naar uw website te kijken. Ik
                help u met een moderne, professionele website die vertrouwen
                uitstraalt, prettig werkt op elk scherm en bezoekers zonder
                omwegen naar contact leidt.
              </p>
              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center gap-2 group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-12px_hsl(var(--primary)/0.8)]"
                >
                  Bekijk wat er mogelijk is
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/werk"
                  className="btn-ghost inline-flex items-center gap-1.5 whitespace-nowrap"
                >
                  Bekijk mijn werk
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
