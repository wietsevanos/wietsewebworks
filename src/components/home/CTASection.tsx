import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 md:py-32 dark-section relative overflow-hidden">
      {/* Background image with low opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: "url('/images/grondstoffen-bg.webp')" }}
      />
      {/* Dark overlay to maintain readability */}
      <div className="absolute inset-0 bg-background-dark/40" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
            Ready to discuss your needs?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            Every trading business has unique requirements. Let's explore how
            Orange TCF can support your objectives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
              className="btn-outline"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
