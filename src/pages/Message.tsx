import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Mail, Phone, MapPin, Send, Info, ChevronDown, Check, ArrowLeft } from "lucide-react";
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
  const [isSent, setIsSent] = useState(false);
  const [showKor, setShowKor] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const body = new FormData();
      Object.entries(formData).forEach(([k, v]) => body.append(k, v));

      const res = await fetch("/contact.php", { method: "POST", body });
      const data = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !data.ok) throw new Error(data.error || "Verzenden mislukt");

      toast({
        title: "Bericht verzonden",
        description: "Bedankt voor uw bericht, u krijgt zo snel mogelijk antwoord van Wietse zelf.",
      });
      setFormData({ name: "", email: "", company: "", subject: "", message: "" });
      setIsSent(true);
    } catch (err) {
      console.error(err);
      toast({
        title: "Verzenden mislukt",
        description: "Probeer het later opnieuw of mail direct naar wietsevanos@gmail.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
        title="Neem" titleMuted="contact op"
        description="Bel, app of mail, u krijgt altijd direct persoonlijk antwoord van Wietse. Vragen stellen en kennismaken is altijd vrijblijvend."
      />

      <section className="py-24 md:py-32 surface-aurora">
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

              <div className="relative rounded-2xl glass p-7">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-foreground/70">
                    Goed om te weten
                  </p>
                </div>

                <div className="space-y-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  <p>
                    Ik reageer doorgaans binnen één werkdag op nieuwe aanvragen.
                  </p>
                  <p>
                    Een eerste kennismaking is altijd vrijblijvend en kosteloos.
                    Bij serieuze interesse ontvangt u daarnaast een eerste
                    voorstel of ontwerp voor uw nieuwe website.
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between gap-3 flex-wrap">
                  <div className="text-xs text-muted-foreground/90 leading-relaxed">
                    <p>KvK: 99105578</p>
                    <p>Vrijgesteld van btw via de KOR-regeling</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowKor((v) => !v)}
                    aria-expanded={showKor}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${
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

            {/* Contact Form / Success */}
            <div className="glass-strong p-8 rounded-2xl">
              {isSent ? (
                <div className="flex flex-col items-center text-center py-6 animate-in fade-in zoom-in-95 duration-500">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" aria-hidden />
                    <div className="relative w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <Check className="w-10 h-10 text-primary" strokeWidth={2.5} />
                    </div>
                  </div>

                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary mb-3">
                    Verzonden
                  </p>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    Bedankt voor uw bericht
                  </h3>
                  <p className="text-[0.9375rem] leading-relaxed text-muted-foreground max-w-sm mb-8">
                    Uw bericht is goed aangekomen. Wietse neemt persoonlijk contact met u op,
                    doorgaans binnen één werkdag.
                  </p>

                  <div className="w-full max-w-sm rounded-xl glass p-5 mb-8 text-left">
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-foreground/70 mb-3">
                      Liever direct contact?
                    </p>
                    <div className="space-y-2.5 text-sm">
                      <a href="tel:+31647872734" className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="w-4 h-4 text-primary" /> 06 47872734
                      </a>
                      <a href="mailto:wietsevanos@gmail.com" className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="w-4 h-4 text-primary" /> wietsevanos@gmail.com
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsSent(false)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowLeft size={14} /> Nog een bericht sturen
                  </button>
                </div>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Message;
