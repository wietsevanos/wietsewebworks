import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { GlassCTA } from "@/components/shared/GlassCTA";
import { Reveal } from "@/components/shared/Reveal";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useRef, type MouseEvent } from "react";

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 80}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Premium moving marquee section */}
      <section className="relative py-24 md:py-32 dark-section overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary/5" />
        <div
          aria-hidden
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-primary/15 blur-[140px] opacity-70"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-sm mb-6">
                <Sparkles size={14} className="text-primary-light" />
                <span className="text-white/80 text-xs tracking-wider uppercase font-medium">
                  Werk in beeld
                </span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-6">
                Van lokale ondernemer tot internationaal merk
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-white/70 text-lg leading-relaxed">
                Elke sector heeft zijn eigen taal, sfeer en publiek. Wij vertalen
                die identiteit naar een website die past, opvalt en verkoopt.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Marquee rows */}
        <div className="relative z-10 space-y-6">
          <MarqueeRow
            items={[
              "Horeca",
              "Beauty & Hair",
              "Retail",
              "Consultancy",
              "Zorg voor dieren",
              "Finance",
              "Ambacht",
              "Lokaal ondernemerschap",
            ]}
            direction="left"
          />
          <MarqueeRow
            items={[
              "Roger & Storm",
              "TCF Orange",
              "Jayworxx",
              "Grand Café Vreeburg",
              "De Houten Hond",
              "Picobello",
              "Telefoonwereld Haarlem",
              "Elswout",
            ]}
            direction="right"
            accent
          />
        </div>

        {/* Interactive result cards */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                value: "48u",
                title: "Eerste ontwerp",
                text: "Binnen twee werkdagen ligt er al een concept, gratis en vrijblijvend.",
              },
              {
                value: "3x",
                title: "Meer aanvragen",
                text: "Klanten zien gemiddeld een duidelijke stijging in contactaanvragen na livegang.",
              },
              {
                value: "100%",
                title: "Persoonlijk",
                text: "Altijd dezelfde contactpersoon, van eerste gesprek tot jaren erna.",
              },
            ].map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <TiltCard>
                  <div className="text-5xl md:text-6xl font-semibold text-white mb-4 tracking-tight">
                    {r.value}
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {r.title}
                  </h3>
                  <p className="text-white/65 text-[0.9375rem] leading-relaxed">
                    {r.text}
                  </p>
                </TiltCard>
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
