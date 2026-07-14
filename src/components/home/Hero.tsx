import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Cargo Container Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/cargo-container-bg.jpg" 
          alt="Orange cargo container" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-white leading-[1.15] mb-8 animate-fade-up">
            Financing & Risk Management for Commodity Traders
          </h1>
          <p
            className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-xl animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Structuring trade finance facilities, executing complex transactions
            and recovering insurance claims with precision and authority.
          </p>
          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link to="/message" className="btn-primary inline-flex items-center gap-2">
              Message
              <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn-outline">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
