import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import portrait from "@/assets/wietse-portrait.jpg.asset.json";
import { Reveal } from "@/components/shared/Reveal";

const usps = [
  "Persoonlijk contact met dezelfde persoon",
  "Snelle oplevering en korte lijnen",
  "Transparante prijzen, geen verborgen kosten",
  "Lokale betrokkenheid in Haarlem en omstreken",
];

export const AboutPreview = () => {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <Reveal className="order-2 lg:order-1 flex justify-center">
            <div className="relative group">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2rem] bg-primary/15 blur-2xl opacity-70 animate-soft-pulse -z-10"
              />
              <div className="w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:-translate-y-1">
                <img
                  src={portrait.url}
                  alt="Wietse van Os, oprichter Wietse Webworks"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10 transition-transform duration-700 group-hover:translate-x-1 group-hover:translate-y-1" />
            </div>
          </Reveal>

          {/* Content */}
          <Reveal className="order-1 lg:order-2" delay={120}>
            <p className="text-primary font-medium mb-4 text-sm tracking-[0.14em] uppercase">
              Over Wietse Webworks
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight tracking-tight">
              Een lokale ondernemer die uw regio kent
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Wietse Webworks is een modern webbureau uit Haarlem, opgericht
                door Wietse van Os. Wij helpen horeca, kappers, schoonheids­salons,
                winkels, praktijken, coaches en ZZP'ers om online serieus voor de
                dag te komen.
              </p>
              <p>
                Geen ingewikkelde technische verhalen, wel duidelijke afspraken,
                professioneel design en hoge kwaliteit voor een eerlijke prijs.
              </p>
            </div>
            <ul className="space-y-3 mb-8">
              {usps.map((u, i) => (
                <Reveal as="li" key={u} delay={200 + i * 60} y={10}>
                  <div className="flex items-start gap-3 text-foreground/85">
                    <span className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300 hover:bg-primary/20">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    <span className="text-[0.9375rem]">{u}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Link
              to="/over-mij"
              className="btn-outline-dark inline-flex items-center gap-2 group"
            >
              Leer mij kennen
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
