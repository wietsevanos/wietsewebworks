import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

const services = [
  {
    title: "Webdesign",
    description:
      "Moderne, herkenbare ontwerpen die volledig aansluiten op de uitstraling van uw bedrijf.",
  },
  {
    title: "Website ontwikkeling",
    description:
      "Snelle, veilige websites die op laptop, tablet en mobiel perfect werken.",
  },
  {
    title: "Hosting",
    description:
      "Betrouwbare hosting inclusief monitoring, beveiliging en dagelijkse back-ups.",
  },
  {
    title: "Onderhoud",
    description:
      "Updates, technische controles en support, u hoeft nergens naar om te kijken.",
  },
  {
    title: "Microsoft 365",
    description:
      "Zakelijke e-mail en professionele communicatie via Microsoft 365 Business Basic.",
  },
  {
    title: "Doorlopende ondersteuning",
    description:
      "Ook na livegang blijven wij bereikbaar voor vragen, aanpassingen en advies.",
  },
];

export const ServicesPreview = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
            <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase">
              Wat wij doen
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Alles onder één dak
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <div className="service-card group h-full hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <div className="w-2 h-2 rounded-full bg-primary" />
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

        <Reveal delay={200}>
          <div className="text-center mt-14">
            <Link
              to="/diensten"
              className="btn-outline-dark inline-flex items-center gap-2 group"
            >
              Bekijk alle diensten
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
