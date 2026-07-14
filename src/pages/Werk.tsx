import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { GlassCTA } from "@/components/shared/GlassCTA";
import { Reveal } from "@/components/shared/Reveal";
import { ArrowUpRight } from "lucide-react";

import jayworxx from "@/assets/portfolio-jayworxx.jpg.asset.json";
import tcforange from "@/assets/portfolio-tcforange.jpg.asset.json";
import picobello from "@/assets/portfolio-picobello.jpg.asset.json";
import vreeburg from "@/assets/portfolio-vreeburg.jpg.asset.json";
import dehoutenhond from "@/assets/portfolio-dehoutenhond.jpg.asset.json";
import hondengezondheid from "@/assets/portfolio-hondengezondheid.jpg.asset.json";
import elswout from "@/assets/portfolio-elswout.jpg.asset.json";
import rogerstorm from "@/assets/portfolio-rogerstorm.jpg.asset.json";
import telefoonwereld from "@/assets/portfolio-telefoonwereld.jpg.asset.json";

type Project = {
  name: string;
  url: string;
  image: string;
  tags: string[];
  short: string;
  description: string;
  highlights: string[];
};

const projects: Project[] = [
  {
    name: "Jayworxx",
    url: "https://jayworxx.com/",
    image: jayworxx.url,
    tags: ["Webdesign", "Consultancy"],
    short: "Executive Consultancy voor E-Mobility en Renewable Energy",
    description:
      "Voor Jayworxx bouwden wij een strakke, internationale website die past bij de rol van executive consultancy in de energietransitie. Donkere kleuren, veel rust in de lay-out en subtiele animaties zorgen voor een premium uitstraling die vertrouwen wekt bij directies en investeerders.",
    highlights: [
      "Volledig meertalige structuur",
      "Focus op autoriteit en leiderschap",
      "Snelle laadtijden en scherpe typografie",
    ],
  },
  {
    name: "TCF Orange",
    url: "https://tcforange.com/",
    image: tcforange.url,
    tags: ["Webdesign", "Finance"],
    short: "Financing en Risk Management voor commodity traders",
    description:
      "TCF Orange is actief in een complexe wereld van financiering en risicobeheer voor grondstoffenhandel. De website vertaalt deze materie in heldere secties, duidelijke uitleg en een professionele visuele stijl waarin het herkenbare oranje van het merk centraal staat.",
    highlights: [
      "Complexe dienstverlening helder uitgelegd",
      "Sterke merkherkenning met kleurgebruik",
      "Overzichtelijke structuur voor internationale klanten",
    ],
  },
  {
    name: "Grand Café Vreeburg",
    url: "https://grandcafevreeburg.nl/",
    image: vreeburg.url,
    tags: ["Webdesign", "Horeca"],
    short: "Sfeervol grand café in het hart van de stad",
    description:
      "Voor Grand Café Vreeburg ontwierpen wij een warme, uitnodigende website die de sfeer van het café online voelbaar maakt. Bezoekers vinden meteen de menukaart, openingstijden en reserveringen zonder te hoeven zoeken.",
    highlights: [
      "Directe reservering en menu inzage",
      "Warme, sfeervolle beeldtaal",
      "Mobielvriendelijk voor bezoekers onderweg",
    ],
  },
  {
    name: "Snackbar Picobello",
    url: "https://snackbarenlunchroompicobello.nl/",
    image: picobello.url,
    tags: ["Webdesign", "Horeca"],
    short: "Vertrouwde snackbar en lunchroom met veel vaste klanten",
    description:
      "Picobello had behoefte aan een frisse, moderne website die aansluit bij de gemoedelijke sfeer van de zaak. Wij bouwden een overzichtelijke site met menu, contactinformatie en een uitstraling waar zowel jong als oud zich welkom voelt.",
    highlights: [
      "Menukaart snel te bekijken",
      "Toegankelijk ontwerp voor iedere doelgroep",
      "Sterke lokale vindbaarheid",
    ],
  },
  {
    name: "De Houten Hond",
    url: "https://www.dehoutenhond.nl/",
    image: dehoutenhond.url,
    tags: ["Webdesign", "Retail"],
    short: "Ambachtelijke speciaalzaak met karakter",
    description:
      "De Houten Hond is een zaak met karakter en verhaal. De website weerspiegelt dat met warme kleuren, ambachtelijke details en ruimte voor beeld. Klanten krijgen direct het gevoel van kwaliteit dat de zaak ook in het echt uitstraalt.",
    highlights: [
      "Sfeer en verhaal centraal",
      "Rijke productpresentatie",
      "Consistente merkbeleving online en offline",
    ],
  },
  {
    name: "Hondengezondheidscentrum",
    url: "https://hondengezondheidscentrum.nl/",
    image: hondengezondheid.url,
    tags: ["Webdesign", "Zorg"],
    short: "Gespecialiseerde zorg voor honden",
    description:
      "Voor het Hondengezondheidscentrum bouwden wij een rustige, professionele website waar baasjes zich direct op hun gemak voelen. Behandelingen, tarieven en contactmogelijkheden zijn met één klik te vinden.",
    highlights: [
      "Vertrouwenwekkende uitstraling",
      "Duidelijke informatie over behandelingen",
      "Eenvoudig contact opnemen en plannen",
    ],
  },
  {
    name: "Hondentrimsalon Elswout",
    url: "https://hondentrimsalonelswout.nl/",
    image: elswout.url,
    tags: ["Webdesign", "Zorg"],
    short: "Persoonlijke trimsalon met liefde voor honden",
    description:
      "Een warme, persoonlijke website voor een trimsalon waar iedere hond met aandacht wordt behandeld. Het ontwerp is licht, vriendelijk en toont direct de zorg en het vakmanschap achter de salon.",
    highlights: [
      "Vriendelijke, persoonlijke uitstraling",
      "Overzicht van behandelingen en tarieven",
      "Snel en eenvoudig een afspraak maken",
    ],
  },
  {
    name: "Roger & Storm",
    url: "https://www.rogerenstorm.nl/",
    image: rogerstorm.url,
    tags: ["Webdesign", "Beauty"],
    short: "Professionele hair salon met moderne, elegante look",
    description:
      "Roger & Storm is een salon waar stijl en vakmanschap samenkomen. De website is minimalistisch, elegant en volledig gericht op beleving. Grote beelden en veel witruimte laten het werk van de salon voor zich spreken.",
    highlights: [
      "Minimalistisch en elegant ontwerp",
      "Focus op beleving en beeld",
      "Online reserveren zonder omwegen",
    ],
  },
  {
    name: "Telefoonwereld Haarlem",
    url: "https://telefoonwereldhaarlem.nl/",
    image: telefoonwereld.url,
    tags: ["Webdesign", "Retail"],
    short: "Reparatie en verkoop van smartphones in Haarlem",
    description:
      "Voor Telefoonwereld Haarlem ontwierpen wij een directe, toegankelijke website waar klanten in één oogopslag zien welke reparaties er mogelijk zijn en hoe snel ze terecht kunnen. Vertrouwen en gemak stonden centraal in het ontwerp.",
    highlights: [
      "Duidelijk overzicht van reparaties",
      "Lokale vindbaarheid in Haarlem",
      "Directe contactmogelijkheden",
    ],
  },
];

