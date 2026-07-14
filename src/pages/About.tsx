import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import portrait from "@/assets/wietse-portrait.jpg.asset.json";
import whatsappLogo from "@/assets/whatsapp-logo.png.asset.json";
import { GlassCTA } from "@/components/shared/GlassCTA";
import { Reveal } from "@/components/shared/Reveal";

const waarden = [
  {
    title: "Persoonlijk contact",
    text: "U spreekt tijdens het hele traject altijd dezelfde persoon, geen callcenter, geen wisselende accountmanagers.",
  },
  {
    title: "Duidelijke communicatie",
    text: "Geen ingewikkelde technische verhalen. Wij leggen alles uit in gewone taal, zodat u precies weet wat er gebeurt.",
  },
  {
    title: "Lokale betrokkenheid",
    text: "Als ondernemer uit Haarlem ken ik de regio en snap ik wat lokale bedrijven nodig hebben om zich te onderscheiden.",
  },
  {
    title: "Eerlijke prijzen",
    text: "Transparante tarieven, geen verborgen kosten en geen dure extra's die u eigenlijk niet nodig heeft.",
  },
];

const About = () => {
  return (
    <Layout>
      <section className="pt-24 md:pt-28 pb-20 md:pb-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-10 lg:gap-14 items-start max-w-5xl mx-auto">
            {/* Visual */}
            <div className="flex justify-center lg:justify-start lg:sticky lg:top-28">
              <div className="relative group">
                <div className="absolute -left-3 top-0 bottom-0 w-1 bg-primary rounded-full" />
                <div className="w-64 h-80 md:w-72 md:h-[24rem] overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 group-hover:-translate-y-1">
                  <img
                    src={portrait.url}
                    alt="Wietse van Os, oprichter Wietse Webworks"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-primary/15 rounded-2xl -z-10 transition-all duration-500 group-hover:bg-primary/25" />
              </div>
            </div>

            {/* Introduction */}
            <div>
              <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">
                Oprichter &amp; webdesigner
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
                Hallo, ik ben Wietse
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[0.9375rem]">
                <p>
                  Vanuit Haarlem ontwerp en bouw ik websites voor lokale
                  ondernemers en kleine bedrijven door heel Nederland. Wat begon
                  als een interesse in design en techniek, is inmiddels
                  uitgegroeid tot een echte passie voor het bouwen van websites
                  die niet alleen mooi zijn, maar ook daadwerkelijk klanten
                  opleveren.
                </p>
                <p>
                  Naast mijn werk als webdesigner studeer ik Bouwkunde aan de
                  TU Delft. Tijdens mijn tussenjaar ben ik me steeds verder
                  gaan verdiepen in webdesign en ondernemerschap, en ontdekte
                  ik hoeveel energie ik haal uit het creëren van sterke online
                  presentaties voor bedrijven. Inmiddels combineer ik mijn
                  studie en mijn bedrijf met veel plezier naast elkaar.
                </p>
                <p>
                  Voorlopig woon ik nog thuis, waardoor ik alle ruimte heb om
                  te investeren in mijn ontwikkeling en in mijn klanten. Ik ben
                  ambitieus, leer iedere dag bij en ben van plan mij de komende
                  jaren nog veel verder te verdiepen in zowel design, techniek
                  als online marketing.
                </p>
                <p>
                  Bij Wietse Webworks krijgt u geen standaardpakket, maar een
                  website die volledig aansluit op uw bedrijf, doelgroep en
                  doelstellingen. Van het eerste ontwerp tot onderhoud en
                  ondersteuning heeft u één vast aanspreekpunt en korte lijnen,
                  zodat u nooit van het kastje naar de muur wordt gestuurd.
                </p>
                <p>
                  Naast websites verzorg ik ook hosting, onderhoud en zakelijke
                  e-mail via Microsoft 365, zodat alles onder één dak geregeld
                  is en u zich volledig kunt richten op uw onderneming.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Neem contact op
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/31647872734"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-dark inline-flex items-center gap-2"
                >
                  <img
                    src={whatsappLogo.url}
                    alt="WhatsApp"
                    className="w-5 h-5 object-contain"
                  />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waarden */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">
              Waar ik voor sta
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Vier principes waar ik nooit op inlever
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {waarden.map((w, i) => (
              <Reveal key={w.title} delay={i * 80}>
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="h-1 bg-primary w-12 mb-6 rounded-full transition-all duration-300 hover:w-20" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {w.title}
                  </h3>
                  <p className="text-muted-foreground text-[0.9375rem] leading-relaxed">
                    {w.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Regio */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">
              Regio
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Lokaal betrokken, landelijk actief
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              De focus ligt op Haarlem, Bloemendaal en Heemstede, maar ik werk
              met plezier voor klanten door heel Nederland. Dankzij korte
              digitale lijnen en persoonlijk contact voelt de samenwerking altijd
              dichtbij, of u nu om de hoek of aan de andere kant van het land zit.
            </p>
          </div>
        </div>
      </section>


      <GlassCTA
        eyebrow="Even kennismaken?"
        title="Laten we vrijblijvend praten over uw website"
        description="Bel, WhatsApp of mail. U krijgt altijd persoonlijk antwoord van mij, meestal binnen één werkdag."
        primaryLabel="Neem contact op"
      />
    </Layout>
  );
};

export default About;
