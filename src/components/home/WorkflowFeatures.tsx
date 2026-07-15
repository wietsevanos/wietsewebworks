import { useEffect, useState } from "react";
import { Plus, X, Check, ArrowUpRight, Gauge, Search, Shield } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

const CYCLE_MS = 6000;

type Feature = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  bullets: string[];
};

const features: Feature[] = [
  {
    id: "design",
    kicker: "Ontwerp met karakter",
    title: "Maatwerk webdesign",
    description:
      "Elke website begint met een uniek ontwerp dat past bij uw merk. Geen templates, geen standaard­oplossingen, een uitstraling die aansluit op wie u bent.",
    bullets: [
      "Volledig op maat, geen thema's",
      "Ontwerp­voorstel binnen een week",
      "Onbeperkte revisies tot het klopt",
    ],
  },
  {
    id: "development",
    kicker: "Snel & modern",
    title: "Razendsnelle websites",
    description:
      "Uw website wordt gebouwd met de nieuwste technieken. Perfect leesbaar op elk scherm en supersnel, cruciaal voor bezoekers én Google.",
    bullets: [
      "Perfecte weergave op mobiel, tablet en desktop",
      "Laadtijden onder de seconde",
      "Schone, toekomst­bestendige code",
    ],
  },
  {
    id: "seo",
    kicker: "Beter vindbaar",
    title: "SEO en vindbaarheid",
    description:
      "Een mooie website heeft alleen zin als hij ook gevonden wordt. Ik zorg voor de technische basis waarmee u hoger scoort in Google.",
    bullets: [
      "Technische SEO standaard ingebouwd",
      "Snelle indexatie door zoekmachines",
      "Meetbare resultaten via analytics",
    ],
  },
  {
    id: "support",
    kicker: "Zorgeloos hosten",
    title: "Hosting en onderhoud",
    description:
      "Na livegang blijf ik betrokken. Hosting, updates, back-ups en support, u hoeft er niet naar om te kijken en bereikt mij altijd direct.",
    bullets: [
      "99,9% uptime met dagelijkse back-ups",
      "Wijzigingen binnen 24 uur doorgevoerd",
      "Persoonlijk contact, geen helpdesk",
    ],
  },
];

