import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { OrangeWaveBackground } from "@/components/shared/OrangeWaveBackground";
import heroVideo from "@/assets/hero-video.mp4.asset.json";


export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden py-20 lg:py-28">
      <OrangeWaveBackground />

      <div className="max-w-[92rem] mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          {/* Text column */}
          <div className="lg:col-span-5 max-w-2xl flex flex-col justify-center">
            <p className="text-white/85 font-medium mb-5 text-sm tracking-wide uppercase animate-fade-up">
              WIETSE WEBWORKS
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-white leading-[1.15] mb-8 animate-fade-up">
              Websites die uw bedrijf online net zo sterk maken{" "}
              <span className="text-white/45">als in het echt.</span>
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
              <Link to="/contact" className="btn-glass-blue inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                <span className="inline-flex items-center gap-2">
                  Vraag een offerte aan
                  <ArrowRight size={18} />
                </span>
              </Link>
              <Link to="/werk" className="btn-outline inline-flex items-center justify-center w-full sm:w-auto !rounded-[18px]">
                Bekijk mijn werk
              </Link>
            </div>
          </div>

          {/* Mockup column */}
          <div
            className="hidden lg:flex lg:col-span-7 relative animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>

  );
};

const HeroMockup = () => {
  return (
    <div className="relative group [perspective:1600px] w-full lg:h-full flex">
      {/* Floating offset accent */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-glow to-accent-turquoise translate-x-2 translate-y-3 opacity-70 blur-[2px] transition-all duration-700 ease-out group-hover:translate-x-4 group-hover:translate-y-5"
      />

      {/* Video frame — same footprint as the previous mockup */}
      <div className="relative w-full flex flex-col rounded-2xl overflow-hidden bg-white ring-1 ring-white/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 ease-out group-hover:-translate-y-1.5 group-hover:[transform:translateY(-6px)_rotateX(1.2deg)]">
        <video
          src={heroVideo.url}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110"
        />
      </div>
    </div>
  );
};

