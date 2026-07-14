import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { WhatsAppLink, WhatsAppIcon } from "@/components/shared/WhatsAppLink";
import { Reveal } from "@/components/shared/Reveal";

export const CTASection = () => {
  return (
    <section className="py-24 md:py-32 dark-section relative overflow-hidden">
      {/* Layered depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/5" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[46rem] h-[46rem] rounded-full blur-3xl animate-soft-pulse"
        style={{ background: "radial-gradient(circle at center, hsla(210,95%,55%,0.28), transparent 65%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-primary font-medium mb-4 text-sm tracking-[0.14em] uppercase">
            Klaar om te starten?
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight tracking-tight">
            Vrijblijvend kennismaken over uw nieuwe website
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            App, bel of mail, u krijgt altijd direct antwoord van Wietse zelf.
            Het eerste ontwerp is gratis en zonder verplichtingen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppLink className="btn-whatsapp">
              <WhatsAppIcon size={18} />
              Chat via WhatsApp
            </WhatsAppLink>
            <Link to="/contact" className="btn-outline inline-flex items-center gap-2 group">
              Contactformulier
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
