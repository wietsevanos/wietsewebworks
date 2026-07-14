import { OrangeWaveBackground } from "./OrangeWaveBackground";

interface PageHeaderProps {
  label: string;
  title: string;
  description: string;
  backgroundImage?: string;
}

export const PageHeader = ({ label, title, description, backgroundImage }: PageHeaderProps) => {
  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      {!backgroundImage && <OrangeWaveBackground />}

      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[1500ms] ease-out"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </>
      )}

      {/* soft focal glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full blur-3xl animate-soft-pulse"
        style={{ background: "radial-gradient(circle at center, hsla(205,100%,65%,0.25), transparent 65%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/85 font-medium mb-4 text-sm tracking-[0.14em] uppercase animate-fade-up">
            {label}
          </p>
          <h1
            className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight tracking-tight animate-fade-up"
            style={{ animationDelay: "0.05s" }}
          >
            {title}
          </h1>
          <p
            className="text-xl text-white/85 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* smooth transition into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
};
