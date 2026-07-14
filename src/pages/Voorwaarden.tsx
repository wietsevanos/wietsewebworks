import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { GlassCTA } from "@/components/shared/GlassCTA";

const Voorwaarden = () => {
  return (
    <Layout>
      <PageHeader
        label="Juridisch"
        title="Algemene voorwaarden"
        description="Duidelijke afspraken zorgen voor een prettige samenwerking. Hieronder vindt u onze algemene voorwaarden."
      />

      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-10 text-muted-foreground leading-relaxed text-[0.9375rem]">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Definities</h2>
              <p>
                In deze voorwaarden wordt onder "Wietse Webworks" verstaan de
                eenmanszaak van Wietse van Os, gevestigd te Haarlem (KvK 99105578).
                Met "opdrachtgever" wordt de klant bedoeld die een overeenkomst
                aangaat met Wietse Webworks.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Offertes en overeenkomsten</h2>
              <p>
                Alle offertes zijn vrijblijvend en 30 dagen geldig. Een
                overeenkomst komt tot stand na schriftelijke of digitale
                bevestiging van de opdrachtgever.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Prijzen</h2>
              <p>
                Alle prijzen zijn in euro's en exclusief btw is niet van
                toepassing, omdat Wietse Webworks valt onder de
                Kleineondernemersregeling (KOR). Genoemde bedragen zijn de
                definitieve bedragen die u betaalt.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Uitvoering</h2>
              <p>
                Wietse Webworks voert de opdracht naar beste inzicht en vermogen
                uit. Standaard zijn drie revisierondes op het ontwerp
                inbegrepen. Aanvullende wijzigingen worden vooraf besproken.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Aanlevering materiaal</h2>
              <p>
                De opdrachtgever levert tijdig alle benodigde teksten,
                afbeeldingen en overige informatie aan. Vertraging in
                aanlevering kan gevolgen hebben voor de opleverdatum.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Betaling</h2>
              <p>
                Facturen dienen binnen 14 dagen na factuurdatum te worden
                voldaan. Bij hosting- en onderhoudscontracten geldt
                maandelijkse facturatie. Contracten zijn maandelijks opzegbaar.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Eigendom</h2>
              <p>
                Na volledige betaling wordt de website eigendom van de
                opdrachtgever. De onderliggende broncode, ontwerpbestanden en
                gebruikte licenties blijven eigendom van Wietse Webworks tenzij
                schriftelijk anders overeengekomen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Aansprakelijkheid</h2>
              <p>
                Wietse Webworks is niet aansprakelijk voor indirecte schade,
                waaronder gederfde winst of gemiste besparingen. De totale
                aansprakelijkheid is beperkt tot het bedrag dat voor de
                betreffende opdracht is gefactureerd.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Hosting en onderhoud</h2>
              <p>
                Bij hosting- en onderhoudscontracten spant Wietse Webworks zich
                in voor optimale beschikbaarheid, maar kan geen 100% uptime
                garanderen. Back-ups worden dagelijks gemaakt.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Toepasselijk recht</h2>
              <p>
                Op alle overeenkomsten is Nederlands recht van toepassing.
                Geschillen worden voorgelegd aan de bevoegde rechter in het
                arrondissement Noord-Holland.
              </p>
            </div>

            <p className="text-xs text-muted-foreground pt-6 border-t border-border">
              Laatst bijgewerkt op {new Date().toLocaleDateString("nl-NL")}.
            </p>
          </div>
        </div>
      </section>

      <GlassCTA
        eyebrow="Vragen over de voorwaarden?"
        title="Wij denken graag met u mee"
        description="Onduidelijkheden of vragen over deze voorwaarden? Neem contact op, dan lopen wij ze samen door."
        primaryLabel="Neem contact op"
      />
    </Layout>
  );
};

export default Voorwaarden;
