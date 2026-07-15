import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { GlassCTA } from "@/components/shared/GlassCTA";
import { Reveal } from "@/components/shared/Reveal";
import { ArrowUpRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      "Voor Jayworxx bouwde ik een strakke, internationale website die past bij de rol van executive consultancy in de energietransitie. Donkere kleuren, veel rust in de lay-out en subtiele animaties zorgen voor een premium uitstraling die vertrouwen wekt bij directies en investeerders.",
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
      "Voor Grand Café Vreeburg ontwierp ik een warme, uitnodigende website die de sfeer van het café online voelbaar maakt. Bezoekers vinden meteen de menukaart, openingstijden en reserveringen zonder te hoeven zoeken.",
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
      "Picobello had behoefte aan een frisse, moderne website die aansluit bij de gemoedelijke sfeer van de zaak. Ik bouwde een overzichtelijke site met menu, contactinformatie en een uitstraling waar zowel jong als oud zich welkom voelt.",
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
      "Voor het Hondengezondheidscentrum bouwde ik een rustige, professionele website waar baasjes zich direct op hun gemak voelen. Behandelingen, tarieven en contactmogelijkheden zijn met één klik te vinden.",
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
      "Voor Telefoonwereld Haarlem ontwierp ik een directe, toegankelijke website waar klanten in één oogopslag zien welke reparaties er mogelijk zijn en hoe snel ze terecht kunnen. Vertrouwen en gemak stonden centraal in het ontwerp.",
    highlights: [
      "Duidelijk overzicht van reparaties",
      "Lokale vindbaarheid in Haarlem",
      "Directe contactmogelijkheden",
    ],
  },
];

const getDomain = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      {/* Mockup wrapper with offset accent */}
      <div className="relative">
        {/* Offset accent shadow */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-2xl bg-primary translate-x-1 translate-y-1 transition-all duration-500 ease-out group-hover:translate-x-2 group-hover:translate-y-2 group-hover:bg-primary-deep"
        />

        {/* Browser mockup */}
        <div className="relative rounded-2xl overflow-hidden bg-secondary/60 ring-1 ring-black/5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 ease-out group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 group-hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.25)]">
          {/* Chrome bar */}
          <div className="flex items-center gap-3 px-4 py-2.5 bg-secondary border-b border-black/5">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 h-6 rounded-md bg-background/80 flex items-center justify-center px-3 text-[0.7rem] text-muted-foreground/80 font-medium truncate">
              {getDomain(project.url)}
            </div>
            <div className="w-6" />
          </div>

          {/* Screenshot */}
          <div className="relative aspect-[16/10] overflow-hidden bg-background">
            <img
              src={project.image}
              alt={`Website van ${project.name}`}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 shadow-lg">
              <ArrowUpRight size={16} className="text-foreground" />
            </div>
          </div>
        </div>
      </div>


      {/* Meta below */}
      <div className="pt-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[0.7rem] font-semibold tracking-wider uppercase text-primary"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-semibold text-foreground mb-2 tracking-tight transition-colors duration-200 group-hover:text-primary">
          {project.name}
        </h3>
        <p className="text-muted-foreground text-[0.9375rem] leading-relaxed">
          {project.short}
        </p>
        <span className="inline-flex items-center gap-1.5 mt-4 text-primary font-medium text-sm border-b border-primary/40 pb-0.5 transition-all duration-200 group-hover:gap-2.5 group-hover:border-primary">
          Bekijk de live site
          <ArrowUpRight size={15} />
        </span>
      </div>
    </a>
  );
};



const Werk = () => {
  return (
    <Layout>
      <PageHeader
        label="Geselecteerd werk"
        title="Recente" titleMuted="projecten" titleMutedClassName="text-[hsl(var(--accent-orange-soft))]"
        description="Een selectie van websites die ik mocht ontwerpen en bouwen voor lokale ondernemers, horecazaken, salons en zakelijke professionals. Elk project is op maat gemaakt, met aandacht voor uitstraling, gebruiksgemak en resultaat."
      />

      {/* Intro stats */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10+", label: "Projecten opgeleverd" },
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

      {/* Waarom-sectie in FAQ stijl */}
      <section className="py-24 md:py-32 surface-aurora">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <Reveal>
              <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase">
                Waarom Wietse Webworks
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-5">
                Waarom ondernemers voor Wietse Webworks kiezen
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-muted-foreground leading-relaxed">
                Geen dure bureaus, geen wachttijden, geen onnodige poespas.
                Wel een vast aanspreekpunt, snelle oplevering en een website
                waar u trots op bent.
              </p>
            </Reveal>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  title: "Eerste ontwerp binnen 48 uur",
                  text: "Binnen twee werkdagen ligt er een eerste concept op maat, volledig gratis en vrijblijvend. Zo weet u meteen wat u krijgt.",
                },
                {
                  title: "Twee tot drie weken tot livegang",
                  text: "De gemiddelde doorlooptijd van kennismaking tot een volledig werkende website. Korte lijnen, geen onnodige vertraging.",
                },
                {
                  title: "Altijd hetzelfde aanspreekpunt",
                  text: "U werkt van begin tot eind met dezelfde persoon. Geen callcenter, geen accountmanagers, gewoon direct contact.",
                },
                {
                  title: "Transparante prijzen zonder verrassingen",
                  text: "Vooraf een duidelijke offerte, achteraf precies wat is afgesproken. Geen verborgen kosten of onverwachte facturen.",
                },
                {
                  title: "Ook na livegang bereikbaar",
                  text: "Kleine aanpassingen, vragen of advies? Bel of app gerust. Ondersteuning stopt niet na oplevering.",
                },
              ].map((item, index) => (
                <Reveal key={item.title} delay={index * 60}>
                  <AccordionItem
                    value={`waarom-${index}`}
                    className="border-0 rounded-2xl glass px-6 data-[state=open]:ring-1 data-[state=open]:ring-primary/25 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5 text-[0.9375rem] gap-4 [&>svg]:text-primary [&>svg]:w-5 [&>svg]:h-5">
                      <span className="flex items-center gap-3">
                        <span className="w-1 h-5 rounded-full bg-primary/60 group-data-[state=open]:bg-primary transition-colors" />
                        {item.title}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-4 text-[0.9375rem]">
                      {item.text}
                    </AccordionContent>
                  </AccordionItem>
                </Reveal>
              ))}
            </Accordion>
          </div>
        </div>
      </section>






      <GlassCTA
        eyebrow="Uw bedrijf hierbij?"
        title="Klaar voor een website die uw bedrijf laat groeien?"
        description="Elk project op deze pagina begon met een vrijblijvende kennismaking. Laten we ontdekken wat ik voor uw bedrijf kan betekenen."
        primaryLabel="Start uw project"
      />
    </Layout>
  );
};

export default Werk;
