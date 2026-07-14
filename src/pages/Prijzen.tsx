import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const pakketten = [
  {
    naam: "Website",
    prijs: "vanaf €495",
    subtitel: "Eenmalig, exclusief hosting",
    beschrijving:
      "Een professionele website op maat, tot ongeveer €1.200 voor uitgebreidere projecten met meer pagina's of functionaliteiten.",
    features: [
      "Eerste ontwerp gratis",
      "Ontwerp volledig op maat",
      "Drie revisierondes inbegrepen",
      "Snelle en mobielvriendelijke bouw",
      "SEO-basis ingebouwd",
      "Livegang op uw eigen domein",
    ],
    cta: "Vraag offerte aan",
    highlight: false,
  },
  {
    naam: "Hosting & onderhoud",
    prijs: "€37,95",
    subtitel: "Per maand, alles inbegrepen",
    beschrijving:
      "Zorgeloos in de lucht: hosting, back-ups, updates en support in één maandbedrag. Geen technische zorgen.",
    features: [
      "Nederlandse hosting",
      "Dagelijkse back-ups",
      "Beveiligingsupdates",
      "24/7 monitoring",
      "SSL-certificaat",
      "Kleine tekstwijzigingen inbegrepen",
    ],
    cta: "Meer over hosting",
    highlight: true,
  },
  {
    naam: "Microsoft 365",
    prijs: "€12,49",
    subtitel: "Per maand, optioneel extra",
    beschrijving:
      "Zakelijke e-mail op uw eigen domein via Microsoft 365 Business Basic. Inclusief Outlook, Teams en OneDrive.",
    features: [
      "E-mail op eigen domein",
      "Outlook & webmail",
      "Teams-communicatie",
      "OneDrive cloudopslag",
      "Agenda en contacten",
      "Uitbreidbaar per gebruiker",
    ],
    cta: "Vraag informatie aan",
    highlight: false,
  },
];

const Prijzen = () => {
  return (
    <Layout>
      <PageHeader
        label="Prijzen"
        title="Transparante tarieven"
        description="Duidelijke prijzen zonder verborgen kosten. Dankzij de KOR-regeling berekenen wij geen btw — u ziet direct wat u betaalt."
      />

      {/* Pakketten */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pakketten.map((p) => (
              <div
                key={p.naam}
                className={`rounded-2xl p-8 flex flex-col border transition-all duration-300 ${
                  p.highlight
                    ? "bg-foreground text-white border-foreground shadow-xl scale-[1.02]"
                    : "bg-white border-border/60 hover:border-primary/30 hover:shadow-md"
                }`}
              >
                <p
                  className={`text-sm font-medium uppercase tracking-wide mb-3 ${
                    p.highlight ? "text-primary" : "text-primary"
                  }`}
                >
                  {p.naam}
                </p>
                <p
                  className={`text-4xl font-semibold mb-1 ${
                    p.highlight ? "text-white" : "text-foreground"
                  }`}
                >
                  {p.prijs}
                </p>
                <p
                  className={`text-sm mb-6 ${
                    p.highlight ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  {p.subtitel}
                </p>
                <p
                  className={`text-[0.9375rem] leading-relaxed mb-6 ${
                    p.highlight ? "text-white/85" : "text-muted-foreground"
                  }`}
                >
                  {p.beschrijving}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-3 text-[0.9375rem] ${
                        p.highlight ? "text-white/90" : "text-foreground/85"
                      }`}
                    >
                      <span className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium text-[0.9375rem] transition-colors ${
                    p.highlight
                      ? "bg-primary text-white hover:bg-primary-deep"
                      : "border border-border text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {p.cta}
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat zit er inbegrepen */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">
              Standaard inbegrepen
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Wat u altijd van ons krijgt
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { t: "Gratis eerste ontwerp", d: "U ziet zonder risico wat u krijgt voordat u iets betaalt." },
              { t: "Drie revisierondes", d: "Standaard inbegrepen, zodat het ontwerp altijd naar wens is." },
              { t: "Geen btw", d: "Dankzij de KOR-regeling betaalt u het prijskaartje, niets extra's." },
              { t: "Vast aanspreekpunt", d: "U spreekt altijd dezelfde persoon — snel en persoonlijk." },
              { t: "Transparante offerte", d: "Vooraf duidelijk wat u betaalt, geen verrassingen achteraf." },
              { t: "Geen verborgen kosten", d: "Ook na livegang blijven de tarieven overzichtelijk." },
            ].map((i) => (
              <div key={i.t} className="bg-white rounded-xl p-6 border border-border/60">
                <div className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{i.t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{i.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 dark-section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary/5" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
              Vraag een vrijblijvende offerte aan
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Vertel kort wat u nodig heeft, dan ontvangt u binnen één werkdag
              een duidelijk voorstel op maat.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Vraag offerte aan
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Prijzen;
