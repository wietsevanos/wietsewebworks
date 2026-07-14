import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { OrangeWaveBackground } from "@/components/shared/OrangeWaveBackground";

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden py-20 lg:py-28">
      <OrangeWaveBackground />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Text column */}
          <div className="lg:col-span-6 max-w-2xl">
            <p className="text-white/85 font-medium mb-5 text-sm tracking-wide uppercase animate-fade-up">
              Webbureau uit Haarlem
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-white leading-[1.15] mb-8 animate-fade-up">
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
              <Link to="/werk" className="btn-outline inline-flex items-center justify-center w-full sm:w-auto">
                Bekijk mijn werk
              </Link>
            </div>
          </div>

          {/* Mockup column */}
          <div
            className="lg:col-span-6 relative animate-fade-up"
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
    <div className="relative group [perspective:1600px]">
      {/* Floating offset accent */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-glow to-accent-turquoise translate-x-2 translate-y-3 opacity-70 blur-[2px] transition-all duration-700 ease-out group-hover:translate-x-4 group-hover:translate-y-5"
      />

      {/* Browser window */}
      <div className="relative rounded-2xl overflow-hidden bg-white ring-1 ring-white/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 ease-out group-hover:-translate-y-1.5 group-hover:[transform:translateY(-6px)_rotateX(1.2deg)]">
        {/* Chrome bar */}
        <div className="flex items-center gap-3 px-4 py-2.5 bg-secondary border-b border-black/5">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 h-6 rounded-md bg-background/80 flex items-center justify-center px-3 text-[0.7rem] text-muted-foreground/80 font-medium truncate">
            uwbedrijf.nl
          </div>
          <div className="w-6" />
        </div>

        {/* Fake site content */}
        <div className="relative bg-white">
          {/* Nav */}
          <div className="flex items-center justify-between px-5 md:px-8 py-3.5 md:py-4 border-b border-black/[0.04]">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-gradient-to-br from-primary to-accent-indigo" />
              <span className="text-[0.75rem] font-semibold tracking-tight text-foreground">
                Uw&nbsp;Merk
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-5">
              {["Diensten", "Werk", "Over", "Contact"].map((l) => (
                <span key={l} className="text-[0.7rem] font-medium text-foreground/60">
                  {l}
                </span>
              ))}
            </div>
            <div className="h-6 px-3 rounded-full bg-foreground/90 text-white text-[0.65rem] font-medium flex items-center">
              Offerte
            </div>
          </div>

          {/* Hero */}
          <div className="relative px-5 md:px-8 py-7 md:py-9 grid grid-cols-12 gap-5 items-center overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent-indigo/[0.06]"
            />
            <div className="col-span-7 relative">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[0.6rem] font-semibold tracking-wider uppercase mb-3">
                <span className="w-1 h-1 rounded-full bg-primary" />
                Nieuw
              </div>
              <div className="space-y-2">
                <div className="h-3 w-[92%] rounded-full bg-foreground/85" />
                <div className="h-3 w-[75%] rounded-full bg-foreground/85" />
                <div className="h-3 w-[55%] rounded-full bg-foreground/25" />
              </div>
              <div className="mt-4 space-y-1.5 max-w-[85%]">
                <div className="h-1.5 rounded-full bg-foreground/15" />
                <div className="h-1.5 rounded-full bg-foreground/15 w-[85%]" />
                <div className="h-1.5 rounded-full bg-foreground/15 w-[60%]" />
              </div>
              <div className="mt-5 flex items-center gap-2.5">
                <div className="h-7 px-3.5 rounded-full bg-primary text-white text-[0.65rem] font-medium flex items-center gap-1.5">
                  Aan de slag
                  <ArrowRight size={11} />
                </div>
                <div className="h-7 px-3.5 rounded-full border border-foreground/15 text-foreground/70 text-[0.65rem] font-medium flex items-center">
                  Meer weten
                </div>
              </div>
            </div>

            <div className="col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-gradient-to-br from-primary via-accent-indigo to-primary-navy shadow-[0_15px_35px_-15px_rgba(0,0,0,0.4)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(0_0%_100%/0.25),transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,hsl(186_80%_60%/0.4),transparent_50%)]" />
                <div className="absolute left-2.5 bottom-2.5 bg-white/95 backdrop-blur rounded-md px-2 py-1.5 shadow-lg flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-gradient-to-br from-accent-teal to-primary" />
                  <div className="space-y-1">
                    <div className="h-1.5 w-12 rounded-full bg-foreground/70" />
                    <div className="h-1 w-8 rounded-full bg-foreground/25" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="px-5 md:px-8 pb-6 md:pb-8 grid grid-cols-3 gap-2.5 md:gap-3">
            {[
              { dot: "bg-primary" },
              { dot: "bg-accent-indigo" },
              { dot: "bg-accent-teal" },
            ].map((c, i) => (
              <div
                key={i}
                className="rounded-lg border border-black/[0.06] bg-white p-2.5 md:p-3 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className={`inline-block w-4 h-4 rounded ${c.dot} mb-1.5`} />
                <div className="space-y-1">
                  <div className="h-1.5 rounded-full bg-foreground/70 w-[80%]" />
                  <div className="h-1 rounded-full bg-foreground/15" />
                  <div className="h-1 rounded-full bg-foreground/15 w-[70%]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
