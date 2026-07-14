import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Landmark, Users, Scale } from "lucide-react";

const partners = [
  {
    icon: Building2,
    title: "Commodity Traders",
    description:
      "We work directly with trading companies, from mid-sized specialists to larger commodity houses. Our role is to strengthen their financing capabilities and protect their commercial interests.",
    relationship: "Advisory and execution support",
  },
  {
    icon: Landmark,
    title: "Banks",
    description:
      "We maintain professional relationships with commodity trade finance banks across key centres. This enables efficient dialogue when structuring facilities and resolving transaction issues.",
    relationship: "Collaborative facility structuring",
  },
  {
    icon: Users,
    title: "Insurance Brokers",
    description:
      "We collaborate with insurance brokers on policy structuring and claims matters. Our claims expertise complements broker relationships, providing clients with comprehensive risk management support.",
    relationship: "Claims coordination and policy review",
  },
  {
    icon: Scale,
    title: "Law Firms",
    description:
      "For matters requiring formal legal advice or litigation, we work alongside specialist law firms. Our practical trade finance knowledge supports legal strategies with commercial context.",
    relationship: "Commercial context and coordination",
  },
];

const Partnerships = () => {
  return (
    <Layout>
      {/* Custom Header with rotated background */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/partnerships-copper-bg.png')" }}
        />
        {/* Light dark overlay only for text readability */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white/80 font-medium mb-4 text-sm tracking-wide uppercase">
              Collaboration
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
              Partnerships
            </h1>
            <p className="text-xl text-white/85 leading-relaxed">
              TCF Orange works as a trusted independent advisor, collaborating with key stakeholders across the commodity finance ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {partners.map((partner) => {
              const Icon = partner.icon;
              return (
                <div
                  key={partner.title}
                  className="service-card flex flex-col"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {partner.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 flex-1 text-[0.9375rem]">
                    {partner.description}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {partner.relationship}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Independence Statement */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Independent Advisory
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our independence is fundamental to our value proposition. We have no
                proprietary lending activities, no exclusive brokerage arrangements
                and no commercial relationships that could compromise the objectivity
                of our advice.
              </p>
              <p>
                This independence enables us to recommend solutions that genuinely
                serve client interests, work effectively with any counterparty and
                provide candid assessment of options and risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 dark-section relative overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/images/coal-bg.png')" }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background-dark/50" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
              Explore collaboration opportunities
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Whether you're a trader seeking financing support, a bank looking
              for deal flow or a professional advisor with complementary
              expertise, we welcome conversation.
            </p>
            <Link
              to="/message"
              className="btn-primary inline-flex items-center gap-2"
            >
              Start a conversation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partnerships;
