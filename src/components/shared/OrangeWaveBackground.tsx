export const OrangeWaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base warm orange gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(145deg, 
            hsl(25, 85%, 45%) 0%, 
            hsl(22, 90%, 50%) 25%, 
            hsl(20, 85%, 42%) 50%, 
            hsl(18, 80%, 38%) 75%, 
            hsl(15, 75%, 32%) 100%
          )`
        }}
      />
      
      {/* Soft radial glow - top left */}
      <div 
        className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4"
        style={{
          background: `radial-gradient(ellipse at center, 
            hsla(28, 95%, 55%, 0.6) 0%, 
            hsla(25, 90%, 50%, 0.3) 30%, 
            transparent 70%
          )`,
          filter: 'blur(60px)',
        }}
      />
      
      {/* Soft radial glow - center */}
      <div 
        className="absolute top-1/4 left-1/3 w-2/3 h-2/3"
        style={{
          background: `radial-gradient(ellipse at center, 
            hsla(30, 100%, 58%, 0.4) 0%, 
            hsla(25, 90%, 52%, 0.2) 40%, 
            transparent 70%
          )`,
          filter: 'blur(80px)',
        }}
      />
      
      {/* Deep shadow - bottom right */}
      <div 
        className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4"
        style={{
          background: `radial-gradient(ellipse at center, 
            hsla(15, 70%, 25%, 0.5) 0%, 
            hsla(18, 75%, 30%, 0.3) 40%, 
            transparent 70%
          )`,
          filter: 'blur(60px)',
        }}
      />
      
      {/* Ambient warm glow - right side */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full"
        style={{
          background: `radial-gradient(ellipse at 80% 30%, 
            hsla(22, 85%, 48%, 0.35) 0%, 
            transparent 60%
          )`,
          filter: 'blur(50px)',
        }}
      />
      
      {/* Subtle depth - bottom left */}
      <div 
        className="absolute bottom-0 left-0 w-2/3 h-1/2"
        style={{
          background: `radial-gradient(ellipse at 20% 80%, 
            hsla(18, 80%, 35%, 0.4) 0%, 
            transparent 50%
          )`,
          filter: 'blur(70px)',
        }}
      />
      
      {/* Very subtle noise texture for premium feel */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
