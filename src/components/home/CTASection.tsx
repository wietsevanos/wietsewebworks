import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 md:py-32 dark-section relative overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary/5" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase">
            Klaar om te starten?
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
            Vrijblijvend kennismaken over uw nieuwe website
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            Bel, app of mail — u krijgt altijd direct antwoord van Wietse zelf.
            Het eerste ontwerp is gratis en zonder verplichtingen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Start uw project
              <ArrowRight size={18} />
            </Link>
            <a href="tel:+31647872734" className="btn-outline inline-flex items-center gap-2">
              <Phone size={18} />
              06 47 87 27 34
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
