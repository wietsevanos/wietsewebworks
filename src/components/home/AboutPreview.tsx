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
    <section className="relative py-24 md:py-32 surface-aurora overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 w-[34rem] h-[34rem] rounded-full bg-[hsl(var(--brand-light))]/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-24 w-[30rem] h-[30rem] rounded-full bg-[hsl(var(--accent-orange))]/10 blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <Reveal direction="right" className="order-2 lg:order-1 flex justify-center">
            <div className="relative group">
              <div className="w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 group-hover:-translate-y-1">
                <img
                  src={portrait.url}
                  alt="Wietse van Os, oprichter Wietse Webworks"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-indigo/15 rounded-2xl -z-10 transition-all duration-500 group-hover:bg-accent-indigo/25 group-hover:-bottom-6 group-hover:-right-6" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent-teal/15 rounded-full -z-10 transition-all duration-500 group-hover:bg-accent-teal/25" />
            </div>
          </Reveal>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase">
                Over Wietse Webworks
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
                Een lokale ondernemer{" "}
                <span className="text-accent-orange">die uw regio kent</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Wietse Webworks is een modern webbureau uit Haarlem, opgericht
                  door Wietse van Os. Ik help horeca, kappers, schoonheids­salons,
                  winkels, praktijken, coaches en ZZP'ers om online serieus voor de
                  dag te komen.
                </p>
                <p>
                  Geen ingewikkelde technische verhalen, wel duidelijke afspraken,
                  professioneel design en hoge kwaliteit voor een eerlijke prijs.
                </p>
              </div>
            </Reveal>
            <ul className="space-y-3 mb-8">
              {usps.map((u, i) => (
                <Reveal key={u} delay={220 + i * 60} as="li">
                  <div className="flex items-start gap-3 text-foreground/85 group cursor-default">
                    <span className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                      <Check className="w-3 h-3 text-primary transition-colors duration-300 group-hover:text-white" />
                    </span>
                    <span className="text-[0.9375rem]">{u}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={480}>
              <Link
                to="/over-mij"
                className="btn-outline-dark inline-flex items-center gap-2 group"
              >
                Leer mij kennen
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
