import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin } from "lucide-react";

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Dutch", level: "Fluent" },
  { name: "Spanish", level: "Fluent" },
  { name: "Portuguese", level: "Proficient" },
  { name: "French", level: "Proficient" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section with Photo */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo with orange accent */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary rounded-full" />
                <div className="w-72 h-72 md:w-80 md:h-80 overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/christiaan-portrait.png"
                    alt="Christiaan van den Brink"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div>
              <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">
                Founder & Principal Advisor
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
                Christiaan van den Brink
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[0.9375rem]">
                <p>
                  With over 15 years of experience in commodity trade finance and marine insurance, 
                  Christiaan brings deep expertise to every engagement. His career spans structuring 
                  complex financing facilities, advising trading companies on risk management, and 
                  recovering substantial claims from insurers.
                </p>
                <p>
                Previously at Aon as a marine cargo insurance specialist, he developed comprehensive 
                  coverage programs for commodity traders and built extensive claims handling experience. 
                  Before Aon, Christiaan has worked at the commodity finance desks of ABN Amro/Deutsche Bank, 
                  Garantibank International BBVA and Maersk. His legal background underpins a rigorous, 
                  analytical approach to every challenge.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/message"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Get in touch
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-dark inline-flex items-center gap-2"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Background */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">
              Background
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Expertise & Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Trade Finance */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="h-1 bg-primary w-12 mb-6 rounded-full" />
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Commodity Trade Finance
              </h3>
              <div className="space-y-3 text-muted-foreground text-[0.9375rem] leading-relaxed">
                <p>
                  Extensive experience structuring transactional financing facilities for trading 
                  companies across energy, metals and agricultural commodities.
                </p>
                <p>
                  Deep understanding of bank requirements, covenant frameworks and 
                  security structures that enable practical, usable credit lines.
                </p>
              </div>
            </div>

            {/* Insurance */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="h-1 bg-primary w-12 mb-6 rounded-full" />
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Marine Cargo Insurance
              </h3>
              <div className="space-y-3 text-muted-foreground text-[0.9375rem] leading-relaxed">
                <p>
                  Former Aon specialist with deep expertise in designing marine cargo 
                  insurance programs tailored to commodity trading operations.
                </p>
                <p>
                  Comprehensive knowledge of policy structures, coverage triggers and 
                  the specific risks commodity traders face.
                </p>
              </div>
            </div>

            {/* Claims */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="h-1 bg-primary w-12 mb-6 rounded-full" />
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Claims & Recovery
              </h3>
              <div className="space-y-3 text-muted-foreground text-[0.9375rem] leading-relaxed">
                <p>
                  Proven track record in complex marine cargo claims, combining legal 
                  precision with commercial pragmatism to secure recoveries.
                </p>
                <p>
                  Understanding of insurer tactics and coverage disputes enables 
                  strategic, persistent pursuit of client interests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">
                Our Approach
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Independent & Client-Focused
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-center">
              <p>
                TCF Orange operates with complete independence. We maintain no lending 
                relationships, brokerage arrangements or other conflicts that might 
                compromise our advice. Every recommendation serves client interests exclusively.
              </p>
              <p>
                Based in Amsterdam, we combine Dutch directness with international reach, 
                serving commodity traders across Europe and beyond. Our approach emphasizes 
                practical execution — solutions that work in real market conditions, not just on paper.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-24 md:py-32 dark-section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">
              {/* Title */}
              <div className="lg:w-1/3">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-1 h-12 bg-primary rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-semibold text-white">
                    Languages
                  </h2>
                </div>
                <p className="text-white/60 text-sm ml-5">
                  Christiaan speaks five languages
                </p>
              </div>

              {/* Language Grid */}
              <div className="lg:w-2/3">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {languages.map((language) => (
                    <div
                      key={language.name}
                      className="px-6 py-4 border-2 border-primary text-center text-white font-medium"
                    >
                      <div>{language.name}</div>
                      <div className="text-xs text-white/70 font-normal mt-1">{language.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
