import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";

const Privacy = () => {
  return (
    <Layout>
      <PageHeader
        label="Juridisch"
        title="Privacybeleid"
        description="Wij gaan zorgvuldig om met uw persoonsgegevens. Hieronder leest u welke gegevens wij verzamelen en waarvoor."
      />

      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6 prose-content">
          <div className="space-y-10 text-muted-foreground leading-relaxed text-[0.9375rem]">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Wie zijn wij</h2>
              <p>
                Wietse Webworks, gevestigd te Haarlem, ingeschreven bij de Kamer
                van Koophandel onder nummer 99105578, is verantwoordelijk voor
                de verwerking van uw persoonsgegevens zoals beschreven in deze
                privacyverklaring.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Welke gegevens verwerken wij</h2>
              <p>Wij verwerken de gegevens die u zelf aan ons verstrekt, zoals:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Naam en bedrijfsnaam</li>
                <li>E-mailadres en telefoonnummer</li>
                <li>Correspondentie via e-mail, WhatsApp of het contactformulier</li>
                <li>Gegevens die u aanlevert voor uw website</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Waarvoor gebruiken wij deze gegevens</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Om uw aanvraag of vraag te beantwoorden</li>
                <li>Om onze diensten uit te voeren</li>
                <li>Om te voldoen aan wettelijke administratieve verplichtingen</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Bewaartermijn</h2>
              <p>
                Wij bewaren uw gegevens niet langer dan noodzakelijk voor de
                doelen waarvoor ze zijn verzameld, of zoals wettelijk verplicht.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Delen met derden</h2>
              <p>
                Wij verstrekken uw gegevens uitsluitend aan derden als dit
                nodig is voor de uitvoering van onze overeenkomst (bijvoorbeeld
                aan een hostingpartij) of om te voldoen aan een wettelijke
                verplichting.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Uw rechten</h2>
              <p>
                U heeft het recht uw persoonsgegevens in te zien, te corrigeren
                of te laten verwijderen. Ook kunt u bezwaar maken tegen de
                verwerking. Stuur uw verzoek naar
                <a className="text-primary hover:underline" href="mailto:wietsevanos@gmail.com"> wietsevanos@gmail.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Beveiliging</h2>
              <p>
                Wij nemen passende maatregelen om uw gegevens te beveiligen
                tegen verlies, misbruik of ongeoorloofde toegang.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Contact</h2>
              <p>
                Voor vragen over deze privacyverklaring kunt u contact opnemen
                via <a className="text-primary hover:underline" href="mailto:wietsevanos@gmail.com">wietsevanos@gmail.com</a> of
                bellen naar <a className="text-primary hover:underline" href="tel:+31647872734">06 47 87 27 34</a>.
              </p>
            </div>

            <p className="text-xs text-muted-foreground pt-6 border-t border-border">
              Laatst bijgewerkt op {new Date().toLocaleDateString("nl-NL")}.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
