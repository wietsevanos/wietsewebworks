import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Trade Finance Structuring & Advisory",
    subtitle: "From concept to signed documentation",
    description:
      "We design and structure transactional commodity finance facilities tailored to your flows, counterparties and operational reality. Acting as the link between trading companies and banks, we translate strategy into practical, bankable structures and guide the process from initial concept to signed documentation.",
    features: [
      "Facility design & (sub-)limit structuring",
      "Negotiate conditions & obtain credit approval",
      "First drawdowns & Utilisations",
    ],
  },
  {
    title: "Facility Optimisation & Renewal",
    subtitle: "Maximising your credit capacity",
    description:
      "Trade finance facilities often contain hidden capacity or restrictive terms that limit growth. We review your current arrangements, identify improvement opportunities and work alongside lenders to enhance flexibility, optimise headroom and support successful renewals.",
    features: [
      "Facility utilisation analysis",
      "Covenant renegotiation",
      "Headroom optimisation",
      "Renewal strategy and execution",
    ],
  },
  {
    title: "Transactional Support & Execution",
    subtitle: "Hands-on deal support",
    description:
      "We support traders and finance teams in the day to day use of their credit lines. From structuring individual deals to coordinating documentation and bank interaction, we ensure transactions are executed smoothly and efficiently.",
    features: [
      "Deal structuring support",
      "Bank liaison and coordination",
      "Documentation preparation",
      "Transaction closing management",
    ],
  },
  {
    title: "Marine Cargo Insurance",
    subtitle: "",
    description:
      "With extensive experience in marine cargo insurance for commodity traders, we explore and find the best insurance programs that genuinely protect your physical flows. We ensure the policies are aligned with your risk-mitigation needs.",
    features: [
      "Policy structure review",
      "Coverage gap analysis",
      "Broker and market coordination",
      "Annual program optimisation",
    ],
  },
  {
    title: "Complex Claims Handling & Recovery",
    subtitle: "Strategic recovery",
    description:
      "When losses occur, we act decisively to secure recovery from insurers. We manage complex marine cargo claims, coordinate with adjusters and defend your position to achieve the best possible outcome.",
    features: [
      "Claims strategy development",
      "Adjuster and surveyor coordination",
      "Coverage dispute handling",
      "Settlement negotiation",
    ],
  },
  {
    title: "Advisory & Interim Risk Leadership",
    subtitle: "Flexible expertise",
    description:
      "We provide interim and project based support for commodity traders requiring senior expertise in finance and risk. We integrate quickly, strengthen internal processes and support management during periods of change or growth.",
    features: [
      "Interim treasury and finance support",
      "Trade finance advisory projects",
      "Risk and insurance oversight",
      "Team integration and knowledge transfer",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <PageHeader
        label="What We Do"
        title="Services"
        description="Comprehensive advisory services for commodity traders, from financing facility structuring to insurance claims recovery."
        backgroundImage="/images/services-steel-bg.png"
      />

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden"
              >
                {/* Orange top border */}
                <div className="h-1 bg-primary w-full" />
                
                <div className="p-8 flex flex-col flex-1">
                  {/* Subtitle */}
                  <p className="text-primary font-medium text-sm tracking-wide uppercase mb-2">
                    {service.subtitle}
                  </p>
                  
                  {/* Title */}
                  <h2 className="text-xl font-semibold text-foreground mb-4 leading-tight">
                    {service.title}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-[0.9375rem] leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features with orange bullets */}
                  <div className="space-y-3 mb-8 flex-1">
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 dark-section relative overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/images/services-gold-bg.png')" }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background-dark/40" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
              Ready to discuss your needs?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Every trading business has unique requirements. Let's explore how
              TCF Orange can support your objectives.
            </p>
            <Link to="/message" className="btn-primary inline-flex items-center gap-2">
              Get in touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
