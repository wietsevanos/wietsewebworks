import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const usps = [
  "Persoonlijk contact met dezelfde persoon",
  "Snelle oplevering en korte lijnen",
  "Transparante prijzen, geen verborgen kosten",
  "Lokale betrokkenheid in Haarlem en omstreken",
];

export const AboutPreview = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual block */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="w-full max-w-md aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border border-primary/10 flex items-center justify-center overflow-hidden">
                <div className="text-center px-8">
                  <p className="text-6xl md:text-7xl font-semibold text-primary/70 leading-none">
                    WW
                  </p>
                  <p className="mt-6 text-foreground/70 font-medium">
                    Wietse Webworks
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Haarlem</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase">
              Over Wietse Webworks
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
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
              {usps.map((u) => (
                <li key={u} className="flex items-start gap-3 text-foreground/85">
                  <span className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span className="text-[0.9375rem]">{u}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/over-mij"
              className="btn-outline-dark inline-flex items-center gap-2"
            >
              Leer mij kennen
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
