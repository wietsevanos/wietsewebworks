export const OrangeWaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base layered blue gradient — deep navy to bright sky */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(140deg,
            hsl(226, 60%, 18%) 0%,
            hsl(222, 70%, 24%) 22%,
            hsl(215, 85%, 38%) 48%,
            hsl(210, 90%, 48%) 72%,
            hsl(200, 95%, 58%) 100%
          )`,
        }}
      />

      {/* Indigo glow - top left */}
      <div
        className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4"
        style={{
          background: `radial-gradient(ellipse at center,
            hsla(240, 70%, 45%, 0.45) 0%,
            hsla(228, 75%, 40%, 0.25) 35%,
            transparent 70%
          )`,
          filter: 'blur(70px)',
        }}
      />

      {/* Sky highlight - center */}
      <div
        className="absolute top-1/4 left-1/3 w-2/3 h-2/3"
        style={{
          background: `radial-gradient(ellipse at center,
            hsla(200, 100%, 62%, 0.35) 0%,
            hsla(210, 95%, 55%, 0.18) 40%,
            transparent 70%
          )`,
          filter: 'blur(80px)',
        }}
      />

      {/* Deep navy shadow - bottom right */}
      <div
        className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4"
        style={{
          background: `radial-gradient(ellipse at center,
            hsla(228, 65%, 15%, 0.55) 0%,
            hsla(224, 60%, 20%, 0.3) 40%,
            transparent 70%
          )`,
          filter: 'blur(70px)',
        }}
      />

      {/* Turquoise whisper - right */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full"
        style={{
          background: `radial-gradient(ellipse at 80% 25%,
            hsla(186, 80%, 55%, 0.22) 0%,
            transparent 60%
          )`,
          filter: 'blur(60px)',
        }}
      />

      {/* Violet accent - bottom left */}
      <div
        className="absolute bottom-0 left-0 w-2/3 h-1/2"
        style={{
          background: `radial-gradient(ellipse at 20% 80%,
            hsla(255, 55%, 45%, 0.28) 0%,
            transparent 55%
          )`,
          filter: 'blur(70px)',
        }}
      />

      {/* Copper highlight - subtle warm spark */}
      <div
        className="absolute top-1/3 right-1/4 w-1/3 h-1/3"
        style={{
          background: `radial-gradient(ellipse at center,
            hsla(22, 90%, 60%, 0.12) 0%,
            transparent 70%
          )`,
          filter: 'blur(80px)',
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
