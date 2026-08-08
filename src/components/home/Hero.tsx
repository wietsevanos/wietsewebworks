import { useEffect, useState, CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MousePointer2 } from "lucide-react";
import { OrangeWaveBackground } from "@/components/shared/OrangeWaveBackground";

const HERO_LOOP_MS = 8000;
const d = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

type SiteTheme = {
  url: string;
  badge: string;
  nav: string[];
  brand: string;
  banner: string;
  accent: string;
  tiles: [string, string, string];
};

const SITE_THEMES: SiteTheme[] = [
  {
    url: "hetlokalerestaurant.nl",
    badge: "Menukaart",
    nav: ["Menu", "Reserveren", "Over", "Contact"],
    brand: "linear-gradient(135deg, hsl(214 85% 55%), hsl(224 65% 30%))",
    banner:
      "linear-gradient(135deg, hsl(220 55% 22%) 0%, hsl(224 60% 14%) 55%, hsl(214 70% 28%) 100%)",
    accent: "hsl(24 92% 56%)",
    tiles: ["hsl(214 85% 55%)", "hsl(204 70% 48%)", "hsl(24 92% 56%)"],
  },
  {
    url: "buurtwinkel.nl",
    badge: "Nieuw",
    nav: ["Shop", "Aanbod", "Over", "Contact"],
    brand: "linear-gradient(135deg, hsl(204 80% 52%), hsl(220 70% 32%))",
    banner:
      "linear-gradient(135deg, hsl(214 65% 32%) 0%, hsl(224 62% 15%) 60%, hsl(206 60% 26%) 100%)",
    accent: "hsl(204 85% 62%)",
    tiles: ["hsl(204 80% 52%)", "hsl(214 75% 45%)", "hsl(24 92% 56%)"],
  },
  {
    url: "kapsalonstijl.nl",
    badge: "Afspraak",
    nav: ["Behandelingen", "Prijzen", "Team", "Contact"],
    brand: "linear-gradient(135deg, hsl(214 80% 58%), hsl(24 90% 55%))",
    banner:
      "linear-gradient(135deg, hsl(224 58% 20%) 0%, hsl(222 62% 13%) 60%, hsl(212 55% 26%) 100%)",
    accent: "hsl(24 92% 58%)",
    tiles: ["hsl(24 92% 56%)", "hsl(214 80% 55%)", "hsl(204 65% 48%)"],
  },
  {
    url: "adviesbureau.nl",
    badge: "Zakelijk",
    nav: ["Diensten", "Werk", "Over", "Contact"],
    brand: "linear-gradient(135deg, hsl(214 75% 48%), hsl(224 70% 28%))",
    banner:
      "linear-gradient(135deg, hsl(224 60% 20%) 0%, hsl(222 62% 12%) 55%, hsl(214 55% 24%) 100%)",
    accent: "hsl(214 85% 62%)",
    tiles: ["hsl(214 75% 48%)", "hsl(204 70% 52%)", "hsl(24 92% 56%)"],
  },
];


