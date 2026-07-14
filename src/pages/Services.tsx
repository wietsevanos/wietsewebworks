import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { GlassCTA } from "@/components/shared/GlassCTA";
import { Reveal } from "@/components/shared/Reveal";

const services = [
  {
    title: "Webdesign",
    subtitle: "Herkenbaar en professioneel",
    description:
      "Wij maken een modern ontwerp dat volledig aansluit op de uitstraling van uw bedrijf. Uw doelgroep, kleuren, sfeer en boodschap staan centraal. Het eerste ontwerp is altijd gratis, zodat u zonder risico kunt zien hoe uw nieuwe website eruit gaat zien.",
    features: [
      "Op maat gemaakt ontwerp",
      "Passend bij uw huisstijl",
      "Eerste ontwerp gratis",
      "Drie revisierondes inbegrepen",
    ],
  },
  {
    title: "Website ontwikkeling",
    subtitle: "Snel, veilig en mobielvriendelijk",
    description:
      "Wij bouwen uw website met moderne technieken. Snelle laadtijden, sterke beveiliging en een perfect resultaat op laptop, tablet en mobiel. Zo maakt u overal een sterke eerste indruk en scoort u ook goed in Google.",
    features: [
      "Volledig responsive design",
      "Snelle laadtijden",
      "SEO-vriendelijk opgebouwd",
      "Toegankelijk en veilig",
    ],
  },
  {
    title: "Hosting",
    subtitle: "Uw website altijd bereikbaar",
    description:
      "Betrouwbare Nederlandse hosting met monitoring, beveiliging en dagelijkse back-ups. U hoeft geen aparte hostingpartij te regelen, alles loopt via één contactpersoon.",
    features: [
      "Nederlandse servers",
      "Dagelijkse back-ups",
      "24/7 monitoring",
      "SSL-certificaat inbegrepen",
    ],
  },
  {
    title: "Onderhoud",
    subtitle: "Zorgeloos in de lucht",
    description:
      "Wij houden uw website technisch up-to-date. Updates, beveiligings­patches en technische controles voeren wij automatisch voor u uit. Kleine aanpassingen aan teksten of afbeeldingen kunt u gewoon aan ons doorgeven.",
    features: [
      "Software- en pluginupdates",
      "Beveiligingscontroles",
      "Technische support",
      "Kleine tekstwijzigingen inbegrepen",
    ],
  },
  {
    title: "Microsoft 365",
    subtitle: "Professionele zakelijke e-mail",
    description:
      "Communiceer met een e-mailadres op uw eigen domeinnaam via Microsoft 365 Business Basic. Inclusief agenda, cloudopslag en de vertrouwde Microsoft-omgeving. Optioneel te combineren met uw hostingpakket.",
    features: [
      "E-mail op eigen domein",
      "Outlook, Teams en OneDrive",
      "Agenda en contactpersonen",
      "€12,49 per maand extra",
    ],
  },
  {
    title: "Doorlopende ondersteuning",
    subtitle: "Wij blijven uw aanspreekpunt",
    description:
      "Ook na livegang blijft u altijd hetzelfde aanspreekpunt houden. Bel, app of mail wanneer u iets nodig heeft, u hoeft nooit tegen een callcenter aan te praten.",
    features: [
      "Persoonlijk contactpersoon",
      "Snelle reactietijden",
      "Advies over doorontwikkeling",
      "Geen verborgen kosten",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <PageHeader
        label="Wat wij doen"
        title="Diensten"
        description="Van ontwerp en ontwikkeling tot hosting, onderhoud en zakelijke e-mail. Alles wat u nodig heeft voor een professionele online uitstraling, onder één dak."
      />

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 70}>
                <div className="group bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden rounded-xl">
                  <div className="h-1 bg-primary w-full transition-all duration-300 group-hover:h-1.5" />
                  <div className="p-8 flex flex-col flex-1">
                    <p className="text-primary font-medium text-sm tracking-wide uppercase mb-2">
                      {service.subtitle}
                    </p>
                    <h2 className="text-xl font-semibold text-foreground mb-4 leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-[0.9375rem] leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-3 mb-2 flex-1">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 text-muted-foreground text-[0.9375rem]"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GlassCTA
        eyebrow="Benieuwd naar de mogelijkheden?"
        title="Benieuwd wat wij voor uw bedrijf kunnen doen?"
        description="Elke onderneming is anders. Laten we vrijblijvend kennismaken en bespreken hoe uw nieuwe website eruit kan zien."
        primaryLabel="Plan een kennismaking"
      />
    </Layout>
  );
};

export default Services;
