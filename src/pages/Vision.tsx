import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { GlassCTA } from "@/components/shared/GlassCTA";
import { Reveal } from "@/components/shared/Reveal";

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
    title: "Revisies",
    description:
      "Drie revisierondes zijn standaard inbegrepen. Zo scherp ik het ontwerp aan tot het exact past bij uw bedrijf en uw wensen.",
  },
  {
    number: "05",
    title: "Livegang",
    description:
      "Na uw goedkeuring bouw ik de website en plaats deze online op uw eigen domeinnaam. Alles wordt zorgvuldig getest voor lancering.",
  },
  {
    number: "06",
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
        description="In zes duidelijke stappen naar een professionele website. Transparant, persoonlijk en zonder ingewikkelde technische verhalen."
      />

      {/* Steps */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {steps.map((step, i) => (
                <Reveal key={step.number} delay={i * 80}>
                  <div className="group flex gap-6 md:gap-10 p-8 rounded-xl bg-white border border-border/60 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
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
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance block */}
      <section className="py-24 md:py-32 bg-secondary">
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
                  Gemiddeld staat uw nieuwe website binnen 2 tot 4 weken online,
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