const Werk = () => {
  return (
    <Layout>
      <PageHeader
        label="Geselecteerd werk"
        title="Recente projecten"
        description="Een selectie van websites die wij mochten ontwerpen en bouwen voor lokale ondernemers, horecazaken, salons en zakelijke professionals. Elk project is op maat gemaakt, met aandacht voor uitstraling, gebruiksgemak en resultaat."
      />

      {/* Intro stats */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "9+", label: "Projecten opgeleverd" },
              { value: "100%", label: "Op maat gebouwd" },
              { value: "24/7", label: "Betrouwbare hosting" },
              { value: "1 op 1", label: "Persoonlijk contact" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
                    {s.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24 md:pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 80}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                    <img
                      src={p.image}
                      alt={`Website van ${p.name}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      <ArrowUpRight size={18} className="text-foreground" />
                    </div>
                  </div>

                  <div className="pt-5">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[0.7rem] font-medium tracking-wider uppercase text-primary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 transition-colors duration-200 group-hover:text-primary">
                      {p.name}
                    </h3>
                    <p className="text-muted-foreground text-[0.9375rem] leading-relaxed">
                      {p.short}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies / verhaal achter */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase">
                Het verhaal achter het werk
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                Niet zomaar een website, maar een online visitekaartje dat werkt
              </h2>
            </Reveal>
          </div>

          <div className="space-y-16 md:space-y-24">
            {projects.slice(0, 4).map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative aspect-[4/3] rounded-2xl overflow-hidden bg-background shadow-md"
                  >
                    <img
                      src={p.image}
                      alt={`Website van ${p.name}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                  </a>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[0.7rem] font-medium tracking-wider uppercase text-primary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-tight">
                      {p.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {p.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {p.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-3 text-foreground/85 text-[0.9375rem]"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                    >
                      Bekijk de website
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Aanpak */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Reveal>
              <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase">
                Onze werkwijze
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                Zo pakken wij elk project aan
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Kennismaken",
                text: "We bespreken uw bedrijf, uw doelen en waar u online naartoe wilt.",
              },
              {
                step: "02",
                title: "Ontwerpen",
                text: "U krijgt gratis en vrijblijvend een eerste ontwerp op maat.",
              },
              {
                step: "03",
                title: "Bouwen",
                text: "Wij bouwen uw website snel, veilig en volledig responsive.",
              },
              {
                step: "04",
                title: "Live en onderhoud",
                text: "Na livegang blijven wij bereikbaar voor updates en support.",
              },
            ].map((s, i) => (
              <Reveal key={s.step} delay={i * 80}>
                <div className="service-card h-full group hover:-translate-y-1">
                  <div className="text-primary font-semibold text-sm tracking-wider mb-4">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-[0.9375rem] leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GlassCTA
        eyebrow="Uw bedrijf hierbij?"
        title="Klaar voor een website die uw bedrijf laat groeien?"
        description="Elk project op deze pagina begon met een vrijblijvende kennismaking. Laten we ontdekken wat wij voor uw bedrijf kunnen betekenen."
        primaryLabel="Start uw project"
      />
    </Layout>
  );
};

export default Werk;
