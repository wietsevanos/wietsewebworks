import { OrangeWaveBackground } from "./OrangeWaveBackground";

interface PageHeaderProps {
  label: string;
  title: string;
  titleMuted?: string;
  titleMutedClassName?: string;
  description: string;
  backgroundImage?: string;
}

export const PageHeader = ({ label, title, titleMuted, titleMutedClassName = "text-white/45", description, backgroundImage }: PageHeaderProps) => {
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
            {titleMuted && <> <span className={titleMutedClassName}>{titleMuted}</span></>}
          </h1>
          <p className="text-xl text-white/85 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
