import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

const services = [
  { title: "Webdesign", description: "Moderne, herkenbare ontwerpen die volledig aansluiten op de uitstraling van uw bedrijf." },
  { title: "Website ontwikkeling", description: "Snelle, veilige websites die op laptop, tablet en mobiel perfect werken." },
  { title: "Hosting", description: "Betrouwbare hosting inclusief monitoring, beveiliging en dagelijkse back-ups." },
  { title: "Onderhoud", description: "Updates, technische controles en support, u hoeft nergens naar om te kijken." },
  { title: "Microsoft 365", description: "Zakelijke e-mail en professionele communicatie via Microsoft 365 Business Basic." },
  { title: "Doorlopende ondersteuning", description: "Ook na livegang blijven wij bereikbaar voor vragen, aanpassingen en advies." },
];

const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
};

export const ServicesPreview = () => {
  return (
    <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-32 w-[34rem] h-[34rem] rounded-full blur-3xl animate-orb-drift-b"
        style={{ background: "radial-gradient(circle at center, hsla(210,95%,55%,0.10), transparent 65%)" }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal className="text-center mb-16">
          <p className="text-primary font-medium mb-4 text-sm tracking-[0.14em] uppercase">
            Wat wij doen
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight">
            Alles onder één dak
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <div
                onMouseMove={handleCardMouseMove}
                className="service-card group h-full"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
                  <div className="w-2 h-2 rounded-full bg-primary transition-transform duration-500 group-hover:scale-125" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-[0.9375rem] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-14" delay={200}>
          <Link
            to="/diensten"
            className="btn-outline-dark inline-flex items-center gap-2 group"
          >
            Bekijk alle diensten
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
