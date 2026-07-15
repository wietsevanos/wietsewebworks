import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

import tcforange from "@/assets/portfolio-tcforange.jpg.asset.json";
import telefoonwereld from "@/assets/portfolio-telefoonwereld.jpg.asset.json";
import rogerstorm from "@/assets/portfolio-rogerstorm.jpg.asset.json";

type FeaturedProject = {
  name: string;
  url: string;
  image: string;
  tag: string;
  short: string;
};

const featured: FeaturedProject[] = [
  {
    name: "TCF Orange",
    url: "https://tcforange.com/",
    image: tcforange.url,
    tag: "Finance",
    short: "Financing en Risk Management voor commodity traders",
  },
  {
    name: "Telefoonwereld Haarlem",
    url: "https://telefoonwereldhaarlem.nl/",
    image: telefoonwereld.url,
    tag: "Retail",
    short: "Reparatie en verkoop van smartphones in Haarlem",
  },
  {
    name: "Roger & Storm",
    url: "https://www.rogerenstorm.nl/",
    image: rogerstorm.url,
    tag: "Beauty",
    short: "Professionele hair salon met een moderne, elegante look",
  },
];

const getDomain = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");

const FeaturedCard = ({ project }: { project: FeaturedProject }) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col h-full"
  >
    {/* Mockup wrapper with offset accent */}
    <div className="relative [perspective:1200px]">
      {/* Offset accent shadow — subtiel */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl bg-primary/25 translate-x-0.5 translate-y-0.5 blur-[2px] transition-all duration-500 ease-out group-hover:translate-x-1.5 group-hover:translate-y-1.5 group-hover:bg-primary/40"
      />

      {/* Browser mockup — glassy */}
      <div className="relative rounded-2xl overflow-hidden glass ring-1 ring-white/40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:-rotate-[0.6deg] group-hover:scale-[1.015] group-hover:shadow-[0_30px_60px_-25px_hsl(217_63%_27%/0.35)]">
        {/* Chrome bar */}
        <div className="flex items-center gap-3 px-4 py-2.5 bg-white/40 backdrop-blur-md border-b border-white/40">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 h-6 rounded-md bg-white/60 backdrop-blur-sm flex items-center justify-center px-3 text-[0.7rem] text-muted-foreground/80 font-medium truncate">
            {getDomain(project.url)}
          </div>
          <div className="w-6" />
        </div>

        {/* Screenshot */}
        <div className="relative aspect-[16/10] overflow-hidden bg-background">
          <img
            src={project.image}
            alt={`Website van ${project.name}`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 shadow-lg">
            <ArrowUpRight size={16} className="text-foreground" />
          </div>
        </div>
      </div>
    </div>

    {/* Meta below */}
    <div className="pt-6 flex flex-col flex-1">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className="text-[0.7rem] font-semibold tracking-wider uppercase text-primary">
          {project.tag}
        </span>
      </div>
      <h3 className="text-2xl font-semibold text-foreground mb-2 tracking-tight transition-colors duration-200 group-hover:text-primary">
        {project.name}
      </h3>
      <p className="text-muted-foreground text-[0.9375rem] leading-relaxed">
        {project.short}
      </p>
      <span className="inline-flex items-center gap-1.5 mt-auto pt-4 text-primary font-medium text-sm w-fit border-b border-primary/40 pb-0.5 transition-all duration-200 group-hover:gap-2.5 group-hover:border-primary">
        Bekijk de live site
        <ArrowUpRight size={15} />
      </span>
    </div>
  </a>
);

export const FeaturedWork = () => {
  return (
    <section className="relative py-24 md:py-32 surface-aurora overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-40 right-0 w-[36rem] h-[36rem] rounded-full bg-[hsl(var(--brand-light))]/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-20 w-[32rem] h-[32rem] rounded-full bg-[hsl(var(--accent-orange))]/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase">
                Recent werk
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-5 leading-tight">
                Een greep uit{" "}
                <span className="text-foreground/40">recente projecten</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Van financiële dienstverlening tot lokale retail en beauty, elk
                project op maat ontworpen en gebouwd met aandacht voor uitstraling
                en resultaat.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="md:shrink-0">
            <Link
              to="/werk"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass text-primary font-medium text-[0.9375rem] border border-primary/25 shadow-sm backdrop-blur transition-all duration-300 hover:gap-3 hover:border-primary/50 hover:shadow-md"
            >
              Bekijk alle projecten
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((p, i) => (
            <Reveal key={p.name} delay={i * 100} className="h-full">
              <FeaturedCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
