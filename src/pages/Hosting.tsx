import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Link } from "react-router-dom";
import { ArrowRight, Server, Shield, RefreshCw, Activity, LifeBuoy, Database } from "lucide-react";

const items = [
  {
    icon: Server,
    title: "Betrouwbare hosting",
    text: "Uw website draait op snelle Nederlandse servers met hoge uptime en snelle laadtijden.",
  },
  {
    icon: Shield,
    title: "Beveiligingsupdates",
    text: "Wij houden alle software up-to-date en installeren beveiligingspatches zodra ze beschikbaar zijn.",
  },
  {
    icon: Database,
    title: "Dagelijkse back-ups",
    text: "Elke dag maken wij automatisch een back-up, zodat er nooit iets verloren gaat.",
  },
  {
    icon: Activity,
    title: "24/7 monitoring",
    text: "Wij houden uw website continu in de gaten en grijpen direct in als er iets niet klopt.",
  },
  {
    icon: RefreshCw,
    title: "Technisch onderhoud",
    text: "Software-updates en technische controles voeren wij automatisch voor u uit.",
  },
  {
    icon: LifeBuoy,
    title: "Doorlopende support",
    text: "Vragen of kleine tekstwijzigingen? U kunt altijd bij ons terecht, u spreekt altijd dezelfde persoon.",
  },
];

const Hosting = () => {
  return (
    <Layout>
      <PageHeader
        label="Zorgeloos online"
        title="Hosting & onderhoud"
        description="Voor één vast maandbedrag van €37,95 regelen wij alles wat er technisch bij komt kijken. U heeft nergens omkijken naar."
      />

      {/* Wat zit erbij */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">
              Wat zit erin
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Alles inbegrepen, geen kleine lettertjes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((i) => {
              const Icon = i.icon;
              return (
                <div key={i.title} className="service-card">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{i.title}</h3>
                  <p className="text-muted-foreground text-[0.9375rem] leading-relaxed">{i.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prijskaart */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-2xl bg-white border border-border/60 p-10 md:p-12 text-center shadow-sm">
            <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">
              Eén tarief
            </p>
            <p className="text-5xl md:text-6xl font-semibold text-foreground mb-2">
              €37,95
              <span className="text-lg font-normal text-muted-foreground ml-2">/ maand</span>
            </p>
            <p className="text-muted-foreground mb-6">Geen btw dankzij de KOR-regeling</p>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
              Inclusief hosting, dagelijkse back-ups, beveiligingsupdates,
              monitoring en persoonlijke ondersteuning. Maandelijks opzegbaar.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Start met hosting
              <ArrowRight size={18} />
            </Link>
            <p className="mt-6 text-sm text-muted-foreground">
              Wilt u ook een professioneel e-mailadres? Microsoft 365 Business
              Basic kunt u toevoegen voor €12,49 per maand extra.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Hosting;