const FeaturePreview = ({ id }: { id: string }) => {
  if (id === "design") {
    return (
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
            Ontwerp­voorstel
          </p>
          <span className="text-xs text-muted-foreground">v1.0</span>
        </div>
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
          {[
            { label: "Hero", tone: "bg-[hsl(var(--accent-orange))]" },
            { label: "Over", tone: "bg-white ring-1 ring-black/5" },
            { label: "Diensten", tone: "bg-white ring-1 ring-black/5" },
          ].map((c, i) => (
            <div
              key={i}
              className={`aspect-[4/5] rounded-xl ${c.tone} p-3 flex flex-col justify-between shadow-sm`}
            >
              <div className={`h-1.5 w-7 rounded-full ${i === 0 ? "bg-white/60" : "bg-primary/40"}`} />
              <div className="space-y-1.5">
                <div className={`h-1.5 rounded-full ${i === 0 ? "bg-white/70" : "bg-foreground/20"} w-full`} />
                <div className={`h-1.5 rounded-full ${i === 0 ? "bg-white/40" : "bg-foreground/10"} w-2/3`} />
                <p className={`pt-1.5 text-[0.65rem] font-medium ${i === 0 ? "text-white" : "text-foreground/70"}`}>
                  {c.label}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 pt-1">
          <span className="w-5 h-5 rounded-full bg-[hsl(var(--brand-navy))]" />
          <span className="w-5 h-5 rounded-full bg-[hsl(var(--accent-orange))]" />
          <span className="w-5 h-5 rounded-full bg-[hsl(var(--brand-light))]" />
          <span className="w-5 h-5 rounded-full bg-white ring-1 ring-black/10" />
          <span className="ml-auto text-xs text-muted-foreground">Kleurpalet</span>
        </div>
      </div>
    );
  }

  if (id === "development") {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
            Performance
          </p>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Gauge size={12} /> live
          </span>
        </div>
        <div className="rounded-xl bg-[hsl(var(--accent-orange))] text-white p-5 flex items-end justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-wider text-white/80">Laadtijd</p>
            <p className="text-4xl font-semibold tracking-tight mt-1">0.8s</p>
          </div>
          <Gauge size={36} className="text-white/70" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-white ring-1 ring-black/5 p-4">
            <p className="text-2xl font-semibold text-foreground">100</p>
            <p className="text-[0.7rem] text-muted-foreground mt-1">Performance</p>
          </div>
          <div className="rounded-xl bg-white ring-1 ring-black/5 p-4">
            <p className="text-2xl font-semibold text-foreground">A+</p>
            <p className="text-[0.7rem] text-muted-foreground mt-1">Beveiliging</p>
          </div>
        </div>
      </div>
    );
  }

  if (id === "seo") {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
            Zoekresultaten
          </p>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Search size={12} /> google.nl
          </span>
        </div>
        <div className="space-y-2">
          {[
            { q: "webdesigner haarlem", pos: "#1" },
            { q: "website laten maken", pos: "#3" },
            { q: "lokale webdesign", pos: "#2" },
          ].map((r, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-lg bg-white ring-1 ring-black/5 px-4 py-3"
            >
              <span className="text-sm text-foreground/80 truncate">{r.q}</span>
              <span className="text-sm font-semibold text-[hsl(var(--accent-orange))] ml-3">
                {r.pos}
              </span>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-[hsl(var(--brand-navy))] p-5 text-white flex items-center justify-between">
          <div>
            <p className="text-[0.7rem] text-white/70 uppercase tracking-wider">Organisch verkeer</p>
            <p className="text-3xl font-semibold mt-1">+184%</p>
          </div>
          <ArrowUpRight size={28} className="text-[hsl(var(--accent-orange-soft))]" />
        </div>
      </div>
    );
  }

  // support
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
          Support
        </p>
        <span className="text-xs text-emerald-600 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Operationeel
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-[hsl(var(--accent-orange))] text-white p-4">
          <p className="text-2xl font-semibold">99,9%</p>
          <p className="text-[0.7rem] text-white/80 mt-1">Uptime</p>
        </div>
        <div className="rounded-xl bg-white ring-1 ring-black/5 p-4">
          <p className="text-2xl font-semibold text-foreground">&lt; 2u</p>
          <p className="text-[0.7rem] text-muted-foreground mt-1">Reactietijd</p>
        </div>
      </div>
      <div className="rounded-xl bg-white ring-1 ring-black/5 p-4 space-y-3">
        {[
          { t: "Back-up voltooid", s: "vandaag" },
          { t: "SSL vernieuwd", s: "gisteren" },
        ].map((a, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[hsl(var(--brand-soft))] flex items-center justify-center shrink-0">
              <Shield size={14} className="text-[hsl(var(--brand-blue))]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{a.t}</p>
              <p className="text-[0.7rem] text-muted-foreground">{a.s}</p>
            </div>
            <Check size={14} className="text-emerald-500 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};


export const WorkflowFeatures = () => {
  const [openId, setOpenId] = useState<string>(features[0].id);

  // Auto-cycle through features. Progress bar uses a CSS animation for smoothness.
  useEffect(() => {
    const timeout = setTimeout(() => {
      const idx = features.findIndex((f) => f.id === openId);
      const next = features[(idx + 1) % features.length].id;
      setOpenId(next);
    }, CYCLE_MS);
    return () => clearTimeout(timeout);
  }, [openId]);

  const handleSelect = (id: string) => {
    if (id === openId) return;
    setOpenId(id);
  };


  return (
    <section className="relative py-24 md:py-32 surface-aurora overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 w-[34rem] h-[34rem] rounded-full bg-[hsl(var(--brand-light))]/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-24 w-[30rem] h-[30rem] rounded-full bg-[hsl(var(--accent-orange))]/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight tracking-tight">
              Een website die voor u werkt
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Van ontwerp tot livegang en alles daarna, alles onder één dak,
              met korte lijnen en persoonlijk contact.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          {/* Accordion */}
          <div className="space-y-4">
            {features.map((f) => {
              const isOpen = openId === f.id;
              return (
                <div
                  key={f.id}
                  className={`rounded-2xl glass transition-all duration-300 ${
                    isOpen
                      ? "shadow-[0_30px_80px_-30px_rgba(15,30,60,0.28)]"
                      : "hover:-translate-y-0.5"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleSelect(f.id)}
                    className="w-full flex items-start justify-between gap-4 text-left px-6 py-5"
                  >
                    <div className="flex-1 min-w-0">
                      {isOpen && (
                        <p className="text-xs tracking-wide text-muted-foreground mb-1">
                          {f.kicker}
                        </p>
                      )}
                      <h3 className="text-lg font-semibold text-foreground leading-snug">
                        {f.title}
                      </h3>
                    </div>
                    <span
                      className={`shrink-0 mt-0.5 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isOpen
                          ? "bg-[hsl(var(--accent-orange))] text-white"
                          : "bg-secondary text-foreground/70"
                      }`}
                    >
                      {isOpen ? <X size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 -mt-1">
                        <p className="text-[0.95rem] text-muted-foreground leading-relaxed">
                          {f.description}
                        </p>
                        <ul className="mt-4 space-y-2">
                          {f.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/80">
                              <span className="mt-0.5 w-4 h-4 rounded-full bg-[hsl(var(--accent-orange))] flex items-center justify-center shrink-0">
                                <Check size={10} className="text-white" strokeWidth={3} />
                              </span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                        {isOpen && (
                          <div className="mt-4 h-1 w-full rounded-full bg-black/5 overflow-hidden">
                            <div
                              key={openId}
                              className="h-full bg-[hsl(var(--accent-orange))] rounded-full"
                              style={{
                                animation: `workflowProgress ${CYCLE_MS}ms linear forwards`,
                                willChange: "width",
                              }}
                            />
                          </div>
                        )}

                        {/* Mobile-only preview directly under the open item */}
                        {isOpen && (
                          <div className="lg:hidden mt-5">
                            <div className="rounded-2xl glass-strong p-3">
                              <div className="rounded-xl glass w-full p-5">
                                <div key={openId} className="animate-fade-in">
                                  <FeaturePreview id={openId} />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>


          {/* Preview panel, matches accordion column height */}
          <div className="hidden lg:block h-full">
            <div className="rounded-3xl glass-strong p-4 md:p-6 h-full flex">
              <div className="rounded-2xl glass w-full flex-1 flex flex-col justify-center p-5 md:p-7">
                <div key={openId} className="animate-fade-in">
                  <FeaturePreview id={openId} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
