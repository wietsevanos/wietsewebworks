import { Reveal } from "@/components/shared/Reveal";
import { ArrowRight } from "lucide-react";

export const MockupShowcase = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-mist">
      {/* Ambient blobs */}
      <div
        aria-hidden
        className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full bg-primary/[0.08] blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-24 w-[560px] h-[560px] rounded-full bg-accent-indigo/10 blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
          <Reveal>
            <p className="text-accent-indigo font-medium mb-4 text-sm tracking-wide uppercase">
              Hoe een website eruit kan zien
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight tracking-tight">
              Van eerste indruk naar eerste klant.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-muted-foreground leading-relaxed mt-5 text-[0.9375rem] md:text-base">
              Een indruk van wat een clean en professioneel gebouwde website
              voor uw bedrijf kan doen — rustig, modern en gemaakt om vertrouwen te wekken.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="relative group [perspective:1600px]">
            {/* Floating offset accent */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent-indigo translate-x-2 translate-y-3 opacity-90 blur-[2px] transition-all duration-700 ease-out group-hover:translate-x-4 group-hover:translate-y-5"
            />

            {/* Browser window */}
            <div className="relative rounded-2xl overflow-hidden bg-white ring-1 ring-black/5 shadow-[0_30px_80px_-30px_hsl(222_70%_24%/0.35)] transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:[transform:translateY(-8px)_rotateX(1.5deg)]">
              {/* Chrome bar */}
              <div className="flex items-center gap-3 px-4 py-2.5 bg-secondary border-b border-black/5">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 h-6 rounded-md bg-background/80 flex items-center justify-center px-3 text-[0.7rem] text-muted-foreground/80 font-medium truncate">
                  uwbedrijf.nl
                </div>
                <div className="w-6" />
              </div>

              {/* Fake site content */}
              <div className="relative bg-white">
                {/* Nav */}
                <div className="flex items-center justify-between px-6 md:px-10 py-4 md:py-5 border-b border-black/[0.04]">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-accent-indigo" />
                    <span className="text-[0.8rem] md:text-sm font-semibold tracking-tight text-foreground">
                      Uw&nbsp;Merk
                    </span>
                  </div>
                  <div className="hidden md:flex items-center gap-7">
                    {["Diensten", "Werk", "Over", "Contact"].map((l) => (
                      <span
                        key={l}
                        className="text-[0.78rem] font-medium text-foreground/60"
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                  <div className="h-7 md:h-8 px-3 md:px-4 rounded-full bg-foreground/90 text-white text-[0.7rem] md:text-[0.75rem] font-medium flex items-center">
                    Offerte
                  </div>
                </div>

                {/* Hero */}
                <div className="relative px-6 md:px-14 py-10 md:py-16 grid md:grid-cols-12 gap-8 md:gap-10 items-center overflow-hidden">
                  {/* soft gradient wash */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent-indigo/[0.06]"
                  />
                  <div className="md:col-span-6 relative">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[0.65rem] font-semibold tracking-wider uppercase mb-4">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      Nieuw
                    </div>
                    <div className="space-y-2.5">
                      <div className="h-3 md:h-4 w-[92%] rounded-full bg-foreground/85" />
                      <div className="h-3 md:h-4 w-[78%] rounded-full bg-foreground/85" />
                      <div className="h-3 md:h-4 w-[55%] rounded-full bg-foreground/25" />
                    </div>
                    <div className="mt-5 space-y-1.5 max-w-[85%]">
                      <div className="h-1.5 rounded-full bg-foreground/15" />
                      <div className="h-1.5 rounded-full bg-foreground/15 w-[85%]" />
                      <div className="h-1.5 rounded-full bg-foreground/15 w-[60%]" />
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="h-8 md:h-9 px-4 md:px-5 rounded-full bg-primary text-white text-[0.7rem] md:text-[0.75rem] font-medium flex items-center gap-1.5">
                        Aan de slag
                        <ArrowRight size={12} />
                      </div>
                      <div className="h-8 md:h-9 px-4 md:px-5 rounded-full border border-foreground/15 text-foreground/70 text-[0.7rem] md:text-[0.75rem] font-medium flex items-center">
                        Meer weten
                      </div>
                    </div>
                  </div>

                  {/* Hero visual placeholder */}
                  <div className="md:col-span-6 relative">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-primary via-accent-indigo to-primary-navy shadow-[0_20px_50px_-20px_hsl(222_70%_24%/0.4)]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(0_0%_100%/0.25),transparent_55%)]" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,hsl(186_80%_60%/0.35),transparent_50%)]" />
                      {/* floating tile */}
                      <div className="absolute left-4 bottom-4 md:left-6 md:bottom-6 bg-white/95 backdrop-blur rounded-lg px-3 py-2 md:px-4 md:py-2.5 shadow-lg flex items-center gap-2.5 animate-fade-up">
                        <span className="w-6 h-6 md:w-7 md:h-7 rounded-md bg-gradient-to-br from-accent-teal to-primary" />
                        <div className="space-y-1">
                          <div className="h-1.5 w-16 md:w-20 rounded-full bg-foreground/70" />
                          <div className="h-1 w-10 md:w-12 rounded-full bg-foreground/25" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content cards */}
                <div className="px-6 md:px-14 pb-10 md:pb-14 grid grid-cols-3 gap-3 md:gap-5">
                  {[
                    { dot: "bg-primary" },
                    { dot: "bg-accent-indigo" },
                    { dot: "bg-accent-teal" },
                  ].map((c, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-black/[0.06] bg-white p-3 md:p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <span className={`inline-block w-5 h-5 md:w-6 md:h-6 rounded-md ${c.dot} mb-2 md:mb-3`} />
                      <div className="space-y-1.5">
                        <div className="h-2 md:h-2.5 rounded-full bg-foreground/70 w-[80%]" />
                        <div className="h-1.5 rounded-full bg-foreground/15" />
                        <div className="h-1.5 rounded-full bg-foreground/15 w-[70%]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
