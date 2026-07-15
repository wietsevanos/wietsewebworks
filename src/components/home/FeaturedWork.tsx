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
    className="group block"
  >
    <div className="relative">
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl bg-primary translate-x-1 translate-y-1 transition-all duration-500 ease-out group-hover:translate-x-2 group-hover:translate-y-2 group-hover:bg-primary-deep"
      />
      <div className="relative rounded-2xl overflow-hidden bg-secondary/60 ring-1 ring-black/5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 ease-out group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 group-hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.25)]">
        <div className="flex items-center gap-3 px-4 py-2.5 bg-secondary border-b border-black/5">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 h-6 rounded-md bg-background/80 flex items-center justify-center px-3 text-[0.7rem] text-muted-foreground/80 font-medium truncate">
            {getDomain(project.url)}
          </div>
          <div className="w-6" />
        </div>
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

    <div className="pt-6">
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
    </div>
  </a>
);

export const FeaturedWork = () => {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <Reveal>
            <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase">
              Recent werk
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-5 leading-tight">
              Een greep uit recente projecten
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <FeaturedCard project={p} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="flex justify-center mt-14 md:mt-16">
            <Link
              to="/werk"
              className="inline-flex items-center gap-2 text-primary font-medium text-[0.9375rem] border-b border-primary/40 pb-1 transition-all duration-200 hover:gap-3 hover:border-primary"
            >
              Bekijk alle projecten
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
