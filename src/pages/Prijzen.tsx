import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { GlassCTA } from "@/components/shared/GlassCTA";
import { Reveal } from "@/components/shared/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  TrendingUp,
  Building2,
  Handshake,
  Rocket,
  Server,
  ShieldCheck,
  HardDrive,
  Zap,
  Activity,
  Phone,
  Wrench,
  MessageCircle,
  Mail,
  Cloud,
  Users,
  FileText,
  Calendar,
  FolderOpen,
  Info,
} from "lucide-react";

/* -------------------------- Count-up hook -------------------------- */
const useCountUp = (target: number, duration = 1800) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return { value, ref };
};

/* -------------------------- Why cards -------------------------- */
const whyCards = [
  {
    icon: TrendingUp,
    title: "Ik bouw aan mijn portfolio",
    text:
      "Ik wil de komende jaren uitgroeien tot een gevestigde naam in webdesign. Daarom investeer ik bewust in mooie projecten en tevreden klanten.",
  },
  {
    icon: Building2,
    title: "Geen groot bureau",
    text:
      "U betaalt niet voor dure kantoren, accountmanagers of verkoopafdelingen. Alleen voor het werk dat daadwerkelijk uitgevoerd wordt.",
  },
  {
    icon: Handshake,
    title: "Persoonlijk contact",
    text:
      "U werkt direct met degene die uw website ontwerpt en bouwt. Dat werkt sneller, duidelijker en persoonlijker.",
  },
  {
    icon: Rocket,
    title: "Samen groeien",
    text:
      "Mijn doel is niet alleen een website opleveren, maar ondernemers jarenlang online ondersteunen.",
  },
];

const checklist = [
  "Volledig maatwerk ontwerp",
  "Geschikt voor mobiel, tablet en desktop",
  "Contactformulier",
  "WhatsApp knop",
  "Basis zoekmachineoptimalisatie",
  "Snelle laadtijden",
  "SSL beveiliging",
  "Google indexatie",
  "Professionele uitstraling",
  "Hulp bij teksten en structuur",
  "Oplevering binnen enkele weken",
  "Cookiemelding volgens AVG",
];

const timeline = [
  {
    step: "Stap 1",
    icon: "🎨",
    text: "Ik ontwerp en bouw uw website.",
  },
  {
    step: "Stap 2",
    icon: "🌍",
    text: "De website wordt online geplaatst op snelle Nederlandse servers.",
  },
  {
    step: "Stap 3",
    icon: "🔒",
    text: "Ik zorg ervoor dat alles veilig, snel en up-to-date blijft.",
  },
  {
    step: "Stap 4",
    icon: "📞",
    text:
      "Heeft u vragen of wilt u iets wijzigen? Dan kunt u gewoon contact opnemen.",
  },
];

const hostingIncludes = [
  { icon: Server, label: "Nederlandse hosting" },
  { icon: ShieldCheck, label: "SSL certificaat" },
  { icon: HardDrive, label: "Dagelijkse back-ups" },
  { icon: ShieldCheck, label: "Beveiligingsupdates" },
  { icon: Zap, label: "Snelheidsoptimalisatie" },
  { icon: Activity, label: "24/7 monitoring" },
  { icon: Phone, label: "Ondersteuning bij vragen" },
  { icon: Wrench, label: "Kleine technische wijzigingen" },
  { icon: MessageCircle, label: "WhatsApp support" },
  {
    icon: Mail,
    label: "IMAP mail",
    info:
      "IMAP is een moderne manier van e-mail ophalen waarbij uw berichten op de server blijven staan. Zo synchroniseren al uw apparaten (telefoon, laptop, tablet) automatisch en ziet u overal dezelfde mailbox.",
  },
];

const faqs = [
  {
    q: "Moet ik zelf teksten schrijven?",
    a: "Nee, ik help graag met teksten, structuur en inhoud.",
  },
  {
    q: "Kan ik later uitbreiden?",
    a: "Ja, websites worden zo gebouwd dat ze eenvoudig kunnen meegroeien.",
  },
  {
    q: "Zit ik vast aan een contract?",
    a: "Nee, hosting is maandelijks opzegbaar.",
  },
  {
    q: "Hoe snel staat mijn website online?",
    a: "Gemiddeld binnen 2 tot 4 weken.",
  },
  {
    q: "Kan ik zelf wijzigingen doen?",
    a: "Dat kan, maar ik neem het onderhoud en de technische zaken graag uit handen.",
  },
];

