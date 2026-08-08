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
              {/* Connecting line — vertical (all breakpoints) */}
              <div
                className="pointer-events-none absolute left-[35px] md:left-[39px] top-10 bottom-10 w-px overflow-hidden"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/25 to-primary/10" />
                <div
                  className="absolute left-1/2 h-16 w-px -translate-x-1/2"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, hsl(var(--accent-orange) / 0.9), transparent)",
                    boxShadow: "0 0 12px 2px hsl(var(--accent-orange) / 0.35)",
                    animation: "referralTravelY 6s linear infinite",
                  }}
                />
              </div>

              <div className="space-y-4">
                {referralSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.number}
                      className="group relative glass rounded-2xl border border-border/60 px-5 py-5 md:px-6 md:py-6 transition-all duration-300 will-change-transform hover:-translate-y-[3px] hover:border-primary/30 hover:shadow-[0_16px_40px_-24px_hsl(var(--primary)/0.45)]"
                    >
                      <div className="flex items-center gap-4 md:gap-5">
                        <div className="relative z-10 flex-shrink-0 h-[52px] w-[52px] md:h-[60px] md:w-[60px] rounded-2xl bg-primary/5 ring-1 ring-primary/15 flex items-center justify-center text-primary/70 transition-colors duration-300 group-hover:bg-[hsl(var(--accent-orange)/0.08)] group-hover:ring-[hsl(var(--accent-orange)/0.3)] group-hover:text-[hsl(var(--accent-orange))]">
                          <Icon size={26} strokeWidth={1.25} />
                        </div>
                        <div className="min-w-0">
                          <span className="block text-xs font-semibold tabular-nums tracking-wide text-primary/40 transition-colors duration-300 group-hover:text-primary">
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
