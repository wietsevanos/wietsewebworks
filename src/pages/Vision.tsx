import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { GlassCTA } from "@/components/shared/GlassCTA";
import { Reveal } from "@/components/shared/Reveal";
import { AIBuildMockup } from "@/components/shared/AIBuildMockup";
import { Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Kennismaking",
    description:
      "Een vrijblijvend eerste gesprek, telefonisch, via WhatsApp of op locatie in Haarlem. Ik leer uw bedrijf, uw doelgroep en uw wensen kennen.",
  },
  {
    number: "02",
    title: "Intake",
    description:
      "We bepalen samen de doelen van uw website: welke uitstraling past bij uw bedrijf, wat moet de website opleveren en welke functionaliteiten heeft u nodig.",
  },
  {
    number: "03",
    title: "Ontwerp",
    description:
      "Op basis van de intake maak ik een eerste ontwerp, volledig gratis en zonder verplichtingen. U ziet direct hoe uw nieuwe website eruit gaat zien.",
  },
  {
    number: "04",
    title: "AI-versnelde eerste versie",
    description:
      "Met behulp van geavanceerde AI-ondersteuning realiseer ik in korte tijd een eerste werkende versie van uw website. U krijgt daardoor snel inzicht in de uitstraling, structuur en richting en kunt in een vroeg stadium gericht feedback geven. Alle ontwerpkeuzes, afwerking en kwaliteitscontrole blijven volledig in mijn eigen hand: AI versnelt het proces, vakmanschap bepaalt het resultaat.",
    highlight: true,
  },
  {
    number: "05",
    title: "Revisies",
    description:
      "Drie revisierondes zijn standaard inbegrepen. Doordat de basis er sneller staat, is er meer ruimte voor verfijning, optimalisatie en maatwerk tot het exact past bij uw bedrijf.",
  },
  {
    number: "06",
    title: "Livegang",
    description:
      "Na uw goedkeuring werk ik de website volledig af en plaats deze online op uw eigen domeinnaam. Alles wordt zorgvuldig getest voor lancering.",
  },
  {
    number: "07",
    title: "Onderhoud",
    description:
      "Na livegang blijf ik uw website beveiligen, updaten en monitoren. U heeft één vast aanspreekpunt voor vragen en aanpassingen.",
  },
];

const Vision = () => {
  return (
    <Layout>
      <PageHeader
        label="Van idee tot livegang"
        title="Werkwijze"
        description="In zeven duidelijke stappen naar een professionele website. Transparant, persoonlijk en zonder ingewikkelde technische verhalen."
      />


      {/* Steps */}
      <section className="py-24 md:py-32 surface-aurora">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {steps.map((step, i) => (
                <Reveal key={step.number} delay={i * 80}>
                  {step.highlight ? (
                    <div className="relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-primary/60 via-accent-indigo/40 to-accent-turquoise/60">
                      <div className="relative rounded-[calc(1rem-1px)] bg-background/70 backdrop-blur-xl p-8 md:p-10">
                        <div className="flex items-start gap-6 md:gap-10 mb-8">
                          <div className="flex-shrink-0">
                            <span className="text-4xl md:text-5xl font-semibold bg-gradient-to-br from-primary to-accent-turquoise bg-clip-text text-transparent">
                              {step.number}
                            </span>
                          </div>
                          <div>
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 ring-1 ring-primary/25 text-[0.65rem] font-semibold tracking-wider uppercase text-primary mb-3">
                              <Sparkles size={11} />
                              AI-versneld, handmatig verfijnd
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                              {step.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-[0.9375rem]">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {/* Premium AI build animation */}
                        <div className="mt-2">
                          <AIBuildMockup />
                        </div>

                        <p className="mt-6 text-xs text-muted-foreground/80 leading-relaxed max-w-2xl">
                          Het resultaat: kortere doorlooptijden zonder concessies aan
                          kwaliteit, strategie of persoonlijke begeleiding.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="group flex gap-6 md:gap-10 p-8 rounded-2xl glass hover:-translate-y-0.5 transition-all duration-300">
                      <div className="flex-shrink-0">
                        <span className="text-4xl md:text-5xl font-semibold text-primary/30 group-hover:text-primary transition-colors duration-300">
                          {step.number}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-[0.9375rem]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance block */}
      <section className="py-24 md:py-32 surface-aurora-strong">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Duidelijk, snel en persoonlijk
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  U spreekt tijdens het hele traject altijd dezelfde persoon.
                  Korte lijnen, snelle reacties en geen ingewikkelde technische
                  verhalen. Zo weet u precies waar u aan toe bent.
                </p>
                <p>
                  Gemiddeld staat uw nieuwe website binnen 1 tot 2 weken online,
                  afhankelijk van de omvang en uw eigen input.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <GlassCTA
        eyebrow="Klaar voor stap 1?"
        title="Zullen we vrijblijvend kennismaken?"
        description="Neem contact op voor een vrijblijvende kennismaking. Ik denk graag met u mee."
        primaryLabel="Plan een kennismaking"
      />
    </Layout>
  );
};

export default Vision;
