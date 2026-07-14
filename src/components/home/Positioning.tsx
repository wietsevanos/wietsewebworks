import { Reveal } from "@/components/shared/Reveal";

export const Positioning = () => {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-40 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full blur-3xl animate-orb-drift-a"
        style={{ background: "radial-gradient(circle at center, hsla(210,95%,55%,0.08), transparent 65%)" }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-medium mb-4 text-sm tracking-[0.14em] uppercase">
            Onze aanpak
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8 leading-tight tracking-tight">
            Online net zo professioneel overkomen als in het echt
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Veel lokale ondernemers hebben een verouderde website, een trage
              website of helemaal geen professionele online uitstraling. Terwijl
              een sterke website juist het verschil maakt tussen een bezoeker
              die twijfelt en een klant die contact opneemt.
            </p>
            <p>
              Wij bouwen websites die vertrouwen uitstralen, beter gevonden
              worden en actief bijdragen aan meer aanvragen. Alles onder één
              dak, ontwerp, ontwikkeling, hosting en onderhoud, met korte
              lijnen, transparante prijzen en persoonlijk contact.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