/* -------------------------- Component -------------------------- */
const Prijzen = () => {
  const { value: price, ref: priceRef } = useCountUp(495);
  const [billing, setBilling] = useState<"maand" | "jaar">("maand");
  const hostingPrice = billing === "maand" ? "37,95" : "417,45";
  const hostingSuffix = billing === "maand" ? "per maand" : "per jaar";

  return (
    <Layout>
      <PageHeader
        label="Prijzen"
        title="Professionele websites vanaf €495"
        description="Een professionele website hoeft niet duizenden euro's te kosten. Duidelijke tarieven, geen verborgen kosten, en direct contact met de ontwerper."
      />

      {/* Intro + count-up */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">
              Toegankelijk starttarief
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
              Een professionele website voor een eerlijke prijs
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Als startende webdesigner ben ik actief bezig met het opbouwen
              van een sterk portfolio en langdurige samenwerkingen met
              ondernemers. Daarom houd ik mijn instapprijzen bewust
              toegankelijk, terwijl u wel een volledig maatwerk ontwerp krijgt
              dat past bij uw bedrijf.
            </p>
            <ul className="space-y-3">
              {[
                "Persoonlijke begeleiding",
                "Volledig maatwerk ontwerp",
                "Direct contact met de ontwerper",
                "Geen tussenpersonen of accountmanagers",
                "Scherpe tarieven zonder verborgen kosten",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-foreground/85"
                >
                  <span className="mt-1 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <div
              ref={priceRef}
              className="bg-secondary rounded-2xl p-10 md:p-14 text-center border border-border/60"
            >
              <p className="text-sm uppercase tracking-wide text-primary font-medium mb-4">
                Vanaf
              </p>
              <div className="text-7xl md:text-8xl font-semibold text-foreground tabular-nums leading-none">
                €{price}
              </div>
              <p className="mt-6 text-muted-foreground italic">
                "Een professionele website voor een eerlijke prijs."
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Waarom vanaf €495 */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">
              Eerlijke prijzen
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Waarom vanaf €495?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyCards.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={i * 80}>
                  <div className="group bg-white rounded-2xl p-8 border border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 h-full">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-primary/15">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {c.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {c.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standaard checklist */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">
              Standaard inbegrepen
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Wat krijgt u standaard bij een website?
            </h2>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {checklist.map((item, i) => (
              <Reveal key={item} delay={i * 60} direction="up" distance={12}>
                <li className="flex items-start gap-3 bg-secondary/60 rounded-xl px-5 py-4 border border-border/50">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </span>
                  <span className="text-foreground/90">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={300}>
            <div className="mt-14 bg-foreground text-white rounded-2xl p-10 text-center">
              <p className="text-white/70 text-sm uppercase tracking-wide mb-3">
                En misschien nog wel het belangrijkste
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                Eén vast aanspreekpunt
              </h3>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-white/80 mb-6">
                <span>Geen ticketsystemen.</span>
                <span>Geen helpdesks.</span>
                <span>Geen verschillende afdelingen.</span>
              </div>
              <p className="text-white/90">
                Gewoon rechtstreeks contact met mij.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tijdlijn hosting */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">
              Werkwijze
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Hoe werkt hosting en onderhoud?
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <Reveal key={t.step} delay={i * 100}>
                  <div className="relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-8 md:items-center">
                    <div
                      className={`absolute left-0 top-2 md:static ${
                        i % 2 === 0 ? "md:text-right md:pr-10" : "md:col-start-2 md:pl-10"
                      }`}
                    >
                      <div className="hidden md:block">
                        <p className="text-primary text-sm font-medium uppercase tracking-wide">
                          {t.step}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`bg-white rounded-2xl p-6 border border-border/60 shadow-sm ${
                        i % 2 === 0 ? "md:col-start-2" : "md:col-start-1 md:row-start-1"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-2xl">
                          {t.icon}
                        </div>
                        <div>
                          <p className="text-primary text-xs font-medium uppercase tracking-wide mb-1 md:hidden">
                            {t.step}
                          </p>
                          <p className="text-foreground leading-relaxed">
                            {t.text}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-primary border-4 border-secondary md:left-1/2 md:-translate-x-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hosting kaart met toggle */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">
              Zorgeloos online
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Hosting &amp; onderhoud
            </h2>
          </div>

          <Reveal>
            <div className="bg-white rounded-3xl border border-border/60 p-8 md:p-12 shadow-sm">
              {/* Toggle */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex bg-secondary rounded-full p-1 border border-border/60">
                  <button
                    onClick={() => setBilling("maand")}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                      billing === "maand"
                        ? "bg-primary text-white shadow"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    Maandelijks
                  </button>
                  <button
                    onClick={() => setBilling("jaar")}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                      billing === "jaar"
                        ? "bg-primary text-white shadow"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    Jaarlijks
                  </button>
                </div>
              </div>

              {/* Prijs */}
              <div className="text-center mb-8">
                <div
                  key={billing}
                  className="text-6xl md:text-7xl font-semibold text-foreground tabular-nums animate-fade-up"
                >
                  €{hostingPrice}
                </div>
                <p className="text-muted-foreground mt-2">{hostingSuffix}</p>
                {billing === "jaar" && (
                  <p className="mt-4 inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full animate-fade-in">
                    🎁 Bij jaarlijkse betaling ontvangt u automatisch één maand
                    gratis
                  </p>
                )}
              </div>

              {/* Includes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {hostingIncludes.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 bg-secondary/60 rounded-xl px-4 py-3 border border-border/40"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex items-center gap-2 text-foreground/90 text-[0.9375rem]">
                        {item.label}
                        {item.info && (
                          <span className="group relative inline-flex">
                            <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                            <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 rounded-lg bg-foreground text-white text-xs p-3 opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg">
                              {item.info}
                            </span>
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-center">
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Kies uw abonnement
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* E-mail uitklap */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">
              Zakelijke e-mail
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Professioneel mailen op uw eigen domein
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="mail-only"
              className="bg-white border border-border/60 rounded-2xl px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-primary font-medium mb-1">
                      Zakelijke e-mail nodig?
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      Microsoft 365 Mail Only
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-[0.9375rem] text-foreground/85 leading-relaxed">
                <p className="mb-4">
                  Niet iedere ondernemer heeft behoefte aan het volledige
                  Microsoft 365 pakket met Teams, Word en OneDrive. Daarom bied
                  ik ook de eenvoudige en voordelige Mail Only variant aan.
                </p>
                <p className="font-medium text-foreground mb-2">Inclusief:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Professioneel e-mailadres op uw eigen domeinnaam",
                    "Outlook op computer en telefoon",
                    "Agenda synchronisatie",
                    "Contactpersonen synchroniseren",
                    "Automatische synchronisatie tussen al uw apparaten",
                    "Betrouwbare Microsoft servers",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="font-medium text-foreground mb-2">Voorbeelden:</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["info@bedrijf.nl", "administratie@bedrijf.nl", "verkoop@bedrijf.nl"].map(
                    (e) => (
                      <span
                        key={e}
                        className="bg-secondary rounded-full px-3 py-1 text-sm text-foreground/80 border border-border/60"
                      >
                        {e}
                      </span>
                    )
                  )}
                </div>
                <p className="text-muted-foreground">
                  Perfect voor ondernemers die simpelweg professioneel willen
                  mailen zonder onnodige extra functies.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="business-basic"
              className="bg-white border border-border/60 rounded-2xl px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-primary font-medium mb-1">
                      Wilt u méér dan alleen e-mail?
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      Microsoft 365 Business Basic
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-[0.9375rem] text-foreground/85 leading-relaxed">
                <p className="mb-4">Naast e-mail ontvangt u ook:</p>
                <ul className="space-y-3 mb-4">
                  {[
                    { i: Cloud, t: "OneDrive opslag" },
                    { i: Users, t: "Microsoft Teams" },
                    { i: FileText, t: "Online Office apps" },
                    { i: Calendar, t: "Geavanceerde agenda functies" },
                    { i: FolderOpen, t: "Bestanden delen met collega's" },
                  ].map(({ i: Icon, t }) => (
                    <li key={t} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground">
                  Ideaal voor bedrijven met meerdere medewerkers of
                  samenwerking op afstand.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Veelgestelde vragen
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`faq-${i}`}
                className="bg-secondary/60 border border-border/60 rounded-xl px-6"
              >
                <AccordionTrigger className="hover:no-underline py-5 text-left font-medium text-foreground">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <GlassCTA
        eyebrow="Duidelijk voorstel op maat"
        title="Vraag een vrijblijvende offerte aan"
        description="Vertel kort wat u nodig heeft, dan ontvangt u binnen één werkdag een duidelijk voorstel op maat."
        primaryLabel="Vraag offerte aan"
      />
    </Layout>
  );
};

export default Prijzen;
