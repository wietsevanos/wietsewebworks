import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Mail, Phone, MapPin, Send, Info, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Message = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showKor, setShowKor] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    toast({
      title: "Bericht verzonden",
      description: "Bedankt voor uw bericht, u krijgt zo snel mogelijk antwoord van Wietse zelf.",
    });
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      <PageHeader
        label="Contact"
        title="Neem contact op"
        description="Bel, app of mail, u krijgt altijd direct persoonlijk antwoord van Wietse. Vragen stellen en kennismaken is altijd vrijblijvend."
      />

      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Wietse van Os
              </h2>
              <p className="text-muted-foreground mb-8 text-[0.9375rem]">
                Oprichter Wietse Webworks &middot; Haarlem
              </p>

              <div className="space-y-5 mb-10">
                <a
                  href="tel:+31647872734"
                  className="flex items-start gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[0.9375rem] leading-relaxed">
                    06 47872734
                    <br />
                    <span className="text-muted-foreground/80 text-sm">Binnen 24 uur antwoord</span>
                  </span>
                </a>

                <a
                  href="mailto:wietsevanos@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[0.9375rem]">wietsevanos@gmail.com</span>
                </a>

                <div className="flex items-start gap-4 text-muted-foreground">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[0.9375rem] leading-relaxed">
                    Bloemendaalseweg 315, 2051 GH Overveen
                    <br />
                    <span className="text-muted-foreground/80 text-sm">Werkzaam in heel Nederland</span>
                  </span>
                </div>
              </div>

              <div className="rounded-xl bg-secondary p-6 text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">Goed om te weten</p>
                <p>
                  Reactietijd is doorgaans binnen één werkdag. Kennismaken is
                  altijd gratis en zonder verplichtingen, inclusief een gratis
                  eerste ontwerp van uw nieuwe website.
                </p>

                <div className="mt-4 flex items-center gap-3 flex-wrap">
                  <p className="text-xs text-muted-foreground/90">
                    KvK 99105578 &middot; Vrijgesteld van btw (KOR)
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowKor((v) => !v)}
                    aria-expanded={showKor}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium transition-all ${
                      showKor
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "border-primary/25 bg-primary/[0.06] text-primary/90 hover:bg-primary/10"
                    }`}
                  >
                    <Info size={12} />
                    {showKor ? "Minder info" : "Wat is KOR?"}
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-300 ${showKor ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    showKor ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="rounded-xl border border-primary/15 bg-primary/[0.04] p-4 text-[0.8125rem] leading-relaxed text-muted-foreground">
                      <p className="font-medium text-foreground mb-1.5">
                        Wat is een KOR onderneming?
                      </p>
                      <p>
                        KOR staat voor de Kleineondernemersregeling. Als KOR
                        ondernemer breng ik geen btw in rekening, dus u betaalt
                        het bedrag op de offerte, zonder btw eroverheen. Handig
                        en overzichtelijk, zeker voor particulieren en kleine
                        ondernemers die geen btw kunnen verrekenen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary p-8 rounded-xl">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Stuur een bericht
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Naam
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-[0.9375rem]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-[0.9375rem]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Bedrijf (optioneel)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-[0.9375rem]"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Onderwerp
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-[0.9375rem]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Vertel kort wat u voor ogen heeft, dan neem ik zo snel mogelijk contact op."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none text-[0.9375rem]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    "Versturen..."
                  ) : (
                    <>
                      Verstuur bericht
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Message;
