import { Reveal } from "@/components/shared/Reveal";

export const Positioning = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase">
              Onze aanpak
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8 leading-tight">
              Online net zo professioneel overkomen als in het echt
            </h2>
          </Reveal>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <Reveal delay={160}>
              <p>
                Veel lokale ondernemers hebben een verouderde website, een trage
                website of helemaal geen professionele online uitstraling. Terwijl
                een sterke website juist het verschil maakt tussen een bezoeker
                die twijfelt en een klant die contact opneemt.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p>
                Wij bouwen websites die vertrouwen uitstralen, beter gevonden
                worden en actief bijdragen aan meer aanvragen. Alles onder één
                dak, ontwerp, ontwikkeling, hosting en onderhoud, met korte
                lijnen, transparante prijzen en persoonlijk contact.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
