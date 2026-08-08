import { Link } from "react-router-dom";
import { Reveal } from "@/components/shared/Reveal";
import { ArrowRight, Users, Send, Gift } from "lucide-react";

const referralSteps = [
  {
    number: "01",
    icon: Users,
    title: "U kent een ondernemer",
  },
  {
    number: "02",
    icon: Send,
    title: "U stuurt Wietse Webworks door",
  },
  {
    number: "03",
    icon: Gift,
    title: "Nieuwe website + 1 maand gratis",
  },
];

export const ReferralSection = () => {
  return (
    <section className="py-20 md:py-28 surface-aurora">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left — copy */}
          <Reveal>
            <div>
              <p className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-[hsl(var(--accent-orange))] mb-4">
                Voor bestaande klanten
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground leading-tight">
                Kent u nog een ondernemer die toe is aan een betere website?
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-[0.9375rem]">
                <p>
                  Ik ben de afgelopen tijd volop bezig met het uitbreiden van
                  Wietse Webworks en wil steeds meer lokale ondernemers helpen
                  met een professionele website.
                </p>
                <p>
                  Kent u iemand met een verouderde website, een bedrijf zonder
                  goede website of iemand die simpelweg online een stuk sterker
                  voor de dag wil komen? Stuur mijn gegevens gerust door.
                </p>
                <p>
                  Komt daar uiteindelijk een nieuwe klant uit, dan ontvangt u
                  van mij een maand gratis hosting en onderhoud.
                </p>
              </div>

              <p className="mt-6 text-[0.8125rem] leading-relaxed text-muted-foreground/80 max-w-md">
                U hoeft niemand actief te overtuigen. Een naam, contactgegevens
                of simpelweg mijn website doorsturen is al helemaal prima.
              </p>

              <Link
                to="/contact"
                className="btn-glass-blue mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-[18px] text-sm font-medium group"
              >
                <span>Iemand doorverwijzen</span>
                <ArrowRight
                  size={16}
                  strokeWidth={1.75}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>

          {/* Right — referral flow */}
          <Reveal delay={120}>
            <div className="relative">
              <div className="space-y-4">
                {referralSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.number}
                      className="group referral-step relative glass rounded-2xl border border-border/60 px-5 py-5 md:px-6 md:py-6 transition-all duration-300 will-change-transform hover:-translate-y-[3px] hover:border-primary/30 hover:shadow-[0_16px_40px_-24px_hsl(var(--primary)/0.45)]"
                      style={{ animationDelay: `${i * 2}s` }}
                    >
                      <div
                        className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden"
                        aria-hidden="true"
                      >
                        <div
                          className="referral-sheen absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg]"
                          style={{
                            background:
                              "linear-gradient(90deg, transparent, hsl(var(--accent-orange) / 0.10), transparent)",
                            animationDelay: `${i * 2}s`,
                          }}
                        />
                      </div>
                      <div className="flex items-center gap-4 md:gap-5">
                        <div className="relative flex-shrink-0">
                          <div
                            className="referral-halo pointer-events-none absolute inset-0 rounded-2xl"
                            aria-hidden="true"
                            style={{
                              background:
                                "radial-gradient(circle, hsl(var(--accent-orange) / 0.35), transparent 70%)",
                              animationDelay: `${i * 2}s`,
                            }}
                          />
                          <div className="referral-step-icon relative z-10 h-[52px] w-[52px] md:h-[60px] md:w-[60px] rounded-2xl bg-primary/5 ring-1 ring-primary/15 flex items-center justify-center text-primary/70 transition-colors duration-300 group-hover:bg-[hsl(var(--accent-orange)/0.08)] group-hover:ring-[hsl(var(--accent-orange)/0.3)] group-hover:text-[hsl(var(--accent-orange))]"
                            style={{ animationDelay: `${i * 2}s` }}
                          >
                            <Icon size={26} strokeWidth={1.25} />
                          </div>
                        </div>

                        <div className="min-w-0">
                          <span className="referral-step-num block text-xs font-semibold tabular-nums tracking-wide text-primary/40 transition-colors duration-300 group-hover:text-primary"
                            style={{ animationDelay: `${i * 2}s` }}
                          >
                            {step.number}
                          </span>
                          <h3 className="mt-1 text-[0.9375rem] md:text-base font-medium text-foreground">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>


              <p className="mt-6 text-xs text-muted-foreground/75 leading-relaxed">
                Een kleine tip uit uw netwerk kan zomaar het begin zijn van een
                mooie nieuwe website.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
