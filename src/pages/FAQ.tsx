import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { GlassCTA } from "@/components/shared/GlassCTA";
import { Reveal } from "@/components/shared/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wat kost een website bij Wietse Webworks?",
    answer:
      "Een website begint bij €495 en loopt op tot ongeveer €1.200, afhankelijk van de omvang, de gewenste functionaliteiten en het aantal pagina's. Het eerste ontwerp is altijd gratis, zodat u zonder verplichtingen kunt zien wat u krijgt.",
  },
  {
    question: "Wordt er btw berekend?",
    answer:
      "Nee. Wietse Webworks valt onder de KOR-regeling (Kleineondernemersregeling) en berekent daarom geen btw. Alle prijzen op de website zijn definitieve bedragen.",
  },
  {
    question: "Wat kost hosting en onderhoud per maand?",
    answer:
      "Hosting en onderhoud kost €37,95 per maand. Daarin zit alles inbegrepen: hosting op Nederlandse servers, dagelijkse back-ups, beveiligingsupdates, monitoring en doorlopende ondersteuning. Zo hoeft u nergens meer naar om te kijken.",
  },
  {
    question: "Krijg ik ook een zakelijk e-mailadres?",
    answer:
      "Ja, dat kan. Via Microsoft 365 Mail Only krijgt u voor €12,49 per maand (excl. btw) een professioneel e-mailadres op uw eigen domein, inclusief Outlook, agenda en contactpersonen. Dit wordt geleverd via onze partner CloudMonsters.",
  },
  {
    question: "Hoeveel revisierondes zijn inbegrepen?",
    answer:
      "Drie volledige revisierondes zijn standaard inbegrepen. In deze rondes scherp ik het ontwerp en de teksten aan totdat alles exact aansluit bij uw wensen.",
  },
  {
    question: "Hoe lang duurt het voordat mijn website online staat?",
    answer:
      "Gemiddeld staat uw website binnen 2 tot 4 weken online. De doorlooptijd hangt af van de omvang van de website en hoe snel u feedback en materiaal kunt aanleveren.",
  },
  {
    question: "Werken jullie alleen in Haarlem?",
    answer:
      "De focus ligt op Haarlem, Bloemendaal en Heemstede, maar ik werk voor klanten door heel Nederland. Door persoonlijk (digitaal) contact voelt de samenwerking altijd dichtbij.",
  },
  {
    question: "Kan ik zelf de teksten of afbeeldingen later aanpassen?",
    answer:
      "Kleine aanpassingen aan teksten of afbeeldingen kunt u gewoon aan mij doorgeven, die voer ik binnen het onderhoudscontract voor u door. U hoeft dus zelf geen technische kennis te hebben.",
  },
  {
    question: "Wat gebeurt er als ik na livegang extra pagina's wil?",
    answer:
      "Uitbreidingen zijn altijd mogelijk. Voor grotere aanpassingen of extra pagina's maak ik vooraf een duidelijke offerte, zodat u nooit voor verrassingen komt te staan.",
  },
  {
    question: "Is de website ook geschikt voor mobiel?",
    answer:
      "Elke website die ik bouwen is volledig responsive. Dat betekent dat de website er op laptop, tablet én mobiel perfect uitziet en overal snel laadt.",
  },
  {
    question: "Zorgen jullie ook voor de domeinnaam?",
    answer:
      "Ja. Ik kan uw bestaande domeinnaam koppelen of een nieuwe domeinnaam voor u registreren en beheren. Alles wordt voor u geregeld.",
  },
  {
    question: "Bij wie kan ik terecht na livegang?",
    answer:
      "Bij dezelfde persoon als tijdens het hele traject: Wietse zelf. U kunt bellen, WhatsAppen of mailen, geen callcenter, geen wachttijden.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <PageHeader
        label="Veelgestelde vragen"
        title="FAQ"
        description="Antwoorden op de vragen die ondernemers mij het vaakst stellen, over prijzen, doorlooptijd, hosting en samenwerken."
      />

      <section className="py-24 md:py-32 surface-aurora">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <Reveal key={index} delay={index * 50}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-0 rounded-2xl glass px-6 data-[state=open]:ring-1 data-[state=open]:ring-primary/25 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5 text-[0.9375rem] gap-4 [&>svg]:text-primary [&>svg]:w-5 [&>svg]:h-5">
                      <span className="flex items-center gap-3">
                        <span className="w-1 h-5 rounded-full bg-primary/60 group-data-[state=open]:bg-primary transition-colors" />
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-4 text-[0.9375rem]">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Reveal>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <GlassCTA
        eyebrow="Nog vragen?"
        title="Staat uw vraag er niet tussen?"
        description="Stuur gerust een appje of mail. U krijgt altijd persoonlijk antwoord, meestal binnen één werkdag."
        primaryLabel="Stel uw vraag"
      />
    </Layout>
  );
};

export default FAQ;
