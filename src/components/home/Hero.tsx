import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { OrangeWaveBackground } from "@/components/shared/OrangeWaveBackground";
import { WhatsAppLink, WhatsAppIcon } from "@/components/shared/WhatsAppLink";

export const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <OrangeWaveBackground />

      {/* subtle floating focal glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] w-[38rem] h-[38rem] rounded-full blur-3xl animate-soft-pulse"
        style={{ background: "radial-gradient(circle at center, hsla(205,100%,65%,0.35), transparent 65%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 py-24">
        <div className="max-w-2xl">
          <p className="text-white/85 font-medium mb-5 text-sm tracking-[0.14em] uppercase animate-fade-up">
            Webbureau uit Haarlem
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-white leading-[1.1] mb-8 animate-fade-up tracking-tight">
            Websites die uw bedrijf online net zo sterk maken als in het echt.
          </h1>
          <p
            className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-xl animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Wietse Webworks ontwerpt en bouwt professionele websites voor lokale
            ondernemers. Meer vertrouwen, meer aanvragen en beter gevonden worden,
            zonder ingewikkelde techniek en met persoonlijk contact.
          </p>
          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <WhatsAppLink className="btn-whatsapp">
              <WhatsAppIcon size={18} />
              Chat direct via WhatsApp
            </WhatsAppLink>
            <Link to="/diensten" className="btn-outline inline-flex items-center gap-2 group">
              Bekijk onze diensten
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* smooth handoff to next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
};
