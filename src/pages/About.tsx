import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone } from "lucide-react";
import portrait from "@/assets/wietse-portrait.jpg.asset.json";
import { WhatsAppLink, WhatsAppIcon } from "@/components/shared/WhatsAppLink";

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
      {/* Intro Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary rounded-full" />
                <div className="w-72 h-96 md:w-80 md:h-[26rem] overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={portrait.url}
                    alt="Wietse van Os, oprichter Wietse Webworks"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/15 rounded-2xl -z-10" />
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
                  Vanuit Haarlem bouw ik websites voor lokale ondernemers en
                  kleine bedrijven door heel Nederland. Ik geloof dat elke
                  ondernemer online net zo professioneel moet kunnen overkomen
                  als in het echt, ongeacht budget of technische kennis.
                </p>
                <p>
                  Bij Wietse Webworks krijgt u geen standaardpakket, maar een
                  website die past bij uw bedrijf, uw doelgroep en uw doelen.
                  Van eerste ontwerp tot doorlopend onderhoud werk ik met u
                  samen, en u heeft altijd één vast aanspreekpunt: mij.
                </p>
                <p>
                  Naast websites verzorg ik ook hosting, onderhoud en zakelijke
                  e-mail via Microsoft 365, alles onder één dak, zodat u geen
                  gedoe heeft met verschillende leveranciers.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Neem contact op
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="https://instagram.com/wietsevanos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-dark inline-flex items-center gap-2"
                >
                  <Instagram size={18} />
                  @wietsevanos
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
            {waarden.map((w) => (
              <div key={w.title} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="h-1 bg-primary w-12 mb-6 rounded-full" />
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {w.title}
                </h3>
                <p className="text-muted-foreground text-[0.9375rem] leading-relaxed">
                  {w.text}
                </p>
              </div>
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

      {/* Contact strip */}
      <section className="py-20 dark-section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <a
              href="tel:+31647872734"
              className="flex flex-col items-center gap-3 text-white/85 hover:text-primary transition-colors"
            >
              <Phone className="w-6 h-6 text-primary" />
              <span className="text-[0.9375rem]">06 47 87 27 34</span>
            </a>
            <a
              href="mailto:wietsevanos@gmail.com"
              className="flex flex-col items-center gap-3 text-white/85 hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6 text-primary" />
              <span className="text-[0.9375rem]">wietsevanos@gmail.com</span>
            </a>
            <a
              href="https://instagram.com/wietsevanos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 text-white/85 hover:text-primary transition-colors"
            >
              <Instagram className="w-6 h-6 text-primary" />
              <span className="text-[0.9375rem]">@wietsevanos</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