export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-[calc(80px+2rem)] pb-20 lg:py-28">
      <OrangeWaveBackground />

      <div className="max-w-[92rem] mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          {/* Text column */}
          <div className="lg:col-span-5 max-w-2xl flex flex-col justify-center">
            <p className="text-[hsl(var(--accent-orange))] font-medium mb-5 text-sm tracking-wide uppercase animate-fade-up">
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
            className="flex lg:col-span-7 relative animate-fade-up"
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
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), HERO_LOOP_MS);
    return () => clearInterval(id);
  }, []);

  const theme = SITE_THEMES[tick % SITE_THEMES.length];

  return (
    <div className="relative group [perspective:1600px] w-full lg:h-full flex flex-col items-center justify-center pb-8 lg:pb-0">
      {/* Ambient floor shadow */}
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 bottom-2 lg:bottom-[-18px] w-[72%] h-8 rounded-[50%] bg-black/55 blur-2xl opacity-70"
      />

      {/* Device group */}
      <div className="relative w-full flex flex-col items-center">
        {/* Monitor (floats gently) */}
        <div
          className="relative w-full flex flex-col items-center"
          style={{ animation: "monitorFloat 7s ease-in-out infinite" }}
        >
          {/* Chassis */}
          <div
            className="relative w-full rounded-[16px] md:rounded-[20px] p-[8px] md:p-[10px] transition-transform duration-700 ease-out group-hover:-translate-y-1"
            style={{
              background:
                "linear-gradient(160deg, hsl(220 18% 82%) 0%, hsl(218 16% 68%) 22%, hsl(220 14% 55%) 55%, hsl(222 18% 42%) 100%)",
              boxShadow:
                "0 1px 0 0 hsl(0 0% 100% / 0.55) inset, 0 -2px 6px 0 hsl(224 40% 12% / 0.4) inset, 0 40px 90px -32px hsl(224 64% 6% / 0.85), 0 8px 20px -10px hsl(224 64% 6% / 0.6)",
            }}
          >
            {/* Thin dark bezel */}
            <div
              className="relative rounded-[10px] md:rounded-[12px] p-[5px] md:p-[7px]"
              style={{
                background:
                  "linear-gradient(180deg, hsl(224 22% 11%) 0%, hsl(224 24% 8%) 100%)",
                boxShadow:
                  "0 0 0 1px hsl(224 30% 4% / 0.9), 0 2px 6px 0 hsl(0 0% 0% / 0.5) inset",
              }}
            >
              {/* Screen */}
              <div className="relative rounded-[6px] md:rounded-[8px] overflow-hidden bg-white">
                <div className="relative w-full flex flex-col bg-white transition-transform duration-700 ease-out group-hover:-translate-y-0.5">
                  {/* Chrome bar */}
                  <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-2.5 bg-secondary border-b border-black/5">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#febc2e]" />
                      <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex-1 h-5 md:h-6 rounded-md bg-background/80 flex items-center justify-center px-3 text-[0.6rem] md:text-[0.7rem] text-muted-foreground/80 font-medium truncate">
                      {theme.url}
                    </div>
                    <div className="w-4 md:w-6" />
                  </div>

                  {/* Fake site content — rebuilds every cycle via key */}
                  <div key={tick} className="relative bg-white animate-fade-in">
                    {/* Nav */}
                    <div className="flex items-center justify-between px-4 md:px-8 py-2.5 md:py-4 border-b border-black/[0.04]">
                      <div className="flex items-center gap-2 hero-anim-l" style={d(80)}>
                        <span
                          className="w-4 h-4 md:w-5 md:h-5 rounded-md"
                          style={{ background: theme.brand }}
                        />
                        <span className="text-[0.65rem] md:text-[0.75rem] font-semibold tracking-tight text-foreground">
                          Uw&nbsp;Merk
                        </span>
                      </div>
                      <div className="hidden sm:flex items-center gap-4 md:gap-5">
                        {theme.nav.map((l, i) => (
                          <span
                            key={l}
                            className="text-[0.65rem] md:text-[0.7rem] font-medium text-foreground/60 hero-anim"
                            style={d(200 + i * 90)}
                          >
                            {l}
                          </span>
                        ))}
                      </div>
                      <div
                        className="h-5 md:h-6 px-2.5 md:px-3 rounded-full bg-foreground/90 text-white text-[0.6rem] md:text-[0.65rem] font-medium flex items-center hero-anim-r"
                        style={d(620)}
                      >
                        Offerte
                      </div>
                    </div>

                    {/* Wide hero banner */}
                    <div
                      className="relative aspect-[16/5.5] overflow-hidden"
                      style={{ background: theme.banner }}
                    >
                      <div
                        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(0_0%_100%/0.24),transparent_55%),radial-gradient(circle_at_85%_90%,hsl(186_80%_60%/0.32),transparent_50%),radial-gradient(circle_at_65%_10%,hsl(24_90%_60%/0.22),transparent_55%)]"
                        style={{
                          backgroundSize: "180% 180%, 200% 200%, 220% 220%",
                          animation: "heroGradientDrift 14s ease-in-out infinite",
                        }}
                      />

                      {/* Hero copy overlay */}
                      <div className="absolute inset-0 flex flex-col justify-center px-5 md:px-10 max-w-[62%]">
                        <div
                          className="inline-flex w-fit items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/15 backdrop-blur text-white text-[0.5rem] md:text-[0.55rem] font-semibold tracking-wider uppercase mb-2 md:mb-2.5 hero-anim"
                          style={d(900)}
                        >
                          <span
                            className="w-1 h-1 rounded-full"
                            style={{ background: theme.accent }}
                          />
                          {theme.badge}
                        </div>
                        <div className="space-y-1 md:space-y-1.5">
                          <div className="h-2 md:h-2.5 w-[85%] rounded-full bg-white/90 hero-bar" style={d(1050)} />
                          <div className="h-2 md:h-2.5 w-[65%] rounded-full bg-white/90 hero-bar" style={d(1200)} />
                        </div>
                        <div className="mt-2 md:mt-3 space-y-1 max-w-[75%]">
                          <div className="h-1 rounded-full bg-white/40 hero-bar" style={d(1400)} />
                          <div className="h-1 rounded-full bg-white/40 w-[80%] hero-bar" style={d(1520)} />
                        </div>
                        <div
                          className="mt-3 md:mt-4 h-5 md:h-6 w-fit px-2.5 md:px-3 rounded-full bg-white text-[0.55rem] md:text-[0.6rem] font-semibold flex items-center gap-1.5 hero-anim-pop"
                          style={{ ...d(1750), color: theme.accent }}
                        >
                          Aan de slag
                          <ArrowRight size={10} />
                        </div>
                      </div>

                      {/* Floating tile */}
                      <div
                        className="absolute right-3 md:right-4 bottom-3 md:bottom-4 bg-white/95 backdrop-blur rounded-md px-2 py-1.5 shadow-lg flex items-center gap-2 hero-anim-pop"
                        style={d(2050)}
                      >
                        <span
                          className="w-4 h-4 md:w-5 md:h-5 rounded"
                          style={{ background: theme.brand }}
                        />
                        <div className="space-y-1">
                          <div className="h-1.5 w-10 md:w-14 rounded-full bg-foreground/70" />
                          <div className="h-1 w-7 md:w-9 rounded-full bg-foreground/25" />
                        </div>
                      </div>
                    </div>

                    {/* Content section under banner */}
                    <div className="px-4 md:px-8 py-3 md:py-4">
                      <div className="flex items-end justify-between mb-3 md:mb-4">
                        <div className="space-y-1.5">
                          <div className="h-2 w-20 md:w-24 rounded-full bg-foreground/80 hero-bar" style={d(2350)} />
                          <div className="h-1.5 w-32 md:w-40 rounded-full bg-foreground/20 hero-bar" style={d(2470)} />
                        </div>
                        <div
                          className="h-1 w-12 rounded-full hidden md:block hero-bar"
                          style={{ ...d(2600), background: theme.accent, opacity: 0.7 }}
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-2 md:gap-3">
                        {theme.tiles.map((dot, i) => (
                          <div
                            key={`${tick}-${i}`}
                            className="rounded-lg border border-black/[0.06] bg-white p-2 md:p-3 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-md hero-anim"
                            style={d(2800 + i * 180)}
                          >
                            <span
                              className="inline-block w-3.5 h-3.5 md:w-4 md:h-4 rounded mb-1.5"
                              style={{ background: dot }}
                            />
                            <div className="space-y-1">
                              <div className="h-1.5 rounded-full bg-foreground/70 w-[80%] hero-bar" style={d(3050 + i * 180)} />
                              <div className="h-1 rounded-full bg-foreground/15 hero-bar" style={d(3150 + i * 180)} />
                              <div className="h-1 rounded-full bg-foreground/15 w-[70%] hero-bar" style={d(3250 + i * 180)} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Floating cursor — moves and taps subtly */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute top-0 left-0 z-20 hidden md:block"
                      style={{
                        animation: `heroCursor ${HERO_LOOP_MS}ms cubic-bezier(0.65, 0.05, 0.36, 1) infinite`,
                        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.25))",
                      }}
                    >
                      <div className="relative">
                        <MousePointer2
                          size={18}
                          className="text-white"
                          fill="hsl(var(--foreground))"
                          strokeWidth={1.5}
                        />
                        <span
                          className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-primary/40"
                          style={{
                            animation: "heroClickPing 0.6s ease-out infinite",
                            animationDelay: "2.2s",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slow-moving screen reflection */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 overflow-hidden rounded-[6px] md:rounded-[8px]"
                >
                  <div
                    className="absolute -inset-y-8 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    style={{ animation: "monitorSheen 9s ease-in-out infinite" }}
                  />
                </div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[6px] md:rounded-[8px] ring-1 ring-inset ring-black/20"
                />
              </div>
            </div>

            {/* Chin highlight */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-8 bottom-[3px] h-[2px] rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.35), transparent)" }}
            />
          </div>

          {/* Aluminium neck */}
          <div
            className="relative w-20 md:w-28 h-7 md:h-10"
            style={{
              background:
                "linear-gradient(90deg, hsl(220 14% 42%) 0%, hsl(218 16% 72%) 22%, hsl(220 18% 84%) 42%, hsl(218 14% 60%) 70%, hsl(222 18% 36%) 100%)",
              clipPath: "polygon(14% 0, 86% 0, 96% 100%, 4% 100%)",
              boxShadow: "0 10px 24px -14px hsl(224 64% 6% / 0.9)",
            }}
          />
          {/* Aluminium base */}
          <div
            className="relative w-40 md:w-56 h-2 md:h-2.5 rounded-full"
            style={{
              background:
                "linear-gradient(180deg, hsl(220 18% 80%) 0%, hsl(220 14% 58%) 45%, hsl(222 20% 34%) 100%)",
              boxShadow:
                "0 1px 0 0 hsl(0 0% 100% / 0.4) inset, 0 14px 30px -10px hsl(224 64% 6% / 0.85)",
            }}
          />
        </div>

        {/* Smartphone — floats subtly in front of the monitor */}
        <div
          aria-hidden
          className="absolute right-1 md:right-4 lg:right-6 bottom-3 lg:bottom-6 w-[70px] sm:w-[88px] lg:w-[116px] z-20"
          style={{ animation: "phoneFloat 6s ease-in-out infinite" }}
        >
          <div
            className="relative rounded-[14px] lg:rounded-[20px] p-[3px] lg:p-[4px]"
            style={{
              background:
                "linear-gradient(150deg, hsl(220 16% 74%) 0%, hsl(220 14% 48%) 45%, hsl(222 20% 32%) 100%)",
              boxShadow:
                "0 1px 0 0 hsl(0 0% 100% / 0.5) inset, 0 26px 50px -20px hsl(224 64% 6% / 0.9)",
            }}
          >
            <div
              className="relative rounded-[11px] lg:rounded-[16px] overflow-hidden bg-white"
              style={{ boxShadow: "0 0 0 1.5px hsl(224 26% 8%)" }}
            >
              {/* Notch */}
              <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-8 lg:w-12 h-[5px] lg:h-[7px] rounded-full bg-[hsl(224_26%_8%)] z-10" />

              <div key={tick} className="aspect-[9/19] flex flex-col animate-fade-in">
                {/* Mobile hero */}
                <div
                  className="relative px-2 pt-4 pb-3 lg:px-3 lg:pt-5 lg:pb-4"
                  style={{ background: theme.banner }}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <span
                      className="w-3 h-3 lg:w-4 lg:h-4 rounded-[4px] hero-anim-l"
                      style={{ ...d(200), background: theme.brand }}
                    />
                    <span className="flex flex-col gap-[2px] hero-anim-r" style={d(300)}>
                      <span className="block w-3 lg:w-4 h-[1.5px] rounded-full bg-white/70" />
                      <span className="block w-3 lg:w-4 h-[1.5px] rounded-full bg-white/70" />
                      <span className="block w-3 lg:w-4 h-[1.5px] rounded-full bg-white/70" />
                    </span>
                  </div>
                  <div className="space-y-1 lg:space-y-1.5">
                    <div className="h-1.5 lg:h-2 w-[90%] rounded-full bg-white/90 hero-bar" style={d(900)} />
                    <div className="h-1.5 lg:h-2 w-[62%] rounded-full bg-white/70 hero-bar" style={d(1050)} />
                  </div>
                  <div
                    className="mt-2 lg:mt-3 h-4 lg:h-5 w-[72%] rounded-full bg-white flex items-center justify-center text-[0.4rem] lg:text-[0.45rem] font-semibold hero-anim-pop"
                    style={{ ...d(1400), color: theme.accent }}
                  >
                    Aan de slag
                  </div>
                </div>

                {/* Mobile content */}
                <div className="flex-1 bg-white px-2 py-2.5 lg:px-3 lg:py-3 space-y-2">
                  {theme.tiles.map((dot, i) => (
                    <div
                      key={`${tick}-m-${i}`}
                      className="flex items-center gap-1.5 lg:gap-2 rounded-md border border-black/[0.06] p-1.5 lg:p-2 hero-anim"
                      style={d(1900 + i * 260)}
                    >
                      <span
                        className="w-3 h-3 lg:w-4 lg:h-4 rounded-[3px] shrink-0"
                        style={{ background: dot }}
                      />
                      <span className="flex-1 space-y-1">
                        <span className="block h-1 lg:h-1.5 w-[70%] rounded-full bg-foreground/60 hero-bar" style={d(2050 + i * 260)} />
                        <span className="block h-1 w-[95%] rounded-full bg-foreground/15 hero-bar" style={d(2150 + i * 260)} />
                      </span>
                    </div>
                  ))}
                  <div
                    className="h-4 lg:h-5 rounded-full hero-anim-pop"
                    style={{ ...d(2900), background: theme.accent, opacity: 0.9 }}
                  />
                </div>
              </div>

              {/* Screen sheen */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                  className="absolute -inset-y-6 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/14 to-transparent"
                  style={{ animation: "monitorSheen 11s ease-in-out infinite" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
