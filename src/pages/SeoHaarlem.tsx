import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Search,
  Star,
  Gauge,
  Smartphone,
  FileText,
  Link2,
  CheckCircle2,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { GlassCTA } from "@/components/shared/GlassCTA";
import { Reveal } from "@/components/shared/Reveal";

const pillars = [
  {
    icon: MapPin,
    title: "Lokale vindbaarheid",
    text: "Een compleet Google Bedrijfsprofiel, consistente NAW-gegevens en vermeldingen op lokale gidsen zorgen dat u opvalt in Haarlem en omgeving.",
  },
  {
    icon: Search,
    title: "Zoekwoorden met intentie",
    text: "We richten ons op zoektermen als 'kapper Haarlem', 'aannemer Haarlem centrum' of uw eigen dienst plus wijk, zodat u bezoekers krijgt die klant willen worden.",
  },
  {
    icon: Star,
    title: "Reviews en reputatie",
    text: "Actief Google-reviews verzamelen versterkt zowel uw ranking als de klik-doorvoer vanuit de zoekresultaten.",
  },
  {
    icon: Gauge,
    title: "Snelle, technische basis",
    text: "Een website die laadt onder de seconde, met schone code, correcte structuur en meta-informatie die Google direct begrijpt.",
  },
  {
    icon: Smartphone,
    title: "Mobiel-eerst ontwerp",
    text: "Meer dan de helft van uw lokale bezoekers zoekt op de telefoon. De site moet daar perfect werken, niet 'ook'.",
  },
  {
    icon: FileText,
    title: "Content die aansluit",
    text: "Duidelijke dienstpagina's, veelgestelde vragen en lokale content laten Google én uw klanten precies zien wat u doet.",
  },
];

const steps = [
  {
    n: "01",
    title: "Nulmeting",
    text: "We brengen in kaart hoe u nu scoort in Haarlem, op welke zoektermen u zichtbaar bent en waar de directe kansen liggen.",
  },
  {
    n: "02",
    title: "Technische basis",
    text: "Snelheid, structuur, mobiele weergave, meta-tags en schema-markering. De fundering waarop alle SEO rust.",
  },
  {
    n: "03",
    title: "Lokale zichtbaarheid",
    text: "Optimalisatie van uw Google Bedrijfsprofiel, lokale citations, reviewstrategie en pagina's per dienst of wijk.",
  },
  {
    n: "04",
    title: "Content en groei",
    text: "Doorlopend content toevoegen, meten wat werkt en bijsturen. SEO is geen eenmalig project, maar een groeimotor.",
  },
];

const faqs = [
  {
    q: "Wat kost SEO voor een Haarlems bedrijf?",
    a: "Voor lokale ondernemers werk ik met een eenmalige optimalisatie bij oplevering van de website en een doorlopend maandbedrag voor onderhoud en verbetering. De exacte investering hangt af van uw markt en concurrentie in Haarlem, ik reken vooraf een reëel voorstel door.",
  },
  {
    q: "Hoe lang duurt het voordat ik resultaat zie in Google?",
    a: "Lokale zoektermen met lage concurrentie, zoals veel Haarlemse niches, laten vaak binnen 4 tot 12 weken beweging zien. Voor sterk concurrerende zoekwoorden reken ik op 3 tot 6 maanden gestage groei.",
  },
  {
    q: "Ik heb al een website. Kan die geoptimaliseerd worden?",
    a: "Meestal wel. Ik voer een technische audit uit en kijk wat haalbaar is op uw huidige site. Als de basis te zwak is, adviseer ik open en eerlijk of herbouw voordeliger is op de lange termijn.",
  },
  {
    q: "Werkt u alleen voor bedrijven in Haarlem?",
    a: "Nee, ik werk voor ondernemers door heel Nederland. Ik ken de Haarlemse markt alleen goed en zie dat veel lokale ondernemers hier onnodig zichtbaarheid missen.",
  },
];

