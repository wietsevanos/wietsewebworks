export const OrangeWaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base layered navy gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(140deg,
            hsl(224, 64%, 14%) 0%,
            hsl(224, 64%, 19%) 25%,
            hsl(217, 63%, 27%) 55%,
            hsl(214, 57%, 39%) 85%,
            hsl(214, 47%, 46%) 100%
          )`,
        }}
      />

      {/* Deep navy shadow — top left */}
      <div
        className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4"
        style={{
          background: `radial-gradient(ellipse at center,
            hsla(224, 64%, 10%, 0.55) 0%,
            hsla(217, 63%, 22%, 0.28) 40%,
            transparent 70%
          )`,
          filter: 'blur(70px)',
        }}
      />

      {/* Mid-blue highlight — center */}
      <div
        className="absolute top-1/4 left-1/3 w-2/3 h-2/3"
        style={{
          background: `radial-gradient(ellipse at center,
            hsla(214, 60%, 55%, 0.32) 0%,
            hsla(214, 57%, 45%, 0.15) 45%,
            transparent 70%
          )`,
          filter: 'blur(80px)',
        }}
      />

      {/* Deeper navy — bottom right */}
      <div
        className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4"
        style={{
          background: `radial-gradient(ellipse at center,
            hsla(224, 64%, 12%, 0.6) 0%,
            hsla(224, 64%, 18%, 0.3) 40%,
            transparent 70%
          )`,
          filter: 'blur(70px)',
        }}
      />

      {/* Warm orange glow — right, brand accent */}
      <div
        className="absolute -top-16 -right-24 w-2/3 h-2/3"
        style={{
          background: `radial-gradient(ellipse at 75% 30%,
            hsla(24, 95%, 56%, 0.35) 0%,
            hsla(22, 96%, 65%, 0.18) 40%,
            transparent 65%
          )`,
          filter: 'blur(80px)',
        }}
      />

      {/* Soft orange spark — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2"
        style={{
          background: `radial-gradient(ellipse at 25% 80%,
            hsla(22, 96%, 65%, 0.22) 0%,
            hsla(24, 95%, 56%, 0.10) 45%,
            transparent 70%
          )`,
          filter: 'blur(70px)',
        }}
      />

      {/* Sharp orange highlight — subtle warm spark */}
      <div
        className="absolute top-1/3 right-1/4 w-1/3 h-1/3"
        style={{
          background: `radial-gradient(ellipse at center,
            hsla(24, 95%, 56%, 0.18) 0%,
            transparent 70%
          )`,
          filter: 'blur(60px)',
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
