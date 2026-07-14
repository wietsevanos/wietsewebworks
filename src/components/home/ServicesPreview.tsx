import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
{
  title: "Trade Finance Structuring & Advisory",
  description: "Designing bespoke trade finance facilities tailored to your commodity flows."
},
{
  title: "Facility Optimisation & Renewal",
  description: "Reviewing arrangements to enhance flexibility and optimise headroom."
},
{
  title: "Transactional Support & Execution",
  description: "Supporting traders in day-to-day use of their credit lines."
},
{
  title: "Marine Cargo Insurance",
  description: "Find and purchase the best insurance programs that protect your cargo and/or receivables."
},
{
  title: "Complex Claims Handling & Recovery",
  description: "Managing complex marine cargo claims to secure recovery."
},
{
  title: "Advisory & Interim Risk Leadership",
  description: "Interim and project-based support for finance and risk."
}];


export const ServicesPreview = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">Services

          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) =>
          <div
            key={service.title}
            className="service-card group">

              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-[0.9375rem] leading-relaxed">
                {service.description}
              </p>
            </div>
          )}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/services"
            className="btn-outline-dark inline-flex items-center gap-2">

            Explore all services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>);

};