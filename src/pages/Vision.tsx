import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { GlassCTA } from "@/components/shared/GlassCTA";
import { Reveal } from "@/components/shared/Reveal";
import { AIBuildMockup } from "@/components/shared/AIBuildMockup";
import {
  Sparkles,
  MessageCircle,
  ClipboardList,
  PenTool,
  RefreshCw,
  Rocket,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";


const steps = [
  {
    number: "01",
    icon: MessageCircle,

    title: "Kennismaking",
    description:
      "Een vrijblijvend eerste gesprek, telefonisch, via WhatsApp of op locatie in Haarlem. Ik leer uw bedrijf, uw doelgroep en uw wensen kennen.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Intake",
    description:
      "We bepalen samen de doelen van uw website: welke uitstraling past bij uw bedrijf, wat moet de website opleveren en welke functionaliteiten heeft u nodig.",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Ontwerp",
    description:
      "Op basis van de intake maak ik een eerste ontwerp, volledig gratis en zonder verplichtingen. Dankzij slimme AI-ondersteuning ziet u in korte tijd een eerste werkende versie van uw website — zie de toelichting hieronder.",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Revisies",
    description:
      "Drie revisierondes zijn standaard inbegrepen. Doordat de basis er sneller staat, is er meer ruimte voor verfijning, optimalisatie en maatwerk tot het exact past bij uw bedrijf.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Livegang",
    description:
      "Na uw goedkeuring werk ik de website volledig af en plaats deze online op uw eigen domeinnaam. Alles wordt zorgvuldig getest voor lancering.",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Onderhoud",
    description:
      "Na livegang blijf ik uw website beveiligen, updaten en monitoren. U heeft één vast aanspreekpunt voor vragen en aanpassingen.",
  },
];

type Step = (typeof steps)[number];

const StepCard = ({ step, index }: { step: Step; index: number }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [done, setDone] = useState(false);
  const Icon = step.icon;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      setDone(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true);
          if (e.intersectionRatio > 0.85) setDone(true);
        });
      },
      { threshold: [0.15, 0.9], rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl glass border border-border/60 px-6 py-6 md:px-8 md:py-7 transition-all duration-300 hover:-translate-y-[3px] hover:border-primary/30 hover:shadow-[0_12px_30px_-18px_hsl(var(--primary)/0.35)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translate3d(0, 18px, 0)",
        transition: `opacity 600ms cubic-bezier(0.22,1,0.36,1) ${index * 70}ms, transform 600ms cubic-bezier(0.22,1,0.36,1) ${index * 70}ms, border-color 300ms, box-shadow 300ms`,
      }}
    >
      <div className="flex items-start gap-5 md:gap-7">
        <div
          className={`flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-xl ring-1 transition-colors duration-500 ${
            done
              ? "bg-[hsl(var(--accent-orange)/0.1)] ring-[hsl(var(--accent-orange)/0.3)] text-[hsl(var(--accent-orange))]"
              : "bg-primary/5 ring-primary/15 text-primary/70"
          }`}
        >
          <Icon size={20} strokeWidth={1.5} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-3">
            <span
              className={`text-xs font-semibold tracking-[0.18em] tabular-nums transition-colors duration-500 ${
                done ? "text-[hsl(var(--accent-orange))]" : "text-primary/50"
              }`}
            >
              {step.number}
            </span>
            <h3 className="text-lg md:text-xl font-semibold text-foreground">
              {step.title}
            </h3>
          </div>
          <p className="mt-2 text-muted-foreground leading-relaxed text-[0.9375rem]">
            {step.description}
          </p>

          {step.number === "03" && (
            <a
              href="#ai-toelichting"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(var(--accent-orange))] hover:gap-2.5 transition-all duration-300"
            >
              Meer over AI
              <ArrowRight size={14} strokeWidth={1.75} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Vision = () => {
  return (
    <Layout>
      <PageHeader
        label="Van idee tot livegang"
        title="Werkwijze"
        description="In zes duidelijke stappen naar een professionele website. Transparant, persoonlijk en zonder ingewikkelde technische verhalen."
      />

      {/* Steps */}
      <section className="py-24 md:py-32 surface-aurora">
        <div className="mx-auto max-w-[960px] px-6">
          <div className="space-y-4 md:space-y-5">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>

        </div>
      </section>

      {/* AI-versnelde eerste versie — toelichting bij stap 03 */}
      <section id="ai-toelichting" className="pb-24 md:pb-32 surface-aurora scroll-mt-24">
        <div className="mx-auto max-w-[960px] px-6">
          <div>
            <Reveal>
              <div className="max-w-2xl mb-8">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-accent/10 ring-1 ring-accent/25 text-[0.65rem] font-semibold tracking-wider uppercase text-accent mb-4">
                  <Sparkles size={11} strokeWidth={1.5} />
                  Toelichting bij stap 03
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Zo werk ik in de ontwerpfase met AI
                </h2>
                <p className="text-muted-foreground leading-relaxed text-[0.9375rem]">
                  In stap 03 gebruik ik geavanceerde AI-ondersteuning om in korte tijd een
                  eerste werkende versie van uw website te realiseren. U krijgt daardoor
                  sneller inzicht in de uitstraling, structuur en richting en kunt in een
                  vroeg stadium gericht feedback geven. Alle ontwerpkeuzes, afwerking en
                  kwaliteitscontrole blijven volledig in mijn eigen hand: AI versnelt het
                  proces, vakmanschap bepaalt het resultaat.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-2xl glass border border-border/60 p-6 md:p-8">
                <AIBuildMockup />
                <p className="mt-6 text-xs text-muted-foreground/80 leading-relaxed max-w-2xl">
                  Het resultaat: kortere doorlooptijden zonder concessies aan
                  kwaliteit, strategie of persoonlijke begeleiding.
                </p>

              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Reassurance block */}
      <section className="py-24 md:py-32 surface-aurora-strong">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Duidelijk, snel en persoonlijk
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  U spreekt tijdens het hele traject altijd dezelfde persoon.
                  Korte lijnen, snelle reacties en geen ingewikkelde technische
                  verhalen. Zo weet u precies waar u aan toe bent.
                </p>
                <p>
                  Gemiddeld staat uw nieuwe website binnen 1 tot 2 weken online,
                  afhankelijk van de omvang en uw eigen input.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <GlassCTA
        eyebrow="Klaar voor stap 1?"
        title="Zullen we vrijblijvend kennismaken?"
        description="Neem contact op voor een vrijblijvende kennismaking. Ik denk graag met u mee."
        primaryLabel="Plan een kennismaking"
      />
    </Layout>
  );
};

export default Vision;
