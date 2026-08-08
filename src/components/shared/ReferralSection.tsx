import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/shared/Reveal";
import { ArrowRight, Users, Send, Gift } from "lucide-react";


const referralSteps: {
  number: string;
  icon: typeof Users;
  title: string;
  note?: string;
}[] = [
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
    title: "U krijgt 1 maand gratis",
    note: "Dat bespaart u € 37,95 aan hosting en onderhoud",
  },

];

export const ReferralSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: number | undefined;
    const start = () => {
      if (timer) return;
      setActiveIndex(0);
      timer = window.setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % referralSteps.length);
      }, 2000);
    };
    const stop = () => {
      if (timer) window.clearInterval(timer);
      timer = undefined;
      setActiveIndex(-1);
    };

    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timer) window.clearInterval(timer);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 surface-aurora">

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
                  van mij een maand gratis hosting en onderhoud. Dat bespaart u{" "}
                  <span className="font-semibold text-[hsl(var(--accent-orange))]">
                    € 37,95
                  </span>
                  .
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
                  const isActive = activeIndex === i;
                  return (
                    <div
                      key={step.number}
                      data-active={isActive ? "true" : undefined}
                      className="group referral-step relative glass rounded-2xl border border-border/60 px-5 py-5 md:px-6 md:py-6 transition-all duration-300 will-change-transform hover:-translate-y-[3px] hover:border-primary/30 hover:shadow-[0_16px_40px_-24px_hsl(var(--primary)/0.45)]"
                    >
                      <div
                        className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden"
                        aria-hidden="true"
                      >
                        {isActive && (
                          <div
                            className="referral-sheen absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg]"
                            style={{
                              background:
                                "linear-gradient(90deg, transparent, hsl(var(--accent-orange) / 0.10), transparent)",
                            }}
                          />
                        )}
                      </div>
                      <div className="flex items-center gap-4 md:gap-5">
                        <div className="relative flex-shrink-0">
                          {isActive && (
                            <div
                              className="referral-halo pointer-events-none absolute inset-0 rounded-2xl"
                              aria-hidden="true"
                              style={{
                                background:
                                  "radial-gradient(circle, hsl(var(--accent-orange) / 0.35), transparent 70%)",
                              }}
                            />
                          )}
                          <div className="referral-step-icon relative z-10 h-[52px] w-[52px] md:h-[60px] md:w-[60px] rounded-2xl bg-primary/5 ring-1 ring-primary/15 flex items-center justify-center text-primary/70 transition-colors duration-300 group-hover:bg-[hsl(var(--accent-orange)/0.08)] group-hover:ring-[hsl(var(--accent-orange)/0.3)] group-hover:text-[hsl(var(--accent-orange))]">
                            <Icon size={26} strokeWidth={1.25} />
                          </div>
                        </div>


                        <div className="min-w-0">
                          <span className="referral-step-num block text-xs font-semibold tabular-nums tracking-wide text-primary/40 transition-colors duration-300 group-hover:text-primary">

                            {step.number}
                          </span>
                          <h3 className="mt-1 text-[0.9375rem] md:text-base font-medium text-foreground">
                            {step.title}
                          </h3>
                          {step.note && (
                            <p className="mt-1.5 text-[0.8125rem] font-medium text-[hsl(var(--accent-orange))]">
                              {step.note}
                            </p>
                          )}
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
