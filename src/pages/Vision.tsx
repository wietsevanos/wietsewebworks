import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Check } from "lucide-react";

const principles = [
  {
    title: "Finance must be executable, not theoretical",
    description:
      "We structure facilities that work in real trading environments, not just on paper. Every term, covenant and condition is designed for practical application.",
  },
  {
    title: "Facilities must function under real trading pressure",
    description:
      "Trading desks operate in fast-moving markets. Finance solutions must keep pace with operational demands without creating bottlenecks or friction.",
  },
  {
    title: "Risk must be understood legally, financially and operationally",
    description:
      "We approach risk from every angle — the legal implications, the financial exposure and the operational reality. This comprehensive view enables better decisions.",
  },
  {
    title: "Claims must be pursued strategically and relentlessly",
    description:
      "Insurance recoveries require persistence and expertise. We navigate complex claims with strategic precision, protecting trading companies from financial losses.",
  },
];

const Vision = () => {
  return (
    <Layout>
      <PageHeader
        label="Our Philosophy"
        title="Vision"
        description="At TCF Orange, we believe that effective commodity finance must bridge the gap between strategic intent and operational reality."
        backgroundImage="/images/vision-cocoa-bg.webp"
      />

      {/* Principles Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12 text-center">
              Core Principles
            </h2>
            <div className="space-y-10">
              {principles.map((principle, index) => (
                <div key={index} className="flex gap-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Statement */}
      <section className="py-24 md:py-32 dark-section relative overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/images/vision-cta-bg.png')" }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background-dark/50" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
              Built on Experience, Driven by Results
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Every engagement at TCF Orange is guided by these principles. We
              measure our success not by the documents we produce, but by the
              outcomes we deliver for our clients.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Vision;
