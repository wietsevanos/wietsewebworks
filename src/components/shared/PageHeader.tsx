import { OrangeWaveBackground } from "./OrangeWaveBackground";

interface PageHeaderProps {
  label: string;
  title: string;
  description: string;
  backgroundImage?: string;
}

export const PageHeader = ({ label, title, description, backgroundImage }: PageHeaderProps) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Orange Wave Background - only show if no custom image */}
      {!backgroundImage && <OrangeWaveBackground />}
      
      {/* Background image when provided */}
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />
          {/* Light dark overlay only for text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/80 font-medium mb-4 text-sm tracking-wide uppercase">
            {label}
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-white/85 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
