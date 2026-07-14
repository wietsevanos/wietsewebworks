import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { OrangeWaveBackground } from "@/components/shared/OrangeWaveBackground";

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <OrangeWaveBackground />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-2xl">
          <p className="text-white/85 font-medium mb-5 text-sm tracking-wide uppercase animate-fade-up">
            Webbureau uit Haarlem
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-white leading-[1.15] mb-8 animate-fade-up">
            Websites die uw bedrijf online net zo sterk maken als in het echt.
          </h1>
          <p
            className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-xl animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Wietse Webworks ontwerpt en bouwt professionele websites voor lokale
            ondernemers. Meer vertrouwen, meer aanvragen en beter gevonden worden, zonder ingewikkelde techniek en met persoonlijk contact.
          </p>
          <div
            className="flex flex-col sm:flex-row sm:flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto">
              Vraag een offerte aan
              <ArrowRight size={18} />
            </Link>
            <Link to="/diensten" className="btn-outline inline-flex items-center justify-center w-full sm:w-auto">
              Bekijk onze diensten
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