const SeoHaarlem = () => {
  return (
    <Layout>
      <Helmet>
        <title>SEO bureau Haarlem — beter gevonden worden lokaal | Wietse Webworks</title>
        <meta
          name="description"
          content="Praktische SEO voor lokale ondernemers in Haarlem. Beter vindbaar in Google, meer aanvragen en een website die technisch klopt. Persoonlijk contact, geen jargon."
        />
        <link rel="canonical" href="https://silk-flag-finance.lovable.app/seo-haarlem" />
        <meta property="og:title" content="SEO bureau Haarlem — beter gevonden worden lokaal" />
        <meta
          property="og:description"
          content="Praktische SEO voor lokale ondernemers in Haarlem. Meer aanvragen en beter zichtbaar in Google."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://silk-flag-finance.lovable.app/seo-haarlem" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
      </Helmet>

      <PageHeader
        label="SEO bureau Haarlem"
        title="Lokaal beter gevonden"
        titleMuted="in Google"
        titleMutedClassName="text-[hsl(var(--accent-orange-soft))]"
        description="Praktische, eerlijke SEO voor ondernemers in Haarlem en omgeving. Geen dure abonnementen met vage rapporten, wel een website die technisch klopt en zichtbaar is waar uw klanten zoeken."
      />

      {/* Introductie */}
      <section className="py-20 md:py-28 surface-aurora">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <p className="text-primary font-medium mb-4 text-sm tracking-[0.2em] uppercase">
              SEO voor Haarlemse ondernemers
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-6">
              Waarom lokale SEO in Haarlem het verschil maakt
            </h2>
            <div className="space-y-5 text-[1.0625rem] text-muted-foreground leading-relaxed">
              <p>
                Haarlem is een stad met een sterk lokaal ondernemersklimaat. Van
                specialistische winkels in de Gouden Straatjes tot dienstverleners
                in Schalkwijk, Waarderpolder of Haarlem-Noord: uw klanten zoeken
                vrijwel altijd eerst op Google. Wie daar bovenaan staat, krijgt de
                aanvraag.
              </p>
              <p>
                De concurrentie op lokale zoektermen is in Haarlem vaak minder
                fel dan ondernemers denken. Met een technisch gezonde website,
                een goed ingericht Google Bedrijfsprofiel en heldere pagina's
                per dienst is een plek op pagina één binnen enkele maanden
                realistisch, ook zonder groot marketingbudget.
              </p>
              <p>
                Op deze pagina leest u hoe ik lokale SEO aanpak, wat u zelf kunt
                doen en waar de meeste Haarlemse websites winst laten liggen.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Zes pijlers */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <p className="text-primary font-medium mb-3 text-sm tracking-[0.2em] uppercase">
                Zes pijlers
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                Waar goede lokale SEO uit bestaat
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 60}>
                  <article className="h-full p-8 rounded-2xl bg-secondary/40 ring-1 ring-black/5 hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(15,30,60,0.25)] transition-all duration-300">
                    <div className="w-11 h-11 rounded-full bg-[hsl(var(--accent-orange))]/15 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-[hsl(var(--accent-orange))]" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2.5">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-[0.9375rem] leading-relaxed">
                      {p.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Aanpak */}
      <section className="py-24 md:py-32 surface-aurora-strong">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <p className="text-primary font-medium mb-3 text-sm tracking-[0.2em] uppercase">
                Aanpak in vier stappen
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                Van nulmeting naar duurzame groei
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="h-full p-8 rounded-2xl glass-strong">
                  <p className="text-[hsl(var(--accent-orange))] font-semibold text-sm tracking-[0.2em] mb-3">
                    {s.n}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Reveal>
              <p className="text-primary font-medium mb-3 text-sm tracking-[0.2em] uppercase">
                Quick wins
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                Wat u vandaag zelf al kunt doen
              </h2>
            </Reveal>
          </div>

          <Reveal>
            <ul className="space-y-4">
              {[
                "Claim en vul uw Google Bedrijfsprofiel volledig in: openingstijden, diensten, foto's en categorieën.",
                "Vraag tevreden klanten actief om een Google-review, met een korte, directe link.",
                "Zorg dat uw naam, adres en telefoonnummer overal identiek staan: website, Google, sociale media en gidsen.",
                "Maak per dienst een aparte pagina met een duidelijke titel en een korte, concrete tekst.",
                "Voeg de plaats Haarlem toe aan uw belangrijkste paginatitels, alleen wanneer dat natuurlijk leest.",
                "Controleer de laadsnelheid van uw website op mobiel via PageSpeed Insights, alles boven 3 seconden kost bezoekers.",
                "Link vanuit lokale samenwerkingen (verenigingen, leveranciers, partners) terug naar uw site.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/40 ring-1 ring-black/5"
                >
                  <CheckCircle2
                    className="w-5 h-5 text-[hsl(var(--accent-orange))] shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="text-foreground/85 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 surface-aurora">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <Reveal>
              <p className="text-primary font-medium mb-3 text-sm tracking-[0.2em] uppercase">
                Veelgestelde vragen
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                Veelgestelde vragen over SEO in Haarlem
              </h2>
            </Reveal>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <details className="group rounded-2xl glass p-6 open:shadow-[0_20px_60px_-30px_rgba(15,30,60,0.2)] transition-shadow">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-base md:text-lg font-semibold text-foreground pr-4">
                      {f.q}
                    </h3>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-[hsl(var(--accent-orange))]/15 flex items-center justify-center text-[hsl(var(--accent-orange))] group-open:rotate-45 transition-transform">
                      <Link2 size={14} className="rotate-90" />
                    </span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Vraag een gratis SEO-check aan
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <GlassCTA
        eyebrow="Klaar om beter gevonden te worden?"
        title="Laten we uw zichtbaarheid in Haarlem samen aanpakken"
        description="Ik kijk vrijblijvend met u mee naar uw huidige website, zoektermen en concurrentie in Haarlem. U krijgt een concreet plan, geen verkooppraatje."
        primaryLabel="Plan een kennismaking"
      />
    </Layout>
  );
};

export default SeoHaarlem;
