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
      "Ook na livegang blijf ik bereikbaar voor vragen, aanpassingen en advies.",
  },
];

export const ServicesPreview = () => {
  const accents = [
    { bg: "bg-white/10", hover: "group-hover:bg-white/15", dot: "bg-[hsl(var(--brand-light))]" },
    { bg: "bg-white/10", hover: "group-hover:bg-white/15", dot: "bg-[hsl(var(--accent-orange))]" },
    { bg: "bg-white/10", hover: "group-hover:bg-white/15", dot: "bg-white" },
    { bg: "bg-white/10", hover: "group-hover:bg-white/15", dot: "bg-[hsl(var(--brand-light))]" },
    { bg: "bg-white/10", hover: "group-hover:bg-white/15", dot: "bg-[hsl(var(--accent-orange-soft))]" },
    { bg: "bg-white/10", hover: "group-hover:bg-white/15", dot: "bg-[hsl(var(--brand-light))]" },
  ];
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-navy">
      {/* Ambient glows for depth */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 w-[36rem] h-[36rem] rounded-full bg-[hsl(var(--brand-light))]/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-24 w-[32rem] h-[32rem] rounded-full bg-[hsl(var(--accent-orange))]/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
            <p className="text-[hsl(var(--accent-orange-soft))] font-medium mb-4 text-sm tracking-[0.2em] uppercase">
              Wat ik doe
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              Alles <span className="text-[hsl(var(--accent-orange-soft))]">onder één dak</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const a = accents[i % accents.length];
            return (
            <Reveal key={service.title} delay={i * 80}>
              <div className="group h-full p-8 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:border-white/20">
                <div className={`w-10 h-10 rounded-full ${a.bg} flex items-center justify-center mb-6 transition-all duration-300 ${a.hover} group-hover:scale-110`}>
                  <div className={`w-2 h-2 rounded-full ${a.dot}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/65 text-[0.9375rem] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
            );
          })}
        </div>


        <Reveal delay={200}>
          <div className="text-center mt-14">
            <Link
              to="/werk"
              className="btn-outline inline-flex items-center gap-2 group"
            >
              Bekijk mijn werk
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
