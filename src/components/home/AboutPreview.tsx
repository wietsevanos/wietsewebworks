import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const AboutPreview = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="w-full max-w-md aspect-[4/5] overflow-hidden">
                <img
                  src="/images/christiaan-portrait.png"
                  alt="Christiaan van den Brink"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Subtle orange accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
              Christiaan van den Brink
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Christiaan van den Brink combines legal precision with hands-on
                trade finance execution. His career spans structuring complex
                commodity financing facilities, guiding traders through bank
                approval processes and ensuring the practical usability of
                credit lines in day-to-day transactions.
              </p>
              <p>
                Through his marine cargo insurance expertise developed at Aon,
                he has led numerous complex claims to successful outcomes,
                protecting trading companies from financial losses and insurer
                resistance.
              </p>
            </div>
            <Link
              to="/about"
              className="btn-outline-dark inline-flex items-center gap-2"
            >
              Read full profile
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
