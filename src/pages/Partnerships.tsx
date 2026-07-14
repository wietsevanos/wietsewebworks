import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  UtensilsCrossed,
  Scissors,
  Sparkles,
  Store,
  Dumbbell,
  Stethoscope,
  HeartHandshake,
  Briefcase,
  Users,
  Building2,
} from "lucide-react";

const doelgroepen = [
  { icon: UtensilsCrossed, title: "Horeca", description: "Restaurants, cafés en lunchrooms met een menukaart, foto's en reserveringsknop." },
  { icon: Scissors, title: "Kappers", description: "Overzichtelijke websites met openingstijden, prijslijst en online afspraken." },
  { icon: Sparkles, title: "Schoonheidssalons", description: "Sfeervolle sites die uw behandelingen en aanbod uitstralen." },
  { icon: Store, title: "Winkels", description: "Lokale winkels die online gevonden willen worden en klanten willen aantrekken." },
  { icon: Dumbbell, title: "Sportbedrijven", description: "Sportscholen, personal trainers en yoga-studio's met roosters en aanmeldingen." },
  { icon: Stethoscope, title: "Praktijken", description: "Fysio, tandarts, huisarts of therapie — vertrouwenwekkend en informatief." },
  { icon: HeartHandshake, title: "Coaches", description: "Persoonlijke websites die uw verhaal, aanpak en aanbod krachtig neerzetten." },
  { icon: Briefcase, title: "ZZP'ers", description: "Betaalbare, professionele websites die direct aanvragen opleveren." },
  { icon: Users, title: "Lokale dienstverleners", description: "Van hovenier tot administratiekantoor — duidelijk en betrouwbaar in beeld." },
  { icon: Building2, title: "MKB-bedrijven", description: "Websites voor kleine en middelgrote bedrijven met meerdere diensten of vestigingen." },
];

const resultaten = [
  { metric: "100%", label: "Persoonlijk contact met Wietse zelf" },
  { metric: "2–4 wk", label: "Gemiddelde doorlooptijd tot livegang" },
  { metric: "3", label: "Revisierondes standaard inbegrepen" },
  { metric: "0%", label: "Btw dankzij de KOR-regeling" },
];

const Partnerships = () => {
  return (
    <Layout>
      <PageHeader
        label="Voor wie wij werken"
        title="Werk"
        description="Wij bouwen websites voor lokale ondernemers in Haarlem, Bloemendaal en Heemstede — en voor klanten door heel Nederland."
      />

      {/* Doelgroepen Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase">
              Onze doelgroep
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Voor ondernemers die serieus online willen groeien
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doelgroepen.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.title} className="service-card flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {d.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[0.9375rem]">
                    {d.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cijfers */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Duidelijke afspraken, duidelijke resultaten
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Wij houden het simpel — geen kleine lettertjes en geen verborgen kosten.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {resultaten.map((r) => (
              <div
                key={r.label}
                className="bg-white rounded-xl p-8 text-center border border-border/60"
              >
                <p className="text-4xl md:text-5xl font-semibold text-primary mb-3">
                  {r.metric}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {r.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 dark-section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary/5" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
              Herkent u zich in één van deze branches?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Neem contact op — dan bespreken we vrijblijvend hoe uw nieuwe
              website eruit kan zien en wat u ermee kunt bereiken.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Start een gesprek
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partnerships;
