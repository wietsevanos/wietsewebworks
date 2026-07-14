import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { GlassCTA } from "@/components/shared/GlassCTA";
import { Reveal } from "@/components/shared/Reveal";
import { ArrowUpRight } from "lucide-react";
import { useRef, type MouseEvent } from "react";
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

const ProjectCard = ({ project }: { project: Project }) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
    el.style.setProperty("--rx", `${y}deg`);
    el.style.setProperty("--ry", `${x}deg`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };

  return (
    <a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group block [transform:perspective(1200px)_rotateX(var(--rx,0))_rotateY(var(--ry,0))] transition-transform duration-300 ease-out will-change-transform"
    >
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-secondary shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 group-hover:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.25)] group-hover:-translate-y-1 ring-1 ring-black/[0.04]">
        <img
          src={project.image}
          alt={`Website van ${project.name}`}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 shadow-lg">
          <ArrowUpRight size={18} className="text-foreground" />
        </div>
      </div>

      <div className="pt-5">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[0.7rem] font-medium tracking-wider uppercase text-primary"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-1.5 transition-colors duration-200 group-hover:text-primary">
          {project.name}
        </h3>
        <p className="text-muted-foreground text-[0.9375rem] leading-relaxed">
          {project.short}
        </p>
      </div>
    </a>
  );
};


const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="relative h-full p-8 md:p-10 rounded-2xl border border-white/12 bg-white/[0.04] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-white/25 hover:bg-white/[0.07] hover:-translate-y-1 group/tilt"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover/tilt:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(500px circle at var(--mx,50%) var(--my,50%), hsl(var(--primary) / 0.25), transparent 45%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};

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

      {/* Waarom-sectie in FAQ stijl */}
      <section className="py-24 md:py-32 bg-background">
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
                    className="border-0 rounded-xl bg-muted/30 px-6 data-[state=open]:bg-primary/5 data-[state=open]:ring-1 data-[state=open]:ring-primary/20 transition-all duration-300 hover:bg-muted/50"
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
        description="Elk project op deze pagina begon met een vrijblijvende kennismaking. Laten we ontdekken wat wij voor uw bedrijf kunnen betekenen."
        primaryLabel="Start uw project"
      />
    </Layout>
  );
};

export default Werk;
