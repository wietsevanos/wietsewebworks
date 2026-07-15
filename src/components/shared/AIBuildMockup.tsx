import { useEffect, useState, CSSProperties } from "react";
import { Sparkles } from "lucide-react";

const LOOP_MS = 7500;
const d = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

/**
 * Premium glassmorphism mockup that visualises an AI-assisted
 * website being assembled in real time. Loops seamlessly.
 */
export const AIBuildMockup = () => {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), LOOP_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full [perspective:1600px]">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/25 via-accent-indigo/20 to-accent-turquoise/25 blur-2xl opacity-70"
      />

      {/* Floating offset accent */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-glow to-accent-turquoise translate-x-2 translate-y-3 opacity-60 blur-[3px]"
      />

      {/* Glass browser */}
      <div className="relative w-full rounded-2xl overflow-hidden bg-white/[0.06] backdrop-blur-xl ring-1 ring-white/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]">
        {/* Chrome bar */}
        <div className="flex items-center gap-3 px-4 py-2.5 bg-white/[0.05] border-b border-white/10">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80" />
          </div>
          <div className="flex-1 h-6 rounded-md bg-white/10 flex items-center justify-center px-3 text-[0.7rem] text-white/70 font-medium truncate">
            uwbedrijf.nl
          </div>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/10 text-[0.6rem] font-semibold tracking-wider uppercase text-white/85">
            <Sparkles size={10} className="text-primary-glow" />
            AI
          </div>
        </div>

        {/* Canvas — rebuilds every cycle */}
        <div key={tick} className="relative bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-[#0b1220]">
          {/* Data stream lines */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(90deg, transparent 0%, hsl(var(--primary-glow)/0.12) 50%, transparent 100%)",
              backgroundSize: "200% 100%",
              animation: "aiStreamDrift 6s linear infinite",
            }}
          />

          {/* Grid overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          {/* Nav */}
          <div className="relative flex items-center justify-between px-5 md:px-8 py-3.5 md:py-4 border-b border-white/10">
            <div className="flex items-center gap-2 ai-anim-l" style={d(80)}>
              <span className="w-5 h-5 rounded-md bg-gradient-to-br from-primary to-accent-indigo" />
              <span className="text-[0.75rem] font-semibold tracking-tight text-white/90">
                Uw&nbsp;Merk
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-5">
              {["Diensten", "Werk", "Over", "Contact"].map((l, i) => (
                <span
                  key={l}
                  className="text-[0.7rem] font-medium text-white/55 ai-anim"
                  style={d(180 + i * 70)}
                >
                  {l}
                </span>
              ))}
            </div>
            <div
              className="h-6 px-3 rounded-full bg-primary/90 text-white text-[0.65rem] font-medium flex items-center ai-anim-r"
              style={d(520)}
            >
              Offerte
            </div>
          </div>

          {/* Hero band */}
          <div className="relative aspect-[16/6] overflow-hidden">
            {/* Aurora */}
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary-glow)/0.4),transparent_55%),radial-gradient(circle_at_80%_70%,hsl(186_80%_60%/0.35),transparent_55%),radial-gradient(circle_at_60%_10%,hsl(262_70%_65%/0.3),transparent_55%)]"
              style={{
                backgroundSize: "180% 180%, 200% 200%, 220% 220%",
                animation: "heroGradientDrift 14s ease-in-out infinite",
              }}
            />

            {/* Connection lines pulse */}
            <svg
              aria-hidden
              className="absolute inset-0 w-full h-full opacity-70"
              preserveAspectRatio="none"
              viewBox="0 0 400 150"
            >
              <defs>
                <linearGradient id="aiLine" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="hsl(var(--primary-glow))" stopOpacity="0" />
                  <stop offset="50%" stopColor="hsl(var(--primary-glow))" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="hsl(var(--primary-glow))" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[30, 70, 110].map((y, i) => (
                <line
                  key={y}
                  x1="0"
                  x2="400"
                  y1={y}
                  y2={y}
                  stroke="url(#aiLine)"
                  strokeWidth="0.6"
                  style={{
                    animation: `aiPulse 3.2s ease-in-out ${i * 0.6}s infinite`,
                  }}
                />
              ))}
            </svg>

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10 max-w-[62%]">
              <div
                className="inline-flex w-fit items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/15 backdrop-blur text-white text-[0.55rem] font-semibold tracking-wider uppercase mb-2.5 ai-anim"
                style={d(780)}
              >
                <Sparkles size={8} />
                AI-ondersteund
              </div>
              <div className="space-y-1.5">
                <div className="h-2.5 w-[85%] rounded-full bg-white/90 ai-bar" style={d(900)} />
                <div className="h-2.5 w-[65%] rounded-full bg-white/90 ai-bar" style={d(1030)} />
              </div>
              <div className="mt-3 space-y-1 max-w-[75%]">
                <div className="h-1 rounded-full bg-white/40 ai-bar" style={d(1220)} />
                <div className="h-1 rounded-full bg-white/40 w-[80%] ai-bar" style={d(1320)} />
              </div>
            </div>

            {/* Floating glass card */}
            <div
              className="absolute right-4 bottom-4 rounded-lg px-2.5 py-1.5 bg-white/15 backdrop-blur-md ring-1 ring-white/25 shadow-lg flex items-center gap-2 ai-anim-pop"
              style={d(1500)}
            >
              <span className="w-5 h-5 rounded bg-gradient-to-br from-accent-teal to-primary" />
              <div className="space-y-1">
                <div className="h-1.5 w-14 rounded-full bg-white/80" />
                <div className="h-1 w-9 rounded-full bg-white/40" />
              </div>
            </div>
          </div>

          {/* Section below */}
          <div className="relative px-5 md:px-8 py-6 md:py-7">
            <div className="flex items-end justify-between mb-4">
              <div className="space-y-1.5">
                <div className="h-2 w-24 rounded-full bg-white/80 ai-bar" style={d(1800)} />
                <div className="h-1.5 w-40 rounded-full bg-white/25 ai-bar" style={d(1920)} />
              </div>
              <div className="h-1 w-12 rounded-full bg-primary-glow/70 hidden md:block ai-bar" style={d(2040)} />
            </div>

            <div className="grid grid-cols-3 gap-2.5 md:gap-3">
              {[
                "from-primary/60 to-accent-indigo/50",
                "from-accent-indigo/60 to-accent-turquoise/50",
                "from-accent-teal/60 to-primary/50",
              ].map((grad, i) => (
                <div
                  key={i}
                  className="relative rounded-lg bg-white/[0.06] backdrop-blur-md ring-1 ring-white/10 p-2.5 md:p-3 ai-anim"
                  style={d(2200 + i * 160)}
                >
                  <span className={`inline-block w-4 h-4 rounded bg-gradient-to-br ${grad} mb-1.5`} />
                  <div className="space-y-1">
                    <div className="h-1.5 rounded-full bg-white/75 w-[80%] ai-bar" style={d(2400 + i * 160)} />
                    <div className="h-1 rounded-full bg-white/25 ai-bar" style={d(2500 + i * 160)} />
                    <div className="h-1 rounded-full bg-white/25 w-[70%] ai-bar" style={d(2600 + i * 160)} />
                  </div>
                  {/* subtle scan light */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-lg overflow-hidden"
                  >
                    <div
                      className="absolute -inset-y-2 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12"
                      style={{
                        animation: `aiScan 4.5s ease-in-out ${i * 0.6}s infinite`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assembly cursor */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-0 z-20"
            style={{
              animation: `aiCursor ${LOOP_MS}ms cubic-bezier(0.65, 0.05, 0.36, 1) infinite`,
              filter: "drop-shadow(0 4px 10px hsl(var(--primary-glow)/0.6))",
            }}
          >
            <span className="block w-2.5 h-2.5 rounded-full bg-primary-glow ring-2 ring-white/60" />
          </div>
        </div>
      </div>
    </div>
  );
};
